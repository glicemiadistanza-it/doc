# Aggiornare Nightscout su Heroku

![](images/heroku-aggiornare-nightscout/image_002.png)

Questa guida spiega come aggiornare un sito Nightscout ospitato su Heroku. Usa questi passaggi **solo per Heroku** (non per Azure o Google Cloud).

Adattato dalla [guida ufficiale Nightscout](https://nightscout.github.io/update/update/).

Per sapere qual è l'ultima versione disponibile: [`https://github.com/nightscout/cgm-remote-monitor/releases`](https://github.com/nightscout/cgm-remote-monitor/releases)

**Prima di iniziare:**
- Usa un computer (non uno smartphone).
- Non cambiare dispositivo, browser o utente durante l'aggiornamento.
- Se hai problemi con Chrome, prova con Edge.

Per vedere la versione attuale del tuo Nightscout, clicca sul menu in alto a destra della tua pagina Nightscout e scorri verso il basso: troverai un riquadro **About** con la versione installata (in questo esempio, `0.12.3`, molto vecchia):

![](images/heroku-aggiornare-nightscout/image_003.png)

---

## 1. Aggiorna GitHub

1. Vai su [`https://github.com/`](https://github.com/) e clicca **Sign in** in alto a destra:

![](images/heroku-aggiornare-nightscout/image_004.png)

Accedi con la tua email e password GitHub:

![](images/heroku-aggiornare-nightscout/image_005.png)

2. Seleziona il tuo progetto **cgm-remote-monitor** dall'elenco dei repository:

![](images/heroku-aggiornare-nightscout/image_006.png)

3. Controlla se c'è la scritta **"This branch is X commits behind nightscout:master"** (nell'esempio, 226 commit di ritardo):

![](images/heroku-aggiornare-nightscout/image_007.png)

4. Se sì, clicca **Fetch upstream** → **Fetch and merge**:

![](images/heroku-aggiornare-nightscout/image_008.png)

5. Dopo pochi istanti comparirà: **"This branch is up to date with nightscout:master"**:

![](images/heroku-aggiornare-nightscout/image_009.png)

**Se hai difficoltà (metodo alternativo — redeploy):**
1. In GitHub, vai in **Settings** → scorri giù fino a **Danger Zone** → clicca **Delete this repository**:

![](images/heroku-aggiornare-nightscout/image_010.png)

Ti verrà chiesto di confermare l'operazione (che non si può annullare):

![](images/heroku-aggiornare-nightscout/image_011.png)

2. Copia il nome del progetto per confermare → clicca **I understand the consequences, delete this repository**:

![](images/heroku-aggiornare-nightscout/image_012.png)

3. Vai su [`https://github.com/nightscout/cgm-remote-monitor`](https://github.com/nightscout/cgm-remote-monitor) e clicca **Fork**:

![](images/heroku-aggiornare-nightscout/image_013.png)

4. Aspetta il completamento dell'operazione di fork...

![](images/heroku-aggiornare-nightscout/image_014.png)

...e lascia GitHub aperto sulla pagina del tuo nuovo repository forkato:

![](images/heroku-aggiornare-nightscout/image_015.png)

---

## 2. Esegui il deploy su Heroku

1. Apri un nuovo tab e vai su [`https://id.heroku.com/login`](https://id.heroku.com/login). Inserisci email e password → **Log In**:

![](images/heroku-aggiornare-nightscout/image_016.png)

2. Nella lista delle app, apri il menu **Personal**:

![](images/heroku-aggiornare-nightscout/image_017.png)

Seleziona la tua app Nightscout dall'elenco:

![](images/heroku-aggiornare-nightscout/image_018.png)

3. Vai in **Deploy**:

![](images/heroku-aggiornare-nightscout/image_019.png)

4. Scorri fino a **Deployment method** e clicca su **GitHub**:

![](images/heroku-aggiornare-nightscout/image_020.png)

5. Se non sei ancora collegato a GitHub, clicca **Connect to GitHub**:

![](images/heroku-aggiornare-nightscout/image_021.png)

Autorizza l'accesso cliccando **Authorize heroku**:

![](images/heroku-aggiornare-nightscout/image_022.png)

Una volta connesso, vedrai la conferma con il nome del repository collegato:

![](images/heroku-aggiornare-nightscout/image_023.png)

6. Verifica che la tua app **cgm-remote-monitor** sia collegata a GitHub. Se non lo è, cerca `cgm-remote-monitor` nel campo di ricerca:

![](images/heroku-aggiornare-nightscout/image_024.png)

E clicca **Connect** accanto al repository trovato:

![](images/heroku-aggiornare-nightscout/image_025.png)

Vedrai la conferma "App connected to GitHub":

![](images/heroku-aggiornare-nightscout/image_026.png)

7. Scorri giù fino a **Manual deploy**, seleziona il ramo `master` e clicca **Deploy Branch**:

![](images/heroku-aggiornare-nightscout/image_027.png)

> ⚠️ **Attenzione**: Non uscire dalla pagina e non cliccare niente fino al completamento del deploy. Potrebbe richiedere più di 10 minuti.

Durante il deploy, la pagina mostra in tempo reale il log di compilazione (build):

![](images/heroku-aggiornare-nightscout/image_028.png)

8. Al termine, tutte le fasi risulteranno completate con successo: clicca **View**, il tuo sito si aprirà all'ultima versione:

![](images/heroku-aggiornare-nightscout/image_029.png)

Nel riquadro **About** della tua pagina Nightscout vedrai ora il numero di versione aggiornato.

Se qualcosa va storto, puoi ripetere questi passaggi tutte le volte che vuoi.
