<template>
  <div class="addFilter-wrapper">
    <h1 class="addFilter-title">
      {{ $t('search.addFilter') }}
    </h1>
    <div class="addFilter-description">
      <span>{{ $t('search.addFilterDescription') }}</span>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  
})
</script>

<style scoped>
.addFilter-wrapper {
  @apply w-full flex flex-col flex-grow;
}

.addFilter-title {
  @apply text-3xl font-medium text-blue-kaizen ;
}

.addFilter-description {
  @apply space-y-2 pt-4 text-gray-darker text-sm ;
}

</style>
