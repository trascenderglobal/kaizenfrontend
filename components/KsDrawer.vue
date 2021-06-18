<template>
  <div class="ks-drawer">
    <nuxt-link v-slot="{ navigate }" custom :to="localePath('/')">
      <img
        class="kaizen-img"
        :src="require('@/assets/img/kaizen-black.png')"
        alt="Kaizen Squad"
        role="link"
        @click="navigate"
      />
    </nuxt-link>
    <div class="menu">
      <nuxt-link v-slot="{ navigate, href }" custom :to="localePath('/profile')">
        <div
          class="ks-drawer-link"
          :class="{ 'link-active': $route.path === localePath(href) }"
          role="link"
          @click="navigate"
        >
          <div class="link-wrapper">
            <iconly-icon name="profile" class="fill-current" />
            <span class="pt-2 text-center">{{ $t('drawer.profile') }}</span>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link v-slot="{ navigate, href }" custom :to="localePath('/resume')">
        <div
          class="ks-drawer-link"
          :class="{ 'link-active': $route.path === localePath(href) }"
          role="link"
          @click="navigate"
        >
          <div class="link-wrapper">
            <iconly-icon name="document" class="fill-current" />
            <span class="pt-2 text-center">{{ $t('drawer.resume') }}</span>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link v-slot="{ navigate, href }" custom :to="localePath('/jobs')">
        <div
          class="ks-drawer-link"
          :class="{ 'link-active': $route.path === localePath(href) }"
          role="link"
          @click="navigate"
        >
          <div class="link-wrapper">
            <span class="job-badge"></span>
            <iconly-icon name="activity" class="relative fill-current" />
            <span class="pt-2 text-center">{{ $t('drawer.jobs') }}</span>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link v-slot="{ navigate, href }" custom :to="localePath('/settings')">
        <div
          class="ks-drawer-link"
          :class="{ 'link-active': $route.path === localePath(href) }"
          role="link"
          @click="navigate"
        >
          <div class="link-wrapper">
            <iconly-icon name="setting" class="fill-current" />
            <span class="pt-2 text-center">{{ $t('drawer.settings') }}</span>
          </div>
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
    employeeIcons: [
      {}
    ]
    employerIcons: [
      {}
    ]
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
.kaizen-img {
  @apply cursor-pointer rounded-lg w-4/5 mx-auto justify-start hover:bg-gray-lighter transition duration-200;
}

.ks-drawer {
  @apply flex flex-col space-y-3 items-center min-h-full w-48 bg-white p-6 sticky top-0 overflow-y-auto;
}

.ks-drawer-link {
  @apply flex relative justify-center items-center p-4 rounded-lg w-28 h-28 outline-none select-none transition duration-200;
}

.ks-drawer-link:not(.link-active) {
  @apply cursor-pointer text-gray-dark;
}

.ks-drawer-link:not(.link-active):hover {
  @apply hover:bg-gray-lighter text-blue-kaizen;
}

.link-active {
  @apply bg-gray-lighter text-blue-kaizen;
}

.link-wrapper {
  @apply top-2 flex flex-col items-center justify-center;
}

.menu {
  @apply flex flex-col space-y-3 pt-3;
}

.job-badge {
  @apply absolute z-10 top-7 right-11 h-2 w-2 rounded-full bg-red-500;
}

#logout {
  @apply flex justify-center items-end flex-grow pb-4;
}
</style>
