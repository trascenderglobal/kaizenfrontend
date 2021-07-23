<template>
  <div class="layout">
    <div class="layout-circle"></div>
    <div class="layout-blur"></div>
    <div class="ks-app">
      <ks-card class="bg-opacity-50 backdrop-filter backdrop-blur-sm" row>
        <ks-drawer />
        <div class="ks-content">
          <div class="top-content">
            <div class="breadcrumb">
              <ks-breadcrumb />
              <ks-language />
            </div>
            <div class="user-info">
              <ks-user-info />
            </div>
          </div>
          <div class="main-content">
            <div class="main-info">
              <Nuxt />
            </div>
            <div class="alerts">
              <ks-card class="h-full p-8">
                <ks-employer-approved />
              </ks-card>
            </div>
          </div>
        </div>
      </ks-card>
    </div>
    <ks-notifier />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KsEmployerApproved from '~/components/KsEmployerApproved.vue'

export default Vue.extend({
  components: { KsEmployerApproved },
})
</script>

<style scoped>
.layout {
  @apply relative h-screen bg-gradient-to-tl from-blue-dark to-blue-light;
}

.layout-blur {
  backdrop-filter: blur(0.85px);
  @apply fixed w-full h-full bg-white bg-opacity-50;
}

.layout-circle {
  @apply fixed rounded-full h-180 w-180 -top-90 -left-90 md:h-240 md:w-240 md:-top-120 md:-left-120 lg:h-360 lg:w-360 lg:-top-180 lg:-left-180 border-120 lg:border-240 border-blue-kaizen;
}

.ks-app {
  @apply relative z-10 flex h-full mx-auto p-2 lg:p-4 xl:p-8;
}

.ks-content {
  @apply flex flex-col flex-grow p-2 lg:p-4 space-y-2 lg:space-y-4 overflow-auto;
}

.top-content,
.main-content {
  @apply flex max-w-full space-x-2 lg:space-x-4;
}

.main-content {
  @apply flex-grow;
}

.breadcrumb {
  @apply flex justify-between items-end min-w-3/4 max-w-3/4;
}

.user-info {
  @apply flex-grow;
}

.main-info {
  @apply h-full min-w-3/4 max-w-3/4;
}

.alerts {
  @apply h-full flex-grow;
}
</style>
