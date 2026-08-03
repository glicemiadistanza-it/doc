# Glicemia su smartwatch Wear OS

Questa guida spiega come visualizzare i valori di glicemia sugli smartwatch con **Wear OS** (Samsung Galaxy Watch 4 e successivi, Google Pixel Watch, OnePlus, Mobvoi e altri), a partire dalla sorgente dati che già usi: xDrip, GlucoDataHandler (follower LLink, Juggluco, AAPS e altre), app Dexcom, Nightscout o Gluroo.

Gli smartwatch Wear OS funzionano abbinati a uno smartphone Android. Fa eccezione NightWear, che funziona anche senza telefono se l'orologio ha una connessione internet.

La guida è organizzata in tre parti: prima abbini l'orologio al telefono (sezione 1), poi scegli l'app o il quadrante in base alla tua sorgente dati (sezione 2), infine installi e configuri tutto sull'orologio (sezioni 3–4).

---

## 1. Prepara e abbina lo smartwatch

Accendi l'orologio e abbinalo al telefono con l'app del produttore (ad esempio **Galaxy Wearable** per Samsung o **Google Pixel Watch** per Pixel). I passaggi dettagliati di avvio e abbinamento sono nelle sezioni 1 e 2 della guida [Glicemia al polso con smartwatch Android Wear OS](../xdrip/dexcom-xdrip-on-wear-watch).

---

## 2. Scegli la sorgente dati e l'app

In base a come ricevi la glicemia sul telefono, queste sono le soluzioni consigliate:

- **Follower LLink (sensori FSL)**: GlucoDataHandler con i suoi quadranti, oppure WatchGlucose.
- **xDrip sul telefono**: i quadranti di xDrip, oppure GlucoDataHandler.
- **App Dexcom (ufficiale o modificata)**: il quadrante Dexcom CGM, oppure GlucoDataHandler.
- **Juggluco o AAPS**: GlucoDataHandler.
- **Nightscout**: NightWear (anche senza telefono), oppure GlucoDataHandler.
- **Gluroo**: l'app Wear OS di Gluroo, senza installazioni aggiuntive.

### GlucoDataHandler e i quadranti Diabetic Masked Man

GlucoDataHandler è la soluzione più versatile: accetta quasi tutte le sorgenti dati e ha un'app dedicata per Wear OS. Segui la guida [Glicemia al polso con GlucoDataHandler](../glucodatahandler/glucodatahandler): puoi usare i quadranti personalizzabili spiegati nella guida oppure i quadranti del progetto **Diabetic Masked Man**, progettati apposta per GlucoDataHandler:

- Descrizione del progetto: [`https://github.com/sderaps/DMM`](https://github.com/sderaps/DMM)
- Direttamente nel Play Store: [`https://play.google.com/store/apps/dev?id=6551812103351455972`](https://play.google.com/store/apps/dev?id=6551812103351455972)

### xDrip e app Dexcom

Se usi xDrip o l'app Dexcom sul telefono, la guida [Glicemia al polso con smartwatch Android Wear OS](../xdrip/dexcom-xdrip-on-wear-watch) spiega come installare l'app sull'orologio e scegliere il quadrante con la glicemia.

> ℹ️ **Nota**: con xDrip puoi anche far leggere il sensore direttamente dall'orologio, senza telefono: vedi [Glicemia al polso con xDrip e Android Wear](../android/glicemia-android-wear-xdrip).

### Blose

Blose è un quadrante da installare sull'orologio; le indicazioni per la configurazione sono nella scheda del Play Store, sotto **Informazioni sull'app**:

- App: [`https://play.google.com/store/apps/details?id=com.silentavalanche.blose`](https://play.google.com/store/apps/details?id=com.silentavalanche.blose)
- Quadrante (necessario): [`https://play.google.com/store/apps/details?id=com.silentavalanche.blosewatchface.digital.v2`](https://play.google.com/store/apps/details?id=com.silentavalanche.blosewatchface.digital.v2)

### Gluroo

Chi usa già [Gluroo](../gluroo/gluroo) per la condivisione dei dati evita l'installazione di app aggiuntive: Gluroo ha un'app Wear OS ufficiale. Tutti i dettagli qui: [`https://gluroo.com/wearos-learnmore/`](https://gluroo.com/wearos-learnmore/)

### NightWear

NightWear è un quadrante minimale per Nightscout, disponibile nel Google Play Store direttamente dal tuo orologio. È un'app standalone: non richiede alcuna app complementare sul telefono, e funziona anche senza telefono purché l'orologio disponga di una connessione internet.

- Descrizione del progetto: [`https://github.com/rahim/nightwear`](https://github.com/rahim/nightwear)
- Nel Play Store dell'orologio: [`https://play.google.com/store/apps/details?id=im.rah.nightwear`](https://play.google.com/store/apps/details?id=im.rah.nightwear)

### WatchGlucose

WatchGlucose mostra i valori dei sensori FSL su Wear OS:

- [`https://play.google.com/store/apps/details?id=se.ndssoft.watchglucose`](https://play.google.com/store/apps/details?id=se.ndssoft.watchglucose)

### Sentronica

Sentronica, degli stessi sviluppatori di [Sentinel per Fitbit](../fitbit/sentinel-pro-userguide1), è una soluzione molto completa ma **a pagamento**: valutala solo in casi particolari. Il gruppo Facebook degli sviluppatori: [`https://www.facebook.com/share/g/1F94USno2F/`](https://www.facebook.com/share/g/1F94USno2F/)

---

## 3. Installa app e quadranti sull'orologio

Il metodo più semplice è il **Play Store dell'orologio**: cerca l'app direttamente dallo smartwatch, oppure aprila nella sezione **App sul telefono**. Trovi i passaggi dettagliati:

- nella sezione 5 della guida [GlucoDataHandler](../glucodatahandler/glucodatahandler) per l'app GlucoDataHandler;
- nella sezione 3 della guida [Glicemia al polso con smartwatch Android Wear OS](../xdrip/dexcom-xdrip-on-wear-watch), che spiega anche il metodo alternativo con **Wear Installer 2** se il Play Store dell'orologio fa i capricci.

Dopo l'installazione, imposta il quadrante o la complicazione con la glicemia seguendo la guida della soluzione scelta.

---

## 4. Seguire due persone sullo stesso orologio

Con GlucoDataHandler puoi seguire due persone contemporaneamente: oltre all'app normale, installa sul telefono la versione **second app** (l'app per la seconda persona da seguire), scaricabile dalla pagina delle release:

- [`https://github.com/pachi81/GlucoDataHandler/releases/tag/2.4.2`](https://github.com/pachi81/GlucoDataHandler/releases/tag/2.4.2)

Questo video mostra il procedimento completo: [`https://youtu.be/eQSAqilCn6s`](https://youtu.be/eQSAqilCn6s)
