<template>
  <div class="flex">
    <input
      type="range"
      min="7.25"
      max="300"
      :value="value"
      step="0.25"
      class="slider"
      :class="{ error: error }"
      @input="$emit('input', Number.parseFloat($event.target.value))"
      @blur="$emit('blur')"
    />
    <span
      class="flex w-1/3 pl-4"
      :class="error ? 'text-red-kaizen' : 'text-blue-kaizen'"
      >{{ $t('negotiation.perHour', { value }) }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 7.25,
    },
    error: Boolean,
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
</style>
