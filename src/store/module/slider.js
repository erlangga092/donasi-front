import { defineStore } from "pinia";
import API from "../../api/Api";

export const useSliderStore = defineStore("slider", {
  state: () => ({
    sliders: [],
  }),
  actions: {
    async getSlider() {
      try {
        const response = await API.get("/slider");
        this.sliders = response.data.data;
      } catch (err) {
        throw err.response.data;
      }
    },
  },
});
