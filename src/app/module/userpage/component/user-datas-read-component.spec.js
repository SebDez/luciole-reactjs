import {shallow} from 'enzyme'
import {expect} from 'chai'
import UserDatasRead from './user-datas-read-component'
import MockI18n from './../../../../test/mock/mock-i18n'
import MockToStringHelper from './../../../../test/mock/mock-toString-helper'
import { Grid, Row, Col } from 'react-bootstrap'
import UserFieldRead from './user-field-read-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('UserDatasRead', () => {
  describe('render', () => {
    let props, compo, spy

    beforeEach(() => {
      props = {
        user: {
          birthDate: 'birthDate',
          gender: 'gender',
          country: 'country',
          region: 'region',
          signUpDate: 'signUpDate'
        }
      }
      compo = new UserDatasRead(props)
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
      expect(actual.text()).to.equal('application.user.datasTitle')
    })

    it('Expect to contain a 3 Row', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(3)
    })

    it('Expect to contain 5 Col with class sidebar-block-col', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') && n.prop('className').includes('sidebar-block-col')
      })
      expect(actual).to.have.length(5)
    })

    it('Expect to contain 1 UserFieldRead with good label and value (birthDate)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.birthDate' && n.prop('value') === 'my-date'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call toStringHelper.dateToString twice', () => {
      spy = chai.spy.on(compo.toStringHelper, 'dateToString')
      compo.render()
      expect(spy).to.have.been.called.twice
    })

    it('Expect to contain 1 UserFieldRead with good label and value (gender)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.gender.label' && n.prop('value') === 'my-gender'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call toStringHelper.genderToString twice', () => {
      spy = chai.spy.on(compo.toStringHelper, 'genderToString')
      compo.render()
      expect(spy).to.have.been.called.once
    })

    it('Expect to contain 1 UserFieldRead with good label and value (country)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.country' && n.prop('value') === 'my-country'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call toStringHelper.countryToString twice', () => {
      spy = chai.spy.on(compo.toStringHelper, 'countryToString')
      compo.render()
      expect(spy).to.have.been.called.once
    })

    it('Expect to contain 1 UserFieldRead with good label and value (region)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.region' && n.prop('value') === 'my-region'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to have call toStringHelper.regionToString twice', () => {
      spy = chai.spy.on(compo.toStringHelper, 'regionToString')
      compo.render()
      expect(spy).to.have.been.called.once
    })

    it('Expect to contain 1 UserFieldRead with good label and value (signUpDate)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(UserFieldRead).findWhere(n => {
        return n.prop('label') === 'application.user.signUpDate' && n.prop('value') === 'my-date'
      })
      expect(actual).to.have.length(1)
    })
  })
})
