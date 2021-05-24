<template>
  <button class="ks-btn" type="button">
    <span class="btn-text">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.ks-btn {
  @apply flex justify-center px-8 py-3 font-bold text-white border  rounded-lg border-gray-dark bg-blue-kaizen transition duration-100 hover:opacity-80 disabled:opacity-75;
}

.btn-text {
  @apply flex items-center justify-center;
}
</style>
