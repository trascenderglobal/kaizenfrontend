<template>
  <ks-card class="h-full p-8">
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
        <div class="user-img-lg">
          <div class="img-wrapper">
            <iconly-icon
              name="camera"
              :size="1.2"
              class="fill-current text-white"
            />
            <div
              role="img"
              :aria-label="$t('profile.userImage')"
              class="img"
              :style="userImage"
            ></div>
          </div>
        </div>
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
    <hr class="my-8 border" />
    <h1 class="title">{{ $t('settings.deleteAccount') }}</h1>
    <div class="flex justify-start py-2">
      <ks-btn color="light" large font="font-normal" @click="showDelete = true"
        >{{ $t('settings.deleteMyAccount') }}
      </ks-btn>
    </div>
    <span class="py-2 text-gray-darker font-light"
      >{{ $t('settings.deleteLeaveSure') }}
    </span>
    <transition name="edit">
      <div v-if="showDelete" class="saved-modal">
        <div class="w-3/5">
          <ks-card class="p-8" col>
            <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
              <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                {{ $t('settings.deleteMyAccount') }}
              </h1>
              <div class="user-img-lg">
                <div class="img-wrapper">
                  <iconly-icon
                    name="camera"
                    :size="1.2"
                    class="fill-current text-white"
                  />
                  <div class="img" :style="userImage"></div>
                </div>
              </div>
              <hr class="self-stretch" />
              <p class="text-blue-kaizen text-center">
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
                  outline
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
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

type NullableDate = null | Date

export default Vue.extend({
  name: 'SettingsPage',
  layout: 'employer',
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
      const res = await this.$axios.$get('/employer/settings')
      res.created_at = res.created_at ? new Date(res.created_at) : null
      this.profile = res
    } catch (error) {}
  },
  computed: {
    userImage(): object {
      if (this.profile.profile_picture_URL)
        return {
          'background-image': `url(${this.profile.profile_picture_URL})`,
        }
      return {}
    },
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
  fetchOnServer: false,
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

.user-img-lg {
  @apply flex-shrink-0 w-20 h-20;
}

.img-wrapper {
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-gray-darker to-gray-light shadow-md backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img {
  @apply w-full h-full bg-no-repeat bg-center z-10 bg-cover absolute rounded-md top-0 left-0 right-0 bottom-0;
}

.title {
  @apply text-lg font-extralight text-blue-kaizen;
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
