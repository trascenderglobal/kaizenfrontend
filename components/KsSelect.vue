<template>
  <div class="ks-select"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style scoped>
.ks-select {
  @apply relative;
}
</style>
