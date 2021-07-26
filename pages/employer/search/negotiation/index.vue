<template>
  <ks-card class="h-full p-8">
    <div class="negotiation-header">
      <h1 class="text-3xl font-medium">
        {{ $t('negotiation.negotiation') }}
      </h1>
      <div class="flex items-center min-w-40 space-x-2">
        <span>{{
          $t('negotiation.page', { p: page, t: this.negotiationIds.length })
        }}</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <ks-user-img :initials="currentUser.name" large></ks-user-img>
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            currentUser.name + ' ' + currentUser.last_name
          }}</span>
          <span class="text-gray-dark">{{
            mainSkill
              ? skills[mainSkill.skill_name - 1]
              : $t('profile.noSkills')
          }}</span>
          <span
            class="text-gray-dark"
            :class="{ 'select-none': !currentUser.birth_date }"
            >{{
              currentUser.birth_date
                ? $d(new Date(currentUser.birth_date), 'numeric')
                : $t('profile.noBirth')
            }}</span
          >
        </div>
      </div>
    </div>
    <hr class="my-8 border" />
    <h1 class="title">
      {{ $t('negotiation.typeOfN') }}
    </h1>
    <div class="fields">
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <ks-datepicker
            :label="$t('negotiation.from')"
            :bg-color="'bg-blue-darker'"
            clearable
            v-model="from"
            @blur="$v.from.$touch"
          />
        </div>
        <div class="field-col w-1/6">
          <ks-datepicker
            :label="$t('negotiation.to')"
            :bg-color="'bg-blue-darker'"
            clearable
            v-model="to"
            @blur="$v.to.$touch"
          />
        </div>
        <div class="field-col w-full">
          <ks-input
            :border-color="'border-gray-light'"
            dense
            v-model="position"
            @blur="$v.position$touch"
            disable-hint
            :label="$t('negotiation.position')"
          />
        </div>
      </div>
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{
            $t('negotiation.typeOfC')
          }}</span>
        </div>

        <div class="field-col w-full">
          <ks-select
            :items="typeContract"
            :label="$t('negotiation.selectContract')"
            class="transition border"
            :class="'border-gray-light'"
            :bg-color="'bg-white'"
            color="text-gray-dark"
            v-model="typeContract"
            @blur="$v.typeContract.$touch"
            clearable
          />
        </div>
      </div>
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{
            $t('negotiation.salaryRate')
          }}</span>
        </div>
        <div class="field-col w-full">
          <ks-range v-model="salaryRate" @blur="$v.salaryRate.$touch" />
        </div>
      </div>
    </div>
    <hr class="my-8 border" />
    <div class="fields">
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{
            $t('negotiation.jobDescription')
          }}</span>
        </div>
        <div class="field-col w-full">
          <ks-text-area
            label=""
            :border-color="'border-gray-light'"
            dense
            disable-hint
            v-model="jobDescription"
            @blur="$v.jobDescription.$touch"
          />
        </div>
      </div>
      <div class="field-row w-full">
        <div class="field-col w-1/6">
          <span class="text-blue-kaizen pr-4">{{
            $t('negotiation.observation')
          }}</span>
        </div>
        <div class="field-col w-full">
          <ks-text-area
            label=""
            :border-color="'border-gray-light'"
            dense
            disable-hint
          />
        </div>
      </div>
    </div>
    <div class="negotiation-footer">
      <div class="flex justify-end flex-auto space-x-2" v-if="page === 1">
        <ks-btn
          color="danger"
          dense
          :disabled="false"
          :to="localePath(backLink)"
          >{{ $t('negotiation.buttons.cancel') }}</ks-btn
        >
        <ks-btn color="success" dense :disabled="false" @click="nextPage()">{{
          $t('negotiation.buttons.next')
        }}</ks-btn>
      </div>
      <div
        class="flex justify-end flex-auto space-x-2"
        v-else-if="page > 1 && page < negotiationIds.length"
      >
        <ks-btn
          color="danger"
          dense
          :disabled="false"
          @click="previousPage()"
          >{{ $t('negotiation.buttons.previous') }}</ks-btn
        >
        <ks-btn color="success" dense :disabled="false" @click="nextPage()">{{
          $t('negotiation.buttons.next')
        }}</ks-btn>
      </div>
      <div class="flex justify-end flex-auto space-x-2" v-else>
        <ks-btn
          color="danger"
          dense
          :disabled="false"
          @click="previousPage()"
          >{{ $t('negotiation.buttons.previous') }}</ks-btn
        >
        <ks-btn color="success" dense :disabled="false" @click="nextPage()">{{
          $t('negotiation.buttons.save')
        }}</ks-btn>
      </div>
    </div>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'

