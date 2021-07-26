<template>
  <ks-card class="h-full p-8" col>
    <div class="detail-header">
      <h1 class="text-3xl font-medium">
        {{ $t('adminDetail.title') }}
      </h1>
      <div class="flex items-center space-x-2 min-w-40">
        <ks-btn color="success" dense @click="approveDeal(currentDeal.id)">{{
          $t('adminDetail.approve')
        }}</ks-btn>
        <ks-btn color="darker-gray" dense @click="rejectDeal(currentDeal.id)">{{
          $t('adminDetail.reject')
        }}</ks-btn>
        <ks-btn color="danger" dense icon :to="localePath('/admin/deals')"
          ><iconly-icon name="close" class="stroke-current"
        /></ks-btn>
      </div>
    </div>
    <div class="flex flex-grow lg:flex-grow-0 space-x-4 pt-6">
      <ks-user-img
        :initials="currentDeal.name || ''"
        :image-url="currentDeal.profile_picture_url"
        large
      />
      <div class="flex flex-col space-y-2">
        <span class="font-medium text-blue-kaizen">{{
          currentDeal.name + ' ' + currentDeal.last_name
        }}</span>
        <span
          class="text-gray-dark"
          :class="{ 'select-none': !currentDeal.skill }"
          >{{
            currentDeal.skill
              ? skills[currentDeal.skill - 1]
              : $t('profile.noSkills')
          }}</span
        >
        <span
          class="text-gray-dark"
          :class="{ 'select-none': !currentDeal.birth_date }"
          >{{
            currentDeal.birth_date
              ? $d(new Date(currentDeal.birth_date), 'numeric')
              : $t('profile.noBirth')
          }}</span
        >
      </div>
    </div>
    <hr />
    <h1 class="text-lg text-blue-kaizen pb-8">
      {{ $t('adminDetail.typeOfNegotiation') }}
    </h1>
    <div class="fields">
      <div class="field-row">
        <div class="field-col">
          <span class="text-blue-kaizen"
            >{{ $t('adminDetail.position') }}:</span
          >
          <span class="text-gray-darker">{{ currentDeal.position }}</span>
        </div>
        <div class="field-col">
          <span class="text-blue-kaizen">{{ $t('adminDetail.from') }}:</span>
          <span class="text-gray-darker">{{
            currentDeal.start_date ? $d(new Date(currentDeal.start_date)) : '-'
          }}</span>
        </div>
        <div class="field-col">
          <span class="text-blue-kaizen">{{ $t('adminDetail.to') }}:</span>
          <span class="text-gray-darker">{{
            currentDeal.end_date ? $d(new Date(currentDeal.end_date)) : '-'
          }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <span class="text-blue-kaizen"
            >{{ $t('adminDetail.typeOfContract') }}:</span
          >
          <span class="text-gray-darker">{{ typeOfContract }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <span class="text-blue-kaizen"
            >{{ $t('adminDetail.salaryRate') }}:</span
          >
          <span class="text-gray-darker">{{
            $t('adminDetail.perHour', { rate: currentDeal.salary_rate })
          }}</span>
        </div>
      </div>
    </div>
    <hr />
    <div class="fields">
      <div class="field-row">
        <div class="field-col">
          <span class="text-blue-kaizen"
            >{{ $t('adminDetail.jobDescription') }}:</span
          >
          <span class="text-gray-darker">{{
            currentDeal.job_description || '-'
          }}</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field-col">
          <span class="text-blue-kaizen"
            >{{ $t('adminDetail.observation') }}:</span
          >
          <span class="text-gray-darker">{{
            currentDeal.observations || '-'
          }}</span>
        </div>
      </div>
    </div>
    <div class="deal-detail-footer">
      <div class="flex-auto text-blue-kaizen">
        <span>{{ $t('adminDetail.page', { p: page, t: totalPages }) }}</span>
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
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

interface Skill {
  skill_id: number
  user_id: number
  skill_name: number
  years_of_experience: number
  is_main_skill: number
  created_at: Date
  updated_at: Date
}

interface DealResponse {
  petitionElementID: number
  status: number
}

export default Vue.extend({
  name: 'DealDetailPage',
  layout: 'admin',
  middleware({ app, redirect, params }) {
    if (!params.id) return redirect(app.localePath('/employer/search'))
  },
  data() {
    return {
      dealId: this.$route.params.id,
      dealDetail: [],
      page: 1,
      currentDeal: {
        id: null,
        user_id: null,
        name: '',
        last_name: '',
        birth_date: null,
        start_date: null,
        end_date: null,
        skill: null,
        profile_picture_url: '',
        contract_type: '',
        salary_rate: null,
      },
      response: new Map() as Map<number, number>,
    }
  },
  async fetch() {
    try {
      const id = this.$route.params.id
      const res = await this.$axios.$get(`/admin/deals/details/${id}`)
      if (!res.elements.length) {
        this.$router.push(this.localePath('/admin/deals'))
      } else {
        this.dealDetail = res.elements
        this.currentDeal = this.dealDetail[0]
        const dealPicture = await this.$axios.$get(
          `/admin/employee_picture/${this.currentDeal.user_id}`
        )
        this.currentDeal.profile_picture_url = dealPicture.profile_picture_URL
      }
    } catch (error) {}
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('adminDetail.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('adminDetail.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    skills() {
      const skills: String[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push(this.$t(`resume.skills.${i}`) as string)
      }
      return skills
    },
    totalPages(): number {
      return this.dealDetail.length
    },
    typeOfContract(): string {
      return this.currentDeal.contract_type
    },
  },
  watch: {
    page: {
      handler(val) {
        this.currentDeal = this.dealDetail[val - 1]
      },
    },
  },
  methods: {
    previousPage() {
      if (this.page > 1) this.page--
    },
    nextPage(): boolean {
      if (this.page < this.totalPages) {
        this.page++
        return true
      }
      return false
    },
    async approveDeal(id: number) {
      try {
        this.response.set(id, 1)
        const next = this.nextPage()
        if (!next && this.response.size === this.dealDetail.length) {
          const response: DealResponse[] = []
          this.response.forEach((status, petitionElementID) => {
            response.push({ status, petitionElementID })
          })
          await this.$axios.$post('/admin/deals/response', {
            petitionID: Number.parseInt(this.dealId),
            requested_employees: response,
          })
          this.$router.push(this.localePath('/admin/deals'))
        }
      } catch (error) {}
    },
    async rejectDeal(id: number) {
      try {
        this.response.set(id, 2)
        const next = this.nextPage()
        if (!next && this.response.size === this.dealDetail.length) {
          const response: DealResponse[] = []
          this.response.forEach((status, petitionElementID) => {
            response.push({ status, petitionElementID })
          })
          await this.$axios.$post('/admin/deals/response', {
            petitionID: Number.parseInt(this.dealId),
            requested_employees: response,
          })
          this.$router.push(this.localePath('/admin/deals'))
        }
      } catch (error) {}
    },
  },
})
</script>

<style scoped>
hr {
  @apply border-blue-light my-8;
}

.detail-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.detail-header > * {
  @apply pt-4;
}

.deal-detail-footer {
  @apply flex justify-center items-end flex-grow pt-4;
}

.fields {
  @apply flex flex-col;
}

.field-row {
  @apply flex flex-wrap;
}

.field-row > * {
  @apply pb-6;
}

.field-col {
  @apply flex-auto space-x-2;
}
</style>
