import { mount } from '@vue/test-utils'
import KsSelect from '@/components/KsSelect'

describe('KsSelect', () => {
  test('mounts properly', () => {
    const wrapper = mount(KsSelect, {
      mocks: {
        $t: (msg) => msg,
      },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = mount(KsSelect, {
      mocks: {
        $t: (msg) => msg,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
