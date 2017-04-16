/**
* The app's constants
* @type {Object}
 */
export default {
  LANGUAGE: [
    {key: '1', label: 'fr'},
    {key: '2', label: 'en'}
  ],
  ACTIONS: {
    AUTH: {
      LOG_USER_IN_SUCCESS: 'LOG_USER_IN_SUCCESS',
      LOG_USER_IN_FAILURE: 'LOG_USER_IN_FAILURE',
      DISCONNECT_USER_SUCCESS: 'DISCONNECT_USER_SUCCESS',
      DISCONNECT_USER_FAILURE: 'DISCONNECT_USER_FAILURE'
    },
    SIDEBAR: {
      OPEN_SIDEBAR: 'OPEN_SIDEBAR',
      CLOSE_SIDEBAR: 'CLOSE_SIDEBAR'
    },
    RESOURCE: {
      GET_RESOURCES_SUCCESS: 'GET_RESOURCES_SUCCESS'
    },
    USER: {
      GET_USER_INFORMATIONS: 'GET_USER_INFORMATIONS'
    },
    MAIN: {
      OPEN_LANGUAGE_CARD: 'OPEN_LANGUAGE_CARD',
      CLOSE_LANGUAGE_CARD: 'CLOSE_LANGUAGE_CARD'
    },
    APP: {
      DO_NOTHING: 'DO_NOTHING'
    }
  }
}
