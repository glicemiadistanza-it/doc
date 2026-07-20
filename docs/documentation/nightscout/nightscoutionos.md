# Nightscout su Ionos VPS

Questa guida spiega come creare un sito Nightscout su un **server virtuale privato (VPS) Ionos** al costo di circa 1€/mese (+IVA).

Nightscout nasce per essere distribuito su Linux. Questa soluzione usa uno script di installazione automatica che rende il processo relativamente semplice.

> ℹ️ **Limitazioni del VPS XS (1€/mese):** è adatto per la condivisione della glicemia e per uno smartwatch. **Non è adatto** per un circuito chiuso fai-da-te (Loop, iAPS, AAPS): la quantità di dati scambiata è troppa per un server così piccolo. Per quell'uso, un VPS di tipo S (4€/mese) sarebbe più appropriato — ma a quel prezzo esistono servizi Nightscout gestiti che offrono molto di più in modo più semplice.

---

## 1. Crea il server virtuale

1. Vai su [`https://www.ionos.it/server/vps`](https://www.ionos.it/server/vps).

![](images/nightscoutionos/image_002.png)

E scegli il piano **VPS Linux XS** (1€/mese +IVA):

![](images/nightscoutionos/image_003.png)

2. Seleziona **Linux Ubuntu 20.04** come sistema operativo. **Nessun'altra versione.**

![](images/nightscoutionos/image_004.png)

3. Non aggiungere backup cloud (costa in più e non è necessario): lascia selezionato **Nessuno**.

![](images/nightscoutionos/image_005.png)

4. Verifica che il contratto sia mensile (il default potrebbe essere annuale) e controlla il riepilogo dell'ordine.

![](images/nightscoutionos/image_006.png)

Se non sei ancora cliente Ionos, scegli **Continua come nuovo cliente**:

![](images/nightscoutionos/image_007.png)

5. Crea un account Ionos con la tua email (non usa e getta): seleziona **Privato** come tipo di utilizzo.

![](images/nightscoutionos/image_008.png)

Scegli una password sicura (**non perderla**) e clicca **Vai alle opzioni di pagamento**.

![](images/nightscoutionos/image_009.png)

6. Scegli il metodo di pagamento che preferisci (carta di credito o PayPal).

![](images/nightscoutionos/image_010.png)

Controlla il riepilogo dell'ordine: il costo è di circa 1,22€/mese, fatturato mensilmente.

![](images/nightscoutionos/image_011.png)

7. Accetta i termini e le condizioni e clicca **Ordina** per confermare.

![](images/nightscoutionos/image_012.png)

Vedrai la conferma con i prossimi passi:

![](images/nightscoutionos/image_013.png)

---

## 2. Recupera le credenziali del server

Dopo l'ordine, riceverai una mail da `supporto@ionos.it` di conferma del contratto, con il pulsante per accedere al pannello:

![](images/nightscoutionos/image_014.png)

In questa mail troverai:
- L'**indirizzo IP** del server (es. `217.xxx.xxx.xxx`)
- Il **nome del server**
- La **password di root** (amministratore)

Per visualizzare la password nel pannello Ionos:
1. Apri la mail → clicca **Login** in alto a destra.

![](images/nightscoutionos/image_015.png)

2. Vai in **Server & Cloud**.

![](images/nightscoutionos/image_016.png)

Seleziona il tuo VPS (chiamato "Nightscout") dall'elenco:

![](images/nightscoutionos/image_017.png)

Nella sezione **Features** trovi l'indirizzo IP (**Host**), l'utente (**User: root**) e il nome del server (**DNS host name**):

![](images/nightscoutionos/image_018.png)

La stessa schermata in italiano, con le etichette **Indirizzo IP**, **Password di root** e **Nome del server**:

![](images/nightscoutionos/image_019.png)

3. Clicca sull'icona "occhio" accanto alla password (**Visualizza password**) per visualizzarla e copiarla.

![](images/nightscoutionos/image_020.png)

> ℹ️ **Nota**: Puoi chiedere assistenza remota a una persona di fiducia condividendo solo l'indirizzo IP e la password root.

---

## 3. Installa Nightscout

Apri un terminale sul tuo computer:
- **Windows**: apri **Prompt dei comandi** o **PowerShell**
- **Mac**: apri **Terminale**

Connettiti al server con SSH:
```bash
ssh root@217.xxx.xxx.xxx
```
(sostituisci `217.xxx.xxx.xxx` con il tuo indirizzo IP)

Se chiede conferma, digita `yes`. Poi inserisci la password di root.

Quando vedi il prompt `root@localhost:~#`, esegui questo comando (copialo dal browser, non riscriverlo a mano):

```bash
curl https://raw.githubusercontent.com/psonnera/NSDockVPS/ionos_it/boot.sh | bash
```

Lo script di installazione si avvierà, mostrando la schermata di benvenuto di Nightscout:

![](images/nightscoutionos/image_021.png)

Accetta le condizioni di utilizzo premendo Invio:

![](images/nightscoutionos/image_022.png)

Lo script scaricherà i componenti necessari (l'installazione è automatica e dura meno di 10 minuti):

![](images/nightscoutionos/image_023.png)

### Crea le credenziali Nightscout

Lo script si fermerà per chiederti di creare un **nome utente** (solo minuscole e numeri, niente spazi o caratteri speciali):

![](images/nightscoutionos/image_024.png)

Poi ti chiederà una **password** (inseriscila due volte per conferma):

![](images/nightscoutionos/image_025.png)

> ⚠️ **Attenzione**: Non perdere queste credenziali!

Lo script si fermerà e mostrerà un nuovo comando SSH con il tuo nome utente: annotalo, ti servirà per riconnetterti.

![](images/nightscoutionos/image_026.png)

Premi Invio, poi digita `logout` (o premi `Ctrl+D`) per chiudere la sessione come root:

![](images/nightscoutionos/image_027.png)

### Primo accesso con il nuovo utente

Apri una nuova finestra del terminale e usa il comando mostrato dallo script:
```bash
ssh tuonome@217.xxx.xxx.xxx
```

Conferma con `yes` se richiesto e inserisci la password:

![](images/nightscoutionos/image_028.png)

Il server chiederà di confermare la password una seconda volta (`sudo`):

![](images/nightscoutionos/image_029.png)

Poi ti chiederà un'email (per il servizio SSL del certificato — è molto improbabile che ti venga mandata una mail):

![](images/nightscoutionos/image_030.png)

Infine scegli la **password del sito Nightscout** (API_SECRET): almeno 12 caratteri (minuscole, maiuscole, numeri). Non usare spazi o caratteri speciali come `|`, `:`, `,`, `@`, `/`.

![](images/nightscoutionos/image_031.png)

Si aprirà il menu principale **Nightscout Management**:

![](images/nightscoutionos/image_032.png)

Vai in **1 – Visualizzare lo stato** e aspetta che tutto diventi verde (5–10 minuti): database, Nightscout, Traefik, servizio DNS e certificato HTTP/HTTPS.

![](images/nightscoutionos/image_033.png)

---

## 4. Apri il sito Nightscout

Nel browser, vai all'indirizzo del tuo server (sostituisci `123a456` con il tuo nome):
```
https://123a456.online-server.cloud
```

Trovi il nome esatto del tuo server nella sezione **DNS host name** vista al passo 2:

![](images/nightscoutionos/image_034.png)

Se la pagina non si apre entro 10 minuti, dal menu SSH scegli **6 – Riavviare Nightscout**...

![](images/nightscoutionos/image_035.png)

...aspetta 10 minuti (il riavvio mostra un contatore) e riprova.

![](images/nightscoutionos/image_036.png)

### Configura il profilo

1. Quando il sito si apre per la prima volta, ti verrà chiesto di creare un nuovo profilo: premi **OK**.

![](images/nightscoutionos/image_037.png)

Si aprirà l'**Editor dei profili**:

![](images/nightscoutionos/image_038.png)

2. Imposta il fuso orario: **Europe/Rome**.

3. Scorri in fondo → **Autenticare** → inserisci l'API_SECRET nella finestra **Device authentication**...

![](images/nightscoutionos/image_039.png)

...lo stato passerà da **Non Autorizzato**...

![](images/nightscoutionos/image_040.png)

...a **Amministratore autorizzato**: premi **Salva**.

![](images/nightscoutionos/image_041.png)

### Se usi Dexcom Share

Dal menu SSH:
1. Vai in **5 – Editare le variabili** → **6 – Dexcom share**.

![](images/nightscoutionos/image_042.png)

2. Inserisci nome utente, password (quelli del telefono master collegato al sensore) e server (**EU** o **US**).

![](images/nightscoutionos/image_043.png)

3. Premi Invio per salvare, poi torna al menu delle variabili:

![](images/nightscoutionos/image_044.png)

Per abilitare il plugin:
1. Vai in **2 – Abilita plugins** → seleziona **bridge (Dexcom share)** con la barra spaziatrice.

![](images/nightscoutionos/image_045.png)

2. Premi **Salva**.
3. Torna al menu principale per validare le modifiche:

![](images/nightscoutionos/image_046.png)

E scegli **6 – Riavviare Nightscout** per applicarle:

![](images/nightscoutionos/image_047.png)

> ℹ️ **Nota**: È necessario avere almeno un follower attivo su Dexcom Share per vedere i dati in Nightscout (puoi invitare te stesso).

Se non vedi la glicemia entro 10 minuti, riavvia Nightscout dal menu (attendi il completamento della barra di avanzamento).

![](images/nightscoutionos/image_048.png)

A questo punto il tuo sito mostrerà la glicemia in tempo reale, come in questo esempio:

![](images/nightscoutionos/image_049.png)

---

## 5. Crea un nome più facile da ricordare (opzionale)

Il nome predefinito del server Ionos è difficile da ricordare. Puoi creare un indirizzo più semplice con FreeDNS (gratuito).

1. Vai su [`https://freedns.afraid.org/`](https://freedns.afraid.org/) → **Sign up Free**.
2. Compila nome utente, password (non perderla!) e email. Risolvi il captcha e clicca **Send activation email**.

![](images/nightscoutionos/image_050.png)

3. Controlla la mail e clicca il link di conferma:

![](images/nightscoutionos/image_051.png)

4. Accedi e clicca **Subdomains** → **Add a subdomain**.

![](images/nightscoutionos/image_052.png)

5. In **Subdomain**: il nome che vuoi per il tuo sito.
6. In **Domain**: scegli un dominio dalla lista (es. `mooo.com`).
7. In **Destination**: l'indirizzo IP del tuo VPS Ionos.
8. Risolvi il captcha e clicca **Save**.

![](images/nightscoutionos/image_053.png)

Il tuo sito sarà ora raggiungibile con il nuovo nome.

> ⚠️ **Attenzione**: Fai login su FreeDNS almeno ogni 6 mesi per mantenere attivo il tuo dominio gratuito (solo il login, nient'altro).
