<script setup lang="ts">
import type {UserRegistrationDataType} from "~/types";
import {useUserStore} from "~/store/user";

const userStore = useUserStore();

const { locale, setLocale } = useI18n();

function registration(data: UserRegistrationDataType) {
  userStore.registration(data);
}
</script>

<template>
  <div class="h-screen flex items-center flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t("registration.title") }}
      </h2>
    </div>

    <registration-form @registration="registration"/>


    <div class="flex gap-2.5 my-1.5">
      <button @click="setLocale('ru')" class="button button--language"
        :class="{ 'button--language--active': locale === 'ru' }">
        RUS
      </button>
      <button @click="setLocale('en')" class="button button--language"
        :class="{ 'button--language--active': locale === 'en' }">
        ENG
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>