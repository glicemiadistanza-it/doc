# Smartband Xiaomi e smartwatch Amazfit con xDrip tramite WatchDrip+

> ⚠️ Questa guida richiede una versione di xDrip rilasciata dopo l'11 luglio 2022.

Questa guida spiega come visualizzare la glicemia di xDrip su:
- **Xiaomi MiBand** 2, 3, 4, 5, 6 e Amazfit Band 5
- **Amazfit** GTR 42/47mm, GTR2/GTR2e, GTS2/GTS2e/GTS2 Mini, T-Rex Pro, Bip/Bip Lite/Bip S/Bip S Lite

La soluzione si chiama **WatchDrip+**, sviluppata da Artem (@bigdigital su GitHub).

**Requisiti:** telefono Android 5 o superiore con Bluetooth 4.2 (BLE). Prima di iniziare, carica completamente lo smartband/smartwatch.

## Panoramica dei passaggi

1. Installa e configura xDrip con la glicemia visibile
2. Disinstalla le app ufficiali MiFit / Zepp se presenti
3. Installa la versione modificata di MiFit o Zepp per ottenere la chiave di autenticazione
4. Configura xDrip per WatchDrip+
5. Installa e configura WatchDrip+
6. (Opzionale) Reinstalla le app ufficiali

---

## 1. Installa xDrip

Segui la [guida base di installazione](./installare-xdrip-android). **Non proseguire fino a quando non vedi la glicemia in xDrip.**

---

## 2. Rimuovi le app ufficiali

> ⚠️ Disinstallare non significa solo rimuovere l'icona: devi eliminare l'app completamente dalle impostazioni del telefono.

**Se hai MiFit installata (per Xiaomi MiBand):**
1. Nell'app MiFit, apri la schermata principale:

![](images/xdrip-e-watchdrip/image_001.png)

2. Vai in **Profilo** e tocca il tuo dispositivo (in questo esempio, Mi Smart Band 4):

![](images/xdrip-e-watchdrip/image_002.png)

Scorri fino in fondo alla pagina del dispositivo e tocca **Dissocia**:

![](images/xdrip-e-watchdrip/image_003.png)

Conferma la dissociazione:

![](images/xdrip-e-watchdrip/image_004.png)

Sullo smartband comparirà di nuovo la schermata di abbinamento, a conferma che l'operazione è riuscita:

![](images/xdrip-e-watchdrip/image_005.png)

3. Vai in **Impostazioni Android → App → MiFit** e disinstalla completamente.

**Se hai Zepp installata (per Amazfit):**
1. Nell'app Zepp, apri la schermata principale:

![](images/xdrip-e-watchdrip/image_006.png)

2. Vai nelle impostazioni del dispositivo (in questo esempio, Amazfit Bip Lite) e scorri fino in fondo:

![](images/xdrip-e-watchdrip/image_007.png)

In alternativa, dalla scheda **Profilo → I miei dispositivi** puoi vedere tutti i dispositivi associati al tuo account:

![](images/xdrip-e-watchdrip/image_008.png)

Tocca **Dissocia** e conferma:

![](images/xdrip-e-watchdrip/image_009.png)

Sullo smartwatch comparirà di nuovo la richiesta di aprire l'app per abbinarlo:

![](images/xdrip-e-watchdrip/image_010.png)

Su alcuni modelli, lo smartwatch mostra invece questa schermata di abbinamento:

![](images/xdrip-e-watchdrip/image_011.png)

2. Vai in **Impostazioni Android → App → Zepp** e disinstalla completamente.

---

## 3. Ottieni la chiave di autenticazione

### Per Xiaomi MiBand 2/3/4/5/6

