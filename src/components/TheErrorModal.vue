<template>
  <div class="wrapper-modal" @click="closeModal" v-if="openModal">
    <div class="modal-content">
      <p class="p-text">Ooops! Something wrong. Try again!</p>
      <p class="font-semibold text-lg">
        {{ store.errorValueGetter }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "../store.js";

const store = useStore();
const closeModal = () => {
  store.clearErrorMEssage();
};
const openModal = computed(() => store.errorValue);
</script>
<style scoped>
.wrapper-modal {
  @apply absolute w-screen h-screen bg-slate-600/30;
}
.modal-content {
  @apply fixed z-20 top-1/4 left-1/2 w-80 bg-slate-100 -ml-40 rounded p-8;
}
</style>
