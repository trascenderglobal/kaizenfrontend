<template>
  <ks-card class="h-full p-8" col>
    <div v-if="!results.length">
      <div>
        <div class="search-header">
          <h1 class="title">
            {{ $t('search.title') }}
          </h1>
          <ks-btn
            id="filterBtn"
            :title="$t('search.addFilter')"
            :aria-label="$t('search.addFilter')"
            icon
            text
            @click="$store.commit('employer/SET_FILTER', true)"
          >
            <iconly-icon name="filter" class="fill-current" />
          </ks-btn>
        </div>
        <h1 class="subtitle">
          {{ $t('search.subtitle') }}
        </h1>
        <div
          v-for="(v, i) in $v.skills.$each.$iter"
          :key="`skills-filter-${i}`"
          class="skills-filter"
        >
          <div class="skill-filters">
            <div class="field-row">
              <div class="field-col flex-1">
                <div class="flex-grow lg:flex-grow-0 xl:w-1/4 pt-4">
                  <ks-select
                    v-model.number="v.skill_name.$model"
                    :label="$t('resume.selectSkill')"
                    class="border"
                    :class="
                      v.skill_name.$error
                        ? 'border-red-kaizen'
                        : v.skill_name.$model
                        ? 'border-blue-kaizen'
                        : 'border-blue-light'
                    "
                    :bg-color="
                      v.skill_name.$model ? 'bg-blue-kaizen' : 'bg-transparent'
                    "
                    :color="
                      v.skill_name.$error
                        ? 'text-red-kaizen'
                        : v.skill_name.$model
                        ? 'text-white'
                        : 'text-gray-darker'
                    "
                    :items="skillsCat"
                    clearable
                  />
                </div>
              </div>
            </div>
            <form class="flex flex-wrap w-full" @submit.prevent>
              <span class="flex items-center text-blue-kaizen pr-4"
                >{{ $t('search.experience.experience') }}:</span
              >
              <div class="py-1 pr-4">
                <ks-radio-button
                  :id="`${i}-1`"
                  v-model.number="v.years_of_experience.$model"
                  :color="
                    v.years_of_experience.$error
                      ? 'text-red-kaizen'
                      : 'text-gray-darker'
                  "
                  :border-color="
                    v.years_of_experience.$error
                      ? 'border-red-kaizen'
                      : 'border-blue-light'
                  "
                  :item-value="1"
                  :label="$t('search.experience.option1')"
                />
              </div>
              <div class="py-1 pr-4">
                <ks-radio-button
                  :id="`${i}-2`"
                  v-model.number="v.years_of_experience.$model"
                  :color="
                    v.years_of_experience.$error
                      ? 'text-red-kaizen'
                      : 'text-gray-darker'
                  "
                  :border-color="
                    v.years_of_experience.$error
                      ? 'border-red-kaizen'
                      : 'border-blue-light'
                  "
                  :item-value="2"
                  :label="$t('search.experience.option2')"
                />
              </div>
              <div class="py-1">
                <ks-radio-button
                  :id="`${i}-3`"
                  v-model.number="v.years_of_experience.$model"
                  :color="
                    v.years_of_experience.$error
                      ? 'text-red-kaizen'
                      : 'text-gray-darker'
                  "
                  :border-color="
                    v.years_of_experience.$error
                      ? 'border-red-kaizen'
                      : 'border-blue-light'
                  "
                  :item-value="3"
                  :label="$t('search.experience.option3')"
                />
              </div>
            </form>
          </div>
          <div class="field-row justify-end">
            <div class="field-col">
              <button
                v-if="skills.length > 1"
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
      <div class="flex justify-end flex-grow">
        <ks-btn class="self-end" color="primary" dense @click="search">{{
          $t('search.searchButton')
        }}</ks-btn>
      </div>
    </div>
    <transition name="results">
      <div v-if="results.length" class="flex flex-col flex-grow">
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
          {{ $t('results.subtitle', { resultsLength: results.length }) }}
        </h1>
        <div class="overflow-x-auto">
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
                      <ks-user-img
                        :title="result.name + ' ' + result.last_name"
                        :initials="result.name"
                        :image-url="images[i]"
                        expand
                        origin="origin-bottom-left"
                      /><span>{{ result.name }} {{ result.last_name }}</span>
                    </div>
                  </td>
                  <td>{{ result.position }}</td>
                  <td>
                    <div class="flex items-center space-x-2">
                      <span class="font-light text-gray-dark">{{
                        $t('results.table.view')
                      }}</span>
                      <ks-btn
                        :title="$t('results.table.view')"
                        color="light-blue"
                        dense
                        icon
                        :to="`/employer/search/detail/${
                          result.id
                        }?q=${JSON.stringify(searchParams)}`"
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
                          ><iconly-icon
                            name="plus-alt"
                            class="stroke-current" /></i
                      ></ks-btn>
                      <ks-btn
                        color="danger"
                        dense
                        icon
                        :disabled="!requestIds.includes(result.id)"
                        @click="removeRequest(result.id)"
                        ><i
                          ><iconly-icon
                            name="minus"
                            class="stroke-current" /></i
                      ></ks-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="result-footer">
          <div class="footer-wrapper">
            <div
              class="
                flex
                justify-center
                sm:justify-start
                flex-auto
                text-blue-kaizen
              "
            >
              <span>{{ $t('results.page', { p: page, t: totalPages }) }}</span>
            </div>
            <div class="flex justify-center flex-auto space-x-2">
              <ks-btn
                color="primary"
                dense
                :disabled="page === 1"
                @click="previousPage"
                >{{ $t('results.previous') }}</ks-btn
              >
              <ks-btn
                color="primary"
                dense
                :disabled="page === totalPages"
                @click="nextPage"
                >{{ $t('results.next') }}</ks-btn
              >
            </div>
            <div class="flex flex-auto justify-end">
              <ks-btn
                class="w-full sm:w-auto"
                color="success"
                dense
                :to="`/employer/search/negotiation?ids=${queryId}`"
                >{{ $t('detail.request') + ` (${requestIds.length})` }}</ks-btn
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

interface Skill {
  skill_name: Number | null
  years_of_experience: Number | null
}

export default Vue.extend({
  name: 'SearchPage',
  layout: 'employerSearch',
  data() {
    return {
      skills: [
        {
          skill_name: null,
          years_of_experience: null,
        },
      ] as Skill[],
      results: [] as any[],
      requestIds: [] as Number[],
      page: 1,
      size: 5,
      images: [] as string[],
    }
  },
  async fetch() {
    try {
      if (this.$route.query.q) {
        const query = JSON.parse(this.$route.query.q as string)
        this.skills = query.skills
        this.$store.dispatch('employer/updateSearchFilters', {
          lang: query.language,
          state: query.state,
          city: query.city,
        })
        await this.search()
        this.$router.push({ query: { q: undefined } })
      }
    } catch (error) {}
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
    totalPages(): number {
      return Math.ceil(this.results.length / this.size) || 1
    },
    searchParams(): Object {
      return {
        skills: this.skills.filter(
          (skill) => skill.skill_name && skill.years_of_experience
        ),
        language: this.filters.language || undefined,
        city: this.filters.city || undefined,
        state: this.filters.state || undefined,
      }
    },
    ...mapState({
      filter: (state: any): boolean => state.employer.filter,
      filters: (state: any) => state.employer.searchFilters,
    }),
  },
  watch: {
    filters: {
      async handler() {
        if (this.results.length) await this.search()
      },
      deep: true,
    },
  },
  beforeDestroy() {
    this.$store.dispatch('employer/updateSearchFilters', {
      lang: {
        language: null,
        level: null,
      },
      state: null,
      city: null,
    })
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
        this.$v.$touch()
        if (this.$v.$invalid) return

        const res = await this.$axios.$post(
          '/employer/search',
          this.searchParams
        )
        this.results = res.result
        const profileImages: any = await Promise.all(
          res.result.map((res: any) =>
            this.$axios.$get(`/employer/employee_picture/${res.id}`)
          )
        )
        this.images = profileImages.map((res: any) => res.profile_picture_URL)
        if (!this.results.length)
          this.$notifier.showNotification({
            content: this.$t('search.noResults'),
            bgColor: 'bg-red-kaizen',
          })
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
      this.$v.$reset()
    },
    addRequest(i: number): void {
      if (!this.requestIds.includes(i)) this.requestIds.push(i)
    },
    removeRequest(i: number): void {
      const index = this.requestIds.indexOf(i)
      if (this.requestIds.includes(i)) this.requestIds.splice(index, 1)
    },
    previousPage() {
      if (this.page > 1) this.page--
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++
    },
  },
  validations() {
    return {
      skills: {
        $each: {
          skill_name: {
            required,
          },
          years_of_experience: {
            required,
          },
        },
      },
    }
  },
})
</script>

<style scoped>
.search-header {
  @apply pt-4 flex justify-between items-center;
}

#filterBtn {
  @apply lg:hidden;
}

.search-header > * {
  @apply text-blue-kaizen text-3xl font-medium;
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

.result-footer {
  @apply flex justify-center items-end flex-grow;
}

.footer-wrapper {
  @apply flex flex-auto flex-wrap justify-between items-end;
}

.footer-wrapper > * {
  @apply pt-4;
}

table {
  border-spacing: 0;
  @apply border-separate min-w-full;
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

.results-enter-active,
.results-leave-active {
  transition: opacity 0.2s;
}
.results-enter,
.results-leave-to {
  opacity: 0;
}
</style>
