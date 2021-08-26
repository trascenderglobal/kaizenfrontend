<template>
  <div class="layout">
    <div class="layout-circle"></div>
    <div class="layout-blur"></div>
    <Nuxt class="ks-app" />
    <ks-notifier />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  fetch() {
    this.$notifier.clearNotifications()
  },
})
</script>

<style scoped>
.layout {
  @apply relative h-screen bg-gradient-to-tl from-blue-dark to-blue-light;
}

.layout-blur {
  backdrop-filter: blur(0.85px);
  @apply fixed inset-0 bg-white bg-opacity-50;
}

.layout-circle {
  @apply fixed rounded-full h-180 w-180 -top-90 -left-90 md:h-240 md:w-240 md:-top-120 md:-left-120 lg:h-360 lg:w-360 lg:-top-180 lg:-left-180 border-120 lg:border-240 border-blue-kaizen;
}

.ks-app {
  @apply relative z-10 flex h-full mx-auto p-2 lg:p-4 xl:p-8;
}
</style>
