<template>
  <button
    class="ks-btn"
    :class="[color, dense && 'dense', large && 'large']"
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
        return ['primary', 'success'].includes(value)
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    dense: Boolean,
    large: Boolean,
  },
})
</script>

<style scoped>
.ks-btn {
  @apply flex justify-center items-center relative px-8 font-bold border rounded-lg transition duration-100 hover:opacity-80 disabled:opacity-75 disabled:cursor-not-allowed;
}

.ks-btn.primary {
  @apply border-gray-dark bg-blue-kaizen text-white;
}

.ks-btn.success {
  @apply border-green-kaizen bg-green-kaizen text-white;
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
