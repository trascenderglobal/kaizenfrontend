<template>
  <div class="ks-container">
    <ks-card class="bg-opacity-50 backdrop-filter backdrop-blur-sm" row>
      <ks-drawer />
      <div class="ks-content">
        <div class="top-content">
          <div class="breadcrumb">
            <ks-breadcrumb />
          </div>
          <div class="user-info">
            <user-info />
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

export default Vue.extend({})
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
  @apply flex w-full space-x-8;
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

.main-info {
  @apply h-full min-w-3/4;
}

.alerts {
  @apply h-full flex-grow;
}
</style>
