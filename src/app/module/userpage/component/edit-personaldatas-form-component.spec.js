import {shallow} from 'enzyme'
import {expect} from 'chai'
import { Field, Fields } from 'redux-form'
import { EditPersonalDatasFormComponent } from './edit-personaldatas-form-component'
import MockI18n from './../../../../test/mock/mock-i18n'

let sinon = require('sinon')

describe('EditPersonalDatasFormComponent', () => {
  describe('render', () => {
    const props = {
      initialValues: {birthdate: 'mybirthdate', gender: 'mygender'},
      handleCancel: () => 0,
      handleSubmit: () => 0
    }
    let compo = null
    let mock

    beforeEach(() => {
      compo = new EditPersonalDatasFormComponent(props)
      compo.i18n = new MockI18n()
      mock = sinon.mock(compo)
      mock.expects('getOptionsForGender').returns([])
    })

    afterEach(() => {
      mock.verify()
      mock.restore()
    })

    it('Expect to contain 1 form with valid className and valid onSubmit', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find('form').findWhere(n => {
        return n.prop('onSubmit') === props.handleSubmit && n.prop('className') === 'luciole-form'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type (birthDate)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'birthDate' && n.prop('type') === 'text'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Field with valid name and type (gender)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Field).findWhere(n => {
        return n.prop('name') === 'gender' && n.prop('type') === 'text'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 Fields with valid names and labels (gender)', () => {
      const wrapper = shallow(compo.render())
      const actual = wrapper.find(Fields).findWhere(n => {
        return n.prop('names')[0] === 'country' && n.prop('names')[1] === 'region' &&
        n.prop('countryLabel') === 'application.userpage.editPersonalDatas.country' &&
        n.prop('regionLabel') === 'application.userpage.editPersonalDatas.region'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with valid className', () => {
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

  describe('getOptionsForGender', () => {
    const props = {
      initialValues: {birthdate: 'mybirthdate', gender: 'mygender'},
      handleCancel: () => 0,
      handleSubmit: () => 0
    }
    const compo = new EditPersonalDatasFormComponent(props)
    compo.i18n = new MockI18n()

    it('Expect to return a list of 2 elements', () => {
      expect(compo.getOptionsForGender().length).to.equals(2)
    })

    it('Expect to return valid gender 1, good value', () => {
      expect(compo.getOptionsForGender()[0].value).to.equals('1')
    })

    it('Expect to return valid gender 1, good label', () => {
      expect(compo.getOptionsForGender()[0].label).to.equals('application.user.gender.male')
    })

    it('Expect to return valid gender 2, good value', () => {
      expect(compo.getOptionsForGender()[1].value).to.equals('2')
    })

    it('Expect to return valid gender 2, good label', () => {
      expect(compo.getOptionsForGender()[1].label).to.equals('application.user.gender.female')
    })
  })
})
