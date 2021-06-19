<template>
  <ks-card class="h-full p-8" col>
    <div class="resume-header">
      <h1 class="text-3xl font-medium">
        {{ $t('resume.myResume') }}
      </h1>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'employee',
})
</script>

<style scoped>
.resume-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.resume-header > * {
  @apply pt-4;
}
</style>
