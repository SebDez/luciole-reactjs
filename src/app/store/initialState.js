export default {
  conf: null, // available on state.application.app.conf
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
    }
  },
  auth: {
    user: {
      token: null
    }
  },
  app: {}
}
