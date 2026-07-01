# Installare xDrip+ per Android

Guida aggiornata al 17 settembre 2023.

xDrip+ è un'app Android gratuita e open source che permette di ricevere le letture del sensore CGM (monitor continuo della glicemia), abbinarsi a uno smartwatch e impostare allarmi personalizzati. Questa guida spiega come installarla passo dopo passo.

> ⚠️ **xDrip+ non è un dispositivo medico.** Non usarlo per prendere decisioni terapeutiche. L'utilizzo è a esclusiva responsabilità personale.

**Requisiti:** telefono Android versione 5 o superiore. Per collegare un sensore o uno smartwatch è necessario il Bluetooth 4.2 (BLE). Senza Google Play Store la funzione Sync Follower (senza Nightscout) non è disponibile.

## 1. Hai già xDrip+ installato?

**No** → vai direttamente al passo 3.

**Sì** → controlla prima la versione installata:
- Apri xDrip+, menu tre punti → **Stato del sistema**. La versione compare in alto.
- Le versioni ufficiali hanno un numero di build seguito dalla data (esempio: `2023.09.17`).
- Se vedi `dev`, `debug` o simili, non puoi aggiornare automaticamente: devi disinstallare e reinstallare.

![](images/installare-xdrip-android/image_002.png)

![](images/installare-xdrip-android/image_003.png)

![](images/installare-xdrip-android/image_004.png)

![](images/installare-xdrip-android/image_005.png)

### Esegui un backup prima di disinstallare

