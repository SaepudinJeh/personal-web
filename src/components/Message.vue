<template>
  <section v-if="isButtonMessageActive" class="fixed inset-x-0 top-20 mx-auto justify-center h-2/3 w-2/3 bg-white rounded-lg shadow-md border overflow-hidden">

  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const isButtonMessageActive = computed(() => {
  return store.state.isButtonMessage
});

</script>