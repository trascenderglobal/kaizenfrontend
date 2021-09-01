<template>
  <div
    class="notification"
    :class="[notification.bgColor, notification.textColor]"
    role="alert"
  >
    <span class="notification-content">{{ notification.content }}</span>
    <nuxt-link
      v-if="notification.to"
      class="notification-btn"
      :class="notification.hoverColor"
      :to="localePath(notification.to)"
      @click="$emit('click:dismiss')"
    >
      {{ $t(notification.action || 'notifier.dismiss') }}
    </nuxt-link>
    <button
      v-else
      type="button"
      class="notification-btn"
      :class="notification.hoverColor"
      @click="$emit('click:dismiss')"
    >
      {{ $t(notification.action || 'notifier.dismiss') }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
.notification {
  @apply flex justify-between w-full lg:w-auto self-center lg:rounded-xl;
}

.notification .notification-content {
  @apply inline-block p-4;
}

.notification .notification-btn {
  @apply p-4 h-full font-medium rounded-r-xl transition duration-200 focus:outline-none;
}

.notification-btn:hover {
  @apply underline;
}
</style>
