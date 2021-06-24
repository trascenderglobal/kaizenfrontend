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
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <div class="user-img-lg" :class="{ 'cursor-pointer': edit }">
          <div
            v-if="edit"
            class="w-full h-full"
            @click="$refs.imgInput.click()"
            @dragenter.prevent
            @dragover.prevent
            @dragleave.prevent
            @drop.prevent="setFileDrop"
          >
            <input
              ref="imgInput"
              type="file"
              accept="image/*"
              class="img-input"
              @change="setFile"
            />
            <div class="add-img">
              <iconly-icon name="image" class="fill-current text-white" />
            </div>
          </div>
          <template v-else>
            <div v-if="!profile.profile_picture_URL" class="img-placeholder">
              <iconly-icon name="image" class="fill-current text-white" />
            </div>
            <div v-else class="img-wrapper">
              <div
                class="img"
                :style="{
                  'background-image': `url(${profile.profile_picture_URL})`,
                }"
              ></div>
            </div>
          </template>
        </div>
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
                  ? $d(profile.birthDate, 'numeric')
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
            />
            <ks-datepicker
              v-model="profile.birthDate"
              class="border border-blue-light"
              :label="$t('profile.edit.birthDate')"
              :disabled-date="isLaborAge"
              :default-value="laborAge"
              bg-color="bg-transparent"
              color="text-gray-darker"
            />
          </template>
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-full lg:min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('profile.novelties')
        }}</span>
        <span class="font-light text-gray-dark"
          >{{ $t('profile.status') }}:</span
        >
        <ks-select
          v-model="profile.novelties"
          :label="$t('profile.status')"
          :bg-color="
            edit
              ? 'bg-gray-darker'
              : profile.novelties === 1
              ? 'bg-green-kaizen'
              : profile.novelties === 0
              ? 'bg-red-kaizen'
              : 'bg-gray-darker'
          "
          :disabled="!edit"
          :items="statuses"
        />
      </div>
    </div>
    <hr class="border" :class="edit ? 'my-6' : 'my-8'" />
    <div class="fields">
      <div class="flex flex-wrap w-full">
        <div class="fields-col">
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
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.state"
              :items="states"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              bg-color="bg-transparent"
              color="text-gray-darker"
            />
          </div>
        </div>
        <div class="fields-col">
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
          <div v-else class="flex-grow">
            <ks-input
              v-model="profile.phone"
              border-color="border-blue-light"
              :label="$t('profile.edit.phone')"
              disable-hint
              dense
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full">
        <div class="fields-col">
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
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.city"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              bg-color="bg-transparent"
              color="text-gray-darker"
            />
          </div>
        </div>
        <div class="fields-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.email')
            }}</span>
          </div>
          <span v-if="!edit" class="item-value">{{ profile.email }}</span>
          <div v-else class="flex-grow">
            <ks-input
              v-model="profile.email"
              border-color="border-blue-light"
              :label="$t('profile.edit.email')"
              disable-hint
              dense
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full">
        <div class="fields-col">
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
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-input
              v-model="profile.zip"
              border-color="border-blue-light"
              :label="$t('profile.edit.typeZip')"
              maxlength="5"
              disable-hint
              dense
            />
          </div>
        </div>
        <div class="fields-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.social')
            }}</span>
          </div>
          <div class="flex-grow inline-flex items-center space-x-2">
            <button
              type="button"
              class="linkedin-btn"
              :disabled="edit"
              @click.stop="showLinkedin"
            >
              <iconly-icon name="linkedin" :size="0.8" />
            </button>
            <div v-if="edit" class="flex-grow">
              <ks-input
                v-model="profile.linkedin"
                border-color="border-blue-light"
                dense
                disable-hint
                :label="$t('profile.edit.linkedin')"
              />
            </div>
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
import {
  // required,
  minLength,
  maxLength,
  url,
  helpers,
} from 'vuelidate/lib/validators'

const isLinkedin = helpers.regex(
  'isLinkedin',
  /https:\/\/(www\.)?linkedin\.com\/in\/./i
)

const isImage = (value: File) => {
  if (value) return value.type.includes('image')
  return true
}

