# Glicemia su smartwatch Garmin

Questa guida spiega come visualizzare i valori di glicemia sui modelli Garmin compatibili tramite le app disponibili su **Connect IQ** (lo store ufficiale di Garmin), a partire dalla sorgente dati che già usi: xDrip, Nightscout, Dexcom Share, LLink, Juggluco, AAPS o GlucoDataHandler.

Traduzione e integrazione della guida originale di Paweł Babańczyk: [`http://nightscout.pl/smartwatch/garmin/`](http://nightscout.pl/smartwatch/garmin/)

Autore: Gianluca Curci.

Le app attuali supportano la maggior parte dei modelli Garmin recenti (Fenix, Epix, Forerunner, Venu, Vivoactive, Instinct, Enduro e altri): controlla la lista dei dispositivi compatibili nella pagina di ogni app sullo store.

Le istruzioni seguenti si basano sul modello **Forerunner 735XT** su Android. Su iPhone il procedimento è analogo tramite l'app Garmin Connect dall'App Store.

Due modi di funzionamento, da scegliere in base a come gestisci la glicemia:

- **Locale, senza internet**: l'app sull'orologio legge i dati da xDrip (o GlucoDataHandler, Juggluco, AAPS) sul telefono Android, via Bluetooth. Non funziona con iPhone.
- **Via cloud**: l'app sull'orologio legge i dati da Nightscout, Dexcom Share o LLink; serve internet sul telefono. Funziona anche con iPhone.

> ℹ️ **Nota**: se usi [Gluroo](../gluroo/gluroo), puoi usare tutte le app Garmin che leggono da Nightscout: il suo indirizzo **Gluroo Global Connect** è compatibile con Nightscout, inseriscilo al posto dell'URL del sito Nightscout nelle impostazioni dell'app.

La guida è organizzata in tre parti: prima installi Garmin Connect e abbini l'orologio (sezioni 1–3), poi scegli l'app in base alla tua sorgente dati e la scarichi dallo store Connect IQ (sezioni 4–5), infine configuri il widget e verifichi che i valori arrivino sull'orologio (sezioni 6–8).

---

## 1. Installa Garmin Connect

Installa l'app **Garmin Connect** dal Google Play Store (o App Store su iPhone).

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_001.png)

---

## 2. Crea un account e abbina il dispositivo

Apri l'app, crea un account Garmin o accedi se ne hai già uno. Questo account registrerà le sessioni sportive e i dati del dispositivo, ma non i valori di glicemia.

Alla prima apertura ti viene chiesto di creare un account o accedere:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_002.png)

Accetta l'EULA e conferma di avere almeno 16 anni:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_003.png)

Inserisci email e password (oppure accedi con Facebook o Google):

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_004.png)

Abbina il tuo Garmin: vai in **Gestione dispositivi → Aggiungi dispositivo**, seleziona il tuo modello dalla lista (o usa **Cerca tutti i dispositivi compatibili**) e segui le istruzioni a schermo.

L'app avvia la configurazione guidata del dispositivo:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_005.png)

Seleziona il tuo modello dall'elenco dei dispositivi Garmin supportati:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_006.png)

---

## 3. Attiva la modalità di associazione sul Garmin

Vai nelle impostazioni Bluetooth del dispositivo Garmin (consulta il manuale del tuo modello) e abilita la modalità di associazione. L'app avvierà la prima sincronizzazione in automatico.

Sull'orologio, entra nel menu **Impostazioni**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_007.png)

Vai su **Sensori e accessori → Bluetooth**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_010.png)

L'orologio si mette in attesa di un dispositivo da associare:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_009.png)

Compare un avviso di connessione per l'associazione con il telefono:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_008.png)

Sul telefono, conferma di voler procedere con l'associazione al Forerunner 735XT:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_012.png)

L'orologio mostra lo stato di collegamento in corso:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_013.png)

A seconda del modello, il telefono può chiederti di inserire un PIN (prova `0000` o `1234`)...

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_011.png)

...oppure l'orologio mostra un codice da confrontare con quello sul telefono:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_014.png)

Al termine, il telefono conferma che l'associazione è riuscita:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_015.png)

---

## 4. Scegli la sorgente dati e l'app

In base a come ricevi la glicemia sul telefono, queste sono le app consigliate:

