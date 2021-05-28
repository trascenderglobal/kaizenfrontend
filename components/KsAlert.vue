<template>
  <div class="ks-alert" role="alert">
    <div class="flex">
      <div v-if="$slots.icon" class="flex items-center py-1 pr-4">
        <slot name="icon" />
      </div>
      <div>
        <p class="font-bold">{{ title }}</p>
        <p class="text-sm">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.ks-alert {
  @apply w-full rounded-xl px-4 py-3 shadow;
}
</style>
