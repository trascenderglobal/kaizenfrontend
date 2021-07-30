<template>
  <div class="deals-wrapper">
    <h1 class="deals-title">
      {{ $t('adminAlerts.title') }}
    </h1>
    <div v-if="!deals.length" class="no-deals">
      <span>{{ $t('adminAlerts.noDeals') }}</span>
      <iconly-icon name="notification" class="fill-current" :size="1.5" />
    </div>
    <div v-else class="pt-4 space-y-4">
      <p class="text-gray-dark">{{ $t('alerts.newAlerts') }}</p>
      <div v-for="(deal, i) in deals" :key="`alert-${i}`" class="deal-alert">
        <ks-user-img
          :title="deal.name + ' ' + deal.last_name"
          :initials="deal.name"
          :image-url="images[i]"
        />
        <div class="flex-auto">
          <p class="text-blue-kaizen">{{ deal.name + ' ' + deal.last_name }}</p>
          <p class="text-sm text-gray-dark">
            {{ $d(new Date(deal.petition_date)) }}
          </p>
        </div>
        <ks-btn color="success" dense icon :to="localePath('/admin/deals')"
          ><iconly-icon name="show" class="fill-current" />
        </ks-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data() {
    return {
      images: [] as string[],
    }
  },
  computed: {
    ...mapState({
      deals: (state: any) => state.admin.dealsMade as any[],
    }),
  },
  async mounted() {
    await this.$store.dispatch('admin/fetchDealsMade')
    this.deals.forEach(async (deal) => {
      const res = await this.$axios.$get(
        `/admin/user/profile_picture/${deal.company_id}`
      )
      this.images.push(res.profile_picture_URL)
    })
  },
})
</script>

<style scoped>
.deals-wrapper {
  @apply w-full flex flex-col flex-grow;
}

.deals-title {
  @apply text-3xl font-medium text-blue-kaizen pt-4;
}

.no-deals {
  @apply flex flex-grow flex-col justify-center items-center self-center space-y-2 text-gray-darker text-lg select-none;
}

.no-deals * {
  @apply text-center;
}

.deal-alert {
  @apply flex rounded-xl bg-gray-lighter text-blue-kaizen p-3 space-x-3 items-center;
}
</style>
