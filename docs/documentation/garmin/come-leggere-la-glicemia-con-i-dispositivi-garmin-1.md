# Glicemia su smartwatch Garmin tramite Nightscout

Questa guida spiega come visualizzare i valori di glicemia trasmessi da Nightscout sui modelli Garmin compatibili, tramite le app disponibili su **Connect IQ** (lo store ufficiale di Garmin).

Traduzione e integrazione della guida originale di Paweł Babańczyk: [`http://nightscout.pl/smartwatch/garmin/`](http://nightscout.pl/smartwatch/garmin/)

Autore: Gianluca Curci.

Dispositivi confermati dalla comunità:
- Vivoactive HR
- Garmin Fenix 3, Fenix 5
- Forerunner 630, 735XT, 750

Le istruzioni seguenti si basano sul modello **Forerunner 735XT** su Android. Su iPhone il procedimento è analogo tramite l'app Garmin Connect da App Store.

---

## 1. Installa Garmin Connect

Installa l'app **Garmin Connect** dal Google Play Store (o App Store su iPhone).

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_001.png)

---

## 2. Crea un account e abbina il dispositivo

Apri l'app, crea un account Garmin o accedi se ne hai già uno. Questo account registrerà le sessioni sportive e i dati del dispositivo, ma non i valori di glicemia.

Alla prima apertura ti viene chiesto di creare un account o accedere:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_002.png)

Accetta l'EULA e conferma di avere almeno 16 anni:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_003.png)

Inserisci email e password (oppure accedi con Facebook o Google):

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_004.png)

Abbina il tuo Garmin: vai in **Gestione dispositivi → Aggiungi dispositivo**, seleziona il tuo modello dalla lista (o usa **Cerca tutti i dispositivi compatibili**) e segui le istruzioni a schermo.

L'app avvia la configurazione guidata del dispositivo:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_005.png)

Seleziona il tuo modello dall'elenco dei dispositivi Garmin supportati:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_006.png)

---

## 3. Attiva la modalità di associazione sul Garmin

Vai nelle impostazioni Bluetooth del dispositivo Garmin (consulta il manuale del tuo modello) e abilita la modalità di associazione. L'app avvierà la prima sincronizzazione in automatico.

Sull'orologio, entra nel menu **Impostazioni**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_007.png)

Vai su **Sensori e accessori → Bluetooth**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_010.png)

L'orologio si mette in attesa di un dispositivo da associare:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_009.png)

Compare un avviso di connessione per l'associazione con il telefono:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_008.png)

Sul telefono, conferma di voler procedere con l'associazione al Forerunner 735XT:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_012.png)

L'orologio mostra lo stato di collegamento in corso:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_013.png)

A seconda del modello, il telefono può chiederti di inserire un PIN (prova `0000` o `1234`)...

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_011.png)

...oppure l'orologio mostra un codice da confrontare con quello sul telefono:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_014.png)

Al termine, il telefono conferma che l'associazione è riuscita:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_015.png)

---

## 4. Apri Connect IQ Store

Nell'app Garmin Connect, apri il menu in alto a sinistra (tre linee) e seleziona **Store Connect IQ**.

> ℹ️ **Nota**: In Connect IQ puoi trovare sia **widget** sia **applicazioni**:
> - I **widget** sono disponibili nel menu rapido dell'orologio e si chiudono automaticamente dopo qualche secondo.
> - Le **applicazioni** rimangono attive sullo schermo più a lungo.

Apri il menu laterale dell'app Garmin Connect:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_016.png)

Seleziona **Store Connect IQ™** dall'elenco:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_017.png)

Nello store, cerca "Nightscout watch" per vedere le app disponibili per il tuo modello:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_018.png)

---

## 5. Cerca e scarica l'app o il widget Nightscout

Cerca nel Connect IQ Store le app o i widget compatibili con Nightscout. Le due più diffuse sono:

