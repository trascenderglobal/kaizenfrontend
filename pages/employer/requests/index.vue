<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="deal-header">
        <h1 class="text-3xl font-medium">
          {{ $t('requests.requests') }}
        </h1>
      </div>
      <div class="flex items-center min-w-40 text-header">
          <span>{{ $t('requests.header') }}</span>
      </div>
    </div>
    <div class="flex justify pt-6">
      <div class="flex flex-col space-y-2 min-w-40">
          <span class="font-light text-gray-dark">{{ $t('requests.showBy') }}</span>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <ks-select :label="$t('requests.showBy')"></ks-select>
      </div>  
    </div>
    <div class="flex flex-col space-y-2 min-w-40 mt-8">
      <table class="table-fixed">
        <thead class="text-thead">
          <tr>
            <th class="w-2/5">{{ $t('requests.table.name') }}</th>
            <th class="w-1/5">{{ $t('requests.table.position') }}</th>
            <th class="w-1/5">{{ $t('requests.table.date') }}</th>
            <th class="w-1/5">{{ $t('requests.table.status') }}</th>
          </tr>
        </thead>
        <tbody class="text-tbody">
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>quiero mas</td>
            <td>que chimba verte</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ks-card>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    layout: 'employer',
  async asyncData({ app }) {
    try {
      const res = await app.$axios.$get('/employer/profile')
      return {
        profile: res,
      }
    } catch (error) {}
  },
  data() {
    return {
    }
  },
  methods: {
    async updateProfile() {
      try {
        await this.$axios.$post('/employer/profile/edit', {
        })
        
      } catch (error) {
        
      } finally {
        
      }
    },
  },
})
</script>

<style scoped>
.deal-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}
.deal-header > * {
  @apply pt-4;
}
.text-header{
  @apply text-blue-kaizen flex-col lg:flex-row;
}
.title {
  @apply flex-row
}
.text-thead{
  @apply text-blue-kaizen text-left
}
.text-tbody{
  @apply font-light text-gray-dark 
}
</style>