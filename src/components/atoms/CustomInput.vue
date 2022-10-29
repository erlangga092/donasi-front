<template>
  <div class="mb-5">
    <label class="mt-2">{{ label }}</label>
    <input
      :type="type"
      class="w-full p-5 mt-2 placeholder-gray-600 bg-gray-200 border border-gray-200 rounded shadow-sm appearance-none h-7 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "modelValue", "placeholder", "type"],
  emits: ["update:modelValue"],
};
</script>
