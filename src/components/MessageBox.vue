<template>
  <section v-if="isButtonMessageActive" class="fixed inset-x-0 top-20 mx-auto justify-center h-2/3 w-2/3 bg-gray-100 rounded-lg hover:shadow-2xl shadow-md border overflow-hidden">

    <div class="absolute top-0 w-full h-10 bg-gradient-to-t from-gray-300 to-gray-100">
      <button @click="BtnCloseMessage" name="button close message">
        <span class="iconify absolute top-2 right-2 text-2xl hover:text-gray-500 text-gray-600" data-icon="akar-icons:circle-x-fill"></span>
      </button>
    </div>

    <slot name="message"></slot>

    <div class="absolute bottom-0 w-full h-16 bg-gradient-to-t from-purple-700 to-blue-600 shadow-3xl py-4 px-4">
      <div class="flex justify-center mt-1">
        <form class="flex items-center mx-4">
          <input type="text" class="rounded outline-none py-1 text-sm px-4" placeholder="Kirim pesan">
          <button class="group flex items-center px-2 bg-white ml-2 rounded text-sm py-1.5 hover:bg-purple-100" name="button send message">
            <span class="iconify mr-1 group-hover:text-blue-900" data-icon="grommet-icons:send"></span>
            <span class="text-xs group-hover:text-blue-900">Send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const isButtonMessageActive = computed(() => {
  return store.state.isButtonMessage
});

const BtnCloseMessage = (() => {
  store.commit('isButtonMessage')
});
</script>