export default Vue.extend({
  layout: 'employee',
  async asyncData({ app }) {
    try {
      const res = await app.$axios.$get('/employee/profile')
      res.birthDate = res.birthDate ? new Date(res.birthDate) : null
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
      showSocial: false,
      image: null,
      profile: {
        name: '',
        lastName: '',
        birthDate: new Date(),
        novelties: '',
        state: '',
        city: '',
        phone: '',
        email: '',
        zip: '',
        linkedin: '',
      },
      states: [
        {
          text: 'Indiana',
          value: 'Indiana',
        },
        {
          text: 'Michigan',
          value: 'Michigan',
        },
      ],
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('profile.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('profile.meta.description'),
        },
        ...i18nHead.meta,
      ],
      link: [i18nHead.link],
    }
  },
  computed: {
    laborAge(): Date {
      const labor = new Date()
      labor.setFullYear(labor.getFullYear() - 14)
      return labor
    },
    statuses(): Object[] {
      return [
        {
          text: this.$t('profile.statuses.available'),
          value: 1,
        },
        {
          text: this.$t('profile.statuses.busy'),
          value: 0,
        },
      ]
    },
  },
  methods: {
    isLaborAge(d: Date): boolean {
      return d > this.laborAge
    },
    async updateProfile(): Promise<void> {
      try {
        this.edit = false
        this.loading = true
        this.$v.$touch()
        if (this.$v.$invalid) return
        const data = new FormData()
        if (this.image) data.append('profile_picture', this.image as any)
        if (this.profile.birthDate)
          data.append('birth_date', this.profile.birthDate.toJSON())
        data.append('name', this.$auth.user.name)
        data.append('last_name', this.$auth.user.lastName)
        data.append('novelties', this.profile.novelties || '')
        data.append('state', this.profile.state || '')
        data.append('phone', this.profile.phone || '')
        data.append('city', this.profile.city || '')
        data.append('zip', this.profile.zip || '')
        data.append('linkedin', this.profile.linkedin || '')
        await this.$axios.$post('/employee/profile/edit', data)
        this.saved = true
      } catch (error) {
        this.saved = false
      } finally {
        this.loading = false
      }
    },
    showLinkedin(): void {
      if (!this.edit && this.profile.linkedin)
        window.open(this.profile.linkedin, '_blank')
    },
    setFile(e: any) {
      const fileList = [...e.target.files]
      this.image = fileList[0]
    },
    setFileDrop(e: any) {
      const fileList = [...e.dataTransfer.files]
      this.image = fileList[0]
    },
  },
  validations() {
    return {
      profile: {
        image: {
          isImage,
        },
        zip: {
          minLength: minLength(5),
          maxLength: maxLength(5),
        },
        linkedin: {
          url,
          isLinkedin,
        },
      },
    }
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
  @apply flex-shrink-0 w-20 h-20;
}

.user-img-lg:hover .add-img {
  @apply opacity-100 visible;
}

.add-img {
  @apply flex items-center justify-center w-full h-full rounded-md opacity-0 invisible bg-opacity-30 bg-black transition duration-200;
}

.img-placeholder {
  @apply flex items-center justify-center w-full h-full rounded-md bg-gray-darker;
}

.img-wrapper {
  @apply relative w-full h-full bg-gray-darker rounded-lg;
}

.img-wrapper > .img {
  @apply w-full h-full bg-no-repeat bg-center bg-cover absolute rounded-md top-0 left-0 right-0 bottom-0;
}

.img-input {
  @apply absolute opacity-0 invisible;
}

.linkedin-btn {
  @apply flex transition items-center justify-center rounded-lg cursor-pointer w-8 h-8 focus:outline-none bg-blue-light hover:bg-blue-kaizen;
}

.linkedin-btn:disabled {
  @apply bg-gray-darker hover:bg-gray-darker cursor-auto;
}

.edit-profile-btn {
  @apply inline-flex items-center justify-between w-full space-x-4  focus:outline-none;
}

.item-value {
  @apply text-gray-darker font-light py-1;
}

.fields {
  @apply flex flex-col;
}

.fields-col {
  @apply flex items-center w-full lg:w-1/2 space-x-4 pb-4;
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
