/**
* The app's constants
* @type {Object}
 */
export default {
  ERRORS: {
    ALREADY_MANAGED: 'LUCIOLE-ERROR-ALREADY-MANAGED'
  },
  LANGUAGE: [
    {key: '1', label: 'fr'},
    {key: '2', label: 'en'}
  ],
  ACTIONS: {
    AUTH: {
      LOG_USER_IN_SUCCESS: 'LOG_USER_IN_SUCCESS',
      LOG_USER_IN_FAILURE: 'LOG_USER_IN_FAILURE',
      DISCONNECT_USER_SUCCESS: 'DISCONNECT_USER_SUCCESS',
      DISCONNECT_USER_FAILURE: 'DISCONNECT_USER_FAILURE',
      OPEN_LOGIN_MODAL: 'OPEN_LOGIN_MODAL',
      CLOSE_LOGIN_MODAL: 'CLOSE_LOGIN_MODAL',
      OPEN_SIGNIN_MODAL: 'OPEN_SIGNIN_MODAL',
      CLOSE_SIGNIN_MODAL: 'CLOSE_SIGNIN_MODAL',
      SIGN_USER_IN_SUCCESS: 'SIGN_USER_IN_SUCCESS'
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
    },
    USERPAGE: {
      OPEN_EDITUSERNAME_MODAL: 'OPEN_EDITUSERNAME_MODAL',
      CLOSE_EDITUSERNAME_MODAL: 'CLOSE_EDITUSERNAME_MODAL',
      EDITUSERNAME: 'EDITUSERNAME',
      OPEN_EDITPERSONALDATAS_MODAL: 'OPEN_EDITPERSONALDATAS_MODAL',
      CLOSE_EDITPERSONALDATAS_MODAL: 'CLOSE_EDITPERSONALDATAS_MODAL',
      EDITPERSONALDATAS: 'EDITPERSONALDATAS',
      OPEN_EDITAVATAR_MODAL: 'OPEN_EDITAVATAR_MODAL',
      CLOSE_EDITAVATAR_MODAL: 'CLOSE_EDITAVATAR_MODAL',
      EDITAVATAR: 'EDITAVATAR',
      GETAVATARLIST: 'GETAVATARLIST'
    }
  },
  USER: {
    GENDER: {
      1: 'application.user.gender.male',
      2: 'application.user.gender.female'
    },
    AVATAR: {
      DEFAULT: 'tumblr_mdj13ty0p91r4nmedo1_1280.jpg'
    }
  },
  KINGDOM: {
    RESOURCES_LIST: ['food', 'wood', 'planks', 'stone', 'chippedStone',
      'ironOre', 'ironIngot', 'goldOre', 'goldIngot', 'pelt', 'leather', 'horse'],
    RESOURCES: {
      FOOD: 'food',
      WOOD: 'wood',
      PLANKS: 'planks',
      STONE: 'stone',
      CHIPPED_STONE: 'chippedStone',
      IRON_ORE: 'ironOre',
      IRON_INGOT: 'ironIngot',
      GOLD_ORE: 'goldOre',
      GOLD_INGOT: 'goldIngot',
      PELT: 'pelt',
      LEATHER: 'leather',
      HORSE: 'horse'
    }
  },
  RESOURCES: {
    AMOUNT: 'Amount',
    PRODUCTION: 'ProductionHistory',
    STORAGE: 'StorageHistory',
    INTERVAL: 'HarvestInterval',
    LATEST: 'latest',
    HARVEST: 'Harvest'
  }
}
