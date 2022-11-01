import { defineStore } from "pinia";
import API from "../../api/Api";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    category: {},
    campaignCategory: [],
  }),
  actions: {
    async getCategoryHome() {
      try {
        const response = await API.get("/category-home");
        this.categories = response.data.data;
      } catch (err) {
        throw err.response.data;
      }
    },
    async getCategory() {
      try {
        const response = await API.get("/category");
        this.categories = response.data.data.data;
      } catch (err) {
        throw err.response.data;
      }
    },
    async getDetailCategory(slug) {
      try {
        const response = await API.get(`/category/${slug}`);
        this.category = response.data.data;
        this.campaignCategory = response.data.data.campaigns;
      } catch (err) {
        throw err.response.data;
      }
    },
  },
});
