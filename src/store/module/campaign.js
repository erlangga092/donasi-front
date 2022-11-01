import { defineStore } from "pinia";
import API from "../../api/Api";

export const useCampaignStore = defineStore("campaign", {
  state: () => ({
    campaigns: [],
    nextExists: false,
    nextPage: 0,
    campaign: {},
    user: {},
    sumDonation: {},
    sumDonations: [],
  }),
  actions: {
    async getCampaign() {
      try {
        const response = await API.get("/campaign");
        this.campaigns = response.data.data.data;
        if (response.data.data.current_page < response.data.data.last_page) {
          this.nextExists = true;
          this.nextPage = response.data.data.current_page + 1;
        } else {
          this.nextExists = false;
        }
      } catch (error) {
        throw error.response.data;
      }
    },
    async getLoadMore(next) {
      try {
        const response = await API.get(`/campaign?page=${next}`);
        response.data.data.data.forEach((v) => {
          this.campaigns.push(v);
        });

        if (response.data.data.current_page < response.data.data.last_page) {
          this.nextExists = true;
          this.nextPage = response.data.data.current_page + 1;
        } else {
          this.nextExists = false;
        }
      } catch (error) {
        throw error.response.data;
      }
    },
  },
});
