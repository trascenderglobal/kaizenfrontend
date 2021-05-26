<template>
  <div class="ks-container">
    <ks-card class="bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <ks-drawer />
      <div class="ks-content">
        <div class="top-content">
          <div class="breadcrumb">
            <ks-breadcrumb />
          </div>
          <div class="user-info">
            <ks-card class="p-2">
              <div class="user-img"></div>
              <div class="user-name pl-4">
                <div class="flex-grow-0 max-w-full max-h-full">
                  Andrés Martiliano
                </div>
              </div>
            </ks-card>
          </div>
        </div>
        <div class="main-content">
          <div class="main-info">
            <ks-card class="h-full"></ks-card>
          </div>
          <div class="alerts">
            <ks-card class="h-full"></ks-card>
          </div>
        </div>
      </div>
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

.ks-content {
  @apply flex flex-col flex-wrap flex-grow p-8 space-y-8;
}

.top-content,
.main-content {
  @apply flex space-x-8;
}

.main-content {
  @apply flex-grow;
}

.breadcrumb {
  @apply flex items-end min-w-3/4;
}

.user-info {
  @apply flex-grow;
}

.user-img {
  @apply flex-shrink-0 w-8 h-8 rounded-md bg-gray-darker animate-pulse;
}

.user-name {
  @apply flex flex-grow h-8 items-center justify-center text-blue-kaizen text-lg;
}

.main-info {
  @apply h-full min-w-3/4;
}

.alerts {
  @apply h-full flex-grow;
}
</style>
