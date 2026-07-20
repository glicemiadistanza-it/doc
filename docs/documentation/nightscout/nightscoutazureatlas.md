# Nightscout con Azure e MongoDB Atlas

Questa guida spiega come creare un nuovo sito Nightscout su **Microsoft Azure** con database **MongoDB Atlas**, oppure come migrare da Heroku.

Ispirata al tutorial originale di Scott Hanselman: [`https://www.youtube.com/watch?v=EDADrteGBnY`](https://www.youtube.com/watch?v=EDADrteGBnY)

Usa un computer (non uno smartphone) durante tutta la procedura. Non cambiare browser o dispositivo. Se hai problemi con un browser, provane un altro.

Per maggiori informazioni su Nightscout: [`https://nightscout.github.io/`](https://nightscout.github.io/)

> ℹ️ **Nota**: Azure richiede una carta di credito, ma il piano gratuito non comporta addebiti per Nightscout. MongoDB Atlas è gratuito per database di piccole dimensioni.

---

## 1. Crea il database Atlas

> ℹ️ **Nota**: Se stai migrando da Heroku e hai già un database Atlas, vai direttamente alla **sezione 5**.

1. Vai su [`https://www.mongodb.com/cloud/atlas`](https://www.mongodb.com/cloud/atlas) e clicca **Get started now**.

![](images/nightscoutazureatlas/image_004.png)

2. Inserisci email e una nuova password (da usare solo per Atlas) → **Continue**.
3. Compila nome, cognome, seleziona **Other** e accetta i termini → **Create Account**.

![](images/nightscoutazureatlas/image_005.png)

4. Controlla la mail e clicca **Verify Email**.

![](images/nightscoutazureatlas/image_006.png)

Si aprirà una pagina nel browser che conferma la verifica:

![](images/nightscoutazureatlas/image_007.png)

Premi **Continue** per procedere:

![](images/nightscoutazureatlas/image_008.png)

5. Seleziona le opzioni richieste e clicca **Finish**.

![](images/nightscoutazureatlas/image_009.png)

6. Seleziona **Create a cluster** in **Shared Clusters (FREE)**.

![](images/nightscoutazureatlas/image_010.png)

> ⚠️ **Attenzione**: Se vedi una richiesta di dati di fatturazione, hai selezionato il tipo sbagliato di cluster. Torna indietro e scegli il cluster gratuito.

![](images/nightscoutazureatlas/image_011.png)

7. Lascia tutti i valori predefiniti e clicca **Create Cluster** (ci vorrà qualche minuto).

![](images/nightscoutazureatlas/image_012.png)

8. Aggiungi un utente database: scegli un nome utente (es. `nightscout`) e una password (solo lettere e numeri, no spazi o caratteri speciali). **Annota nome utente e password.** Clicca **Create User**.

![](images/nightscoutazureatlas/image_013.png)

9. Seleziona **My Local Environment** e nel campo **IP Address** inserisci `0.0.0.0/0` (attenzione: sono zeri, non la lettera O).

![](images/nightscoutazureatlas/image_014.png)

10. Clicca **Add Entry** → **Finish and Close** → **Go to Database**.

![](images/nightscoutazureatlas/image_015.png)

Vedrai il messaggio di conferma delle regole di accesso appena create:

![](images/nightscoutazureatlas/image_016.png)

11. Aspetta la creazione del cluster (può richiedere più di 3 minuti): finché è in corso, il pulsante di connessione resta disattivato.

![](images/nightscoutazureatlas/image_017.png)

Quando il cluster è pronto (pallino verde), clicca **Connect**:

![](images/nightscoutazureatlas/image_018.png)

Poi scegli **Connect your application**:

![](images/nightscoutazureatlas/image_019.png)

12. Lascia il driver **Node.js** selezionato e clicca **Copy** per copiare la stringa di collegamento.

![](images/nightscoutazureatlas/image_020.png)

Incollala in un editor di testo (Blocco Note): la userai tra poco per costruire la tua `MONGODB_URI`.

![](images/nightscoutazureatlas/image_021.png)

### Crea la stringa MONGODB_URI

La stringa ha questo formato:
```
mongodb+srv://nightscout:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

Sostituisci `<password>` con la password che hai scelto. Il risultato finale (senza `<` e `>`):
```
mongodb+srv://nightscout:mia_password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

Conserva questa stringa: si chiama **MONGODB_URI**.

---

## 2. Crea l'App Web Azure

1. Vai su [`https://azure.microsoft.com/it-it/free/search/`](https://azure.microsoft.com/it-it/free/search/) e clicca **Inizia gratuitamente**.

![](images/nightscoutazureatlas/image_022.png)

2. Accedi con un account Microsoft (se non ne hai uno, creane uno).

![](images/nightscoutazureatlas/image_023.png)

Compila il profilo utente con paese, nome, cognome ed email:

![](images/nightscoutazureatlas/image_024.png)

Verifica il numero di telefono via SMS, inserendo il codice ricevuto:

![](images/nightscoutazureatlas/image_025.png)

3. Accetta il contratto e premi **Avanti**:

![](images/nightscoutazureatlas/image_026.png)

Inserisci una carta di credito per la verifica dell'identità (non comporta addebiti senza il tuo consenso):

![](images/nightscoutazureatlas/image_027.png)

Conferma il paese/area geografica e premi **Iscriviti**:

![](images/nightscoutazureatlas/image_028.png)

> ℹ️ **Nota**: Se hai già un account gratuito Azure e non puoi crearne un secondo, puoi iscriverti a un piano **a consumo** (pay-as-you-go) — Nightscout usa solo risorse gratuite, quindi il costo è zero. In tal caso vedrai il messaggio **Non si è idonei per un account Azure gratuito**: scegli l'iscrizione con pagamento in base al consumo.

![](images/nightscoutazureatlas/image_029.png)

Accetta di nuovo il contratto per il piano a consumo:

![](images/nightscoutazureatlas/image_030.png)

E scegli **Nessun supporto tecnico** prima di premere **Iscriviti**:

![](images/nightscoutazureatlas/image_031.png)

4. Clicca sul menu Azure → **Crea una risorsa**.

![](images/nightscoutazureatlas/image_032.png)

Poi cerca **App Web** e clicca **Crea**:

![](images/nightscoutazureatlas/image_033.png)

5. Compila le informazioni:
   - **Sottoscrizione**: seleziona il tuo account gratuito (o di base).
   - **Gruppo di risorse**: clicca **Crea Nuovo**, chiamalo `Nightscout`, clicca **OK**.

![](images/nightscoutazureatlas/image_034.png)

   - **Nome**: il nome del tuo sito Nightscout (solo lettere minuscole, numeri e `-`). Verifica che la spunta verde appaia a destra.

![](images/nightscoutazureatlas/image_035.png)

   - **Pubblica**: seleziona **Contenitore Docker** con **Linux**.
   - **Area geografica**: scegli un'area vicina a dove abiti.

![](images/nightscoutazureatlas/image_036.png)

6. **IMPORTANTE — Seleziona il piano gratuito:**
   Clicca **Modifica dimensioni** (a fianco del piano proposto):

![](images/nightscoutazureatlas/image_037.png)

   Scegli **Sviluppo/test** → **F1: gratuito** → **Applica**.

![](images/nightscoutazureatlas/image_038.png)

   Verifica che il riquadro mostri **Gratuito F1**, poi premi **Avanti: Docker >**.

![](images/nightscoutazureatlas/image_039.png)

7. In **Origine immagine**, seleziona **Docker Hub**. In **Immagine e tag** scrivi:
   ```
   nightscout/cgm-remote-monitor:latest
   ```

![](images/nightscoutazureatlas/image_040.png)

8. Clicca **Rivedi e crea** → verifica le informazioni → **Crea**.

![](images/nightscoutazureatlas/image_041.png)

9. Aspetta il completamento della distribuzione...

![](images/nightscoutazureatlas/image_042.png)

...e quando è completata, clicca **Vai alla risorsa**.

![](images/nightscoutazureatlas/image_043.png)

### Aggiungi le variabili di configurazione

1. Nel menu di sinistra, clicca **Configurazione**.

![](images/nightscoutazureatlas/image_044.png)

Poi clicca **+ Nuova impostazione applicazione**:

![](images/nightscoutazureatlas/image_045.png)

Aggiungi le seguenti variabili una alla volta (nome + valore → **OK**). Ecco ad esempio `API_SECRET`:

![](images/nightscoutazureatlas/image_046.png)

| Nome | Valore |
|---|---|
| `API_SECRET` | La tua password Nightscout (minimo 12 caratteri, no spazi, no `@`, no `!`) |
| `DISPLAY_UNITS` | `mg/dl` |
| `MONGODB_URI` | La stringa generata al passo 1 |
| `ENABLE` | `dbsize pump iob cob basal careportal sage cage bage` |

Se usi **Dexcom Share** come sorgente, aggiungi anche `BRIDGE_PASSWORD`, `BRIDGE_SERVER` e `BRIDGE_USER_NAME`:

![](images/nightscoutazureatlas/image_047.png)

E aggiungi `bridge` alla variabile `ENABLE`:
```
dbsize pump iob cob basal careportal sage cage bage bridge
```

Ecco un esempio con `DISPLAY_UNITS` e `ENABLE` compilati:

![](images/nightscoutazureatlas/image_048.png)

> ℹ️ **Nota**: Se stai migrando da Heroku, copia tutte le variabili dal tuo sito Heroku (vedi sezione 5) e incollale qui allo stesso modo.

Una volta aggiunte tutte le variabili, l'elenco apparirà così:

![](images/nightscoutazureatlas/image_049.png)

2. Clicca **Salva** in alto:

![](images/nightscoutazureatlas/image_050.png)

Conferma il riavvio dell'app cliccando **Continua**:

![](images/nightscoutazureatlas/image_051.png)

---

## 3. Configura il sito Nightscout

1. Dal menu della tua app Azure, vai in **Panoramica** → copia l'indirizzo del sito (es. [`https://nomedeltuosito.azurewebsites.net`](https://nomedeltuosito.azurewebsites.net)).

![](images/nightscoutazureatlas/image_052.png)

2. Aprilo nel browser. Se compare un errore "Timeout", aspetta 5 minuti e riprova. Il sito mostrerà l'orario e il menu laterale:

![](images/nightscoutazureatlas/image_053.png)

3. Clicca sul menu → **Profile Editor**.

4. Imposta il fuso orario: **Europe/Rome**.

![](images/nightscoutazureatlas/image_054.png)

5. Scorri in fondo, clicca **Authenticate**, inserisci l'API secret...

![](images/nightscoutazureatlas/image_055.png)

...poi **Update**: lo stato diventerà **Admin authorized**. Premi **Save**.

![](images/nightscoutazureatlas/image_056.png)

Se il browser chiede conferma sul nuovo formato del profilo, premi **OK**:

![](images/nightscoutazureatlas/image_057.png)

Il salvataggio è confermato dal messaggio **Status: success**.

![](images/nightscoutazureatlas/image_058.png)

Se usi Dexcom Share, i dati appariranno entro qualche minuto. Per xDrip, Spike, xDrip4iOS ecc.: inserisci l'indirizzo del sito e l'API secret nell'app. Una volta connesso, il tuo sito Nightscout mostrerà la glicemia in tempo reale:

![](images/nightscoutazureatlas/image_059.png)

---

## 4. Aggiorna i dispositivi (solo migrazione da Heroku)

Devi aggiornare l'indirizzo Nightscout su tutti i tuoi dispositivi:
- **Prima (Heroku):** [`https://nomedeltuosito.herokuapp.com`](https://nomedeltuosito.herokuapp.com)
- **Ora (Azure):** [`https://nomedeltuosito.azurewebsites.net`](https://nomedeltuosito.azurewebsites.net)

Per **xDrip master** (Cloud Upload), l'URL diventa:
```
https://nomedeltuosito.azurewebsites.net/api/v1
```

> ℹ️ **Nota**: Il sito Azure mostrerà i dati anche con il vecchio indirizzo Heroku (il database è condiviso), ma il sito Heroku si è fermato: devi aggiornare tutti i dispositivi per continuare a ricevere dati.

Se vuoi mettere offline il vecchio sito Heroku per essere certo che tutti i dispositivi siano stati aggiornati, puoi attivare la **Maintenance Mode** dalle impostazioni dell'app Heroku:

![](images/nightscoutazureatlas/image_060.png)

---

## 5. Database Atlas esistente (migrazione da Heroku)

**Se hai ancora accesso a Heroku:**
1. Vai su [`https://id.heroku.com/login`](https://id.heroku.com/login) e accedi con le tue credenziali.

![](images/nightscoutazureatlas/image_061.png)

Poi apri la tua app dall'elenco:

![](images/nightscoutazureatlas/image_062.png)

2. Vai in **Settings** → **Reveal Config Vars**.

![](images/nightscoutazureatlas/image_063.png)

3. Copia il valore di `MONGODB_URI`...

![](images/nightscoutazureatlas/image_064.png)

...oppure di `MONGO_CONNECTION` se la prima non c'è (**non** `MONGODB_COLLECTION`).

4. Usa questa stringa come `MONGODB_URI` nel passo 2 di Azure.

**Se non hai più accesso a Heroku:**
1. Vai su [`https://account.mongodb.com/account/login`](https://account.mongodb.com/account/login) e accedi con email e password del tuo account Atlas.

![](images/nightscoutazureatlas/image_065.png)

2. Se ricordi la password del tuo utente database, segui il passaggio **Connect** nella tua homepage Atlas.
3. Se non ricordi la password:
   - Vai in **Database Access**...

![](images/nightscoutazureatlas/image_066.png)

   ...e premi **EDIT** sull'utente esistente:

![](images/nightscoutazureatlas/image_067.png)

   Cambia il ruolo in **Only read any database** → **Update User** (questo disabilita temporaneamente il vecchio accesso).

![](images/nightscoutazureatlas/image_068.png)

   - Clicca **+ ADD NEW DATABASE USER**:

![](images/nightscoutazureatlas/image_069.png)

   Scegli un nome utente, genera una password con **Autogenerate Secure Password**, premi **SHOW** per visualizzarla e copiala:

![](images/nightscoutazureatlas/image_070.png)

   Apri il menu **Built-in Role** e seleziona **Atlas admin**:

![](images/nightscoutazureatlas/image_071.png)

   Se il ruolo non è ancora impostato, usa **Add Built In Role**:

![](images/nightscoutazureatlas/image_072.png)

   Infine premi **Add User**:

![](images/nightscoutazureatlas/image_073.png)

   Il nuovo utente comparirà nell'elenco **Database Access** insieme a quello vecchio (ora in sola lettura):

![](images/nightscoutazureatlas/image_074.png)

   - Torna in **Database** → **Connect** sul tuo cluster:

![](images/nightscoutazureatlas/image_075.png)

   Scegli di nuovo **Connect your application**:

![](images/nightscoutazureatlas/image_076.png)

   Copia la stringa e sostituisci `<username>` e `<password>` con i nuovi valori:

![](images/nightscoutazureatlas/image_077.png)

4. Usa questa stringa come `MONGODB_URI` nel passo 2 di Azure.
