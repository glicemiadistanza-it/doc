---
layout: doc
---

# Diabete, glicemia a distanza e nuove tecnologie

<div class="flash-image-left">
  <img src="/images/glicemiadistanza_260x260.png" alt="Descrizione immagine">
    <div class="flash-image-text">
    WeAreNotWaiting
    <br><br><br>
    <div class="flash-right">
    <br><br><br><br>
    Gruppo Facebook:<br> Diabete, glicemia a distanza e nuove tecnologie</div>
  </div>
</div>


[Diabete, glicemia a distanza e nuove tecnologie](https://www.facebook.com/groups/nightscout/) nasce come gruppo Facebook nell’Agosto 2017 con lo scopo di informare ed assistere le persone affette da diabete tipo 1 sulle nuove tecnologie a disposizione. In questi anni abbiamo steso e aggiornato numerose guide utili alla visione a distanza delle glicemie con i sensori attualmente in commercio in Italia, totalmente in maniera gratuita grazie al principio che ci lega da sempre, cioè quello nato dalla [Nightscout Foundation](https://www.nightscoutfoundation.org/): WeAreNotWaiting.

<script setup>
import { ref, computed } from 'vue'
const activeSensor = ref('all')
const activeOs     = ref('all')
// ───  AGGIUNGI/MODIFICA GUIDE QUI ────────
// sensors: uno o più tra 'libre' | 'dexcom' | 'medtronic'
// os:      uno o più tra 'android' | 'ios'

const guides = [

// Sensori & app
{ section: 'sensor',
  title: 'FSL con xDrip+',
  sub: 'Collegamento diretto FSL 2 via Bluetooth con xDrip+',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/xdrip/l2-xdrip-collegamento-diretto' },
{ section: 'sensor',
  title: 'FSL con Miaomiao / Bubble',
  sub: 'Trasmettitore esterno per FSL 1 e FSL 2 con xDrip+',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/xdrip/fsl2-miaomiao-bubble' },
{ section: 'sensor',
  title: 'xDrip+ follower FSL',
  sub: 'Letture FSL 2 e 3 via cloud con xDrip+',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/xdrip/xdrip-follower-fsl' },
{ section: 'sensor',
  title: 'Calibrare FSL con xDrip+',
  sub: 'Calibrazione del sensore FSL in xDrip+',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/xdrip/calibrare-fsl-xdrip' },
{ section: 'sensor',
  title: 'Algoritmo esterno OOP2',
  sub: 'App OOP2 per decodifica FSL 2 in xDrip+',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/xdrip/xdrip-algoritmo-esterno' },
{ section: 'sensor',
  title: 'FSL con xDrip4iOS',
  sub: 'Collegamento diretto FSL 2 su iPhone con xDrip4iOS',
  sensors: ['libre'],
  os: ['ios'],
  href: './documentation/xdrip4ios/fsl2-xdrip4ios-collegamento-diretto' },
{ section: 'sensor',
  title: 'Juggluco',
  sub: 'FSL 2 con Juggluco su Android',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/juggluco/juggluco-android' },
{ section: 'sensor',
  title: 'Juggluco + xDrip+',
  sub: 'FSL 2 con Juggluco e invio dati a xDrip+',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/juggluco/juggluco-xdrip' },
{ section: 'sensor',
  title: 'Dexcom con xDrip+',
  sub: 'G5 / G6 / ONE con xDrip+ su Android',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/xdrip/dexcomg5g6-e-xdrip' },
{ section: 'sensor',
  title: 'Dexcom compagna di xDrip+',
  sub: 'App Dexcom come compagna (companion) di xDrip+',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/xdrip/dexcom-g6-compagna-di-xdrip' },
{ section: 'sensor',
  title: 'xDrip+ follower Dexcom',
  sub: 'Letture Dexcom G5 / G6 tramite Dexcom Share',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/xdrip/xdrip-follower-dexcom' },
{ section: 'sensor',
  title: 'Dexcom — Telefonino non compatibile',
  sub: 'App Dexcom modificata per Android non supportati',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/xdrip/dexcom-g5-g6-app-modificata' },
{ section: 'sensor',
  title: 'xDrip4iOS per iPhone',
  sub: 'Installazione xDrip4iOS su iPhone',
  sensors: ['libre', 'dexcom'],
  os: ['ios'],
  href: './documentation/xdrip4ios/installare-xdrip4ios' },
{ section: 'sensor',
  title: 'Dexcom con xDrip4iOS',
  sub: 'Letture Dexcom su iPhone con xDrip4iOS',
  sensors: ['dexcom'],
  os: ['ios'],
  href: './documentation/xdrip4ios/letture-dexcom' },
{ section: 'sensor',
  title: 'xDrip+ come compagno',
  sub: 'xDrip+ affiancato all\'app master ufficiale',
  sensors: ['dexcom', 'libre', 'medtronic'],
  os: ['android'],
  href: './documentation/xdrip/xdrip-compagno' },
{ section: 'sensor',
  title: 'CareLink con xDrip+',
  sub: 'Follower CareLink per Medtronic con xDrip+',
  sensors: ['medtronic'],
  os: ['android'],
  href: './documentation/xdrip/carelink-con-xdrip' },
{ section: 'sensor',
  title: 'Medtronic 640/670G',
  sub: 'Glicemie a distanza o su orologio',
  sensors: ['medtronic'],
  os: ['android','ios'],
  href: './documentation/medtronic/medtronic-640-670-g-glicemie-a-distanza-o-su-orologio' },
{ section: 'sensor',
  title: 'Gluroo',
  sub: 'Follower per Dexcom e FSL, alternativa a Nightscout',
  sensors: ['dexcom','libre'],
  os: ['android','ios'],
  href: './documentation/gluroo/gluroo' },
{ section: 'sensor',
  title: 'Sugarmate',
  sub: 'Follower Dexcom, Nightscout, Gluroo',
  sensors: ['dexcom'],
  os: ['android','ios'],
  href: './documentation/sugarmate/sugarmate-follower-di-dexcom-nightscout-gluroo' },
{ section: 'sensor',
  title: 'Installare xDrip+',
  sub: 'Guida base di installazione xDrip+ per Android',
  sensors: ['dexcom', 'libre', 'medtronic'],
  os: ['android'],
  href: './documentation/xdrip/installare-xdrip-android' },

// Smartwatch
{ section: 'watch',
  title: 'Apple Watch',
  sub: 'Visualizzare Nightscout su Apple Watch',
  sensors: ['dexcom','libre'],
  os: ['ios'],
  href: './documentation/apple-watch/come-visualizzare-la-pagina-nightscout-su-apple-watch' },
{ section: 'watch',
  title: 'Sugarmate su Apple Watch',
  sub: 'Glicemia Dexcom G5 su Apple Watch con Sugarmate',
  sensors: ['dexcom'],
  os: ['ios'],
  href: './documentation/sugarmate/sugarmate-glicemie-di-dexcom-g5-su-apple-watch' },
{ section: 'watch',
  title: 'Amazfit con xDrip+',
  sub: 'Glicemia su smartwatch Amazfit con xDrip+',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android'],
  href: './documentation/amazfit/amazfit-con-xdrip' },
{ section: 'watch',
  title: 'Amazfit Bip Lite',
  sub: 'Glicemia su Amazfit Bip Lite con xDrip+',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/amazfit/amazfit-bip-lite-con-xdrip' },
{ section: 'watch',
  title: 'Amazfit ZEPP OS',
  sub: 'Glicemia su Amazfit con sistema operativo ZEPP OS',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/amazfit/smartwatch-amazfit-zepp-os-1' },
{ section: 'watch',
  title: 'WatchDrip+',
  sub: 'Amazfit e Xiaomi Mi Band con WatchDrip+ e xDrip+',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/xdrip/xdrip-e-watchdrip' },
{ section: 'watch',
  title: 'Xiaomi Mi Band 2-4',
  sub: 'Mi Band 2, 3 e 4 con xDrip+',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/xiaomi/mi-band234-con-xdrip' },
{ section: 'watch',
  title: 'Xiaomi Mi Band 4-6',
  sub: 'Mi Band 4, 5 e 6 con xDrip+',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/xiaomi/xiaomi-miband-con-xdrip' },
{ section: 'watch',
  title: 'Garmin',
  sub: 'Glicemia sui dispositivi Garmin',
  sensors: ['dexcom','libre'],
  os: ['android','ios'],
  href: './documentation/garmin/come-leggere-la-glicemia-con-i-dispositivi-garmin-1' },
{ section: 'watch',
  title: 'Glicemia su Wear OS',
  sub: 'Dexcom, xDrip+ e Glimp su smartwatch Android Wear',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/xdrip/dexcom-xdrip-glimp-on-wear-watch' },
{ section: 'watch',
  title: 'Fitbit ⚠',
  sub: 'Quadranti terze parti rimossi da Google',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/fitbit/fitbit-le-glicemie-di-dexcom-spike-xdrip-o-nightscout-su-smartwach-versa-e-ionic',
  warn: true },

// Nightscout & tools
{ section: 'tool',
  title: 'Nightscout',
  sub: 'Aggiornamento e migrazione da Heroku',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/heroku-aggiornare-nightscout' },
{ section: 'tool',
  title: 'Nightscout su Google Cloud',
  sub: 'Installazione Nightscout su Google Cloud con MongoDB Atlas',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/nightscoutgooglecloud' },
{ section: 'tool',
  title: 'Nightscout su Azure',
  sub: 'Installazione Nightscout su Azure con MongoDB Atlas',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/nightscoutazureatlas' },
{ section: 'tool',
  title: 'Nightscout su Ionos',
  sub: 'Installazione Nightscout su Ionos',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/nightscoutionos' },
{ section: 'tool',
  title: 'Nightscout.pro',
  sub: 'Nightscout gestito con abbonamento Nightscout.pro',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/nightscoutpro' },
{ section: 'tool',
  title: 'Nightscout su Zehn.be',
  sub: 'Nightscout gestito con abbonamento Zehn.be',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/nightscoutzehnbe' },
{ section: 'tool',
  title: 'Monitor da tavolo',
  sub: 'Display M5Stack dedicato per Nightscout',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/monitor-nightscout-m5stack' },
{ section: 'tool',
  title: 'Nightscout Clock',
  sub: 'Monitor Nightscout con orologio da tavolo',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/nightscoutclock' },
{ section: 'tool',
  title: 'Alexa e Nightscout',
  sub: 'Glicemia in italiano con Alexa e Nightscout',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/alexa-siri/alexa-e-nightscout-in-italiano' },
{ section: 'tool',
  title: 'Alexa con Dexcom / xDrip+',
  sub: 'Comandi Alexa con app Dexcom G5 o xDrip+',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/alexa-siri/alexa-con-app-dexcom-g5-o-xdrip' },
{ section: 'tool',
  title: 'Siri e Nightscout',
  sub: 'Comandi Siri per le glicemie su iPhone e Apple Watch',
  sensors: ['dexcom','libre','medtronic'],
  os: ['ios'],
  href: './documentation/alexa-siri/collegare-siri-a-nightscout-iphone-e-apple-watch' },
{ section: 'tool',
  title: 'Sentinel Pro',
  sub: 'Guida utente Sentinel Pro',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/sentinel/sentinel-pro-userguide1' },
{ section: 'tool',
  title: 'Sentinel One',
  sub: 'Guida utente Sentinel One',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/sentinel/sentineloneuserguide1' },
{ section: 'tool',
  title: 'Tidepool',
  sub: 'Condivisione dati xDrip+ con il diabetologo',
  sensors: ['dexcom','libre'],
  os: ['android','ios'],
  href: './documentation/xdrip/condividere-i-dati-di-xdrip-con-tidepool' },
{ section: 'tool',
  title: 'Master/Follower xDrip+',
  sub: 'Condivisione glicemia tra telefoni Android con xDrip+ Sync',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/xdrip/masterfollower' },
{ section: 'tool',
  title: 'Predizioni xDrip+',
  sub: 'Usare le predizioni glicemiche in xDrip+',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/xdrip/xdrip-predizioni' },
{ section: 'tool',
  title: 'Risparmio energetico xDrip+',
  sub: 'Disabilitare il risparmio energetico per xDrip+',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android'],
  href: './documentation/xdrip/disabilitare-risparmio-energetico-xdrip' },
{ section: 'tool',
  title: 'Installare ADB Debug',
  sub: 'Installazione di ADB per debug su Android',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android'],
  href: './documentation/android/installare-adb-debug' },
{ section: 'tool',
  title: 'ADB su Huawei Watch 2',
  sub: 'Abilitare ADB sullo smartwatch Huawei Watch 2',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/android/abilitare-adb-sullo-smartwatch-huawei-watch-2' },
]
// ─────────────────────────────────────────────────────────────────────────────

function matches(item) {
  const sOk = activeSensor.value === 'all' || item.sensors.includes(activeSensor.value)
  const oOk = activeOs.value     === 'all' || item.os.includes(activeOs.value)
  return sOk && oOk
}

const bySection = (s) => guides.filter(g => g.section === s && matches(g))

function osBadge(os) {
  if (os.includes('android') && os.includes('ios')) return { label: 'Android + iPhone', cls: 'b-both' }
  if (os.includes('android')) return { label: 'Android', cls: 'b-android' }
  return { label: 'iPhone', cls: 'b-ios' }
}
</script>
</br>

# Indice guide

Scegli il tuo **sensore** e il tuo **telefono** per vedere subito le guide rilevanti.

<div class="filter-bar">
  <div class="filter-group">
    <span class="filter-label">Sensore</span>
    <button v-for="s in [{val:'all',label:'Tutti'},{val:'libre',label:'Libre'},{val:'dexcom',label:'Dexcom'},{val:'medtronic',label:'Medtronic'}]"
      :key="s.val" class="pill" :class="{active: activeSensor===s.val}" @click="activeSensor=s.val">{{ s.label }}</button>
  </div>
  <div class="filter-group">
    <span class="filter-label">Telefono</span>
    <button v-for="o in [{val:'all',label:'Tutti'},{val:'android',label:'Android'},{val:'ios',label:'iPhone'}]"
      :key="o.val" class="pill" :class="['os-'+o.val, {active: activeOs===o.val}]" @click="activeOs=o.val">{{ o.label }}</button>
  </div>
</div>

<h2 class="section-label">Sensori e app di lettura</h2>
<div class="card-grid">
  <a v-for="item in bySection('sensor')" :key="item.href"
     :href="item.href" class="guide-card" :class="{dimmed: !matches(item), warn: item.warn}">
    <div class="card-title">{{ item.title }}</div>
    <div class="card-sub">{{ item.sub }}</div>
    <span class="badge" :class="osBadge(item.os).cls">{{ osBadge(item.os).label }}</span>
  </a>
</div>

<h2 class="section-label">Smartwatch</h2>
<div class="card-grid">
  <a v-for="item in bySection('watch')" :key="item.href"
     :href="item.href" class="guide-card" :class="{dimmed: !matches(item), warn: item.warn}">
    <div class="card-title">{{ item.title }}</div>
    <div class="card-sub">{{ item.sub }}</div>
    <span class="badge" :class="osBadge(item.os).cls">{{ osBadge(item.os).label }}</span>
  </a>
</div>

<h2 class="section-label">Nightscout e strumenti avanzati</h2>
<div class="card-grid">
  <a v-for="item in bySection('tool')" :key="item.href"
     :href="item.href" class="guide-card" :class="{dimmed: !matches(item)}">
    <div class="card-title">{{ item.title }}</div>
    <div class="card-sub">{{ item.sub }}</div>
    <span class="badge" :class="osBadge(item.os).cls">{{ osBadge(item.os).label }}</span>
  </a>
</div>

<style scoped>
.filter-bar {
  display: flex; flex-wrap: wrap; gap: 12px 24px;
  margin: 1.5rem 0 2rem;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
}
.filter-group { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.filter-label { font-size: 12px; color: var(--vp-c-text-3); margin-right: 2px; }
.pill {
  font-size: 12px; padding: 4px 12px; border-radius: 99px;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg);
  color: var(--vp-c-text-2); cursor: pointer; transition: all .15s; line-height: 1.5;
}
.pill:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-text-1); }
.pill.active { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); font-weight: 500; }
.pill.os-android.active { background:#e8f5e9; color:#2e7d32; border-color:#66bb6a; }
.pill.os-ios.active     { background:#e3f2fd; color:#1565c0; border-color:#64b5f6; }
.section-label {
  font-size: 11px !important; font-weight: 600; letter-spacing: .07em;
  text-transform: uppercase; color: var(--vp-c-text-3);
  margin: 2rem 0 .75rem !important; border: none !important; padding: 0 !important;
}
.notice {
  font-size: 13px; margin-bottom: .75rem;
  padding: 8px 12px; border-radius: 8px;
  background: var(--vp-c-warning-soft, #fef9c3);
  color: var(--vp-c-warning-1, #92400e);
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px; margin-bottom: .5rem;
}
.guide-card {
  display: flex; flex-direction: column; gap: 5px;
  padding: 12px 14px; border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none; color: inherit;
  transition: border-color .15s, opacity .2s;
}
.guide-card:hover { border-color: var(--vp-c-brand-1); text-decoration: none; }
.guide-card.dimmed { opacity: .2; pointer-events: none; }
.guide-card.warn   { border-color: var(--vp-c-warning-1, #d97706); }
.card-title { font-size: 14px; font-weight: 500; }
.card-sub   { font-size: 12px; color: var(--vp-c-text-2); line-height: 1.4; flex: 1; }
.badge { font-size: 10px; padding: 2px 7px; border-radius: 99px; font-weight: 500; align-self: flex-start; margin-top: 2px; }
.b-android { background:#e8f5e9; color:#2e7d32; }
.b-ios     { background:#e3f2fd; color:#1565c0; }
.b-both    { background:#f3e5f5; color:#6a1b9a; }
</style>
