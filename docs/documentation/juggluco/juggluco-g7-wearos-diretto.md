# Dexcom G7 diretto su Galaxy Watch con Juggluco

Questa guida spiega come far arrivare la glicemia del **Dexcom G7** direttamente sullo smartwatch **Samsung Galaxy Watch**, anche quando il telefono non è vicino. Il sensore invia i valori via Bluetooth **all'orologio**, non al telefono: quando il telefono torna vicino, Juggluco li riceve dall'orologio tramite la funzione **Mirror**. GlucoDataHandler, se lo vuoi usare, serve solo per visualizzare i valori con complicazioni, colori e notifiche.

La procedura è stata verificata in pratica con Dexcom G7 e Samsung Galaxy Watch 7.

```
Dexcom G7  →  Galaxy Watch (Juggluco)  →  Telefono (Juggluco / GlucoDataHandler), quando è vicino
```

> ⚠️ **Attenzione**: questa guida riguarda solo il collegamento e la visualizzazione. Non sostituisce le istruzioni Dexcom, del microinfusore o del tuo team diabetologico. Non modificare impostazioni terapeutiche seguendo questa guida.

---

## 1. Cosa serve

- Un telefono Android.
- Uno smartwatch Samsung Galaxy Watch con Wear OS (la procedura è stata provata sul Galaxy Watch 7).
- Un sensore Dexcom G7.
- Juggluco installato sul telefono.
- Juggluco per Wear OS installato sull'orologio.
- Facoltativo: GlucoDataHandler sul telefono e GlucoDataHandler-Wear sull'orologio, se vuoi complicazioni e colori aggiuntivi.
- Bluetooth acceso su telefono e orologio durante la configurazione, e Wi-Fi acceso su entrambi per la prima sincronizzazione.

> ℹ️ **Nota**: se usi già il Dexcom G7 con un microinfusore compatibile, non modificare il collegamento del microinfusore. Questa procedura riguarda solo Juggluco e l'orologio.

---

## 2. Installa Juggluco su telefono e orologio

1. **Telefono**: installa e apri Juggluco. Se è la prima volta, segui la guida [Juggluco per Android](juggluco-android.md).
2. **Orologio**: installa e apri Juggluco per Wear OS. Il modo più semplice è cercarlo nel Play Store dell'orologio; per i metodi alternativi (Wear Installer 2, ADB) vedi la sezione 3 della guida [Glicemia su smartwatch Wear OS](../wearos/glicemia-su-smartwatch-wear-os.md).
3. **Telefono e orologio**: accendi Bluetooth e Wi-Fi su entrambi e tienili vicini.
4. **Telefono**: in Juggluco apri il **Menu 1** (tocca la parte sinistra del grafico), poi **Orologio** → **WearOS** → **Configura** e seleziona il tuo Galaxy Watch.
5. **Telefono**: se nella tua versione compare il pulsante **Init watch app**, premilo. Nelle versioni più recenti l'inizializzazione avviene da sola.
6. **Controllo**: apri **Mirror** su telefono e orologio e verifica che compaia la connessione tra i due dispositivi. Aspetta che la prima sincronizzazione sia finita prima di passare al punto successivo.

> ℹ️ **Nota**: non serve cambiare a mano le direzioni del **Mirror**: l'opzione di collegamento diretto al punto 3 imposta da sola quello che serve.

---

## 3. Collega il Dexcom G7 direttamente all'orologio

1. **Telefono**: in Juggluco apri **Orologio** → **WearOS** → **Configura**.
2. **Telefono**: seleziona **Sensore diretto-orologio connessione** (in inglese *Direct sensor-watch connection*).
3. **Telefono**: non riattivare **Use Bluetooth** per il sensore sul telefono: telefono e orologio non devono contendersi lo stesso G7.
4. **Orologio**: lascia il Bluetooth acceso.
5. **Orologio**: nel menu di Juggluco trovi **Mirror**, **Sensore**, **Display** e **Impostazioni**. Non usare **Sensor** → **Switch** nell'uso normale.

> ℹ️ **Nota**: da questo momento il collegamento è Dexcom G7 → Bluetooth → Galaxy Watch. Il telefono serve ancora per scansionare ogni nuovo sensore e per il Mirror, ma **non** deve ricevere il G7 via Bluetooth.

---

## 4. Mostra la glicemia con GlucoDataHandler (facoltativo)

GlucoDataHandler **non** si collega al Dexcom: riceve i valori già letti da Juggluco e li mostra con complicazioni, widget, colori e notifiche. Per maggiori dettagli vedi la guida [Glicemia al polso con GlucoDataHandler](../glucodatahandler/glucodatahandler.md).

> ℹ️ **Nota**: prima fai funzionare Juggluco sull'orologio, poi attiva GlucoDataHandler. Se Juggluco sull'orologio non riceve il G7, GlucoDataHandler non può risolvere il problema.

### Installazione

