import {shallow} from 'enzyme'
import {expect} from 'chai'
import HomePageLoggedOff from './homepage-logged-off-component'
import WorkInProgress from './../../../common/component/wip/wip-component'

describe('HomePageLoggedOff', () => {
  describe('render', () => {
    let compo = null
    const props = {}

    beforeEach(() => {
      compo = new HomePageLoggedOff(props)
    })

    it('Expect to contain a WorkInProgress', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(WorkInProgress)
      expect(actual).to.be.length(1)
    })
  })
})
