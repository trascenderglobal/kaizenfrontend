<template>
  <div class="card bg-white" :class="{ 'border-2 border-white': border }">
    <div class="card-wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    border: {
      type: Boolean,
      default: true,
    },
  },
})
</script>

<style scoped>
.card {
  @apply w-full relative rounded-xl overflow-hidden;
}

.card-wrapper {
  @apply flex min-h-full max-h-full overflow-y-auto overflow-x-hidden;
}
</style>
