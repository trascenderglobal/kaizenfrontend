<template>
  <div class="radio">
    <input
      :id="`radio-${id}`"
      v-bind="$attrs"
      type="radio"
      :value="itemValue"
      :checked="value === itemValue"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
    />
    <label :for="`radio-${id}`" class="radio-label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    itemValue: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.radio input[type='radio'] {
  position: absolute;
  opacity: 0;
}

.radio-label {
  @apply flex items-center cursor-pointer;
}

.radio input[type='radio'] + .radio-label::before {
  content: '';
  @apply bg-transparent rounded border border-gray-dark inline-flex w-5 h-5 relative mr-2 justify-center items-center transition duration-100;
}

.radio input[type='radio']:checked + .radio-label::before {
  @apply bg-blue-kaizen rounded;
}

.radio input[type='radio']:focus + .radio-label::before {
  @apply outline-none;
}

.radio input[type='radio']:disabled + .radio-label::before {
  @apply bg-gray-light;
}
</style>
