import {shallow} from 'enzyme'
import {expect} from 'chai'
import HomePageLoggedIn from './homepage-logged-in-component'
import WorkInProgress from './../../../common/component/wip/wip-component'

describe('HomePageLoggedIn', () => {
  describe('render', () => {
    let compo = null
    const props = {}

    beforeEach(() => {
      compo = new HomePageLoggedIn(props)
    })

    it('Expect to contain a WorkInProgress', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(WorkInProgress)
      expect(actual).to.be.length(1)
    })
  })
})
