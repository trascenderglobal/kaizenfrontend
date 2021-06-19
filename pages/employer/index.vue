<template>

</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    layout: 'main',
  async asyncData({ app }) {
    try {
      const res = await app.$axios.$get('/employee/profile')
      return {
        profile: res,
      }
    } catch (error) {}
  }
})
</script>
