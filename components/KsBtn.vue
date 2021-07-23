<template>
  <button
    v-if="!to"
    class="ks-btn"
    :class="[
      font,
      color,
      icon && 'icon',
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
        view-box="0 0 38 38"
      />
    </i>
    <span class="btn-text" :class="{ 'opacity-0': loading }">
      <slot />
    </span>
  </button>
  <nuxt-link
    v-else
    class="ks-btn"
    :class="[
      font,
      color,
      icon && 'icon',
      dense && 'dense',
      large && 'large',
      outline && 'outline',
    ]"
    :to="to"
  >
    <span class="btn-text">
      <slot />
    </span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'success',
          'light',
          'danger',
          'warning',
          'transparent',
        ].includes(value)
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
    to: {
      type: String,
      default: null,
    },
    dense: Boolean,
    large: Boolean,
    outline: Boolean,
    icon: Boolean,
  },
})
</script>

<style scoped>
.ks-btn::before {
  content: '';
  @apply absolute inset-0 opacity-0 transition bg-current rounded-lg;
}

.ks-btn:not(:disabled):hover::before {
  @apply opacity-10;
}

.ks-btn:focus::before {
  @apply opacity-20;
}

.ks-btn {
  @apply flex justify-center items-center relative px-8 py-2 border rounded-lg focus:outline-none;
}

.ks-btn.icon {
  @apply p-2;
}

.ks-btn.primary {
  @apply border-blue-kaizen bg-blue-kaizen text-white;
}

.ks-btn.primary.outline {
  @apply border-blue-kaizen bg-transparent text-blue-kaizen;
}

.ks-btn.light {
  @apply border-gray-lighter bg-gray-lighter text-blue-kaizen;
}

.ks-btn.light.outline {
  @apply border-gray-lighter bg-transparent text-blue-kaizen;
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

.ks-btn.warning {
  @apply border-orange-pending bg-orange-pending text-white;
}

.ks-btn.warning.outline {
  @apply border-orange-pending bg-transparent text-orange-pending;
}

.ks-btn.danger {
  @apply border-red-kaizen bg-red-kaizen text-white;
}

.ks-btn.danger.outline {
  @apply border-red-kaizen bg-transparent text-red-kaizen;
}

.ks-btn.large {
  @apply py-3;
}

.ks-btn.dense {
  @apply py-1;
}

.ks-btn.icon.dense {
  @apply p-1;
}

.ks-btn.icon.large {
  @apply p-3;
}

.btn-text {
  @apply flex items-center justify-center;
}

.ks-btn:disabled {
  @apply border-gray-light cursor-not-allowed bg-gray-light text-white;
}
</style>
