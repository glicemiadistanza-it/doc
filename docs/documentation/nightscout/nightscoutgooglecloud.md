# Creare un sito Nightscout gratuito su Google Cloud

Questa guida spiega come creare un sito Nightscout gratuito usando **Google Cloud** e uno script di installazione automatica creato dalla squadra di xDrip+ (Jon/@jamorham, Tzachi Dar e Navid Fo).

Documentazione ufficiale (in italiano): `https://navid200.github.io/xDrip/docs/Nightscout/GoogleCloud.html`

> ℹ️ **Gratuito\***: richiede una carta di credito per creare l'account Google Cloud. Il servizio rimane gratuito entro i limiti previsti; possono capitare addebiti minimi (1–2 centesimi) causati da traffico automatico sul sito.

---

## 1. Crea un account Google Cloud

Usa un computer (non uno smartphone). Non cambiare browser o utente durante la procedura.

- Se hai un telefono Android hai già un account Google: puoi accedere direttamente.
- Se usi iPhone, crea un account gratuito su: `https://accounts.google.com/signup/v2/createaccount?biz=false&cc=IT`

1. Vai su `https://cloud.google.com/free?hl=it` e clicca **Inizia Gratuitamente**.

![](images/nightscoutgooglecloud/image_001.png)

2. Compila le informazioni richieste (Italia, Altro), accetta i termini di servizio (non le email di marketing) e clicca **CONTINUA**.

![](images/nightscoutgooglecloud/image_002.png)

![](images/nightscoutgooglecloud/image_003.png)

3. Seleziona un conto privato. Il codice fiscale non è obbligatorio.

![](images/nightscoutgooglecloud/image_004.png)

4. Inserisci il tuo indirizzo.

![](images/nightscoutgooglecloud/image_005.png)

5. Aggiungi una carta di credito: Google potrebbe addebitare €0 o fare una prenotazione di €1 per verificare la carta (non è un addebito reale).

![](images/nightscoutgooglecloud/image_006.png)

![](images/nightscoutgooglecloud/image_007.png)

![](images/nightscoutgooglecloud/image_008.png)

6. Aspetta 5 minuti che Google Cloud prepari il tuo account. Se la pagina non si aggiorna, fai refresh.

![](images/nightscoutgooglecloud/image_009.png)

![](images/nightscoutgooglecloud/image_010.png)

![](images/nightscoutgooglecloud/image_011.png)

![](images/nightscoutgooglecloud/image_012.png)

![](images/nightscoutgooglecloud/image_013.png)

![](images/nightscoutgooglecloud/image_014.png)

---

## 2. Crea un server virtuale (VPS)

1. Vai su `https://console.cloud.google.com/welcome/new` e clicca **CREA O SELEZIONA UN PROGETTO**.

![](images/nightscoutgooglecloud/image_015.png)

![](images/nightscoutgooglecloud/image_016.png)

![](images/nightscoutgooglecloud/image_017.png)

![](images/nightscoutgooglecloud/image_018.png)

![](images/nightscoutgooglecloud/image_019.png)

![](images/nightscoutgooglecloud/image_020.png)

2. Clicca **NUOVO PROGETTO** in alto a destra. Dai un nome al progetto (non importante) → **CREA**.

![](images/nightscoutgooglecloud/image_021.png)

![](images/nightscoutgooglecloud/image_022.png)

3. Seleziona il progetto appena creato.

![](images/nightscoutgooglecloud/image_023.png)

![](images/nightscoutgooglecloud/image_024.png)

![](images/nightscoutgooglecloud/image_025.png)

4. Scorri verso il basso e seleziona **Crea una VM**.

![](images/nightscoutgooglecloud/image_026.png)

![](images/nightscoutgooglecloud/image_027.png)

5. Abilita il **Compute Engine API** se richiesto. Se Google chiede di verificare la carta, procedi.

![](images/nightscoutgooglecloud/image_028.png)

![](images/nightscoutgooglecloud/image_029.png)

### Configurazione della VM

> ⚠️ Segui esattamente le istruzioni qui sotto. Errori nella configurazione potrebbero portare a costi imprevisti.

- **Nome**: non importante
- **Regione**: scegli SOLO una di queste tre (le uniche gratuite):
  - `us-west1`
  - `us-central1`
  - `us-east1`
