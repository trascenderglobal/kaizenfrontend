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
            class="img-wrapper"
            @click="$refs.imgInput.click()"
            @dragenter.prevent
            @dragover.prevent
            @dragleave.prevent
            @drop.prevent="setFileDrop"
          >
            <input
              ref="imgInput"
              type="file"
              accept=".png, .jpg, .jpeg"
              class="img-input"
              @change="setFile"
            />
            <div
              role="img"
              :aria-label="$t('profile.userImage')"
              class="img"
              :style="userImage"
            ></div>
            <div class="add-img">
              <iconly-icon
                name="camera"
                class="fill-current text-white"
                :size="1.2"
              />
            </div>
          </div>
          <div v-else class="img-wrapper">
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
          <template v-if="!edit">
            <span class="font-medium text-blue-kaizen">{{
              profile.name + ' ' + profile.lastName
            }}</span>
            <span
              class="font-light text-gray-dark"
              :class="{ 'select-none': !profile.industry }"
              >{{ industryAbbr }}</span
            >
            <span
              class="font-light text-gray-dark"
              :class="{ 'select-none': !registerDate }"
              >{{ registerDate ? $d(registerDate, 'numeric') : '-' }}</span
            >
          </template>
          <template v-else>
            <span class="font-medium text-blue-kaizen">{{
              profile.name + ' ' + profile.lastName
            }}</span>
            <ks-select
              v-model="profile.industry"
              :items="industries"
              class="border border-blue-light"
              :label="$t('profile.edit.enterIndustry')"
              bg-color="bg-transparent"
              clearable
              color="text-gray-darker"
            />
            <span
              class="font-light text-gray-dark"
              :class="{ 'select-none': !registerDate }"
              >{{ $d(registerDate, 'numeric') }}</span
            >
          </template>
        </div>
      </div>
    </div>
    <hr :class="edit ? 'my-6' : 'my-8'" />
    <div class="fields">
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">
              {{ $t('profile.companyName') }}
            </span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.company_name }"
            >{{ profile.company_name || '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-input
              v-model="profile.company_name"
              border-color="border-blue-light"
              :label="$t('profile.companyName')"
              disable-hint
              dense
            >
            </ks-input>
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">
              {{ $t('profile.contactPerson') }}
            </span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.contact_person }"
            >{{ profile.contact_person || '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-input
              v-model="profile.contact_person"
              border-color="border-blue-light"
              :label="$t('profile.contactPerson')"
              disable-hint
              dense
            >
            </ks-input>
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">
              {{ $t('profile.position') }}
            </span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.position }"
            >{{ profile.position || '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-input
              v-model="profile.position"
              border-color="border-blue-light"
              :label="$t('profile.position')"
              disable-hint
              dense
            >
            </ks-input>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-4 mb-8" />
    <div class="fields">
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">
              {{ $t('profile.address') }}
            </span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.adress }"
            >{{ profile.adress || '-' }}</span
          >
          <div v-else class="w-1/2">
            <ks-input
              v-model="profile.adress"
              border-color="border-blue-light"
              :label="$t('profile.address')"
              disable-hint
              dense
            >
            </ks-input>
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.state')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.state }"
            >{{ stateAbbr }}</span
          >
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.state"
              :items="states"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              bg-color="bg-transparent"
              clearable
              color="text-gray-darker"
              @input="profile.city = ''"
            />
          </div>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.phone')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.phone }"
            >{{ profile.phone || '-' }}</span
          >
          <div v-else class="flex-grow">
            <ks-input
              v-model="profile.phone"
              border-color="border-blue-light"
              :error="$v.profile.phone.$error"
              :label="$t('profile.edit.phone')"
              disable-hint
              dense
              @blur="$v.profile.phone.$touch"
            />
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.city')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.city }"
            >{{ profile.city || '-' }}</span
          >
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.city"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="cities"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
            />
          </div>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.email')
            }}</span>
          </div>
          <span v-if="!edit" class="item-value">{{ profile.email }}</span>
          <div v-else class="flex-grow">
            <span class="item-value">{{ profile.email }}</span>
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
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
              :error="$v.profile.zip.$error"
              :label="$t('profile.edit.typeZip')"
              maxlength="9"
              disable-hint
              dense
              @blur="$v.profile.zip.$touch"
            />
          </div>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.social')
            }}</span>
          </div>
          <div class="flex-grow inline-flex items-center space-x-2">
            <button
              type="button"
              class="linkedin-btn"
              :class="{
                active: profile.linkedin && !$v.profile.linkedin.$invalid,
              }"
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
                :error="$v.profile.linkedin.$error"
                :label="$t('profile.edit.linkedin')"
                @blur="$v.profile.linkedin.$touch"
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
              <ks-user-img
                :initials="profile.name"
                :image-url="profile.profile_picture_URL"
                large
              />
              <hr class="my-8" />
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
import { helpers, email } from 'vuelidate/lib/validators'

