<template>
  <div class="card bg-white" :class="{ 'border-2 border-white': border }">
    <div class="card-wrapper scroller" :class="{ 'flex-col': !row }">
      <slot />
    </div>
    <slot name="outer" />
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
    row: Boolean,
  },
})
</script>

<style scoped>
.card {
  @apply relative w-full rounded-xl overflow-y-hidden overflow-x-visible;
}

.card-wrapper {
  @apply relative z-10 flex min-h-full max-h-full overflow-y-auto overflow-x-visible;
}
</style>
