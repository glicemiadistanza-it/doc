import { defineConfig } from 'vitepress'

// ── Add pages here ──────────────────────────────────────────────────────────
const articoli = [
  {
    text: "L'evoluzione della terapia insulinica con microinfusore",
    link: '/levoluzione-della-terapia-insulinica-con-microinfusore',
  },
  {
    text: 'La scelta del microinfusore',
    link: '/la-scelta-del-microinfusore',
  },
]

const xdrip = [
  {
    text: 'xDrip',
    link: '/documentation/xdrip/',
  },
]

const xdrip4ios = [
  {
    text: 'Installare xDrip4iOS',
    link: '/documentation/xdrip4ios/installare-xdrip4ios',
  },
  {
    text: 'xDrip4iOS con sensori Dex',
    link: '/documentation/xdrip4ios/letture-dexcom',
  },
]

const nightscout = [
  {
    text: 'Nightscout',
    link: '/documentation/nightscout/',
  },
]
// ────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  lang: 'it',
  title: 'Glicemiadistanza',
  description: 'Documentazione italiana per il gruppo Facebook Glicemiadistanza',
  base: '/doc/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/doc/images/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'Glicemiadistanza',

    sidebar: [
      { text: 'Articoli', items: articoli },
      { text: 'xDrip+', items: xdrip },
      { text: 'xDrip4iOS', items: xdrip4ios },
      { text: 'Nightscout', items: nightscout },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/glicemiadistanza-it/doc' },
      { icon: 'facebook', link: 'https://www.facebook.com/groups/nightscout' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Cerca',
            buttonAriaLabel: 'Cerca nella documentazione',
          },
          modal: {
            noResultsText: 'Nessun risultato per',
            resetButtonTitle: 'Cancella la ricerca',
            footer: {
              selectText: 'per selezionare',
              navigateText: 'per navigare',
              closeText: 'per chiudere',
            },
          },
        },
      },
    },

    footer: {
      message: 'Documentazione del gruppo Facebook Glicemiadistanza',
      copyright:
        "© Glicemiadistanza Admins — L'utilizzo è soggetto all'assunzione di esclusiva responsabilità personale.",
    },

    editLink: {
      pattern: 'https://github.com/glicemiadistanza-it/doc/edit/main/docs/:path',
      text: 'Modifica su GitHub',
    },

    lastUpdated: {
      text: 'Aggiornato il',
      formatOptions: { dateStyle: 'medium' },
    },

    outline: {
      level: [2, 3],
      label: 'In questa pagina',
    },

    returnToTopLabel: 'Torna su',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Passa alla modalità chiara',
    darkModeSwitchTitle: 'Passa alla modalità scura',
    sidebarMenuLabel: 'Menu',
  },
})
