<template>
  <div class="ks-container">
    <ks-card class="bg-opacity-60 backdrop-filter backdrop-blur-sm">
      <ks-drawer />
    </ks-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  auth: 'guest',
})
</script>

<style scoped>
.ks-container {
  @apply flex h-full mx-auto py-16 px-2 sm:px-16 lg:px-24;
}
</style>
