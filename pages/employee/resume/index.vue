<template>
  <ks-card class="h-full p-6" col>
    <div class="resume-header">
      <h1 class="text-3xl font-medium">
        {{ $t('resume.myResume') }}
      </h1>
    </div>
    <h1 class="title">
      {{ $t('resume.mainSkills') }}
    </h1>
    <div class="main-skills">
      <div
        v-for="(mainSkill, i) in mainSkills"
        :key="`main-skill-${i}`"
        class="field-row"
      >
        <div class="field-col flex-1">
          <div class="flex-grow lg:flex-grow-0 xl:w-3/5">
            <ks-select
              v-model="mainSkill.skill_name"
              :label="$t('resume.selectSkill')"
              class="transition border"
              :class="
                mainSkill.skill_name !== null
                  ? 'border-blue-light'
                  : 'border-gray-light'
              "
              :bg-color="
                mainSkill.skill_name !== null ? 'bg-blue-light' : 'bg-white'
              "
              :color="
                mainSkill.skill_name !== null ? 'text-white' : 'text-gray-dark'
              "
              :items="skills"
              clearable
            />
          </div>
        </div>
        <div class="field-col flex-1 flex-wrap justify-between">
          <div class="text-blue-kaizen pr-4">
            <span>{{ $t('resume.yearsExperience') }}</span>
          </div>
          <div class="flex-grow lg:flex-grow-0 xl:w-2/5">
            <ks-select
              v-model="mainSkill.years_of_experience"
              :label="$t('resume.years')"
              bg-color="bg-blue-darker"
              :items="yearsExperience"
              clearable
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1 class="title">
      {{ $t('resume.secondarySkills') }}
    </h1>
    <div class="secondary-skills">
      <div class="field-row">
        <div v-if="secondarySkills.length" class="item-chips">
          <ks-chip
            v-for="(secSkill, i) in secondarySkills"
            :key="`secSkill-${i}`"
            clearable
            @click:clear="secondarySkills.splice(i, 1)"
          >
            {{ skills[secSkill.skill].text }}
          </ks-chip>
        </div>
        <div class="field-col flex-grow">
          <ks-select
            v-model="secondarySkill.skill_name"
            :label="$t('resume.selectSkill')"
            class="transition border border-gray-light"
            bg-color="bg-white"
            color="text-gray-dark"
            :items="skills"
            clearable
          />
        </div>
      </div>
      <div class="field-row">
        <div class="field-col flex-auto flex-wrap">
          <h1 class="text-lg text-blue-kaizen pr-4">
            {{ $t('resume.yearsExperience') }}:
          </h1>
          <div class="flex-grow lg:flex-grow-0 xl:w-1/5">
            <ks-select
              v-model="secondarySkill.years_of_experience"
              :label="$t('resume.years')"
              bg-color="bg-blue-darker"
              :items="yearsExperience"
              clearable
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1 class="title">
      {{ $t('resume.secondaryLanguage') }}
    </h1>
    <div class="secondary-language">
      <div class="field-row">
        <div class="field-col flex-grow lg:flex-grow-0">
          <div class="flex-grow lg:flex-grow-0">
            <ks-select
              v-model="secondaryLanguage.language"
              :label="$t('resume.selectLanguage')"
              class="transition border border-gray-light"
              bg-color="bg-white"
              color="text-gray-dark"
              :items="languages"
              clearable
            />
          </div>
        </div>
        <div class="field-col flex-grow flex-wrap">
          <span class="text-blue-kaizen pr-4">{{ $t('resume.level') }}:</span>
          <div class="flex-grow lg:flex-grow-0 xl:w-1/4">
            <ks-select
              v-model="secondaryLanguage.language_level"
              :label="$t('resume.level')"
              bg-color="bg-blue-darker"
              :items="languageLevels"
              clearable
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1 class="title">
      {{ $t('resume.previousJob') }}
    </h1>
    <div
      v-for="(previousJob, i) in previousJobs"
      :key="`previous-job-${i}`"
      class="previous-jobs"
    >
      <div class="field-row">
        <div class="field-col flex-1">
          <ks-input
            v-model="previousJob.company_name"
            dense
            disable-hint
            :label="$t('resume.companyName')"
          />
        </div>
        <div class="field-col flex-1">
          <ks-datepicker
            v-model="previousJob.initial_date"
            :label="$t('resume.from')"
            bg-color="bg-blue-darker"
            clearable
          />
        </div>
        <div class="field-col flex-1">
          <ks-datepicker
            v-model="previousJob.end_date"
            :label="$t('resume.to')"
            bg-color="bg-blue-darker"
            clearable
          />
        </div>
      </div>
      <div class="field-row">
        <div class="field-col flex-1 min-w-1/4">
          <ks-input
            v-model="previousJob.position"
            dense
            disable-hint
            :label="$t('resume.typePosition')"
          />
        </div>
        <div class="field-col flex-1 min-w-1/4">
          <ks-input
            v-model="previousJob.contact_person"
            dense
            disable-hint
            :label="$t('resume.contactPerson')"
          />
        </div>
        <div class="field-col flex-1 min-w-1/4">
          <ks-input
            v-model="previousJob.phone"
            dense
            disable-hint
            :label="$t('resume.phone')"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-start flex-grow px-2 pb-2">
      <button type="button" class="text-link-blue font-light" @click="addJob">
        {{ $t('resume.addMoreExperience') }}
      </button>
    </div>
    <hr />
    <div class="flex justify-end flex-grow px-2">
      <ks-btn
        class="self-end"
        color="success"
        dense
        :loading="loading"
        @click="updateResume"
        >{{ $t('resume.save') }}</ks-btn
      >
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { requiredIf, helpers } from 'vuelidate/lib/validators'

