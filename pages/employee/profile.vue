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
        <div v-if="edit" class="user-img-lg cursor-pointer">
          <div
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
        </div>
        <ks-user-img
          v-else
          large
          :initials="profile.name"
          :image-url="profile.profile_picture_URL"
        />
        <div class="flex flex-col space-y-2">
          <template v-if="!edit">
            <span class="font-medium text-blue-kaizen">{{
              profile.name + ' ' + profile.lastName
            }}</span>
            <span
              class="text-gray-dark"
              :class="{ 'select-none': !mainSkill }"
              >{{ mainSkill || $t('profile.noSkills') }}</span
            >
            <span
              class="text-gray-dark"
              :class="{ 'select-none': !profile.birthDate }"
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
            <span
              class="text-gray-dark"
              :class="{ 'select-none': !mainSkill }"
              >{{ mainSkill || $t('profile.noSkills') }}</span
            >
            <ks-datepicker
              v-model="profile.birthDate"
              class="border border-blue-light"
              :label="$t('profile.edit.birthDate')"
              :disabled-date="isLaborAge"
              bg-color="bg-transparent"
              color="text-gray-darker"
              clearable
            />
          </template>
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-full lg:min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('profile.novelties')
        }}</span>
        <span class="text-gray-dark">{{ $t('profile.status') }}:</span>
        <ks-select
          v-model.number="profile.novelties"
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
          clearable
        />
      </div>
    </div>
    <hr :class="edit ? 'my-6' : 'my-8'" />
    <div class="fields">
      <div class="field-row">
        <div class="field-col flex-auto">
          <div>
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.salaryRate')
            }}</span>
          </div>
          <div class="flex-auto">
            <ks-range
              v-model.number="profile.expected_salary_rate"
              :disabled="!edit"
            />
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.shift')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.shift }"
            >{{ shift }}</span
          >
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.shift"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="shifts"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
            />
          </div>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.typeOfContract')
            }}</span>
          </div>
          <span
            v-if="!edit"
            class="item-value"
            :class="{ 'select-none': !profile.type_of_contract }"
            >{{ typeOfContract }}</span
          >
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.type_of_contract"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="typeOfContracts"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
            />
          </div>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div v-if="!edit" class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-chip
              v-if="!edit"
              :class="{ 'select-none': !profile.working_mode }"
              :bg-color="
                profile.working_mode ? 'bg-blue-light' : 'bg-gray-darker'
              "
              >{{ workingMode }}</ks-chip
            >
          </div>
          <div v-else class="flex-grow lg:flex-grow-0 lg:w-1/2">
            <ks-select
              v-model="profile.working_mode"
              class="border"
              :class="
                profile.working_mode && !edit
                  ? 'border-blue-light'
                  : 'border-gray-darker'
              "
              :label="$t('profile.edit.select')"
              :items="workingModes"
              clearable
              :bg-color="
                profile.working_mode && !edit
                  ? 'bg-blue-light'
                  : 'bg-gray-darker'
              "
            />
          </div>
        </div>
      </div>
    </div>
    <hr :class="edit ? 'my-6' : 'my-8'" />
    <div class="fields">
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
            >{{ formattedPhone }}</span
          >
          <div v-else class="flex-grow">
            <ks-input
              v-model="profile.phone"
              v-mask="'(###) ###-####'"
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
            >{{ profile.zip || '-' }}</span
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
    <template #outer>
      <transition name="edit">
        <div v-if="saved" class="saved-modal" role="dialog">
          <div class="w-11/12 lg:w-3/5">
            <ks-card class="p-8" col>
              <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
                <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                  {{ $t('profile.edit.saved.title') }}
                </h1>
                <ks-user-img
                  large
                  :initials="profile.name"
                  :image-url="profile.profile_picture_URL"
                />
                <hr class="self-stretch" />
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
    </template>
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
  /^\(([2-9][0-8][0-9])\)\s([2-9][0-9]{2})-([0-9]{4})$/
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
  layout: 'employee',
  data() {
    return {
      edit: false,
      saved: false,
      loading: false,
      showSocial: false,
      image: null as Image,
      profile: {
        name: '',
        lastName: '',
        birthDate: null as NullableDate,
        novelties: 0,
        expected_salary_rate: 0,
        type_of_contract: '',
        working_mode: 0,
        shift: 0,
        state: '',
        city: '',
        phone: '',
        email: '',
        zip: '',
        linkedin: '',
        profile_picture_URL: '',
        main_skill: 0,
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
  async fetch() {
    try {
      const res = await this.$axios.$get('/employee/profile')
      res.birthDate = res.birthDate ? new Date(res.birthDate) : null
      this.profile = res
    } catch (error) {}
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
    }
  },
  computed: {
    laborAge(): Date {
      const labor = new Date()
      labor.setFullYear(labor.getFullYear() - 14)
      return labor
    },
    stateAbbr(): String {
      if (this.profile.state === 'IN') return 'Indiana'
      if (this.profile.state === 'MI') return 'Michigan'
      return '-'
    },
    mainSkill(): String {
      const skills: String[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push(this.$t(`resume.skills.${i}`))
      }
      if (this.profile.main_skill) return skills[this.profile.main_skill - 1]
      return ''
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
    formattedPhone(): string {
      return this.profile.phone
        ? this.$options.filters.VMask(this.profile.phone, '(###) ###-####')
        : '-'
    },
    shifts(): any[] {
      return [
        {
          text: this.$t('profile.shifts.first'),
          value: 1,
        },
        {
          text: this.$t('profile.shifts.second'),
          value: 2,
        },
        {
          text: this.$t('profile.shifts.third'),
          value: 3,
        },
      ]
    },
    shift(): string {
      return this.profile.shift ? this.shifts[this.profile.shift - 1].text : '-'
    },
    typeOfContracts(): any[] {
      return [
        {
          text: this.$t('profile.contracts.0'),
          value: 'contract labor',
        },
        {
          text: this.$t('profile.contracts.1'),
          value: 'direct hire',
        },
      ]
    },
    typeOfContract(): string {
      if (this.profile.type_of_contract === 'contract labor')
        return this.$t('profile.contracts.0') as string
      if (this.profile.type_of_contract === 'direct hire')
        return this.$t('profile.contracts.1') as string
      return '-'
    },
    workingModes(): any[] {
      return [
        {
          text: this.$t('profile.workModes.partTime'),
          value: 1,
        },
        {
          text: this.$t('profile.workModes.fullTime'),
          value: 2,
        },
      ]
    },
    workingMode(): string {
      return this.profile.working_mode
        ? this.workingModes[this.profile.working_mode - 1].text
        : '-'
    },
  },
  methods: {
    isLaborAge(d: Date): boolean {
      return d > this.laborAge
    },
    async updateProfile(): Promise<void> {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        const data = new FormData()
        if (this.image) data.append('profile_picture', this.image as any)
        if (this.profile.birthDate)
          data.append('birth_date', this.profile.birthDate.toJSON())
        data.append('name', this.profile.name)
        data.append('last_name', this.profile.lastName)
        data.append(
          'novelties',
          this.profile.novelties === null
            ? ''
            : this.profile.novelties.toString()
        )
        data.append(
          'expected_salary_rate',
          this.profile.expected_salary_rate
            ? this.profile.expected_salary_rate.toString()
            : ''
        )
        data.append(
          'shift',
          this.profile.shift ? this.profile.shift.toString() : ''
        )
        data.append('type_of_contract', this.profile.type_of_contract || '')
        data.append(
          'working_mode',
          this.profile.working_mode ? this.profile.working_mode.toString() : ''
        )
        data.append('state', this.profile.state || '')
        data.append('phone', this.profile.phone || '')
        data.append('city', this.profile.city || '')
        data.append('zip', this.profile.zip || '')
        data.append('linkedin', this.profile.linkedin || '')
        await this.$axios.$post('/employee/profile/edit', data)
        this.edit = false
        // re fetch user profile
        const res = await this.$axios.$get('/employee/profile')
        res.birthDate = res.birthDate ? new Date(res.birthDate) : null
        URL.revokeObjectURL(this.profile.profile_picture_URL)
        this.profile = res
        this.$store.commit('user/SET_PROFILE_PICTURE', res.profile_picture_URL)
        this.image = null
        this.saved = true
      } catch (error) {
        this.$notifier.showNotification({
          content: this.$t('profile.edit.saveError'),
          bgColor: 'bg-red-kaizen',
        })
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
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b shadow-md backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img {
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
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur overflow-y-auto;
}
</style>
