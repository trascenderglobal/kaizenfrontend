<template>
  <ks-card class="h-full p-8" col>
    <div class="search-header">
      <h1 class="text-3xl font-medium">
        {{$t('search.title')}}
      </h1>
    </div>
    <h1 class="subtitle">
      {{$t('search.subtitle')}}
    </h1>
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
      <div class="field-row">
        <div class="flex-grow lg:flex-grow-0 xl:w-1/4 pt-4">
        <ks-radio-button
          id= 1
          :item-value="1"
          :label="$t('Hola')"
        />
        </div>
      </div>
    </div>
    <hr/>
  </ks-card>
</template>


<script lang="ts">
import Vue from 'vue'


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
  data () {
    return{
    }
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
  @apply mt-2 mb-6 border-blue-light ;
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