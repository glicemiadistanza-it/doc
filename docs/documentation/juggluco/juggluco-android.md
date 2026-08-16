# Juggluco per Android

Guida base passo passo per l'installazione di Juggluco su Android. Juggluco legge da solo, senza altre app, i sensori **FSL2**, **FSL3** e **Dexcom G7 / ONE+** (oltre ad altri sensori meno diffusi in Italia). Puoi anche usare Juggluco solo per scansionare un sensore FSL 1 o FSL2, senza abbinarlo stabilmente.

> ⚠️ È necessario un telefono Android dalla versione 5 in su, con supporto Bluetooth 4.2 (BLE) e lettore NFC. Per FSL3, per i FSL2 di USA/Canada/Australia e per la versione del Play Store serve **Android 8 o superiore**. Con Android 12 o superiore l'app chiede il permesso **Dispositivi nelle vicinanze**, con Android 13 anche quello per le **notifiche**: concedili entrambi.

> ⚠️ Come qualsiasi app di terza parte, l'uso con un sensore FSL2 o FSL3 **disabiliterà gli allarmi di LLink definitivamente**, senza possibilità di ripristino. L'abbinamento di un sensore a Juggluco invalida la garanzia e non si può chiedere la sostituzione per problemi di allarmi mancanti.

> ⚠️ Se vuoi installare Juggluco sul telefonino di un bambino, Play Protect va disabilitato temporaneamente.

> ℹ️ **Nota**: le versioni recenti di Juggluco sono tradotte in italiano. Le schermate di questa guida sono state fatte con la versione `10.10.0` su Android 12: se hai una versione più vecchia, alcune voci potrebbero essere in inglese.

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

Apri Juggluco. L'app si apre subito in modalità orizzontale (non è possibile passare alla modalità verticale). Alla prima apertura ti chiede di poter restare in esecuzione in background senza essere ottimizzata dalla batteria: fai **Consenti**.

![](images/juggluco-android/image_004.png)

Subito dopo Android chiede il permesso di trovare e connettersi ai dispositivi vicini (serve per il Bluetooth del sensore): fai **Consenti**. Su Android 13 o superiore ti verrà chiesto anche il permesso per le notifiche.

![](images/juggluco-android/image_005.png)

Compare una pagina di introduzione in italiano che spiega come funziona l'app. Leggila e poi tocca **OK** in alto a destra (potrai rileggerla in qualsiasi momento da **Impostazione → Intro**):

![](images/juggluco-android/image_006.png)

Si apre la schermata principale di Juggluco con il grafico della glicemia, per ora vuoto:

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

1. Tocca la parte sinistra del grafico per aprire il primo menu, poi **Impostazione → Scambio dati** e spunta la casella **LView**.
2. Inserisci email e password del tuo account LView e tocca **Ottieni Account ID**. Attendi che al posto dello `0` compaia il tuo Account ID, poi tocca **OK**.
3. Ora scansiona il sensore con l'NFC come per il FSL2.

![](images/juggluco-android/image_027.png)

Regole importanti:

- Juggluco può **avviare da solo** un sensore FSL3, oppure **subentrare** a un sensore già attivato con l'app FSL3 di Abbott (non con il lettore, né con l'app "unificata"). Il subentro funziona solo con l'Account ID originale con cui il sensore è stato attivato.
- Il sensore FSL3 si collega a **una sola app alla volta**: forza l'arresto dell'app che non stai usando. Il primo collegamento può richiedere qualche minuto; se non arriva, prova a spegnere e riaccendere il Bluetooth o a riavviare il telefono.

### Sensore Dexcom G7 / ONE+

Juggluco supporta anche i Dexcom G7 e ONE+ (il G6 invece **non è supportato**). Non serve l'NFC:

1. Tocca la parte sinistra del grafico per aprire il primo menu, poi **Foto**.
2. Scansiona con la fotocamera il **codice data matrix stampato sull'applicatore** del sensore.
3. Alla prima connessione comparirà la richiesta di **abbinamento Bluetooth** di Android: **tieni lo schermo acceso** e conferma subito. Il G7 e il ONE+ si collegano solo ogni 5 minuti: se perdi la richiesta, dovrai aspettare il tentativo successivo.

## 5. Configurare Juggluco

Ci sono 4 menu, che si aprono toccando il grafico in 4 zone diverse dello schermo, da sinistra a destra (un tocco fuori dal menu lo richiude):

![](images/juggluco-android/image_015.png)

