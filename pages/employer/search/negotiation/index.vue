<template>
  <ks-card class="h-full p-8">
    <div class="negotiation-header">
      <h1 class="text-3xl font-medium">
        {{ $t('negotiation.negotiation') }}
      </h1>
    </div>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <div class="user-img-lg">
          <div class="img-wrapper">
            <iconly-icon
              name="camera"
              :size="1.2"
              class="fill-current text-white"
            />
            <div
              role="img"
              :aria-label="$t('profile.userImage')"
              class="img"
              :style="userImage"
            ></div>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            $t('settings.account')
          }}</span>
          <span class="font-light text-gray-dark">{{
            $t('settings.accountCreatedOn')
          }}</span>
          <span class="font-light text-gray-dark"></span>
        </div>
      </div>
    </div>
    <hr class="my-8 border" />
    <h1 class="title">
      {{ $t('negotiation.typeOfN') }}
    </h1>
    <div class="fields">
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <ks-datepicker
            :label="$t('negotiation.from')"
            :bg-color="'bg-blue-darker'"
            clearable
          />
        </div>
        <div class="field-col w-1/6">
          <ks-datepicker
            :label="$t('negotiation.to')"
            :bg-color="'bg-blue-darker'"
            clearable
          />
        </div>
        <div class="field-col w-full">
          <ks-input
            :border-color="'border-gray-light'"
            dense
            disable-hint
            :label="$t('negotiation.position')"
          />
        </div>
      </div>
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{ $t('negotiation.typeOfC') }}</span>
        </div>
        <div class="field-col w-full">
          <ks-select
            :label="$t('negotiation.selectContract')"
            class="transition border"
            :class="'border-gray-light'"
            :bg-color="'bg-white'"
            color="text-gray-dark"
            clearable
          />
        </div>
      </div>
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{ $t('negotiation.salaryRate') }}</span>
        </div>
        <div class="field-col w-full">
          <ks-select
            :label="$t('aqui va el slider')"
            class="transition border"
            :class="'border-gray-light'"
            :bg-color="'bg-white'"
            color="text-gray-dark"
            clearable
          />
        </div>
      </div>
    </div>
    <hr class="my-8 border" />
    <div class="fields">
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{ $t('negotiation.jobDescription') }}</span>
        </div>
        <div class="field-col w-full">
          <ks-text-area
            :border-color="'border-gray-light'"
            dense
            disable-hint
          />
        </div>
      </div>
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{ $t('negotiation.observation') }}</span>
        </div>
        <div class="field-col w-full">
          <ks-text-area
            :border-color="'border-gray-light'"
            dense
            disable-hint
            
          />
        </div>
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'
import KsInput from '~/components/KsInput.vue'
import KsTextArea from '~/components/KsTextArea.vue'

type NullableDate = null | Date

export default Vue.extend({
  components: { KsInput, KsTextArea },
  name: 'NegotiationPage',
  layout: 'employerNegotiation',
})
</script>

<style scoped>
hr {
  @apply my-6 border-blue-light;
}

.negotiation-header {
  @apply flex justify-start text-blue-kaizen pb-6;
}

.negotiation-header > * {
  @apply pt-4;
}

.user-img-lg {
  @apply flex-shrink-0 w-20 h-20;
}

.img-wrapper {
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-gray-darker to-gray-light shadow-md backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img {
  @apply w-full h-full bg-no-repeat bg-center z-10 bg-cover absolute rounded-md top-0 left-0 right-0 bottom-0;
}

.title {
  @apply text-lg font-extralight text-blue-kaizen;
}

.field-row {
  @apply mt-4 inline-flex;
}

.field-col {
  @apply p-1;
}
</style>
