<template>
  <div
    class="ks-select"
    :class="[bgColor, color, disabled ? '' : 'cursor-pointer']"
    tabindex="0"
    @click="showItems"
    @blur="show = false"
  >
    <input
      v-bind="$attrs"
      :value="selected.value"
      class="input"
      type="text"
      readonly
      tabindex="-1"
      :disabled="disabled"
    />
    <span class="label">{{ selected.text || label }}</span>
    <div class="icon">
      <iconly-icon name="arrow-down-2" />
    </div>
    <transition name="items">
      <div v-if="!disabled" v-show="show" class="items">
        <template v-if="items.length">
          <div
            v-for="(item, i) in items"
            :key="`opt-${i}`"
            class="w-full"
            @click.stop="changeValue(item)"
          >
            {{ item[itemText] }}
          </div>
        </template>
        <div v-else class="w-full no-items">{{ $t('select.noItems') }}</div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    value: {
      type: [String, Number],
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
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
        text: '',
        value: '',
      },
    }
  },
  beforeMount() {
    this.items.forEach((item: any) => {
      if (item[this.itemValue] === this.value) {
        this.selected.text = item[this.itemText]
        this.selected.value = item[this.itemValue]
      }
    })
  },
  methods: {
    changeValue(item: any) {
      this.selected.text = item[this.itemText]
      this.selected.value = item[this.itemValue]
      this.show = false
      this.$emit('input', item[this.itemValue])
    },
    showItems() {
      if (!this.disabled) this.show = !this.show
    },
  },
})
</script>

<style scoped>
.ks-select {
  @apply relative flex justify-between w-full rounded-lg py-0.5 px-1;
}

.ks-select .input {
  z-index: -1;
  @apply opacity-0 absolute w-full inline-flex select-none;
}

.ks-select .label {
  @apply flex-grow px-1 select-none;
}

.ks-select .icon {
  @apply fill-current;
}

.ks-select .items {
  @apply absolute z-20 left-0 top-8 w-full flex flex-wrap bg-white rounded-lg border border-gray-light shadow-md;
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

.items-leave-active {
  transition: opacity 0.15s;
}
.items-enter,
.items-leave-to {
  opacity: 0;
}
</style>
