<template>
  <div class="layout">
    <div class="layout-circle"></div>
    <div class="layout-blur"></div>
    <div class="ks-app">
      <ks-card class="bg-opacity-50 backdrop-filter backdrop-blur-sm" row>
        <ks-drawer v-model="drawer" />
        <div class="ks-content">
          <div class="top-content">
            <div class="breadcrumb">
              <ks-breadcrumb />
              <ks-btn
                id="ksBurgerMenu"
                color="primary"
                text
                icon
                large
                @click.stop="drawer = true"
                ><iconly-icon
                  name="category"
                  :class="{ 'transform rotate-180': drawer }"
              /></ks-btn>
              <ks-language />
            </div>
            <ks-home />
            <div class="user-info">
              <ks-user-info />
            </div>
          </div>
          <div class="main-content">
            <div class="main-info">
              <Nuxt />
            </div>
            <div class="alerts">
              <ks-card class="h-full p-8">
                <ks-employer-approved />
              </ks-card>
            </div>
          </div>
        </div>
      </ks-card>
    </div>
    <ks-notifier />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EmployerLayout',
  middleware: 'employer',
  data() {
    return {
      drawer: false,
    }
  },
})
</script>

<style scoped>
.layout {
  @apply relative h-screen bg-gradient-to-tl from-blue-dark to-blue-light;
}

.layout-blur {
  backdrop-filter: blur(0.85px);
  @apply fixed w-full h-full bg-white bg-opacity-50;
}

.layout-circle {
  @apply fixed rounded-full h-180 w-180 -top-90 -left-90 md:h-240 md:w-240 md:-top-120 md:-left-120 lg:h-360 lg:w-360 lg:-top-180 lg:-left-180 border-120 lg:border-240 border-blue-kaizen;
}

.ks-app {
  @apply relative z-10 flex h-full mx-auto p-2 lg:p-4 xl:p-8;
}

.ks-content {
  @apply flex flex-col flex-grow p-2 lg:p-4 space-y-2 lg:space-y-4 overflow-auto;
}

.top-content {
  @apply sticky top-0 z-20 md:relative flex max-w-full space-x-2 lg:space-x-4 bg-white md:bg-transparent shadow-md md:shadow-none rounded-xl;
}
.main-content {
  @apply flex flex-grow max-w-full space-x-2 lg:space-x-4;
}

.breadcrumb {
  @apply flex flex-1 md:flex-auto justify-between items-end md:w-full md:max-w-3/4;
}

.user-info {
  @apply flex-1 md:flex-auto;
}

.main-info {
  @apply h-full w-full lg:max-w-3/4;
}

.alerts {
  @apply hidden lg:block h-full flex-grow;
}

#ksBurgerMenu {
  @apply md:hidden self-center;
}

#ksBurgerMenu svg {
  @apply fill-current duration-300 ease-out transition;
}

.logo-mobile {
  @apply flex items-center justify-center flex-1 md:hidden;
}
</style>
