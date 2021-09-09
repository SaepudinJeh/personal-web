<template>
  <div class="absolute z-10 top-0 bg-white right-0 w-2/3 sm:w-1/2 shadow min-h-screen">
    <button @click="closeNavbar" class="absolute top-6 right-8" name="button close sidebar menu">
      <span class="iconify text-2xl text-gray-600" data-icon="akar-icons:circle-x"></span>
    </button>

    <div class="mt-20 flex flex-col">
      <a href="#" class="hover:bg-blue-200 py-3 px-5 mx-6 rounded-full bg-gray-100 mt-3">Home</a>
      <a href="#" class="hover:bg-blue-200 py-3 px-5 mx-6 rounded-full bg-gray-100 mt-3">Project</a>
      <a href="#" class="hover:bg-blue-200 py-3 px-5 mx-6 rounded-full bg-gray-100 mt-3">Galery</a>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'

  const store = useStore()

  const closeNavbar = (() => {
    store.commit('navActive');
  })
</script>