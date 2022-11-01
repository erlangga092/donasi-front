<template>
  <div class="col-span-4">
    <div class="p-2 bg-white rounded-md shadow-md h-full">
      <div class="md:flex rounded-xl md:p-0">
        <img
          :src="campaign.image"
          class="object-cover w-full rounded h-34 md:w-56"
          width="384"
          height="512"
        />
        <div class="w-full p-5 pt-6 space-y-4 text-center md:p-3 md:text-left">
          <router-link :to="{ name: 'dashboard' }">
            <p class="text-sm font-semibold">
              {{ campaign.title }}
            </p>
          </router-link>
          <div class="font-medium">
            <div class="mt-3 text-xs text-gray-500">
              {{ campaign.user.name }}
            </div>
            <div v-if="campaign.sum_donation > 0"></div>
            <div v-else>
              <div class="relative pt-1">
                <div
                  class="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded"
                >
                  <div
                    :style="{
                      width: percentage(0, campaign.target_donation) + '%',
                    }"
                    class="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
                  ></div>
                </div>
              </div>
              <p class="text-xs text-gray-500">
                <span class="font-bold text-blue-400">Rp. 0 </span> terkumpul
                dari
                <span class="font-bold"
                  >Rp. {{ formatPrice(campaign.target_donation) }}</span
                >
              </p>
            </div>
            <div class="mt-3 text-xs">
              <strong>{{ countDay(campaign.max_date) }}</strong> hari lagi
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixinsVue from "../../mixins";

export default {
  props: ["campaign"],
  mixins: [mixinsVue],
};
</script>
