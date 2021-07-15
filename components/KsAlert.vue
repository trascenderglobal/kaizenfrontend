<template>
  <div class="ks-alert" role="alert">
    <div v-if="$slots.icon" class="flex items-center py-1 pr-4">
      <slot name="icon" />
    </div>
    <div>
      <slot v-if="$slots.title" name="title" />
      <p v-else class="font-bold">{{ title }}</p>
      <slot v-if="$slots.subtitle" name="subtitle" />
      <p v-else class="text-sm">{{ text }}</p>
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
  @apply flex flex-wrap w-full rounded-xl px-4 py-3 shadow;
}

.ks-alert .action {
  @apply flex items-center;
}
</style>
