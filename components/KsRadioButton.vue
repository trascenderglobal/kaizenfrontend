<template>
  
  <div class="radio">
    <label :for="`radio-${id}`" class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer">
      <input 
      v-bind="$attrs"
      type="radio"
      :value="itemValue"
      :checked="value === itemValue"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
      class="hidden"
      name="input"
    />
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
input:checked + label {
	border-color: black;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>