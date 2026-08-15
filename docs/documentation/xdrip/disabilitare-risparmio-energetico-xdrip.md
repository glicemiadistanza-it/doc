# Disabilitare il risparmio energetico per xDrip

Se xDrip smette di ricevere le letture del sensore, perde la connessione Bluetooth o le letture arrivano in ritardo quando lo schermo è spento, la causa più comune è il **risparmio energetico di Android**. Ogni produttore lo chiama in modo diverso, ma la soluzione è sempre la stessa: escludere xDrip (e le app collegate) da qualsiasi ottimizzazione della batteria.

Questa guida vale per **tutti i telefoni Android**: prima sistemi le impostazioni dentro xDrip, poi quelle di Android, e infine controlli le particolarità del tuo produttore.

---

## 1. Verifica le impostazioni di xDrip

Apri il menù di xDrip e vai in **Impostazioni**:

![](images/disabilitare-risparmio-energetico-xdrip/image_014.png)

Scorri in basso e apri **Impostazioni Meno Usate**, poi in fondo alla pagina **Altre opzioni**:

![](images/disabilitare-risparmio-energetico-xdrip/image_013.png)

![](images/disabilitare-risparmio-energetico-xdrip/image_015.png)

Anche se le impostazioni sembrano già corrette, togli e rimetti ogni opzione per forzare l'aggiornamento:

- **Eseguire Collector in primo piano** → deve essere **abilitato** (xDrip mostra una notifica fissa e Android non lo chiude)
- **Richiesta di Ottimizzazione della Batteria** → deve essere **disabilitata**, così xDrip continua a ricordarti di escluderlo dall'ottimizzazione della batteria
- **Samsung Workaround** → deve essere **abilitato** sui telefoni Samsung
- **Uso eccessivo Wakelocks** → abilitalo solo se il telefono continua a sospendere xDrip

Se usi uno smartwatch Android Wear, verifica le stesse impostazioni anche per l'app sull'orologio.

---

## 2. Impostazioni di Android (tutti i telefoni)

xDrip **non deve essere ottimizzato** dalla batteria di Android. La stessa regola vale per tutte le app della catena dati: l'app follower, Juggluco, GlucoDataHandler, WatchDrip, l'uploader Nightscout, ecc.

**Procedura standard (Android 10 e successivi):**

1. Apri le **Impostazioni** del telefono.
2. Vai in **App** (o **Applicazioni**) e seleziona **xDrip+** dall'elenco.
3. Tocca **Batteria**.
4. Seleziona **Senza restrizioni** (o **Non ottimizzare**).
5. Ripeti per ogni altra app collegata alla glicemia.

> ⚠️ **Attenzione**: i nomi delle voci cambiano leggermente da telefono a telefono e da versione a versione di Android. Usa i nomi come riferimento e cerca la voce più simile.

Apri le **Impostazioni** del telefono:

![](images/disabilitare-risparmio-energetico-xdrip/image_001.png)

Vai in **Applicazioni** e seleziona l'app dall'elenco:

![](images/disabilitare-risparmio-energetico-xdrip/image_003.png)

Nella schermata **Informazioni applicazione**, tocca **Batteria**:

![](images/disabilitare-risparmio-energetico-xdrip/image_011.png)

Seleziona **Senza restrizioni**:

![](images/disabilitare-risparmio-energetico-xdrip/image_012.png)

> ℹ️ **Nota**: Nelle schermate è mostrata un'altra app come esempio: la procedura è identica per xDrip.

**Controlla anche queste impostazioni generali:**

- **Risparmio energetico globale**: se attivi la modalità risparmio energetico del telefono (o "Ultra risparmio"), Android può comunque bloccare le app in background. Meglio non usarla, o verificare che xDrip sia tra le eccezioni.
- **Bluetooth**: su alcuni telefoni l'ottimizzazione batteria interrompe le scansioni Bluetooth in background. Verifica che anche i servizi Bluetooth non siano limitati.
- **Rete in background**: se usi xDrip come follower (letture via internet), assicurati che i dati in background non vengano bloccati a schermo spento (voce **Utilizzo dati** → **Dati in background** nella pagina dell'app).
- **Blocco app recenti**: su molti telefoni puoi "bloccare" (lucchetto) xDrip nella schermata delle app recenti, così non viene chiusa dalla pulizia automatica della memoria.

---

## 3. Particolarità per produttore

Alcuni produttori (Xiaomi, Samsung, Huawei, OnePlus, Oppo, ecc.) aggiungono i loro sistemi di risparmio energetico **oltre** a quello standard di Android, e ognuno usa menu diversi.

Il sito [`https://dontkillmyapp.com`](https://dontkillmyapp.com) raccoglie le istruzioni aggiornate per ogni marca: scegli il produttore del tuo telefono e segui i passaggi indicati (il sito è in inglese, ma le schermate rendono i passaggi facili da seguire).

Esempi tipici:

- **Samsung**: **Impostazioni** → **Assistenza dispositivo e batteria** → **Batteria** → **Limiti di utilizzo in background** → verifica che xDrip non sia tra le **App in sospensione** e aggiungila alle **App senza limitazioni**.
- **Xiaomi (MIUI/HyperOS)**: **Impostazioni** → **App** → **Gestisci app** → xDrip → **Risparmio batteria** → **Nessuna restrizione**; attiva anche **Avvio automatico**.
- **Huawei**: **Impostazioni** → **Batteria** → **Avvio app** → xDrip → disattiva la gestione automatica e abilita tutte le opzioni manuali.

> ℹ️ **Nota**: dopo ogni **aggiornamento di sistema** del telefono, ricontrolla queste impostazioni: alcuni produttori le riportano ai valori predefiniti.
