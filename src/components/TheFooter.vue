<template>
  <div>
    <div v-if="dataLoaded" class="py-2 text-center">
      <div>
        <a
          href="https://github.com/Slipmaks/AK-LEADS-zip-ip-infrom"
          target="_blank"
          >Project Git source</a
        >
      </div>
      <div>
        <span class="footer-h2">User agent: </span>
        <span class="footer-p"
          >{{ store.userAgentGetter.client.type }}
          {{ store.userAgentGetter.client.name }} version:
          {{ store.userAgentGetter.client.version }}</span
        >
      </div>
      <div>
        <span class="footer-h2">Use Ip: </span>
        <span class="footer-p">{{ store.ipLookupGetter.query }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "../store";
import { computed } from "vue";

const store = useStore();
const dataLoaded = computed(
  () =>
    Object.keys(store.userAgentInfo).length &&
    Object.keys(store.ipLookupInfo).length
);
</script>
<style scoped>
.footer-h2 {
  @apply text-gray-600/80 font-light text-sm;
}
.footer-p {
  @apply text-gray-600/60 font-light text-xs;
}
</style>
