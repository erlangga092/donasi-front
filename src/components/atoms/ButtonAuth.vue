<template>
  <button
    class="inline-block w-full px-3 py-1 text-xl text-white bg-gray-700 rounded-md shadow-md focus:outline-none focus:bg-gray-900"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonAuth",
  props: ["text"],
};
</script>
