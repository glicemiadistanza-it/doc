# Juggluco per Android

Guida base passo passo per l'installazione di Juggluco su Android. Juggluco legge da solo, senza altre app, i sensori **FSL2**, **FSL3** e **Dexcom G7 / ONE+** (oltre ad altri sensori meno diffusi in Italia). Puoi anche usare Juggluco solo per scansionare un sensore FSL 1 o FSL2, senza abbinarlo stabilmente.

> ⚠️ È necessario un telefono Android dalla versione 5 in su, con supporto Bluetooth 4.2 (BLE) e lettore NFC. Per FSL3, per i FSL2 di USA/Canada/Australia e per la versione del Play Store serve **Android 8 o superiore**. Con Android 12 o superiore l'app chiede il permesso **Dispositivi nelle vicinanze**, con Android 13 anche quello per le **notifiche**: concedili entrambi.

> ⚠️ Come qualsiasi app di terza parte, l'uso con un sensore FSL2 o FSL3 **disabiliterà gli allarmi di LLink definitivamente**, senza possibilità di ripristino. L'abbinamento di un sensore a Juggluco invalida la garanzia e non si può chiedere la sostituzione per problemi di allarmi mancanti.

> ⚠️ Se vuoi installare Juggluco sul telefonino di un bambino, Play Protect va disabilitato temporaneamente.

