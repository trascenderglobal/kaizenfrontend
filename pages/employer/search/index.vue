<template>
  <ks-card class="h-full p-8" col>
    
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
})
</script>

<style scoped>
.profile-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}
.profile-header > * {
  @apply pt-4;
}
.user-img-lg {
  @apply flex-shrink-0 w-20 h-20 rounded-md bg-gray-darker animate-pulse;
}

.social-btn {
  @apply focus:outline-none rounded-lg;
}

.edit-profile-btn {
  @apply inline-flex items-center justify-between w-full space-x-4  focus:outline-none;
}

.item-value {
  @apply text-gray-darker font-light py-1;
}

.edit-enter-active,
.edit-leave-active {
  transition: opacity 0.2s;
}
.edit-enter,
.edit-leave-to {
  opacity: 0;
}

.saved-modal {
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur;
}
</style>