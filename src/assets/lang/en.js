export default {
  application: {
    homePage: {
      linkTo: 'Home'
    },
    auth: {
      username: 'Your mail address',
      password: 'Your password',
      login: 'Login',
      goToSignupTitle: 'New to Luciole ?',
      goToSignup: 'Create an account',
      loginTitle: 'Join the adventure',
      tstFailTitle: 'Fail to login',
      tstFailMessage: 'Your mail or your password is not valid.',
      signupSuccessTitle: 'Well done !',
      signupSuccessMessage: 'You will receive an email to validate your registration.'
    },
    signup: {
      mail: 'Your mail address',
      username: 'Your username',
      password1: 'Your password',
      password2: 'Confirm your password',
      submit: 'Submit',
      cgu: 'Our Terms and Privacy Policy apply in the game.',
      title: 'Welcome on Luciole !'
    },
    sidebar: {
      home: 'Home',
      kingdom: 'My Kingdom',
      buildings: 'Buildings',
      specialists: 'Specialists',
      stats: 'Stats',
      forum: 'Forum',
      contact: 'Contact',
      account: 'My account',
      logout: 'Log out',
      cgu: 'CGU',
      about: 'About',
      refresh: 'Refresh',
      play: 'Play',
      detail: 'Detail'
    },
    contact: {
      toast_success_title: 'Let\'s go !',
      toast_success_text: 'Your message has been send.',
      mail: 'Your mail address',
      subject: 'Subject',
      content: 'Message content',
      submit: 'Send message'
    },
    user: {
      gender: {
        label: 'Gender',
        male: 'Male',
        female: 'Female'
      },
      birthDate: 'Birth date',
      signUpDate: 'Registered since',
      country: 'Country',
      region: 'Region',
      datasTitle: 'My personal datas',
      mail: 'Mail',
      username: 'Username',
      usertag: 'Usertag',
      password: 'Change my password',
      accountTitle: 'My account datas'
    },
    not_set: 'Not specified',
    userpage: {
      editUsername: {
        modalTitle: 'Change your username',
        username: 'Your username',
        submit: 'Apply',
        cancel: 'Cancel'
      },
      editPersonalDatas: {
        modalTitle: 'Update your personal datas',
        birthDate: 'Birth date',
        region: 'Region',
        country: 'Country',
        gender: 'Gender',
        submit: 'Apply',
        cancel: 'Cancel'
      },
      editAvatar: {
        modalTitle: 'Change your avatar',
        submit: 'Apply',
        cancel: 'Cancel'
      }
    }
  },
  date: {
    long: 'MMMM Do, YYYY'
  },
  forms: {
    required: 'Required',
    maxLength: 'Must be %{max} characters or less.',
    numberRequired: 'Must be a number',
    minLength: 'Must be at least %{min}.',
    emailInvalid: 'Invalid email address.',
    mock: 'Oh ! You like trains too ?!',
    usernameLengthInvalid: 'Your username must be between 4 and 20 characters.',
    usernameContentInvalid: 'Your username must contain only numbers and letters.',
    passwordLengthInvalid: 'Your password must be between 8 and 20 characters long.',
    passwordContentInvalid: 'Invalid password.',
    passwordNotEqual: 'Passwords do not match.'
  },
  httpErrors: {
    401: {
      title: 'You are not logged in.',
      message: 'You must reconnect to do this action.'
    },
    403: {
      title: 'Forbidden !',
      message: 'You are not allowed to do this action.'
    },
    500: {
      title: 'Oops, a problem occured',
      message: 'The action has been ignored.'
    },
    other: {
      title: 'Aie, a problem occured',
      message: 'The action has been ignored.'
    }
  }
}
