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
  sub: 'Collegamento diretto, follower, Bubble/Miaomiao',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/xdrip' },
{ section: 'sensor',
  title: 'FSL con xDrip4iOS',
  sub: 'Collegamento diretto per iPhone, follower',
  sensors: ['libre'],
  os: ['ios'],
  href: './documentation/fsl/xdrip4ios' },
{ section: 'sensor',
  title: 'Juggluco',
  sub: 'FSL con Juggluco',
  sensors: ['libre'],
  os: ['android'],
  href: './documentation/fsl/juggluco' },
{ section: 'sensor',
  title: 'Dexcom con xDrip+',
  sub: 'Compagno app ufficiale, follower',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/dexcom/xdrip-plus' },
{ section: 'sensor', title: 'xDrip4iOS per iPhone',
  sub: 'Letture su iPhone, follower, Apple Watch',
  sensors: ['libre', 'dexcom'],
  os: ['ios'],
  href: './documentation/xdrip4ios/installare-xdrip4ios' },
{ section: 'sensor', title: 'Dexcom con xDrip4iOS',
  sub: 'Letture su iPhone, follower, Apple Watch',
  sensors: ['dexcom'],
  os: ['ios'],
  href: './documentation/xdrip4ios/letture-dexcom' },
{ section: 'sensor',
  title: 'Dexcom — Telefonino non compatibile',
  sub: 'Android non supportato dall\'app ufficiale',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/dexcom/incompatibile' },
{ section: 'sensor',
  title: 'Medtronic 640/670G',
  sub: 'Glicemie a distanza o su orologio',
  sensors: ['medtronic'],
  os: ['android','ios'],
  href: './documentation/medtronic/640-670g' },
{ section: 'sensor',
  title: 'Gluroo',
  sub: 'Follower per Dexcom e FSL',
  sensors: ['dexcom','libre'],
  os: ['android','ios'],
  href: './documentation/app/gluroo' },
{ section: 'sensor',
  title: 'Sugarmate',
  sub: 'Follower Dexcom, Nightscout, Gluroo',
  sensors: ['dexcom'],
  os: ['android','ios'],
  href: './documentation/app/sugarmate' },

// Smartwatch
{ section: 'watch',
  title: 'Apple Watch',
  sub: 'Via xDrip4iOS o Sugarmate',
  sensors: ['dexcom','libre'],
  os: ['ios'],
  href: './documentation/smartwatch/apple-watch' },
{ section: 'watch',
  title: 'Samsung Watch',
  sub: 'G-Watch, Dexcom',
  sensors: ['dexcom'],
  os: ['android'],
  href: './documentation/smartwatch/samsung' },
{ section: 'watch',
  title: 'Amazfit / Xiaomi',
  sub: 'WatchDrip+ con xDrip+',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android'],
  href: './documentation/smartwatch/amazfit' },
{ section: 'watch',
  title: 'Android Wear OS',
  sub: 'GlucoDataHandler, quadranti xDrip+',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android'],
  href: './documentation/smartwatch/wear-os' },
{ section: 'watch',
  title: 'Fitbit ⚠',
  sub: 'Quadranti terze parti rimossi da Google',
  sensors: ['dexcom','libre'],
  os: ['android'],
  href: './documentation/smartwatch/fitbit',
  warn: true },

// Nightscout & tools
{ section: 'tool',
  title: 'Nightscout',
  sub: 'Setup, aggiornamento, migrazione da Heroku',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/intro' },
{ section: 'tool',
  title: 'Nightscout su cloud',
  sub: 'Google Cloud, Azure, MongoDB Atlas',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/cloud' },
{ section: 'tool',
  title: 'Nightscout gestito',
  sub: 'Nightscout.pro, NS10BE',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/nightscout/gestito' },
{ section: 'tool',
  title: 'Monitor da tavolo',
  sub: 'Ulanzi TC001 e altri display dedicati',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/tools/monitor-tavolo' },
{ section: 'tool',
  title: 'Alexa / Siri',
  sub: 'Comandi vocali per le glicemie',
  sensors: ['dexcom','libre','medtronic'],
  os: ['android','ios'],
  href: './documentation/tools/voice' },
{ section: 'tool',
  title: 'Tidepool',
  sub: 'Condivisione dati con il diabetologo',
  sensors: ['dexcom','libre'],
  os: ['android','ios'],
  href: './documentation/tools/tidepool' },
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
