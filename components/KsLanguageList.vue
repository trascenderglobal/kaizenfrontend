<template>
  <div class="language-list">
    <img
      role="button"
      :src="require('@/assets/icons/united-states.svg')"
      alt="en"
      class="img-locale"
      :class="{ 'selected-locale': locale === 'en' }"
      @click="changeLocale('en')"
    />
    <img
      role="button"
      :src="require('@/assets/icons/mexico.svg')"
      alt="es"
      class="img-locale"
      :class="{ 'selected-locale': locale === 'es' }"
      @click="changeLocale('es')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      locale: (state: any): string => state.i18n.locale,
    }),
  },
  methods: {
    async changeLocale(locale: string): Promise<void> {
      await this.$i18n.setLocale(locale)
    },
  },
})
</script>

<style scoped>
.language-list {
  @apply flex space-x-2 h-11;
}

.img-locale {
  @apply rounded-full cursor-pointer border-3 border-transparent h-11 w-11;
}

.img-locale.selected-locale {
  @apply cursor-auto border-blue-kaizen;
}
</style>