interface Skill {
  skill_name: Number | null
  years_of_experience: Number | null
}

interface Job {
  company_name: String | null
  initial_date: Date | String | null
  end_date: Date | String | null
  position: String | null
  contact_person: String | null
  phone: String | null
}

const isPhoneUS = helpers.regex(
  'isPhoneUS',
  /^\(?([2-9][0-8][0-9])\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/
)

export default Vue.extend({
  name: 'ResumePage',
  layout: 'employee',
  async asyncData({ app }) {
    try {
      const res = await app.$axios.$get('/employee/resume')
      return {
        resume: res,
      }
    } catch (error) {}
  },
  data() {
    return {
      loading: false,
      resume: {
        main_skills: [],
        secondary_skills: [],
        languages: [],
        previous_jobs: [],
      },
      mainSkills: [
        {
          skill_name: null,
          years_of_experience: null,
        },
        {
          skill_name: null,
          years_of_experience: null,
        },
      ] as Skill[],
      secondarySkills: [] as Skill[],
      secondarySkill: {
        skill_name: null,
        years_of_experience: null,
      } as Skill,
      secondaryLanguage: {
        language: null,
        language_level: null,
      },
      previousJobs: [
        {
          company_name: null,
          initial_date: null,
          end_date: null,
          position: null,
          contact_person: null,
          phone: null,
        },
      ] as Job[],
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('resume.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('resume.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    yearsExperience(): object[] {
      const years: object[] = []
      for (let i = 1; i <= 10; i++) {
        years.push({
          text: this.$tc('resume.year', i),
          value: i,
        })
      }
      return years
    },
    skills(): object[] {
      const skills: object[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push({
          text: this.$t(`resume.skills.${i}`, i),
          value: i,
        })
      }
      return skills
    },
    languages(): object[] {
      return [
        {
          text: this.$t('languages.en'),
          value: 0,
        },
        {
          text: this.$t('languages.es'),
          value: 1,
        },
      ]
    },
    languageLevels(): object[] {
      const languageLevels: object[] = []
      for (let i = 0; i <= 3; i++) {
        languageLevels.push({
          text: this.$t(`resume.levels.${i}`, i),
          value: i,
        })
      }
      return languageLevels
    },
    isSecondaryComplete(): boolean {
      return (
        this.secondarySkill.skill_name !== null &&
        !!this.secondarySkill.years_of_experience
      )
    },
  },
  watch: {
    isSecondaryComplete: {
      handler(newVal: boolean) {
        if (newVal) {
          this.secondarySkills.push({
            skill_name: this.secondarySkill.skill_name,
            years_of_experience: this.secondarySkill.years_of_experience,
          })
        }
        this.secondarySkill.skill_name = null
        this.secondarySkill.years_of_experience = null
      },
    },
  },
  methods: {
    addJob() {
      this.previousJobs.push({
        company_name: null,
        initial_date: null,
        end_date: null,
        position: null,
        contact_person: null,
        phone: null,
      })
    },
    async updateResume() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        await this.$axios.$post('/employee/resume/update', {
          main_skills: this.mainSkills.filter(
            (skill) => skill.skill_name !== null && skill.years_of_experience
          ),
          secondary_skills: this.secondarySkills.filter(
            (skill) => skill.skill_name !== null && skill.years_of_experience
          ),
          secondary_language:
            this.secondaryLanguage.language !== null &&
            this.secondaryLanguage.language_level !== null
              ? [this.secondaryLanguage]
              : [],
          previous_jobs: this.previousJobs
            .filter(
              (job) =>
                job.company_name &&
                job.initial_date &&
                job.end_date &&
                job.position &&
                job.contact_person &&
                job.phone
            )
            .map((job) => {
              return {
                ...job,
                initial_date: (job.initial_date as Date).toJSON(),
                end_date: (job.end_date as Date).toJSON(),
              }
            }),
        })
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
  validations() {
    return {
      mainSkills: {
        $each: {
          skill_name: {
            required: requiredIf('years'),
          },
          years_of_experience: {
            required: requiredIf('skill'),
          },
        },
      },
      secondaryLanguage: {
        language: {},
        language_level: {
          required: requiredIf('language'),
        },
      },
      previousJobs: {
        $each: {
          phone: {
            isPhoneUS,
          },
          initial_date: {},
          end_date: {},
        },
      },
    }
  },
})
</script>

<style scoped>
hr {
  @apply mt-2 mb-6 border-blue-light mx-2;
}

.resume-header {
  @apply flex justify-between text-blue-kaizen px-2 flex-col lg:flex-row pb-6;
}

.resume-header > * {
  @apply pt-4;
}

.title {
  @apply px-2 text-lg text-blue-kaizen;
}

.field-row {
  @apply flex flex-wrap w-full;
}

.field-col {
  @apply flex items-center px-2 pb-6;
}

.main-skills,
.secondary-skills,
.secondary-language,
.previous-jobs {
  @apply flex flex-col pt-6;
}

.item-chips {
  @apply flex items-start flex-wrap px-2;
}

.item-chips > div:not(:last-child) {
  @apply mr-4;
}

.item-chips > div {
  @apply mb-4;
}
</style>
