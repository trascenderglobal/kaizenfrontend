<template>
  <div class="field">
    <div
      class="input"
      :class="{ outlined: outlined, error: errorMessages.length }"
    >
      <div v-if="$slots['prepend-icon']" class="icon prepend-icon">
        <slot name="prepend-icon" />
      </div>
      <div class="input-wrapper">
        <input
          v-bind="$attrs"
          :value="value"
          placeholder=" "
          @input="$emit('input', $event.target.value)"
          @blur="$emit('blur')"
        />
        <label class="label">{{ label }}</label>
      </div>
      <div
        v-if="$slots['append-icon']"
        class="icon append-icon"
        @click.stop="$emit('click:append')"
      >
        <slot name="append-icon" />
      </div>
    </div>
    <div
      v-if="!disableHint"
      class="hint"
      :class="[errorMessages.length ? 'text-red-400' : 'text-gray-dark']"
    >
      {{ errorMessages.length ? errorMessages[0] : hint }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    disableHint: Boolean,
    errorMessages: {
      type: Array,
      default: () => [],
    },
    hint: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.field {
  @apply w-full mb-2;
}

.hint {
  @apply h-5 text-sm px-1 pt-0.5;
}

.input {
  @apply flex w-full;
}

.input-wrapper {
  @apply relative flex w-full p-3;
}

.input input {
  @apply flex-grow z-10 bg-transparent;
}

input:focus {
  @apply outline-none;
}

input:focus + .label,
input:not(:placeholder-shown) + .label {
  @apply -translate-y-6 scale-90 bg-white;
}

.label {
  @apply transition transform duration-200 absolute left-0 top-3 px-1  z-0 text-gray-dark;
}

.outlined {
  @apply border rounded-lg border-gray-light transition;
}

.outlined.error {
  @apply border-red-400;
}

.icon {
  @apply py-3;
}

.prepend-icon {
  @apply pl-2;
}

.append-icon {
  @apply pr-2;
}
</style>
