import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { KingdomPage } from './kingdompage-container'
import LuciolePageHeader from './../../../common/component/page-header/page-header-component'
import { Grid } from 'react-bootstrap'
import ResourcesComponent from './../component/resources-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('KingdomPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return empty object', () => {
      expect(KingdomPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    const state = {
      i18n: {
        locale: 'fr'
      },
      application: {
        module: {
          sidebar: {
            userResource: 'resources'
          }
        }
      }
    }
    it('Expect to return an object with currentLang', () => {
      expect(KingdomPage.mapStateToProps(state).currentLang).to.equal('fr')
    })
    it('Expect to return an object with userResource', () => {
      expect(KingdomPage.mapStateToProps(state).userResource).to.equal('resources')
    })
  })

  describe('render', () => {
    const props = {
      currentLang: 'fr',
      userResource: {name: 'userResource'}
    }

    it('Expect to contain a Grid', () => {
      const wrapper = shallow(<KingdomPage {...props} />)
      const actual = wrapper.find(Grid)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a LuciolePageHeader', () => {
      const wrapper = shallow(<KingdomPage {...props} />)
      const actual = wrapper.find(LuciolePageHeader).findWhere(n => {
        return n.prop('title') === 'application.sidebar.kingdom' && n.prop('icon') === 'flag'
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a ResourcesComponent', () => {
      const wrapper = shallow(<KingdomPage {...props} />)
      const actual = wrapper.find(ResourcesComponent).findWhere(n => {
        return n.prop('lang') === 'fr' && n.prop('resources').name === 'userResource'
      })
      expect(actual).to.have.length(1)
    })
  })
})