> ⚠️ Non usare il tasto **Indietro** di Android per chiudere i menu: chiude tutta l'app. Tocca invece un punto qualsiasi del grafico.

### Menu 1

**UI di sistema:** mostra o nasconde la barra di stato e i tasti di Android (vista a schermo pieno).

**Orologio:**

![](images/juggluco-android/image_016.png)

- **WearOS** permette di configurare il quadrante Juggluco su uno smartwatch Wear OS. Spunta **WearOS**, poi tocca **Configura**: nel menu a tendina scegli il tuo orologio e in **Inserisci valori su** seleziona **telefono** (non usare *Sensore diretto-orologio connessione*). Lo smartwatch dovrebbe ricevere la glicemia dal telefono tramite Bluetooth.

![](images/juggluco-android/image_017.png)

  - In alternativa, puoi installare Juggluco dal Google Play Store dello smartwatch abbinato al telefono (cerca "Juggluco"). Con i vecchi smartwatch, puoi installarlo anche dalle app presenti sul telefono.

![](images/juggluco-android/image_018.png)

![](images/juggluco-android/image_019.png)

  - Una volta installato, il quadrante mostra il grafico direttamente sull'orologio:

![](images/juggluco-android/image_020.png)

  - *Nota: questo metodo potrebbe non funzionare con tutti i dispositivi.*