1. **Telefono**: installa GlucoDataHandler e aprilo almeno una volta.
2. **Orologio**: installa GlucoDataHandler-Wear, come spiegato nella sezione 5 della guida [GlucoDataHandler](../glucodatahandler/glucodatahandler.md).
3. **Orologio**: apri GlucoDataHandler e lascia attiva l'opzione **Foreground** (esecuzione in primo piano), come consigliato dallo sviluppatore.

### Invia i valori di Juggluco a GlucoDataHandler

1. **Orologio, in Juggluco**: apri **Impostazioni** → **Scambio dati** (*Exchange data*) → attiva **Glucodata broadcast** e seleziona `de.michelinside.glucodatahandler`. Così GlucoDataHandler-Wear riceve direttamente sull'orologio i valori che Juggluco legge dal G7.
2. **Telefono, in Juggluco**: apri **Impostazioni** → **Scambio dati** (*Exchange data*) → attiva **Glucodata broadcast** e seleziona `de.michelinside.glucodatahandler`. Questo serve a GlucoDataHandler sul telefono quando i valori arrivano dall'orologio tramite Mirror.
3. **Orologio**: scegli un quadrante che supporta le complicazioni, tieni premuto per modificarlo, scegli uno spazio → **GlucoDataHandler** → scegli il valore, la freccia o l'informazione che vuoi vedere.
4. **Controllo senza telefono**: spegni il Bluetooth del telefono. La complicazione di GlucoDataHandler sull'orologio deve continuare ad aggiornarsi.

---

## 5. Cambio del sensore G7

> ⚠️ **Attenzione**: segui i passi nell'ordine, senza saltarne nessuno. Non abbinare il G7 dal menu Bluetooth del telefono. Non cambiare **Mirror**, **Use Bluetooth** o **Switch** durante la procedura.

1. **Vecchio sensore**: togli il vecchio Dexcom G7 e portalo lontano, fuori portata Bluetooth. I G7 scaduti possono restare visibili via Bluetooth: tenerli lontani evita che l'orologio si colleghi a quello sbagliato.
2. **Telefono**: apri Juggluco → **Orologio** → **WearOS** → **Configura** e controlla **solo** che sia selezionato **Sensore diretto-orologio connessione**. Non cambiare altro.
3. **Orologio**: controlla che il Bluetooth sia acceso.
4. **Nuovo sensore**: applica il nuovo Dexcom G7 sul braccio. Non fare altro e **conserva l'applicatore**.
5. **Telefono**: apri Juggluco → **Menu 1** → **Foto**.
6. **Telefono**: scansiona il codice data matrix stampato sull'applicatore del nuovo G7.
7. **Telefono**: dopo la scansione Juggluco può mostrare *In attesa di connessione* e/o *Nessun glucosio dal mirror*. Con questa configurazione non è un errore: il sensore deve collegarsi all'orologio.
8. **Orologio**: se compare una richiesta di abbinamento del nuovo G7, confermala **solo sull'orologio**. Spesso Juggluco completa l'abbinamento da solo, senza chiedere nulla.
9. **Attesa**: il riscaldamento (warm-up) del Dexcom G7 dura circa 30 minuti. In questo periodo eventuali valori residui non dimostrano che il nuovo sensore funzioni.
10. **Orologio**: quando il sensore è operativo, apri Juggluco e verifica che compaiano valori **nuovi** e che continuino ad aggiornarsi.
11. **Telefono – prova decisiva**: spegni **solo** il Bluetooth del telefono. Non toccare l'orologio.
12. **Orologio – prova decisiva**: aspetta almeno **due** nuovi valori di glicemia diversi. Se arrivano, il collegamento diretto Dexcom G7 → Galaxy Watch funziona.
13. **Telefono**: riaccendi il Bluetooth.
14. **Telefono**: aspetta che Juggluco riprenda a ricevere i valori dall'orologio tramite Mirror.
15. **GlucoDataHandler**: se lo usi, verifica che mostri i valori sul telefono e sulla complicazione dell'orologio. Se tutto funziona, **non modificare più nulla**.

---

## 6. Se dopo il warm-up l'orologio mostra ancora ---

> ⚠️ **Attenzione**: prima di toccare qualcosa, non usare subito **Switch** e non cambiare **Use Bluetooth**. Fai questi controlli nell'ordine.

1. **Telefono**: ricontrolla Juggluco → **Orologio** → **WearOS** → **Configura** → **Sensore diretto-orologio connessione**.
2. **Orologio**: verifica che il Bluetooth sia acceso.
3. **Telefono**: in Juggluco → **Foto**, scansiona di nuovo **una sola volta** il data matrix del G7 e aspetta fino a 5 minuti.
4. **Orologio**: se ancora non arriva nulla, forza la chiusura di Juggluco sull'orologio, riaprilo e aspetta.
5. **Mirror**: se telefono e orologio sembrano non sincronizzati, usa **Mirror** → **Sync**. Se serve, usa **Reinit** e poi **Sync** sia sull'orologio sia sul telefono.
6. **Solo come ultima risorsa**: **Sensor** → **Switch** sull'orologio serve soprattutto se hai attivato il sensore senza aver prima impostato il collegamento diretto dal telefono. Non fa parte del normale cambio sensore.

