<template>
  <ks-card class="h-full p-8" col>
    <div v-if="!results.length">
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
    </div>
    <div class="flex flex-col flex-grow" v-else>
      <div class="result-header">
        <h1 class="text-3xl font-medium">
          {{ $t('results.results') }}
        </h1>
        <div class="flex items-center justify-end">
          <ks-btn color="danger" dense icon @click="resetResults"
            ><i><iconly-icon name="close" class="stroke-current" /></i
          ></ks-btn>
        </div>
      </div>
      <h1 class="py-6 text-lg text-blue-kaizen">
        {{ $t('results.subtitle', { resultsLength }) }}
      </h1>
      <table>
        <thead class="text-thead">
          <tr>
            <th>{{ $t('results.table.name') }}</th>
            <th>{{ $t('results.table.position') }}</th>
            <th>{{ $t('results.table.profile') }}</th>
            <th>{{ $t('results.table.request') }}</th>
          </tr>
          <tr>
            <td colspan="4">
              <hr class="border-blue-light" />
            </td>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <template v-for="(result, i) in results">
            <tr :key="`result-${i}`" class="result-row">
              <td>
                <div class="flex items-center space-x-2">
                  <ks-user-img /><span
                    >{{ result.name }} {{ result.last_name }}</span
                  >
                </div>
              </td>
              <td>{{ result.position }}</td>
              <td>
                <div class="flex items-center space-x-2">
                  <span class="font-light text-gray-dark">{{
                    $t('results.table.view')
                  }}</span>
                  <ks-btn
                    color="light-blue"
                    dense
                    icon
                    :to="`/employer/search/detail?id=${result.id}`"
                    ><i><iconly-icon name="show" class="fill-current" /></i
                  ></ks-btn>
                </div>
              </td>
              <td>
                <div class="flex items-center space-x-2">
                  <ks-btn
                    color="light-blue"
                    dense
                    icon
                    :disabled="requestIds.includes(result.id)"
                    @click="addRequest(result.id)"
                    ><i
                      ><iconly-icon name="plus-alt" class="stroke-current" /></i
                  ></ks-btn>
                  <ks-btn
                    color="danger"
                    dense
                    icon
                    :disabled="!requestIds.includes(result.id)"
                    @click="removeRequest(i)"
                    ><i><iconly-icon name="minus" class="stroke-current" /></i
                  ></ks-btn>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="flex justify-end flex-grow items-end">
        <ks-btn
          color="success"
          dense
          :to="`/employer/search/negotiation?ids=${queryId}`"
          >{{ $t('detail.request') + ` (${requestIds.length})` }}</ks-btn
        >
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import KsUserImg from '~/components/KsUserImg.vue'

interface Skill {
  skill_name: Number | null
  years_of_experience: Number | null
}

export default Vue.extend({
  components: { KsUserImg },
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

      results: [],
      resultsLength: 0,
      requestIds: [] as Number[],
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
    queryId(): String {
      const query = Array.from(this.requestIds)
      return query.join(',')
    },
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
        this.results = res.result
        this.resultsLength = res.result.length
        console.log(res)
        console.log(res.result)
      } catch (error) {}
    },
    resetResults(): void {
      this.results = []
      this.skills = [
        {
          skill_name: null,
          years_of_experience: null,
        },
      ] as Skill[]
    },
    addRequest(i: number): void {
      if (!this.requestIds.includes(i)) this.requestIds.push(i)
    },
    removeRequest(i: number): void {
      if (this.requestIds.includes(i)) this.requestIds.splice(i, 1)
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
.title {
  @apply flex-row;
}
.result-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.result-header > * {
  @apply pt-4;
}
table {
  border-spacing: 0;
  @apply border-separate w-full;
}

.text-thead {
  @apply text-blue-kaizen text-left;
}

.text-thead > tr:first-child > th {
  @apply pb-4 px-4;
}

.text-thead th {
  @apply font-normal;
}

.text-tbody {
  @apply font-light text-gray-dark relative;
}

tbody td {
  @apply p-4;
}

tbody > tr > td:first-child {
  @apply rounded-tl-xl;
}

tbody > tr > td:last-child {
  @apply rounded-tr-xl;
}

tbody .expand-btn {
  @apply fill-current stroke-current;
}

tbody > tr:nth-of-type(even) {
  @apply bg-gray-lighter;
}

tbody > div:nth-of-type(even) {
  @apply bg-gray-lighter;
}

tbody .request-detail {
  @apply table-row;
}

tbody > .request-detail > td:first-child {
  @apply rounded-bl-xl;
}

tbody > .request-detail > td:last-child {
  @apply rounded-br-xl;
}
</style>
