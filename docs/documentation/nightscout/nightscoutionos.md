# Nightscout su Ionos VPS

![](images/nightscoutionos/image_001.png)

![](images/nightscoutionos/image_002.png)

Questa guida spiega come creare un sito Nightscout su un **server virtuale privato (VPS) Ionos** al costo di circa 1€/mese (+IVA).

Nightscout nasce per essere distribuito su Linux. Questa soluzione usa uno script di installazione automatica che rende il processo relativamente semplice.

> ℹ️ **Limitazioni del VPS XS (1€/mese):** è adatto per la condivisione della glicemia e per uno smartwatch. **Non è adatto** per un circuito chiuso fai-da-te (Loop, iAPS, AAPS): la quantità di dati scambiata è troppa per un server così piccolo. Per quell'uso, un VPS di tipo S (4€/mese) sarebbe più appropriato — ma a quel prezzo esistono servizi Nightscout gestiti che offrono molto di più in modo più semplice.

---

## 1. Crea il server virtuale

1. Vai su `https://www.ionos.it/server/vps` e scegli il piano **VPS XS** (1€/mese +IVA).

![](images/nightscoutionos/image_003.png)

![](images/nightscoutionos/image_004.png)

2. Seleziona **Linux Ubuntu 20.04** come sistema operativo. **Nessun'altra versione.**

![](images/nightscoutionos/image_005.png)

3. Non aggiungere backup cloud (costa in più e non è necessario).

![](images/nightscoutionos/image_006.png)

4. Verifica che il contratto sia mensile (il default potrebbe essere annuale) e clicca **Continua**.

![](images/nightscoutionos/image_007.png)

5. Crea un account Ionos con la tua email (non usa e getta) e una password sicura. **Non perderle.**

![](images/nightscoutionos/image_008.png)

![](images/nightscoutionos/image_009.png)

6. Vai alle opzioni di pagamento e completa l'abbonamento. Il costo è di circa 1,22€/mese, fatturato mensilmente.

![](images/nightscoutionos/image_010.png)

![](images/nightscoutionos/image_011.png)

7. Clicca **Ordina** per confermare.

![](images/nightscoutionos/image_012.png)

![](images/nightscoutionos/image_013.png)

![](images/nightscoutionos/image_014.png)

---

## 2. Recupera le credenziali del server

Dopo l'ordine, riceverai una mail da `supporto@ionos.it`. In questa mail troverai:
- L'**indirizzo IP** del server (es. `217.xxx.xxx.xxx`)
- Il **nome del server**
- La **password di root** (amministratore)

Per visualizzare la password nel pannello Ionos:
1. Apri la mail → clicca **Login** in alto a destra.

![](images/nightscoutionos/image_015.png)

2. Vai in **Server & Cloud** e seleziona il tuo VPS.

![](images/nightscoutionos/image_016.png)

![](images/nightscoutionos/image_017.png)

![](images/nightscoutionos/image_018.png)

![](images/nightscoutionos/image_019.png)

3. Clicca sull'icona "occhio" accanto alla password per visualizzarla e copiarla.

![](images/nightscoutionos/image_020.png)

> ℹ️ Puoi chiedere assistenza remota a una persona di fiducia condividendo solo l'indirizzo IP e la password root.

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

Lo script di installazione si avvierà. Accetta le condizioni di utilizzo premendo Invio.

![](images/nightscoutionos/image_021.png)

![](images/nightscoutionos/image_022.png)

![](images/nightscoutionos/image_023.png)

L'installazione è automatica e dura meno di 10 minuti.

### Crea le credenziali Nightscout

Lo script si fermerà per chiederti di creare un **nome utente** (solo minuscole e numeri, niente spazi o caratteri speciali) e una **password** (inseriscila due volte per conferma).

![](images/nightscoutionos/image_024.png)

> ⚠️ **Non perdere queste credenziali!**

Lo script si fermerà e mostrerà un nuovo comando SSH con il tuo nome utente. Annotalo.

![](images/nightscoutionos/image_025.png)

![](images/nightscoutionos/image_026.png)

![](images/nightscoutionos/image_027.png)

Premi Invio, poi chiudi la finestra del terminale (o premi `Ctrl+D`).

### Primo accesso con il nuovo utente

