<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'
import icons from '~/assets/icons/icons'

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'outline',
    },
    size: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: 'blue-kaizen',
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
  render(h: CreateElement): VNode {
    const svg = icons[this.name]?.[this.type]

    return h('svg', {
      class: `iconly iconly-${this.name}-${this.type}`,
      attrs: {
        width: `${this.size * 24}px`,
        height: `${this.size * 24}px`,
        viewBox: this.viewBox,
        xmlns: 'http://www.w3.org/2000/svg',
      },
      domProps: {
        innerHTML: svg || '',
      },
      refInFor: true,
    })
  },
})
</script>
