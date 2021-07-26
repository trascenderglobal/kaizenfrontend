<template>
  <div
    class="ks-select"
    :class="[bgColor, color, disabled ? '' : 'cursor-pointer']"
    tabindex="0"
    @click="showItems"
    @blur="$emit('blur')"
  >
    <span class="label">{{ date ? $d(date) : label }}</span>
    <button
      v-if="clearable && date && !disabled"
      type="button"
      class="icon clear"
      @click.stop="clearValue"
    >
      <iconly-icon name="clear" class="stroke-current" />
    </button>
    <button type="button" class="icon">
      <iconly-icon
        class="transition"
        :class="{ 'transform rotate-180': show }"
        name="arrow-down-2"
      />
    </button>
    <transition name="items">
      <div v-if="!disabled" v-show="show" class="items" @click.stop>
        <client-only>
          <date-picker
            v-model="date"
            :lang="$t('datepicker.lang')"
            inline
            :disabled-date="disabledDate"
            @pick="
              show = false
              $emit('input', date)
            "
          />
        </client-only>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue2-datepicker/index.css'

type NullableDate = Date | null

export default Vue.extend({
  props: {
    disabled: Boolean,
    clearable: Boolean,
    value: {
      type: Date,
      default: null as NullableDate,
    },
    bgColor: {
      type: String,
      default: 'bg-gray-darker',
    },
    color: {
      type: String,
      default: 'text-white',
    },
    label: {
      type: String,
      default: '',
    },
    disabledDate: {
      type: [Function],
      default: () => false,
    },
    defaultValue: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      show: false,
      date: this.value as NullableDate,
    }
  },
  methods: {
    showItems(): void {
      if (!this.disabled) {
        this.show = !this.show
        if (!this.show) this.$emit('blur')
      }
    },
    clearValue(): void {
      this.date = null
      this.$emit('input', null)
    },
  },
})
</script>

<style scoped>
.ks-select {
  @apply relative flex justify-between w-full rounded-lg px-1 py-0.5;
}

.ks-select .label {
  @apply flex-grow px-1 select-none;
}

.ks-select .icon {
  @apply flex items-center justify-center fill-current min-w-6 focus:outline-none;
}

.ks-select .items {
  @apply absolute z-20 left-0 top-8 flex flex-wrap bg-white rounded-lg border border-gray-light shadow-md;
}

.items > div {
  @apply p-1 text-gray-darker;
}

.items >>> * {
  @apply border-0 focus:outline-none;
}

.datepicker .items .no-items {
  @apply select-none cursor-default;
}

.items-enter-active,
.items-leave-active {
  @apply transition origin-top-left duration-200;
}
.items-enter,
.items-leave-to {
  @apply transform scale-0;
}
</style>
