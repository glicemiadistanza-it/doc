# Redirect dal vecchio sito WordPress

`redirects.json` mappa ogni vecchio slug del sito WordPress (`https://www.glicemiadistanza.it/<slug>/`)
alla pagina corrispondente del sito VitePress. Le chiavi sono gli slug (senza `/` iniziale e finale),
i valori sono le route del nuovo sito **senza** `base` (es. `/documentation/nightscout/nightscoutgooglecloud`;
`/` = home). Le chiavi che iniziano con `_` sono commenti.

Stato: **fase 1 — solo mappa, in revisione**. Non è ancora usata dalla build.
Nella fase 2 (spostamento del dominio) verranno aggiunti:

1. un hook `buildEnd` in `docs/.vitepress/config.mts` che, per ogni voce, genera `dist/<slug>/index.html`
   (stub con `<meta http-equiv="refresh" content="0; url=…">` + `<link rel="canonical">` + `location.replace`);
2. una pagina 404 personalizzata che usa la stessa mappa e gestisce i vecchi link `…github.io/doc/…`;
3. rinomina del repo in `glicemiadistanza-it.github.io`, `base: '/'`, `docs/public/CNAME`, DNS.

Il piano completo è in `C:\Users\patri\.claude\plans\i-want-to-migrate-declarative-abelson.md`.

## Verifica della mappa

```bash
node -e "const fs=require('fs');const m=require('./redirects.json');const bad=Object.entries(m).filter(([k,v])=>!k.startsWith('_')&&!fs.existsSync(v==='/'?'docs/index.md':'docs'+v+'.md'));console.log(bad.length?bad:'OK')"
```

Copertura al 2026-08-16: tutti i 90 URL di `post-sitemap.xml` + `page-sitemap.xml` del sito WordPress
sono presenti, più `sony-smartwatch-3-e-xdrip` (linkato dai documenti) e l'URL del pilota MkDocs.

## Voci da rivedere (scelte "sezione più vicina", non esiste una pagina equivalente)

| Slug | Destinazione scelta | Alternativa |
|---|---|---|
| `indice`, `news`, `162`, `sample-page*`, `privacy-policy*` | `/` | — |
| `informazioni-sul-futuro-di-omnipod`, `novita-su-dexcom-g7`, `iphone-e-apple-watch-comando-per-calcolare-i-carboidrati` | `/` (news superate) | `/articles/la-scelta-del-microinfusore` per Omnipod |
| `controliq` | `/articles/la-scelta-del-microinfusore` | `/` |
| `reset-trasmettitore-dexcom-g5`, `dexcom-g5-come-vedere-le-glicemie-durante-il-riavvio` | `/articles/dexcom-g6-riavvio` | `/documentation/xdrip/dexcomg6-e-xdrip` |
| `dexcom-g6-riavvioancoraggio-e-glicemie-al-polso` | `/articles/dexcom-g6-riavvio` | `/articles/dexcom-g6-ancoraggio` |
| `nightwatch`, `nightscout-con-dexcom-g4/g5`, `nightscout-con-guardian-connect`, `mandare-i-dati-del-sensore-glucomen-day-a-nightscout`, `nightscout-migrare-da-heroku-a-railway`, `heroku-ecco-cosa-fare-…` | `/articles/nightscout` | — |
| `monitor-da-tavolo-nightscout`, `monitor-da-tavolo-per-dexcom-g5-e-g6` | `/documentation/nightscout/monitor-nightscout-m5stack` | `/documentation/nightscout/nightscoutclock` |
| `diabox-la-glicemia-con-e-senza-bubble` | `/documentation/xdrip/fsl2-miaomiao-bubble` | `/` |
| `dexcom-g6-g5-con-telefono-non-compatibile-android` | `/documentation/xdrip/dexcom-g6-g7-app-modificata` | `/documentation/xdrip/dexcomg6-e-xdrip` |
| `xdrip-per-iphone-le-glicemie-di-dexcom-g5-g6-e-miaomiao-lette-con-iphone` | `/documentation/xdrip4ios/installare-xdrip4ios` | `/documentation/xdrip4ios/letture-dexcom` |
| `smartwatch-android-wear`, `android-wear-os-come-impostare-un-quadrante-…`, `lettura-diretta-fsl-con-xdrip-smartwatch-android-wear-os` | `/documentation/wearos/glicemia-su-smartwatch-wear-os` | `/documentation/xdrip/dexcom-xdrip-on-wear-watch`, `/documentation/android/glicemia-android-wear-xdrip` |
| `disabilitare-il-risparmio-energetico-per-camaps-fx` | `/articles/follower-camaps-fx` | `/documentation/xdrip/disabilitare-risparmio-energetico-xdrip` |
| Vecchi smartwatch (`samsung-watch*`, `g-watch-…`, `finow-q1-pro-*`, `dm2018-*`, `microwear-h5-…`, `quadrante-duo-…`, `sony-smartwatch-3-e-xdrip`, `smartwatch-tutte-le-soluzioni-disponibile`) | `/articles/glicemia-al-polso` | — |
