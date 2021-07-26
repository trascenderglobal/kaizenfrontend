<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="deals-header">
        <h1 class="text-3xl font-medium">
          {{ $t('adminDeals.title') }}
        </h1>
      </div>
      <div class="text-header">
        <span>{{ $t('adminDeals.subtitle') }}</span>
      </div>
    </div>
    <div class="flex justify pt-6">
      <div class="flex flex-col space-y-2 min-w-40">
        <span class="text-gray-dark">{{ $t('adminDeals.showBy') }}</span>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <ks-select
          v-model="showBy"
          class="transition"
          :label="$t('adminDeals.showBy')"
          :items="showByItems"
          :bg-color="
            showBy === 4
              ? 'bg-green-kaizen'
              : showBy === 3
              ? 'bg-blue-light'
              : showBy === 5
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
            <th>{{ $t('adminDeals.table.company') }}</th>
            <th>{{ $t('adminDeals.table.date') }}</th>
            <th>
              <span><iconly-icon name="add-user" class="fill-current" /></span>
            </th>
            <th>{{ $t('adminDeals.table.deal') }}</th>
            <th>
              {{ $t('adminDeals.table.status') }}
            </th>
          </tr>
          <tr>
            <td colspan="5">
              <hr class="border-blue-light" />
            </td>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <tr v-if="!paginatedDeals.length">
            <td id="noItemsCell" colspan="5">
              <i v-if="loading"
                ><iconly-icon
                  name="loading"
                  type="outline"
                  class="stroke-current"
                  view-box="0 0 38 38"
              /></i>
              <span v-else>{{ $t('adminDeals.table.noItems') }}</span>
            </td>
          </tr>
          <template v-else>
            <tr v-for="(deal, i) in deals" :key="`deal-${i}`">
              <td>
                <div class="flex items-center space-x-2">
                  <ks-user-img
                    :initials="deal.name"
                    :image-url="deal.profile_picture_URL"
                  /><span>{{ deal.name + ' ' + deal.last_name }}</span>
                </div>
              </td>
              <td>{{ $d(new Date(deal.petition_date)) }}</td>
              <td>{{ deal.number_elements }}</td>
              <td>
                <div class="flex items-center space-x-2">
                  <span>{{ $t('adminDeals.table.view') }}</span>
                  <ks-btn
                    color="light-blue"
                    dense
                    icon
                    :to="localePath(`/admin/deals/${deal.id}`)"
                    ><iconly-icon name="show" class="fill-current"
                  /></ks-btn>
                </div>
              </td>
              <td>
                <div class="flex items-center space-x-2">
                  <ks-status-icon
                    :title="
                      deal.status === 4
                        ? $t('adminDeals.table.approved')
                        : deal.status === 5
                        ? $t('adminDeals.table.rejected')
                        : deal.status === 3
                        ? $t('adminDeals.table.pending')
                        : deal.status === 6
                        ? $t('adminDeals.table.partiallyApproved')
                        : ''
                    "
                    :color="
                      deal.status === 4
                        ? 'success'
                        : deal.status === 5
                        ? 'danger'
                        : 'warning'
                    "
                    dense
                    :icon="
                      deals.status === 4
                        ? 'tick'
                        : deal.status === 5
                        ? 'close'
                        : 'time-circle'
                    "
                  ></ks-status-icon>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="deals-footer">
      <div class="flex-auto text-blue-kaizen">
        <span>{{ $t('adminDeals.page', { p: page, t: totalPages }) }}</span>
      </div>
      <div class="flex justify-center flex-auto space-x-2">
        <ks-btn
          color="primary"
          dense
          :disabled="page === 1"
          @click="previousPage"
          >{{ $t('adminDeals.previous') }}</ks-btn
        >
        <ks-btn
          color="primary"
          dense
          :disabled="page === totalPages"
          @click="nextPage"
          >{{ $t('adminDeals.next') }}</ks-btn
        >
      </div>
      <div class="flex-auto"></div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'admin',
  data() {
    return {
      loading: false,
      showBy: 3,
      deals: [] as any[],
      page: 1,
      size: 5,
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get(
        `/admin/deals/view/${this.showBy || 3}`
      )
      this.deals = res.deals
    } catch (error) {
    } finally {
      this.loading = false
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('adminDeals.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('adminDeals.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    showByItems(): object[] {
      return [
        {
          text: this.$t('adminDeals.approved'),
          value: 4,
        },
        {
          text: this.$t('adminDeals.active'),
          value: 3,
        },
        {
          text: this.$t('adminDeals.rejected'),
          value: 5,
        },
      ]
    },
    totalPages(): number {
      return Math.ceil(this.deals.length / this.size) || 1
    },
    paginatedDeals(): any[] {
      return this.deals.slice(
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

.deals-header > * {
  @apply pt-4;
}

.text-header {
  @apply pt-6 text-lg;
}

table {
  border-spacing: 0;
  @apply border-separate w-full;
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

.deals-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}
</style>
