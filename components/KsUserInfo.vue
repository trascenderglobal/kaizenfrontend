<template>
  <div class="user-wrap">
    <div class="user-img">
      <div class="img-wrapper">
        <iconly-icon name="image" class="fill-current text-white" />
        <div
          role="img"
          :aria-label="$t('profile.userImage')"
          class="img"
          :style="userImage"
        ></div>
      </div>
    </div>
    <div class="user-name text-link-blue">
      <div class="user-name-wrap">
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

export default Vue.extend({
  data() {
    return {
      profilePicture: '',
    }
  },
  computed: {
    role() {
      if (this.$auth.user) {
        if (this.$auth.user.role === 0) return '/employer'
        else if (this.$auth.user.role === 1) return '/employee'
      }
      return '/'
    },
    userImage(): Object {
      if (this.profilePicture)
        return {
          'background-image': `url(${this.profilePicture})`,
        }
      return {}
    },
  },
  async beforeMount() {
    try {
      const res = await this.$axios.$get('/employee/profile_picture')
      this.profilePicture = res.profile_picture_URL
    } catch (error) {
      this.profilePicture = ''
    }
  },
})
</script>

<style scoped>
.user-wrap {
  @apply bg-white border-2 rounded-xl flex border-white p-2;
}

.user-img {
  @apply flex-shrink-0 w-8 h-8;
}

.user-name {
  @apply flex flex-grow h-8 items-center justify-center pl-4 text-lg;
}

.user-name-wrap {
  @apply flex-grow-0 max-w-full max-h-full overflow-hidden;
}

.img-wrapper {
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-gray-darker to-gray-light shadow backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img {
  @apply w-full h-full bg-no-repeat bg-center z-10 bg-cover absolute rounded-md top-0 left-0 right-0 bottom-0;
}
</style>
