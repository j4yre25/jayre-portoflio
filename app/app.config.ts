export default defineAppConfig({
  global: {
    picture: {
      dark: 'img/profile-pic.jpg',
      light: 'img/profile-pic.jpg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/jan-peter-reillo',
    email: 'reillojan@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/jan-peter-reillo-3114281a9/',
      'target': '_blank',
      'aria-label': 'LinkedIn Profile'
    }, {
      'icon': 'i-simple-icons-facebook',
      'to': 'https://www.facebook.com/prkrptrb/',
      'target': '_blank',
      'aria-label': 'Facebook Profile'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/j4yre25',
      'target': '_blank',
      'aria-label': 'GitHub Profile'
    }]
  }
})
