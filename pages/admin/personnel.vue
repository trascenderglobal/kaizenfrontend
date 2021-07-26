<template>
  <ks-card class="h-full p-8" col></ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'admin',
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'Kaizen Squad',
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kaizen Squad',
        },
        ...i18nHead.meta,
      ],
    }
  },
})
</script>

<style scoped></style>
