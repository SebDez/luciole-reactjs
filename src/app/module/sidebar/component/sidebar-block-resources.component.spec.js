import {shallow} from 'enzyme'
import SidebarBlockResources from './sidebar-block-resources.component'
import SidebarLineResources from './sidebar-line-resources.component'

let chai = require('chai')
let expect = chai.expect

describe('SidebarBlockResources', () => {
  describe('getLineElementForResource', () => {
    const props = {
      userResource: {
        gold: {
          amount: 10,
          storage: 100
        }
      }
    }
    let compo

    beforeEach(() => {
      compo = new SidebarBlockResources(props)
    })

    it('Expect to contain a SidebarLineResources withg valid resourceName', () => {
      const wrapper = shallow(compo.getLineElementForResource('gold'))
      const actual = wrapper.instance().props.resourceName
      const expected = 'gold'
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources withg valid amount', () => {
      const wrapper = shallow(compo.getLineElementForResource('gold'))
      const actual = wrapper.instance().props.amount
      const expected = 10
      expect(actual).to.equal(expected)
    })

    it('Expect to contain a SidebarLineResources withg valid storage', () => {
      const wrapper = shallow(compo.getLineElementForResource('gold'))
      const actual = wrapper.instance().props.storage
      const expected = 100
      expect(actual).to.equal(expected)
    })

    it('Expect to return null if no resource', () => {
      expect(compo.getLineElementForResource('unknow')).to.equal(null)
    })
  })
})
