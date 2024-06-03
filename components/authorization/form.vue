<script setup lang="ts">

</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
        <div class="mt-2">
          <input id="login" name="login" type="text" required
                 class="input">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required
                 class="input"></div>
      </div>

      <div>
        <button type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Авторизоваться
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Нет аккаунта?
      <NuxtLink to="/registration" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Зарегестрироваться сейчас
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>

</style>