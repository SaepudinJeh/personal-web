<template>
  <nav class="sticky top-0 flex justify-between items-center px-6 py-5">
    <div class="text-lg font-bold text-blue-600">
      <h1>My Logo</h1>
    </div>
    <div class="md:block hidden items-center">
      <a href="#">Home</a>
      <a href="#">Project</a>
      <a href="#">Galery</a>
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