import {shallow} from 'enzyme'
import {expect} from 'chai'
import UserAccountRead from './user-account-read-component'
import MockI18n from './../../../../test/mock/mock-i18n'
import MockToStringHelper from './../../../../test/mock/mock-toString-helper'
import { Grid, Row, Col } from 'react-bootstrap'
import UserFieldRead from './user-field-read-component'

describe('UserAccountRead', () => {
  describe('render', () => {
    let props, compo

    beforeEach(() => {
      props = {
        user: {
          mail: 'mail',
          username: 'username',
          userTag: 'userTag'
        }
      }
      compo = new UserAccountRead(props)
      compo.i18n = new MockI18n()
      compo.toStringHelper = new MockToStringHelper()
    })

    it('Expect to contain a Grid', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.instance()
      expect(actual).to.be.instanceOf(Grid)
    })

    it('Expect to contain 1 h2 with good text', () => {
      compo.props.value = 'myvalue'
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('h2')
      expect(actual.text()).to.equal('application.user.accountTitle')
    })

    it('Expect to contain a 2 Row', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(2)
    })

    it('Expect to contain 4 Col with class sidebar-block-col', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') && n.prop('className').includes('sidebar-block-col')
      })
      expect(actual).to.have.length(4)
    })

    it('Expect to contain 1 UserFieldRead with good label and value (username)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.username' && n.prop('value') === 'username'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 UserFieldRead with good label and value (mail)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.mail' && n.prop('value') === 'mail'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 UserFieldRead with good label and value (usertag)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.usertag' && n.prop('value') === 'userTag'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 button', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('button')
      expect(actual).to.have.length(1)
    })
  })
})
