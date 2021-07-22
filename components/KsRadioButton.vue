<template>
  <div class="radio" tabindex="0" @blur="$emit('blur')">
    <input
      :for="`radio-${id}`"
      v-bind="$attrs"
      type="radio"
      :value="itemValue"
      :checked="value === itemValue"
      class="hidden"
    />
    <label
      :for="`radio-${id}`"
      class="radio-label"
      @click="$emit('input', itemValue)"
    >
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
.radio {
  @apply flex items-center justify-center;
}

input + .radio-label {
  @apply py-1 px-2 cursor-pointer select-none border border-blue-light rounded-lg text-gray-darker;
}

input:checked + .radio-label {
  @apply transition duration-200 bg-blue-kaizen text-white border-blue-kaizen;
}
</style>
