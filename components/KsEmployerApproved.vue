<template>
  <div class="approved-wrapper">
    <h1 class="approved-title">
      {{ $t('approved.approved') }}
    </h1>
    <div v-if="!approved.length" class="no-approved">
      <span>{{ $t('approved.noApproved') }}</span>
      <iconly-icon name="notification" class="fill-current" :size="1.5" />
    </div>
    <div v-else class="pt-4 space-y-4">
      <p class="text-gray-dark">{{ $t('approved.alerts') }}</p>
      <div v-for="(deal, i) in approved" :key="`alert-${i}`" class="deal-alert">
        <ks-user-img
          :title="deal.user_name + ' ' + deal.user_last_name"
          :initials="deal.user_name"
          :image-url="images[i]"
        />
        <div class="flex-auto">
          <p class="text-blue-kaizen">
            {{ deal.user_name + ' ' + deal.user_last_name }}
          </p>
          <p class="text-sm text-gray-dark">
            {{ $d(new Date(deal.start_date)) }}
          </p>
        </div>
        <ks-btn color="success" dense icon :to="localePath('/employer/deals')"
          ><iconly-icon name="swap" class="fill-current" />
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
      approved: (state: any) => state.employer.approvedDeals as any[],
    }),
  },
  async mounted() {
    await this.$store.dispatch('employer/fetchApprovedDeals')
    this.approved.forEach(async (deal) => {
      const res = await this.$axios.$get(
        `/employer/employee_picture/${deal.user_id}`
      )
      this.images.push(res.profile_picture_URL)
    })
  },
})
</script>

<style scoped>
.approved-wrapper {
  @apply w-full flex flex-col flex-grow;
}

.approved-title {
  @apply text-3xl font-medium text-blue-kaizen pt-4;
}

.no-approved {
  @apply flex flex-grow flex-col justify-center items-center self-center space-y-2 text-gray-darker text-lg select-none;
}

.no-approved * {
  @apply text-center;
}

.deal-alert {
  @apply flex rounded-xl bg-gray-lighter text-blue-kaizen p-3 space-x-3 items-center;
}
</style>
