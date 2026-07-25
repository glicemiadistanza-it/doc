# Monitor glicemia con M5Stack

Un M5Stack configurato come display da tavolo, con la glicemia sempre visibile:

![](images/monitor-nightscout-m5stack/image_001.png)

Questa guida spiega come configurare un **M5Stack** come display da tavolo per la glicemia. Puoi scegliere tra due firmware open source:

- **M5_NightscoutMon** (progetto originale di Martin Lukasek, aggiornato da Patrick Sonnerat): si collega al Wi-Fi di casa e legge i dati da Nightscout, Dexcom Share, LLink o Gluroo. Documentazione ufficiale: [`https://github.com/psonnera/M5_NightscoutMon/wiki`](https://github.com/psonnera/M5_NightscoutMon/wiki)
- **M5Stack_xDripMon**: riceve la glicemia direttamente dal telefono via Bluetooth, da xDrip (Android) o xDrip4iOS (iPhone). Niente Wi-Fi, niente cloud. Documentazione ufficiale: [`https://github.com/psonnera/M5Stack_xDripMon`](https://github.com/psonnera/M5Stack_xDripMon)

**Requisiti:** uno smartphone **Android** (Android 10 o superiore, con presa USB-C) — è il metodo più semplice e funziona per entrambi i firmware — oppure un computer (Windows di preferenza, solo per M5_NightscoutMon).

> ⚠️ **Attenzione**: L'utilizzo è a esclusiva responsabilità personale.

---

## 1. Scegli il firmware

| | M5_NightscoutMon | M5Stack_xDripMon |
|---|---|---|
| Collegamento | Wi-Fi di casa | Bluetooth, direttamente dal telefono |
| Sorgenti dati | Nightscout, Dexcom Share, LLink (follower), Gluroo | xDrip (Android), xDrip4iOS (iPhone) |
| Serve internet | Sì | No |
| Funziona fuori casa | Solo dove c'è un Wi-Fi configurato | Sì, basta il telefono nelle vicinanze |
| Configurazione | Pagina web dal telefono o dal computer | Menu direttamente sul dispositivo |
| Modelli supportati | Basic, Fire, Core2, CoreS3 | Basic recente (16 MB), Fire, Core2 — **non** CoreS3 |

In breve:

- Se hai **Nightscout** (oppure usi Dexcom Share, LLink o Gluroo) e il display resterà dove c'è un Wi-Fi → scegli **M5_NightscoutMon**.
- Se usi già **xDrip** o **xDrip4iOS** e vuoi zero configurazione di rete → scegli **M5Stack_xDripMon**: il telefono invia la glicemia direttamente al display.

> ℹ️ **Nota**: i quadranti e gli allarmi sono praticamente identici nei due firmware, e puoi passare dall'uno all'altro in qualsiasi momento riprogrammando il dispositivo.

---

## 2. Materiale occorrente

- **M5Stack Core Basic** (ESP32): lo trovi sul sito del produttore [`https://m5stack.com/collections/m5-core`](https://m5stack.com/collections/m5-core), su AliExpress o Amazon. Prezzo indicativo: meno di 60 € spedito (metà 2026). Funzionano anche Core GRAY, GO, FIRE, Core2, CoreS3 e M5Tough, ma non offrono vantaggi per questo uso.

![](images/monitor-nightscout-m5stack/image_002.png)

- **Caricatore USB** (indispensabile) e cavo USB-C: il cavetto fornito nel kit è corto e di tipo USB-A/USB-C; per programmare da telefono serve un cavo **USB-C/USB-C**.
- La batteria inclusa dura poco (150 mAh): se non aggiungi una batteria supplementare, tieni il dispositivo sempre in carica.
- (Facoltativo) Scheda micro SD (serve solo per gestire più configurazioni con M5_NightscoutMon; 8–16 GB bastano) e batterie supplementari, che aumentano l'autonomia a 7–8 ore con luminosità ridotta.

> ⚠️ **Attenzione**: M5Stack_xDripMon richiede un modello con 16 MB di memoria: Basic recente (v2.6/v2.7), Fire o Core2. Non funziona su CoreS3 né sui Basic più vecchi (4 MB).

> ℹ️ **Nota**: gli M5Stack Basic e Grey più recenti non digeriscono le micro SD SanDisk Ultra: usa una Kingston o una scheda senza marca.

![](images/monitor-nightscout-m5stack/image_003.png)

Per installare le batterie supplementari, apri delicatamente la parte anteriore dell'M5Stack con un coltello o un cacciavite piatto abbastanza largo, facendo leva ai lati del guscio:

![](images/monitor-nightscout-m5stack/image_004.png)

Solleva il pannello anteriore fino a staccarlo completamente:

![](images/monitor-nightscout-m5stack/image_005.png)

Inserisci le batterie supplementari nell'apposito vano:

![](images/monitor-nightscout-m5stack/image_006.png)

Richiudi il pannello anteriore fino a sentirlo scattare in posizione:

![](images/monitor-nightscout-m5stack/image_007.png)

Ecco com'è fatto un M5Stack Core (Basic):

![](images/monitor-nightscout-m5stack/image_017.png)

E questo invece è un M5Stack Core 2, riconoscibile dal frontale completamente touch:

![](images/monitor-nightscout-m5stack/image_018.png)

---

## 3. Metodo facile — Programma l'M5Stack dal telefono Android

Non serve nessun computer: basta uno smartphone Android (versione 10 o superiore) e un cavo USB-C/USB-C. Questo metodo funziona per **entrambi i firmware**.

1. Collega prima l'M5Stack a un caricatore USB, così si ricarica.
2. Sul telefono, installa l'app **M5Stack Loader** da [`https://github.com/psonnera/M5StackLoader/releases`](https://github.com/psonnera/M5StackLoader/releases) (in attesa della pubblicazione sul Play Store).
3. Collega l'M5Stack al telefono con il cavo USB-C. Quando Android chiede quale app usare per il dispositivo USB, scegli **M5Stack Loader** e autorizza l'accesso USB (**Consenti sempre** oppure **Solo questa volta**), poi tocca **OK**.
4. Concedi il permesso di **posizione** (**Mentre usi l'app**): Android lo richiede per elencare le reti Wi-Fi.
5. Nella schermata principale scegli il firmware da installare: **M5 NightscoutMon** (Wi-Fi) oppure **M5Stack xDripMon** (Bluetooth). La terza scheda, per firmware personalizzati da GitHub, è riservata agli esperti.
6. (Solo per M5_NightscoutMon, consigliato) Spunta **Set up Wi-Fi on the device** e inserisci la **password** della tua rete Wi-Fi: le credenziali vengono scritte nel dispositivo durante la programmazione, così si collegherà da solo alla rete (le credenziali non vengono inviate a nessun server). Se non la spunti, potrai configurare il Wi-Fi più tardi con il metodo descritto alla sezione 5 di questa guida.
7. L'app riconosce da sola il modello di M5Stack e sceglie il firmware giusto: controlla il riepilogo e tocca **Flash firmware**. La barra può restare all'1% per una trentina di secondi, poi la scrittura dura circa 10 secondi: **non scollegare il cavo**. Alla fine il dispositivo si riavvia.
8. (Solo per M5_NightscoutMon) Tocca **Open device configuration**: l'app trova il dispositivo al suo indirizzo unico `m5ns-xxxx.local` e apre la pagina di configurazione (vedi sezione 6).
9. (Solo per M5Stack_xDripMon) Alla prima accensione il dispositivo ti chiede da quale app riceverà la glicemia: vai alla sezione 9 di questa guida.

**Se qualcosa non va:**
- La programmazione non parte o si interrompe: prova con un altro cavo.
- Lo schermo resta nero: ripeti la programmazione (è molto difficile danneggiare un ESP32).
- Il dispositivo non si collega al Wi-Fi: la password era sbagliata; riprogramma oppure usa la configurazione Wi-Fi della sezione 5.
- Non trovi la pagina di configurazione: premi ripetutamente il **tasto destro** dell'M5Stack fino alla pagina con il **codice QR di configurazione** e scansionalo (oppure usa l'indirizzo IP mostrato).

---

## 4. Metodo alternativo — Programma da Windows con M5Burner

> ℹ️ **Nota**: questo metodo vale solo per **M5_NightscoutMon**. Per M5Stack_xDripMon usa il metodo dal telefono (sezione 3); gli esperti possono usare esptool seguendo le istruzioni nel [repository del progetto](https://github.com/psonnera/M5Stack_xDripMon).

### Verifica il driver USB

1. Collega l'M5Stack al computer. Il dispositivo esegue un autotest:

![](images/monitor-nightscout-m5stack/image_021.png)

2. Apri **Gestione dispositivi** di Windows (clic destro sul pulsante Start → **Gestione dispositivi**) e guarda in **Porte (COM e LPT)**: se compare una porta COM (es. `COM3`), il driver è già presente e puoi passare a M5Burner. Annota il numero della porta:

![](images/monitor-nightscout-m5stack/image_022.png)

3. Se non compare nessuna porta, installa il driver da [`https://docs.m5stack.com/en/download`](https://docs.m5stack.com/en/download) (sezione **USB Driver**):
   - `CH9102_VCP_SER_Windows` per i Basic/Core2 recenti (chip CH9102)
   - `CP210x_VCP_Windows` per le unità più vecchie (chip CP2104), disponibile anche dal sito Silicon Labs: [`https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers`](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers)

![](images/monitor-nightscout-m5stack/image_008.png)

Clicca sul link di download della versione VCP (Virtual COM Port) indicata:

![](images/monitor-nightscout-m5stack/image_009.png)

Nella cartella Download, fai clic destro sul file `.zip` → **Estrai tutto**:

![](images/monitor-nightscout-m5stack/image_010.png)

Conferma la destinazione e clicca **Estrai**:

![](images/monitor-nightscout-m5stack/image_011.png)

Nella cartella estratta, esegui il programma di installazione per la tua piattaforma (es. 64 bit):

![](images/monitor-nightscout-m5stack/image_012.png)

Clicca **Avanti** per procedere con l'installazione guidata:

![](images/monitor-nightscout-m5stack/image_013.png)

Clicca **Fine** per completare l'installazione del driver:

![](images/monitor-nightscout-m5stack/image_014.png)

> ℹ️ **Nota**: Se hai già versioni precedenti del driver USB SiLabs, rimuovile prima per evitare conflitti. Dopo l'installazione, scollega e ricollega il dispositivo.

### Installa M5Burner e il firmware

1. Scarica **M5Burner** (versione **Win10 x64**) dalla pagina download di M5Stack, sezione **UiFlow Firmware Burning Tool**: [`https://docs.m5stack.com/en/download`](https://docs.m5stack.com/en/download).
2. Estrai lo zip in un percorso **senza spazi** (es. direttamente in `C:\`) e avvia `M5Burner.exe`.
3. Se Windows Defender blocca l'esecuzione, clicca **Ulteriori informazioni**:

![](images/monitor-nightscout-m5stack/image_024.png)

Poi clicca **Esegui comunque**:

![](images/monitor-nightscout-m5stack/image_025.png)

4. In M5Burner, nell'elenco **Device Type** a sinistra seleziona **CORE** (per Basic/Core/Gray) oppure **CORE2 & TOUGH** (per Core2/Tough).
5. Digita `Nightscout` nella barra di ricerca e premi Invio: sul risultato **NightscoutMon** clicca **Download**.
6. Clicca **Burn**: al messaggio sul firmware non ufficiale rispondi **Continue**, seleziona la porta **COM** annotata prima, imposta il baud rate a `921600` e clicca **Start**.
7. Al termine comparirà **"Burn successfully, click here to return"**.

**Se la scrittura fallisce:** riprova con baud rate `115200`, cambia cavo o porta USB, e chiudi eventuali programmi che usano la porta COM.

> ℹ️ **Nota per Mac**: M5Burner esiste anche per macOS (stessa pagina di download). A differenza di Windows, il firmware si scarica dalla sezione **USER CUSTOM** (in basso a sinistra) → **Share Burn**, inserendo il codice `0nPW6eAzC7GcnfWN` per Basic/Core oppure `1HgGY5jdSokZb7JK` per Core2. La procedura completa è descritta nella [pagina Mac del wiki](https://github.com/psonnera/M5_NightscoutMon/wiki/Mac).

---

## 5. M5_NightscoutMon — Collega al Wi-Fi

> ℹ️ **Nota**: le sezioni da 5 a 8 riguardano solo **M5_NightscoutMon**. Se hai installato M5Stack_xDripMon, salta alla sezione 9.

Se non hai già configurato il Wi-Fi durante la programmazione da Android, alla prima accensione l'M5Stack entra in modalità **SoftAP**: crea una propria rete Wi-Fi temporanea e mostra sullo schermo i dati per collegarsi:

![](images/monitor-nightscout-m5stack/image_029.png)

1. Dal tuo smartphone (qualsiasi), scansiona il codice QR oppure connettiti manualmente alla rete Wi-Fi mostrata, usando la password sullo schermo (il telefono avviserà che la rete non ha internet: scegli di restare connesso):

![](images/monitor-nightscout-m5stack/image_030.png)

2. Apri un browser e vai all'indirizzo mostrato sullo schermo: [`http://192.168.0.1`](http://192.168.0.1) (attenzione: **http**, non https). Il server del dispositivo è lento: abbi pazienza tra un clic e l'altro.
3. Nella pagina di configurazione, scorri fino a **WiFi configuration**:

![](images/monitor-nightscout-m5stack/image_031.png)

Clicca **edit** accanto alla voce `[wlan1]`:

![](images/monitor-nightscout-m5stack/image_032.png)

4. Seleziona la prima voce `[wlan1]`, poi la tua rete Wi-Fi di casa dal menu a tendina:

![](images/monitor-nightscout-m5stack/image_033.png)

Inserisci la password nel campo apposito e clicca **OK**:

![](images/monitor-nightscout-m5stack/image_034.png)

5. Torna al menu principale e clicca **Save configuration to M5NS.ini file**: il dispositivo si riavvierà e si connetterà alla tua rete Wi-Fi. Vedrai prima la conferma del salvataggio:

![](images/monitor-nightscout-m5stack/image_035.png)

Poi la schermata di avvio della connessione Wi-Fi:

![](images/monitor-nightscout-m5stack/image_036.png)

E infine il messaggio che conferma l'avvio della procedura di connessione:

![](images/monitor-nightscout-m5stack/image_037.png)

**Per rientrare in modalità SoftAP** in qualsiasi momento:
- **Basic/Core**: tieni premuto il **tasto sinistro**, premi il tasto rosso di reset sul lato e continua a tenere premuto il tasto sinistro finché non compare la schermata con il QR del Wi-Fi.
- **Core2**: premi il tasto di reset in basso a sinistra e tocca **CONFIG** sullo schermo durante il riavvio.

Ecco un esempio di schermata con errore di connessione registrato nel log:

![](images/monitor-nightscout-m5stack/image_038.png)

---

## 6. M5_NightscoutMon — Configura il dispositivo

Da un computer o telefono sulla stessa rete Wi-Fi, vai su `http://m5ns-xxxx.local` — il nome esatto (le 4 cifre `xxxx` sono uniche per il tuo dispositivo) è mostrato nella pagina con il **codice QR di configurazione**: premi il **tasto destro** dell'M5Stack finché non compare, poi scansiona il QR o usa l'indirizzo IP indicato:

![](images/monitor-nightscout-m5stack/image_039.png)

Se tutto è corretto, si aprirà la pagina di configurazione con lo stato del dispositivo e le impostazioni correnti:

![](images/monitor-nightscout-m5stack/image_040.png)

Clicca **edit** accanto ai valori che vuoi modificare. Le modifiche sono subito attive in memoria, ma per conservarle devi cliccare **Save configuration to M5NS.INI** in alto; le impostazioni che richiedono un riavvio (sorgente dati, nome dispositivo, reti Wi-Fi, fuso orario) mostrano un avviso rosso e il dispositivo si riavvia da solo al salvataggio.

### Sorgente dati (una sola attiva)

| Sorgente | Impostazioni |
|---|---|
| **Nightscout** | **Nightscout URL** (es. `miosito.dominio.com`) e **Security token** (vuoto se il sito non è protetto) |
| **Dexcom Share** | **Dexcom account**: l'account che **condivide** (non quello follower) e il server (**US**, **Outside US** o **Japan**) |
| **LLink** | L'account **follower** (non l'account principale LView); lascia la regione su **Auto (detect)** |

> ⚠️ **Attenzione**: le credenziali Dexcom e LLink vengono salvate in chiaro nella memoria del dispositivo (o sulla micro SD).

### Altre impostazioni principali

| Parametro | Descrizione |
|---|---|
| Display units | `mg/dL` o `mmol/L` (vale anche per soglie e allarmi) |
| Default page | Quadrante all'avvio (i tasti permettono di cambiare pagina) |
| Status line | Riga di stato: info sensore, icone tasti, oppure info loop/basale |
| Display yellow below/above | Soglie per il giallo (avvertimento) |
| Display red below/above | Soglie per il rosso (fuori range) |
| Warning/Alarm sound below/above | Soglie delle suonerie di avvertimento e allarme |
| Warning sound when no reading for | Minuti senza lettura prima dell'avvertimento |
| Snooze timeout / Repeat alarm every | Silenziamento e ripetizione degli allarmi |
| Warning/Alarm sound volume | Volumi separati per avvertimento e allarme (0 = silenzioso) |
| Device name | Il nome per l'indirizzo `.local` |
| Time offset / DST offset | Fuso orario e ora legale in secondi (riavvio necessario) |
| Restart at time | Riavvio automatico giornaliero (es. `03:30`; `NORES` per disabilitare) |
| Restart after N errors | Riavvio automatico dopo N errori (0 = mai) |

La pagina permette anche di gestire più reti Wi-Fi memorizzate (fino a 9), gli accessori opzionali (striscia LED, motorino di vibrazione) e il **server web interno** (se lo disabiliti, la pagina non sarà più raggiungibile fino al prossimo riavvio in modalità configurazione).

Una volta sistemate le impostazioni, clicca **Save configuration to M5NS.INI**:

![](images/monitor-nightscout-m5stack/image_041.png)

> ℹ️ **Nota**: per riportare il dispositivo alle impostazioni di fabbrica, vai su `http://m5ns-xxxx.local/clearconfigflash` e poi rifai la configurazione dalla modalità SoftAP.

> ℹ️ **Nota sulla micro SD**: al riavvio, se c'è una micro SD inserita il dispositivo usa e salva il file `M5NS.ini` sulla SD; senza SD usa la memoria interna. Utile per passare tra più configurazioni.

---

## 7. M5_NightscoutMon — Aggiorna il firmware

Nella pagina di configurazione web, scorri fino a **Application firmware**. Clicca **Check for update**: se è disponibile una versione più recente, clicca il link di aggiornamento:

![](images/monitor-nightscout-m5stack/image_042.png)

Il dispositivo scaricherà e installerà il nuovo firmware automaticamente (meno di 5 minuti); la pagina web mostra l'avanzamento:

![](images/monitor-nightscout-m5stack/image_043.png)

E anche il display dell'M5Stack mostra l'avanzamento dell'aggiornamento:

![](images/monitor-nightscout-m5stack/image_044.png)

> ℹ️ **Nota**: puoi aggiornare anche direttamente dal dispositivo: premi il tasto destro fino alla pagina con il codice QR; se c'è un aggiornamento disponibile, sopra il tasto centrale compare **UPDATE**: premilo.

---

## 8. M5_NightscoutMon — Tasti e quadranti

| Azione | Tasto |
|---|---|
| Cambia luminosità (3 livelli) | Tasto sinistro |
| Snooze allarme (1x → 2x → 3x → 4x → off) | Tasto centrale |
| Quadrante successivo | Tasto destro |
| Spegni lo schermo | Tasto destro premuto per 4 secondi |

Con il tasto destro puoi scorrere tra i quadranti disponibili:

1. **Quadrante principale**: ora, data, glicemia con freccia di tendenza, mini-grafico delle ultime letture e IOB/COB (insulina e carboidrati attivi, se la sorgente li fornisce).
2. **Glicemia in grande**: valore ben visibile anche da lontano, con orologio grande.
3. **Orologio analogico**: con data, glicemia e delta; mostra anche temperatura e umidità se è collegato un sensore ambientale.
4. **Registro errori**: gli ultimi 10 errori registrati e il conteggio totale.
5. **Codice QR di configurazione**: per aprire la pagina web del dispositivo e installare gli aggiornamenti.

Ecco un esempio di quadrante numerico, con nome utente, orario, valore e freccia di tendenza:

![](images/monitor-nightscout-m5stack/image_045.png)

Ed ecco un esempio di quadrante circolare, con lancetta di tendenza e temperatura:

![](images/monitor-nightscout-m5stack/image_046.png)

> ℹ️ **Nota**: il riquadro con i minuti trascorsi dall'ultima lettura cambia colore: grigio fino a 5 minuti (tutto ok), sfondo bianco tra 5 e 15 minuti (avvertimento), sfondo rosso oltre 15 minuti (nessun dato recente).

---

## 9. M5Stack_xDripMon — Configura il collegamento Bluetooth

Con questo firmware non c'è niente da configurare via web: il telefono con xDrip (Android) o xDrip4iOS (iPhone) invia la glicemia direttamente al dispositivo via Bluetooth.

### Prima accensione: scegli la sorgente

Alla prima accensione il dispositivo chiede da quale app riceverà i dati:

- **Tasto sinistro (A)**: xDrip (Android)
- **Tasto destro (C)**: xDrip4iOS (iPhone)

Puoi cambiare la scelta in qualsiasi momento dal menu delle impostazioni (vedi sotto).

### Configura xDrip (Android)

1. In xDrip, apri **Impostazioni** → **Smart Watch Features** → **Mi Band**.
2. Attiva **Use Mi Band** e lascia **vuoto** il campo della chiave di autenticazione (auth key).
3. Attiva l'invio delle letture (l'opzione basata sulle notifiche, nella stessa pagina).
4. Torna al quadrante dell'M5Stack: entro pochi minuti l'icona Bluetooth diventerà blu fissa e comparirà la glicemia.

> ℹ️ **Nota sull'orologio**: xDrip per Android non sincronizza l'ora. Sui modelli Basic e Fire (senza orologio interno a batteria) dovrai reinserire l'ora dal menu dopo ogni spegnimento completo; il Core2 invece mantiene l'ora da solo.

### Configura xDrip4iOS (iPhone)

1. In xDrip4iOS, aggiungi un nuovo dispositivo Bluetooth di tipo **M5Stack**.
2. Accetta la richiesta di abbinamento: letture, freccia di tendenza e ora si sincronizzano automaticamente quando l'app si collega.

### Icona Bluetooth

L'icona Bluetooth sul display indica lo stato del collegamento:

- **Rossa lampeggiante**: non collegato (telefono lontano o app chiusa)
- **Blu lampeggiante**: collegamento in corso
- **Blu fissa**: collegato, i dati arrivano

### Impostazioni sul dispositivo

Tutte le impostazioni si regolano direttamente sull'M5Stack: **tieni premuto il tasto centrale** per aprire il menu. Da lì puoi impostare le soglie gialle e rosse, i suoni di avvertimento e allarme, i volumi e la sorgente dati.

I quadranti sono gli stessi di M5_NightscoutMon (quadrante principale, glicemia in grande, orologio analogico, registro eventi) e il **tasto centrale** con una pressione breve silenzia gli allarmi (snooze), come descritto nella sezione 8.

---

## 10. In caso di difficoltà

- Se la programmazione fallisce, prova un altro cavo USB o un'altra porta; con M5Burner riprova a baud rate `115200`.
- Se lo schermo resta nero, ripeti semplicemente la programmazione: è molto difficile danneggiare un ESP32.
- **M5_NightscoutMon** — se non ricordi il nome `.local` del dispositivo, premi il tasto destro fino alla pagina con il codice QR di configurazione: mostra nome esatto e indirizzo IP.
- **M5_NightscoutMon** — il registro degli errori è visibile in uno dei quadranti (tasto destro per scorrerli) e nella pagina web di configurazione.
- **M5Stack_xDripMon** — se l'icona Bluetooth resta rossa lampeggiante: controlla che il telefono sia vicino, che xDrip/xDrip4iOS sia aperta e che le opzioni della sezione 9 siano attive; su Android verifica che xDrip non venga chiusa dal risparmio energetico.
- **M5Stack_xDripMon** — se l'ora è sbagliata su Basic o Fire, reimpostala dal menu (tieni premuto il tasto centrale): questi modelli non hanno un orologio interno a batteria.