const isLinkedin = helpers.regex(
  'isLinkedin',
  /^https:\/\/(www\.)?linkedin\.com\/in\/./i
)

const isPhoneUS = helpers.regex(
  'isPhoneUS',
  /^\(?([2-9][0-8][0-9])\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/
)
// Indiana and Michigan ZIP codes start at 46 and 49
const isZIP = helpers.regex('isZIP', /^4[6-9]\d{3}(?:[- ]?\d{4})?$/)

const isImage = (value: File) => {
  if (value)
    return (
      value.type.includes('png') ||
      value.type.includes('jpg') ||
      value.type.includes('jpeg')
    )
  return true
}

type Image = null | File
type NullableDate = null | Date

export default Vue.extend({
  name: 'ProfilePage',
  layout: 'employer',
  //TODO: change fetch hook for asyncData when production target is server
  // async asyncData({ app }) {
  //   try {
  //     const res = await app.$axios.$get('/employer/profile')
  //     res.birthDate = res.birthDate ? new Date(res.birthDate) : null
  //     return {
  //       profile: res,
  //     }
  //   } catch (error) {}
  // },
  data() {
    return {
      edit: false,
      saved: false,
      loading: false,
      showSocial: false,
      image: null as Image,
      profile: {
        created_at: '',
        name: '',
        lastName: '',
        birthDate: null as NullableDate,
        contact_person: '',
        company_name: '',
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
      states: [
        {
          text: 'Indiana',
          value: 'IN',
        },
        {
          text: 'Michigan',
          value: 'MI',
        },
      ],
    }
  },
  // TODO: Change fetch hook for asyncData when production target is server
  async fetch() {
    try {
      const res = await this.$axios.$get('/employer/profile')
      this.profile = res
    } catch (error) {}
  },
  fetchOnServer: false,
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
    }
  },
  computed: {
    registerDate(): Date | null {
      return this.profile.created_at ? new Date(this.profile.created_at) : null
    },
    stateAbbr(): String {
      if (this.profile.state === 'IN') return 'Indiana'
      if (this.profile.state === 'MI') return 'Michigan'
      return '-'
    },
    industries(): Object[] {
      return [
        {
          text: this.$t('profile.industries.manufacturing'),
          value: 'manufacturing',
        },
      ]
    },
    industryAbbr(): String {
      if (this.profile.industry === 'manufacturing')
        return this.$t('profile.industries.manufacturing')
      return this.$t('profile.noIndustry')
    },
    cities(): String[] {
      if (this.profile.state === 'IN')
        return [
          'Bremen',
          'Bristol',
          'Dunlap',
          'Elkhart',
          'Goshen',
          'Granger',
          'Jamestown',
          'LaGrange',
          'Ligonier',
          'Middleburry',
          'Milford',
          'Mishawaka',
          'Nappanee',
          'New Paris',
          'Osceola',
          'Plymouth',
          'South Bend',
          'Syracuse',
          'Wakarusa',
          'Warsaw',
        ]
      if (this.profile.state === 'MI')
        return [
          'Allenton',
          'Berrien Springs',
          'Buchanan',
          'Cassopolis',
          'Constantine',
          'Dowagiac',
          'Eau Claire',
          'Edwardsburg',
          'Galien',
          'Jones',
          'Marcellus',
          'Niles',
          'Pokagon',
          'Union',
          'Vandalia',
          'White Pigeon',
        ]
      return []
    },
    userImage(): Object {
      if (this.profile.profile_picture_URL)
        return {
          'background-image': `url(${this.profile.profile_picture_URL})`,
        }
      return {}
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
    async updateProfile() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        const data = new FormData()
        if (this.image) data.append('profile_picture', this.image as any)
        data.append('name', this.profile.name)
        data.append('last_name', this.profile.lastName)
        data.append('company_name', this.profile.company_name || '')
        data.append('contact_person', this.profile.contact_person || '')
        data.append('position', this.profile.position || '')
        data.append('industry', this.profile.industry || '')
        data.append('adress', this.profile.adress || '')
        data.append('state', this.profile.state || '')
        data.append('phone', this.profile.phone || '')
        data.append('city', this.profile.city || '')
        data.append('zip', this.profile.zip || '')
        data.append('linkedin', this.profile.linkedin || '')
        await this.$axios.$post('/employer/profile/edit', data)
        this.edit = false
        // re fetch user profile
        const res = await this.$axios.$get('/employer/profile')
        URL.revokeObjectURL(this.profile.profile_picture_URL)
        this.profile = res
        this.$store.commit('user/SET_PROFILE_PICTURE', res.profile_picture_URL)
        this.image = null
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
      const fileList: File[] = [...e.target.files]
      this.image = fileList[0]
      this.$v.image.$touch()
      if (this.$v.image.isImage)
        this.profile.profile_picture_URL = URL.createObjectURL(this.image)
      else this.image = null
    },
    setFileDrop(e: any) {
      const fileList: File[] = [...e.dataTransfer.files]
      this.image = fileList[0]
      this.$v.image.$touch()
      if (this.$v.image.isImage)
        this.profile.profile_picture_URL = URL.createObjectURL(this.image)
      else this.image = null
    },
  },
  validations() {
    return {
      image: {
        isImage,
      },
      profile: {
        phone: {
          isPhoneUS,
        },
        email: {
          email,
        },
        zip: {
          isZIP,
        },
        linkedin: {
          isLinkedin,
        },
      },
    }
  },
})
</script>

<style scoped>
hr {
  @apply border-blue-light;
}

.profile-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.profile-header > * {
  @apply pt-4;
}

.user-img-lg {
  @apply flex-shrink-0 w-20 h-20;
}

.add-img:hover {
  @apply bg-opacity-50 transition duration-200;
}

.add-img {
  @apply absolute flex items-center justify-center z-20 w-full h-full rounded-lg bg-opacity-20 bg-black shadow-md;
}

.img-wrapper {
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-gray-darker to-gray-light shadow-md backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img,
.add-img > .img {
  @apply w-full h-full bg-no-repeat bg-center z-10 bg-cover absolute rounded-md top-0 left-0 right-0 bottom-0;
}

.img-input {
  @apply absolute opacity-0 invisible;
}

.linkedin-btn {
  @apply flex transition items-center justify-center cursor-default rounded-lg w-8 h-8 focus:outline-none bg-blue-light;
}

.linkedin-btn.active {
  @apply cursor-pointer hover:bg-blue-kaizen;
}

.linkedin-btn:disabled,
.linkedin-btn.active:disabled {
  @apply bg-gray-darker hover:bg-gray-darker cursor-default;
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

.field-row {
  @apply flex flex-wrap w-full;
}

.field-col {
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