1. Dal menu principale, vai in **Lista trattamenti** → **Esporta database** (autorizza l'accesso alla memoria se richiesto). Verifica che il file sia stato salvato con la data di oggi.

![](images/installare-xdrip-android/image_006.png)

![](images/installare-xdrip-android/image_007.png)

![](images/installare-xdrip-android/image_008.png)

![](images/installare-xdrip-android/image_009.png)

![](images/installare-xdrip-android/image_010.png)

![](images/installare-xdrip-android/image_011.png)

2. Per conservare anche le impostazioni, vai in **Impostazioni** → **Impostazioni xDrip+** → **Backup** → salva il codice QR (fai uno screenshot e mandalo a te stesso via WhatsApp o email).

![](images/installare-xdrip-android/image_012.png)

![](images/installare-xdrip-android/image_013.png)

![](images/installare-xdrip-android/image_014.png)

![](images/installare-xdrip-android/image_015.png)

### Disinstalla xDrip+

> ⚠️ Disinstallare non significa solo rimuovere l'icona dalla schermata principale: deve apparire la pattumiera. Vai nelle **Impostazioni Android → App**, cerca xDrip+ e premi **Disinstalla**.

![](images/installare-xdrip-android/image_016.png)

![](images/installare-xdrip-android/image_017.png)

---

## 2. Quale versione installare?

Installa sempre l'ultima **Pre-release** dalla pagina ufficiale della Nightscout Foundation. Le Pre-release sono versioni testate e consigliate per l'uso quotidiano.

---

## 3. Scarica e installa xDrip+

1. Dal tuo telefono Android, vai su:
   `https://github.com/NightscoutFoundation/xDrip/releases`
2. Trova l'ultima **Pre-release** in cima alla lista.
3. Espandi la sezione **Assets** e tocca il file `.apk` per scaricarlo.
4. Se non riesci a scaricarlo, tieni premuto il link e scegli **Apri in un'altra scheda** o **Scarica link**.

![](images/installare-xdrip-android/image_018.png)

![](images/installare-xdrip-android/image_019.png)

**Il telefono dice che l'app non è sicura?**
xDrip+ non è sul Play Store ma è open source e sicuro se scaricato dalla pagina ufficiale. Scegli **Installa comunque** e autorizza l'installazione da sorgenti sconosciute.

![](images/installare-xdrip-android/image_020.png)

![](images/installare-xdrip-android/image_021.png)

![](images/installare-xdrip-android/image_046.png)

![](images/installare-xdrip-android/image_047.png)

![](images/installare-xdrip-android/image_048.png)

![](images/installare-xdrip-android/image_049.png)

**L'ho scaricato ma non succede niente?**
Apri l'app **Archivio** o **File Manager** del telefono, vai nella cartella **Download** e tocca il file `.apk` per installarlo.

![](images/installare-xdrip-android/image_050.png)

![](images/installare-xdrip-android/image_051.png)

**Il file apre cartelle invece di installarsi?**
Il file deve avere estensione `.apk`. Se è stato scaricato come `.zip`, rinominalo in `.apk`.

![](images/installare-xdrip-android/image_052.png)

**Ancora niente?**
Scarica [APK Installer](https://play.google.com/store/apps/details?id=com.apkinstaller.ApkInstaller) dal Play Store, aprilo, vai in **Install APKs** e concedi l'accesso alla memoria. xDrip+ apparirà in **LOCAL APKS** → selezionalo e premi **INSTALL**.

![](images/installare-xdrip-android/image_053.png)

![](images/installare-xdrip-android/image_054.png)

![](images/installare-xdrip-android/image_055.png)

---

## 4. Prima apertura

Al primo avvio accetta le condizioni d'uso (obbligatorio per procedere). Concedi tutti i permessi che l'app richiede, inclusa la **posizione** (necessaria per il Bluetooth).

![](images/installare-xdrip-android/image_023.png)

![](images/installare-xdrip-android/image_022.png)

![](images/installare-xdrip-android/image_026.png)

![](images/installare-xdrip-android/image_027.png)

![](images/installare-xdrip-android/image_028.png)

> ℹ️ Se ti viene chiesto di ignorare le ottimizzazioni della batteria, premi **Sì**. Se questa richiesta si ripresenta in futuro, vai in **Impostazioni Android → App → xDrip+** e disabilita l'ottimizzazione della batteria.

![](images/installare-xdrip-android/image_024.png)

![](images/installare-xdrip-android/image_025.png)

Se hai già xDrip+ installato e stai solo aggiornando, l'app si aprirà normalmente: hai finito.

---

## 5. Ripristina impostazioni e dati precedenti

> ℹ️ Se è la prima installazione, salta questo passo.

- Per ripristinare il **database** (storico glicemie): menu tre punti → **Importa database** → seleziona il file esportato al passo 1. Conferma e ripeti fino a 3 volte se necessario (alcune versioni hanno un bug noto).

![](images/installare-xdrip-android/image_029.png)

![](images/installare-xdrip-android/image_030.png)

![](images/installare-xdrip-android/image_031.png)

![](images/installare-xdrip-android/image_010.png)

![](images/installare-xdrip-android/image_011.png)

- Per ripristinare le **impostazioni**: menu tre punti → **Importa impostazioni** → scansiona il codice QR salvato in precedenza.

![](images/installare-xdrip-android/image_012.png)

![](images/installare-xdrip-android/image_013.png)

![](images/installare-xdrip-android/image_014.png)

> ⚠️ Se questo è un telefono **master** (collegato direttamente al sensore), verifica o ricrea gli allarmi dopo il ripristino.

---

## 6. Scegli la sorgente dati

Una volta installato xDrip+, devi indicare da dove arriveranno i valori di glicemia. Tieni premuta la **goccia** nella schermata principale per aprire il menu della sorgente dati (abilita **Source Wizard Button** se non lo vedi).

![](images/installare-xdrip-android/image_032.png)

![](images/installare-xdrip-android/image_033.png)

![](images/installare-xdrip-android/image_034.png)

| Situazione | Sorgente da scegliere |
|---|---|
| FSL con MiaoMiao, Bubble o Blucon | **Bluetooth Bridge** |
| FSL2 collegamento diretto | **Bluetooth Bridge** |
| FSL2 app patchata / Juggluco | **640G** o come indicato nell'app |
| Dexcom G5/G6 diretto (solo esperti) | **G5/G6** |
| Follower Dexcom Share | **Dex Share Follower** |
| Follower Nightscout | **Nightscout Follower** + URL del sito |
| Follower CareLink (Medtronic) | **CareLink Follower** |
| Compagno di CamAPS / app Dexcom ufficiale | **Companion App** |
| Medtronic 640G/670G | **640G** |

> ⚠️ Se ti colleghi a Dexcom tramite Share o app ufficiale, **NON selezionare** G5 o G6 diretto.

![](images/installare-xdrip-android/image_035.png)

![](images/installare-xdrip-android/image_036.png)

![](images/installare-xdrip-android/image_037.png)

![](images/installare-xdrip-android/image_038.png)

![](images/installare-xdrip-android/image_039.png)

![](images/installare-xdrip-android/image_040.png)

![](images/installare-xdrip-android/image_041.png)

Se non trovi la sorgente che cerchi, vai in **Menu → Impostazioni → Dati hardware di origine** per la lista completa.

![](images/installare-xdrip-android/image_042.png)

![](images/installare-xdrip-android/image_043.png)

![](images/installare-xdrip-android/image_044.png)

![](images/installare-xdrip-android/image_045.png)

---

## Smartwatch supportati

xDrip+ invia la glicemia direttamente a questi dispositivi:
- **Android Wear OS** (quadrante dedicato)
- **Fitbit** Versa, Versa 2, Ionic
- **Samsung** Galaxy Watch, Gear S2/S3
- **Garmin** (verifica il quadrante su [apps.garmin.com](https://apps.garmin.com))
- **Xiaomi** Mi Band 4, 5, 6
- **Amazfit** Bip, GTR, GTS e altri modelli
