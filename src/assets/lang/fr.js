export default {
  application: {
    homePage: {
      linkTo: 'Accueil'
    },
    auth: {
      username: 'Votre adresse mail',
      password: 'Votre mot de passe',
      login: 'Me connecter',
      goToSignupTitle: 'Pas encore inscrit ?',
      goToSignup: 'Je m \'inscris !',
      loginTitle: 'Rejoignez l\'aventure',
      tstFailTitle: 'Impossible de vous connecter',
      tstFailMessage: 'Votre mail ou votre mot passe n\'est pas reconnu.',
      signupSuccessTitle: 'Inscription réussie !',
      signupSuccessMessage: 'Vous allez recevoir un mail afin de valider votre inscription.'
    },
    signup: {
      mail: 'Votre adresse mail',
      username: 'Votre pseudo',
      password1: 'Saisissez mot de passe',
      password2: 'Confirmation de votre mot de passe',
      submit: 'Valider',
      cgu: 'Nos CGU et notre Politique de confidentialité s\'appliquent dans le jeu.',
      title: 'Bienvenue sur Luciole !'
    },
    sidebar: {
      home: 'Accueil',
      kingdom: 'Mon Royaume',
      buildings: 'Bâtiments',
      specialists: 'Spécialistes',
      stats: 'Statistiques',
      forum: 'Forum',
      contact: 'Contact',
      account: 'Mon compte',
      logout: 'Me déconnecter',
      cgu: 'CGU',
      about: 'A propos',
      refresh: 'Rafraichir',
      play: 'Jouer'
    },
    contact: {
      toast_success_title: 'C\'est parti !',
      toast_success_text: 'Votre message a bien été envoyé.',
      mail: 'Votre adresse mail',
      subject: 'Sujet',
      content: 'Contenu du message',
      submit: 'Envoyer mon message'
    },
    user: {
      gender: {
        label: 'Genre',
        male: 'Homme',
        female: 'Femme'
      },
      birthDate: 'Date de naissance',
      signUpDate: 'Inscrit depuis le',
      country: 'Pays',
      region: 'Région',
      datasTitle: 'Mes données personnelles',
      mail: 'E-mail',
      username: 'Pseudo',
      usertag: 'Usertag',
      password: 'Changer mon mot de passe',
      accountTitle: 'Mes informations de compte'
    },
    not_set: 'Non renseigné',
    userpage: {
      editUsername: {
        modalTitle: 'Modifier votre pseudo',
        username: 'Votre pseudo',
        submit: 'Sauvegarder',
        cancel: 'Annuler'
      },
      editPersonalDatas: {
        modalTitle: 'Modifier vos données personnelles',
        submit: 'Sauvegarder',
        cancel: 'Annuler',
        birthDate: 'Date de naissance',
        region: 'Région',
        country: 'Pays',
        gender: 'Genre'
      }
    }
  },
  date: {
    long: 'D MMMM YYYY'
  },
  forms: {
    required: 'Obligatoire',
    maxLength: 'Maximum %{max} caractères.',
    numberRequired: 'Doit être un nombre.',
    minLength: 'Minimum %{min} caractères.',
    emailInvalid: 'Ne respecte le format d\'une adresse mail.',
    mock: 'Oh ! Tu aimes les trains toi aussi ?!',
    usernameLengthInvalid: 'Votre pseudo doit faire entre 4 et 20 caractères.',
    usernameContentInvalid: 'Votre pseudo doit contenir uniquement des chiffres et des lettres.',
    passwordLengthInvalid: 'Votre mot de passe doit faire entre 8 et 20 caractères.',
    passwordContentInvalid: 'Ne respecte le format d\'un mot de passe.',
    passwordNotEqual: 'Les mots de passe ne correspondent pas.'
  },
  httpErrors: {
    401: {
      title: 'Vous n\'êtes pas connecté.',
      message: 'Reconnectez vous pour effectuer cette action.'
    },
    403: {
      title: 'Non autorisé',
      message: 'Vous n\'êtes pas autorisé à effectuer cette action.'
    },
    500: {
      title: 'Oops, un problème est survenu',
      message: 'L\'action n\'a pas été prise en compte.'
    },
    other: {
      title: 'Aie, un problème est survenu',
      message: 'L\'action n\'a pas été prise en compte.'
    }
  }
}
