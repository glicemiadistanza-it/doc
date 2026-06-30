# App Dexcom modificata – Installazione e funzionalità

Questa guida spiega come creare e installare la versione modificata dell'app Dexcom sul telefono collegato al sensore G5 o G6 (master). Incluso anche come collegarla a xDrip+ per usare diversi smartwatch.

## Che cos'è l'app Dexcom modificata?

È l'app Dexcom ufficiale con due piccole modifiche:
- Non controlla se il telefono è nella lista dei dispositivi compatibili ufficiali.
- Invia (broadcast) la glicemia internamente al telefono, in modo che xDrip+ possa riceverla.

> ⚠️ L'app modificata non è autorizzata da Dexcom. Usandola, potresti perdere il diritto al supporto e alla garanzia per problemi di trasmettitore e sensore. Se disponibile, basa sempre le segnalazioni di problemi sul ricevitore Dexcom ufficiale. L'utilizzo è a esclusiva responsabilità personale.

## Perché installarla?

- Il telefono non è compatibile con l'app ufficiale (ricorda che la compatibilità non è garantita neanche con l'app modificata).
- Per ricevere la glicemia sullo smartwatch senza dipendere da internet o dai server Dexcom.
- Per continuare a ricevere letture su xDrip+ quando i server Dexcom non funzionano.

---

## 1. Disinstalla l'app Dexcom ufficiale

> ⚠️ **NON fare Stop sensore** se non vuoi cambiare il sensore adesso.

