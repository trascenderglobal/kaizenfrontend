<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="users-header">
        <h1 class="text-3xl font-medium">
          {{ $t('adminUsers.title') }}
        </h1>
      </div>
      <div class="text-header">
        <span>{{ $t('adminUsers.subtitle') }}</span>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-auto pt-6">
        <div class="min-w-40">
          <span class="text-gray-dark">{{ $t('adminUsers.searchBy') }}</span>
        </div>
        <div class="min-w-40">
          <ks-select
            v-model="searchBy"
            class="transition border border-blue-light"
            :class="searchBy !== null ? 'text-white' : 'text-gray-darker'"
            :label="$t('adminUsers.searchBy')"
            :items="searchByItems"
            :bg-color="searchBy !== null ? 'bg-blue-light' : 'bg-transparent'"
            clearable
          ></ks-select>
        </div>
      </div>
      <div class="flex flex-auto pt-6">
        <div class="min-w-40">
          <span class="text-gray-dark">{{ $t('adminUsers.status') }}</span>
        </div>
        <div class="min-w-40">
          <ks-select
            v-model="status"
            class="transition"
            :label="$t('adminUsers.status')"
            :items="statusItems"
            :bg-color="
              status === 1
                ? 'bg-green-kaizen'
                : status === 2
                ? 'bg-red-kaizen'
                : 'bg-gray-darker'
            "
            clearable
          ></ks-select>
        </div>
      </div>
    </div>
    <div class="mt-8 overflow-x-auto">
      <table>
        <thead class="text-thead">
          <tr>
            <th>{{ $t('adminUsers.table.company') }}</th>
            <th>{{ $t('adminUsers.table.date') }}</th>
            <th>
              <span>{{ $t('adminUsers.table.plan') }}</span>
            </th>
            <th>{{ $t('adminUsers.table.profile') }}</th>
            <th>
              {{ $t('adminUsers.table.status') }}
            </th>
          </tr>
          <tr>
            <td colspan="5">
              <hr class="border-blue-light" />
            </td>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <tr v-if="!paginatedUsers.length">
            <td id="noItemsCell" colspan="5">
              <i v-if="loading"
                ><iconly-icon
                  name="loading"
                  type="outline"
                  class="stroke-current"
                  view-box="0 0 38 38"
              /></i>
              <span v-else>{{ $t('adminUsers.table.noItems') }}</span>
            </td>
          </tr>
          <template v-else>
            <tr v-for="(user, i) in paginatedUsers" :key="`user-${i}`">
              <td>
                <div class="flex items-center space-x-2">
                  <ks-user-img
                    :initials="user.name"
                    :image-url="user.profile_picture_URL"
                  /><span>{{ user.name + ' ' + user.last_name }}</span>
                </div>
              </td>
              <td>
                {{ user.created_at ? $d(new Date(user.created_at)) : '-' }}
              </td>
              <td>{{ '-' }}</td>
              <td>
                <div class="flex items-center space-x-2">
                  <span>{{ $t('adminDeals.table.view') }}</span>
                  <ks-btn
                    color="light-blue"
                    dense
                    icon
                    :to="user.id ? localePath(`/admin/users/${user.id}`) : '#'"
                    ><iconly-icon name="show" class="fill-current"
                  /></ks-btn>
                </div>
              </td>
              <td>
                <div class="flex items-center space-x-2">
                  <ks-status-icon
                    color="success"
                    dense
                    icon="circle"
                    type="bold"
                  ></ks-status-icon>
                  <ks-status-icon
                    color="light-gray"
                    dense
                    icon="circle"
                    icon-class="stroke-current"
                  ></ks-status-icon>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="users-footer">
      <div class="flex-auto text-blue-kaizen">
        <span>{{ $t('adminUsers.page', { p: page, t: totalPages }) }}</span>
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
      searchBy: null,
      status: null,
      page: 1,
      size: 5,
      users: [],
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get('/admin/users/view')
      this.users = res.Users
    } catch (error) {
    } finally {
      this.loading = false
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
  computed: {
    searchByItems(): object[] {
      return [
        {
          text: this.$t('adminUsers.employer'),
          value: 0,
        },
        {
          text: this.$t('adminUsers.employee'),
          value: 1,
        },
      ]
    },
    statusItems(): object[] {
      return [
        {
          text: this.$t('adminUsers.active'),
          value: 1,
        },
        {
          text: this.$t('adminUsers.inactive'),
          value: 2,
        },
      ]
    },
    totalPages(): number {
      return Math.ceil(this.users.length / this.size) || 1
    },
    paginatedUsers(): any[] {
      return this.users
        .filter((user: any) =>
          this.searchBy !== null ? user.role === this.searchBy : true
        )
        .slice(this.size * this.page - this.size, this.size * this.page)
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

.users-header > * {
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

.users-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}
</style>
