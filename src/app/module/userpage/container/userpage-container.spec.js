import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { UserPage } from './userpage-container'
import { Grid, Row, Col } from 'react-bootstrap'
import UserDatasRead from './../component/user-datas-read-component'
import UserAccountRead from './../component/user-account-read-component'
import UserAvatar from './../../../common/component/avatar/user-avatar-component'
import EditUsernameModal from './../component/edit-username-modal-component'
import EditPersonalDatasModal from './../component/edit-personaldatas-modal-component'
import EditAvatarModal from './../component/edit-avatar-modal-component'

let chai = require('chai')
let spies = require('chai-spies')
chai.use(spies)

describe('UserPage', () => {
  describe('mapDispatchToProps', () => {
    it('Expect to return valid SidebarActions object', () => {
      expect(UserPage.mapDispatchToProps().userPageActions).to.not.be.empty
    })
  })

  describe('mapStateToProps', () => {
    const state = {
      application: {
        auth: {
          val: 'my auth obj',
          user: 'myuser'
        },
        module: {
          userpage: 'myuserpage'
        }
      }
    }
    it('Expect to return a valid user prop', () => {
      expect(UserPage.mapStateToProps(state).user).to.equal('myuser')
    })
    it('Expect to return a valid userPage prop', () => {
      expect(UserPage.mapStateToProps(state).userPage).to.equal('myuserpage')
    })
  })

  describe('render', () => {
    const props = {
      user: {
        name: 'name',
        avatar: {
          selected: 'src'
        }
      },
      userPage: {
        modals: {
          showEditUsernameModal: false,
          showEditPersonalDatasModal: false,
          showEditAvatarModal: false
        }
      },
      userPageActions: {}
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

    it('Expect to contain a EditUsernameModal', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(EditUsernameModal)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a EditPersonalDatasModal', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(EditPersonalDatasModal)
      expect(actual).to.have.length(1)
    })

    it('Expect to contain a EditAvatarModal', () => {
      const wrapper = shallow(<UserPage {...props} />)
      const actual = wrapper.find(EditAvatarModal)
      expect(actual).to.have.length(1)
    })
  })

  describe('openEditUsernameModal', () => {
    it('Expect to have call userPageActions.openEditUsernameModalAction', () => {
      const userPageActions = {
        openEditUsernameModalAction: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'openEditUsernameModalAction')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.openEditUsernameModal(props)
      expect(spy).to.have.been.called()
    })
  })

  describe('closeEditUsernameModal', () => {
    it('Expect to have call userPageActions.closeEditUsernameModalAction', () => {
      const userPageActions = {
        closeEditUsernameModalAction: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'closeEditUsernameModalAction')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.closeEditUsernameModal(props)
      expect(spy).to.have.been.called()
    })
  })

  describe('editUsername', () => {
    it('Expect to have call userPageActions.editUsername', () => {
      const userPageActions = {
        editUsername: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'editUsername')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.editUsername(props, {username: 'me'})
      expect(spy).to.have.been.called.with('me')
    })
  })

  describe('openEditPersonalDatasModal', () => {
    it('Expect to have call userPageActions.openEditPersonalDatasModalAction', () => {
      const userPageActions = {
        openEditPersonalDatasModalAction: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'openEditPersonalDatasModalAction')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.openEditPersonalDatasModal(props)
      expect(spy).to.have.been.called()
    })
  })

  describe('closeEditPersonalDatasModal', () => {
    it('Expect to have call userPageActions.closeEditPersonalDatasModalAction', () => {
      const userPageActions = {
        closeEditPersonalDatasModalAction: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'closeEditPersonalDatasModalAction')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.closeEditPersonalDatasModal(props)
      expect(spy).to.have.been.called()
    })
  })

  describe('editPersonalDatas', () => {
    it('Expect to have call userPageActions.editPersonalDatas', () => {
      const userPageActions = {
        editPersonalDatas: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'editPersonalDatas')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.editPersonalDatas(props, {
        birthDate: 'my-birthDate',
        gender: 'my-gender',
        country: 'my-country',
        region: 'my-region'
      })
      expect(spy).to.have.been.called.with('my-birthDate', 'my-gender', 'my-country', 'my-region')
    })
  })

  describe('openEditAvatarModal', () => {
    it('Expect to have call userPageActions.openEditAvatarModalAction', () => {
      const userPageActions = {
        openEditAvatarModalAction: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'openEditAvatarModalAction')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.openEditAvatarModal(props)
      expect(spy).to.have.been.called()
    })
  })

  describe('closeEditAvatarModal', () => {
    it('Expect to have call userPageActions.closeEditAvatarModalAction', () => {
      const userPageActions = {
        closeEditAvatarModalAction: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'closeEditAvatarModalAction')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.closeEditAvatarModal(props)
      expect(spy).to.have.been.called()
    })
  })

  describe('editAvatar', () => {
    it('Expect to have call userPageActions.editAvatar', () => {
      const userPageActions = {
        editAvatar: () => 0
      }
      let spy = chai.spy.on(userPageActions, 'editAvatar')
      const props = {
        userPageActions
      }
      UserPage.__testOnly.editAvatar(props, {
        avatar: 'my-avatar'
      })
      expect(spy).to.have.been.called.with('my-avatar')
    })
  })
})
