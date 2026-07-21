# App Dexcom modificata – Installazione e funzionalità (G6, G7)

Questa guida spiega come creare e installare la versione modificata dell'app Dexcom sul telefono collegato al sensore G6 o G7 (master). Incluso anche come collegarla a xDrip per usare diversi smartwatch.

![](images/dexcom-g6-g7-app-modificata/image_001.png)

## 1. Che cos'è l'app Dexcom modificata?

È l'app Dexcom ufficiale con due piccole modifiche:
- Non controlla se il telefono è nella lista dei dispositivi compatibili ufficiali.
- Invia (broadcast) la glicemia internamente al telefono, in modo che xDrip possa riceverla.

> ⚠️ **Attenzione**: L'app modificata non è autorizzata da Dexcom. Usandola, potresti perdere il diritto al supporto e alla garanzia per problemi di trasmettitore e sensore. Se disponibile, basa sempre le segnalazioni di problemi sul ricevitore Dexcom ufficiale. L'utilizzo è a esclusiva responsabilità personale.

## 2. Perché installarla?

- Il telefono non è compatibile con l'app ufficiale (ricorda che la compatibilità non è garantita neanche con l'app modificata).
- Per ricevere la glicemia sullo smartwatch senza dipendere da internet o dai server Dexcom.
- Per continuare a ricevere letture su xDrip quando i server Dexcom non funzionano.

---

## 3. Disinstalla l'app Dexcom ufficiale

> ⚠️ **Attenzione**: **NON fare Stop sensore** se non vuoi cambiare il sensore adesso.

Prima di disinstallare, annota il **codice del trasmettitore**: lo trovi in **Impostazioni → Trasmettitore** nell'app Dexcom (voce **NS**).

Tocca l'icona a ingranaggio delle impostazioni:

![](images/dexcom-g6-g7-app-modificata/image_003.png)

Nella pagina **Trasmettitore**, il codice è alla voce **NS**:

![](images/dexcom-g6-g7-app-modificata/image_002.png)

Per disinstallare senza interagire con il sensore, apri le **Impostazioni Android**:

![](images/dexcom-g6-g7-app-modificata/image_006.png)

1. Vai in **Applicazioni** e cerca **Dexcom G6** (o G7):

![](images/dexcom-g6-g7-app-modificata/image_005.png)

2. Entra nella pagina dell'app e tocca **Memoria archiviazione**:

![](images/dexcom-g6-g7-app-modificata/image_004.png)

3. Premi **Svuota cache**, poi **Cancella dati**:

![](images/dexcom-g6-g7-app-modificata/image_007.png)

4. Torna alla pagina precedente e premi **Disinstalla**:

![](images/dexcom-g6-g7-app-modificata/image_008.png)

---

## 4. Crea la tua app Dexcom modificata

1. Vai sul modulo di richiesta:
   [`https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform`](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform)

![](images/dexcom-g6-g7-app-modificata/image_009.png)

Inserisci il tuo indirizzo email (riceverai il link per scaricare l'app personalizzata) e conferma l'avvertimento d'uso (usi l'app a tuo rischio):

![](images/dexcom-g6-g7-app-modificata/image_010.png)

2. Indica quale prodotto usi:

![](images/dexcom-g6-g7-app-modificata/image_011.png)

> ℹ️ **Nota**: Il modulo si adatta in base al prodotto scelto. Ad esempio, per **G6** ti verrà chiesta anche la versione di Android installata sul telefono (la trovi in **Impostazioni → Info telefono → Versione Android**):

![](images/dexcom-g6-g7-app-modificata/image_012.png)

3. In base alle risposte precedenti, scegli la **versione dell'app** e l'**unità di misura** (mg/dL o mmol/L):

Per G6 su Android 10 o superiore, scegli tra versione International e US:

![](images/dexcom-g6-g7-app-modificata/image_015.png)

La domanda sul broadcast verso altre app — scegli l'ultima opzione (**both xDrip and Android APS**):

