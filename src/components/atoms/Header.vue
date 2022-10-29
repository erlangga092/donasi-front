<template>
  <header>
    <div class="fixed top-0 z-10 text-center text-white bg-gray-700 inset-x-0">
      <div class="container grid grid-cols-10 p-3 mx-auto sm:w-full md:w-5/12">
        <div
          class="w-10 h-10 col-span-2 p-1 mr-3 bg-white rounded-full shadow-sm"
        ></div>
        <div class="col-span-8">
          <input
            type="text"
            class="w-full p-5 placeholder-white bg-gray-500 rounded-full shadow-md appearance-none h-7 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600"
            placeholder="Cari yang ingin kamu bantu..."
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
