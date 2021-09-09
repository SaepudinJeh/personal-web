<template>
  <nav class="sticky top-0 flex justify-between items-center px-6 lg:px-10 py-5">
    <div class="text-lg md:text-xl font-bold text-blue-600">
      <a href="/">My Logo</a>
    </div>
    <div class="md:block hidden items-center text-lg text-gray-600">
      <a href="#" class="px-6 font-medium py-2 hover:bg-blue-50 rounded-lg">Home</a>
      <a href="#" class="px-6 font-medium py-2 hover:bg-blue-50 rounded-lg">Project</a>
      <a href="#" class="px-6 font-medium py-2 hover:bg-blue-50 rounded-lg">Galery</a>
    </div>
    <div class="md:hidden">
      <button @click="activeSidebar" name="button sidemenu">
        <span class="iconify text-3xl" data-icon="system-uicons:menu-hamburger"></span>
      </button>
    </div>

    <sidebar-menu v-if="isNavActive" />
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore();
  import SidebarMenu from './SidebarMenu.vue'

  const isNavActive = computed(() => {
    return store.state.isNavActive;
  })

  const activeSidebar = (() => {
    store.commit('navActive')
  })

  console.log(isNavActive);
</script>