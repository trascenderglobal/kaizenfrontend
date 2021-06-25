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
        <div class="field-col flex-auto">
          <div class="flex-grow lg:flex-grow-0 xl:w-3/5">
            <ks-select
              v-model="mainSkill.skill"
              :label="$t('resume.selectSkill')"
              class="transition border"
              :class="
                mainSkill.skill !== null
                  ? 'border-blue-light'
                  : 'border-gray-light'
              "
              :bg-color="
                mainSkill.skill !== null ? 'bg-blue-light' : 'bg-white'
              "
              :color="
                mainSkill.skill !== null ? 'text-white' : 'text-gray-dark'
              "
              :items="skills"
              clearable
            />
          </div>
        </div>
        <div class="field-col flex-auto flex-wrap justify-between">
          <div class="text-blue-kaizen pr-4">
            <span>{{ $t('resume.yearsExperience') }}</span>
          </div>
          <div class="flex-grow lg:flex-grow-0 xl:w-2/5">
            <ks-select
              v-model="mainSkill.years"
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
            v-model="secondarySkill.skill"
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
              v-model="secondarySkill.years"
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
              v-model="secondaryLanguage.level"
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
    <div class="previous-jobs">
      <div class="field-row">
        <div class="field-col flex-1">
          <ks-input dense disable-hint :label="$t('resume.companyName')" />
        </div>
        <div class="field-col flex-1">
          <ks-datepicker
            :label="$t('resume.from')"
            bg-color="bg-blue-darker"
            clearable
          />
        </div>
        <div class="field-col flex-1">
          <ks-datepicker
            :label="$t('resume.to')"
            bg-color="bg-blue-darker"
            clearable
          />
        </div>
      </div>
      <div class="field-row">
        <div class="field-col flex-1 min-w-1/4">
          <ks-input dense disable-hint :label="$t('resume.typePosition')" />
        </div>
        <div class="field-col flex-1 min-w-1/4">
          <ks-input dense disable-hint :label="$t('resume.contactPerson')" />
        </div>
        <div class="field-col flex-1 min-w-1/4">
          <ks-input dense disable-hint :label="$t('resume.phone')" />
        </div>
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

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
      resume: {
        main_skills: [],
        secondary_skills: [],
        languages: [],
        previous_jobs: [],
      },
      mainSkills: [
        {
          skill: null,
          years: null,
        },
        {
          skill: null,
          years: null,
        },
      ],
      secondarySkills: [
        {
          skill: 6,
          years: null,
        },
        {
          skill: 2,
          years: null,
        },
      ],
      secondarySkill: {
        skill: null,
        years: null,
      },
      secondaryLanguage: {
        language: null,
        level: null,
      },
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
          value: 'en',
        },
        {
          text: this.$t('languages.es'),
          value: 'es',
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
  },
})
</script>

<style scoped>
hr {
  @apply my-8 border-blue-light;
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
  @apply flex flex-col pt-8;
}

.item-chips {
  @apply flex items-center flex-wrap px-2;
}

.item-chips > div:not(:last-child) {
  @apply mr-4;
}

.item-chips > div {
  @apply mb-4;
}
</style>
