<template>
  <ks-card class="h-full p-8" col>
    <div>
      <div class="search-header">
        <h1 class="title">
          {{ $t('search.title') }}
        </h1>
      </div>
      <h1 class="subtitle">
        {{ $t('search.subtitle') }}
      </h1>
      <div
        v-for="(skill, i) in skills"
        :key="`skills-filter-${i}`"
        class="skills-filter"
      >
        <div class="skill-filters">
          <div class="field-row">
            <div class="field-col flex-1">
              <div class="flex-grow lg:flex-grow-0 xl:w-1/4 pt-4">
                <ks-select
                  v-model.number="skill.skill_name"
                  :label="$t('resume.selectSkill')"
                  class="border border-blue-light"
                  bg-color="bg-transparent"
                  color="text-blue-kaizen"
                  :items="skillsCat"
                  clearable
                />
              </div>
            </div>
          </div>
          <form class="flex w-full space-x-4" @submit.prevent>
            <span class="flex items-center text-blue-kaizen pr-4"
              >{{ $t('search.experience.experience') }}:</span
            >
            <div class="">
              <ks-radio-button
                :id="`${i}-1`"
                v-model.number="skill.years_of_experience"
                :item-value="1"
                :label="$t('search.experience.option1')"
              />
            </div>
            <div>
              <ks-radio-button
                :id="`${i}-2`"
                v-model.number="skill.years_of_experience"
                :item-value="2"
                :label="$t('search.experience.option2')"
              />
            </div>
            <div>
              <ks-radio-button
                :id="`${i}-3`"
                v-model="skill.years_of_experience"
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
              class="text-red-kaizen hover:text-red-500 focus:outline-none"
              @click="removeFilter(i)"
            >
              {{ $t('search.removeFilter') }}
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div
        class="flex justify-end flex-grow pb-2"
        :class="{ 'pt-2': !skills.length }"
      >
        <button
          type="button"
          class="add-filter-btn text-link-blue"
          :disabled="skills.length === 3"
          @click="addFilter"
        >
          <span>{{ $t('search.addSkill') }}</span>
          <iconly-icon name="plus" class="fill-current" :size="1.3" />
        </button>
      </div>
    </div>
    <div class="flex justify-end flex-grow px-2">
      <ks-btn class="self-end" color="primary" dense @click="search">{{
        $t('search.searchButton')
      }}</ks-btn>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

interface Skill {
  skill_name: Number | null
  years_of_experience: Number | null
}

export default Vue.extend({
  name: 'Search',
  layout: 'employerSearch',
  data() {
    return {
      skills: [
        {
          skill_name: null,
          years_of_experience: null,
        },
      ] as Skill[],
    }
  },
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
  computed: {
    skillsCat(): object[] {
      const skillsCat: object[] = []
      for (let i = 0; i <= 9; i++) {
        skillsCat.push({
          text: this.$t(`resume.skills.${i}`),
          value: i + 1,
        })
      }
      return skillsCat
    },
    ...mapState({
      filters: (state: any) => state.employer.searchFilters,
    }),
  },
  methods: {
    removeFilter(i: number): void {
      this.skills.splice(i, 1)
    },
    addFilter(): void {
      if (this.skills.length < 3)
        this.skills.push({
          skill_name: null,
          years_of_experience: null,
        })
    },
    async search() {
      try {
        const res = await this.$axios.$post('/employer/search', {
          skills: this.skills.filter(
            (skill) => skill.skill_name && skill.years_of_experience
          ),
          language: this.filters.language
            ? [this.filters.language].filter((lang) => lang.language)
            : [], // TODO: decirle a Carlos que añada soporte para language level, no lo veo en el back
          city: this.filters.city ? [{ city: this.filters.city }] : [],
          state: this.filters.state ? [{ state: this.filters.state }] : [],
        })
        console.log(res)
      } catch (error) {}
    },
  },
})
</script>

<style scoped>
.search-header > * {
  @apply pt-4 text-blue-kaizen text-3xl font-medium;
}

.subtitle {
  @apply pt-6 text-lg text-blue-kaizen;
}

hr {
  @apply mt-2 mb-6 border-blue-light;
}

.subtitle {
  @apply text-lg text-blue-kaizen;
}

.field-row {
  @apply flex flex-wrap w-full;
}

.field-col {
  @apply flex items-center pb-6;
}

.add-filter-btn {
  @apply flex items-center justify-center space-x-4 focus:outline-none;
}
</style>
