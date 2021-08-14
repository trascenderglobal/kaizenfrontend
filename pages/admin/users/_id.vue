<template>
  <ks-card class="h-full p-8" col>
    <div class="detail-header">
      <h1 class="text-3xl font-medium">
        {{ $t('adminUserDetail.title') }}
      </h1>
      <div class="flex items-center space-x-2">
        <ks-btn
          v-if="user.role === 1 && !edit"
          color="success"
          dense
          @click="edit = true"
          >{{ $t('adminUsers.edit') }}</ks-btn
        >
        <ks-btn color="danger" dense icon :to="localePath('/admin/users')"
          ><i><iconly-icon name="close" class="stroke-current" /></i
        ></ks-btn>
      </div>
    </div>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <ks-user-img
          :initials="user.name || ''"
          :image-url="user.profile_picture_URL"
          large
        />
        <div v-if="user.role === 1" class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            user.name + ' ' + user.last_name
          }}</span>
          <span class="text-gray-dark" :class="{ 'select-none': !mainSkill }">{{
            mainSkill
              ? skills[mainSkill.skill_name - 1]
              : $t('profile.noSkills')
          }}</span>
          <span
            class="text-gray-dark"
            :class="{ 'select-none': !user.birth_date }"
            >{{
              user.birth_date
                ? $d(new Date(user.birth_date), 'numeric')
                : $t('profile.noBirth')
            }}</span
          >
        </div>
        <div v-else-if="user.role === 0" class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            user.name + ' ' + user.last_name
          }}</span>
          <span
            class="text-gray-dark"
            :class="{ 'select-none': !user.industry }"
            >{{ industryAbbr }}</span
          >
          <span
            class="text-gray-dark"
            :class="{ 'select-none': !user.created_at }"
            >{{
              user.created_at ? $d(new Date(user.created_at), 'numeric') : '-'
            }}</span
          >
        </div>
      </div>
      <div
        v-if="user.role === 1"
        class="flex flex-col space-y-2 min-w-full lg:min-w-40"
      >
        <span class="font-medium text-blue-kaizen">{{
          $t('profile.novelties')
        }}</span>
        <span class="text-gray-dark">{{ $t('profile.status') }}:</span>
        <ks-chip
          :bg-color="
            user.novelties === 1
              ? 'bg-green-kaizen'
              : user.novelties === 0
              ? 'bg-red-kaizen'
              : 'bg-gray-darker'
          "
          >{{ novelties }}</ks-chip
        >
      </div>
    </div>
    <hr class="my-8" />
    <template v-if="user.role === 0">
      <div class="fields">
        <div class="field-row">
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">
                {{ $t('profile.companyName') }}
              </span>
            </div>
            <span
              class="item-value"
              :class="{ 'select-none': !user.company_name }"
              >{{ user.company_name || '-' }}</span
            >
          </div>
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">
                {{ $t('profile.position') }}
              </span>
            </div>
            <span
              class="item-value"
              :class="{ 'select-none': !user.position }"
              >{{ user.position || '-' }}</span
            >
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
              class="item-value"
              :class="{ 'select-none': !user.contact_person }"
              >{{ user.contact_person || '-' }}</span
            >
          </div>
        </div>
      </div>
      <hr class="mt-6 mb-8" />
    </template>
    <div class="fields">
      <div v-if="user.role === 0" class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">
              {{ $t('profile.address') }}
            </span>
          </div>
          <span class="item-value" :class="{ 'select-none': !user.address }">{{
            user.address || '-'
          }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.state')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !user.state }">{{
            stateAbbr
          }}</span>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.phone')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !user.phone }">{{
            formattedPhone
          }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.city')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !user.city }">{{
            user.city || '-'
          }}</span>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.email')
            }}</span>
          </div>
          <span class="item-value">{{ user.email }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.zip')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !user.zip }">{{
            user.zip || '-'
          }}</span>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.social')
            }}</span>
          </div>
          <button
            type="button"
            class="linkedin-btn"
            :class="{
              active: user.linkedin,
            }"
            @click.stop="showLinkedin"
          >
            <iconly-icon name="linkedin" :size="0.8" />
          </button>
        </div>
      </div>
      <div v-if="user.role === 1" class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.interview')
            }}</span>
          </div>
          <div class="flex-grow inline-flex items-center">
            <button
              type="button"
              class="interview-btn"
              :class="{
                active: user.video_url,
              }"
              :disabled="edit"
              @click.stop="showVideo"
            >
              <iconly-icon name="play" class="fill-current text-white" />
            </button>
            <div v-if="edit" class="flex-grow px-2">
              <ks-input
                v-model="user.video_url"
                border-color="border-blue-light"
                dense
                disable-hint
                :error="$v.user.video_url.$error"
                :label="$t('profile.interview')"
                @blur="$v.user.video_url.$touch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="user.role === 1">
      <hr class="mt-6 mb-8" />
      <h1 class="pb-6 text-lg text-blue-kaizen">
        {{ $t('detail.skills') }}
      </h1>
      <div class="fields">
        <div class="field-row">
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="text-blue-kaizen">{{ $t('detail.primary') }}</span>
            </div>
            <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
              <ks-chip
                :bg-color="mainSkill ? 'bg-blue-light' : 'bg-gray-darker'"
                :class="{ 'select-none': !mainSkill }"
                font="font-medium"
                >{{
                  mainSkill
                    ? skills[mainSkill.skill_name - 1]
                    : $t('detail.none')
                }}</ks-chip
              >
            </div>
          </div>
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="text-blue-kaizen">{{
                $t('resume.yearsExperience')
              }}</span>
            </div>
            <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
              <ks-chip
                :bg-color="mainSkill ? 'bg-blue-darker' : 'bg-gray-darker'"
                :class="{ 'select-none': !mainSkill }"
                font="font-medium"
                >{{
                  mainSkill
                    ? $tc('resume.year', mainSkill.years_of_experience)
                    : $t('detail.none')
                }}</ks-chip
              >
            </div>
          </div>
        </div>
        <div class="field-row">
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="text-blue-kaizen">{{ $t('detail.secondary') }}</span>
            </div>
            <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
              <ks-chip
                :bg-color="secondarySkill ? 'bg-blue-light' : 'bg-gray-darker'"
                :class="{ 'select-none': !secondarySkill }"
                font="font-medium"
                >{{
                  secondarySkill
                    ? skills[secondarySkill.skill_name - 1]
                    : $t('detail.none')
                }}</ks-chip
              >
            </div>
          </div>
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="text-blue-kaizen">{{
                $t('resume.yearsExperience')
              }}</span>
            </div>
            <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
              <ks-chip
                :bg-color="secondarySkill ? 'bg-blue-darker' : 'bg-gray-darker'"
                :class="{ 'select-none': !secondarySkill }"
                font="font-medium"
                >{{
                  secondarySkill
                    ? $tc('resume.year', secondarySkill.years_of_experience)
                    : $t('detail.none')
                }}</ks-chip
              >
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-6 mb-8" />
      <h1 class="pb-6 text-lg text-blue-kaizen">
        {{ $t('resume.secondaryLanguage') }}
      </h1>
      <div class="fields">
        <div class="field-row">
          <div class="field-col flex-grow lg:flex-grow-0">
            <span class="text-blue-kaizen pr-4">{{
              $t('resume.language')
            }}</span>
            <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
              <ks-chip>{{ language }}</ks-chip>
            </div>
          </div>
          <div class="field-col flex-grow flex-wrap">
            <span class="text-blue-kaizen pr-4">{{ $t('resume.level') }}</span>
            <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
              <ks-chip bg-color="bg-blue-darker">{{ level }}</ks-chip>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-6 mb-8" />
      <h1 class="pb-6 text-lg text-blue-kaizen">
        {{ $t('resume.previousJob') }}
      </h1>
      <div
        v-for="(job, i) in user.previous_jobs"
        :key="`previous-job-${i}`"
        class="fields"
      >
        <hr v-if="i !== 0" class="my-8" />
        <div class="field-row">
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">{{
                $t('detail.company')
              }}</span>
            </div>
            <span class="item-value">{{ job.company_name }}</span>
          </div>
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">{{
                $t('detail.position')
              }}</span>
            </div>
            <span class="item-value">{{ job.position }}</span>
          </div>
        </div>
        <div class="field-row">
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">{{
                $t('detail.activeFrom')
              }}</span>
            </div>
            <span class="item-value">
              <ks-chip bg-color="bg-blue-darker" font="font-medium">{{
                $d(new Date(job.initial_date))
              }}</ks-chip>
            </span>
          </div>
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">{{
                $t('detail.to')
              }}</span>
            </div>
            <span class="item-value"
              ><ks-chip bg-color="bg-blue-darker" font="font-medium">{{
                $d(new Date(job.end_date))
              }}</ks-chip></span
            >
          </div>
        </div>
        <div class="field-row">
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">{{
                $t('detail.contactPerson')
              }}</span>
            </div>
            <span class="item-value">{{ job.contact_person }}</span>
          </div>
          <div class="field-col">
            <div class="min-w-1/5">
              <span class="font-medium text-blue-kaizen">{{
                $t('detail.phone')
              }}</span>
            </div>
            <span class="item-value">{{ job.phone }}</span>
          </div>
        </div>
      </div>
    </template>
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
  </ks-card>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import Vue from 'vue'
