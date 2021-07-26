<template>
  <div
    class="user-img"
    :class="{ 'cursor-pointer': to, 'user-img-lg': large }"
    :role="to ? 'link' : 'img'"
  >
    <nuxt-link v-if="to" class="img-wrapper" :to="localePath(to)">
      <span v-if="firstLetter" class="text-white select-none">{{
        firstLetter
      }}</span>
      <iconly-icon v-else name="camera" class="fill-current text-white" />
      <div
        role="img"
        :aria-label="$t('profile.userImage')"
        class="img"
        :style="userImage"
      ></div>
    </nuxt-link>
    <div v-else class="img-wrapper">
      <span
        v-if="firstLetter"
        class="text-white select-none"
        :class="{ 'text-3xl': large }"
        >{{ firstLetter }}</span
      >
      <iconly-icon v-else name="camera" class="fill-current text-white" />
      <div
        role="img"
        :aria-label="$t('profile.userImage')"
        class="img"
        :style="userImage"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    large: Boolean,
    initials: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    expanded: {
      type: Boolean,
      default: true,
    },
    to: {
      type: String,
      default: '',
    },
  },
  computed: {
    firstLetter() {
      return this.initials.charAt(0).toUpperCase()
    },
    userImage(): Object {
      if (this.imageUrl)
        return {
          'background-image': `url(${this.imageUrl})`,
        }
      return {}
    },
  },
})
</script>

<style scoped>
.user-img {
  @apply inline-block flex-shrink-0 w-8 h-8;
}

.user-img.user-img-lg {
  @apply w-20 h-20;
}

.img-wrapper {
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b shadow backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img {
  @apply w-full h-full bg-no-repeat bg-center z-10 bg-cover absolute rounded-md inset-0;
}
</style>
