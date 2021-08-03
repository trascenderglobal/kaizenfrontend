<template>
  <div class="add-filter-wrapper">
    <h1 class="add-filter-title">
      {{ $t('search.addFilter') }}
    </h1>
    <div class="add-filter-description">
      <span>{{ $t('search.addFilterDescription') }}</span>
    </div>
    <div class="filter-state">
      <div class="filter-label">
        <span class="filter-bullet-outer">
          <span class="filter-bullet-inner"></span>
        </span>
        <span class="text-blue-kaizen">{{ $t('search.state') }} </span>
      </div>
      <div class="filter-input">
        <ks-select
          v-model="search.state"
          class="border border-blue-light"
          :label="$t('profile.edit.select')"
          :items="states"
          clearable
          bg-color="bg-transparent"
          color="text-blue-kaizen"
        />
      </div>
    </div>
    <div class="filter-city">
      <div class="filter-label">
        <span class="filter-bullet-outer">
          <span class="filter-bullet-inner"></span>
        </span>
        <span class="text-blue-kaizen">{{ $t('search.city') }} </span>
      </div>
      <div class="filter-input">
        <ks-select
          v-model="search.city"
          class="border border-blue-light"
          :label="$t('profile.edit.select')"
          :items="cities"
          clearable
          bg-color="bg-transparent"
          color="text-blue-kaizen"
        />
      </div>
    </div>
    <div class="filter-language">
      <div class="filter-label">
        <span class="filter-bullet-outer">
          <span class="filter-bullet-inner"></span>
        </span>
        <span class="text-blue-kaizen"
          >{{ $t('search.language.language') }}
        </span>
      </div>
      <div class="filter-input">
        <ks-select
          v-model="search.lang.language"
          class="border border-blue-light"
          :label="$t('profile.edit.select')"
          :items="languages"
          clearable
          bg-color="bg-transparent"
          color="text-blue-kaizen"
        />
      </div>
      <div class="filter-input">
        <ks-select
          v-model="search.lang.level"
          class="border border-blue-light"
          :label="$t('profile.edit.select')"
          :items="languagesLevel"
          clearable
          bg-color="bg-transparent"
          color="text-blue-kaizen"
        />
      </div>
    </div>
    <div class="flex justify-end pt-2">
      <ks-btn color="success" dense @click="applyFilters">{{
        $t('search.apply')
      }}</ks-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

interface Language {
  language: number | null
  level: number | null
}

interface Filter {
  state: string | null
  city: string | null
  lang: Language
}

export default Vue.extend({
  data() {
    return {
      search: {
        state: null,
        city: null,
        lang: {
          language: null,
          level: null,
        },
      } as Filter,
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
  computed: {
    cities(): String[] {
      if (this.search.state === 'IN')
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
      if (this.search.state === 'MI')
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
    languages(): Object[] {
      return [
        {
          text: this.$t(`search.language.es`),
          value: 1,
        },
        {
          text: this.$t(`search.language.en`),
          value: 2,
        },
      ]
    },
    languagesLevel(): object[] {
      const languagesLevel: object[] = []
      for (let i = 0; i <= 3; i++) {
        languagesLevel.push({
          text: this.$t(`search.language.levels.${i}`),
          value: i + 1,
        })
      }
      return languagesLevel
    },
    ...mapState({
      filters: (state: any): Filter => state.employer.searchFilters,
    }),
  },
  mounted() {
    if (this.filters.state) this.search.state = this.filters.state
    if (this.filters.city) this.search.city = this.filters.city
    if (this.filters.lang) {
      this.search.lang.language = this.filters.lang.language
      this.search.lang.level = this.filters.lang.level
    }
  },
  methods: {
    applyFilters() {
      this.$store.dispatch('employer/updateSearchFilters', this.search)
      this.$notifier.showNotification({
        content: this.$t('search.filtersApplied') as string,
      })
    },
  },
})
</script>

<style scoped>
.add-filter-wrapper {
  @apply w-full flex flex-col flex-grow space-y-2;
}

.add-filter-title {
  @apply text-3xl font-medium text-blue-kaizen;
}

.add-filter-description {
  @apply space-y-2 pt-4 text-gray-darker;
}

.filter-bullet-outer {
  @apply bg-transparent rounded-md border border-blue-kaizen inline-flex w-6 h-6 relative mr-2 justify-center items-center transition;
}

.filter-bullet-inner {
  @apply bg-blue-light rounded w-4 h-4;
}

.filter-city,
.filter-state,
.filter-language {
  @apply space-y-2 py-2;
}

.filter-label {
  @apply flex items-center;
}

.filter-input {
  @apply pl-8;
}
</style>
