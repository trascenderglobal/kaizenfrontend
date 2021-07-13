<template>
  <div class="addFilter-wrapper">
    <h1 class="addFilter-title">
      {{ $t('search.addFilter') }}
    </h1>
    <div class="addFilter-description">
      <span>{{ $t('search.addFilterDescription') }}</span>
    </div>
    <div>
      <span class="font-medium text-blue-kaizen">{{
        $t('search.state')}}
      </span>
      <ks-select
              v-model="search.state"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="states"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
      />
    </div>
    <div>
      <span class="font-medium text-blue-kaizen">{{
        $t('search.city')}}
      </span>
      <ks-select
              v-model="search.city"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="cities"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
      />
    </div>
    <div>
      <span class="font-medium text-blue-kaizen">{{
        $t('search.language.language')}}
      </span>
      <ks-select
              v-model="search.language"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="languages"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return {
      search: {
      state: '',
      city: '',
      language: ''
    },
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
    languages(): object[] {
      const languages: object[] = []
      for (let i = 0; i <= 3; i++){
        languages.push({
          text: this.$t(`search.language.levels.${i}`),
          value: i+1,
        })
      }
      return languages
    }
  }
})
</script>

<style scoped>
.addFilter-wrapper {
  @apply w-full flex flex-col flex-grow;
}

.addFilter-title {
  @apply text-3xl font-medium text-blue-kaizen ;
}

.addFilter-description {
  @apply space-y-2 pt-4 text-gray-darker text-sm ;
}

</style>
