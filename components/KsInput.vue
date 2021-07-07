<template>
  <div class="field" :class="{ dense: dense }">
    <div
      class="input"
      :class="[
        outlined ? 'outlined' : '',
        errorMessages.length || error ? 'error' : '',
        borderColor,
      ]"
    >
      <div v-if="$slots['prepend-icon']" class="icon prepend-icon">
        <slot name="prepend-icon" />
      </div>
      <div class="input-wrapper" :class="{ dense: dense }">
        <input
          v-bind="$attrs"
          :value="value"
          :title="label"
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
    error: Boolean,
    hint: {
      type: String,
      default: '',
    },
    borderColor: {
      type: String,
      default: 'border-gray-light',
    },
    dense: Boolean,
  },
})
</script>

<style scoped>
.field {
  @apply w-full mb-2;
}

.field.dense {
  @apply mb-0;
}

.hint {
  @apply h-5 text-sm px-1 pt-0.5;
}

.input {
  @apply flex w-full px-1;
}

.input-wrapper {
  @apply relative flex flex-grow p-3;
}

.input-wrapper.dense {
  @apply p-0.5;
}

.input input {
  @apply relative min-w-6 w-full z-10 bg-transparent text-gray-darker;
}

input:focus {
  @apply outline-none;
}

input:focus + .label,
input:not(:placeholder-shown) + .label {
  @apply -translate-y-6 scale-90 bg-white;
}

.dense input:focus + .label,
.dense input:not(:placeholder-shown) + .label {
  @apply -translate-y-4 scale-80 bg-white;
}

.label {
  @apply transition transform max-w-full duration-200 absolute left-1 top-3 select-none z-0 text-gray-dark whitespace-nowrap overflow-hidden overflow-ellipsis;
}

.dense .label {
  @apply left-0.5 top-0.5;
}

.outlined {
  @apply border rounded-lg transition;
}

.outlined.error {
  @apply border-red-kaizen;
}

.icon {
  @apply py-3;
}

.dense .icon {
  @apply py-0.5;
}

.prepend-icon {
  @apply pl-2;
}

.append-icon {
  @apply pr-2;
}
</style>
