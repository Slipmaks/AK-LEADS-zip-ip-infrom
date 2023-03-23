<template>
  <div>
    <h2 class="text-center m-2">ZIP code USA inform</h2>
    <div class="flex justify-center">
      <TheInput v-model="cityInput" @keyup.enter="getInfo" />
      <button
        type="button"
        :disabled="buttonDisable"
        @click="getInfo"
        class="my-btn"
      >
        Render
      </button>
    </div>
    <div v-if="dataLoaded" class="bg-inform">
      <div>
        <span class="p-text">State: </span>
        <span>{{ store.cityGetter.places[0].state }}</span>
      </div>
      <div>
        <span class="p-text">City: </span>
        <span>{{ store.cityGetter.places[0]["place name"] }}</span>
      </div>
      <div>
        <span class="p-text">ZIP: </span>
        <span>{{ store.cityGetter["post code"] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheInput from "./TheInput.vue";
import { ref, computed } from "vue";
import { useStore } from "../store";

const cityInput = ref("");
const store = useStore();

const getInfo = () => {
  store.getCityInfo(cityInput.value);
  cityInput.value = "";
};
const dataLoaded = computed(() => Object.keys(store.cityInfo).length);
const buttonDisable = computed(
  () => cityInput.value.length < 5 || cityInput.value.length > 9
);
</script>
<style scoped>
.my-btn {
  @apply text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  px-5 py-2.5  disabled:cursor-default cursor-pointer h-full disabled:bg-gray-100;
}
</style>
