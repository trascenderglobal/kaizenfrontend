<template>
  <div class="addFilter-wrapper">
    <h1 class="addFilter-title">
      {{ $t('search.addFilter') }}
    </h1>
    <div class="addFilter-description">
      <span>{{ $t('search.addFilterDescription') }}</span>
    </div>
    <div>
      <span class="font-extralight text-blue-kaizen">{{
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
      <span class="font-extralight text-blue-kaizen">{{
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
      <span class="font-extralight text-blue-kaizen">{{
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
      <ks-select
              v-model="search.level"
              class="border border-blue-light"
              :label="$t('profile.edit.select')"
              :items="languagesLevel"
              clearable
              bg-color="bg-transparent"
              color="text-gray-darker"
      />
    </div>
    <ks-btn
        class="self-end apply"
        color="success"
        dense
        @click="console"
        >{{ $t('search.apply') }}</ks-btn
      >
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
      language: '',
      level: '',
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
    languages(): Object[] {
      return [
        {
          text: this.$t(`search.language.es`),
          value: 1
        },
        {
          text: this.$t(`search.language.en`),
          value: 2
        }
      ]
    },
    languagesLevel(): object[] {
      const languagesLevel: object[] = []
      for (let i = 0; i <= 3; i++){
        languagesLevel.push({
          text: this.$t(`search.language.levels.${i}`),
          value: i+1,
        })
      }
      return languagesLevel
    }
  },
  methods: {
    console () {
      console.log(this.search.state, this.search.city, this.search.language, this.search.level)
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

div {
  @apply space-y-2 ;
}
</style>