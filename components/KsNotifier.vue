<template>
  <transition-group
    tag="div"
    name="notifier"
    class="notifier-group"
    :class="position"
  >
    <div
      v-for="(notif, i) in notifications"
      :key="`notification-${i}`"
      class="notification"
      :class="[notif.bgColor, notif.textColor]"
      role="alert"
    >
      <span class="notification-content">{{ notif.content }}</span>
      <button
        v-if="!$slots['action']"
        type="button"
        class="notification-btn"
        :class="notif.hoverColor"
        @click="$notifier.removeNotification(i)"
      >
        {{ $t('notifier.dismiss') }}
      </button>
      <template v-else>
        <slot name="action" />
      </template>
    </div>
  </transition-group>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

interface Notification {
  content: string
  bgColor?: string
  hoverColor?: string
  textColor?: string
}

export default Vue.extend({
  props: {
    position: {
      type: String,
      default: 'top-0 left-0 right-0',
    },
  },
  computed: {
    ...mapState({
      notifications: (state: any): Notification[] =>
        state.notifier.notifications,
    }),
  },
})
</script>

<style scoped>
.notifier-enter,
.notifier-leave-to {
  @apply translate-y-3 opacity-0;
}

.notifier-enter-active,
.notifier-leave-active {
  @apply transition duration-200;
}

.notifier-group {
  @apply fixed z-50 flex flex-col space-y-1 w-full lg:m-2 lg:w-auto;
}

.notification {
  @apply flex justify-between w-full lg:w-auto self-center lg:rounded-xl;
}

.notification .notification-content {
  @apply inline-block p-3;
}

.notification .notification-btn {
  @apply p-3 h-full font-medium rounded-r-xl transition duration-200 focus:outline-none;
}
</style>
