import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import Nav from '../Nav/Nav.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Nav)
    expect(wrapper.text()).toBeTruthy()
  })
})