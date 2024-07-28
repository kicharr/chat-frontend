<script setup lang="ts">
import type { Ref, UnwrapRef } from "vue";
import type { UserRegistrationDataType } from "~/types";
import { useMessage, useNotification } from "naive-ui";

const userData: Ref<UnwrapRef<UserRegistrationDataType>> = ref({
  name: '',
  login: '',
  password: '',
  repeatPassword: ''
});

const { t } = useI18n();

const localePath = useLocalePath();

const emits = defineEmits(['registration']);

const isDisabled: Ref<UnwrapRef<boolean>> = ref(false);

const notification = useNotification();

const isRepeatPasswordInputShown: Ref<UnwrapRef<boolean>> = ref(false);

watch(userData?.value, (val) => {
  val?.password && val?.password.length >= 6 ? isRepeatPasswordInputShown.value = true : isRepeatPasswordInputShown.value = false;
});

function registration() {
  const canUserRegistration = checkIsFormValid();

  if (canUserRegistration) {
    emits('registration', {
      login: userData.value.login,
      name: userData.value.name,
      password: userData.value.password,
    });

    userData.value.login = '';
    userData.value.name = '';
    userData.value.password = '';
    userData.value.repeatPassword = '';

    isDisabled.value = !isDisabled.value;

    setTimeout(() => {
      isDisabled.value = !isDisabled.value;
    }, 5000)
  }
}


function checkIsFormValid(): boolean {
  const { login, name, password, repeatPassword } = userData.value;

  if (!login) {
    notification.create({ title: t('registration.messages.invalid-login') });
    return false;
  }

  if (!name) {
    notification.create({ title: t('registration.messages.invalid-name') });
    return false;
  }

  if (!password) {
    notification.create({ title: t('registration.messages.invalid-password') });
    return false;
  }

  if (password !== repeatPassword) {
    notification.create({ title: t('registration.messages.invalid-password-repeat') });
    userData.value.password = '';
    userData.value.repeatPassword = '';
    return false;
  }

  return true;
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6">
      <div>
        <label for="login" class="block text-sm font-medium leading-6 text-gray-900">{{ $t("registration.form.login")
          }}</label>
        <div class="mt-2">
          <ui-input type="text" v-model="userData.login" id="login" name="login" required />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">{{ $t("registration.form.name")
            }}</label>
        </div>

        <div class="mt-2">
          <ui-input v-model="userData.name" id="name" name="name" type="text" required class="input" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">{{
            $t("registration.form.password") }}</label>
        </div>

        <div class="mt-2">
          <ui-input v-model="userData.password" id="password" name="password" :type="'password'" required
            class="input" />
        </div>
        <span v-if="userData.password" class="input-tooltip"
          :class="{ 'input-tooltip--valid': userData.password.length >= 6 }">
          {{ $t("registration.form.password-hint") }}
        </span>
      </div>

      <Transition>
        <div v-if="isRepeatPasswordInputShown">
          <div class="flex items-center justify-between">
            <label for="repeat-password" class="block text-sm font-medium leading-6 text-gray-900">
              {{ $t("registration.form.password-repeat") }}
            </label>
          </div>

          <div class="mt-2">
            <ui-input v-model="userData.repeatPassword" id="repeat-password" name="repeat-password" :type="'password'"
              required class="input" />
          </div>
        </div>
      </Transition>

      <div>
        <button @click="registration" type="button" :disabled="isDisabled"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {{ $t("registration.form.button") }}
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      {{ $t("registration.form.message") }}
      <NuxtLink :to="localePath('/authorization')"
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        {{ $t("registration.form.authorization_link") }}
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped lang="scss">
.input-tooltip {
  font-size: 10px;
  color: red;

  &--valid {
    color: grey;
  }
}
</style>