<template>
  <ks-card class="h-full p-8" col>
    <div class="detail-header">
      <h1 class="text-3xl font-medium">
        {{ $t('adminDetail.title') }}
      </h1>
      <div class="flex items-center space-x-2 min-w-40">
        <ks-btn
          color="success"
          :disabled="currentResponse === 2"
          dense
          @click="approveDeal(currentDeal.id)"
          >{{
            currentResponse === 1
              ? $t('adminDetail.approved')
              : $t('adminDetail.approve')
          }}</ks-btn
        >
        <ks-btn
          color="darker-gray"
          :disabled="currentResponse === 1"
          dense
          @click="rejectDeal(currentDeal.id)"
          >{{
            currentResponse === 2
              ? $t('adminDetail.rejected')
              : $t('adminDetail.reject')
          }}</ks-btn
        >
        <ks-btn color="danger" dense icon :to="localePath('/admin/deals')"
          ><iconly-icon name="close" class="stroke-current"
        /></ks-btn>
      </div>
    </div>
    <div class="flex flex-grow lg:flex-grow-0 space-x-4 pt-6">
      <ks-user-img
        :initials="currentDeal.name || ''"
        :image-url="currentDeal.user_id ? currentImage : ''"
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
            currentDeal.job_descriptions || '-'
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
  response: number
}

export default Vue.extend({
  name: 'DealDetailPage',
  layout: 'admin',
  middleware({ app, redirect, params }) {
    if (!params.id) return redirect(app.localePath('/employer/search'))
  },
  async asyncData({ app, params, redirect, $axios }) {
    try {
      let dealDetail = []
      let currentDeal = {
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
        job_descriptions: '',
        observations: '',
      }
      const images = new Map() as Map<number, string>
      let currentImage = ''
      const id = params.id
      const res = await $axios.$get(`/admin/deals/details/${id}`)
      if (!res.elements.length) {
        redirect(app.localePath('/admin/deals'))
      } else {
        dealDetail = res.elements
        currentDeal = dealDetail[0]
        const dealPicture = await $axios.$get(
          `/admin/user/profile_picture/${currentDeal.user_id}`
        )
        images.set(currentDeal.user_id as any, dealPicture.profile_picture_URL)
        currentImage = dealPicture.profile_picture_URL
      }
      return {
        dealDetail,
        currentDeal,
        images,
        currentImage,
      }
    } catch (error) {}
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
        job_descriptions: '',
        observations: '',
      },
      response: new Map() as Map<number, number>,
      images: new Map() as Map<number, string>,
      currentImage: '',
      currentResponse: 0,
    }
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
      if (this.currentDeal.contract_type === 'contract labor')
        return this.$t('negotiation.contracts.0') as string
      if (this.currentDeal.contract_type === 'direct hire')
        return this.$t('negotiation.contracts.1') as string
      return '-'
    },
  },
  watch: {
    page: {
      async handler(val) {
        try {
          this.currentImage = ''
          this.currentDeal = this.dealDetail[val - 1]
          this.currentResponse =
            this.response.get(this.currentDeal.id as any) || 0
          if (!this.images.get(this.currentDeal.user_id as any)) {
            const dealPicture = await this.$axios.$get(
              `/admin/user/profile_picture/${this.currentDeal.user_id}`
            )
            this.images.set(
              this.currentDeal.user_id as any,
              dealPicture.profile_picture_URL
            )
          }
          this.currentImage =
            this.images.get(this.currentDeal.user_id as any) || ''
        } catch (error) {}
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
        if (this.response.get(id)) return
        this.response.set(id, 1)
        this.currentResponse = this.response.get(id) || 0
        if (this.response.size === this.dealDetail.length) {
          const response: DealResponse[] = []
          this.response.forEach((status, petitionElementID) => {
            response.push({ response: status, petitionElementID })
          })
          await this.$axios.$post('/admin/deals/response', {
            petitionID: Number.parseInt(this.dealId),
            requested_employees: response,
          })
          this.$router.push(this.localePath('/admin/deals'))
          this.$notifier.showNotification({
            content: this.$t('adminDetail.dealUpdated'),
          })
        }
      } catch (error) {}
    },
    async rejectDeal(id: number) {
      try {
        if (this.response.get(id)) return
        this.response.set(id, 2)
        this.currentResponse = this.response.get(id) || 0
        if (this.response.size === this.dealDetail.length) {
          const response: DealResponse[] = []
          this.response.forEach((status, petitionElementID) => {
            response.push({ response: status, petitionElementID })
          })
          await this.$axios.$post('/admin/deals/response', {
            petitionID: Number.parseInt(this.dealId),
            requested_employees: response,
          })
          this.$router.push(this.localePath('/admin/deals'))
          this.$notifier.showNotification({
            content: this.$t('adminDetail.dealUpdated'),
          })
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
