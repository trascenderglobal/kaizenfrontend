<template>
  <transition name="drawer">
    <div
      v-show="value || !isMobile"
      class="drawer-mask"
      @click="$emit('input', false)"
    >
      <div class="ks-drawer scroller" role="navigation">
        <nuxt-link v-slot="{ navigate }" custom :to="localePath('/')">
          <img
            aria-label="Kaizen Squad"
            class="kaizen-img"
            :src="require('@/assets/img/kaizen-black.png')"
            alt="Kaizen Squad"
            role="link"
            @click.stop="goTo(navigate)"
          />
        </nuxt-link>
        <div class="menu">
          <nuxt-link
            v-for="link in links"
            :key="link.path"
            v-slot="{ navigate, href }"
            custom
            :to="localePath(link.path)"
          >
            <div
              :aria-label="$t(link.text)"
              class="ks-drawer-link"
              :class="{ 'link-active': $route.path.startsWith(href) }"
              role="link"
              @click.stop="goTo(navigate, $event)"
            >
              <div class="link-wrapper">
                <span v-if="link.badge" class="job-badge"></span>
                <iconly-icon :name="link.icon" class="fill-current" />
                <span class="pt-2 text-center">{{ $t(link.text) }}</span>
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
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import throttle from 'lodash.throttle'

interface DrawerLink {
  text: string
  icon: string
  path: string
  badge?: boolean
}

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      loading: false,
      width: 0,
    }
  },
  computed: {
    isMobile(): boolean {
      return this.width < 768
    },
    links(): DrawerLink[] {
      const links = [] as DrawerLink[]
      if (!this.$auth.user) return links
      else if (this.$auth.user.role === 0) {
        links.push(
          {
            text: 'drawer.profile',
            icon: 'profile',
            path: '/employer/profile',
          },
          {
            text: 'drawer.search',
            icon: 'search',
            path: '/employer/search',
          },
          {
            text: 'drawer.requests',
            icon: 'star',
            path: '/employer/requests',
          },
          {
            text: 'drawer.deals',
            icon: 'bag',
            path: '/employer/deals',
          },
          {
            text: 'drawer.settings',
            icon: 'setting',
            path: '/employer/settings',
          }
        )
      } else if (this.$auth.user.role === 1) {
        links.push(
          {
            text: 'drawer.profile',
            icon: 'profile',
            path: '/employee/profile',
          },
          {
            text: 'drawer.resume',
            icon: 'document',
            path: '/employee/resume',
          },
          {
            text: 'drawer.jobs',
            icon: 'activity',
            path: '/employee/jobs',
            badge: true,
          },
          {
            text: 'drawer.settings',
            path: '/employee/settings',
            icon: 'setting',
          }
        )
      } else if (this.$auth.user.role === 2) {
        links.push(
          {
            text: 'drawer.deals',
            path: '/admin/deals',
            icon: 'bag',
          },
          {
            text: 'drawer.users',
            path: '/admin/users',
            icon: '3-user',
          }
        )
      }
      return links
    },
  },
  mounted() {
    this.$nextTick(function () {
      if (!this.$nuxt.$isServer) {
        window.addEventListener('resize', throttle(this.setWidth, 200))
      }
    })
  },
  beforeDestroy() {
    if (!this.$nuxt.$isServer) {
      window.removeEventListener('resize', throttle(this.setWidth, 200))
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
    setWidth() {
      if (!this.$nuxt.$isServer) this.width = window.innerWidth
    },
    goTo(navigate: Function, e: Event) {
      navigate(e)
      this.$emit('input', false)
    },
  },
})
</script>

<style scoped>
.kaizen-img {
  @apply cursor-pointer rounded-lg w-32 mx-auto justify-start hover:bg-gray-lighter transition duration-200;
}

.drawer-mask {
  @apply flex fixed w-full min-h-full max-h-full bg-opacity-50 bg-blue-kaizen md:relative md:bg-opacity-100 md:bg-transparent md:h-auto md:w-auto z-30;
}

.ks-drawer {
  @apply fixed flex flex-col space-y-3 items-center h-full max-h-full min-w-48 max-w-48 bg-white p-6 top-0 overflow-y-auto shadow-md md:relative md:shadow-none z-30;
}

.ks-drawer-link {
  @apply flex relative justify-center items-center p-4 rounded-xl w-32 h-28 outline-none select-none transition duration-200;
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
  @apply absolute z-10 top-7 right-13 h-2 w-2 rounded-full bg-red-badge;
}

#logout {
  @apply flex justify-center items-end flex-grow pb-4;
}

.drawer-leave-active,
.drawer-enter-active {
  @apply transition transform duration-300;
  transition-timing-function: cubic-bezier(0.57, 0.26, 0.45, 0.97);
}
.drawer-enter,
.drawer-leave-to {
  transform: translate(-100%, 0);
}
</style>