![](images/dexcom-g6-g7-app-modificata/image_016.png)

Se hai scelto la versione International, ti viene chiesta l'unità di misura preferita:

![](images/dexcom-g6-g7-app-modificata/image_017.png)

> ℹ️ **Nota**: Il modulo propone opzioni analoghe anche per **G7** — scegli il prodotto corretto al passo 2 e segui le domande che il modulo propone di conseguenza.

4. Configura le opzioni aggiuntive:

| Opzione | Valore consigliato |
|---|---|
| Durata vibrazione allarme | 1,5 secondi (default) |
| Consenti all'app di disattivare la modalità silenziosa | **Yes** (default) |
| Scorrimento della notifica come azione OK | **No** (default) |
| Riduci tempo di avviamento | **No** (sconsigliato) |
| Broadcast a xDrip / Android APS | **Yes, broadcast to both xDrip and Android APS** |

Le domande su vibrazione, modalità silenziosa e notifiche:

![](images/dexcom-g6-g7-app-modificata/image_018.png)



La domanda sulla riduzione del tempo di avviamento — lascia **No**:

![](images/dexcom-g6-g7-app-modificata/image_019.png)

5. Premi **Submit** e aspetta la mail. Se non arriva entro 10 minuti, controlla la cartella Spam:

![](images/dexcom-g6-g7-app-modificata/image_014.png)

---

## 5. Installa l'app Dexcom modificata

1. Apri la mail ricevuta e leggi le istruzioni per l'installazione:

![](images/dexcom-g6-g7-app-modificata/image_021.png)

2. Tocca il link di download: se richiesto, apri il link con il **browser** (non con Dropbox):

![](images/dexcom-g6-g7-app-modificata/image_022.png)

Nella pagina di Dropbox, premi **Scarica**:

![](images/dexcom-g6-g7-app-modificata/image_023.png)

Il download comparirà nelle notifiche del telefono:

![](images/dexcom-g6-g7-app-modificata/image_025.png)

3. Vai nella cartella **Download** o controlla i **File recenti** e apri il file `.apk`:

![](images/dexcom-g6-g7-app-modificata/image_024.png)

Lo trovi anche cercandolo direttamente per nome nel gestore file:

![](images/dexcom-g6-g7-app-modificata/image_028.png)

4. Autorizza l'installazione da sorgenti sconosciute se richiesto.
5. Conferma l'installazione: è identica all'app ufficiale.

![](images/dexcom-g6-g7-app-modificata/image_027.png)

Attendi il messaggio di conferma:

![](images/dexcom-g6-g7-app-modificata/image_026.png)

6. Apri l'app appena installata:

![](images/dexcom-g6-g7-app-modificata/image_029.png)

Accedi a **Clarity** con il tuo nome utente e password abituali.
   > ⚠️ **Attenzione**: Se ti registri per la prima volta, usa solo **lettere minuscole** nel nome utente.

La pagina di accesso all'account Dexcom:

![](images/dexcom-g6-g7-app-modificata/image_030.png)

Inserisci nome utente e password e premi **Registrati**:

![](images/dexcom-g6-g7-app-modificata/image_031.png)

7. Segui la procedura guidata iniziale: un video di benvenuto...

![](images/dexcom-g6-g7-app-modificata/image_033.png)

...informazioni sulle decisioni terapeutiche basate sul CGM...

![](images/dexcom-g6-g7-app-modificata/image_034.png)

...e l'avviso di sicurezza sulla risonanza magnetica:

![](images/dexcom-g6-g7-app-modificata/image_035.png)

Se avevi un account con impostazioni salvate, l'app te le propone da importare (avvisi, condivisione, altezza del grafico)...

![](images/dexcom-g6-g7-app-modificata/image_032.png)

...e conferma l'importazione completata:

![](images/dexcom-g6-g7-app-modificata/image_036.png)

Seguono alcune schermate informative sulle novità di G6...

![](images/dexcom-g6-g7-app-modificata/image_038.png)

