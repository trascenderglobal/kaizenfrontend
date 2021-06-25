<template>
  <div
    class="ks-select"
    :class="[bgColor, color, disabled ? '' : 'cursor-pointer']"
    tabindex="0"
    @click="showItems"
  >
    <input class="input" type="text" readonly :disabled="disabled" />
    <span class="label">{{ date ? $d(date) : label }}</span>
    <div
      v-if="clearable && date && !disabled"
      class="icon clear"
      @click.stop="clearValue"
    >
      <iconly-icon name="close" view-box="0 0 311 311.07733" :size="0.5" />
    </div>
    <div class="icon">
      <iconly-icon
        class="transition"
        :class="{ 'transform rotate-180': show }"
        name="arrow-down-2"
      />
    </div>
    <transition name="items">
      <div class="items" @click.stop>
        <client-only>
          <date-picker
            v-if="!disabled"
            v-show="show"
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
      default: new Date(),
    },
  },
  data() {
    return {
      show: false,
      date: this.value as NullableDate,
    }
  },
  methods: {
    showItems() {
      if (!this.disabled) this.show = !this.show
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

.ks-select .input {
  z-index: -1;
  @apply opacity-0 absolute w-full inline-flex select-none;
}

.ks-select .label {
  @apply flex-grow px-1 select-none;
}

.ks-select .icon {
  @apply flex items-center justify-center fill-current min-w-6;
}

.ks-select .items {
  @apply absolute z-20 left-0 top-10 flex flex-wrap bg-white rounded-lg border border-gray-light shadow-md;
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

.items-leave-active {
  transition: opacity 0.15s;
}
.items-enter,
.items-leave-to {
  opacity: 0;
}
</style>
