<template>
  <div class="ks-drawer">
    <img
      class="w-4/5 mx-auto justify-start"
      :src="require('@/assets/img/kaizen-black.png')"
      alt="Kaizen Squad"
    />
    <div class="menu">
      <nuxt-link tag="div" :to="localePath('/profile')" class="ks-drawer-link">
        <div class="link-wrapper">
          <iconly-icon name="profile" class="fill-current" />
          <span class="pt-2 text-center">{{ $t('drawer.profile') }}</span>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" :to="localePath('/resume')" class="ks-drawer-link">
        <div class="link-wrapper">
          <iconly-icon name="document" class="fill-current" />
          <span class="pt-2 text-center">{{ $t('drawer.resume') }}</span>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" :to="localePath('/jobs')" class="ks-drawer-link">
        <div class="link-wrapper">
          <span
            class="absolute z-10 top-0 right-1 h-2 w-2 rounded-full bg-red-500"
          ></span>
          <iconly-icon name="activity" class="relative fill-current" />
          <span class="pt-2 text-center">{{ $t('drawer.jobs') }}</span>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" :to="localePath('/settings')" class="ks-drawer-link">
        <div class="link-wrapper">
          <iconly-icon name="setting" class="fill-current" />
          <span class="pt-2 text-center">{{ $t('drawer.settings') }}</span>
        </div>
      </nuxt-link>
    </div>
    <div id="logout">
      <button type="button" class="ks-drawer-link" @click.stop="logout">
        <div class="link-wrapper">
          <iconly-icon name="logout" class="fill-current" />
          <span class="pt-2 text-center">{{ $t('drawer.logout') }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async logout(): Promise<void> {
      try {
        this.loading = true
        await this.$auth.logout()
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
})
</script>

<style scoped>
.ks-drawer {
  @apply flex flex-col items-center min-h-full w-64 bg-white p-8 sticky left-0 overflow-y-auto;
}

.ks-drawer-link {
  @apply flex justify-center items-center p-4 rounded-lg w-28 h-28 outline-none;
}

.ks-drawer-link:not(.nuxt-link-exact-active) {
  @apply cursor-pointer text-gray-dark;
}

.ks-drawer-link:not(.nuxt-link-exact-active):hover {
  @apply hover:bg-gray-lighter text-blue-kaizen;
}

.nuxt-link-exact-active {
  @apply bg-gray-lighter text-blue-kaizen;
}

.link-wrapper {
  @apply relative top-2 flex flex-col items-center justify-center;
}

.menu {
  @apply flex flex-col space-y-3 pt-4;
}

#logout {
  @apply flex justify-center items-end flex-grow pb-4;
}
</style>
