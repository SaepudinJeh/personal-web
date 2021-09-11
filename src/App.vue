<template>
  <navbar />
  <landing-page />

  <bubble-chat />
  <message-box>
    <template v-slot:message>
      <div class="mt-16 h-80 w-full px-5">
        <left-message />
        <right-message />
        <typing-message />
      </div>
    </template>
  </message-box>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import LandingPage from './components/LandingPage.vue'
  import BubbleChat from './components/BubbleChat.vue'
  import MessageBox from './components/MessageBox.vue'
  import RightMessage from './components/RightMessage.vue'
  import LeftMessage from './components/LeftMessage.vue'
  import TypingMessage from './components/TypingMessage.vue'
</script>