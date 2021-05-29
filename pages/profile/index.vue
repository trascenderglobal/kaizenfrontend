<template>
  <div class="ks-container">
    <ks-card class="bg-opacity-50 backdrop-filter backdrop-blur-sm" row>
      <ks-drawer />
      <div class="ks-content">
        <div class="top-content">
          <div class="breadcrumb">
            <ks-breadcrumb />
          </div>
          <div class="user-info">
            <user-info />
          </div>
        </div>
        <div class="main-content">
          <div class="main-info">
            <ks-card class="h-full p-8" col>
              <div class="profile-header">
                <h1 class="text-3xl font-medium">
                  {{ $t('profile.myProfile') }}
                </h1>
                <div class="flex items-center min-w-40">
                  <button
                    type="button"
                    class="
                      inline-flex
                      w-full
                      justify-between
                      space-x-4
                      items-center
                      focus:outline-none
                      text-link-blue
                    "
                    :disabled="edit"
                    @click="edit = true"
                  >
                    <span>{{ $t('profile.editProfile') }}</span>
                    <i>
                      <iconly-icon
                        name="edit-square"
                        type="bold"
                        :size="1.4"
                        class="fill-current"
                      />
                    </i>
                  </button>
                </div>
              </div>
              <h1 class="pt-6 text-lg text-blue-kaizen">
                {{ $t('profile.contactInfo') }}
              </h1>
              <div class="pt-6 flex justify-between">
                <div class="flex space-x-4">
                  <div class="user-img-lg"></div>
                  <div class="flex flex-col space-y-2">
                    <span class="font-medium text-blue-kaizen">{{
                      profile.name + ' ' + profile.lastName
                    }}</span>
                    <span
                      class="font-light text-gray-dark"
                      :class="{ 'select-none': !profile.skills }"
                      >{{
                        profile.skills
                          ? 'Data Scientist'
                          : $t('profile.noSkills')
                      }}</span
                    >
                    <span
                      class="font-light text-gray-dark"
                      :class="{ 'select-none': !profile.birthdate }"
                      >{{
                        profile.birthDate
                          ? $d(new Date(), 'numeric')
                          : $t('profile.noBirth')
                      }}</span
                    >
                  </div>
                </div>
                <div class="flex flex-col min-w-40 space-y-2">
                  <span class="font-medium text-blue-kaizen">{{
                    $t('profile.novelties')
                  }}</span>
                  <span class="font-light text-gray-dark"
                    >{{ $t('profile.status') }}:</span
                  >
                  <ks-select :label="$t('profile.status')"></ks-select>
                </div>
              </div>
              <hr class="my-8 border text-gray-darker" />
              <div class="flex flex-col space-y-4">
                <div class="flex flex-wrap w-full">
                  <div class="flex items-center space-x-4 w-1/2">
                    <span class="font-medium text-blue-kaizen">{{
                      $t('profile.state')
                    }}</span>
                    <span
                      class="text-gray-darker font-light"
                      :class="{ 'select-none': !profile.state }"
                      >{{ profile.state ? profile.state : '-' }}</span
                    >
                  </div>
                  <div class="flex items-center space-x-4 w-1/2">
                    <span class="font-medium text-blue-kaizen">{{
                      $t('profile.phone')
                    }}</span>
                    <span
                      class="text-gray-darker font-light"
                      :class="{ 'select-none': !profile.phone }"
                      >{{ profile.phone ? profile.phone : '-' }}</span
                    >
                  </div>
                </div>
                <div class="flex flex-wrap w-full">
                  <div class="flex items-center space-x-4 w-1/2">
                    <span class="font-medium text-blue-kaizen">{{
                      $t('profile.city')
                    }}</span>
                    <span
                      class="text-gray-darker font-light"
                      :class="{ 'select-none': !profile.city }"
                      >{{ profile.city ? profile.city : '-' }}</span
                    >
                  </div>
                  <div class="flex items-center space-x-4 w-1/2">
                    <span class="font-medium text-blue-kaizen">{{
                      $t('profile.email')
                    }}</span>
                    <span class="text-gray-darker font-light">{{
                      profile.email
                    }}</span>
                  </div>
                </div>
                <div class="flex flex-wrap w-full">
                  <div class="flex items-center space-x-4 w-1/2">
                    <span class="font-medium text-blue-kaizen">{{
                      $t('profile.zip')
                    }}</span>
                    <span
                      class="text-gray-darker font-light"
                      :class="{ 'select-none': !profile.zip }"
                      >{{ profile.zip ? profile.zip : '-' }}</span
                    >
                  </div>
                  <div class="flex items-center space-x-4 w-1/2">
                    <span class="font-medium text-blue-kaizen">{{
                      $t('profile.social')
                    }}</span>
                    <div class="inline-flex items-center space-x-2">
                      <div
                        class="w-7 h-7 rounded-md bg-blue-light cursor-pointer"
                      ></div>
                      <div
                        class="w-7 h-7 rounded-md bg-blue-light cursor-pointer"
                      ></div>
                      <button type="button" class="social-btn">
                        <i
                          ><iconly-icon
                            name="plus"
                            :size="1.25"
                            class="fill-current"
                        /></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ks-card>
          </div>
          <div class="alerts">
            <ks-card class="h-full p-8">
              <ks-employee-alerts />
            </ks-card>
          </div>
        </div>
      </div>
    </ks-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ app }) {
    try {
      const res = await app.$axios.$get('/employee/profile')
      return {
        profile: res,
      }
    } catch (error) {}
  },
  data() {
    return {
      edit: false,
    }
  },
})
</script>

<style scoped>
.ks-container {
  @apply flex h-full mx-auto py-16 px-2 sm:px-16 lg:px-24;
}

.ks-content {
  @apply flex flex-col flex-wrap flex-grow p-8 space-y-8;
}

.top-content,
.main-content {
  @apply flex w-full space-x-8;
}

.main-content {
  @apply flex-grow;
}

.breadcrumb {
  @apply flex items-end min-w-3/4;
}

.user-info {
  @apply flex-grow;
}

.main-info {
  @apply h-full min-w-3/4;
}

.profile-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.profile-header > * {
  @apply pt-4;
}

.user-img-lg {
  @apply flex-shrink-0 w-20 h-20 rounded-md bg-gray-darker animate-pulse;
}

.social-btn {
  @apply focus:outline-none rounded-lg text-blue-kaizen hover:text-blue-darker transition duration-200;
}

.alerts {
  @apply h-full flex-grow;
}
</style>
