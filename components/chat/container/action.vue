<script setup lang="ts">


function onInput(value: string) {
  // TODO Проверить
  console.log(value)
}
</script>

<template>
  <div class="chat-action">
    <ui-input type="text" @input="onInput"/>
  </div>
</template>

<style scoped>

</style>