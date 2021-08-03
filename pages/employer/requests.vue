<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="request-header">
        <h1 class="text-3xl font-medium">
          {{ $t('requests.requests') }}
        </h1>
      </div>
      <div class="text-header">
        <span>{{ $t('requests.header') }}</span>
      </div>
    </div>
    <div class="flex pt-6">
      <div class="flex flex-col space-y-2 min-w-40">
        <span class="text-gray-dark">{{ $t('requests.showBy') }}</span>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <ks-select
          v-model="showBy"
          class="transition"
          :label="$t('requests.showBy')"
          :items="showByItems"
          :bg-color="
            showBy === 1
              ? 'bg-blue-light'
              : showBy === 2
              ? 'bg-red-kaizen'
              : showBy === 3
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
            <th>{{ $t('requests.table.position') }}</th>
            <th>{{ $t('requests.table.date') }}</th>
            <th>
              {{ $t('requests.table.status') }}/{{
                $t('requests.table.actions')
              }}
            </th>
            <th>{{ $t('requests.table.details') }}</th>
          </tr>
          <tr>
            <td colspan="4">
              <hr class="border-blue-light" />
            </td>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <tr v-if="!paginatedRequests.length">
            <td id="noItemsCell" colspan="4">
              <i v-if="loading"
                ><iconly-icon
                  name="loading"
                  type="outline"
                  class="stroke-current"
                  view-box="0 0 38 38"
              /></i>
              <span v-else>{{ $t('requests.table.noItems') }}</span>
            </td>
          </tr>
          <template v-for="(request, i) in paginatedRequests">
            <tr
              :key="`request-${i}`"
              class="request-row"
              :class="{ expanded: expanded === i }"
            >
              <td>{{ request.position }}</td>
              <td>{{ $d(new Date(request.petition_date)) }}</td>
              <td>
                <div class="flex space-x-2">
                  <ks-btn
                    v-if="request.status === 1 || request.status === 2"
                    :title="$t('requests.send')"
                    color="success"
                    :disabled="updatingStatus"
                    dense
                    icon
                    @click="sendRequest(request)"
                    ><i><iconly-icon name="send" class="fill-current" /></i
                  ></ks-btn>
                  <ks-status-icon
                    v-if="request.status === 3"
                    :title="$t('requests.pending')"
                    color="warning"
                    dense
                    icon="time-circle"
                  />
                  <ks-btn
                    :title="
                      request.status === 2
                        ? $t('requests.canceled')
                        : $t('requests.cancel')
                    "
                    color="danger"
                    :disabled="updatingStatus || request.status === 2"
                    dense
                    icon
                    @click="setCancelRequest(request)"
                    ><i><iconly-icon name="close" class="stroke-current" /></i
                  ></ks-btn>
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
            <transition :key="`expanded-request-${i}`" name="expand">
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
                      v-for="(detail, j) in requestDetails"
                      :key="`expanded-${i}-${j}-1`"
                    >
                      <td class="expanded-cell" colspan="2">
                        <div class="expanded-row">
                          <span>{{ $t('requests.table.from') }}:</span>
                          <span>{{ $d(new Date(detail.start_date)) }}</span>
                        </div>
                        <div class="expanded-row">
                          <span>{{ $t('requests.table.to') }}:</span>
                          <span>{{ $d(new Date(detail.end_date)) }}</span>
                        </div>
                        <div class="expanded-row">
                          <span>{{ $t('requests.table.talent') }}:</span>
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
                          <span
                            >{{ $t('requests.table.typeOfContract') }}:</span
                          >
                          <span>{{
                            typeOfContract(detail.contract_type)
                          }}</span>
                        </div>
                        <div class="expanded-row">
                          <span>{{ $t('requests.table.salaryRate') }}:</span>
                          <span>{{
                            $t('requests.table.rate', {
                              salary: detail.salary_rate,
                            })
                          }}</span>
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
    <div class="request-footer">
      <div class="flex-auto text-blue-kaizen">
        <span>{{ $t('requests.page', { p: page, t: totalPages }) }}</span>
      </div>
      <div class="flex justify-center flex-auto space-x-2">
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
      <div class="flex-auto"></div>
    </div>
    <transition name="cancel">
      <div v-if="showCancel" class="cancel-modal" role="dialog">
        <div class="w-3/5">
          <ks-card class="p-8" col>
            <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
              <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                {{ $t('requests.cancelModal.title') }}
              </h1>
              <hr class="self-stretch border-blue-light" />
              <p class="text-xl text-blue-kaizen text-center">
                {{ $t('requests.cancelModal.subtitle') }}
              </p>
              <div
                class="flex pt-16 space-x-2 flex-grow items-end justify-center"
              >
                <ks-btn
                  color="danger"
                  outline
                  class="text-xl"
                  @click="cancelRequest(requestCancel)"
                  >{{ $t('requests.cancel') }}</ks-btn
                >
                <ks-btn
                  color="darker-gray"
                  class="text-xl"
                  @click="requestCancel = null"
                  >{{ $t('requests.close') }}</ks-btn
                >
              </div>
            </div>
          </ks-card>
        </div>
      </div>
    </transition>
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
  name: 'RequestsPage',
  layout: 'employer',
  data() {
    return {
      expanded: null as Number | null,
      showBy: null,
      loading: false,
      updatingStatus: false,
      loadingDetails: false,
      page: 1,
      size: 5,
      requests: [] as Request[],
      requestDetails: [] as RequestDetail[],
      requestCancel: null as Request | null,
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get(
        `/employer/petition/view/${this.showBy || 1}`
      )
      this.requests = res.result as Request[]
    } catch (error) {
    } finally {
      this.loading = false
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('requests.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('requests.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    showByItems(): object[] {
      return [
        {
          text: this.$t('requests.inProcess'),
          value: 3,
        },
        {
          text: this.$t('requests.canceled'),
          value: 2,
        },
      ]
    },
    totalPages(): number {
      return Math.ceil(this.requests.length / this.size) || 1
    },
    paginatedRequests(): Request[] {
      return this.requests.slice(
        this.size * this.page - this.size,
        this.size * this.page
      )
    },
    showCancel(): boolean {
      return this.requestCancel !== null
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
    typeOfContract(contract: string): string {
      if (contract === 'contract labor')
        return this.$t('negotiation.contracts.0') as string
      if (contract === 'direct hire')
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
            `/employer/petition/details/${this.paginatedRequests[i].id}`
          )
          this.requestDetails = res.elements as RequestDetail[]
          const profileImages: any = await Promise.all(
            res.elements.map((req: any) =>
              this.$axios.$get(`/employer/employee_picture/${req.user_id}`)
            )
          )
          this.requestDetails.forEach((req, i) => {
            req.name = profileImages[i].name
            req.profileImage = profileImages[i].profile_picture_URL
          })
        }
      } catch (error) {
      } finally {
        this.loadingDetails = false
      }
    },
    async sendRequest(request: Request) {
      try {
        this.updatingStatus = true
        await this.$axios.$post('/employer/petition/send', {
          petitionID: request.id,
        })
        request.status = 3
        this.$notifier.showNotification({
          content: this.$t('requests.requestSent'),
        })
      } catch (error) {
      } finally {
        this.updatingStatus = false
      }
    },
    setCancelRequest(requestCancel: Request) {
      this.requestCancel = requestCancel
    },
    async cancelRequest(request: Request) {
      try {
        this.updatingStatus = true
        await this.$axios.$post('/employer/petition/cancel', {
          petitionID: request.id,
        })
        request.status = 2
        this.requestCancel = null
        this.$notifier.showNotification({
          content: this.$t('requests.requestCanceled'),
        })
      } catch (error) {
      } finally {
        this.updatingStatus = false
      }
    },
  },
})
</script>

<style scoped>
.title {
  @apply text-blue-kaizen;
}

.request-header > * {
  @apply pt-4;
}

.request-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}

.text-header {
  @apply pt-6 text-lg;
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

.expanded-cell .expanded-row > span {
  @apply flex-1;
}

.cancel-enter-active,
.cancel-leave-active {
  transition: opacity 0.2s;
}
.cancel-enter,
.cancel-leave-to {
  opacity: 0;
}

.cancel-modal {
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur;
}
</style>
