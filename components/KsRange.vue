<template>
  <div class="flex">
    <input 
    type="range" 
    min="7.25" 
    max="300" 
    :value="value" 
    step="0.25"  
    class="slider"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur')" 
    />
    <span class="text-blue-kaizen flex w-1/3 pl-4 ">{{ $t('negotiation.perHour', {value}) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value:{
      type: Number,
      default: 7.25
    }
  }
}
</script>

<style scoped>
input{
  @apply flex w-full h-1 align-middle;
}

.flex {
  @apply items-center;
}

.slider {
  @apply cursor-pointer bg-blue-kaizen;
}
/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  @apply bg-blue-kaizen;
}

.slider::-moz-range-thumb {
  @apply bg-blue-kaizen;
}
</style>