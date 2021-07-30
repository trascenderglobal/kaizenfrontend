<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="deal-header">
        <h1 class="text-3xl font-medium">
          {{ $t('deals.deals') }}
        </h1>
      </div>
      <div class="text-header">
        <span>{{ $t('deals.header') }}</span>
      </div>
    </div>
    <div class="flex justify pt-6">
      <div class="flex flex-col space-y-2 min-w-40">
        <span class="text-gray-dark">{{ $t('deals.showBy') }}</span>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <ks-select
          v-model="showBy"
          class="transition"
          :label="$t('deals.showBy')"
          :items="showByItems"
          :bg-color="
            showBy === 4
              ? 'bg-green-kaizen'
              : showBy === 5
              ? 'bg-red-kaizen'
              : showBy === 6
              ? 'bg-orange-pending'
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
            <th>{{ $t('deals.table.position') }}</th>
            <th>{{ $t('deals.table.date') }}</th>
            <th>
              {{ $t('deals.table.status') }}
            </th>
            <th>{{ $t('deals.table.details') }}</th>
          </tr>
          <tr>
            <td colspan="4">
              <hr class="border-blue-light" />
            </td>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <tr v-if="!paginatedDeals.length">
            <td id="noItemsCell" colspan="4">
              <i v-if="loading"
                ><iconly-icon
                  name="loading"
                  type="outline"
                  class="stroke-current"
                  view-box="0 0 38 38"
              /></i>
              <span v-else>{{ $t('deals.table.noItems') }}</span>
            </td>
          </tr>
          <template v-for="(deal, i) in paginatedDeals">
            <tr
              :key="`deal-${i}`"
              class="request-row"
              :class="{ expanded: expanded === i }"
            >
              <td>{{ deal.position }}</td>
              <td>{{ $d(new Date(deal.petition_date)) }}</td>
              <td>
                <div class="flex space-x-2">
                  <ks-status-icon
                    :title="$t('deals.approved')"
                    :color="deal.status === 4 ? 'success' : 'light-gray'"
                    dense
                    icon="tick"
                  />
                  <ks-status-icon
                    :title="$t('deals.partiallyApproved')"
                    :color="deal.status === 6 ? 'warning' : 'light-gray'"
                    dense
                    icon="minus"
                  />
                  <ks-status-icon
                    :title="$t('deals.rejected')"
                    :color="deal.status === 5 ? 'danger' : 'light-gray'"
                    dense
                    icon="close"
                  />
                </div>
              </td>
              <td>
                <div class="flex items-center justify-start">
                  <ks-btn
                    color="primary"
                    class="fill-current"
                    icon
                    dense
                    text
                    @click="toggleExpand(i)"
                  >
                    <iconly-icon
                      name="arrow-down-2"
                      class="transition duration-200"
                      :class="{ 'transform rotate-180': expanded === i }"
                    />
                  </ks-btn>
                </div>
              </td>
            </tr>
            <transition :key="`expanded-deal-${i}`" name="expand">
              <div v-if="expanded === i" class="request-detail">
                <td v-if="loadingDetails" colspan="4" class="text-center">
                  <i
                    ><iconly-icon
                      name="loading"
                      type="outline"
                      class="stroke-current"
                      view-box="0 0 38 38"
                  /></i>
                </td>
                <td v-else colspan="4">
                  <table>
                    <tr
                      v-for="(detail, j) in dealDetails"
                      :key="`expanded-${i}-${j}-1`"
                    >
                      <td class="expanded-cell" colspan="2">
                        <div class="expanded-row">
                          <span>{{ $t('deals.table.from') }}:</span>
                          <span>{{ $d(new Date(detail.start_date)) }}</span>
                        </div>
                        <div class="expanded-row">
                          <span>{{ $t('deals.table.to') }}:</span>
                          <span>{{ $d(new Date(detail.end_date)) }}</span>
                        </div>
                        <div class="expanded-row">
                          <span class="flex items-center"
                            >{{ $t('deals.table.talent') }}:</span
                          >
                          <span class="space-x-2"
                            ><ks-user-img
                              :initials="detail.name"
                              :image-url="detail.profileImage"
                              :to="`/employer/search/detail/${detail.user_id}`"
                          /></span>
                        </div>
                      </td>
                      <td
                        :key="`expanded-${i}-${j}-2`"
                        class="expanded-cell"
                        colspan="2"
                      >
                        <div class="expanded-row">
                          <span>{{ $t('deals.table.typeContract') }}:</span>
                          <span>{{
                            typeOfContract(detail.contract_type)
                          }}</span>
                        </div>
                        <div class="expanded-row">
                          <span>{{ $t('deals.table.salaryRate') }}:</span>
                          <span>{{
                            $t('requests.table.rate', {
                              salary: detail.salary_rate,
                            })
                          }}</span>
                        </div>
                        <div class="expanded-row">
                          <span class="flex items-center"
                            >{{ $t('requests.table.status') }}:</span
                          >
                          <span class="flex"
                            ><ks-status-icon
                              :title="
                                detail.petition_status === 1
                                  ? $t('deals.approved')
                                  : $t('deals.rejected')
                              "
                              :color="
                                detail.petition_status === 1
                                  ? 'success'
                                  : 'danger'
                              "
                              :icon="
                                detail.petition_status === 1 ? 'tick' : 'close'
                              "
                              dense
                          /></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </div>
            </transition>
          </template>
        </tbody>
      </table>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface Request {
  id: number
  company_id: number
  position: string
  petition_date: string | Date
  status: number
}

