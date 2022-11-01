<template>
  <div class="py-20">
    <div class="container grid grid-cols-1 p-5 mx-auto sm:w-full md:w-5/12">
      <div v-if="errorMessage">
        <div class="my-5">
          <div
            class="px-5 py-3 rounded-md shadow-sm bg-red-300 text-gray-700 text-lg"
          >
            {{ errorMessage }}
          </div>
        </div>
      </div>

      <form @submit.prevent="login">
        <div class="p-5 bg-white rounded-md shadow-md">
          <div>
            <div class="text-xl">MASUK AKUN</div>
            <div class="mt-3 mb-2 border border-gray-200"></div>
          </div>
          <CustomInputVue
            label="Alamat Email"
            placeholder="Alamat Email"
            type="email"
            :modelValue="user.email"
            @update:modelValue="(newValue) => (user.email = newValue)"
          />
          <CustomInputVue
            label="Password"
            placeholder="Password"
            type="password"
            :modelValue="user.password"
            @update:modelValue="(newValue) => (user.password = newValue)"
          />

          <div>
            <ButtonAuthVue text="MASUK" />
          </div>

          <div class="mt-5 text-center">
            Belum punya akun ?
            <router-link
              :to="{ name: 'register' }"
              class="text-blue-600 underline"
            >
              Daftar sekarang !
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import ButtonAuthVue from "../../components/atoms/ButtonAuth.vue";
import CustomInputVue from "../../components/atoms/CustomInput.vue";
import { useAuthStore } from "../../main";

export default {
  name: "Login",
  components: {
    CustomInputVue,
    ButtonAuthVue,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const validation = ref([]);
    let errorMessage = ref("");
    const user = reactive({
      email: "",
      password: "",
    });

    const login = async () => {
      try {
        await authStore.login(user);
        router.push({ name: "home" });
      } catch (error) {
        validation.value = error;
        if (validation.value.email) {
          errorMessage.value = validation.value.email[0];
        }
        if (validation.value.password) {
          errorMessage.value = validation.value.password[0];
        }
        if (validation.value.message) {
          errorMessage.value = validation.value.message;
        }
      }
    };

    onMounted(() => {
      if (authStore.isLoggedIn) {
        router.push({ name: "home" });
      }
    });

    return {
      user,
      validation,
      login,
      errorMessage,
    };
  },
};
</script>