Prima di disinstallare:
- Annota il **codice del trasmettitore** (lo troverai nell'app).

![](images/dexcom-g5-g6-app-modificata/image_002.png)

![](images/dexcom-g5-g6-app-modificata/image_003.png)

Per disinstallare senza interagire con il sensore:
1. Vai in **Impostazioni telefono → Applicazioni → Dexcom G5** (o G6).
2. Vai in **Memoria / Archiviazione**.
3. Premi **Svuota cache**, poi **Cancella dati**.

![](images/dexcom-g5-g6-app-modificata/image_004.png)

![](images/dexcom-g5-g6-app-modificata/image_005.png)

![](images/dexcom-g5-g6-app-modificata/image_006.png)

4. Torna alla pagina precedente e premi **Disinstalla**.

![](images/dexcom-g5-g6-app-modificata/image_007.png)

![](images/dexcom-g5-g6-app-modificata/image_008.png)

---

## 2. Crea la tua app Dexcom modificata

1. Vai sul modulo di richiesta:
   `https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform`

![](images/dexcom-g5-g6-app-modificata/image_009.png)

![](images/dexcom-g5-g6-app-modificata/image_010.png)

2. Inserisci il tuo indirizzo email: riceverai il link per scaricare l'app personalizzata.
3. Conferma l'avvertimento d'uso (usi l'app a tuo rischio).

![](images/dexcom-g5-g6-app-modificata/image_011.png)
4. Scegli il tipo di app:
   - **G5 internazionale** o **G6 internazionale**
5. Seleziona l'**unità di misura** (mg/dL).
6. Seleziona **Installa su dispositivi non nella lista ufficiale** (opzione che sblocca la compatibilità).
7. Configura le opzioni aggiuntive:

| Opzione | Valore consigliato |
|---|---|
| Durata vibrazione allarme | 1,5 secondi (default) |
| Frequenza promemoria calibrazione (solo G5) | Ogni 15 minuti (default) |
| Suona in modalità silenziosa | **Yes** |
| Silenzia allarme scorrendo la notifica | **No** (default) |
| Riduci tempo di avviamento | **No** (sconsigliato) |
| Broadcast a xDrip+ (solo G6) | **Yes, broadcast to xDrip** |

![](images/dexcom-g5-g6-app-modificata/image_012.png)

![](images/dexcom-g5-g6-app-modificata/image_013.png)

![](images/dexcom-g5-g6-app-modificata/image_015.png)

![](images/dexcom-g5-g6-app-modificata/image_016.png)

![](images/dexcom-g5-g6-app-modificata/image_017.png)

![](images/dexcom-g5-g6-app-modificata/image_018.png)

![](images/dexcom-g5-g6-app-modificata/image_019.png)

8. Premi **Submit** e aspetta la mail. Se non arriva entro 10 minuti, controlla la cartella Spam.

![](images/dexcom-g5-g6-app-modificata/image_014.png)

---

## 3. Installa l'app Dexcom modificata

1. Apri la mail ricevuta e clicca sul link di download.
2. Apri il link con il **browser** (non con Dropbox), poi premi **Scarica**.

![](images/dexcom-g5-g6-app-modificata/image_021.png)

![](images/dexcom-g5-g6-app-modificata/image_022.png)

![](images/dexcom-g5-g6-app-modificata/image_023.png)

3. Vai nella cartella **Download** o controlla i **File recenti** e apri il file `.apk`.

![](images/dexcom-g5-g6-app-modificata/image_024.png)

![](images/dexcom-g5-g6-app-modificata/image_025.png)

4. Autorizza l'installazione da sorgenti sconosciute se richiesto.
5. Segui l'installazione: è identica all'app ufficiale.

![](images/dexcom-g5-g6-app-modificata/image_026.png)

![](images/dexcom-g5-g6-app-modificata/image_027.png)

![](images/dexcom-g5-g6-app-modificata/image_028.png)

6. Accedi a **Clarity** con il tuo nome utente e password abituali.
   > ⚠️ Se ti registri per la prima volta, usa solo **lettere minuscole** nel nome utente.

![](images/dexcom-g5-g6-app-modificata/image_029.png)

![](images/dexcom-g5-g6-app-modificata/image_030.png)

![](images/dexcom-g5-g6-app-modificata/image_031.png)

7. Se hai già un sensore avviato:
   - Seleziona **Codice assente** (per un sensore già in corso, non inserire un nuovo codice).
   - Inserisci manualmente il **codice del trasmettitore** annotato al passo 1 (oppure fotografa la confezione).

![](images/dexcom-g5-g6-app-modificata/image_032.png)

![](images/dexcom-g5-g6-app-modificata/image_033.png)

![](images/dexcom-g5-g6-app-modificata/image_034.png)

![](images/dexcom-g5-g6-app-modificata/image_035.png)

![](images/dexcom-g5-g6-app-modificata/image_036.png)

![](images/dexcom-g5-g6-app-modificata/image_037.png)

![](images/dexcom-g5-g6-app-modificata/image_038.png)

![](images/dexcom-g5-g6-app-modificata/image_039.png)

![](images/dexcom-g5-g6-app-modificata/image_040.png)

![](images/dexcom-g5-g6-app-modificata/image_041.png)

8. Concedi i permessi **Bluetooth** e **Geolocalizzazione** (entrambi necessari).

![](images/dexcom-g5-g6-app-modificata/image_042.png)

![](images/dexcom-g5-g6-app-modificata/image_043.png)

![](images/dexcom-g5-g6-app-modificata/image_044.png)

![](images/dexcom-g5-g6-app-modificata/image_045.png)

![](images/dexcom-g5-g6-app-modificata/image_046.png)

![](images/dexcom-g5-g6-app-modificata/image_047.png)

![](images/dexcom-g5-g6-app-modificata/image_048.png)

![](images/dexcom-g5-g6-app-modificata/image_049.png)

9. Entro qualche minuto la glicemia apparirà sullo schermo.

![](images/dexcom-g5-g6-app-modificata/image_050.png)

> ⚠️ Solo **un telefono alla volta** può essere collegato al sensore. Se un altro telefono è già collegato, spegnilo e aspetta 15 minuti prima di avviare quello nuovo.

![](images/dexcom-g5-g6-app-modificata/image_051.png)

---

## 4. Collega xDrip+ (opzionale)

Se vuoi ricevere la glicemia anche in xDrip+ (ad esempio per un smartwatch):

1. Segui la [guida base di installazione di xDrip+](./installare-xdrip-android).
2. Come sorgente dati, scegli **640G / Eversense** — questo fa ricevere i dati direttamente dall'app modificata senza passare dal server Dexcom Share.

![](images/dexcom-g5-g6-app-modificata/image_052.png)

![](images/dexcom-g5-g6-app-modificata/image_053.png)

![](images/dexcom-g5-g6-app-modificata/image_054.png)

![](images/dexcom-g5-g6-app-modificata/image_055.png)

![](images/dexcom-g5-g6-app-modificata/image_056.png)

![](images/dexcom-g5-g6-app-modificata/image_057.png)

3. Quando xDrip+ chiede di inizializzare il sensore, scegli **Non oggi** (non è necessaria una vera inizializzazione con questa sorgente).

![](images/dexcom-g5-g6-app-modificata/image_058.png)

![](images/dexcom-g5-g6-app-modificata/image_059.png)

![](images/dexcom-g5-g6-app-modificata/image_060.png)

4. In xDrip+, imposta questo telefono come **master** — così potrai usare un altro telefono come follower senza dipendere dai server Dexcom.

![](images/dexcom-g5-g6-app-modificata/image_061.png)

![](images/dexcom-g5-g6-app-modificata/image_062.png)

![](images/dexcom-g5-g6-app-modificata/image_063.png)
