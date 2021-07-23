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
    <div class="flex justify pt-6">
      <div class="flex flex-col space-y-2 min-w-40">
        <span class="font-light text-gray-dark">{{
          $t('requests.showBy')
        }}</span>
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
              ? 'bg-orange-pending'
              : showBy === 3
              ? 'bg-red-kaizen'
              : 'bg-gray-darker'
          "
        ></ks-select>
      </div>
    </div>
    <div class="flex flex-col space-y-2 min-w-40 mt-8">
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
          <template v-for="(request, i) in requests">
            <tr
              :key="`request-${i}`"
              class="request-row"
              :class="{ expanded: request.expand }"
            >
              <td>{{ request.position }}</td>
              <td>{{ $d(request.from) }}</td>
              <td>
                <div class="flex space-x-2">
                  <ks-status-icon
                    v-if="request.status === 'open'"
                    :title="$t('requests.send')"
                    color="success"
                    dense
                    outline
                    icon="send"
                  />
                  <ks-status-icon
                    v-if="request.status === 'pending'"
                    :title="$t('requests.pending')"
                    color="warning"
                    dense
                    outline
                    icon="time-circle"
                  />
                  <ks-btn
                    :title="$t('requests.cancel')"
                    color="danger"
                    dense
                    icon
                    ><i><iconly-icon name="close" class="stroke-current" /></i
                  ></ks-btn>
                </div>
              </td>
              <td>
                <div class="flex items-center justify-start">
                  <button
                    type="button"
                    class="expand-btn text-link-blue"
                    @click="request.expand = !request.expand"
                  >
                    <i
                      ><iconly-icon
                        name="arrow-down-2"
                        class="transition duration-200"
                        :class="{ 'transform rotate-180': request.expand }"
                    /></i>
                  </button>
                </div>
              </td>
            </tr>
            <transition :key="`expanded-request-${i}`" name="expand">
              <div v-show="request.expand" class="request-detail">
                <td class="expanded-cell" colspan="2">
                  <div class="expanded-row">
                    <span>{{ $t('requests.table.from') }}:</span>
                    <span>{{ $d(new Date()) }}</span>
                  </div>
                  <div class="expanded-row">
                    <span>{{ $t('requests.table.to') }}:</span>
                    <span>{{ $d(new Date()) }}</span>
                  </div>
                  <div class="expanded-row">
                    <span>{{ $t('requests.table.talent') }}:</span>
                    <span class="space-x-2"
                      ><ks-user-img
                        v-for="(emp, j) in request.talent"
                        :key="`talent-${i}-${j}`"
                        :initials="emp.name"
                        :to="`/employer/search/detail?id=${emp.id}`"
                    /></span>
                  </div>
                </td>
                <td class="expanded-cell" colspan="2">
                  <div class="expanded-row">
                    <span>{{ $t('requests.table.typeOfContract') }}:</span>
                    <span>Type Of Contract</span>
                  </div>
                  <div class="expanded-row">
                    <span>{{ $t('requests.table.salaryRate') }}:</span>
                    <span>{{
                      $t('requests.table.rate', { salary: 300 })
                    }}</span>
                  </div>
                </td>
              </div>
            </transition>
          </template>
        </tbody>
      </table>
    </div>
    <div class="request-footer">
      <div class="flex-auto text-blue-kaizen">
        <span>{{ $t('requests.page', { p: 1, t: 1 }) }}</span>
      </div>
      <div class="flex justify-center flex-auto space-x-2">
        <ks-btn color="primary" dense :disabled="true">{{
          $t('requests.previous')
        }}</ks-btn>
        <ks-btn color="primary" dense :disabled="false">{{
          $t('requests.next')
        }}</ks-btn>
      </div>
      <div class="flex-auto"></div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface Request {
  position: string
  from: Date
  to: Date
  typeOfContract: number
  salaryRate: number
  talent: Object[]
  status: string
  expand: boolean
}

export default Vue.extend({
  layout: 'employer',
  data() {
    return {
      showBy: '',
      page: 1,
      size: 5,
      requests: [
        {
          position: 'Glueing',
          from: new Date(),
          to: new Date(),
          typeOfContract: 1,
          salaryRate: 200,
          talent: [
            { id: 2, name: 'Sarah' },
            { id: 2, name: 'Charlie' },
          ],
          status: 'pending',
          expand: false,
        },
        {
          position: 'Assembly',
          from: new Date(),
          to: new Date(),
          typeOfContract: 1,
          salaryRate: 530,
          talent: [
            { id: 2, name: 'Linda' },
            { id: 2, name: 'Chloe' },
          ],
          status: 'open',
          expand: false,
        },
        {
          position: 'Upholstery',
          from: new Date(),
          to: new Date(),
          typeOfContract: 1,
          salaryRate: 250,
          talent: [
            { id: 2, name: 'Maze' },
            { id: 2, name: 'Luci' },
          ],
          status: 'open',
          expand: false,
        },
        {
          position: 'Sewing',
          from: new Date(),
          to: new Date(),
          typeOfContract: 1,
          salaryRate: 90,
          talent: [
            { id: 2, name: 'Michael' },
            { id: 2, name: 'Pierce' },
          ],
          status: 'pending',
          expand: false,
        },
        {
          position: 'TIG Welding',
          from: new Date(),
          to: new Date(),
          typeOfContract: 1,
          salaryRate: 90,
          talent: [
            { id: 2, name: 'Sarah' },
            { id: 2, name: 'Charlie' },
          ],
          status: 'pending',
          expand: false,
        },
      ] as Request[],
    }
  },
  async fetch() {
    try {
      await this.$axios.$get('/employer/petition/view')
    } catch (error) {}
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
          text: this.$t('requests.recent'),
          value: 1,
        },
        {
          text: this.$t('requests.past'),
          value: 2,
        },
        {
          text: this.$t('requests.canceled'),
          value: 3,
        },
      ]
    },
  },
})
</script>

<style scoped>
.request-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}
.request-header > * {
  @apply pt-4;
}

.request-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}

.text-header {
  @apply pt-6 text-lg text-blue-kaizen;
}
.title {
  @apply flex-row;
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
  @apply font-light text-gray-dark relative;
}

tbody td {
  @apply p-4;
}

tbody > tr > td:first-child {
  @apply rounded-tl-xl;
}

tbody > tr > td:last-child {
  @apply rounded-tr-xl;
}

tbody .expand-btn {
  @apply fill-current stroke-current;
}

tbody > tr:nth-of-type(even) {
  @apply bg-gray-lighter;
}

tbody > div:nth-of-type(even) {
  @apply bg-gray-lighter;
}

tbody .request-detail {
  @apply table-row;
}

tbody > .request-detail > td:first-child {
  @apply rounded-bl-xl;
}

tbody > .request-detail > td:last-child {
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
</style>
