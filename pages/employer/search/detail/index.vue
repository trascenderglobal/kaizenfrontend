<template>
  <ks-card class="h-full p-8" col>
    <div class="detail-header">
      <h1 class="text-3xl font-medium">
        {{ $t('detail.title') }}
      </h1>
      <div class="flex items-center min-w-40 space-x-2">
        <ks-btn
          color="success"
          dense
          :disabled="profile.novelties === 0"
          @click="requestProfile"
          >{{ $t('detail.request') }}</ks-btn
        >
        <ks-btn color="danger" dense icon :to="localePath(backLink)"
          ><i><iconly-icon name="close" class="stroke-current" /></i
        ></ks-btn>
      </div>
    </div>
    <h1 class="pt-6 text-lg text-blue-kaizen">
      {{ $t('detail.subtitle') }}
    </h1>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <ks-user-img
          :initials="profile.name || ''"
          :image-url="profile.profile_picture_URL"
          large
        />
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            profile.name + ' ' + profile.last_name
          }}</span>
          <span class="text-gray-dark" :class="{ 'select-none': !mainSkill }">{{
            mainSkill
              ? skills[mainSkill.skill_name - 1]
              : $t('profile.noSkills')
          }}</span>
          <span
            class="text-gray-dark"
            :class="{ 'select-none': !profile.birth_date }"
            >{{
              profile.birth_date
                ? $d(profile.birth_date, 'numeric')
                : $t('profile.noBirth')
            }}</span
          >
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-full lg:min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('profile.novelties')
        }}</span>
        <span class="text-gray-dark">{{ $t('profile.status') }}:</span>
        <ks-chip
          :bg-color="
            profile.novelties === 1
              ? 'bg-green-kaizen'
              : profile.novelties === 0
              ? 'bg-red-kaizen'
              : 'bg-gray-darker'
          "
          >{{ novelties }}</ks-chip
        >
      </div>
    </div>
    <hr />
    <div class="fields">
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.state')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !profile.state }">{{
            stateAbbr
          }}</span>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.phone')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !profile.phone }">{{
            profile.phone || '-'
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
          <span class="item-value" :class="{ 'select-none': !profile.city }">{{
            profile.city || '-'
          }}</span>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.email')
            }}</span>
          </div>
          <span class="item-value">{{ profile.email }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('profile.zip')
            }}</span>
          </div>
          <span class="item-value" :class="{ 'select-none': !profile.zip }">{{
            profile.zip || '-'
          }}</span>
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
                active: profile.linkedin,
              }"
              @click.stop="showLinkedin"
            >
              <iconly-icon name="linkedin" :size="0.8" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
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
                mainSkill ? skills[mainSkill.skill_name - 1] : $t('detail.none')
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
    <hr />
    <h1 class="pb-6 text-lg text-blue-kaizen">
      {{ $t('resume.secondaryLanguage') }}
    </h1>
    <div class="fields">
      <div class="field-row">
        <div class="field-col flex-grow lg:flex-grow-0">
          <span class="text-blue-kaizen pr-4">{{ $t('resume.language') }}</span>
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
    <hr />
    <h1 class="pb-6 text-lg text-blue-kaizen">
      {{ $t('resume.previousJob') }}
    </h1>
    <div
      v-for="(job, i) in profile.previous_jobs"
      :key="`previous-job-${i}`"
      class="fields"
    >
      <hr v-if="i !== 0" />
      <div class="field-row">
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('detail.company')
            }}</span>
          </div>
          <span class="item-value">{{ job.company }}</span>
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
              $t('detail.company')
            }}</span>
          </div>
          <span class="item-value">{{ job.contact_person }}</span>
        </div>
        <div class="field-col">
          <div class="min-w-1/5">
            <span class="font-medium text-blue-kaizen">{{
              $t('detail.position')
            }}</span>
          </div>
          <span class="item-value">{{ job.phone }}</span>
        </div>
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface Skill {
  skill_id: number
  user_id: number
  skill_name: number
  years_of_experience: number
  is_main_skill: number
  created_at: Date
  updated_at: Date
}

interface Language {
  language: number
  language_level: number
}

export default Vue.extend({
  name: 'RequestDetailPage',
  layout: 'employer',
  middleware({ app, redirect, query }) {
    if (!query.id) return redirect(app.localePath('/employer/search'))
  },
  data() {
    return {
      profile: {
        id: null,
        name: '',
        last_name: '',
        birth_date: null as Date | null,
        novelties: null,
        state: '',
        city: '',
        phone: '',
        email: '',
        zip: '',
        linkedin: '',
        profile_picture_URL: '',
        skills: [] as Skill[],
        languages: [] as Language[],
        previous_jobs: [],
      },
    }
  },
  async fetch() {
    try {
      const id = this.$route.query.id
      const res = await this.$axios.$get(`/employer/employee_profile/${id}`)
      res.birth_date = new Date(res.birth_date)
      this.profile = res
    } catch (error) {
      this.$router.push(this.localePath('/employer/search'))
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('detail.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('detail.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    backLink(): string {
      return this.$nuxt.context.from?.fullPath || '/employer/search'
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
      const result = statuses.find(
        (item) => item.value === this.profile.novelties
      )
      if (result) {
        return result.text as string
      }
      return this.$t('detail.unknownStatus') as string
    },
    stateAbbr(): String {
      if (this.profile.state === 'IN') return 'Indiana'
      if (this.profile.state === 'MI') return 'Michigan'
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
      const skill = this.profile.skills?.find(
        (skill) => skill.is_main_skill === 1
      )
      return skill
    },
    secondarySkill(): Skill | undefined {
      const skill = this.profile.skills?.find(
        (skill) => skill.is_main_skill !== 1
      )
      return skill
    },
    language(): String {
      if (!this.profile.languages.length)
        return this.$t('detail.none') as string
      else if (this.profile.languages[0].language === 1)
        return this.$t('languages.en') as string
      else if (this.profile.languages[0].language === 2)
        return this.$t('languages.es') as string
      return this.$t('detail.none') as string
    },
    level(): String {
      if (!this.profile.languages.length)
        return this.$t('detail.none') as string
      else if (this.profile.languages[0].language_level === 1)
        return this.$t('resume.levels.0') as string
      else if (this.profile.languages[0].language_level === 2)
        return this.$t('resume.levels.1') as string
      else if (this.profile.languages[0].language_level === 3)
        return this.$t('resume.levels.2') as string
      else if (this.profile.languages[0].language_level === 4)
        return this.$t('resume.levels.3') as string
      return this.$t('detail.none') as string
    },
  },
  methods: {
    requestProfile() {
      try {
        if (this.profile.novelties === 0) return
        this.$router.push(`/employer/search/negotiation?ids=${this.profile.id}`)
      } catch (error) {}
    },
    showLinkedin(): void {
      if (this.profile.linkedin) window.open(this.profile.linkedin, '_blank')
    },
  },
})
</script>

<style scoped>
hr {
  @apply border-blue-light my-8;
}

.detail-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.detail-header > * {
  @apply pt-4;
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
</style>
