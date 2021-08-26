<template>
  <div>
    <ks-card row>
      <section class="main scroller">
        <img
          class="w-1/2 mx-auto"
          :src="require('@/assets/img/kaizen-black.png')"
          alt="Kaizen Squad"
        />
        <p class="error-title">{{ $t('error.title') }}</p>
        <div class="error-subtitle">
          <ks-btn outline large :to="localePath('/')">{{
            $t('error.subtitle')
          }}</ks-btn>
        </div>
      </section>
      <section class="hero-wrapper">
        <div class="hero"></div>
      </section>
    </ks-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'blank',
})
</script>

<style scoped>
.main {
  @apply flex flex-col justify-between w-full min-h-full max-h-full p-8 lg:w-2/5 xl:px-16 overflow-y-auto;
}

.main > div {
  @apply 2xl:px-16;
}

.hero-wrapper {
  @apply relative top-0 right-0 hidden w-3/5 min-h-full bg-black lg:block;
}

.hero {
  background-image: url('~/assets/img/auth.png');
  @apply w-full h-full bg-no-repeat bg-center bg-cover absolute bg-black top-0 left-0 right-0 bottom-0;
}

.error-title {
  @apply py-8 text-2xl text-center text-blue-kaizen;
}

.error-subtitle {
  @apply py-8 text-center text-lg;
}
</style>