- **Zona**: non modificare
- **Configurazione macchina**: `e2-micro` (è l'unica gratuita)

![](images/nightscoutgooglecloud/image_030.png)

![](images/nightscoutgooglecloud/image_031.png)

![](images/nightscoutgooglecloud/image_032.png)

![](images/nightscoutgooglecloud/image_033.png)

![](images/nightscoutgooglecloud/image_034.png)

![](images/nightscoutgooglecloud/image_035.png)

- **Disco di avvio**: clicca **CAMBIA** e seleziona esattamente:
  - Sistema operativo: **Ubuntu**
  - Versione: **20.04 LTS Minimal x86/64** (`amd64 focal minimal image`)

![](images/nightscoutgooglecloud/image_036.png)

![](images/nightscoutgooglecloud/image_037.png)

- **Firewall**: abilita sia **HTTP** che **HTTPS**

![](images/nightscoutgooglecloud/image_038.png)

Verifica la stima mensile: non dovrebbe superare i 10$ (se supera, ricontrolla le impostazioni). Clicca **CREA** e aspetta qualche minuto.

![](images/nightscoutgooglecloud/image_039.png)

![](images/nightscoutgooglecloud/image_040.png)

![](images/nightscoutgooglecloud/image_041.png)

Ogni volta che vuoi ritrovare questa pagina: `https://console.cloud.google.com/compute/instances`

---

## 3. Crea un nome per il tuo server

Google assegna solo un indirizzo IP numerico al tuo server. Per avere un indirizzo più facile da ricordare, usa il servizio gratuito FreeDNS.

1. Annota l'**indirizzo IP esterno** del tuo server dalla pagina delle istanze (es. `34.83.196.6`).

![](images/nightscoutgooglecloud/image_042.png)

2. Vai su `https://freedns.afraid.org/` → **Sign up Free**.
3. Compila i dati: nome utente, password (non perderla!) e un indirizzo email tuo (non usa e getta). Risolvi il captcha e clicca **Send activation email**.

![](images/nightscoutgooglecloud/image_043.png)

4. Controlla la mail e clicca il link di conferma (se non arriva, controlla la cartella spam).

![](images/nightscoutgooglecloud/image_044.png)

5. Accedi e clicca **Add a subdomain**.

![](images/nightscoutgooglecloud/image_045.png)

6. In **Subdomain**, scrivi il nome che vuoi dare al tuo sito Nightscout (scegli qualcosa che non sia già preso).
7. In **Domain**, scegli un dominio dalla lista (es. `mooo.com`).
8. In **Destination**, inserisci l'indirizzo IP esterno del tuo server Google Cloud.
9. Risolvi il captcha e clicca **Save**.

![](images/nightscoutgooglecloud/image_046.png)

Il tuo sito Nightscout avrà ora un indirizzo come `mionightscout.mooo.com`.

---

## 4. Installa Nightscout

1. Torna su `https://console.cloud.google.com/compute/instances`.
2. Clicca **SSH** sulla riga del tuo server per aprire un terminale.

![](images/nightscoutgooglecloud/image_047.png)

3. Autorizza il collegamento sicuro e aspetta che si apra la finestra del terminale.

![](images/nightscoutgooglecloud/image_048.png)

![](images/nightscoutgooglecloud/image_049.png)

4. Copia e incolla il comando seguente nel terminale (uno spazio dopo `curl`, uno prima e dopo il simbolo `|`):

   ```bash
   curl https://raw.githubusercontent.com/jamorham/nightscout-vps/vps-1/bootstrap.sh | bash
   ```

![](images/nightscoutgooglecloud/image_050.png)

5. Premi Invio e aspetta. Lo script scarica e prepara l'ambiente.

![](images/nightscoutgooglecloud/image_051.png)

6. Quando lo script si ferma e mostra un menu, premi Invio per proseguire.
7. Controlla che nella parte superiore non ci siano errori in rosso. Se ce ne sono, cancella e ricrea il server.

![](images/nightscoutgooglecloud/image_052.png)

8. Con le frecce, vai su **3 – Google Cloud setup** → **1 – Install Nightscout phase 1** → premi Invio per confermare.

![](images/nightscoutgooglecloud/image_053.png)

![](images/nightscoutgooglecloud/image_054.png)

![](images/nightscoutgooglecloud/image_055.png)

> ⚠️ La fase 1 dura circa 15 minuti. Non chiudere il terminale e non lasciarlo aperto senza proseguire (scadrà per timeout).

9. Quando la fase 1 termina, torna al menu → **Google Cloud setup** → **2 – Install Nightscout phase 2**.

![](images/nightscoutgooglecloud/image_056.png)

10. Inserisci la tua **API_SECRET**: è la password della tua pagina Nightscout. Minimo 12 caratteri (lettere maiuscole, minuscole, numeri — no spazi o caratteri speciali).

![](images/nightscoutgooglecloud/image_057.png)

11. Inserisci il tuo **login e password FreeDNS** (questo mantiene aggiornato il nome DNS). Usa le frecce per spostarti tra i campi.

![](images/nightscoutgooglecloud/image_058.png)

![](images/nightscoutgooglecloud/image_059.png)

12. Se ti chiede una mail, inseriscila pure (probabilmente non riceverai nulla).

![](images/nightscoutgooglecloud/image_060.png)

13. Premi Invio per riavviare il server. Aspetta 30 secondi, poi riaccedi tramite SSH.

![](images/nightscoutgooglecloud/image_061.png)

![](images/nightscoutgooglecloud/image_062.png)

14. Dal menu principale, vai in **1 – Status** e controlla che non ci siano elementi in rosso. Se ce ne sono, torna alla fase 2 e riprova.

![](images/nightscoutgooglecloud/image_063.png)

![](images/nightscoutgooglecloud/image_064.png)

---

## 5. Configura Nightscout

1. Apri un browser e vai all'indirizzo del tuo sito: `https://tuonome.mooo.com`

![](images/nightscoutgooglecloud/image_065.png)

2. Clicca sul menu → **Profile Editor**.

![](images/nightscoutgooglecloud/image_066.png)

![](images/nightscoutgooglecloud/image_067.png)

3. Imposta il fuso orario: **Europe/Rome**

![](images/nightscoutgooglecloud/image_068.png)

4. Scorri in fondo, clicca **Authenticate**, inserisci l'API_SECRET, poi **Update** e **Save**.
5. Verifica lo stato in alto a destra.

![](images/nightscoutgooglecloud/image_069.png)

![](images/nightscoutgooglecloud/image_070.png)

![](images/nightscoutgooglecloud/image_071.png)

Se usi Dexcom Share, i dati appariranno entro qualche minuto. Per xDrip+, Spike, xDrip4iOS ecc.: inserisci l'indirizzo del sito e l'API secret nell'app.

![](images/nightscoutgooglecloud/image_072.png)

**Connettere l'uploader:**

- **xDrip+ master:** vai in **Impostazioni → Cloud Upload → API Upload (REST)** e inserisci:
  ```
  https://tuaAPISecret@tuonome.mooo.com/api/v1
  ```

![](images/nightscoutgooglecloud/image_073.png)

![](images/nightscoutgooglecloud/image_074.png)

![](images/nightscoutgooglecloud/image_075.png)

![](images/nightscoutgooglecloud/image_076.png)

- **xDrip4iOS / Bubble / Juggluco:** nell'URL inserisci solo l'indirizzo del sito senza il percorso `/api/v1`.

![](images/nightscoutgooglecloud/image_077.png)

![](images/nightscoutgooglecloud/image_078.png)

![](images/nightscoutgooglecloud/image_079.png)

- **Dexcom Share come sorgente:** apri il terminale SSH → menu **4 – Nightscout setup** → **1 – Edit variables** → aggiungi le variabili:
  ```
  export BRIDGE_USER_NAME='tuo_utente_dexcom'
  export BRIDGE_PASSWORD='tua_password_dexcom'
  export BRIDGE_SERVER='EU'
  ```
  e aggiungi `bridge` nella variabile `ENABLE`. Salva con `Ctrl+O`, poi Invio, poi `Ctrl+X`. Riavvia il server.

![](images/nightscoutgooglecloud/image_080.png)

![](images/nightscoutgooglecloud/image_081.png)

---

## 6. Modificare le variabili (in seguito)

Per modificare o aggiungere variabili di Nightscout:
1. Apri il terminale SSH → menu **4 – Nightscout setup** → **1 – Edit variables using a text editor**.

![](images/nightscoutgooglecloud/image_082.png)

2. L'editor `nano` si apre. Usa le frecce per navigare (il mouse non funziona).

![](images/nightscoutgooglecloud/image_083.png)

![](images/nightscoutgooglecloud/image_084.png)

3. Il formato delle variabili è:
   ```
   export NOMEVARIABILE='valore'
   ```
4. Variabili utili:
   - `AR2_CONE_FACTOR='0'` — elimina le previsioni automatiche
   - `AUTH_DEFAULT_ROLES='readable'` — permette la visualizzazione senza login
   - `CUSTOM_TITLE='Superman'` — personalizza il titolo della pagina
   - `SCALE_Y='linear'` — scala verticale lineare
   - `TIME_FORMAT='24'` — orologio in formato 24 ore
   - `LANGUAGE='it'` — interfaccia in italiano
5. Salva con `Ctrl+O` → Invio → `Ctrl+X`. Riavvia il server per applicare.

![](images/nightscoutgooglecloud/image_085.png)

---

## Appendice A — Eliminare il VPS

Se hai cambiato idea o hai sbagliato la configurazione:
- Vai in `https://console.cloud.google.com/compute/instances`.
- Clicca i tre puntini a destra del tuo server → **Elimina** → conferma.

![](images/nightscoutgooglecloud/image_086.png)

**Rimuovere la carta di credito:**
- Vai su `https://console.cloud.google.com/billing`.

![](images/nightscoutgooglecloud/image_087.png)

- Seleziona il tuo account di fatturazione → **Panoramica dei pagamenti**.

![](images/nightscoutgooglecloud/image_088.png)

- Scorri fino alla tua carta → **Gestisci metodi di pagamento** → **Rimuovi**.

![](images/nightscoutgooglecloud/image_089.png)

![](images/nightscoutgooglecloud/image_090.png)
