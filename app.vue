<script setup lang="ts">
const notificationOptions = {
  max: 3,
  placement: 'top-left'
}
</script>

<template>
  <NuxtLayout>
    <n-notification-provider :max="notificationOptions.max" :placement="notificationOptions.placement">
      <NuxtPage />
    </n-notification-provider>
  </NuxtLayout>
</template>