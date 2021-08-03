<template>
  <div class="alerts-wrapper">
    <h1 class="alerts-title">
      {{ $t('alerts.alerts') }}
    </h1>
    <div v-if="!alerts.length" class="no-alerts">
      <span>{{ $t('alerts.noAlerts') }}</span>
      <iconly-icon name="notification" class="fill-current" :size="1.5" />
    </div>
    <div v-else class="pt-4 space-y-4">
      <p class="text-gray-dark">{{ $t('alerts.newAlerts') }}</p>
      <div v-for="(alert, i) in alerts" :key="`alert-${i}`" class="job-alert">
        <ks-user-img
          :title="alert.company"
          :initials="alert.company"
          :image-url="images[i]"
        />
        <div class="flex-auto">
          <p class="text-blue-kaizen">{{ alert.position }}</p>
          <p class="text-sm text-gray-dark">
            {{ $d(new Date(alert.start_date)) }}
          </p>
        </div>
        <ks-btn
          color="primary"
          dense
          icon
          text
          :to="localePath('/employee/jobs')"
          ><iconly-icon name="arrow-right-2" class="fill-current" />
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
      alerts: (state: any) => state.employee.alerts as any[],
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch('employee/fetchAlerts')
      const profileImages = await Promise.all(
        this.alerts.map((alert) =>
          this.$axios.$get(
            `/employee/employer/profile_picture/${alert.company_id}`
          )
        )
      )
      this.images = profileImages.map((res: any) => res.profile_picture_URL)
    } catch (error) {}
  },
})
</script>

<style scoped>
.alerts-wrapper {
  @apply w-full flex flex-col flex-grow;
}

.alerts-title {
  @apply text-3xl font-medium text-blue-kaizen pt-4;
}

.no-alerts {
  @apply flex flex-grow flex-col justify-center items-center self-center space-y-2 text-gray-darker text-lg select-none;
}

.no-alerts * {
  @apply text-center;
}

.job-alert {
  @apply flex rounded-xl bg-gray-lighter text-blue-kaizen p-3 space-x-3 items-center;
}
</style>
