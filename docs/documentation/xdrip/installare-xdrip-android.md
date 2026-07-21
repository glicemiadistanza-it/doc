# Installare xDrip per Android

Guida aggiornata al 17 settembre 2023.

xDrip è un'app Android gratuita e open source che permette di ricevere le letture del sensore CGM (monitor continuo della glicemia), abbinarsi a uno smartwatch e impostare allarmi personalizzati. Questa guida spiega come installarla passo dopo passo.

> ⚠️ **xDrip non è un dispositivo medico.** Non usarlo per prendere decisioni terapeutiche. L'utilizzo è a esclusiva responsabilità personale.

**Requisiti:** telefono Android versione 8 o superiore. Per collegare un sensore o uno smartwatch è necessario il Bluetooth 4.2 (BLE). Senza Google Play Store la funzione Sync Follower (senza Nightscout) non è disponibile.

## 1. Hai già xDrip installato?

**No → vai direttamente al [passo 2](#step2).**

**Sì** → controlla prima la versione installata dal menu principale, voce **Stato del sistema**: la versione compare in alto.

![](images/Menu-StatoSistema.png)

- Le versioni ufficiali hanno un numero di build seguito dalla data, come in questo esempio (versione di sviluppo):

![](images/installare-xdrip-android/image_003.png)

- Un numero di build "pulito" seguito solo dalla data è un buon segno:

![](images/installare-xdrip-android/image_004.png)

- Se vedi `dev`, `debug` o un nome di funzionalità sperimentale nel numero di build (come in questi esempi), non puoi aggiornare automaticamente: devi disinstallare e reinstallare.

![](images/installare-xdrip-android/image_005.png)

____

**Se hai una versione ufficiale, prosegui al [passo 6](#step6).**

____

### Esegui un backup prima di disinstallare

1. Dalla schermata principale, apri il menu a tre puntini in alto a destra:

![](images/Menu3Punti.png)

Seleziona **Funzioni di importazione / esportazione**:

![](images/installare-xdrip-android/image_008.png)

Tocca **Esporta Database** (autorizza l'accesso alla memoria se richiesto):

![](images/installare-xdrip-android/image_006.png)

![](images/installare-xdrip-android/image_061.png)

Verifica che il file sia stato salvato:

![](images/installare-xdrip-android/image_009.png)

2. Per conservare anche le impostazioni, tocca **Carica/Salva impostazioni su memoria**::

   ![](images/installare-xdrip-android/image_006.png)

   Tocca **Salvare tutte le impostazioni nella SDcard** (cioè direttamente sulla memoria del telefono):

   ![](images/installare-xdrip-android/image_013.png)

2. Se vuoi creare un altra copia di sicurezza per le impostazioni, apri il menu principale e vai in **Impostazioni**:

![](images/Menu-Impostazioni.png)

Scorri fino a **Impostazioni di copia** e tocca **Mostra impostazioni dei codici QR**:

![](images/installare-xdrip-android/image_012.png)

Seleziona **COPIARE TUTTE LE IMPOSTAZIONI**, salva il codice QR (fai uno screenshot e mandalo a te stesso via WhatsApp o email):

![](images/installare-xdrip-android/image_015.png)

> 

### Disinstalla xDrip

> ⚠️ Disinstallare non significa solo rimuovere l'icona dalla schermata principale: deve apparire la pattumiera. Vai nelle **Impostazioni Android → App**, cerca xDrip...

![](images/installare-xdrip-android/image_017.png)

...ed entra nella sua pagina per premere **Disinstalla**:

![](images/installare-xdrip-android/image_016.png)

---

## 2. Quale versione installare? {#step2}

Installa sempre l'ultima **Pre-release** dalla pagina ufficiale della Nightscout Foundation. Le Pre-release sono versioni recenti con le ultime modifiche.

---

## 3. Scarica e installa xDrip

1. Dal tuo telefono Android, vai su:
   [`https://github.com/NightscoutFoundation/xDrip/releases`](https://github.com/NightscoutFoundation/xDrip/releases)
2. Trova l'ultima **Pre-release** in cima alla lista, riconoscibile dall'etichetta arancione:

![](images/installare-xdrip-android/image_018.png)

3. Espandi la sezione **Assets** e tocca il file `.apk` per scaricarlo.
4. Se non riesci a scaricarlo, tieni premuto il link e scegli **Apri in un'altra scheda** o **Scarica link**:

![](images/installare-xdrip-android/image_019.png)

A download completato, il sistema potrebbe chiederti direttamente conferma di installazione:

![](images/installare-xdrip-android/image_020.png)

**Il telefono dice che l'app non è sicura?**
xDrip non è sul Play Store ma è open source e sicuro se scaricato dalla pagina ufficiale.

Se compare **Google Play Protect**, scegli **Altri dettagli**, quindi **Installa comunque**:

![](images/installare-xdrip-android/image_058.png)

![](images/installare-xdrip-android/image_021.png)

Poi autorizza l'installazione da sorgenti sconosciute:

![](images/installare-xdrip-android/image_022.png)

Se invece il download stesso viene segnalato come pericoloso dal browser, tocca **OK** per conservarlo comunque:

![](images/installare-xdrip-android/image_046.png)

All'apertura del file, conferma di nuovo le sorgenti sconosciute:

![](images/installare-xdrip-android/image_047.png)

Se il telefono blocca comunque l'installazione, tocca **IMPOSTAZIONI**:

![](images/installare-xdrip-android/image_048.png)

E abilita **Sorgenti sconosciute** nella sezione Sicurezza:

![](images/installare-xdrip-android/image_049.png)

**L'ho scaricato ma non succede niente?**
Apri l'app **Archivio** o **File Manager** del telefono e vai in **Memoria dispositivo**:

![](images/installare-xdrip-android/image_050.png)

Poi entra nella cartella **Download** e tocca il file `.apk` di xDrip per installarlo:

![](images/installare-xdrip-android/image_056.png)

**Il file apre cartelle invece di installarsi?**
Il file deve avere estensione `.apk`.

![](images/installare-xdrip-android/image_051.png)

Se è stato scaricato come `.zip`, rinominalo in `.apk`:

![](images/installare-xdrip-android/image_052.png)

**Ancora niente?**
Cerca un'app **APK Installer** sul [Play Store](https://play.google.com/store/search?q=apk%20installer&c=apps) (ce ne sono diverse, tutte molto simili), installala, aprila e tocca **Install APKs**:

![](images/installare-xdrip-android/image_053.png)

Concedi l'accesso alla memoria quando richiesto:

![](images/installare-xdrip-android/image_054.png)

xDrip apparirà in **LOCAL APKS**: selezionalo e premi **INSTALL**:

![](images/installare-xdrip-android/image_055.png)

A installazione completata, tocca **Apri**:

![](images/installare-xdrip-android/image_057.png)

---

## 4. Prima apertura

Al primo avvio accetta le condizioni d'uso (obbligatorio per procedere):

![](images/installare-xdrip-android/image_059.png)

![](images/installare-xdrip-android/image_023.png)

Poi il contratto di licenza con l'utente finale:

![](images/installare-xdrip-android/image_024.png)

Concedi tutti i permessi che l'app richiede, inclusa la **posizione** (necessaria per il Bluetooth):

![](images/installare-xdrip-android/image_026.png)

Seleziona **Consenti l'accesso nelle impostazioni**:

![](images/installare-xdrip-android/image_027.png)

> ℹ️ **Nota**: In alcuni casi Android apre direttamente la pagina completa delle impostazioni di posizione invece del dialogo rapido:

![](images/installare-xdrip-android/image_060.png)

Se il Bluetooth segnala che la posizione non è abilitata, tocca **Consentire**:

![](images/installare-xdrip-android/image_028.png)

> ℹ️ Se ti viene chiesto di ignorare le ottimizzazioni della batteria, premi **Sì**. Se questa richiesta si ripresenta in futuro, vai in **Impostazioni Android → App → xDrip** e disabilita l'ottimizzazione della batteria.

![](images/installare-xdrip-android/image_025.png)

Se hai già xDrip installato e stai solo aggiornando, l'app si aprirà normalmente: hai finito.

---

## 5. Ripristina impostazioni e dati precedenti

> ℹ️ **Se è la prima installazione, salta questo passo e vai direttamente al [passo 6](#step6).**

- Per ripristinare il **database** (storico glicemie): dalla schermata principale, apri il menu a tre puntini in alto a destra...

![](images/Menu3Punti.png)

...vai in **Funzioni di importazione / esportazione**:

![](images/installare-xdrip-android/image_008.png)

e  **Ripristina database**:

![](images/installare-xdrip-android/image_006.png)

Leggi l'avviso e conferma (non aggiunge i vecchi dati a quelli attuali: sostituisce l'intero database con quello che avevi salvato):

![](images/installare-xdrip-android/image_010.png)

Seleziona il file esportato al passo 1.

Se non funziona, conferma e ripeti fino a 3 volte se necessario (alcune versioni hanno un bug noto):

![](images/installare-xdrip-android/image_011.png)

![](images/installare-xdrip-android/image_064.png)

![](images/installare-xdrip-android/image_065.png)

- Le impostazioni dovrebbero essere state ricaricate insieme al backup del database. Se hai già ricuperato la funzionailtà non è necessario ripristinarle.
- Per ripristinare le **impostazioni**: apri il menu 3 puntini in alto a sinistra e vai in **Carica/Salva impostazioni su memoria**::

![](images/installare-xdrip-android/image_006.png)

Tocca **Caricare tutte le impostazioni dalla SDcard** :

![](images/installare-xdrip-android/image_013.png)

> ⚠️ Se questo è un telefono **master** (collegato direttamente al sensore), verifica o ricrea gli allarmi dopo il ripristino.

Hai completato la reinstallazione di xDrip con la versione ufficiale, adesso potrai beneficiare degli aggiornamenti automatici e le nuove funzionalità dell'app.

Puoi proseguire la letture se vuoi modificare la configurazione che utilizzavi.

---

## 6. Scegli la sorgente dati {#step6}

Una volta installato xDrip, devi indicare da dove arriveranno i valori di glicemia, si apre la guida automatica per selezionare i sensori e servizi cloud più comuni:

| Sensore o servizio Cloud:                        | Sorgente da scegliere:                                |
| ------------------------------------------------ | ----------------------------------------------------- |
| FSL con MiaoMiao, Bubble o Blucon                | **Libre - Dispositivo Bluetooth**                     |
| FSL2 collegamento diretto                        | **Libre - Dispositivo Bluetooth**                     |
| FSL2 app patchata / Juggluco                     | **Libre - Libre2 app**                                |
| Dexcom G6/ONE/G7/ONE+ diretto **(solo esperti)** | **Dex**                                               |
| Follower Dexcom Share                            | **Altro - Dex Share Follower**                        |
| Follower LLink                                   | **Altro - Web Follower**                              |
| Follower Nightscout                              | **Altro - Nightscout Follower**                       |
| Follower CareLink (Medtronic)                    | Vedi nella [lista](#non-wizard) **Carelink Follower** |
| Compagno di CamAPS / app Dexcom ufficiale        | Vedi nella [lista](#non-wizard) **Companion App**     |
| App Dexcom BYODA / Medtronic con glucometro      | **Altro - 640G**                                      |

![](images/installare-xdrip-android/image_035.png)

Se non si apre, tocca il pulsante AVVIA CONFIGURAZIONE GUIDATA

![](images/installare-xdrip-android/image_033.png)

Se non lo vedi, tieni premuta la goccia di sangue nella schermata principale...

![](images/installare-xdrip-android/image_034.png)

... e abilita il **Pulsante assistente sorgente** nelle impostazioni di visualizzazione:

![](images/installare-xdrip-android/image_032.png)

Se vuoi collegare xDrip direttamente a un sensore Dexcom, scegli **Dex**:

> ⚠️ Attenzione! Questa modalità impedisce l'uso dell'app Dexcom. Non è il metodo consigliato per iniziare a usare xDrip se hai l'app ufficiale installata. Prova prima con la modalità [Compagnon app](./xdrip-compagno.md) oppure come [follower Dexcom Share](./xdrip-follower-dexcom.md).

![](images/installare-xdrip-android/image_036.png)

Per **Libre** con una zecca (miaomiao, Bubble, ...): seleziona Dispositivo Bluetooth.

Se vuoi usare xDrip che riceve i dati da Juggluco: seleziona Libre2 app.

Se vuoi sapere cos'era LibreAlarm: è un progetto ormai [archiviato](https://github.com/pimpimmi/LibreAlarm/wiki/).

![](images/installare-xdrip-android/image_037.png)

Se scegli **Other**, trovi altri sensori e soluzioni.

xDrip Sync Follower per seguire un telefonino xDrip master.

Medtrum è obsoleto: non funziona con i sensori moderni.

![](images/installare-xdrip-android/image_038.png)

Eversense richiede l'app patchata.

![](images/installare-xdrip-android/image_039.png)

<span id="non-wizard"></span>

Se non vedi la sorgente che cerchi, devi selezionarla dalla lista completa:

Apri il menu e vai in **Impostazioni**:

![](images/Menu.png)

![](images/Menu-Impostazioni.png)

Tocca **Dati Hardware di origine**:

![](images/Menu-Impostazioni-SorgenteDati.png)

Troverai l'elenco completo di tutte le sorgenti disponibili:

![](images/installare-xdrip-android/image_062.png)

![](images/installare-xdrip-android/image_063.png)

A configurazione completata, la schermata **Impostazioni** mostrerà la sorgente scelta.

