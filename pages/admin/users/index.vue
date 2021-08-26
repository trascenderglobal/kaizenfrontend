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
    <div class="flex flex-wrap">
      <div class="flex flex-wrap flex-auto pt-6 pr-2">
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
          ></ks-select>
        </div>
      </div>
      <div class="flex flex-wrap flex-auto pt-6">
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
                : status === 0
                ? 'bg-red-kaizen'
                : 'bg-gray-darker'
            "
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
            <th>{{ $t('adminUsers.table.plan') }}</th>
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
                    :title="user.name + ' ' + user.last_name"
                    :initials="user.name"
                    :image-url="images[i]"
                    expand
                    origin="origin-bottom-left"
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
                  <ks-btn
                    :color="user.status ? 'success' : 'light-gray'"
                    dense
                    icon
                    @click="activateUser(user)"
                  >
                    <iconly-icon
                      name="circle"
                      :type="user.status ? 'bold' : 'outline'"
                      class="fill-current stroke-current stroke-0"
                    />
                  </ks-btn>
                  <ks-btn
                    :color="user.status ? 'light-gray' : 'danger'"
                    dense
                    icon
                    @click="userDisable = user"
                  >
                    <iconly-icon
                      name="circle"
                      :type="user.status ? 'outline' : 'bold'"
                      class="fill-current stroke-current stroke-0"
                    />
                  </ks-btn>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="users-footer">
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
    </div>
    <template #outer>
      <transition name="disable">
        <div v-if="showDisableUser" class="disable-modal" role="dialog">
          <div class="w-11/12 lg:w-3/5">
            <ks-card class="p-8" col>
              <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
                <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                  {{ $t('adminUsers.disableModal.title') }}
                </h1>
                <hr class="self-stretch border-blue-light" />
                <p class="text-xl text-blue-kaizen text-center">
                  {{ $t('adminUsers.disableModal.subtitle') }}
                </p>
                <div
                  class="
                    flex flex-wrap
                    pt-14
                    flex-grow
                    items-end
                    justify-center
                  "
                >
                  <ks-btn
                    color="darker-gray"
                    class="text-xl mr-2 mt-2"
                    @click="userDisable = null"
                    >{{ $t('adminUsers.close') }}</ks-btn
                  >
                  <ks-btn
                    color="danger"
                    text
                    class="text-xl mt-2"
                    @click="disableUser(userDisable)"
                    >{{ $t('adminUsers.disable') }}</ks-btn
                  >
                </div>
              </div>
            </ks-card>
          </div>
        </div>
      </transition>
    </template>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface User {
  id: number
  name: string
  last_name: string
  role: number
  status: number
  created_at: string | Date
}

export default Vue.extend({
  name: 'UsersPage',
  layout: 'admin',
  data() {
    return {
      loading: false,
      searchBy: 0,
      status: 1,
      page: 1,
      size: 5,
      users: [] as User[],
      images: [] as string[],
      userDisable: null as User | null,
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get(
        `/admin/users/view?status=${this.status}&role=${this.searchBy}`
      )
      this.users = res.Users
      const profileImages = await Promise.all(
        this.paginatedUsers.map((user) =>
          this.$axios.$get(`/admin/user/profile_picture/${user.id}`)
        )
      )
      this.images = profileImages.map((res: any) => res.profile_picture_URL)
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
          value: 0,
        },
      ]
    },
    totalPages(): number {
      return Math.ceil(this.users.length / this.size) || 1
    },
    paginatedUsers(): User[] {
      return this.users.slice(
        this.size * this.page - this.size,
        this.size * this.page
      )
    },
    showDisableUser(): boolean {
      return this.userDisable !== null
    },
  },
  watch: {
    status: {
      handler() {
        this.$fetch()
      },
    },
    searchBy: {
      handler() {
        this.$fetch()
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
    async activateUser(user: User) {
      try {
        if (user.status) return
        await this.changeUserStatus(user.id)
      } catch (error) {
        this.$notifier.showNotification({
          content: this.$t('profile.edit.saveError'),
          bgColor: 'bg-red-kaizen',
        })
      }
    },
    async disableUser(user: User) {
      try {
        if (!user.status) return
        await this.changeUserStatus(user.id)
      } catch (error) {
        this.$notifier.showNotification({
          content: this.$t('profile.edit.saveError'),
          bgColor: 'bg-red-kaizen',
        })
      } finally {
        this.userDisable = null
      }
    },
    async changeUserStatus(id: number) {
      await this.$axios.$put(`/admin/user/status/change/${id}`)
      this.$notifier.showNotification({
        content: this.$t('adminUsers.userStatusChanged'),
      })
      await this.$fetch()
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

.users-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}

.footer-wrapper {
  @apply flex flex-auto flex-wrap justify-between items-end;
}

.disable-enter-active,
.disable-leave-active {
  transition: opacity 0.2s;
}
.disable-enter,
.disable-leave-to {
  opacity: 0;
}

.disable-modal {
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur overflow-y-auto;
}
</style>
