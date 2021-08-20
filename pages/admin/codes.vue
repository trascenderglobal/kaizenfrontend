<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="codes-header">
        <h1 class="text-3xl font-medium">
          {{ $t('adminCodes.title') }}
        </h1>
      </div>
      <div class="text-header">
        <span>{{ $t('adminCodes.subtitle') }}</span>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="py-2 flex items-center w-full sm:w-1/2">
        <ks-btn
          class="w-full sm:w-auto"
          color="light"
          large
          font="font-normal"
          :loading="loading"
          @click="generateCode"
          >{{ $t('adminCodes.generateCode') }}</ks-btn
        >
      </div>
      <div
        v-if="code"
        class="
          py-2
          flex flex-col
          sm:flex-row
          items-center
          justify-start
          w-full
          sm:w-1/2
        "
      >
        <span ref="code" class="p-2 text-gray-darker">{{ code }}</span>
        <ks-btn color="light" font="font-normal" text icon @click="copyCode">
          <iconly-icon name="paper" class="fill-current" />
          <span class="pl-1">Copy this code</span>
        </ks-btn>
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CodesPage',
  layout: 'admin',
  data() {
    return {
      loading: false,
      code: undefined as string | undefined,
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('adminUsers.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('adminUsers.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  methods: {
    async generateCode(): Promise<void> {
      try {
        this.loading = true
        const res = await this.$axios.$post('/admin/generateLicense')
        this.code = res.LicenseKey
      } catch (error) {
        this.code = undefined
      } finally {
        this.loading = false
      }
    },
    copyCode(): void {
      if (this.code) {
        navigator.clipboard.writeText(this.code)
        this.$notifier.showNotification({
          content: this.$t('adminCodes.copied'),
        })
      }
    },
  },
})
</script>

<style scoped>
.title {
  @apply text-blue-kaizen;
}

.codes-header > * {
  @apply pt-4;
}

.text-header {
  @apply pt-6 text-lg;
}

table {
  border-spacing: 0;
  @apply border-separate min-w-full;
}

.text-thead {
  @apply text-blue-kaizen text-left;
}

.text-thead > tr:first-child > th {
  @apply pb-4 px-4;
}

.text-thead th {
  @apply font-normal;
}

.text-tbody {
  @apply text-gray-dark relative;
}

tbody td {
  @apply p-4;
}

#noItemsCell {
  @apply text-center select-none bg-gray-lighter rounded-b-xl rounded-t-none;
}

tbody > tr > td:first-child {
  @apply rounded-l-xl;
}

tbody > tr > td:last-child {
  @apply rounded-r-xl;
}

tbody > tr:nth-of-type(even) {
  @apply bg-gray-lighter;
}

.users-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}

.footer-wrapper {
  @apply flex flex-auto flex-wrap justify-between items-end;
}
</style>
