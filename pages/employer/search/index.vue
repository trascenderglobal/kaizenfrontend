<template>
  <ks-card class="h-full p-8" col>
    <div>
      <div class="search-header">
        <h1 class="text-3xl font-medium">
          {{ $t('search.title') }}
        </h1>
      </div>
      <h1 class="subtitle">
        {{ $t('search.subtitle') }}
      </h1>
      <div
        v-for="i in skillsFilter"
        :key="`skills-filter-${i}`"
        class="skills-filter"
      >
        <div class="skill-filters">
          <div class="field-row">
            <div class="field-col flex-1">
              <div class="flex-grow lg:flex-grow-0 xl:w-1/4 pt-4">
                <ks-select
                  :label="$t('resume.selectSkill')"
                  class="border border-blue-light"
                  bg-color="bg-transparent"
                  color="text-gray-darker"
                  :items="skills"
                  clearable
                />
              </div>
            </div>
          </div>
          <form class="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
            <div>
              <ks-radio-button
                v-model="selected"
                id="1"
                :item-value="1"
                :label="$t('search.experience.option1')"
              />
            </div>
            <div>
              <ks-radio-button
                v-model="selected"
                id="2"
                :item-value="2"
                :label="$t('search.experience.option2')"
              />
            </div>
            <div>
              <ks-radio-button
                v-model="selected"
                id="3"
                :item-value="3"
                :label="$t('search.experience.option3')"
              />
            </div>
          </form>
        </div>
        <div class="field-row justify-end">
          <div class="field-col">
            <button
              type="button"
              class="
                text-red-kaizen
                hover:text-red-500
                font-light
                focus:outline-none
              "
              @click="removeFilter(i)"
            >
              {{ $t('search.removeFilter') }}
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div
        class="flex justify-end flex-grow px-2 pb-2"
        :class="{ 'pt-2': !skillsFilter.length }"
      >
        <button
          type="button"
          class="text-link-blue font-light focus:outline-none"
          @click="addFilter"
        >
          {{ $t('resume.addMoreExperience') }}
        </button>
      </div>
    </div>
  </ks-card>
</template>


<script lang="ts">
import Vue from 'vue'

interface Skill {
  skill_name: Number | null
  years_of_experience: Number | null
}

export default Vue.extend({
  name: 'Search',
  layout: 'employerSearch',
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('search.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('search.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  data() {
    return {
      skillsFilter: [] as Skill[],
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/employer/search')

      const skillsFilter: Skill[] = (res.skills_filter as Skill[]).map(
        (skill) => {
          return {
            skill_name: skill.skill_name,
            years_of_experience: skill.years_of_experience,
          }
        }
      )
    } catch (error) {}
  },
  computed: {
    skills(): object[] {
      const skills: object[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push({
          text: this.$t(`resume.skills.${i}`),
          value: i + 1,
        })
      }
      return skills
    },
  },
  methods: {
    removeFilter(i: number): void {
      this.skillsFilter.splice(i, 1)
    },
    addFilter(): void {
      this.skillsFilter.push({
        skill_name: null,
        years_of_experience: null,
      })
    },
  },
})
</script>

<style scoped>
.search-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}
.search-header > * {
  @apply pt-4;
}

hr {
  @apply mt-2 mb-6 border-blue-light;
}

.subtitle {
  @apply text-lg font-extralight text-blue-kaizen;
}

.field-row {
  @apply flex flex-wrap w-full;
}

.field-col {
  @apply flex items-center pb-6;
}
</style>