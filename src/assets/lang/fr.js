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
      tstFailMessage: 'Votre mail ou votre mot passe n\'est pas reconnu.'
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
      city: 'Ville',
      datasTitle: 'Mes données personnelles'
    },
    not_set: 'Non renseigné'
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
    mock: 'Oh ! Tu aimes les trains toi aussi ?!'
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
