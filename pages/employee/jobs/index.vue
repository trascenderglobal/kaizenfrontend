<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="jobs-header">
        <h1 class="text-3xl font-medium">
          {{ $t('jobs.title') }}
        </h1>
      </div>
      <div class="text-header">
        <span>{{ $t('jobs.subtitle') }}</span>
      </div>
    </div>
    <div class="flex flex-wrap pt-6">
      <span class="min-w-40 text-gray-dark">{{ $t('jobs.showBy') }}</span>
      <div class="flex flex-col space-y-2 min-w-40">
        <ks-select
          v-model="showBy"
          class="transition"
          :label="$t('jobs.showBy')"
          :items="showByItems"
          :bg-color="
            showBy === 1
              ? 'bg-green-kaizen'
              : showBy === 2
              ? 'bg-red-kaizen'
              : 'bg-gray-darker'
          "
          clearable
        ></ks-select>
      </div>
    </div>
    <div class="mt-8 overflow-x-auto">
      <table>
        <thead class="text-thead">
          <tr>
            <th>{{ $t('jobs.table.company') }}</th>
            <th>{{ $t('jobs.table.position') }}</th>
            <th>{{ $t('jobs.table.date') }}</th>
          </tr>
          <tr>
            <td colspan="3">
              <hr class="border-blue-light" />
            </td>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <tr v-if="!paginatedJobs.length">
            <td id="noItemsCell" colspan="3">
              <i v-if="loading"
                ><iconly-icon
                  name="loading"
                  type="outline"
                  class="stroke-current"
                  view-box="0 0 38 38"
              /></i>
              <span v-else>{{ $t('jobs.table.noItems') }}</span>
            </td>
          </tr>
          <template v-else>
            <tr v-for="(job, i) in paginatedJobs" :key="`job-${i}`">
              <td>
                <div class="flex items-center space-x-2">
                  <ks-user-img
                    :title="job.company_name || job.name + ' ' + job.last_name"
                    :initials="job.company_name || job.name"
                    :image-url="images[i]"
                    expand
                    origin="origin-bottom-left"
                  /><span>{{
                    job.company_name || job.name + ' ' + job.last_name
                  }}</span>
                </div>
              </td>
              <td>
                {{ job.position }}
              </td>
              <td>{{ $d(new Date(job.start_date)) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="jobs-footer">
      <div class="footer-wrapper">
        <div
          class="
            flex
            justify-center
            sm:justify-start
            flex-auto
            text-blue-kaizen
          "
        >
          <span>{{ $t('jobs.page', { p: page, t: totalPages }) }}</span>
        </div>
        <div class="flex flex-auto justify-center sm:justify-end space-x-2">
          <ks-btn
            color="primary"
            dense
            :disabled="page === 1"
            @click="previousPage"
            >{{ $t('requests.previous') }}</ks-btn
          >
          <ks-btn
            color="primary"
            dense
            :disabled="page === totalPages"
            @click="nextPage"
            >{{ $t('requests.next') }}</ks-btn
          >
        </div>
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface Job {
  company_id: number
  company: string
  position: string
  start_date: string
  petition_status: number
}

export default Vue.extend({
  name: 'JobsPage',
  layout: 'employee',
  data() {
    return {
      loading: false,
      showBy: null,
      page: 1,
      size: 5,
      jobs: [] as Job[],
      images: [] as string[],
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get(`/employee/jobs/${this.showBy || 3}`)
      this.jobs = res.results
      this.images = []
      this.paginatedJobs.forEach(async (job) => {
        const res = await this.$axios.$get(
          `/employee/employer/profile_picture/${job.company_id}`
        )
        this.images.push(res.profile_picture_URL)
      })
    } catch (error) {
    } finally {
      this.loading = false
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('jobs.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('jobs.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    showByItems(): object[] {
      return [
        {
          text: this.$t('jobs.approved'),
          value: 1,
        },
        {
          text: this.$t('jobs.rejected'),
          value: 2,
        },
      ]
    },
    totalPages(): number {
      return Math.ceil(this.jobs.length / this.size) || 1
    },
    paginatedJobs(): any[] {
      return this.jobs.slice(
        this.size * this.page - this.size,
        this.size * this.page
      )
    },
  },
  watch: {
    showBy: {
      async handler() {
        await this.$fetch()
      },
    },
  },
  methods: {
    previousPage() {
      if (this.page > 1) this.page--
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++
    },
  },
})
</script>

<style scoped>
.title {
  @apply text-blue-kaizen;
}

.jobs-header > * {
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

.jobs-footer {
  @apply flex justify-between items-end flex-grow pt-4;
}

.footer-wrapper {
  @apply flex flex-auto flex-wrap justify-between items-end;
}
</style>