Apri una nuova finestra del terminale e usa il comando mostrato dallo script:
```bash
ssh tuonome@217.xxx.xxx.xxx
```

Conferma con `yes` se richiesto e inserisci la password.

![](images/nightscoutionos/image_028.png)

Il server chiederà di confermare la password una seconda volta. Poi ti chiederà un'email (per il servizio SSL del certificato — è molto improbabile che ti venga mandata una mail).

![](images/nightscoutionos/image_029.png)

![](images/nightscoutionos/image_030.png)

Infine scegli la **password del sito Nightscout** (API_SECRET): almeno 12 caratteri (minuscole, maiuscole, numeri). Non usare spazi o caratteri speciali come `|`, `:`, `,`, `@`, `/`.

![](images/nightscoutionos/image_031.png)

Si aprirà il menu: vai in **Visualizza lo stato** e aspetta che tutto diventi verde (5–10 minuti).

![](images/nightscoutionos/image_032.png)

![](images/nightscoutionos/image_033.png)

---

## 4. Apri il sito Nightscout

Nel browser, vai all'indirizzo del tuo server (sostituisci `123a456` con il tuo nome):
```
https://123a456.online-server.cloud
```

![](images/nightscoutionos/image_034.png)

Se la pagina non si apre entro 10 minuti, dal menu SSH scegli **Riavviare Nightscout**, aspetta 10 minuti e riprova.

### Configura il profilo

1. Quando il sito si apre, crea un nuovo profilo.

![](images/nightscoutionos/image_035.png)

![](images/nightscoutionos/image_036.png)

![](images/nightscoutionos/image_037.png)

2. Imposta il fuso orario: **Europe/Rome**.

![](images/nightscoutionos/image_038.png)

3. Scorri in fondo → **Autenticare** → inserisci l'API_SECRET → **Autenticare** → **Salva**.

![](images/nightscoutionos/image_039.png)

![](images/nightscoutionos/image_040.png)

![](images/nightscoutionos/image_041.png)

### Se usi Dexcom Share

Dal menu SSH:
1. Vai in **Editare le variabili** → **Dexcom share**.
2. Inserisci nome utente e password (quelli del telefono master collegato al sensore).

![](images/nightscoutionos/image_042.png)

![](images/nightscoutionos/image_043.png)

![](images/nightscoutionos/image_044.png)

3. Premi Invio per salvare.

Per abilitare il plugin:
1. Vai in **Abilita plugins** → **bridge**.

![](images/nightscoutionos/image_045.png)

![](images/nightscoutionos/image_046.png)

2. Premi Invio per salvare.
3. Torna al menu principale per validare le modifiche.

![](images/nightscoutionos/image_047.png)

![](images/nightscoutionos/image_048.png)

> ℹ️ È necessario avere almeno un follower attivo su Dexcom Share per vedere i dati in Nightscout (puoi invitare te stesso).

Se non vedi la glicemia entro 10 minuti, riavvia Nightscout dal menu.

![](images/nightscoutionos/image_049.png)

---

## Appendice A — Crea un nome più facile da ricordare (opzionale)

Il nome predefinito del server Ionos è difficile da ricordare. Puoi creare un indirizzo più semplice con FreeDNS (gratuito).

1. Vai su `https://freedns.afraid.org/` → **Sign up Free**.
2. Compila nome utente, password (non perderla!) e email. Risolvi il captcha e clicca **Send activation email**.

![](images/nightscoutionos/image_050.png)

3. Controlla la mail e conferma il tuo account.

![](images/nightscoutionos/image_051.png)

4. Accedi e clicca **Add a subdomain**.

![](images/nightscoutionos/image_052.png)

5. In **Subdomain**: il nome che vuoi per il tuo sito.
6. In **Domain**: scegli un dominio dalla lista (es. `mooo.com`).
7. In **Destination**: l'indirizzo IP del tuo VPS Ionos.
8. Risolvi il captcha e clicca **Save**.

![](images/nightscoutionos/image_053.png)

Il tuo sito sarà ora raggiungibile con il nuovo nome.

> ⚠️ Fai login su FreeDNS almeno ogni 6 mesi per mantenere attivo il tuo dominio gratuito (solo il login, nient'altro).
