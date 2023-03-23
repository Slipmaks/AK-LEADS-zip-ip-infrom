<template>
  <TheErrorModal />

  <div class="flex flex-col justify-between h-screen">
    <div class="container mx-auto px-4">
      <TheHeader />
      <div class="max-w-lg mx-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheErrorModal from "./components/TheErrorModal.vue";
import { onMounted } from "vue";
import { useStore } from "./store";

const store = useStore();

onMounted(() => {
  store.getUserAgentInfo();
  store.getUserIpInfo();
});
console.log(document.referrer);
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
