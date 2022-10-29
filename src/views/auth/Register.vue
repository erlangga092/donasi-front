<template>
  <div class="py-20">
    <div class="container grid grid-cols-1 p-5 mx-auto sm:w-full md:w-5/12">
      <form @submit.prevent="register">
        <div class="p-5 bg-white rounded-md shadow-md">
          <div>
            <div class="text-xl">REGISTER AKUN</div>
            <div class="mt-3 mb-2 border border-gray-200"></div>
          </div>
          <CustomInputVue
            label="Nama Lengkap"
            placeholder="Nama Lengkap"
            type="text"
            :modelValue="user.name"
            @update:modelValue="(newValue) => (user.name = newValue)"
          />
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
          <CustomInputVue
            label="Konfirmasi Password"
            placeholder="Konfirmasi Password"
            type="password"
            :modelValue="user.password_confirmation"
            @update:modelValue="
              (newValue) => (user.password_confirmation = newValue)
            "
          />
          <ButtonAuthVue text="REGISTER" />
          <div class="mt-5 text-center">
            Sudah punya akun ?
            <router-link :to="{ name: 'login' }" class="text-blue-600 underline"
              >Masuk disini !</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import ButtonAuthVue from "../../components/atoms/ButtonAuth.vue";
import CustomInputVue from "../../components/atoms/CustomInput.vue";
import { useAuthStore } from "../../main";

export default {
  name: "Register",
  components: {
    CustomInputVue,
    ButtonAuthVue,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const validation = ref([]);
    const user = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    const register = async () => {
      try {
        await authStore.register(user);
        router.push({ name: "dashboard" });
        window.alert("Login Berhasil!");
      } catch (error) {
        validation.value = error;
        if (validation.value.email) {
          window.alert(`${validation.value.email[0]}`);
        }
        if (validation.value.password) {
          window.alert(`${validation.value.password[0]}`);
        }
        if (validation.value.message) {
          window.alert(`${validation.value.message}`);
        }
      }
    };

    return {
      user,
      validation,
      register,
    };
  },
};
</script>
