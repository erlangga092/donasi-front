<template>
  <div v-if="categories.length">
    <div class="grid items-center grid-cols-4 gap-4 mt-5 text-center md:gap-4">
      <div
        v-for="category in categories"
        :key="category.id"
        class="col-span-2 p-4 text-xs text-center bg-white rounded-md shadow-md md:col-span-2 lg:col-span-1"
      >
        <router-link :to="{ name: 'home' }">
          <div>
            <img
              :src="category.image"
              width="40"
              alt=""
              class="inline-block mb-2"
            />
          </div>
          {{ category.name.toUpperCase() }}
        </router-link>
      </div>
      <div
        class="col-span-2 p-4 text-xs text-center bg-white rounded-md shadow-md md:col-span-2 lg:col-span-1"
      >
        <router-link :to="{ name: 'home' }">
          <div>
            <img
              src="../../assets/images/menu.png"
              width="40"
              class="inline-block mb-2"
            />
          </div>
          LAINNYA
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="grid items-center grid-cols-4 gap-4 mt-5 text-center md:gap-4">
      <div
        v-for="index in 4"
        :key="index"
        class="text-xs text-center bg-white rounded-md shadow-md sm:col-span-2 md:col-span-2 lg:col-span-2"
      >
        <ContentLoader />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { ContentLoader } from "vue-content-loader";
import { useCategoryStore } from "../../store/module/category";

export default {
  name: "CategoryHome",
  components: {
    ContentLoader,
  },
  setup() {
    const categoryStore = useCategoryStore();

    onMounted(() => {
      categoryStore.getCategoryHome();
    });

    const categories = computed(() => {
      return categoryStore.categories;
    });

    return {
      categories,
    };
  },
};
</script>
