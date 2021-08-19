<template>
  <div class="ks-code-input">
    <div
      v-for="(digit, i) in code"
      :key="i"
      class="ks-code-digit-wrapper"
      :class="{ error: error }"
    >
      <input
        :ref="`${i}`"
        :value="code[i]"
        type="text"
        class="ks-code-digit"
        maxlength="1"
        @click="focused = i"
        @input="updateValue($event, i)"
        @paste.prevent="handlePaste"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    length: {
      type: Number,
      default: 8,
    },
    value: {
      type: Array,
      default: () => [],
    },
    error: Boolean,
  },
  data() {
    return {
      code: new Array(this.length) as string[],
      focused: 0,
    }
  },
  methods: {
    updateValue(e: any, i: number) {
      this.code.splice(i, 1, e.target.value.trim())
      this.$emit('input', this.code)
      if (e.target.value.trim()) {
        const next = i < this.code.length - 1 ? i + 1 : i
        this.focused = next
        const nextRef: any = this.$refs[this.focused.toString()]
        nextRef[0].focus()
      } else {
        const prev = i > 0 ? i - 1 : i
        this.focused = prev
        const prevRef: any = this.$refs[this.focused.toString()]
        prevRef[0].focus()
      }
    },
    handlePaste(e: ClipboardEvent) {
      const text = e.clipboardData?.getData('text') || ''
      const textArray = text.split('')
      let aux = this.focused
      for (let i = this.focused; i < this.code.length; i++) {
        this.code.splice(i, 1, textArray[i - this.focused] || this.code[i])
        textArray[i - this.focused] && aux++
      }
      this.focused = Math.min(aux, this.length - 1)
      const nextRef: any = this.$refs[this.focused.toString()]
      nextRef[0].focus()
      this.$emit('input', this.code)
    },
  },
})
</script>

<style scoped>
.ks-code-input {
  @apply flex max-w-full overflow-x-auto justify-center items-center flex-wrap;
}

.ks-code-digit-wrapper {
  @apply flex items-center justify-center w-10 h-12 text-2xl bg-gray-lighter rounded-xl text-blue-kaizen m-2 flex-shrink-0 lg:w-16 lg:h-20 lg:text-4xl lg:m-3;
}

.ks-code-digit-wrapper.error {
  @apply bg-red-50 text-red-kaizen;
}

.ks-code-digit {
  @apply text-center bg-transparent h-full w-full max-h-full max-w-full p-2 focus:outline-none;
}
</style>
