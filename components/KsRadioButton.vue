import { required } from "vuelidate/lib/validators";

import { required } from "vuelidate/lib/validators";

<template>
  <div class="boxed">
    <input 
    type="radio"
    :id="`radio-${id}`"
    :value="itemValue"
    :checked="vale === itemValue"
    />
    <label :for="`radio-${id}`">
      {{label}}
    </label>
    </div>
    
</template>

<script lang="ts">

export default ({
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
    }
  }
})
</script>

<style scoped>
.boxed label {
  @apply inline-block w-48 p-2 border-2 transition-all ;
}

.boxed input[type="radio"] {
  @apply hidden ;
}

.boxed input[type="radio"]:checked + label {
  @apply focus:ring-2 focus:ring-red-500 ;
}
</style>