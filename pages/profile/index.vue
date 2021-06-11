<template>
  <ks-card class="h-full p-8" col>
    <div class="profile-header">
      <h1 class="text-3xl font-medium">
        {{ $t('profile.myProfile') }}
      </h1>
      <div class="flex items-center min-w-40">
        <button
          type="button"
          class="edit-profile-btn text-link-blue"
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
    <div class="flex justify-between pt-6">
      <div class="flex space-x-4">
        <div class="user-img-lg"></div>
        <div class="flex flex-col space-y-2">
          <template v-if="!edit">
            <span class="font-medium text-blue-kaizen">{{
              profile.name + ' ' + profile.lastName
            }}</span>
            <span
              class="font-light text-gray-dark"
              :class="{ 'select-none': !profile.skills }"
              >{{
                profile.skills ? 'Data Scientist' : $t('profile.noSkills')
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
          </template>
          <template v-else>
            <span class="font-medium text-blue-kaizen">{{
              profile.name + ' ' + profile.lastName
            }}</span>
            <ks-input
              border-color="border-blue-light"
              dense
              disable-hint
              :label="$t('profile.edit.typeRole')"
            ></ks-input>
            <ks-datepicker
              class="border border-blue-light"
              :label="$t('profile.edit.birthDate')"
              bg-color="bg-transparent"
              color="text-gray-darker"
            ></ks-datepicker>
          </template>
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('profile.novelties')
        }}</span>
        <span class="font-light text-gray-dark"
          >{{ $t('profile.status') }}:</span
        >
        <ks-select :label="$t('profile.status')" :disabled="!edit"></ks-select>
      </div>
    </div>
    <hr class="my-8 border" />
    <div class="flex flex-col space-y-4">
      <div class="flex flex-wrap w-full">
        <div class="flex items-center w-1/2 space-x-4">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.state')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.state }"
            >{{ profile.state ? profile.state : '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-select
              v-model="profile.state"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              bg-color="bg-transparent"
              color="text-gray-darker"
            ></ks-select>
          </div>
        </div>
        <div class="flex items-center w-1/2 space-x-4">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.phone')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.phone }"
            >{{ profile.phone ? profile.phone : '-' }}</span
          >
          <div v-else class="w-full">
            <ks-input
              v-model="profile.phone"
              border-color="border-blue-light"
              :label="$t('profile.edit.phone')"
              disable-hint
              dense
            >
            </ks-input>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full">
        <div class="flex items-center w-1/2 space-x-4">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.city')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.city }"
            >{{ profile.city ? profile.city : '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-select
              v-model="profile.city"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              bg-color="bg-transparent"
              color="text-gray-darker"
            ></ks-select>
          </div>
        </div>
        <div class="flex items-center w-1/2 space-x-4">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.email')
            }}</span>
          </div>
          <span v-if="!edit" class="item-value">{{ profile.email }}</span>
          <div v-else class="w-full">
            <ks-input
              v-model="profile.email"
              border-color="border-blue-light"
              :label="$t('profile.edit.email')"
              disable-hint
              dense
            >
            </ks-input>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full">
        <div class="flex items-center w-1/2 space-x-4">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.zip')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.zip }"
            >{{ profile.zip ? profile.zip : '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-select
              v-model="profile.zip"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              bg-color="bg-transparent"
              color="text-gray-darker"
            ></ks-select>
          </div>
        </div>
        <div class="flex items-center w-1/2 space-x-4">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.social')
            }}</span>
          </div>
          <div class="inline-flex items-center space-x-2">
            <div class="rounded-md cursor-pointer w-7 h-7 bg-blue-light"></div>
            <div class="rounded-md cursor-pointer w-7 h-7 bg-blue-light"></div>
            <button
              type="button"
              class="social-btn text-link-blue"
              :disabled="!edit"
            >
              <i
                ><iconly-icon name="plus" :size="1.25" class="fill-current"
              /></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end flex-grow">
      <transition name="edit">
        <ks-btn
          v-if="edit"
          class="self-end"
          color="success"
          dense
          :loading="loading"
          @click="updateProfile"
          >{{ $t('profile.edit.save') }}</ks-btn
        >
      </transition>
    </div>
    <transition name="edit">
      <div v-if="saved" class="saved-modal">
        <div class="w-3/5">
          <ks-card class="p-8" col>
            <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
              <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                {{ $t('profile.edit.saved.title') }}
              </h1>
              <div class="user-img-lg"></div>
              <hr class="border self-stretch" />
              <p class="text-xl text-blue-kaizen text-center">
                {{ $t('profile.edit.saved.text') }}
              </p>
              <div class="flex pt-16 flex-grow items-end justify-center">
                <ks-btn
                  color="success"
                  class="text-xl"
                  @click="saved = false"
                  >{{ $t('profile.edit.saved.btn') }}</ks-btn
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

export default Vue.extend({
  layout: 'main',
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
      saved: false,
      loading: false,
      profile: {
        name: '',
        lastName: '',
        birthDate: null,
        novelties: null,
        state: null,
        city: null,
        phone: null,
        email: '',
        zip: null,
        linkedin: null,
      },
    }
  },
  methods: {
    async updateProfile() {
      try {
        this.edit = false
        this.loading = true
        await this.$axios.$post('/employee/profile/edit', {
          name: this.profile.name,
          last_name: this.profile.lastName,
          birth_date: this.profile.birthDate,
          novelties: this.profile.novelties,
          state: this.profile.state,
          city: this.profile.city,
          phone: this.profile.phone,
          zip: this.profile.zip,
          linkedin: this.profile.linkedin,
        })
        this.saved = true
      } catch (error) {
        this.saved = false
      } finally {
        this.loading = false
      }
    },
  },
})
</script>

<style scoped>
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