- **Follower LLink (sensori FSL)**: CGM Connect.
- **xDrip sul telefono Android** (anche senza internet): xDrip+/Spike/Nightscout, CGM Connect, CGM Gauge, FR965 Like Plus xDrip; per aggiornamenti istantanei, WatchDrip+.
- **Nightscout** (o Gluroo): CGM Connect, xDrip+/Spike/Nightscout, CGM Gauge, NightscoutWatch2, CGM+.
- **Dexcom Share**: CGM Connect, il widget ufficiale Dexcom, CGM+.
- **Juggluco o AAPS**: CGM Connect; da AAPS anche WatchDrip+.
- **GlucoDataHandler**: tutte le app compatibili con xDrip (vedi la nota più sotto).

Ogni sviluppatore offre in genere tre varianti della stessa app: **quadrante** (watchface, sempre visibile), **widget** (nel menu rapido dell'orologio) e **campo dati** (per le attività sportive).

> ℹ️ **Nota**: i **widget** si aprono dal menu rapido dell'orologio e si chiudono automaticamente dopo qualche secondo, mentre le **applicazioni** rimangono attive sullo schermo più a lungo.

Tutte le app qui sotto sono mantenute e aggiornate:

### CGM Connect (di bruder_jakob) — la più completa

La scelta più semplice per chi usa sensori FSL: riceve i dati direttamente da un account follower LLink, oltre che da Dexcom Share, Nightscout, xDrip, Juggluco e AAPS. Si configura tutta dalle impostazioni dell'app in Garmin Connect, senza app aggiuntive, e funziona anche con iPhone.

- Quadrante: [`https://apps.garmin.com/apps/301dc1f8-847a-4edf-98dd-871536866e1a`](https://apps.garmin.com/apps/301dc1f8-847a-4edf-98dd-871536866e1a)
- Widget: [`https://apps.garmin.com/apps/034a3784-b27f-4f2a-a109-67413a5f4f83`](https://apps.garmin.com/apps/034a3784-b27f-4f2a-a109-67413a5f4f83)
- Campo dati: [`https://apps.garmin.com/apps/286fcd0e-8697-4d22-a557-6203ae3cca18`](https://apps.garmin.com/apps/286fcd0e-8697-4d22-a557-6203ae3cca18)

Tutte le app di bruder_jakob sullo store: [`https://apps.garmin.com/developer/2609a36a-c06d-4386-9fe6-5c2dc7d702f1/apps`](https://apps.garmin.com/developer/2609a36a-c06d-4386-9fe6-5c2dc7d702f1/apps)

### xDrip+/Spike/Nightscout (di andreas-may) — la classica per xDrip

La storica famiglia di app per chi usa xDrip sul telefono Android (funziona anche senza internet, via Bluetooth) o Nightscout. Nelle vecchie versioni di questa guida era chiamata "CGM Widget".

- Quadrante: [`https://apps.garmin.com/apps/8fab3746-f56f-4b41-b3c7-5f4aaeaed6c9`](https://apps.garmin.com/apps/8fab3746-f56f-4b41-b3c7-5f4aaeaed6c9)
- Widget: [`https://apps.garmin.com/apps/73115e04-dc9f-4765-ad88-e7ae283ce995`](https://apps.garmin.com/apps/73115e04-dc9f-4765-ad88-e7ae283ce995)
- Campo dati: [`https://apps.garmin.com/apps/5a3e2cda-12f0-4afd-88ed-000e67a68d84`](https://apps.garmin.com/apps/5a3e2cda-12f0-4afd-88ed-000e67a68d84)
- Codice sorgente del quadrante: [`https://github.com/swissalpine/GARMIN-xDrip-Spike-Nightscout-Watchface`](https://github.com/swissalpine/GARMIN-xDrip-Spike-Nightscout-Watchface)

Per usarle con xDrip, abilita in xDrip **Impostazioni → Impostazioni Inter-app → xDrip Web Service**.

> ℹ️ **Nota**: se usi [GlucoDataHandler](../glucodatahandler/glucodatahandler) al posto di xDrip, attiva il suo **web service locale** (Orologio → Orologi Garmin e Fitbit): tutte le app Garmin compatibili con xDrip funzioneranno anche con GlucoDataHandler.

### Widget e campo dati ufficiali Dexcom

Pubblicati da Garmin in collaborazione con Dexcom (G6, G7, ONE, ONE+). Richiedono l'app Dexcom sul telefono con la **condivisione attiva e almeno un follower**, e l'accesso con l'account Dexcom. Sono ufficiali ma hanno recensioni basse per ritardi e disconnessioni, e non supportano la serie Instinct.

- Widget: [`https://apps.garmin.com/apps/396d46de-5ac1-4994-9d4c-1e00a2285c2d`](https://apps.garmin.com/apps/396d46de-5ac1-4994-9d4c-1e00a2285c2d)
- Campo dati: [`https://apps.garmin.com/apps/9040cc1d-13de-4d48-a859-6c2a0cedec3e`](https://apps.garmin.com/apps/9040cc1d-13de-4d48-a859-6c2a0cedec3e)

Per approfondire:

- Come visualizzare i dati CGM su un orologio Garmin o un ciclocomputer (traduzione automatica): [`https://medium-com.translate.goog/trit1dtech/how-to-view-cgm-data-on-a-garmin-watch-or-bike-computer-6846b06801e2?_x_tr_sl=auto&_x_tr_tl=it`](https://medium-com.translate.goog/trit1dtech/how-to-view-cgm-data-on-a-garmin-watch-or-bike-computer-6846b06801e2?_x_tr_sl=auto&_x_tr_tl=it)
- Installazione della complicazione Dexcom per i quadranti Face It (supporto Garmin): [`https://support.garmin.com/en-US/?faq=EMZNM1RNP65gcp8rl8PTq5`](https://support.garmin.com/en-US/?faq=EMZNM1RNP65gcp8rl8PTq5)
- Configurazione del widget Glance di Dexcom (supporto Garmin): [`https://support.garmin.com/en-US/?faq=urGLazwTsJ9qYnC5sC1289`](https://support.garmin.com/en-US/?faq=urGLazwTsJ9qYnC5sC1289)
- Widget Dexcom, un modo secondario per visualizzare i dati: [`https://apps.garmin.com/en-US/apps/027db46d-fbc8-4362-a65f-05fa6c0f113f`](https://apps.garmin.com/en-US/apps/027db46d-fbc8-4362-a65f-05fa6c0f113f)
- Configurazione del campo dati Dexcom (supporto Garmin): [`https://support.garmin.com/it-IT/?faq=3HkHX1wT6U7TeNB7YHfiT7`](https://support.garmin.com/it-IT/?faq=3HkHX1wT6U7TeNB7YHfiT7)

### Altre app valide

- **CGM Gauge** (RoboleoApps) — quadrante, widget e campo dati in stile "indicatore", sorgenti xDrip o Nightscout.
- **NightscoutWatch2 / NightscoutData2** (Horsetooth) — quadrante e campo dati per Nightscout o xDrip.
- **CGM+** (watchface.io) — campo dati per Dexcom, Nightscout, LLink e xDrip, con documentazione molto curata: [`https://watchface.io/docs/cgm/intro`](https://watchface.io/docs/cgm/intro)
- **FR965 Like Plus xDrip** (bine8x8) — il quadrante con glicemia più scaricato in assoluto, solo per xDrip.

### WatchDrip+ — aggiornamenti istantanei

Un approccio diverso dalle app viste sopra: dalla versione `0.5.0`, WatchDrip+ (l'app Android già usata per [smartband Xiaomi e smartwatch Amazfit](../xdrip/xdrip-e-watchdrip)) invia la glicemia anche agli orologi Garmin. Il vantaggio è che i valori arrivano sull'orologio **all'istante**, appena il telefono riceve una nuova lettura, senza aspettare il ciclo di aggiornamento di 5 minuti delle app Connect IQ: utile soprattutto con i sensori FSL3, che leggono ogni minuto.

WatchDrip+ riceve i dati da xDrip oppure direttamente da AAPS (in questo caso senza bisogno di xDrip) e mostra sull'orologio glicemia, delta e freccia di trend, insulina attiva (IOB), serbatoio e batteria del microinfusore, grafico a colori e boli. Funziona solo con telefoni Android.

Come si configura:

1. Installa dallo store Connect IQ l'app WatchdripSync: [`https://apps.garmin.com/apps/84e4579d-aa4c-48fa-bd66-5021c6076db5`](https://apps.garmin.com/apps/84e4579d-aa4c-48fa-bd66-5021c6076db5) e avviala sull'orologio.
2. Installa WatchDrip+ sul telefono (si scarica dalla pagina Patreon del progetto, vedi sotto) e attiva il servizio di sincronizzazione Garmin nelle sue impostazioni.
3. WatchdripSync pubblica i dati come "complicazione" (`CompWatchdrip`): per vederli sull'orologio serve un quadrante che la supporti. I primi quadranti compatibili sono già disponibili e altri ne arriveranno.

Tutti i dettagli e il download nell'annuncio originale: [`https://www.patreon.com/xdrip_miband/posts/watchdrip-v0-5-163791331`](https://www.patreon.com/xdrip_miband/posts/watchdrip-v0-5-163791331)

> ⚠️ **Attenzione**: le vecchie app **Nightscout Watch** e **Nightscout Widget** di Phimpy non sono più mantenute da anni e prevedono solo siti Azure e Heroku, ormai superati: non installarle.

---

## 5. Scarica l'app dal Connect IQ Store

Una volta scelta l'app, scaricala dallo store. Nell'app Garmin Connect, apri il menu in alto a sinistra (tre linee) e seleziona **Store Connect IQ**.

Apri il menu laterale dell'app Garmin Connect:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_016.png)

Seleziona **Store Connect IQ™** dall'elenco:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_017.png)

Nello store, cerca il nome dell'app che hai scelto (nell'esempio, "Nightscout watch") per vedere le varianti disponibili per il tuo modello:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_018.png)

Nei risultati di ricerca, individua l'app o il widget desiderato (nell'esempio, il **CGM Widget** e il **Nightscout Widget** sono contrassegnati dall'icona a forma di ingranaggio):

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_019.png)

Apri la sua scheda, tocca **Scarica** e accetta i termini e le autorizzazioni:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_020.png)

Concedi l'autorizzazione richiesta per inviare e ricevere dati da Internet:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_021.png)

Compare la conferma che l'installazione avverrà alla prossima sincronizzazione:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_022.png)

---

## 6. Sincronizza il dispositivo

Torna alla schermata principale di Garmin Connect e clicca il tasto **Sincronizza** in alto a destra. Attendi il completamento.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_023.png)

---

## 7. Configura il widget o l'app

Clicca sull'icona del tuo dispositivo nella schermata principale dell'app, poi vai in **Activities & App Management**. Cerca il widget o l'app appena installata e clicca su **Impostazioni**.

Apri la scheda del tuo dispositivo, dove trovi la voce **Activities & App Management**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_024.png)

Entra nella sezione **Widget**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_025.png)

Trova il widget appena installato (es. **Nightscout Widget**) ed entra nella sua scheda:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_026.png)

Puoi anche riordinare i widget attivi sull'orologio trascinandoli dall'icona a destra:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_027.png)

Tocca **Impostazioni** per aprire la configurazione del widget:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_028.png)

### Configurazione del widget xDrip+/Spike/Nightscout (di andreas-may)

Questa è la pagina dello store con tutte le app pubblicate da andreas-may:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_039.png)

Se usi Nightscout come sorgente, inserisci l'indirizzo completo del sito comprensivo di dominio (es. `https://miosito.dominio.com`). Se invece usi xDrip sul telefono, lascia la sorgente locale e verifica di avere attivato il **xDrip Web Service** in xDrip. Puoi anche configurare l'unità di misura e i limiti del range target.

Nella scheda del widget, tocca **Impostazioni**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_034.png)

Inserisci l'indirizzo completo del tuo Nightscout nel campo **Nightscout website**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_035.png)

---

## 8. Sincronizza di nuovo e verifica

Torna alla schermata principale di Garmin Connect e sincronizza nuovamente il dispositivo. Trova il widget sul tuo Garmin: dopo qualche minuto dovrebbe apparire il valore di glicemia corrente.

Sull'orologio, il **CGM Widget** si connette e mostra un valore provvisorio mentre scarica i dati aggiornati...

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_036.png)

...per poi mostrare la glicemia corrente con la freccia di trend e i minuti trascorsi dall'ultima lettura:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_037.png)

> ℹ️ **Nota**: un bug noto dell'app Garmin Connect può bloccare dopo un po' di tempo le richieste internet delle app Connect IQ: se il valore di glicemia smette di aggiornarsi, apri Garmin Connect e **sincronizza l'orologio**.
