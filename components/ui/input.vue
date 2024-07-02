<script setup lang="ts">
import {useVModel} from "@vueuse/core";

interface UIInputPropsType {
  modelValue?: string
}

const props = defineProps<UIInputPropsType>();

const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit);
</script>

<template>
  <input v-model="value" class="input">
</template>

<style scoped>

</style>