### Widget e app di Phimpy
Cerca "Nightscout" o "Phimpy" nel Connect IQ Store.

Nella pagina web dello store puoi vedere tutte le app pubblicate da Phimby, incluse **Nightscout Watch** e **Nightscout Widget**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_038.png)

### CGM Widget di Andreas-May
Cerca "CGM Widget" o "Andreas-May" nel Connect IQ Store.

Allo stesso modo, questa è la pagina con tutte le app pubblicate da andreas-may, tra cui **CGM Widget**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_039.png)

Seleziona quello che preferisci, clicca **Scarica** e accetta i termini e le autorizzazioni.

Nei risultati di ricerca, individua l'app o il widget desiderato (nell'esempio, il **CGM Widget** e il **Nightscout Widget** sono contrassegnati dall'icona a forma di ingranaggio):

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_019.png)

Apri la sua scheda e tocca **Scarica**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_020.png)

Concedi l'autorizzazione richiesta per inviare e ricevere dati da Internet:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_021.png)

Compare la conferma che l'installazione avverrà alla prossima sincronizzazione:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_022.png)

---

## 6. Sincronizza il dispositivo

Torna alla schermata principale di Garmin Connect e clicca il tasto **Sincronizza** in alto a destra. Attendi il completamento.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_023.png)

---

## 7. Configura il widget o l'app

Clicca sull'icona del tuo dispositivo nella schermata principale dell'app, poi vai in **Activities & App Management**. Cerca il widget o l'app appena installata e clicca su **Impostazioni**.

Apri la scheda del tuo dispositivo, dove trovi la voce **Activities & App Management**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_024.png)

Entra nella sezione **Widget**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_025.png)

Trova il widget appena installato (es. **Nightscout Widget**) ed entra nella sua scheda:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_026.png)

Puoi anche riordinare i widget attivi sull'orologio trascinandoli dall'icona a destra:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_027.png)

Tocca **Impostazioni** per aprire la configurazione del widget:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_028.png)

### Configurazione widget Nightscout (di Phimpy)

Inserisci i seguenti parametri:

- **Site Name** — solo il nome del sito, senza l'estensione Azure o Heroku (es. `birillo`)
- **Host** — seleziona `azure` o `heroku` in base al tuo Nightscout
- **Units** — l'unità di misura preferita (`mg/dL` o `mmol/L`)

Le impostazioni del **Nightscout Widget**, con i campi **Site Name**, **Host** e **Units**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_029.png)

Tocca **Site Name** e inserisci il nome del tuo sito Nightscout:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_030.png)

Tocca **Host** e scegli tra **Azure** e **Heroku** in base a dove è ospitato il tuo Nightscout:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_031.png)

Dopo la sincronizzazione, sull'orologio il widget mostra brevemente **Loading**...

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_032.png)

...e poi il valore corrente di glicemia con trend e minuti trascorsi dall'ultima lettura:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_033.png)

### Configurazione CGM Widget (di Andreas-May)

Inserisci la stringa completa comprensiva di dominio (es. [`https://birillo.herokuapp.com`](https://birillo.herokuapp.com)). Puoi anche configurare l'unità di misura e i limiti del range target.

Nella scheda del **CGM Widget**, tocca **Impostazioni**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_034.png)

Inserisci l'indirizzo completo del tuo Nightscout nel campo **Nightscout website**:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_035.png)

---

## 8. Sincronizza di nuovo e verifica

Torna alla schermata principale di Garmin Connect e sincronizza nuovamente il dispositivo. Trova il widget sul tuo Garmin: dopo qualche minuto dovrebbe apparire il valore di glicemia corrente.

Sull'orologio, il **CGM Widget** si connette e mostra un valore provvisorio mentre scarica i dati aggiornati...

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_036.png)

...per poi mostrare la glicemia corrente con la freccia di trend e i minuti trascorsi dall'ultima lettura:

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_037.png)
