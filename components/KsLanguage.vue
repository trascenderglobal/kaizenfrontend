<template>
  <div class="language" tabindex="-1" @blur="show = false">
    <div v-if="show" class="items">
      <img
        role="button"
        :src="require('@/assets/icons/united-states.svg')"
        alt="en"
        title="English"
        class="img-locale"
        :class="{ 'selected-locale': locale === 'en' }"
        @click="changeLocale('en')"
      />
      <img
        role="button"
        :src="require('@/assets/icons/mexico.svg')"
        alt="es"
        title="Español"
        class="img-locale"
        :class="{ 'selected-locale': locale === 'es' }"
        @click="changeLocale('es')"
      />
    </div>
    <div v-else class="language-wrapper">
      <img
        role="button"
        class="img-locale"
        :src="require(`@/assets/icons/${country || 'united-states'}.svg`)"
        :alt="locale"
        :title="$t('settings.language')"
        @click="show = !show"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      show: false,
    }
  },
  computed: {
    country(): string {
      if (this.locale === 'en') return 'united-states'
      else if (this.locale === 'es') return 'mexico'
      return 'united-states'
    },
    locale(): string {
      return this.$i18n.locale
    },
  },
  methods: {
    async changeLocale(locale: string): Promise<void> {
      await this.$i18n.setLocale(locale)
      this.show = false
    },
  },
})
</script>

<style scoped>
.language {
  @apply hidden md:block relative h-12;
}

.language-wrapper {
  @apply cursor-pointer bg-white w-12 h-12 rounded-xl p-1;
}

.img-locale {
  @apply rounded-full cursor-pointer border-3 border-transparent h-10 w-10;
}

.img-locale.selected-locale {
  @apply cursor-auto border-blue-kaizen;
}

.items {
  @apply flex justify-end items-center h-12 space-x-4 bg-white rounded-xl p-1;
}
</style>
