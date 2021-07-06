<template>
  <div class="language">
    <div class="language-wrapper">
      <img
        :src="require(`@/assets/icons/${country || 'united-states'}.svg`)"
        :alt="locale"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    country(): string {
      if (this.locale === 'en') return 'united-states'
      else if (this.locale === 'es') return 'mexico'
      return 'united-states'
    },
    ...mapGetters({
      locale: 'user/getLocale',
    }),
  },
})
</script>

<style scoped>
.language {
  @apply bg-white rounded-xl w-12 h-12 p-1.5;
}

.language-wrapper {
  @apply rounded-full cursor-pointer;
}
</style>
