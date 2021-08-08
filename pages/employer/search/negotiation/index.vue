<template>
  <ks-card class="h-full p-8">
    <div class="negotiation-header">
      <h1 class="text-3xl font-medium">
        {{ $t('negotiation.negotiation') }}
      </h1>
      <div class="flex items-center min-w-40 space-x-2">
        <span>{{
          $t('negotiation.page', { p: page, t: negotiations.length })
        }}</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <ks-user-img
          :initials="negotiations[currentIndex].name"
          :image-url="negotiations[currentIndex].profileImage"
          large
        ></ks-user-img>
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            negotiations[currentIndex].name +
            ' ' +
            negotiations[currentIndex].lastName
          }}</span>
          <span class="text-gray-dark">{{
            mainSkill
              ? skills[mainSkill.skill_name - 1]
              : $t('profile.noSkills')
          }}</span>
          <span
            class="text-gray-dark"
            :class="{ 'select-none': !negotiations[currentIndex].birthDate }"
            >{{
              negotiations[currentIndex].birthDate
                ? $d(new Date(negotiations[currentIndex].birthDate), 'numeric')
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
            v-model="negotiations[currentIndex].from"
            :label="$t('negotiation.from')"
            :bg-color="
              $v.negotiations.$each.$iter[currentIndex].from.$error
                ? 'bg-red-kaizen'
                : 'bg-blue-darker'
            "
            :disabled-date="isPast"
            clearable
            @blur="$v.negotiations.$each.$iter[currentIndex].from.$touch"
          />
        </div>
        <div class="field-col w-1/6">
          <ks-datepicker
            v-model="negotiations[currentIndex].to"
            :label="$t('negotiation.to')"
            :bg-color="
              $v.negotiations.$each.$iter[currentIndex].to.$error
                ? 'bg-red-kaizen'
                : 'bg-blue-darker'
            "
            :disabled-date="isPast"
            clearable
            @blur="$v.negotiations.$each.$iter[currentIndex].to.$touch"
          />
        </div>
        <div class="field-col w-full">
          <ks-input
            v-model="negotiations[currentIndex].position"
            :error="$v.negotiations.$each.$iter[currentIndex].position.$error"
            border-color="border-gray-light"
            dense
            disable-hint
            :label="$t('negotiation.position')"
            @blur="$v.negotiations.$each.$iter[currentIndex].position.$touch"
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
            v-model="negotiations[currentIndex].typeContract"
            :items="typeContract"
            :label="$t('negotiation.selectContract')"
            class="transition border"
            :class="
              $v.negotiations.$each.$iter[currentIndex].typeContract.$error
                ? 'border-red-kaizen text-red-kaizen'
                : 'border-gray-light'
            "
            bg-color="bg-transparent"
            color="text-gray-dark"
            clearable
            @blur="
              $v.negotiations.$each.$iter[currentIndex].typeContract.$touch
            "
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
          <ks-range
            v-model.number="negotiations[currentIndex].salaryRate"
            :error="$v.negotiations.$each.$iter[currentIndex].salaryRate.$error"
            @blur="$v.negotiations.$each.$iter[currentIndex].salaryRate.$touch"
          />
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
            v-model="negotiations[currentIndex].jobDescription"
            dense
            disable-hint
            :error="
              $v.negotiations.$each.$iter[currentIndex].jobDescription.$error
            "
            @blur="
              $v.negotiations.$each.$iter[currentIndex].jobDescription.$touch
            "
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
            v-model="negotiations[currentIndex].observation"
            dense
            disable-hint
            @blur="$v.negotiations.$each.$iter[currentIndex].observation.$touch"
          />
        </div>
      </div>
    </div>
    <div class="negotiation-footer">
      <div class="flex justify-end flex-auto space-x-2">
        <ks-btn
          v-if="page === 1"
          color="danger"
          dense
          :to="localePath(backLink)"
          >{{ $t('negotiation.buttons.cancel') }}</ks-btn
        >
        <ks-btn v-else color="danger" dense @click="previousPage">{{
          $t('negotiation.buttons.previous')
        }}</ks-btn>
        <ks-btn
          v-if="page === negotiations.length"
          color="success"
          dense
          :disabled="sending"
          :loading="sending"
          @click="sendRequest"
          >{{ $t('negotiation.buttons.request') }}</ks-btn
        >
        <ks-btn v-else color="success" dense @click="nextPage">{{
          $t('negotiation.buttons.next')
        }}</ks-btn>
      </div>
    </div>
    <transition name="sent">
      <div v-if="sent" class="sent-modal">
        <div class="w-11/12 lg:w-3/5">
          <ks-card class="p-8" col>
            <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
              <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                {{ $t('negotiation.requestsCompleted.title') }}
              </h1>
              <div class="flex space-x-2">
                <ks-user-img
                  v-for="(neg, i) in negotiations"
                  :key="`user-img-${i}`"
                  :initials="neg.name"
                  :image-url="neg.profileImage"
                  large
                />
              </div>
              <hr class="my-8 self-stretch" />
              <p class="text-xl text-blue-kaizen text-center">
                {{ $t('negotiation.requestsCompleted.paragraph1') }}
              </p>
              <p class="pt-6 text-xl text-blue-kaizen text-center">
                {{ $t('negotiation.requestsCompleted.paragraph2') }}
              </p>
              <div class="flex pt-16 flex-grow items-end justify-center">
                <ks-btn
                  color="success"
                  class="text-xl"
                  :to="localePath('/employer/requests')"
                  >{{ $t('negotiation.requestsCompleted.btn') }}</ks-btn
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
import { required, minValue, helpers } from 'vuelidate/lib/validators'

const maxDate = (maxVal: string) =>
  helpers.withParams(
    { type: 'maxDate', maxVal },
    function (value: Date | null, parentVm: Vue) {
      return value ? value <= helpers.ref(maxVal, undefined, parentVm) : true
    }
  )

const minDate = (maxVal: string) =>
  helpers.withParams(
    { type: 'minDate', maxVal },
    function (value: Date | null, parentVm: Vue) {
      return value ? value >= helpers.ref(maxVal, undefined, parentVm) : true
    }
  )

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
  id: number | null
  name: string | null
  lastName: string
  birthDate: Date | null
  skills: Skill[]
  profileImage: string
  from: Date | null
  to: Date | null
  position: string
  typeContract: string
  salaryRate: number
  jobDescription: string
  observation: string
}

export default Vue.extend({
  name: 'Negotiation',
  layout: 'employerNegotiation',
  middleware({ app, redirect, query }) {
    if (!query.ids) return redirect(app.localePath('/employer/search'))
  },
  data() {
    const queryIds = (this.$route.query.ids as string).split(',')
    const negotiations = queryIds
      .filter((id) => Number.isSafeInteger(Number.parseInt(id)))
      .map((id) => {
        return {
          id: Number.parseInt(id),
          name: '',
          lastName: '',
          profileImage: '',
          birthDate: null,
          from: null,
          to: null,
          position: '',
          typeContract: '',
          salaryRate: 12,
          jobDescription: '',
          observation: '',
          skills: [] as Skill[],
        }
      }) as Negotiation[]
    return {
      loading: false,
      sending: false,
      sent: false,
      error: false,
      page: 1,
      negotiations,
      typeContract: [
        {
          text: this.$t('negotiation.contracts.0'),
          value: 'contract labor',
        },
        {
          text: this.$t('negotiation.contracts.1'),
          value: 'direct hire',
        },
      ],
    }
  },
  async fetch() {
    try {
      this.loading = true
      const res = await this.$axios.$get(
        `/employer/employee_profile/${this.negotiations[this.currentIndex].id}`
      )
      this.negotiations[this.currentIndex].profileImage =
        res.profile_picture_URL
      this.negotiations[this.currentIndex].name = res.name
      this.negotiations[this.currentIndex].lastName = res.last_name
      this.negotiations[this.currentIndex].birthDate = res.birth_date
      this.negotiations[this.currentIndex].skills = res.skills
    } catch (error) {
    } finally {
      this.loading = false
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('negotiation.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('negotiation.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    currentIndex(): number {
      return this.page - 1
    },
    backLink(): string {
      return this.$nuxt.context.from?.fullPath || '/employer/search'
    },
    skills() {
      const skills: String[] = []
      for (let i = 0; i <= 9; i++) {
        skills.push(this.$t(`resume.skills.${i}`) as string)
      }
      return skills
    },
    mainSkill(): Skill | undefined {
      const skill = this.negotiations[this.currentIndex].skills.find(
        (skill) => skill.is_main_skill === 1
      )
      return skill
    },
  },
  watch: {
    currentIndex: {
      handler() {
        this.$fetch()
      },
    },
  },
  methods: {
    isPast(d: Date): boolean {
      const today = new Date()
      return d <= today
    },
    async sendRequest() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.$notifier.showNotification({
            content: 'There are invalid fields',
            bgColor: 'bg-red-kaizen',
          })
        } else {
          this.sending = true
          await this.$axios.$post('/employer/petition/create', {
            requested_employees: this.negotiations.map((neg) => {
              return {
                employee_id: neg.id,
                start_date: neg.from?.toJSON(),
                end_date: neg.to?.toJSON(),
                position: neg.position,
                contract_type: neg.typeContract,
                salary_rate: neg.salaryRate,
                job_description: neg.jobDescription,
                observations: neg.observation,
              }
            }),
          })
          this.sent = true
        }
      } catch (error) {
        this.sent = false
      } finally {
        this.sending = false
      }
    },
    previousPage() {
      if (this.page > 1) this.page--
    },
    nextPage() {
      if (this.page < this.negotiations.length) this.page++
    },
  },
  validations() {
    return {
      negotiations: {
        $each: {
          id: {
            required,
          },
          from: {
            required,
            minValue: minValue(new Date()),
            maxDate: maxDate('to'),
          },
          to: {
            required,
            minValue: minValue(new Date()),
            minDate: minDate('from'),
          },
          position: {
            required,
          },
          typeContract: {
            required,
          },
          salaryRate: {
            required,
            minValue: minValue(7.25),
          },
          jobDescription: {
            required,
          },
          observation: {},
        },
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
  @apply text-lg text-blue-kaizen;
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

.sent-enter-active,
.sent-leave-active {
  transition: opacity 0.2s;
}
.sent-enter,
.sent-leave-to {
  opacity: 0;
}

.sent-modal {
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 rounded-xl backdrop-filter backdrop-blur;
}
</style>
