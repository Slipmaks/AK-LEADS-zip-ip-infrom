<template>
  <h1 class="text-3xl font-normal pt-6">AK LEADS</h1>
  <nav
    class="bg-gray-100/40 rounded-sm p-4 mb-8 mt-4 flex gap-2 justify-center"
  >
    <RouterLink to="/" class="custom-link">Home</RouterLink>
    <RouterLink to="/ip-lookup" class="custom-link">ip-Lookup</RouterLink>
  </nav>
</template>
<style scoped>
a.router-link-active,
a:hover {
  @apply text-neutral-900 border-b-2 border-blue-300;
}
a {
  @apply rounded-sm text-neutral-400 p-2 transition-colors;
}
</style>
