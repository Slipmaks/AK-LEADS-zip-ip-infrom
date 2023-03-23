<template>
  <div>
    <h2 class="text-center m-2">User ip information</h2>

    <div class="bg-inform">
      <div v-if="dataLoaded">
        <div>
          <span class="p-text">Internet provider: </span>
          <span>{{ store.ipLookupInfo.isp }}</span>
        </div>
        <div>
          <span class="p-text">City: </span>
          <span>{{ store.ipLookupInfo.city }}</span>
        </div>
        <div>
          <span class="p-text">Region: </span>
          <span>{{ store.ipLookupInfo.regionName }}</span>
        </div>
        <div>
          <span class="p-text">Country: </span>
          <span>{{ store.ipLookupInfo.country }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "../store";
import { computed } from "vue";

const store = useStore();

const dataLoaded = computed(() => Object.keys(store.ipLookupInfo).length);
</script>
