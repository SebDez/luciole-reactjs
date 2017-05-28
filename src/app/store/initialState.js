export default {
  application: {
    module: {
      sidebar: {
        open: true,
        userResource: null
      },
      main: {
        user: null,
        modals: {
          lang: {
            open: false
          }
        }
      },
      userpage: {
        modals: {
          showEditUsernameModal: false,
          showEditPersonalDatasModal: false
        }
      }
    },
    auth: {
      user: {
        token: null
      },
      modals: {
        showLoginModal: false,
        showSignUpModal: false
      }
    },
    app: {
    }
  }
}