- **Web server** permette di collegare smartwatch Fitbit e Samsung usando xDrip come sorgente dati.
- **Kerfstok** è un quadrante per Garmin: [`https://apps.garmin.com/en-UK/apps/b6348ccc-86d8-4780-8013-d9e19fed5260`](https://apps.garmin.com/en-UK/apps/b6348ccc-86d8-4780-8013-d9e19fed5260)
- **Watchdrip** e **GadgetBridge** servono per gli smartwatch gestiti da queste app (ad esempio Mi Band e Amazfit).

**Sensore:** mostra lo stato del Bluetooth e, quando un sensore è collegato, le informazioni sul collegamento.

![](images/juggluco-android/image_021.png)

- **Usa Bluetooth** deve essere abilitato.
- Con un sensore collegato vedi anche una tabella con lo stato della connessione: nella colonna **Last success** dovresti vedere l'orario dell'ultima lettura. Se vuoi cambiare sensore, fai **Forget** prima; se hai perso il collegamento, prova **Reenable** e scansiona il sensore.

![](images/juggluco-android/image_022.png)

**Impostazione:** il menu di configurazione permette di impostare diversi parametri. Le impostazioni sono raggruppate in sottomenu:

![](images/juggluco-android/image_023.png)

- **Unità** di misura (mg/dL o mmol/L).
- **Glucosio flottante**: mostra la glicemia in una piccola finestra sopra le altre app (vedi sotto).
- **Calibrazione**: permette di correggere i valori del sensore con una misurazione capillare.
- **Notifica del glucosio**: mostra la glicemia nella tendina delle notifiche.
- **Scambio dati**: invio dei dati ad altre app (xDrip, LView, Nightscout, ecc.).
- **Promemoria** e **Allarmi**: vedi i paragrafi dedicati qui sotto.
- **Etichette numeriche**: l'elenco delle azioni (insulina, carboidrati, ecc.) usate per promemoria e registrazioni.
- **Scansione Google**: usa lo scanner di Google per leggere i codici dei sensori Dexcom con la fotocamera.
- **Display**: aspetto del grafico e colori.
- **Intro**: rimostra la pagina di introduzione vista alla prima apertura.

#### Display

![](images/juggluco-android/image_024.png)

- **Range del grafico**: scala verticale del grafico. Con **Scala manuale** puoi scegliere se fissare l'asse del **Tempo** e/o del **Glucosio**; se non è fissata, la scala è automatica.
- **Range target**: intervallo obiettivo, evidenziato sul grafico.
- **Asse del glucosio a SINISTRA**: sposta i numeri della scala di glicemia da metà grafico al bordo sinistro.
- **Ruota di 180°**: gira lo schermo, utile se preferisci avere i tasti del telefono dall'altra parte.
- **12h**, **Lingua**, **Clamp ora**: formato dell'ora, lingua dell'app e blocco del grafico sull'ora attuale.
- **Colori**: personalizza i colori del grafico.
- **Theme**: scegli il tema chiaro o scuro e la forma dei pulsanti:

![](images/juggluco-android/image_025.png)

#### Scambio dati

![](images/juggluco-android/image_026.png)

- **Broadcast xDrip**: trasmette le letture a xDrip. In xDrip configura la sorgente dati "app FSL patchata".
- **LView**: carica i dati su LView e serve per l'Account ID del FSL3 (vedi [Sensore FSL3](#sensore-fsl3)).
- **Uploader** e **Web server**: invio dei dati a Nightscout e ad altre app tramite un server locale.
- **Health Connect**, **Glucodata broadcast**, **FSL patchato**, **Broadcast EverSense**: altri metodi di condivisione con app di terze parti.

#### Glucosio flottante

Mostra la glicemia in una finestra sempre in primo piano, sopra le altre app. Puoi scegliere il colore, la dimensione del carattere e se la finestra deve essere toccabile o trasparente:

![](images/juggluco-android/image_037.png)

### Menu Promemoria

Da **Impostazione → Promemoria** puoi impostare dei promemoria per ricordarti di fare determinate azioni, con allarme se te ne dimentichi. Con **Nuovo** crei un nuovo promemoria:

![](images/juggluco-android/image_028.png)

1. Scegli nella lista a tendina l'azione da ricordare (le azioni si modificano da **Impostazione → Etichette numeriche**):

![](images/juggluco-android/image_029.png)

2. Inserisci un valore nella casella a destra (unità, CHO, tempo, ecc.).
3. Con il primo orario decidi da quando puoi eseguire l'azione.
4. Con il secondo orario decidi entro quando devi eseguirla.
5. Fai **Salva**.

![](images/juggluco-android/image_030.png)

Se non hai registrato l'azione in Juggluco entro il secondo orario, l'app suonerà un allarme.

Esempio: insulina lenta 15 unità dalle 21:00 alle 22:00. Il promemoria compare nell'elenco:

![](images/juggluco-android/image_031.png)

Tocca **Suoneria** su un promemoria per personalizzarne la suoneria:

![](images/juggluco-android/image_032.png)

- **Durata**: durata della suoneria in secondi.
- Se rimuovi **Predefinito**, puoi selezionare la suoneria che preferisci.
- Se non è attivato **Suono**, l'app non suona.
- **Vibra**: fa vibrare il telefono; **Flash**: fa lampeggiare il flash della fotocamera.
- **Disturba**: suona anche con la modalità *Non disturbare* attiva.

Le azioni dei promemoria si personalizzano da **Impostazione → Etichette numeriche**:

![](images/juggluco-android/image_036.png)

### Menu Allarmi

Da **Impostazione → Allarmi** puoi attivare e configurare gli allarmi di glicemia:

![](images/juggluco-android/image_033.png)

- **Allarme di glucosio basso**, con valore soglia.
- **Allarme di glucosio alto**, con valore soglia.
- **Allarme di perdita di segnale dopo** tot minuti senza dati dal sensore.
- **Notifica di valore disponibile**: avvisa quando i dati tornano dopo un'interruzione.
- **Alarm is**: scegli se gli allarmi devono usare il volume di *Alarm*, *Notification* o *Media* del telefono.
- **Avanzate**: allarmi aggiuntivi per glicemia molto bassa/molto alta e allarmi predittivi (*se presto sotto* / *se presto sopra*), oltre alle **Pianificazioni** per attivare gli allarmi solo in certe fasce orarie.

Tocca **Suoneria** su un allarme per configurarne la suoneria. Per l'allarme di glicemia bassa è disponibile anche **Minuti di disattivazione** (durata del silenziamento dopo che l'allarme è scattato):

![](images/juggluco-android/image_034.png)

Il menu **Avanzate**:

![](images/juggluco-android/image_035.png)

> ⚠️ Toccando il grafico mentre un allarme suona, l'allarme viene silenziato: fai attenzione a non farlo per sbaglio.

### Menu 2

Il secondo menu (vedi il diagramma a inizio sezione) include: **Esporta**, **Mirror**, **Nuovo valore**, **Lista**, **Statistiche**, **Pronuncia**, **Flottante**. **Nuovo valore** serve a registrare una dose di insulina, un pasto o un'altra azione; **Flottante** attiva la finestra del glucosio flottante; **Pronuncia** legge la glicemia a voce.

### Menu 3 e Menu 4

Il terzo e il quarto menu sono visibili nel diagramma a inizio sezione:

- **Terzo menu:** Ultima scansione, Scansioni, Flusso, Cronologia, Valori, Pasti, Modalità scura — scegli cosa mostrare sul grafico e passa alla modalità scura.
- **Quarto menu:** Cerca, Data, Giorno prima, Giorno dopo, Settimana prima, Settimana dopo — navigazione tra le date del grafico.
