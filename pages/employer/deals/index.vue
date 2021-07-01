<template>
  <ks-card class="h-full p-8" col>
    <div class="title">
      <div class="deal-header">
        <h1 class="text-3xl font-medium">
          {{ $t('deals.deals') }}
        </h1>
      </div>
      <div class="flex items-center min-w-40 text-header">
          <span>{{ $t('deals.header') }}</span>
      </div>
    </div>
    <div class="flex justify pt-6">
      <div class="flex flex-col space-y-2 min-w-40">
          <span class="font-light text-gray-dark">{{ $t('deals.showBy') }}</span>
      </div>
      <div class="flex flex-col space-y-2 min-w-40">
        <ks-select :label="$t('deals.showBy')"></ks-select>
      </div>  
    </div>
    <div class="flex flex-col space-y-2 min-w-40 mt-8">
      <table class="table-fixed">
        <thead class="text-thead">
          <tr>
            <th class="w-2/5">{{ $t('deals.table.searched') }}</th>
            <th class="w-1/5">{{ $t('deals.table.date') }}</th>
            <th class="w-1/5">{{ $t('deals.table.status') }}</th>
            <th class="w-1/5">{{ $t('deals.table.details') }}</th>
          </tr>
          <tr>
            <td colspan="4">
              <hr/>
            </td>
          </tr>
        </thead>
        
        <tbody class="text-tbody">
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>esto es</td>
            <td>una tabla</td>
          </tr>
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>esto es</td>
            <td>una tabla</td>
          </tr>
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>esto es</td>
            <td>una tabla</td>
          </tr>
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>esto es</td>
            <td>una tabla</td>
          </tr>
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>esto es</td>
            <td>una tabla</td>
          </tr>
          <tr>
            <td>hola</td>
            <td>como estas</td>
            <td>esto es</td>
            <td>una tabla</td>
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
  @apply flex-row;
}
.text-thead{
  @apply text-blue-kaizen text-left;
}
.text-tbody{
  @apply font-light text-gray-dark; 
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>