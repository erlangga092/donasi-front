import { createPinia, defineStore } from "pinia";
import { createApp } from "vue";
import API from "./api/Api";
import App from "./App.vue";
import "./index.css";
import router from "./router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: window.localStorage.getItem("token") || "",
    user: JSON.parse(window.localStorage.getItem("user")) || {},
  }),
  getters: {
    currentUser: (state) => state.user,
    isLoggedIn: (state) => state.token,
  },
  actions: {
    async login(user) {
      try {
        const response = await API.post("/login", user);
        const { token, data } = response.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(data));

        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        this.token = token;
        this.user = data;
      } catch (error) {
        window.localStorage.removeItem("token");
        throw error.response.data;
      }
    },
    async register(user) {
      try {
        const response = await API.post("/register", user);
        const { token, data } = response.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(data));

        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        this.token = token;
        this.user = data;
      } catch (error) {
        window.localStorage.removeItem("token");
        throw error.response.data;
      }
    },
    async getUser() {
      try {
        const token = window.localStorage.getItem("token");
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await API.get("/user");
        this.user = response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    logout() {
      try {
        this.user = {};
        this.token = "";

        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");

        delete API.defaults.headers.common["Authorization"];
      } catch (error) {
        throw error;
      }
    },
  },
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
