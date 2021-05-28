<template>
  <div class="user-wrap">
    <div class="user-img"></div>
    <div class="user-name text-link-blue pl-4">
      <div class="flex-grow-0 max-w-full max-h-full overflow-hidden">
        <nuxt-link :to="localePath('/profile')">
          {{ $auth.user.name + ' ' + $auth.user.lastName }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.user-wrap {
  @apply bg-white border-2 rounded-xl flex border-white p-2;
}

.user-img {
  @apply flex-shrink-0 w-8 h-8 rounded-md bg-gray-darker animate-pulse;
}

.user-name {
  @apply flex flex-grow h-8 items-center justify-center text-lg;
}
</style>
