<template>
  <div class="user-wrap">
    <div class="user-img"></div>
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
  computed: {
    role() {
      if (this.$auth.user) {
        if (this.$auth.user.role === 0) return '/employer'
        else if (this.$auth.user.role === 1) return '/employee'
      }
      return '/'
    },
  },
})
</script>

<style scoped>
.user-wrap {
  @apply bg-white border-2 rounded-xl flex border-white p-2;
}

.user-img {
  @apply flex-shrink-0 w-8 h-8 rounded-md bg-gray-darker;
}

.user-name {
  @apply flex flex-grow h-8 items-center justify-center pl-4 text-lg;
}

.user-name-wrap {
  @apply flex-grow-0 max-w-full max-h-full overflow-hidden;
}
</style>
