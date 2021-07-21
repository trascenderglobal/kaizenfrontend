<template>
  
  <div class="radio">
    <input 
      :id="id"
      v-bind="$attrs"
      type="radio"
      :value="itemValue"
      :checked="value === itemValue"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
      class="hidden"
      name="radio"
    />
    <label :for="id" class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer">
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
      type: [String, Number],
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
input + label {
  
  border-radius: 10px;
  border: 1px solid #A4DEE0;
  font-family: Orkney;
  font-size: 15px;
  color: #969696;
  align-items: center;
  text-align: center;
}

input:checked + label {
  
	background: #3E7CA3;
  border-radius: 10px;
  font-family: Orkney;
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
  align-items: center;
}
</style>