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
            <th>{{ $t('requests.table.actions') }}</th>
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
              <td>{{ $d(request.date) }}</td>
              <td>
                <div class="flex space-x-2">
                  <ks-btn
                    v-if="request.status === 'pending'"
                    :title="$t('requests.pending')"
                    color="warning"
                    dense
                    icon
                    disabled
                    ><i
                      ><iconly-icon
                        name="time-circle"
                        class="fill-current" /></i
                  ></ks-btn>
                  <ks-btn
                    v-else
                    :title="$t('requests.send')"
                    color="success"
                    dense
                    icon
                    ><i><iconly-icon name="send" class="fill-current" /></i
                  ></ks-btn>
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
                <td colspan="4" class="text-center">
                  {{ $t('requests.table.details') }}
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

export default Vue.extend({
  layout: 'employer',
  data() {
    return {
      showBy: '',
      requests: [
        {
          position: 'Glueing',
          date: new Date(),
          status: 'pending',
          details: {},
          expand: false,
        },
        {
          position: 'Assembly',
          date: new Date(),
          status: 'open',
          details: {},
          expand: false,
        },
        {
          position: 'Upholstery',
          date: new Date(),
          status: 'canceled',
          details: {},
          expand: false,
        },
        {
          position: 'Sewing',
          date: new Date(),
          status: 'open',
          details: {},
          expand: false,
        },
      ],
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/employer/petition/view')
      console.log(res)
    } catch (error) {}
  },
  fetchOnServer: false,
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
</style>