---

## 7. Come capire dove è il problema

| Cosa vedi | Significato | Cosa fare |
|---|---|---|
| Orologio: `---` | L'orologio non riceve valori nuovi dal G7. | Segui la sezione 6, nell'ordine. |
| L'orologio riceve, il telefono no | Il collegamento G7 → orologio funziona; il problema è il Mirror orologio → telefono. | Riaccendi il Bluetooth del telefono e controlla il Mirror, senza attivare **Use Bluetooth** del sensore sul telefono. |
| Juggluco sul telefono riceve, GlucoDataHandler no | Problema tra Juggluco e GlucoDataHandler. | Controlla **Glucodata broadcast** e il destinatario `de.michelinside.glucodatahandler`. |
| L'orologio riceve con il Bluetooth del telefono spento | Il collegamento diretto funziona. | Non cambiare nulla. |

---

## 8. Cosa non fare

- **Non** abbinare il Dexcom G7 dal menu Bluetooth del telefono.
- **Non** riattivare **Use Bluetooth** del sensore sul telefono dopo aver scelto il collegamento diretto all'orologio.
- **Non** usare **Sensor** → **Switch** come procedura normale di cambio sensore.
- **Non** modificare a mano le direzioni del **Mirror** se tutto funziona.
- **Non** collegare il G7 all'app Dexcom del telefono, se vuoi che l'orologio resti il ricevitore diretto.
- **Non** toccare il collegamento del microinfusore se riceve già correttamente il G7.
- Dopo la prova riuscita con il Bluetooth del telefono spento, **non** cambiare altro.

---

## 9. Checklist per ogni cambio sensore

- Vecchio G7 rimosso e portato lontano.
- **Telefono**: Juggluco → **Orologio** → **WearOS** → **Configura** → **Sensore diretto-orologio connessione**.
- **Orologio**: Bluetooth acceso.
- Nuovo G7 applicato, applicatore conservato.
- **Telefono**: Juggluco → **Foto** → scansione del data matrix.
- Nessun abbinamento manuale dal Bluetooth del telefono.
- Attesa del warm-up, circa 30 minuti.
- **Orologio**: valori nuovi presenti e aggiornati.
- **Telefono**: Bluetooth spento.
- **Orologio**: arrivano almeno 2 valori nuovi.
- **Telefono**: Bluetooth riacceso.
- Il Mirror riprende.
- GlucoDataHandler mostra i valori.
- Tutto funziona: non cambiare altro.

---

## 10. Riepilogo del collegamento

**Senza telefono:**

```
Dexcom G7 → Bluetooth → Galaxy Watch → Juggluco sull'orologio → complicazione Juggluco o GlucoDataHandler-Wear
```

**Con il telefono vicino:**

```
Dexcom G7 → Galaxy Watch → Mirror Juggluco → telefono → Juggluco / GlucoDataHandler
```

---

## 11. Fonti

- Juggluco, Wear OS e collegamento diretto sensore-orologio: [`https://www.juggluco.nl/Jugglucohelp/wearosinfo.html`](https://www.juggluco.nl/Jugglucohelp/wearosinfo.html)
- Juggluco Wear OS, panoramica Galaxy Watch: [`https://www.juggluco.nl/JugglucoWearOS/`](https://www.juggluco.nl/JugglucoWearOS/)
- Juggluco, Dexcom G7 (Foto/data matrix e abbinamento): [`https://www.juggluco.nl/Jugglucohelp/it/introhelp.html`](https://www.juggluco.nl/Jugglucohelp/it/introhelp.html)
- Juggluco, funzione Switch sull'orologio: [`https://www.juggluco.nl/JugglucoWearOS/switch.html`](https://www.juggluco.nl/JugglucoWearOS/switch.html)
- Juggluco, Exchange data / Glucodata broadcast: [`https://www.juggluco.nl/Jugglucohelp/exchangehelp.html`](https://www.juggluco.nl/Jugglucohelp/exchangehelp.html)
- GlucoDataHandler, installazione: [`https://github.com/pachi81/GlucoDataHandler/blob/master/INSTALLATION.md`](https://github.com/pachi81/GlucoDataHandler/blob/master/INSTALLATION.md)
- GlucoDataHandler, sorgente Juggluco: [`https://github.com/pachi81/GlucoDataHandler/blob/master/SOURCES.md`](https://github.com/pachi81/GlucoDataHandler/blob/master/SOURCES.md)
- Dexcom G7, warm-up di circa 30 minuti: [`https://www.dexcom.com/en-us/m/faqs/what-is-the-dexcom-g7-cgm-system`](https://www.dexcom.com/en-us/m/faqs/what-is-the-dexcom-g7-cgm-system)
