<template>
  <div
    class="field"
    :class="[bgColor, color, disabled ? '' : 'cursor-pointer']"
  >
    <div class="ks-select" tabindex="0" @click="showItems" @blur="show = false">
      <span class="label">{{
        selected.text === null ? label : selected.text
      }}</span>
      <div
        v-if="clearable && selected.text && !disabled"
        class="icon clear"
        @click.stop="clearValue"
      >
        <iconly-icon name="close" view-box="0 0 329.26933 329" :size="0.45" />
      </div>
      <div class="icon">
        <iconly-icon
          class="transition"
          :class="{ 'transform rotate-180': show }"
          name="arrow-down-2"
        />
      </div>
      <transition name="items">
        <div v-if="!disabled" v-show="show" class="items scroller">
          <template v-if="items.length">
            <div
              v-for="(item, i) in items"
              :key="`opt-${i}`"
              class="w-full"
              :class="selected.index === i ? 'selected' : ''"
              @click.stop="changeValue(item, i)"
            >
              {{ simpleArray ? item : item[itemText] }}
            </div>
          </template>
          <div v-else class="w-full no-items">{{ $t('select.noItems') }}</div>
        </div>
      </transition>
    </div>
    <div
      v-if="enableHint"
      class="hint"
      :class="[
        errorMessages.length || error ? 'text-red-kaizen' : 'text-gray-dark',
      ]"
    >
      {{ errorMessages.length ? errorMessages[0] : hint }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Item {
  text: string | number | null
  value: string | number | null
  index: number | null
}

export default Vue.extend({
  props: {
    disabled: Boolean,
    clearable: Boolean,
    value: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    enableHint: Boolean,
    errorMessages: {
      type: Array,
      default: () => [],
    },
    error: Boolean,
    hint: {
      type: String,
      default: '',
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
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
  },
  data() {
    return {
      show: false,
      selected: {
        text: null,
        value: null,
        index: null,
      } as Item,
    }
  },
  computed: {
    simpleArray(): Boolean {
      if (!this.items.length) return false
      else if (
        typeof this.items[0] === 'string' ||
        typeof this.items[0] === 'number'
      )
        return true
      return false
    },
  },
  watch: {
    items: {
      handler() {
        this.clearValue()
      },
      immediate: false,
    },
  },
  beforeMount() {
    if (this.simpleArray) {
      ;(this.items as any[]).forEach((item: any, i: number) => {
        if (item === this.value) {
          this.selected.text = item
          this.selected.value = item
          this.selected.index = i
        }
      })
    } else {
      ;(this.items as any[]).forEach((item: any, i: number) => {
        if (item[this.itemValue] === this.value) {
          this.selected.text = item[this.itemText]
          this.selected.value = item[this.itemValue]
          this.selected.index = i
        }
      })
    }
  },
  methods: {
    changeValue(item: any, i: number): void {
      if (this.simpleArray) {
        this.selected.text = item
        this.selected.value = item
        this.selected.index = i
        this.show = false
        this.$emit('input', item)
      } else {
        this.selected.text = item[this.itemText]
        this.selected.value = item[this.itemValue]
        this.selected.index = i
        this.show = false
        this.$emit('input', item[this.itemValue])
      }
    },
    clearValue(): void {
      this.selected = {
        text: null,
        value: null,
        index: null,
      }
      this.$emit('input', null)
    },
    showItems(): void {
      if (!this.disabled) this.show = !this.show
    },
  },
})
</script>

<style scoped>
.field {
  @apply w-full rounded-lg;
}

.hint {
  @apply h-5 text-sm px-1 pt-0.5;
}

.ks-select {
  @apply relative flex justify-between w-full rounded-lg py-0.5 px-1;
}

.ks-select .label {
  @apply flex-grow pl-1 pr-2 select-none whitespace-nowrap overflow-hidden overflow-ellipsis;
}

.ks-select .icon {
  @apply flex items-center justify-center fill-current min-w-6;
}

.ks-select .items {
  @apply absolute z-20 left-0 top-8 w-full max-h-48 overflow-y-auto flex flex-wrap bg-white rounded-lg border border-gray-light shadow-md;
}

.items div:first-child {
  @apply rounded-t-lg;
}

.items div:last-child {
  @apply rounded-b-lg;
}

.items div {
  @apply py-1 px-2 text-gray-darker;
}

.items .no-items {
  @apply select-none cursor-default;
}

.items div:not(.no-items) {
  @apply hover:bg-gray-lighter cursor-pointer;
}

.items .selected {
  @apply bg-gray-lighter;
}

.items-leave-active {
  transition: opacity 0.15s;
}
.items-enter,
.items-leave-to {
  opacity: 0;
}
</style>
