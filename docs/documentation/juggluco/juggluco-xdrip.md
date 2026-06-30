# Juggluco con FSL 2 e xDrip+ per Android

Questa guida spiega come usare **Juggluco** per leggere un sensore **FSL 2** e inviare i dati a **xDrip+**, che gestirà condivisione, allarmi e visualizzazione sullo smartwatch.

> ℹ️ L'app FSL 2 ufficiale (LLink) ora supporta la lettura continua senza scansionare il sensore. Usare Juggluco per questo scopo non è più indispensabile, ma rimane utile per chi vuole integrare xDrip+ nel proprio sistema.

> ⚠️ Come qualsiasi app di terza parte, collegare un sensore FSL 2 a Juggluco **disabilita definitivamente gli allarmi dell'app ufficiale** per quel sensore. Se vuoi ripristinare la funzionalità, prova a disinstallare Juggluco e reinstallare l'app ufficiale con lo stesso account — ma il recupero non è garantito. L'abbinamento invalida la garanzia: non potrai richiedere la sostituzione del sensore per problemi di allarmi mancanti.

> ⚠️ Se installi Juggluco sul telefono di un bambino, disabilita temporaneamente **Play Protect** prima dell'installazione.

**Requisiti:** telefono Android 4.4 o superiore, con Bluetooth 4.2 (BLE) e lettore NFC.

Documentazione originale: `http://jkaltes.byethost16.com/Juggluco/`

![](images/juggluco-xdrip/image_001.png)

---

## 1. Prerequisito — Disinstalla o disabilita l'app LLink

Disinstalla l'app LLink (o disabilitala togliendole l'accesso alla geolocalizzazione). Se LLink è attiva in background, interferirà con Juggluco.

---

## 2. Installa Juggluco

Juggluco non è disponibile nel Google Play Store. Scaricala dal sito ufficiale:

`https://www.juggluco.nl/Juggluco/download.html`

![](images/juggluco-xdrip/image_002.png)

![](images/juggluco-xdrip/image_003.png)

Installa il file `.apk` e apri l'app. Autorizza il collegamento, l'accesso alla posizione e consenti a Juggluco di non essere ottimizzata dalla batteria.

![](images/juggluco-xdrip/image_004.png)

![](images/juggluco-xdrip/image_005.png)

![](images/juggluco-xdrip/image_006.png)

![](images/juggluco-xdrip/image_007.png)

![](images/juggluco-xdrip/image_008.png)

---

## 3. Collega il sensore

Con Juggluco aperto, scansiona il sensore con l'NFC del telefono. Sono necessarie due scansioni per collegare un nuovo sensore.

- Dopo la **prima scansione** compare una schermata di conferma: fai **OK**.

![](images/juggluco-xdrip/image_009.png)

- Se appare un messaggio che chiede quale app usare, seleziona **Juggluco** (non LLink).

![](images/juggluco-xdrip/image_010.png)

- Dopo la **seconda scansione** comparirà la curva di glicemia: fai **OK**.

![](images/juggluco-xdrip/image_011.png)

![](images/juggluco-xdrip/image_012.png)

Entro un minuto dovresti vedere i valori in tempo reale (scorri il grafico verso sinistra).

![](images/juggluco-xdrip/image_013.png)

Se dopo qualche minuto non hai dati:
1. Verifica che LLink sia disabilitata o disinstallata.
2. Prova a scansionare di nuovo il sensore.
3. Prova a riavviare il telefono e scansionare di nuovo.

---

## 4. Configura Juggluco

Apri il **Menu 1** (tocca in alto a sinistra nello schermo).

![](images/juggluco-xdrip/image_016.png)

In **Sensore**:
- Verifica che **Usa Bluetooth** sia abilitato.
- Se hai perso il collegamento, prova **Riabilita** e poi scansiona il sensore.
- La colonna **Ultimo successo** deve mostrare l'orario dell'ultima lettura.

![](images/juggluco-xdrip/image_017.png)

In **Impostazioni**:
- Abilita **Trasmissione letture a xDrip+** (nelle versioni più recenti l'opzione può avere un nome leggermente diverso).

![](images/juggluco-xdrip/image_018.png)

![](images/juggluco-xdrip/image_019.png)

- **Inverti schermo** attiva la modalità scura.

![](images/juggluco-xdrip/image_020.png)

- Abilita **Sensore via Bluetooth** — obbligatorio per il collegamento diretto con FSL 2.

![](images/juggluco-xdrip/image_021.png)

![](images/juggluco-xdrip/image_022.png)

> ℹ️ Nel menu **Orologio** trovi WatchDrip+ per la compatibilità con Amazfit/MiBand, Kerfstok per Garmin, e GlucoDataHandler per Wear OS e Samsung Gear.

![](images/juggluco-xdrip/image_024.png)

![](images/juggluco-xdrip/image_025.png)

![](images/juggluco-xdrip/image_026.png)

---

## 5. Configura xDrip+

Se non hai ancora xDrip+, installalo seguendo la [guida base](../xdrip/installare-xdrip-android).

Nell'app xDrip+, scegli come sorgente dati **App Libre patchata** — questa è l'opzione che riceve i dati da Juggluco.

![](images/juggluco-xdrip/image_027.png)

Se non ricevi le letture di Juggluco in xDrip+, vai nel menù di xDrip+ e fai **Avvia nuovo sensore (non avviato oggi)**.

> ℹ️ Puoi applicare una correzione di calibrazione tra −40 e +20 mg/dL se il sensore non è ben allineato con la glicemia capillare. Esegui la calibrazione **solo a glicemia stabile, nel range 80–140 mg/dL**.

---

## Condivisione con altri dispositivi

Con xDrip+ puoi condividere la glicemia con altri telefoni Android tramite **xDrip+ Sync** (guida: Condivisione con xDrip+).

Per condividere con iPhone, è necessario Nightscout.
