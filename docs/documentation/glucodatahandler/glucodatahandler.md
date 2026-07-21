# Glicemia al polso con GlucoDataHandler

**GlucoDataHandler** è un'app che porta la glicemia sul tuo smartwatch Wear OS in modo semplice. Sostituisce xDrip per gli smartwatch già supportati da WatchDrip+, e in più accetta molte altre sorgenti dati.

![](images/glucodatahandler/image_001.png)

Questa guida è stata realizzata con uno smartwatch simulato Wear OS 5, ma vale per qualsiasi smartwatch **Wear OS 2 o superiore**.

> ⚠️ **Attenzione**: L'utilizzo è a esclusiva responsabilità personale.

## 1. Sorgenti dati supportate

GlucoDataHandler può ricevere la glicemia da diverse app, sullo stesso telefono o dal cloud:

**App sul telefonino:**
- Notifiche delle app Dexcom, Eversense, Medtronic e CamAPS FX
- Juggluco (collegamento diretto a FSL2 e FSL3, G7 e ONE+, Eversense, Accu-Chek, Sibionics)
- xDrip (collegato direttamente al sensore FSL2), oppure follower Dexcom Share, LView, CareLink
- AAPS, Eversense ESEL / G6 BYODA, Diabox

**App da server nel cloud:**
- LLink
- Dexcom Share
- Nightscout
- Medtrum EasyFollow/EasyView
- Yuwell Anytime

## 2. Installa GlucoDataHandler sul telefonino

Installa l'app dal Play Store. Verifica che l'autore sia **pachi81**:

![](images/glucodatahandler/image_002.png)

Se vedi la nota dello sviluppatore, leggila e tocca **OK**:

![](images/glucodatahandler/image_003.png)

Se vedi questo avviso, significa che devi disabilitare l'ottimizzazione della batteria per l'app:

![](images/glucodatahandler/image_004.png)

Vai nelle **Impostazioni** Android e cerca **GlucoDataHandler**:

![](images/glucodatahandler/image_005.png)

Entra nella pagina dell'app e tocca **Batteria**:

![](images/glucodatahandler/image_006.png)

Nella pagina Batteria, tocca **Gestisci utilizzo batteria**:

![](images/glucodatahandler/image_007.png)

Seleziona **Senza limitazioni**:

![](images/glucodatahandler/image_008.png)

A questo punto apri l'app: ti mostrerà che non ha ancora ricevuto dati e ti propone di configurare una sorgente. Tocca **SORGENTI**:

![](images/glucodatahandler/image_009.png)

## 3. Scelta della sorgente dati

### Applicazioni locali

Nella pagina **Sorgenti**, la sezione **Applicazioni locali** raccoglie le app sullo stesso telefono che forniscono la glicemia come messaggio interno (Juggluco, xDrip, AAPS e simili):

![](images/glucodatahandler/image_010.png)

#### Juggluco

Entra in **Juggluco** e attiva **Abilita**:

![](images/glucodatahandler/image_011.png)

Poi, dentro l'app Juggluco: apri il **Menu 1 → Impostazione → Exchange data**, e nella sezione EverSense spunta **Glucodata broadcast**, poi tocca **Salva**:

![](images/glucodatahandler/image_012.png)

#### xDrip

Con xDrip hai due opzioni, puoi abilitarle entrambe: **1) API del servizio di trasmissione** (per ricevere anche l'IOB) e **2) Alternativa: trasmissione locale**:

![](images/glucodatahandler/image_013.png)

In xDrip, vai in **Impostazioni → Impostazioni Inter-app** e attiva **Trasmetti localmente** (1) e **Servizio di Trasmissione API** (2):

![](images/glucodatahandler/image_014.png)

#### AAPS

In AndroidAPS, dal **Configuratore strutturale → Sincronizzazione**, spunta **Samsung Tizen** (il canale di broadcast usato anche da GlucoDataHandler):

![](images/glucodatahandler/image_015.png)

Poi, in GlucoDataHandler, entra in **AndroidAPS** e attiva **Abilita**:

![](images/glucodatahandler/image_016.png)

#### App modificata BYODA G6

Se hai creato la tua [app Dexcom modificata](../xdrip/dexcom-g6-g7-app-modificata), nel modulo di richiesta scegli di trasmettere anche ad Android APS (oppure a entrambi xDrip e Android APS):

![](images/glucodatahandler/image_017.png)

Poi, in GlucoDataHandler, entra in **Eversense (ESEL)/Dexcom BYODA (xDrip)** e attiva **Abilita**:

![](images/glucodatahandler/image_018.png)

### Servizi cloud

La sezione **Servizi cloud** raccoglie le sorgenti che forniscono la glicemia via Internet, come LLink, Dexcom Share e Nightscout:

![](images/glucodatahandler/image_019.png)

Per ciascun servizio, attiva **Abilita** e apri **Avanzate** per inserire le credenziali (nome utente e password per LLink/Dexcom Share, oppure URL e `API_SECRET` per Nightscout):

![](images/glucodatahandler/image_020.png)

### Lettore di notifiche

In alternativa, GlucoDataHandler può leggere la glicemia direttamente dalle notifiche di un'altra app (es. l'app ufficiale Dexcom). Vai in **Lettore di notifiche (Beta) → Applicazione** e tocca **Seleziona**:

![](images/glucodatahandler/image_021.png)

