<script setup lang="ts">
import type { Ref, UnwrapRef } from "vue";
import type { UserAuthorizationType } from "~/types";
import { useNotification } from "naive-ui";

const userData: Ref<UnwrapRef<UserAuthorizationType>> = ref({
  login: '',
  password: ''
});

const isDisabled: Ref<UnwrapRef<boolean>> = ref(false);

const notification = useNotification();

const { t } = useI18n();

const localePath = useLocalePath();

const emits = defineEmits(['authorization']);

function authorization() {
  const canUserLogin = checkIsFormValid();

  if (canUserLogin) {
    emits('authorization', userData.value);

    isDisabled.value = !isDisabled.value;

    setTimeout(() => {
      isDisabled.value = !isDisabled.value;
    }, 5000)
  }
}

function checkIsFormValid(): boolean {
  let { login, password } = userData.value;

  if (!login) {
    notification.create({ title: t('authorization.messages.invalid-login') });
    return false;
  }

  if (!password) {
    notification.create({ title: t('authorization.messages.invalid-password') });
    return false;
  }

  return true;
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
          {{ $t("authorization.form.login") }}
        </label>
        <div class="mt-2">
          <ui-input v-model="userData.login" id="login" name="login" type="text" required class="input" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
            {{ $t("authorization.form.password") }}
          </label>
        </div>
        <div class="mt-2">
          <input v-model="userData.password" id="password" name="password" type="password"
            autocomplete="current-password" required class="input">
        </div>
      </div>

      <div>
        <button @click="authorization" type="button" :disabled="isDisabled"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {{ $t("authorization.form.button") }}
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      {{ $t("authorization.form.message") }}
      <NuxtLink :to="localePath('/registration')" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        {{ $t("authorization.form.registration_link") }}
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped></style>