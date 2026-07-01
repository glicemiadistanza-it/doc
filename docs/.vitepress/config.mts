import { defineConfig } from 'vitepress'

// ── Add pages here ──────────────────────────────────────────────────────────
const articoli = [
  {
    text: "L'evoluzione della terapia insulinica con microinfusore",
    link: '/articles/levoluzione-della-terapia-insulinica-con-microinfusore',
  },
  {
    text: 'La scelta del microinfusore',
    link: '/articles/la-scelta-del-microinfusore',
  },
]

const xdrip = [
  { text: 'Calibrare il FSL con xDrip+', link: '/documentation/xdrip/calibrare-fsl-xdrip' },
  { text: 'CareLink follower con xDrip+', link: '/documentation/xdrip/carelink-con-xdrip' },
  { text: 'Condividere i dati di xDrip+ con Tidepool', link: '/documentation/xdrip/condividere-i-dati-di-xdrip-con-tidepool' },
  { text: 'App Dexcom modificata – Installazione e funzionalità', link: '/documentation/xdrip/dexcom-g5-g6-app-modificata' },
  { text: 'App Dexcom, Minimed o CamAPS come compagna di xDrip+', link: '/documentation/xdrip/dexcom-g6-compagna-di-xdrip' },
  { text: 'Glicemia al polso con app Dexcom master, xDrip+, Glimp', link: '/documentation/xdrip/dexcom-xdrip-glimp-on-wear-watch' },
  { text: 'Dexcom G5 / G6 / ONE con xDrip+', link: '/documentation/xdrip/dexcomg5g6-e-xdrip' },
  { text: 'Disabilitare il risparmio energetico per xDrip+', link: '/documentation/xdrip/disabilitare-risparmio-energetico-xdrip' },
  { text: 'Passare da FSL 1 a FSL 2 con Miaomiao o Bubble', link: '/documentation/xdrip/fsl2-miaomiao-bubble' },
  { text: 'Installare xDrip+ per Android', link: '/documentation/xdrip/installare-xdrip-android' },
  { text: 'Ricevere le letture dal FSL 2 con xDrip+', link: '/documentation/xdrip/l2-xdrip-collegamento-diretto' },
  { text: 'Master/Follower con xDrip+', link: '/documentation/xdrip/masterfollower' },
  { text: 'Utilizzo di un algoritmo esterno con xDrip+', link: '/documentation/xdrip/xdrip-algoritmo-esterno' },
  { text: 'xDrip+ come compagno dell\'app MASTER', link: '/documentation/xdrip/xdrip-compagno' },
  { text: 'Smartband Xiaomi e smartwatch Amazfit con xDrip+', link: '/documentation/xdrip/xdrip-e-watchdrip' },
  { text: 'xDrip+ come follower di Dexcom G5 e G6', link: '/documentation/xdrip/xdrip-follower-dexcom' },
  { text: 'xDrip+ follower FSL 2 e 3', link: '/documentation/xdrip/xdrip-follower-fsl' },
  { text: 'Usare le predizioni con xDrip+', link: '/documentation/xdrip/xdrip-predizioni' },
]

const xdrip4ios = [
  { text: 'Installare xDrip4iOS', link: '/documentation/xdrip4ios/installare-xdrip4ios' },
  { text: 'xDrip4iOS con sensori Dex', link: '/documentation/xdrip4ios/letture-dexcom' },
  { text: 'FSL 2 con xDrip4iOS – Collegamento diretto', link: '/documentation/xdrip4ios/fsl2-xdrip4ios-collegamento-diretto' },
]

const nightscout = [
  { text: 'Nightscout – Aggiornamento con Heroku', link: '/documentation/nightscout/heroku-aggiornare-nightscout' },
  { text: 'Monitor Nightscout con M5Stack', link: '/documentation/nightscout/monitor-nightscout-m5stack' },
  { text: 'Nightscout su Azure + Atlas', link: '/documentation/nightscout/nightscoutazureatlas' },
  { text: 'Monitor Nightscout Clock', link: '/documentation/nightscout/nightscoutclock' },
  { text: 'Nightscout su Google Cloud', link: '/documentation/nightscout/nightscoutgooglecloud' },
  { text: 'Nightscout su Ionos', link: '/documentation/nightscout/nightscoutionos' },
  { text: 'Nightscout Pro – Abbonamento gestito', link: '/documentation/nightscout/nightscoutpro' },
  { text: 'Nightscout su Zehn.be – Abbonamento gestito', link: '/documentation/nightscout/nightscoutzehnbe' },
]

