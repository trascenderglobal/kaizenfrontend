<template>
  <button
    class="ks-btn"
    :class="[
      font,
      color,
      dense && 'dense',
      large && 'large',
      outline && 'outline',
    ]"
    :disabled="loading"
    type="button"
    v-on="$listeners"
  >
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
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'success', 'danger', 'transparent'].includes(value)
      },
    },
    font: {
      type: String,
      default: 'font-bold',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    dense: Boolean,
    large: Boolean,
    outline: Boolean,
  },
})
</script>

<style scoped>
.ks-btn::before {
  content: '';
  @apply absolute inset-0 opacity-0 transition bg-current rounded-lg;
}

.ks-btn:hover::before {
  @apply opacity-10;
}

.ks-btn:focus::before {
  @apply opacity-20;
}

.ks-btn {
  @apply flex justify-center items-center relative px-8 border rounded-lg focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed;
}

.ks-btn.primary {
  @apply border-blue-kaizen bg-blue-kaizen text-white;
}

.ks-btn.primary.outline {
  @apply border-blue-kaizen bg-transparent text-blue-kaizen;
}

.ks-btn.transparent {
  @apply border-transparent bg-transparent text-gray-darker;
}

.ks-btn.transparent.outline {
  @apply border-gray-darker bg-transparent text-gray-darker;
}

.ks-btn.success {
  @apply border-green-kaizen bg-green-kaizen text-white;
}

.ks-btn.success.outline {
  @apply border-green-kaizen bg-transparent text-green-kaizen;
}

.ks-btn.danger {
  @apply border-red-kaizen bg-red-kaizen text-white;
}

.ks-btn.danger.outline {
  @apply border-red-kaizen bg-transparent text-red-kaizen;
}

.ks-btn {
  @apply py-2;
}

.ks-btn.large {
  @apply py-3;
}

.ks-btn.dense {
  @apply py-1;
}

.btn-text {
  @apply flex items-center justify-center;
}
</style>
