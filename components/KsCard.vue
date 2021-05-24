<template>
  <div
    class="card"
    :class="[border ? `border-2 border-${bg}` : '', `bg-${bg}`]"
  >
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
    bg: {
      type: String,
      default: 'white',
    },
  },
})
</script>

<style scoped>
.card {
  @apply w-full relative rounded-xl overflow-hidden;
}

.card-wrapper {
  @apply flex min-h-0 max-h-full overflow-y-auto overflow-x-hidden rounded-xl;
}
</style>
