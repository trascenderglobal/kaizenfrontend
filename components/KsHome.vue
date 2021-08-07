<template>
  <div class="logo-mobile">
    <ks-btn color="primary" text icon dense :to="localePath('/')"
      ><img src="/icon.png" alt="Kaizen Squad" class="w-10 h-10"
    /></ks-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.logo-mobile {
  @apply flex items-center justify-center flex-1 md:hidden;
}
</style>
