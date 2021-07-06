<template>
  <ks-card class="h-full p-8">
    <div class="settings-header">
      <h1 class="text-3xl font-medium">
        {{ $t('settings.settings') }}
      </h1>
    </div>
    <h1 class="pt-6 text-lg text-blue-kaizen">
      {{ $t('settings.header') }}
    </h1>
    <div class="flex justify-between pt-6">
      <div class="flex space-x-4">
        <div class="user-img-lg"></div>
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            profile.name + ' ' + profile.lastName
          }}</span>
          <span class="font-light text-gray-dark">{{
            $t('settings.accountCreatedOn')
          }}</span>
          <span class="font-light text-gray-dark">{{
            profile.created_at
              ? $d(new Date(), 'numeric')
              : $t('settings.noDate')
          }}</span>
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('settings.language')
        }}</span>
        <span class="font-light text-gray-dark">{{
          $t('settings.language')
        }}</span>
      </div>
    </div>
    <hr class="my-8 border" />

    <hr class="my-8 border" />
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

type NullableDate = null | Date

export default Vue.extend({
  layout: 'employer',
  data() {
    return {
      profile: {
        name: '',
        lastName: '',
        birthDate: null as NullableDate,
        contactPerson: '',
        adress: '',
        industry: '',
        position: '',
        state: '',
        city: '',
        phone: '',
        email: '',
        zip: '',
        linkedin: '',
        profile_picture_URL: '',
      },
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/employer/profile')
      res.birthDate = res.birthDate ? new Date(res.birthDate) : null
      this.profile = res
    } catch (error) {}
  },
  fetchOnServer: false,
})
</script>

<style scoped>
.settings-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}
.settings-header > * {
  @apply pt-4;
}
.user-img-lg {
  @apply flex-shrink-0 w-20 h-20 rounded-md bg-gray-darker animate-pulse;
}

.social-btn {
  @apply focus:outline-none rounded-lg;
}

.edit-profile-btn {
  @apply inline-flex items-center justify-between w-full space-x-4  focus:outline-none;
}

.item-value {
  @apply text-gray-darker font-light py-1;
}

.edit-enter-active,
.edit-leave-active {
  transition: opacity 0.2s;
}
.edit-enter,
.edit-leave-to {
  opacity: 0;
}

.saved-modal {
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur;
}
</style>
