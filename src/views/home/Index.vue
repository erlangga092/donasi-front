<template>
  <div class="py-20">
    <div class="container grid grid-cols-1 p-3 mx-auto sm:w-full md:w-5/12">
      <div class="grid grid-cols-1 p-1 text-sm bg-white rounded shadow-md">
        <SliderVue />
      </div>

      <CategoryHomeVue />

      <div v-if="campaigns.length > 0">
        <div
          class="grid grid-cols-4 gap-4 mt-5"
          v-for="campaign in campaigns"
          :key="campaign.id"
        >
          <HomeCardVue :campaign="campaign" />
        </div>
      </div>
      <div v-else>
        <div
          v-for="index in 4"
          class="grid grid-cols-1 p-3 my-4 text-sm bg-white rounded shadow-md"
        >
          <FacebookLoader class="h-24" />
        </div>
      </div>
    </div>

    <div class="my-4 text-center" v-show="nextExists">
      <button
        @click.prevent="loadMore"
        class="p-2 px-3 text-white bg-gray-700 rounded-md shadow-md cursor-pointer focus:outline-none focus:bg-gray-900"
      >
        LIHAT SEMUA <i class="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { FacebookLoader } from "vue-content-loader";
import HomeCardVue from "../../components/atoms/HomeCard.vue";
import SliderVue from "../../components/atoms/Slider.vue";
import mixinsVue from "../../mixins";
import { useCampaignStore } from "../../store/module/campaign";
import CategoryHomeVue from "../../components/atoms/CategoryHome.vue";

export default {
  name: "Home",
  mixins: [mixinsVue],
  components: {
    HomeCardVue,
    FacebookLoader,
    SliderVue,
    CategoryHomeVue,
  },
  setup() {
    const campaignStore = useCampaignStore();
    onMounted(() => {
      campaignStore.getCampaign();
    });

    const campaigns = computed(() => {
      return campaignStore.campaigns;
    });

    const nextExists = computed(() => {
      return campaignStore.nextExists;
    });

    const nextPage = computed(() => {
      return campaignStore.nextPage;
    });

    const loadMore = async () => {
      await campaignStore.getLoadMore(nextPage.value);
    };

    return {
      campaigns,
      nextExists,
      nextPage,
      loadMore,
    };
  },
};
</script>
