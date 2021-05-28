<template>
  <div class="alerts-wrapper">
    <h1 class="alerts-title">
      {{ $t('alerts.alerts') }}
    </h1>
    <div v-if="!alerts.length" class="no-alerts">
      <span>{{ $t('alerts.noAlerts') }}</span>
      <iconly-icon name="notification" class="fill-current" :size="1.5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    alerts: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style scoped>
.alerts-wrapper {
  @apply flex flex-col flex-grow;
}

.alerts-title {
  @apply text-3xl font-medium text-blue-kaizen pt-4;
}

.no-alerts {
  @apply flex flex-grow flex-col justify-center items-center self-center space-y-2 text-gray-darker text-lg select-none;
}
</style>
