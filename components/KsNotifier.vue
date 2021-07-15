<template>
  <transition-group
    tag="div"
    name="notifier"
    class="notifier-group"
    :class="position"
  >
    <ks-notification
      v-for="(notif, i) in notifications"
      :key="`notification-${i}`"
      :notification="notif"
      @click:dismiss="$notifier.removeNotification(i)"
    />
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
</style>