interface RequestDetail {
  id: number
  user_id: number
  petition_id: number
  negotiation_type: string
  position: string
  contract_type: string
  salary_rate: number
  start_date: string | Date
  end_date: string | Date
  job_description: string | null
  observations: string | null
  petition_status: number
  created_at: string
  updated_at: string
  name?: string
  profileImage?: string
}

export default Vue.extend({
  layout: 'employer',
  data() {
    return {
      showBy: 4,
      loading: false,
      expanded: null as Number | null,
      page: 1,
      size: 5,
      loadingDetails: false,
      deals: [] as Request[],
      dealDetails: [] as RequestDetail[],
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get(
        `/employer/deals/view/${this.showBy || 4}`
      )
      this.deals = res.result
    } catch (error) {
    } finally {
      this.loading = false
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('deals.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('deals.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    showByItems(): object[] {
      return [
        {
          text: this.$t('deals.approved'),
          value: 4,
        },
        {
          text: this.$t('deals.rejected'),
          value: 5,
        },
        {
          text: this.$t('deals.partiallyApproved'),
          value: 6,
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
        this.expanded = null
        await this.$fetch()
      },
    },
  },
  methods: {
    typeOfContract(contract: string): string {
      if (contract === 'contract labor')
        return this.$t('negotiation.contracts.0') as string
      if (contract === 'direct hired')
        return this.$t('negotiation.contracts.1') as string
      return '-'
    },
    previousPage() {
      if (this.page > 1) this.page--
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++
    },
    async toggleExpand(i: number) {
      try {
        if (this.expanded === i) {
          this.expanded = null
        } else {
          this.expanded = i
          this.loadingDetails = true
          const res = await this.$axios.$get(
            `/employer/petition/details/${this.paginatedDeals[i].id}`
          )
          this.dealDetails = res.elements as RequestDetail[]
          const profileImages: any = await Promise.all(
            res.elements.map((req: any) =>
              this.$axios.$get(`/employer/employee_picture/${req.user_id}`)
            )
          )
          this.dealDetails.forEach((req, i) => {
            req.name = profileImages[i].name
            req.profileImage = profileImages[i].profile_picture_URL
          })
        }
      } catch (error) {
      } finally {
        this.loadingDetails = false
      }
    },
  },
})
</script>

<style scoped>
.deal-header {
  @apply text-blue-kaizen;
}
.deal-header > * {
  @apply pt-4;
}
.text-header {
  @apply text-blue-kaizen flex-col lg:flex-row;
}
.title {
  @apply flex-row;
}

table {
  table-layout: fixed;
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
  @apply rounded-tl-xl;
}

tbody > tr > td:last-child {
  @apply rounded-tr-xl;
}

tbody > tr:nth-of-type(even),
tbody > tr:nth-of-type(even) + div.request-detail {
  @apply bg-gray-lighter;
}

tbody .request-detail {
  @apply table-row;
}

tbody > div.request-detail:nth-of-type(even) {
  @apply bg-gray-lighter;
}

tbody > .request-detail td:first-child {
  @apply rounded-bl-xl;
}

tbody > .request-detail td:last-child {
  @apply rounded-br-xl;
}

.expand-enter-active,
.expand-leave-active {
  @apply transition origin-top duration-200;
}

.expand-enter,
.expand-leave-to {
  @apply transform scale-y-0;
}

.expanded-cell {
  @apply space-y-3 border-t border-blue-light;
}

.expanded-cell .expanded-row {
  @apply flex space-x-1;
}

.expanded-cell .expanded-row {
  @apply flex-1;
}
</style>
