<script setup lang="ts">
import {useVModel} from "@vueuse/core";

interface UIInputPropsType {
  modelValue?: string
}

const props = defineProps<UIInputPropsType>();

const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit);
</script>

<template>
  <input v-model="data" class="input">
</template>

<style scoped>

</style>