import {shallow} from 'enzyme'
import {expect} from 'chai'
import UserAvatar from './user-avatar-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('UserAvatar', () => {
  describe('render', () => {
    const props = {
      src: 'imgsrc'
    }

    const compo = new UserAvatar(props)
    compo.appConf = {
      img: {
        src: 'my-url'
      }
    }

    it('Expect to contain a div with user-avatar className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').prop('className')
      const expected = 'user-avatar'
      expect(actual).to.be.equal(expected)
    })

    it('Expect to contain an img with prop src if given', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('img').prop('src')
      const expected = 'my-url/imgsrc'
      expect(actual).to.be.equal(expected)
    })
  })

  describe('showDefaultOnError', () => {
    const props = {
      src: 'imgsrc'
    }
    const event = {
      target: {
        setAttribute: () => 0
      }
    }
    const compo = new UserAvatar(props)
    compo.appConf = {
      img: {
        src: 'my-url'
      }
    }

    it('Expect to have call setAttribute with good params', () => {
      const spy = chai.spy.on(event.target, 'setAttribute')
      compo.showDefaultOnError(event)
      expect(spy).to.have.been.called.with('src', 'my-url/tumblr_mdj13ty0p91r4nmedo1_1280.jpg')
    })
  })
})
