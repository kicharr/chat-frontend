export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore();

  userStore.loadUserToken();

  if (!userStore.token) {
    return navigateTo("/authorization");
  }
});
