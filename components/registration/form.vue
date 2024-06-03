<script setup lang="ts">
import type {Ref, UnwrapRef} from "vue";
import type {UserRegistrationDataType} from "~/types";
import {useMessage} from "naive-ui";

const userData: Ref<UnwrapRef<UserRegistrationDataType>> = ref({
  name: '',
  login: '',
  password: '',
  repeatPassword: ''
});

const emits = defineEmits(['registration']);

const message = useMessage();

function registration() {
  if (!userData.value.login) {
    message.warning('Введите логин');
    return;
  }

  if (!userData.value.name) {
    message.warning('Введите имя');
    return;
  }

  if (!userData.value.password) {
    message.warning('Введите пароль');
    return;
  }

  if (userData.value.password !== userData.value.repeatPassword) {
    message.warning('Пароли не совпали');
    userData.value.password = '';
    userData.value.repeatPassword = '';
    return;
  }

  emits('registration', {
    login: userData.value.login,
    name: userData.value.name,
    password: userData.value.password,
  });
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6">
      <div>
        <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
        <div class="mt-2">
          <ui-input
              type="text"
              v-model="userData.login"
              id="login"
              name="login"
              required/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Ваше имя</label>
        </div>

        <div class="mt-2">
          <ui-input
              v-model="userData.name"
              id="name"
              name="name"
              type="text"
              required
              class="input"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
        </div>

        <div class="mt-2">
          <ui-input v-model="userData.password"
                    id="password"
                    name="password"
                    :type="'password'"
                    required
                    class="input"
          />
        </div>
      </div>

      <Transition>
        <div>
          <div class="flex items-center justify-between">
            <label for="repeat-password" class="block text-sm font-medium leading-6 text-gray-900">Подтвердите
              пароль
            </label>
          </div>

          <div class="mt-2">
            <ui-input
                v-model="userData.repeatPassword"
                id="repeat-password"
                name="repeat-password"
                :type="'password'"
                required
                class="input"
            />
          </div>
        </div>
      </Transition>

      <div>
        <button @click="registration" type="button"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Зарегестрироваться
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Есть аккаунт?
      <NuxtLink to="/authorization" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Войти
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>

</style>