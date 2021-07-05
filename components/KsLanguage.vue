<template>
  <div class="language">
    <div class="language-wrapper">
      <img
        :src="require(`@/assets/icons/${country || 'united-states'}.svg`)"
        alt="United States"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    country(): string {
      if (this.$i18n.getLocaleCookie() === 'en') return 'united-states'
      else if (this.$i18n.getLocaleCookie() === 'es') return 'mexico'
      return 'united-states'
    },
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
