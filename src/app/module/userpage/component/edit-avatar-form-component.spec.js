import {shallow} from 'enzyme'
import {expect} from 'chai'
import { EditAvatarFormComponent } from './edit-avatar-form-component'
import { Grid, Row, Col } from 'react-bootstrap'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)
let sinon = require('sinon')

describe('EditAvatarFormComponent', () => {
  const props = {
    avatar: {
      selected: '1',
      availableList: ['1', '2', '3', '4']
    },
    handleCancel: () => 0,
    handleSubmit: () => 0
  }
  let compo = null
  let mockCompo

  beforeEach(() => {
    compo = new EditAvatarFormComponent(props)
    compo.appConf = {
      img: {
        src: 'my-url'
      }
    }
    compo.avatarList = ['1', '2', '3']
    mockCompo = sinon.mock(compo)
  })

  describe('render', () => {
    beforeEach(() => {
      mockCompo.expects('getChoices').returns('0')
    })

    afterEach(() => {
      mockCompo.verify()
      mockCompo.restore()
    })

    it('Expect to contain 1 Grid with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Grid).findWhere(n => {
        return n.prop('className') === 'lu-grid'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 3 Row', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(3)
    })

    it('Expect to contain 1 UserAvatar', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserAvatar)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 3 Col with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') === 'sidebar-block-col'
      })
      expect(actual).to.have.length(3)
    })

    it('Expect to contain 1 div with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') === 'luciole-form avatar-form'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with valid className userpage-avatar', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') === 'userpage-avatar'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with valid className luciole-duo-buttons', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') === 'luciole-duo-buttons'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with className lu-cancel-btn', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('lu-cancel-btn')
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 2 div with className luciole-buttons', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('luciole-buttons')
      })
      expect(actual).to.have.length(2)
    })
  })

  describe('submit', () => {
    it('Expect to have call props.onSubmit', () => {
      let spy = chai.spy.on(compo.props, 'onSubmit')
      compo.submit()
      expect(spy).to.have.been.called()
    })
  })

  describe('selectAvatar', () => {
    beforeEach(() => {
      mockCompo.expects('forceUpdate').returns('0')
    })

    afterEach(() => {
      mockCompo.verify()
      mockCompo.restore()
    })

    it('Expect to have call compo.forceUpdate', () => {
      let spy = chai.spy.on(compo, 'forceUpdate')
      compo.selectAvatar('choice')
      expect(spy).to.have.been.called()
    })

    it('Expect to set selected as null', () => {
      compo.selectAvatar('1')
      expect(compo.selected).to.equals(null)
    })

    it('Expect to set selected as choice', () => {
      compo.selectAvatar('mychoice')
      expect(compo.selected).to.equals('mychoice')
    })
  })

  describe('getChoices', () => {
    it('Expect to contain 3 Col with valid className', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') === 'sidebar-block-col lu-square-choice'
      })
      expect(actual).to.have.length(3)
    })
    it('Expect to contain 3 img', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('img')
      expect(actual).to.have.length(3)
    })
    it('Expect to contain 1 img with valid className (selected and default)', () => {
      compo.selected = '2'
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('img').findWhere(n => {
        return n.prop('className') === ' selected' && n.prop('src') === 'my-url/2'
      })
      expect(actual).to.have.length(1)
    })
    it('Expect to contain 1 img with valid className (selected and choice)', () => {
      compo.selected = null
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('img').findWhere(n => {
        return n.prop('className') === ' selected' && n.prop('src') === 'my-url/1'
      })
      expect(actual).to.have.length(1)
    })
    it('Expect to contain 1 img with valid className (selected and choice), case no avatar selected, default selected', () => {
      compo.avatarList = ['1', '2', '3', 'tumblr_mdj13ty0p91r4nmedo1_1280.jpg']
      compo.props.avatar.selected = null
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('img').findWhere(n => {
        return n.prop('className') === ' selected' && n.prop('src') === 'my-url/tumblr_mdj13ty0p91r4nmedo1_1280.jpg'
      })
      expect(actual).to.have.length(1)
    })
  })
})
