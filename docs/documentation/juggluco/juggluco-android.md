# Juggluco per Android con FSL 2

Guida base passo passo per l'installazione di Juggluco su Android con un sensore FSL2.

> ⚠️ È necessario un telefono Android dalla versione 4.4 in su, con supporto Bluetooth 4.2 (BLE) e lettore NFC.

> ⚠️ Come qualsiasi app di terza parte, l'uso con un sensore FSL2 **disabiliterà gli allarmi di LLink definitivamente**, senza possibilità di ripristino. L'abbinamento di un sensore Libre 2 a Juggluco invalida la garanzia e non si può chiedere la sostituzione per problemi di allarmi mancanti.

> ⚠️ Se vuoi installare Juggluco sul telefonino di un bambino, Play Protect va disabilitato temporaneamente.

Documentazione originale: `http://jkaltes.byethost16.com/Juggluco/`

## Contenuto della guida

1. [Installare Juggluco](#1-installare-juggluco)
2. [Collegare il sensore](#2-collegare-il-sensore)
3. [Configurare Juggluco](#3-configurare-juggluco)

## 1. Installare Juggluco

Juggluco è disponibile nel Google Play Store. Aprilo e cerca "juggluco" oppure segui questo link:

`https://play.google.com/store/apps/details?id=tk.glucodata`

Installa e apri Juggluco. Autorizza il collegamento e l'accesso alla posizione, e autorizza Juggluco a non essere ottimizzata dalla batteria.

Si apre la schermata principale in modalità orizzontale (non è possibile passare alla modalità verticale).

## 2. Collegare il sensore

Lascia Juggluco aperto e scansiona il sensore. Servono due scansioni per collegare un nuovo sensore.

Dopo la prima scansione dovrebbe comparire una schermata di conferma: fai **OK**.

Se vedi un messaggio che chiede quale app usare (durante qualsiasi scansione), seleziona **Juggluco** (non LLink).

Dopo la seconda scansione dovresti vedere la curva di glicemia: fai **OK**.

Una volta tornato al grafico principale, la scansione compare con un punto verde.

Entro un minuto dovresti vedere i valori in tempo reale (scorri il grafico verso sinistra).

Se dopo qualche minuto non hai dati:

1. Verifica che l'app LLink sia disabilitata, senza accesso alla geolocalizzazione, oppure disinstallata.
2. Prova a scansionare di nuovo il sensore.
3. Prova a riavviare il telefono e scansionare di nuovo.

La glicemia compare nella tendina delle notifiche. Tocca **JUGGLUCO** per aprire l'app. Se il tuo telefono lo supporta, il valore appare anche nelle icone in alto a sinistra.

## 3. Configurare Juggluco

Ci sono 4 menu raggiungibili con un tocco in 4 diverse zone dello schermo.

### Menu 1

**System UI:** attiva o disattiva la vista a schermo pieno.

**Watch:**

- **WearOS** permette di configurare il quadrante Juggluco su uno smartwatch Android Wear. Puoi installare Juggluco dal Google Play Store dello smartwatch abbinato al telefono (cerca "Juggluco"). Con i vecchi smartwatch, puoi installarlo anche dalle app presenti sul telefono.
- Nel menu **WearOS Config** fai **Init watch app** (non usare *Direct sensor-watch connection*). Lo smartwatch dovrebbe ricevere la glicemia dal telefono tramite Bluetooth.
  - *Nota: questo metodo potrebbe non funzionare con tutti i dispositivi.*
- **xDrip webserver** permette di collegare smartwatch Fitbit e Samsung usando xDrip+ come sorgente dati.
- **Kerfstok** è un quadrante per Garmin: `https://apps.garmin.com/en-UK/apps/b6348ccc-86d8-4780-8013-d9e19fed5260`

**Sensor:** mostra informazioni sul sensore e lo stato del collegamento.

- **Use Bluetooth** deve essere abilitato.
- Se vuoi cambiare sensore, fai **Forget** prima.
- Se hai perso il collegamento, prova **Reenable** e scansiona il sensore.
- Nella colonna **Last success** dovresti vedere l'orario dell'ultima lettura.

**Settings:** il menu di configurazione permette di impostare diversi parametri.

- **Unità di misura** (mg/dL o mmol/L).
- **Scala verticale**: manuale (seleziona **Glucose** e inserisci i valori in **Graph range**) o automatica. Puoi anche fissare la scala automatica a un intervallo di tempo (deseleziona **Time**).
- **Range** target (visibile in bianco o nero sul grafico).
- Numeri della scala di glicemia a sinistra.
- **Trasmissione delle letture a xDrip+**: per questa opzione, configura xDrip+ con sorgente dati "app Libre patchata".
- **Scanning starts app**: fa aprire Juggluco quando si scansiona il sensore; puoi abilitare anche un suono alla scansione NFC.
- **Invert screen**: passa in modalità scura.
- **Sensor via Bluetooth**: obbligatorio per il collegamento diretto con il Libre 2; opzionale se usi Juggluco solo per scansionare il sensore.
- Puoi personalizzare alcuni colori del display e creare scorciatoie per dosi e quantità.

### Menu Reminders

Puoi impostare dei promemoria per ricordarti di fare determinate azioni, con allarme se te ne dimentichi.

- **Ringtone**: cambia la suoneria dei promemoria.
- **Duration**: durata della suoneria.
- Se rimuovi **Default**, puoi selezionare la suoneria che preferisci.
- Se non è attivato **Sound**, l'app non suona.
- **Flash**: fa lampeggiare il flash della fotocamera.

Con **New** puoi creare un nuovo promemoria:

1. Scegli nella lista l'azione da ricordare.
2. Inserisci un valore in `x` (unità, CHO, tempo, ecc.).
3. In **1**: decidi da quando puoi eseguire l'azione.
4. In **2**: decidi entro quando devi eseguirla.

Se non hai registrato l'azione in Juggluco entro l'orario indicato in **2**, l'app suonerà un allarme.

Esempio: Levemir 15 unità (insulina lenta) dalle 21:00 alle 22:00.

Puoi modificare la lista delle azioni nelle impostazioni con **Number Labels**.

### Menu Allarmi

Per ogni allarme puoi impostare:

- **Duration**: durata della suoneria.
- **Minutes deactivated**: durata del silenziamento.
- Se disabiliti **Default**, puoi scegliere la suoneria preferita.
- **Flash**: usa il flash della fotocamera.

Tipi di allarme disponibili:

- Allarme glicemia bassa, con valore soglia.
- Allarme glicemia alta, con valore soglia.
- Allarme lettura assente dopo tot minuti.
- Allarme valori disponibili (avvisa quando i dati tornano dopo un'interruzione).

> ⚠️ **Off touch** disabilita l'allarme toccando il grafico: fai attenzione a non farlo per sbaglio.

### Menu 2

**Notify:** *[testo non recuperabile dalla conversione PDF]*