Attiva **Mostra tutto** se non trovi la tua app nell'elenco, poi seleziona l'app da cui leggere la notifica (nell'esempio, **Dexcom G7**):

![](images/glucodatahandler/image_022.png)

Attiva **Abilita lettore di notifiche**:

![](images/glucodatahandler/image_023.png)

Nelle notifiche del telefono, cerca **GlucoDataHandler**: vedrai che l'autorizzazione non è ancora concessa:

![](images/glucodatahandler/image_024.png)

Attiva **Consenti l'accesso alle notifiche**:

![](images/glucodatahandler/image_025.png)

Conferma toccando **Consenti** nella finestra di dialogo:

![](images/glucodatahandler/image_026.png)

> ℹ️ **Nota**: L'app avrà accesso a tutte le notifiche del telefonino, ma userà solo quelle necessarie a leggere il valore di glicemia.

## 4. Impostazioni e widget

Dopo aver configurato una sorgente, la glicemia comparirà nella schermata principale di GlucoDataHandler:

![](images/glucodatahandler/image_027.jpeg)

Puoi anche creare un **widget** sulla schermata Home del telefono: tieni premuto sulla Home, scegli **Widget** e cerca GlucoDataHandler tra i 6 formati disponibili:

![](images/glucodatahandler/image_028.jpeg)

## 5. GlucoDataHandler su Wear OS

### Installa l'app sullo smartwatch

Se non si installa automaticamente, installala dal Play Store dello smartwatch. Dalla schermata **Recents**, apri **Play Store**:

![](images/glucodatahandler/image_029.png)

Tocca la lente di ricerca:

![](images/glucodatahandler/image_030.png)

Tocca l'icona della tastiera:

![](images/glucodatahandler/image_031.png)

Digita `Glucodatahandler`:

![](images/glucodatahandler/image_032.png)

Seleziona il risultato **GlucoDataHandler** (autore **pachi81**) e tocca **Install**:

![](images/glucodatahandler/image_033.png)

Una volta installata, vedrai la glicemia sullo smartwatch come sul telefonino. Questo però **non è ancora un quadrante**: è solo l'app che gira in background per recuperare la glicemia.

![](images/glucodatahandler/image_034.png)

### Imposta una complicazione

Scegli un quadrante personalizzabile sullo smartwatch e passa in modalità modifica tenendolo premuto:

![](images/glucodatahandler/image_035.png)

Tocca la matita per modificare i campi del quadrante:

![](images/glucodatahandler/image_036.png)

Per ogni campo puoi scegliere cosa visualizzare (qui i quattro slot: batteria, data, passi e la complicazione principale):

![](images/glucodatahandler/image_037.png)

Toccando un campo si apre l'elenco delle complicazioni disponibili:

![](images/glucodatahandler/image_038.png)

Tra le complicazioni troverai una grande varietà di indicatori di GlucoDataHandler (glicemia semplice, glicemia con tendenza, ecc.):

![](images/glucodatahandler/image_039.png)

Un esempio di quadrante completo, con glicemia, tendenza, insulina/carboidrati e passi:

![](images/glucodatahandler/image_040.jpeg)

> ℹ️ **Nota**: Apri l'app GlucoDataHandler con il tasto app dello smartwatch, oppure toccando uno dei campi della complicazione, per cambiare le impostazioni, gli allarmi, ecc.

## 6. Altri quadranti supportati

Se vuoi quadranti più evoluti (con grafico), vai in **Orologio → Orologi Wear OS → Quadranti di orologio**:

![](images/glucodatahandler/image_041.png)

Oltre a **Pujie** (cerca nella libreria i quadranti che iniziano con `GDH_`; non compatibile con Wear OS 5), ci sono app di terze parti progettate apposta per GlucoDataHandler: **Diabetic Masked Man** e i **Quadranti GDC**, entrambi con link diretto al Play Store dalla stessa pagina:

![](images/glucodatahandler/image_042.png)

## 7. WatchDrip+

Se non vuoi usare xDrip, oppure trovi GlucoDataHandler più semplice, puoi mandare i dati a **WatchDrip+** nello stesso modo (senza grafico). Devi comunque abbinare lo smartwatch a WatchDrip+ (con Zepp o Mifit) come faresti normalmente, ma non serve più xDrip.

In **Orologio → Orologi MiBand e Amazfit**, attiva **WatchDrip+**. **Importante**: dopo aver attivato questa opzione, abilita anche **Abilita servizio** dentro l'app WatchDrip+:

![](images/glucodatahandler/image_043.png)

## 8. Garmin e Fitbit

GlucoDataHandler può anche imitare il web service di xDrip sul telefono: in **Orologio → Orologi Garmin e Fitbit**, attiva il **web service locale**. A quel punto qualsiasi quadrante o campo dati Garmin che supporta xDrip come sorgente (e il quadrante Glance per Fitbit, scegliendo xDrip come sorgente) funziona con GlucoDataHandler al posto di xDrip.

## 9. Android Auto

L'integrazione con Android Auto oggi è affidata a un'app separata dello stesso autore, **GlucoDataAuto**, disponibile solo su GitHub (non sul Play Store per le regole di Google): [`https://github.com/pachi81/GlucoDataAuto`](https://github.com/pachi81/GlucoDataAuto). Riceve i dati da GlucoDataHandler e li mostra in Android Auto.

Ci sono tante altre possibilità con GlucoDataHandler: scoprile e condividile nel gruppo Facebook [Diabete, glicemia a distanza e nuove tecnologie](https://www.facebook.com/groups/nightscout/).