1. Dal sito [freemyband.com](https://www.freemyband.com/2019/08/mi-band-4-auth-key.html), scarica l'app MiFit modificata (versione 5.3.1 è quella testata; versioni più recenti potrebbero funzionare):

![](images/xdrip-e-watchdrip/image_013.png)

Il download parte direttamente nel browser:

![](images/xdrip-e-watchdrip/image_014.png)

La pagina potrebbe aprirsi in una nuova scheda del browser:

![](images/xdrip-e-watchdrip/image_015.png)

2. Installala autorizzando l'installazione da sorgente sconosciuta:

![](images/xdrip-e-watchdrip/image_016.png)

Attendi il messaggio di conferma:

![](images/xdrip-e-watchdrip/image_017.png)

3. Apri l'app, crea un account con **email e password** (non usare Google), assicurati di dichiarare almeno 18 anni:

![](images/xdrip-e-watchdrip/image_018.png)

4. Abbina la smartband seguendo le istruzioni. La prima volta che apri l'app, ti dirà che nessun dispositivo è ancora associato:

![](images/xdrip-e-watchdrip/image_019.png)

Tocca **Bracciale** per iniziare l'abbinamento:

![](images/xdrip-e-watchdrip/image_021.png)

Conferma la raccolta dei dati richiesti dalla smartband:

![](images/xdrip-e-watchdrip/image_020.png)

Il telefono cerca la smartband nelle vicinanze:

![](images/xdrip-e-watchdrip/image_022.png)

Se stai sostituendo un dispositivo già configurato in precedenza, l'app propone di ripristinarne le impostazioni:

![](images/xdrip-e-watchdrip/image_027.png)

Sulla smartband conferma la richiesta di abbinamento toccando il segno di spunta:

![](images/xdrip-e-watchdrip/image_026.png)

5. Una volta abbinata, vai nelle impostazioni del dispositivo e cerca la voce **Visibile** (modalità rilevabile):

![](images/xdrip-e-watchdrip/image_023.png)

Se richiesto, accetta l'avviso sulla raccolta di passi e indirizzo Bluetooth:

![](images/xdrip-e-watchdrip/image_024.png)

Attiva la **Modalità rilevabile**. Se non trovi l'opzione, prosegui comunque:

![](images/xdrip-e-watchdrip/image_025.png)

### Per smartwatch Amazfit

1. Dal sito [freemyband.com](https://www.freemyband.com/2019/08/amazfit-gtr-auth-key.html), scarica l'app Zepp modificata (versione 5.6.1 è quella testata; evita la 6.4.1 che ha dato problemi):

![](images/xdrip-e-watchdrip/image_028.png)

2. Installala autorizzando l'installazione da sorgente sconosciuta.
3. Apri l'app e accedi con **email e password** (non usare Google), assicurati di dichiarare almeno 18 anni:

![](images/xdrip-e-watchdrip/image_029.png)

4. Nel profilo, tocca **Aggiungi dispositivo**:

![](images/xdrip-e-watchdrip/image_030.png)

Scegli la categoria del tuo dispositivo: **Orologio** per GTR e GTS, **Bracciale** per Band 5:

![](images/xdrip-e-watchdrip/image_031.png)

Se hai scelto Orologio, seleziona il tipo di abbinamento (con o senza codice QR):

![](images/xdrip-e-watchdrip/image_032.png)

Il telefono cerca il dispositivo nelle vicinanze:

![](images/xdrip-e-watchdrip/image_033.png)

5. Sullo smartwatch comparirà la richiesta di abbinamento: conferma toccando il segno di spunta:

![](images/xdrip-e-watchdrip/image_037.png)

Su alcuni modelli comparirà invece questa schermata di conferma:

![](images/xdrip-e-watchdrip/image_036.png)

Abilita **Visibilità** se disponibile: accetta l'avviso sulla raccolta di passi e indirizzo Bluetooth...

![](images/xdrip-e-watchdrip/image_034.png)

...e attiva la **Modalità rilevabile**:

![](images/xdrip-e-watchdrip/image_035.png)

### Verifica la chiave generata

Dopo l'abbinamento, l'app modificata crea automaticamente un file di testo con la chiave di autenticazione. Cercalo nel gestore file del telefono, in **Memoria interna** o **Scheda SD**:

![](images/xdrip-e-watchdrip/image_038.png)

Apri la cartella **freemyband**:

![](images/xdrip-e-watchdrip/image_039.png)

All'interno trovi il file di testo con indirizzo MAC e chiave (nel nome del file, in questo esempio `mibandFFBBCC9CDE00.txt`):

![](images/xdrip-e-watchdrip/image_040.png)

> ⚠️ Se il file non esiste, WatchDrip+ non funzionerà. Se resetti o disaccoppi la smartband/smartwatch in futuro, cancella il vecchio file e rigenera la chiave con l'app modificata.

---

## 4. Configura xDrip

1. **Disabilita MiBand in xDrip:** vai in **Menu → Impostazioni**:

![](images/xdrip-e-watchdrip/image_041.png)

Tocca **Caratteristiche Collegamenti Smartwatch**:

![](images/xdrip-e-watchdrip/image_042.png)

Tocca **MiBand** e **disabilita** l'opzione **Usa MiBand** (questa è la vecchia integrazione, non serve più con WatchDrip+):

![](images/xdrip-e-watchdrip/image_043.png)

2. **Abilita l'API:** vai in **Menu → Impostazioni → Inter-app settings** e abilita **Servizio di trasmissione API** (in fondo alla pagina):

![](images/xdrip-e-watchdrip/image_044.png)

---

## 5. Installa e configura WatchDrip+

1. Scarica l'ultima versione di WatchDrip+ dal sito del progetto:
   [`https://bigdigital.home.blog/2022/06/16/watchdrip-a-new-application-for-xdrip-watch-integration/#changelog`](https://bigdigital.home.blog/2022/06/16/watchdrip-a-new-application-for-xdrip-watch-integration/#changelog)
   Cerca la sezione **Download link** per l'ultima versione:

![](images/xdrip-e-watchdrip/image_045.png)

2. Installa il file `.apk` scaricato.
3. Apri WatchDrip+: la schermata principale mostra **Abilita servizio** ancora disattivato e nessun dato ricevuto:

![](images/xdrip-e-watchdrip/image_047.png)

4. Attiva **Abilita servizio** e autorizza tutte le richieste di permessi che compaiono. La prima riguarda la posizione:

![](images/xdrip-e-watchdrip/image_048.png)

La seconda l'accesso a foto, contenuti multimediali e file:

![](images/xdrip-e-watchdrip/image_046.png)

Su alcune versioni di Android compare anche una richiesta diretta di accesso alla funzione **Non disturbare**:

![](images/xdrip-e-watchdrip/image_051.png)

Su altre versioni, invece, l'app mostra prima queste istruzioni testuali:

![](images/xdrip-e-watchdrip/image_049.png)

...e devi abilitare manualmente l'accesso di WatchDrip+ alla voce **Accesso Non disturbare**:

![](images/xdrip-e-watchdrip/image_050.png)

### Collegamento automatico

WatchDrip+ dovrebbe rilevare automaticamente il dispositivo con l'indirizzo MAC corretto: un messaggio confermerà l'indirizzo trovato (in questo esempio, un Mi Smart Band 6):

![](images/xdrip-e-watchdrip/image_052.png)

- Se usi una **MiBand 2 o 3**: approva l'autenticazione direttamente sullo schermo della smartband.

### Collegamento manuale (se non trovato automaticamente)

Se compare il messaggio **"Impossibile trovare l'orologio"**, inserisci l'indirizzo MAC manualmente:

![](images/xdrip-e-watchdrip/image_053.png)

1. Apri il file nella cartella `freemyband` (si apre anche con il browser): mostra l'**indirizzo MAC** e la **chiave di autenticazione** uniti da un punto e virgola.

![](images/xdrip-e-watchdrip/image_055.png)

2. Prendi nota dei due valori.
3. In WatchDrip+, inserisci manualmente **indirizzo MAC** e **chiave di autenticazione** nei rispettivi campi: l'app tornerà a cercare il dispositivo.

![](images/xdrip-e-watchdrip/image_054.png)

> ⚠️ Se nella cartella ci sono più file, cancellali tutti e rigenera la chiave ripartendo dal passo 3.

### Verifica il funzionamento

Se la chiave non è corretta, comparirà un messaggio di errore:

![](images/xdrip-e-watchdrip/image_057.png)

Se invece l'autenticazione riesce, vedrai una conferma con il nome del tuo dispositivo:

![](images/xdrip-e-watchdrip/image_056.png)

Una volta connesso, aspetta la prossima lettura di xDrip: il valore dovrà comparire anche nella schermata principale di WatchDrip+...

![](images/xdrip-e-watchdrip/image_058.png)

...e sul quadrante dello smartband o smartwatch, insieme ad altri dati come battito cardiaco e passi (esempio su MiBand):

![](images/xdrip-e-watchdrip/image_059.png)

Un altro esempio di quadrante MiBand, con la freccia di tendenza e l'orario dell'ultima lettura:

![](images/xdrip-e-watchdrip/image_060.png)

Esempio di quadrante Amazfit con meteo, battito cardiaco e glicemia:

![](images/xdrip-e-watchdrip/image_061.png)

Un ultimo esempio, con anche l'indicatore IOB (insulina a bordo) accanto alla glicemia:

![](images/xdrip-e-watchdrip/image_062.png)

### Impostazioni consigliate in WatchDrip+

| Opzione | Impostazione |
|---|---|
| Mostra glicemia | **Abilitato** (necessario) |
| Vibra a ogni lettura | A scelta |
| Allarmi xDrip come notifiche | A scelta |
| Quadrante personalizzato | Solo se ne hai creato uno |
| Compatibilità Xiaomi | Abilita in caso di problemi con MiBand |
| Compatibilità Amazfit | Lascia disabilitato |

Le opzioni principali si trovano nella schermata iniziale di WatchDrip+ (**Invia Letture**, **Vibra alle letture**, **Usa quadrante personalizzato**):

![](images/xdrip-e-watchdrip/image_065.png)

Più in basso trovi le opzioni per gli allarmi (**Invia allarmi**, **Altri allarmi**):

![](images/xdrip-e-watchdrip/image_063.png)

In fondo alla pagina trovi anche la sezione **Avanzate**, con opzioni aggiuntive per utenti esperti:

![](images/xdrip-e-watchdrip/image_064.png)

---

## 6. Reinstalla le app ufficiali (opzionale)

Puoi reinstallare MiFit o Zepp dal Play Store. **Usa esattamente lo stesso account** (email e password) dell'app modificata. Se usi un account diverso, probabilmente dovrai ricominciare dall'inizio.
