<template>
  <div class="approved-wrapper">
    <h1 class="approved-title">
      {{ $t('approved.approved') }}
    </h1>
    <div v-if="!approved.length" class="no-approved">
      <span>{{ $t('approved.noApproved') }}</span>
      <iconly-icon name="notification" class="fill-current" :size="1.5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    approved: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style scoped>
.approved-wrapper {
  @apply w-full flex flex-col flex-grow;
}

.approved-title {
  @apply text-3xl font-medium text-blue-kaizen pt-4;
}

.no-approved {
  @apply flex flex-grow flex-col justify-center items-center self-center space-y-2 text-gray-darker text-lg select-none;
}

.no-approved * {
  @apply text-center;
}
</style>
