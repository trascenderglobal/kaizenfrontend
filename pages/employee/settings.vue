<template>
  <ks-card class="h-full p-8" col>
    <div class="settings-header">
      <h1 class="text-3xl font-medium">
        {{ $t('settings.settings') }}
      </h1>
    </div>
    <h1 class="title">
      {{ $t('settings.header') }}
    </h1>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <ks-user-img
          :initials="profile.name"
          :image-url="profile.profile_picture_URL"
          large
        />
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            $t('settings.account')
          }}</span>
          <span class="font-light text-gray-dark">{{
            $t('settings.accountCreatedOn')
          }}</span>
          <span class="font-light text-gray-dark">{{
            profile.created_at ? $d(profile.created_at) : $t('settings.noDate')
          }}</span>
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-full lg:min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('settings.language')
        }}</span>
        <ks-language-list />
      </div>
    </div>
    <hr />
    <h1 class="title">
      {{ $t('settings.deleteAccount') }}
    </h1>
    <div class="py-2">
      <ks-btn
        color="light"
        large
        font="font-normal"
        @click="showDelete = true"
        >{{ $t('settings.deleteMyAccount') }}</ks-btn
      >
    </div>
    <span class="block py-2 text-gray-darker font-light">{{
      $t('settings.deleteLeaveSure')
    }}</span>
    <template #outer>
      <transition name="edit">
        <div v-if="showDelete" class="saved-modal">
          <div class="w-11/12 lg:w-3/5">
            <ks-card class="p-8" col>
              <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
                <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                  {{ $t('settings.deleteMyAccount') }}
                </h1>
                <ks-user-img
                  :initials="profile.name"
                  :image-url="profile.profile_picture_URL"
                  large
                />
                <hr class="self-stretch" />
                <p class="text-lg text-blue-kaizen text-center">
                  {{ $t('settings.deleteLeave') }}
                </p>
                <p class="text-2xl font-medium text-blue-kaizen text-center">
                  {{ $t('settings.deleteSure') }}
                </p>
                <div
                  class="flex space-x-6 pt-8 flex-grow items-end justify-center"
                >
                  <ks-btn
                    color="darker-gray"
                    text
                    class="text-xl"
                    @click="showDelete = false"
                    >{{ $t('settings.cancel') }}</ks-btn
                  >
                  <ks-btn
                    color="danger"
                    class="text-xl"
                    :loading="deleting"
                    @click="deleteProfile"
                    >{{ $t('settings.delete') }}</ks-btn
                  >
                </div>
              </div>
            </ks-card>
          </div>
        </div>
      </transition>
    </template>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

type NullableDate = null | Date

export default Vue.extend({
  name: 'SettingsPage',
  layout: 'employee',
  data() {
    return {
      profile: {
        created_at: null as NullableDate,
        name: '',
        lastName: '',
        email: '',
        profile_picture_URL: '',
      },
      showDelete: false,
      deleting: false,
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/employee/settings')
      res.created_at = res.created_at ? new Date(res.created_at) : null
      this.profile = res
    } catch (error) {}
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('settings.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('settings.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  methods: {
    async deleteProfile(): Promise<void> {
      try {
        this.deleting = true
        await this.$axios.$delete('/user/delete')
        await this.$auth.logout()
      } catch (error) {
      } finally {
        this.deleting = false
        this.showDelete = false
      }
    },
  },
})
</script>

<style scoped>
hr {
  @apply my-6 border-blue-light;
}

.settings-header {
  @apply flex justify-start text-blue-kaizen pb-6;
}

.settings-header > * {
  @apply pt-4;
}

.title {
  @apply text-lg text-blue-kaizen;
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
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur overflow-y-auto;
}
</style>
