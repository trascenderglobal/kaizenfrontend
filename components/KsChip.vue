<template>
  <div class="ks-chip" :class="[bgColor, borderColor, color, font]">
    <span><slot /></span>
    <div v-if="clearable" class="icon clear" @click.stop="$emit('click:clear')">
      <iconly-icon name="clear" class="stroke-current" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    bgColor: {
      type: String,
      default: 'bg-blue-light',
    },
    borderColor: {
      type: String,
      default: 'border-blue-light',
    },
    color: {
      type: String,
      default: 'text-white',
    },
    font: {
      type: String,
      default: 'font-bold',
    },
    clearable: Boolean,
  },
})
</script>

<style scoped>
.ks-chip {
  @apply flex items-center justify-center rounded-lg py-0.5 px-2;
}

.ks-chip .icon {
  @apply pl-1.5 flex items-center justify-center fill-current min-h-4 min-w-4 cursor-pointer;
}

.ks-chip > span {
  @apply flex items-center min-h-4 min-w-4 whitespace-nowrap overflow-hidden overflow-ellipsis;
}
</style>
