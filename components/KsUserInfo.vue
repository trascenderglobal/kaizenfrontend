<template>
  <div class="user-wrap">
    <ks-user-img
      :title="name"
      :initials="name"
      :image-url="profilePicture"
      :to="localePath(`${role}/profile`)"
    />
    <div class="user-name">
      <div class="user-name-wrap">
        <nuxt-link
          v-if="$auth.user.role !== 2"
          class="text-link-blue"
          :to="localePath(`${role}/profile`)"
        >
          {{ name }}
        </nuxt-link>
        <span v-else class="cursor-default text-blue-kaizen">{{ name }}</span>
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
    name() {
      if (this.$auth.loggedIn) {
        return (
          (this.$auth.user as any).name +
          ' ' +
          (this.$auth.user as any).lastName
        )
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
  @apply bg-white border-2 rounded-xl flex justify-end items-center border-white p-2;
}

.user-name {
  @apply hidden md:flex flex-grow h-8 items-center justify-center pl-4 text-lg;
}

.user-name-wrap {
  @apply flex-grow-0 max-w-full max-h-full overflow-hidden;
}
</style>
