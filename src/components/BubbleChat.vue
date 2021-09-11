<template>
  <section class="fixed right-9 bottom-12">
    <div class="relative">
      <button @click="isButtonMessageActive" class="w-14 h-14 bg-blue-500 hover:bg-blue-600 shadow-lg rounded-full" name="button chat costumer servis">
        <span class="iconify mx-auto text-white text-2xl" data-icon="bx:bxs-message-square-dots"></span>
      </button>
      
      <span v-if="isNotifMessage" class="absolute top-1 right-0 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-700 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
      </span>
    </div>
  </section>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue';

const store = useStore()

const isNotifMessage = computed(() => {
  return store.state.isNotifMessage
})

const isButtonMessageActive = (() => {
  store.commit('isButtonMessage')
  store.commit('isNotifMessage')
});
</script>

<!-- <span class="iconify" data-icon="eva:close-outline"></span> -->