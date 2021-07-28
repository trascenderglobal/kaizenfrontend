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
      :class="value === itemValue ? checkedStyle : uncheckedStyle"
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
    color: {
      type: String,
      default: 'text-gray-darker',
    },
    borderColor: {
      type: String,
      default: 'border-blue-light',
    },
    bgColor: {
      type: String,
      default: 'bg-transparent',
    },
    checkedColor: {
      type: String,
      default: 'text-white',
    },
    checkedBorderColor: {
      type: String,
      default: 'border-blue-kaizen',
    },
    checkedBgColor: {
      type: String,
      default: 'bg-blue-kaizen',
    },
  },
  computed: {
    uncheckedStyle(): string {
      return this.color + ' ' + this.borderColor + ' ' + this.bgColor
    },
    checkedStyle(): string {
      return (
        this.checkedColor +
        ' ' +
        this.checkedBorderColor +
        ' ' +
        this.checkedBgColor
      )
    },
  },
})
</script>

<style scoped>
.radio {
  @apply flex items-center justify-center;
}

input + .radio-label {
  @apply py-1 px-2 cursor-pointer select-none border rounded-lg;
}

input:checked + .radio-label {
  @apply transition duration-200;
}
</style>
