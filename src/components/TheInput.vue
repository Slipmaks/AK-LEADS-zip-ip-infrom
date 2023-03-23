<template>
  <input
    :value="modelValue"
    @input="updateValue"
    placeholder="90210"
    class="my-input"
    type="text"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<style scoped>
.my-input {
  @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
}
</style>
