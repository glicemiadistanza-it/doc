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

const dexcom = [
  {
    text: 'Condividere le letture con xDrip4iOS',
    link: '/documentation/Condividere-le-letture-di-Dexcom-con-xDrip4iOS/condividere-le-letture-di-dexcom-one-g6-con-xdrip4ios-shuggah',
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
      { text: 'Dex', items: dexcom },
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

    docFooter: {
      prev: false,
      next: false,
    },

    returnToTopLabel: 'Torna su',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Passa alla modalità chiara',
    darkModeSwitchTitle: 'Passa alla modalità scura',
    sidebarMenuLabel: 'Menu',
  },
})