interface Skill {
  skill_id: number
  user_id: number
  skill_name: number
  years_of_experience: number
  is_main_skill: number
  created_at: Date
  updated_at: Date
}

interface Negotiation {
  from: Date | null
  to: Date | null
  position: String
  typeContract: Number | String
  salaryRate: Number | String
  jobDescription: String
  observation: String
}

export default Vue.extend({
  name: 'Negotiation',
  layout: 'employerNegotiation',
  middleware({ app, redirect, query }) {
    if (!query.ids) return redirect(app.localePath('/employer/search'))
  },
  data() {
    return {
      loading: false,
      errors: false,
      negotiationIds: [] as Number[],
      currentId: 0,
      page: 1,
      currentUser: {
        id: null,
        name: '',
        last_name: '',
        birth_date: null as Date | null,
        novelties: null,
        state: '',
        city: '',
        phone: '',
        email: '',
        profile_picture_URL: '',
        skills: [] as Skill[],
      },
      negotiations: [] as Negotiation[],
      negotiation: {
        from: null as Date | null,
        to: null as Date | null,
        position: '',
        typeContract: '',
        salaryRate: 7.25,
        jobDescription: '',
        observation: '',
      } as Negotiation,
    }
  },
  async fetch() {
    try {
      const queryIds = (this.$route.query.ids as string).split(',')
      this.negotiationIds = queryIds
        .filter((id) => Number.isSafeInteger(Number.parseInt(id)))
        .map((val) => Number.parseInt(val))
      this.negotiationIds.push()
      const res = await this.$axios.$get(
        `/employer/employee_profile/${this.negotiationIds[this.currentId]}`
      )
      this.currentUser = res
    } catch (error) {}
  },
  computed: {
    backLink(): string {
      return this.$nuxt.context.from?.fullPath || '/employer/search'
    },
    typeContract(): object[] {
      const typeContract: object[] = []
      for (let i = 0; i < 2; i++) {
        typeContract.push({
          text: this.$t(`negotiation.contracts.${i}`),
          value: i + 1,
        })
      }
      return typeContract
    },
    skills() {
      const skills: String[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push(this.$t(`resume.skills.${i}`) as string)
      }
      return skills
    },
    mainSkill(): Skill | undefined {
      const skill = this.currentUser.skills.find(
        (skill) => skill.is_main_skill === 1
      )
      return skill
    },
  },
  methods: {
    nextPage() {
      if (this.currentId < this.negotiationIds.length - 1)
        this.currentId++, this.page++, this.$fetch()
    },
    previousPage() {
      if (this.page > 1) this.currentId--, this.page--, this.$fetch()
    },
  },
  validations() {
    return {
      from: {
        required,
      },
      to: {
        required,
      },
      position: {
        required,
      },
      typeContract: {
        required,
      },
      salaryRate: {
        required,
      },
      jobDescription: {
        required,
      },
    }
  },
})
</script>

<style scoped>
hr {
  @apply my-6 border-blue-light;
}

.negotiation-header {
  @apply flex justify-between text-blue-kaizen flex-col lg:flex-row;
}

.negotiation-header > * {
  @apply pt-4;
}

.user-img-lg {
  @apply flex-shrink-0 w-20 h-20;
}

.img-wrapper {
  @apply relative flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-b from-gray-darker to-gray-light shadow-md backdrop-filter backdrop-blur-md;
}

.img-wrapper > .img {
  @apply w-full h-full bg-no-repeat bg-center z-10 bg-cover absolute rounded-md top-0 left-0 right-0 bottom-0;
}

.title {
  @apply text-lg font-extralight text-blue-kaizen;
}

.field-row {
  @apply mt-4 inline-flex;
}

.field-col {
  @apply p-1;
}

.negotiation-footer {
  @apply flex justify-end items-end flex-grow pt-4;
}
</style>