...sull'avviso di ipoglicemia urgente imminente...

![](images/dexcom-g6-g7-app-modificata/image_039.png)

...sui suoni degli avvisi che non possono essere silenziati...

![](images/dexcom-g6-g7-app-modificata/image_040.png)

...e sulla modalità **Non disturbare** (per Android 7 e superiori):

![](images/dexcom-g6-g7-app-modificata/image_041.png)

8. Se hai già un sensore avviato, seleziona **Codice assente** (per un sensore già in corso, non inserire un nuovo codice):

![](images/dexcom-g6-g7-app-modificata/image_037.png)

L'app spiega poi come funziona il trasmettitore...

![](images/dexcom-g6-g7-app-modificata/image_044.png)

...e come si collega via Bluetooth allo smart device:

![](images/dexcom-g6-g7-app-modificata/image_042.png)

Segui le istruzioni per accendere il Bluetooth e concedere la geolocalizzazione **sempre**...

![](images/dexcom-g6-g7-app-modificata/image_045.png)

...fino a vedere la conferma **"Bluetooth acceso"**:

![](images/dexcom-g6-g7-app-modificata/image_043.png)

9. Inserisci il numero **NS del trasmettitore** annotato al passo 3 (fotografando la confezione oppure manualmente):

![](images/dexcom-g6-g7-app-modificata/image_046.png)

Se scegli l'inserimento manuale, compare questo campo:

![](images/dexcom-g6-g7-app-modificata/image_047.png)

10. Se stai avviando un nuovo sensore, l'app ti guida nel posizionamento...

![](images/dexcom-g6-g7-app-modificata/image_048.png)

...e nell'inserimento del trasmettitore, con l'ultimo passaggio (strofinare il cerotto per farlo aderire):

![](images/dexcom-g6-g7-app-modificata/image_049.png)

L'app chiede conferma prima di proseguire con la configurazione:

![](images/dexcom-g6-g7-app-modificata/image_050.png)

11. Entro qualche minuto la glicemia apparirà sullo schermo:

![](images/dexcom-g6-g7-app-modificata/image_051.png)

> ⚠️ **Attenzione**: Solo **un telefono alla volta** può essere collegato al sensore. Se un altro telefono è già collegato, spegnilo e aspetta 15 minuti prima di avviare quello nuovo.

---

## 6. Collega xDrip (opzionale)

Se vuoi ricevere la glicemia anche in xDrip (ad esempio per un smartwatch):

1. Segui la [guida base di installazione di xDrip](./installare-xdrip-android).
2. Come sorgente dati, scegli **640G / Eversense** — questo fa ricevere i dati direttamente dall'app modificata senza passare dal server Dexcom Share. Puoi farlo dalla configurazione guidata, oppure dal menu di xDrip, **Impostazioni**

![](images/Menu-Impostazioni.png)

...toccando **Dati Hardware di origine**...

![](images/Menu-Impostazioni-SorgenteDati.png)

... **640G / Eversense**...

![](images/dexcom-g6-g7-app-modificata/image_054.png)

3. Quando xDrip chiede di inizializzare il sensore...

![](images/dexcom-g6-g7-app-modificata/image_059.png)

...scegli **Non oggi** (non è necessaria una vera inizializzazione con questa sorgente):

![](images/dexcom-g6-g7-app-modificata/image_060.png)

4. In xDrip, imposta questo telefono come **master** — così potrai usare un altro telefono come follower senza dipendere dai server Dexcom. Apri di nuovo il menu di xDrip...

![](images/Menu-Impostazioni.png)

...vai in **Impostazioni** e cerca **Impostazioni xDrip+ Sync**...

![](images/dexcom-g6-g7-app-modificata/image_062.png)

...e abilita **Imposta come Telefono Principale**:

![](images/dexcom-g6-g7-app-modificata/image_063.png)

Per impostare un altro telefonino come follower, vedi la guida [xDrip Follower](./masterfollower.md).