import { url } from 'vuelidate/lib/validators'

type Skill = {
  skill_name: number | null
  years_of_experience: number | null
  is_main_skill: number
}

type Language = {
  language: number
  language_level: number
}

type Job = {
  company_name: string | null
  initial_date: Date | string | null
  end_date: Date | string | null
  position: string | null
  contact_person: string | null
  phone: string | null
}

interface User {
  id: number
  name: string
  last_name: string
  email: string
  state?: string | null
  city?: string | null
  zip?: string | null
  phone?: string | null
  linkedin?: string | null
  profile_picture_URL?: string | null
  created_at?: string | Date | null
  birth_date?: string | Date | null
  novelties?: number | null
  skills?: Skill[]
  languages?: Language[]
  previous_jobs?: Job[]
  industry?: string | null
  contact_person?: string | null
  position?: string | null
  address?: string | null
  video_url?: string | null
}

export default Vue.extend({
  name: 'UserDetailPage',
  layout: 'admin',
  data() {
    return {
      loading: false,
      edit: false,
      user: {
        id: -1,
        name: '',
        last_name: '',
        email: '',
        state: null,
        city: null,
        zip: null,
        phone: null,
        linkedin: null,
        profile_picture_URL: null,
        created_at: null,
        birth_date: null,
        novelties: null,
        skills: [] as Skill[],
        languages: [] as Language[],
        previous_jobs: [] as Job[],
        industry: null,
        contact_person: null,
        position: null,
        address: null,
        video_url: null,
      } as User,
    }
  },
  async fetch() {
    try {
      const res: User = await this.$axios.$get(
        `/admin/users/profile/${this.$route.params.id}`
      )
      this.user = res
    } catch (error) {}
  },
  computed: {
    industryAbbr(): string {
      if (this.user.industry === 'manufacturing')
        return this.$t('profile.industries.manufacturing') as string
      return this.$t('profile.noIndustry') as string
    },
    stateAbbr(): String {
      if (this.user.state === 'IN') return 'Indiana'
      if (this.user.state === 'MI') return 'Michigan'
      return '-'
    },
    skills() {
      const skills: String[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push(this.$t(`resume.skills.${i}`) as string)
      }
      return skills
    },
    mainSkill(): Skill | undefined {
      const skill = this.user.skills?.find((skill) => skill.is_main_skill === 1)
      return skill
    },
    novelties(): String {
      const statuses = [
        {
          text: this.$t('profile.statuses.available'),
          value: 1,
        },
        {
          text: this.$t('profile.statuses.busy'),
          value: 0,
        },
      ]
      const result = statuses.find((item) => item.value === this.user.novelties)
      if (result) {
        return result.text as string
      }
      return this.$t('detail.unknownStatus') as string
    },
    formattedPhone(): string {
      return this.user.phone
        ? this.$options.filters?.VMask(this.user.phone, '(###) ###-####')
        : '-'
    },
    secondarySkill(): Skill | undefined {
      const skill = this.user.skills?.find((skill) => skill.is_main_skill !== 1)
      return skill
    },
    language(): String {
      if (!this.user.languages?.length) return this.$t('detail.none') as string
      else if (this.user.languages[0].language === 1)
        return this.$t('languages.en') as string
      else if (this.user.languages[0].language === 2)
        return this.$t('languages.es') as string
      return this.$t('detail.none') as string
    },
    level(): String {
      if (!this.user.languages?.length) return this.$t('detail.none') as string
      else if (this.user.languages[0].language_level === 1)
        return this.$t('resume.levels.0') as string
      else if (this.user.languages[0].language_level === 2)
        return this.$t('resume.levels.1') as string
      else if (this.user.languages[0].language_level === 3)
        return this.$t('resume.levels.2') as string
      else if (this.user.languages[0].language_level === 4)
        return this.$t('resume.levels.3') as string
      return this.$t('detail.none') as string
    },
  },
  methods: {
    showVideo(): void {
      if (this.user.video_url) window.open(this.user.video_url, '_blank')
    },
    showLinkedin(): void {
      if (this.user.linkedin) window.open(this.user.linkedin, '_blank')
    },
    async updateProfile() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        await this.$axios.$post('/admin/employee/video', {
          id: this.user.id,
          video: this.user.video_url,
        })
      } catch (error) {
      } finally {
        this.edit = false
        this.loading = false
      }
    },
  },
  validations() {
    return {
      user: {
        video_url: {
          url,
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

.detail-header {
  @apply flex flex-wrap items-center justify-between text-blue-kaizen;
}

.detail-header > * {
  @apply pt-4;
}

.item-value {
  @apply text-gray-darker font-light py-1 overflow-hidden overflow-ellipsis;
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

.linkedin-btn {
  @apply flex transition items-center justify-center cursor-default rounded-lg w-8 h-8 focus:outline-none bg-blue-light;
}

.linkedin-btn.active {
  @apply cursor-pointer hover:bg-blue-kaizen;
}

.interview-btn {
  @apply flex transition items-center justify-center cursor-default rounded-lg w-8 h-8 focus:outline-none bg-red-kaizen;
}

.interview-btn.active {
  @apply cursor-pointer hover:bg-red-badge;
}

.interview-btn:disabled,
.interview-btn.active:disabled {
  @apply bg-gray-darker hover:bg-gray-darker cursor-default;
}

.edit-enter-active,
.edit-leave-active {
  transition: opacity 0.2s;
}
.edit-enter,
.edit-leave-to {
  opacity: 0;
}
</style>
