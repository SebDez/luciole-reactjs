import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { UserPage } from './userpage-container'
import { Grid, Row, Col } from 'react-bootstrap'
import UserDatasRead from './../component/user-datas-read-component'
import UserAccountRead from './../component/user-account-read-component'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('UserPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return an empty object', () => {
      expect(UserPage.mapDispatchToProps()).to.be.empty
    })
  })

  describe('mapStateToProps', () => {
    const state = {
      application: {
        auth: {
          val: 'my auth obj',
          user: 'myuser'
        }
      }
    }
    it('Expect to return a valid user prop', () => {
      expect(UserPage.mapStateToProps(state).user).to.equal('myuser')
    })
  })

  describe('render', () => {
    const props = {
      user: {
        name: 'name',
        avatar: 'src'
      }
    }

    it('Expect to contain a Grid', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(Grid)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 2 Row', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(Row)
      expect(actual).to.have.length(2)
    })

    it('Expect to contain 3 Col', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(Col).findWhere(n => {
        return n.prop('className') === 'sidebar-block-col'
      })
      expect(actual).to.have.length(3)
    })

    it('Expect to contain 1 UserAvatar', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(UserAvatar)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 UserDatasRead', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(UserDatasRead)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 UserAccountRead', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(UserAccountRead)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 3 div with class lu-container', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('lu-container')
      })
      expect(actual).to.have.length(3)
    })

    it('Expect to contain 1 div with class userpage-avatar', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('userpage-avatar')
      })
      expect(actual).to.have.length(1)
    })

    it('Expect to contain 1 div with class userpage-account', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find('div').findWhere(n => {
        return n.prop('className') && n.prop('className').includes('userpage-account')
      })
      expect(actual).to.have.length(1)
    })
  })
})
