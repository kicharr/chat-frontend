<script setup lang="ts">
definePageMeta({
  middleware: "user-token-verification"
});
</script>

<template>
  <div class="page page--chat">
    <chat-wrapper/>
  </div>
</template>

<style scoped>

</style>