const amazfit = [
  { text: 'Amazfit Bip Lite con xDrip+', link: '/documentation/amazfit/amazfit-bip-lite-con-xdrip' },
  { text: 'Amazfit con xDrip+', link: '/documentation/amazfit/amazfit-con-xdrip' },
  { text: 'Smartwatch Amazfit con sistema operativo ZEPP OS', link: '/documentation/amazfit/smartwatch-amazfit-zepp-os-1' },
]

const fitbit = [
  { text: 'Fitbit: Le glicemie di Dexcom, xDrip+ o Nightscout', link: '/documentation/fitbit/fitbit-le-glicemie-di-dexcom-spike-xdrip-o-nightscout-su-smartwach-versa-e-ionic' },
]

const garmin = [
  { text: 'Come leggere la glicemia con i dispositivi Garmin', link: '/documentation/garmin/come-leggere-la-glicemia-con-i-dispositivi-garmin-1' },
]

const xiaomi = [
  { text: 'Xiaomi MiBand 2, 3 e 4 con xDrip+', link: '/documentation/xiaomi/mi-band234-con-xdrip' },
  { text: 'Xiaomi MiBand 4, 5 e 6 con xDrip+', link: '/documentation/xiaomi/xiaomi-miband-con-xdrip' },
]

const juggluco = [
  { text: 'Juggluco per Android con FSL 2', link: '/documentation/juggluco/juggluco-android' },
  { text: 'Juggluco per Android con FSL 2 e xDrip+', link: '/documentation/juggluco/juggluco-xdrip' },
]

const gluroo = [
  { text: 'Gluroo come sostituto di Nightscout', link: '/documentation/gluroo/gluroo' },
]

const sugarmate = [
  { text: 'Sugarmate follower di Dexcom, Nightscout e Gluroo', link: '/documentation/sugarmate/sugarmate-follower-di-dexcom-nightscout-gluroo' },
  { text: 'Sugarmate: glicemia Dexcom G5 su Apple Watch', link: '/documentation/sugarmate/sugarmate-glicemie-di-dexcom-g5-su-apple-watch' },
]

const sentinel = [
  { text: 'Sentinel Pro – Guida utente', link: '/documentation/sentinel/sentinel-pro-userguide1' },
  { text: 'Sentinel One – Guida utente', link: '/documentation/sentinel/sentineloneuserguide1' },
]

const medtronic = [
  { text: 'Medtronic 640/670 G – Glicemie a distanza o su orologio', link: '/documentation/medtronic/medtronic-640-670-g-glicemie-a-distanza-o-su-orologio' },
]

const alexa_siri = [
  { text: 'Alexa con app Dexcom G5 o xDrip+', link: '/documentation/alexa-siri/alexa-con-app-dexcom-g5-o-xdrip' },
  { text: 'Alexa e Nightscout in italiano', link: '/documentation/alexa-siri/alexa-e-nightscout-in-italiano' },
  { text: 'Collegare Siri a Nightscout – iPhone e Apple Watch', link: '/documentation/alexa-siri/collegare-siri-a-nightscout-iphone-e-apple-watch' },
]

const apple_watch = [
  { text: 'Visualizzare Nightscout su Apple Watch', link: '/documentation/apple-watch/come-visualizzare-la-pagina-nightscout-su-apple-watch' },
]

const android = [
  { text: 'Abilitare ADB sullo smartwatch Huawei Watch 2', link: '/documentation/android/abilitare-adb-sullo-smartwatch-huawei-watch-2' },
  { text: 'Installare ADB Debug', link: '/documentation/android/installare-adb-debug' },
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

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chi siamo', link: '/chi-siamo' },
    ],

    sidebar: [
      { text: 'Articoli', items: articoli },
      { text: 'xDrip+', items: xdrip },
      { text: 'xDrip4iOS', items: xdrip4ios },
      { text: 'Nightscout', items: nightscout },
      { text: 'Amazfit', items: amazfit },
      { text: 'Fitbit', items: fitbit },
      { text: 'Garmin', items: garmin },
      { text: 'Xiaomi / Mi Band', items: xiaomi },
      { text: 'Juggluco', items: juggluco },
      { text: 'Gluroo', items: gluroo },
      { text: 'Sugarmate', items: sugarmate },
      { text: 'Sentinel', items: sentinel },
      { text: 'Medtronic', items: medtronic },
      { text: 'Alexa / Siri', items: alexa_siri },
      { text: 'Apple Watch', items: apple_watch },
      { text: 'Android / ADB', items: android },
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
