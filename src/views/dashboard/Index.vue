<template>
  <div class="py-20">
    <div class="container grid grid-cols-1 p-3 mx-auto sm:w-full md:w-5/12">
      <div class="p-5 mb-5 bg-white rounded-md shadow-md">
        <div class="grid items-center grid-cols-1 gap-4 md:grid-cols-12">
          <div class="col-span-1 md:col-span-2">
            <img :src="user.avatar" alt="" class="rounded-full w-30 h-30" />
          </div>
          <div class="col-span-1 md:col-span-6">
            <div class="text-base font-bold">
              {{ user.name }}
            </div>
            <div class="mt-1">
              <a
                href=""
                class="px-3 py-1 text-white uppercase bg-gray-700 rounded shadow-md"
                >Edit Profile</a
              >
            </div>
          </div>
        </div>

        <div class="mt-3 mb-2 border border-gray-200"></div>

        <router-link :to="{ name: 'login' }">
          <div
            class="grid grid-cols-5 gap-4 p-3 mb-3 bg-gray-300 rounded-md shadow-sm"
          >
            <div class="col-span-5">
              <i class="fa fa-heart mr-1" aria-hidden="true"></i> Donasi Saya
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'login' }">
          <div
            class="grid grid-cols-5 gap-4 p-3 mb-3 bg-gray-300 rounded-md shadow-sm"
          >
            <div class="col-span-5">
              <i class="fa fa-user-circle mr-1" aria-hidden="true"></i> Profile
              Saya
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'login' }">
          <div
            class="grid grid-cols-5 gap-4 p-3 mb-3 bg-gray-300 rounded-md shadow-sm"
          >
            <div class="col-span-5">
              <i class="fa fa-key mr-1" aria-hidden="true"></i> Ubah Password
            </div>
          </div>
        </router-link>

        <a @click="logout" class="cursor-pointer">
          <div
            class="grid grid-cols-5 gap-4 p-3 mb-3 bg-gray-300 rounded-md shadow-sm"
          >
            <div class="col-span-5">
              <i class="fa fa-sign-out-alt mr-1" aria-hidden="true"></i> Logout
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../main";

export default {
  name: "dashboard",
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const user = computed(() => {
      return authStore.user;
    });

    const logout = () => {
      authStore.logout();
      router.push({ name: "login" });
    };

    return {
      user,
      logout,
    };
  },
};
</script>
