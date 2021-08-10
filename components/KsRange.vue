<template>
  <div class="flex">
    <input
      type="range"
      class="slider"
      v-bind="$attrs"
      :min="min"
      :max="max"
      :value="value"
      :step="step"
      :disabled="disabled"
      :class="{ error: error }"
      @input="
        !disabled && $emit('input', Number.parseFloat($event.target.value))
      "
      @blur="$emit('blur')"
    />
    <span
      class="flex w-1/3 pl-4"
      :class="error ? 'text-red-kaizen' : 'text-blue-kaizen'"
      >{{ $t('negotiation.perHour', { value: value || 7.25 }) }}</span
    >
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: 7.25,
    },
    error: Boolean,
    min: {
      type: Number,
      default: 7.25,
    },
    max: {
      type: Number,
      default: 300,
    },
    step: {
      type: Number,
      default: 0.25,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
input {
  @apply flex w-full h-1 align-middle;
}

.flex {
  @apply items-center;
}

.slider {
  @apply cursor-pointer bg-gray-light;
}

.slider::-webkit-slider-thumb,
.slider::-moz-range-thumb {
  @apply bg-blue-kaizen border-blue-light rounded-full transition;
}

.slider.error::-webkit-slider-thumb,
.slider.error::-moz-range-thumb {
  @apply bg-red-kaizen border-red-kaizen;
}

.slider:disabled::-webkit-slider-thumb,
.slider:disabled::-moz-range-thumb {
  @apply bg-gray-darker border-gray-light;
}
</style>
