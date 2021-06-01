<template>
  <button class="ks-btn" :disabled="loading" type="button">
    <i v-if="loading" class="absolute z-10">
      <iconly-icon
        name="loading"
        type="outline"
        class="stroke-current"
        viewBox="0 0 38 38"
      />
    </i>
    <span class="btn-text" :class="{ 'opacity-0': loading }">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
.ks-btn {
  @apply flex justify-center items-center relative px-8 py-3 font-bold text-white border  rounded-lg border-gray-dark bg-blue-kaizen transition duration-100 hover:opacity-80 disabled:opacity-75 disabled:cursor-not-allowed;
}

.btn-text {
  @apply flex items-center justify-center;
}
</style>
