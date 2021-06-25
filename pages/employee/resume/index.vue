<template>
  <ks-card class="h-full p-8" col>
    <div class="resume-header">
      <h1 class="text-3xl font-medium">
        {{ $t('resume.myResume') }}
      </h1>
    </div>
    <h1 class="pt-6 text-lg text-blue-kaizen">
      {{ $t('resume.mainSkills') }}
    </h1>
    <div class="main-skills">
      <div
        v-for="(mainSkill, i) in mainSkills"
        :key="`main-skill-${i}`"
        class="field-row"
      >
        <div class="field-col col-40">
          <div class="flex-grow lg:flex-grow-0 xl:w-3/5">
            <ks-select
              v-model="mainSkill.skill"
              :label="$t('resume.selectSkill')"
              class="transition border border-blue-light"
              :bg-color="
                mainSkill.skill !== null ? 'bg-blue-light' : 'bg-transparent'
              "
              :color="
                mainSkill.skill !== null ? 'text-white' : 'text-gray-dark'
              "
              :items="skills"
              clearable
            />
          </div>
        </div>
        <div class="field-col col-60 flex-wrap justify-between">
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
  },
})
</script>

<style scoped>
.resume-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.resume-header > * {
  @apply pt-4;
}

.main-skills {
  @apply flex flex-col pt-8;
}

.field-row {
  @apply flex flex-wrap w-full;
}

.field-col {
  @apply flex items-center w-full pb-2;
}

.field-col.col-40 {
  @apply lg:w-2/5;
}

.field-col.col-60 {
  @apply lg:w-3/5;
}
</style>
