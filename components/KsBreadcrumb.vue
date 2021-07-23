<template>
  <ul class="flex space-x-2">
    <li v-for="(item, i) in breadcrumbItems" :key="`breadcrumb-${i}`">
      <nuxt-link :to="item.path" class="text-link-blue">{{
        item.name === 'Kaizen Squad' ? item.name : $t(`breadcrumb.${item.name}`)
      }}</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

interface BreadCrumbItem {
  name: string
  path: string
}

export default Vue.extend({
  computed: {
    breadcrumbItems(): Array<BreadCrumbItem> {
      const breadcrumb: BreadCrumbItem[] = []
      const routes = this.$route.path.split('/')
      let fullPath = ''
      routes.forEach((route) => {
        breadcrumb.push({
          name: route || 'Kaizen Squad',
          path: route ? fullPath + route : '/',
        })
        fullPath = fullPath + route + '/'
      })
      breadcrumb.splice(1, 1)
      return breadcrumb
    },
  },
})
</script>

<style scoped>
li {
  @apply inline relative text-sm;
}

a {
  @apply inline-flex py-1 px-3 bg-white rounded-lg;
}
</style>