Documentazione originale: [`https://www.juggluco.nl/Juggluco/index.html`](https://www.juggluco.nl/Juggluco/index.html)

![](images/juggluco-android/image_001.png)

## 1. Contenuto della guida

2. [Prerequisito](#2-prerequisito)
3. [Installare Juggluco](#3-installare-juggluco)
4. [Collegare il sensore](#4-collegare-il-sensore)
5. [Configurare Juggluco](#5-configurare-juggluco)

## 2. Prerequisito

L'app **LLink non deve essere attiva** sul telefono: disinstallala, disabilitala oppure forzane l'arresto (da **Impostazioni Android → App → LLink**). Se LLink resta attiva in background, si "ruberà" il collegamento Bluetooth del sensore.

> ℹ️ **Nota**: a differenza del passato, Juggluco non ha più bisogno delle librerie di LLink: non serve avere LLink installata, né una versione particolare.

Regole per sensore:
- **FSL2 (Europa)**: tollera più app collegate contemporaneamente, ma gli allarmi diventano inaffidabili — meglio una sola app.
- **FSL2 (USA/Canada/Australia) e tutti i FSL3**: si collegano a **una sola app alla volta**. Per passare da un'app all'altra devi forzare l'arresto dell'app che non usi e riscansionare il sensore.

## 3. Installare Juggluco

Juggluco è disponibile nel Google Play Store. Aprilo e cerca "juggluco" oppure segui questo link:

[`https://play.google.com/store/apps/details?id=tk.glucodata`](https://play.google.com/store/apps/details?id=tk.glucodata)

In alternativa puoi scaricare il file `.apk` dal sito ufficiale (utile per i telefoni senza Play Store o con Android più vecchio): [`https://www.juggluco.nl/Juggluco/download.html`](https://www.juggluco.nl/Juggluco/download.html)

![](images/juggluco-android/image_002.png)

Una volta installata, l'app compare così, con i pulsanti **Disinstalla** e **Apri**:

![](images/juggluco-android/image_003.png)

Apri Juggluco. Autorizza il collegamento e l'accesso alla posizione:

![](images/juggluco-android/image_004.png)

Autorizza anche Juggluco a non essere ottimizzata dalla batteria, così può restare in esecuzione in background:

![](images/juggluco-android/image_005.png)

Alla primissima apertura scegli **Apri** (il pulsante **Senza sensore** serve solo per la modalità follower, senza accesso diretto al sensore):

![](images/juggluco-android/image_006.png)

Si apre la schermata principale di Juggluco, in modalità orizzontale (non è possibile passare alla modalità verticale):

![](images/juggluco-android/image_007.png)

## 4. Collegare il sensore

### Sensore FSL2

Lascia Juggluco aperto e scansiona il sensore con l'NFC del telefono. Servono due scansioni per collegare un nuovo sensore.

Dopo la prima scansione dovrebbe comparire una schermata di conferma: fai **OK**.

![](images/juggluco-android/image_008.png)

Se vedi un messaggio che chiede quale app usare (durante qualsiasi scansione), seleziona **Juggluco** (non LLink):

![](images/juggluco-android/image_009.png)

Dopo la seconda scansione dovresti vedere la curva di glicemia: fai **OK**.

![](images/juggluco-android/image_010.png)

Una volta tornato al grafico principale, la scansione compare con un punto verde:

![](images/juggluco-android/image_011.png)

Entro un minuto dovresti vedere i valori in tempo reale (scorri il grafico verso sinistra):

![](images/juggluco-android/image_012.png)

Se dopo qualche minuto non hai dati:

1. Verifica che l'app LLink sia disabilitata, senza accesso alla geolocalizzazione, oppure disinstallata.
2. Prova a scansionare di nuovo il sensore.
3. Prova a riavviare il telefono e scansionare di nuovo.

La glicemia compare nella tendina delle notifiche. Tocca **JUGGLUCO** per aprire l'app:

![](images/juggluco-android/image_013.png)

Se il tuo telefono lo supporta, il valore appare anche nelle icone in alto a sinistra:

![](images/juggluco-android/image_014.png)

### Sensore FSL3

Con i sensori FSL3 serve un passaggio in più **prima** di scansionare il sensore: Juggluco deve conoscere l'**Account ID** del tuo account LView.

1. Vai nel menu in alto a sinistra → **Settings → Exchange data → Libreview**.
2. Inserisci email e password del tuo account LView e tocca **Get Account ID**, poi **From Libreview**.
3. Ora scansiona il sensore con l'NFC come per il FSL2.

Regole importanti:

- Juggluco può **avviare da solo** un sensore FSL3, oppure **subentrare** a un sensore già attivato con l'app FSL3 di Abbott (non con il lettore, né con l'app "unificata"). Il subentro funziona solo con l'Account ID originale con cui il sensore è stato attivato.
- Il sensore FSL3 si collega a **una sola app alla volta**: forza l'arresto dell'app che non stai usando. Il primo collegamento può richiedere qualche minuto; se non arriva, prova a spegnere e riaccendere il Bluetooth o a riavviare il telefono.

### Sensore Dexcom G7 / ONE+

Juggluco supporta anche i Dexcom G7 e ONE+ (il G6 invece **non è supportato**). Non serve l'NFC:

1. Vai nel menu in alto a sinistra → **Photo**.
2. Scansiona con la fotocamera il **codice data matrix stampato sull'applicatore** del sensore.
3. Alla prima connessione comparirà la richiesta di **abbinamento Bluetooth** di Android: **tieni lo schermo acceso** e conferma subito. Il G7 e il ONE+ si collegano solo ogni 5 minuti: se perdi la richiesta, dovrai aspettare il tentativo successivo.

## 5. Configurare Juggluco

Ci sono 4 menu, raggiungibili con un tocco in 4 diverse zone dello schermo (angoli in alto a sinistra, in alto a destra, in basso a sinistra e in basso a destra):

![](images/juggluco-android/image_015.png)

### Menu 1

**System UI:** attiva o disattiva la vista a schermo pieno.

**Watch:**

![](images/juggluco-android/image_016.png)

- **WearOS** permette di configurare il quadrante Juggluco su uno smartwatch Android Wear. Nel menu **WearOS Config**, scegli il tuo dispositivo e fai **Init watch app** (non usare *Direct sensor-watch connection*). Lo smartwatch dovrebbe ricevere la glicemia dal telefono tramite Bluetooth.

![](images/juggluco-android/image_017.png)

  - In alternativa, puoi installare Juggluco dal Google Play Store dello smartwatch abbinato al telefono (cerca "Juggluco"). Con i vecchi smartwatch, puoi installarlo anche dalle app presenti sul telefono.

![](images/juggluco-android/image_018.png)

![](images/juggluco-android/image_019.png)

  - Una volta installato, il quadrante mostra il grafico direttamente sull'orologio:

![](images/juggluco-android/image_020.png)

  - *Nota: questo metodo potrebbe non funzionare con tutti i dispositivi.*
- **xDrip webserver** permette di collegare smartwatch Fitbit e Samsung usando xDrip come sorgente dati.
- **Kerfstok** è un quadrante per Garmin: [`https://apps.garmin.com/en-UK/apps/b6348ccc-86d8-4780-8013-d9e19fed5260`](https://apps.garmin.com/en-UK/apps/b6348ccc-86d8-4780-8013-d9e19fed5260)

**Sensor:** mostra informazioni sul sensore e lo stato del collegamento.

![](images/juggluco-android/image_021.png)

- **Use Bluetooth** deve essere abilitato.
- Se vuoi cambiare sensore, fai **Forget** prima.
- Se hai perso il collegamento, prova **Reenable** e scansiona il sensore.
- Nella colonna **Last success** dovresti vedere l'orario dell'ultima lettura.

**Settings:** il menu di configurazione permette di impostare diversi parametri.

- **Unità di misura** (mg/dL o mmol/L).

![](images/juggluco-android/image_022.png)

- **Scala verticale**: manuale (seleziona **Glucose** e inserisci i valori in **Graph range**) o automatica. Puoi anche fissare la scala automatica a un intervallo di tempo (deseleziona **Time**).

![](images/juggluco-android/image_023.png)

- **Range** target (visibile in bianco o nero sul grafico).

![](images/juggluco-android/image_024.png)

- Numeri della scala di glicemia a sinistra, e trasmissione delle letture a xDrip: per questa opzione, configura xDrip con sorgente dati "app Libre patchata".

![](images/juggluco-android/image_025.png)

- **Scanning starts app**: fa aprire Juggluco quando si scansiona il sensore; puoi abilitare anche un suono alla scansione NFC.

![](images/juggluco-android/image_026.png)

- **Invert screen**: passa in modalità scura. Da questa stessa schermata si apre anche il menu **Reminders** (promemoria).

![](images/juggluco-android/image_027.png)

- **Sensor via Bluetooth**: obbligatorio per il collegamento diretto con il FSL2; opzionale se usi Juggluco solo per scansionare il sensore. Da qui si apre anche il menu **Alarms** (allarmi).

![](images/juggluco-android/image_028.png)

- Puoi personalizzare i colori del display (**Colors**), creare scorciatoie per dosi e quantità (**Shortcuts**) e modificare l'elenco delle azioni per i promemoria (**Number Labels**).

![](images/juggluco-android/image_029.png)

### Menu Reminders

Puoi impostare dei promemoria per ricordarti di fare determinate azioni, con allarme se te ne dimentichi.

![](images/juggluco-android/image_030.png)

Con **New** puoi creare un nuovo promemoria:

1. Scegli nella lista l'azione da ricordare.
2. Inserisci un valore in `x` (unità, CHO, tempo, ecc.).
3. In **1**: decidi da quando puoi eseguire l'azione.
4. In **2**: decidi entro quando devi eseguirla.

![](images/juggluco-android/image_031.png)

Se non hai registrato l'azione in Juggluco entro l'orario indicato in **2**, l'app suonerà un allarme.

Esempio: Levemir 15 unità (insulina lenta) dalle 21:00 alle 22:00.

Tocca **Ringtone** su un promemoria per personalizzarne la suoneria:

![](images/juggluco-android/image_032.png)

- **Duration**: durata della suoneria.
- Se rimuovi **Default**, puoi selezionare la suoneria che preferisci.
- Se non è attivato **Sound**, l'app non suona.
- **Flash**: fa lampeggiare il flash della fotocamera.

### Menu Allarmi

Tocca **Ringtone** su un allarme per configurarne la suoneria. Per l'allarme di glicemia bassa è disponibile anche **Minutes deactivated** (durata del silenziamento dopo che l'allarme è scattato):

![](images/juggluco-android/image_033.png)

Tipi di allarme disponibili:

- Allarme glicemia bassa, con valore soglia:

![](images/juggluco-android/image_034.png)

- Allarme glicemia alta, con valore soglia:

![](images/juggluco-android/image_035.png)

- Allarme lettura assente dopo tot minuti:

![](images/juggluco-android/image_036.png)

- Allarme valori disponibili (avvisa quando i dati tornano dopo un'interruzione); da qui puoi anche mostrare la glicemia nella barra di stato Android:

![](images/juggluco-android/image_037.png)

> ⚠️ **Off touch** disabilita l'allarme toccando il grafico: fai attenzione a non farlo per sbaglio.

![](images/juggluco-android/image_038.png)

### Menu 2

Il menu in alto a destra (vedi il diagramma a inizio sezione) include: **Notify**, **Export**, **Mirror**, **New Amount**, **List**, **Statistics**. La documentazione originale non descrive nel dettaglio queste voci; **New Amount** apre la stessa schermata di creazione promemoria vista sopra ([Menu Reminders](#menu-reminders)).

### Menu 3 e Menu 4

Toccando gli angoli in basso a sinistra e in basso a destra si aprono altri due menu, visibili nel diagramma a inizio sezione:

- **In basso a sinistra:** Last Scan, Scans, Stream, History, Amounts, Meals, Dark mode.
- **In basso a destra:** Search, Date, Day back, Day later, Week back, Week later.

Anche questi non sono descritti nel dettaglio nella documentazione originale, ma i nomi sono abbastanza intuitivi: navigazione tra le date del grafico e riepiloghi delle scansioni/pasti registrati.
