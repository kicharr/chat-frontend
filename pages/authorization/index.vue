<script setup lang="ts">
import type {UserAuthorizationType} from "~/types";
import {useUserStore} from "~/store/user";

const {locale, setLocale} = useI18n();

const userStore = useUserStore();

function authorization(userData: UserAuthorizationType) {
  userStore.authorization(userData);
}
</script>

<template>
  <div class="h-screen flex items-center flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t('authorization.title') }}
      </h2>
    </div>

    <authorization-form @authorization="authorization"/>

    <div class="flex gap-2.5 my-1.5">
      <button @click="setLocale('ru')" class="button button--language"
              :class="{'button--language--active':locale === 'ru'}">
        RUS
      </button>
      <button @click="setLocale('en')" class="button button--language"
              :class="{'button--language--active':locale === 'en'}">
        ENG
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button {
  &--language {
    border: 1px solid #000000;
    padding: 5px;
    border-radius: 10px;
    opacity: .5;

    &--active {
      opacity: 1;
    }
  }
}
</style>