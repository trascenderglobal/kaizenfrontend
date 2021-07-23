<template>
  <div class="user-wrap">
    <ks-user-img :initials="initials" :image-url="profilePicture" />
    <div class="user-name">
      <div class="user-name-wrap text-link-blue">
        <nuxt-link
          v-if="$auth.user.role !== 2"
          :to="localePath(`${role}/profile`)"
        >
          {{ $auth.user.name + ' ' + $auth.user.lastName }}
        </nuxt-link>
        <span v-else>{{ $t('userInfo.admin') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async fetch() {
    try {
      await this.$store.dispatch('user/fetchProfilePicture')
    } catch (error) {}
  },
  fetchOnServer: false,
  computed: {
    initials() {
      if (this.$auth.loggedIn) {
        return (this.$auth.user as any).name.charAt(0)
      }
      return ''
    },
    ...mapGetters({
      profilePicture: 'user/getProfilePicture',
      role: 'user/getRole',
    }),
  },
})
</script>

<style scoped>
.user-wrap {
  @apply bg-white border-2 rounded-xl flex border-white p-2;
}

.user-name {
  @apply flex flex-grow h-8 items-center justify-center pl-4 text-lg;
}

.user-name-wrap {
  @apply flex-grow-0 max-w-full max-h-full overflow-hidden;
}
</style>
