<template>
  <span
    class="ks-status-icon"
    :class="[
      color,
      dense && 'dense',
      large && 'large',
      text && 'text',
      outline && 'outline',
    ]"
  >
    <i class="icon-wrapper">
      <iconly-icon
        :name="icon"
        :type="type"
        class="fill-current stroke-current stroke-0"
      />
    </i>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'success',
          'light',
          'danger',
          'warning',
          'transparent',
          'light-blue',
          'light-gray',
        ].includes(value)
      },
    },
    dense: Boolean,
    large: Boolean,
    text: Boolean,
    outline: Boolean,
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'outline',
    },
  },
})
</script>

<style scoped>
.ks-status-icon {
  @apply flex justify-center items-center relative border rounded-lg p-2;
}

.ks-status-icon.primary {
  @apply border-blue-kaizen bg-blue-kaizen text-white;
}

.ks-status-icon.primary.outline {
  @apply border-blue-kaizen bg-transparent text-blue-kaizen;
}

.ks-status-icon.primary.text {
  @apply border-transparent bg-transparent text-blue-kaizen;
}

.ks-status-icon.light {
  @apply border-gray-lighter bg-gray-lighter text-blue-kaizen;
}

.ks-status-icon.light.outline {
  @apply border-gray-lighter bg-transparent text-blue-kaizen;
}

.ks-status-icon.light.text {
  @apply border-transparent bg-transparent text-blue-kaizen;
}

.ks-status-icon.transparent {
  @apply border-transparent bg-transparent text-gray-darker;
}

.ks-status-icon.transparent.outline {
  @apply border-gray-darker bg-transparent text-gray-darker;
}

.ks-status-icon.transparent.text {
  @apply border-transparent bg-transparent text-gray-darker;
}

.ks-status-icon.success {
  @apply border-green-kaizen bg-green-kaizen text-white;
}

.ks-status-icon.success.outline {
  @apply border-green-kaizen bg-transparent text-green-kaizen;
}

.ks-status-icon.success.text {
  @apply border-transparent bg-transparent text-green-kaizen;
}

.ks-status-icon.warning {
  @apply border-orange-pending bg-orange-pending text-white;
}

.ks-status-icon.warning.outline {
  @apply border-orange-pending bg-transparent text-orange-pending;
}

.ks-status-icon.warning.text {
  @apply border-transparent bg-transparent text-orange-pending;
}

.ks-status-icon.danger {
  @apply border-red-kaizen bg-red-kaizen text-white;
}

.ks-status-icon.danger.outline {
  @apply border-red-kaizen bg-transparent text-red-kaizen;
}

.ks-status-icon.danger.text {
  @apply border-transparent bg-transparent text-red-kaizen;
}

.ks-status-icon.light-blue {
  @apply border-blue-light bg-blue-light text-white;
}

.ks-status-icon.light-blue.outline {
  @apply border-blue-light bg-transparent text-blue-light;
}

.ks-status-icon.light-blue.text {
  @apply border-transparent bg-transparent text-blue-light;
}

.ks-status-icon.light-gray {
  @apply border-gray-light bg-gray-light text-white;
}

.ks-status-icon.light-gray.outline {
  @apply border-gray-light bg-transparent text-gray-light;
}

.ks-status-icon.light-gray.text {
  @apply border-transparent bg-transparent text-gray-light;
}

.ks-status-icon.large {
  @apply py-3;
}

.ks-status-icon.dense {
  @apply p-1;
}

.ks-status-icon.large {
  @apply p-3;
}

.icon-wrapper {
  @apply flex items-center justify-center;
}
</style>
