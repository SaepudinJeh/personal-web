<template>
  <navbar />
  <landing-page />

  <bubble-chat />
  <message-box>
    <template v-slot:message>
      <div class="mt-12">
        sdsa
      </div>
    </template>
  </message-box>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import LandingPage from './components/LandingPage.vue'
import BubbleChat from './components/BubbleChat.vue'
import MessageBox from './components/MessageBox.vue'

</script>