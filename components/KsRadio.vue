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
    <label :for="`radio-${id}`" class="radio-label">
      <span class="radio-check">
        <span class="checked"></span>
      </span>
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    itemValue: {
      type: [String, Number],
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
  @apply relative flex items-center cursor-pointer transition duration-200;
}

input[type='radio'] + .radio-label .checked {
  @apply bg-transparent rounded inline-flex w-4 h-4 absolute z-10 justify-center items-center transition duration-200 transform scale-0;
}

input[type='radio'] + .radio-label > .radio-check {
  @apply bg-transparent rounded border border-blue-kaizen inline-flex w-6 h-6 relative mr-2 justify-center items-center transition duration-200;
}

input[type='radio'] + .radio-label > .radio-check::before {
  content: '';
  @apply absolute inset-0 opacity-0 transition bg-current rounded;
}

input[type='radio']:not(:checked) + .radio-label:hover > .radio-check::before {
  @apply opacity-10;
}

input[type='radio']:checked + .radio-label .checked {
  @apply bg-blue-kaizen scale-100;
}

input[type='radio']:focus + .radio-label::before {
  @apply outline-none;
}

input[type='radio']:disabled + .radio-label::before {
  @apply bg-gray-light;
}
</style>
