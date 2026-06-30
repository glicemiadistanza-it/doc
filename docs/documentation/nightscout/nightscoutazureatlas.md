# Nightscout con Azure e MongoDB Atlas

![](images/nightscoutazureatlas/image_001.png)

![](images/nightscoutazureatlas/image_002.png)

![](images/nightscoutazureatlas/image_003.png)

Questa guida spiega come creare un nuovo sito Nightscout su **Microsoft Azure** con database **MongoDB Atlas**, oppure come migrare da Heroku.

Ispirata al tutorial originale di Scott Hanselman: `https://www.youtube.com/watch?v=EDADrteGBnY`

Usa un computer (non uno smartphone) durante tutta la procedura. Non cambiare browser o dispositivo. Se hai problemi con un browser, provane un altro.

Per maggiori informazioni su Nightscout: `https://nightscout.github.io/`

> ℹ️ Azure richiede una carta di credito, ma il piano gratuito non comporta addebiti per Nightscout. MongoDB Atlas è gratuito per database di piccole dimensioni.

---

## 1. Crea il database Atlas

> ℹ️ Se stai migrando da Heroku e hai già un database Atlas, vai direttamente all'**Appendice A**.

1. Vai su `https://www.mongodb.com/cloud/atlas` e clicca **Get started now**.

![](images/nightscoutazureatlas/image_004.png)

2. Inserisci email e una nuova password (da usare solo per Atlas) → **Continue**.
3. Compila nome, cognome, seleziona **Other** e accetta i termini → **Create Account**.

![](images/nightscoutazureatlas/image_005.png)

4. Controlla la mail e clicca **Verify Email**. Si aprirà una pagina nel browser → **Continue**.

![](images/nightscoutazureatlas/image_006.png)

![](images/nightscoutazureatlas/image_007.png)

![](images/nightscoutazureatlas/image_008.png)

5. Seleziona le opzioni richieste e clicca **Finish**.

![](images/nightscoutazureatlas/image_009.png)

6. Seleziona **Create a cluster** in **Shared Clusters (FREE)**.

![](images/nightscoutazureatlas/image_010.png)

> ⚠️ Se vedi una richiesta di dati di fatturazione, hai selezionato il tipo sbagliato di cluster. Torna indietro e scegli il cluster gratuito.

![](images/nightscoutazureatlas/image_011.png)

7. Lascia tutti i valori predefiniti e clicca **Create Cluster** (ci vorrà qualche minuto).

![](images/nightscoutazureatlas/image_012.png)

8. Aggiungi un utente database: scegli un nome utente (es. `nightscout`) e una password (solo lettere e numeri, no spazi o caratteri speciali). **Annota nome utente e password.** Clicca **Create User**.

![](images/nightscoutazureatlas/image_013.png)

9. Seleziona **My Local Environment** e nel campo **IP Address** inserisci `0.0.0.0/0` (attenzione: sono zeri, non la lettera O).

![](images/nightscoutazureatlas/image_014.png)

10. Clicca **Add Entry** → **Finish and Close** → **Go to Database**.

![](images/nightscoutazureatlas/image_015.png)

![](images/nightscoutazureatlas/image_016.png)

11. Aspetta la creazione del cluster (può richiedere più di 3 minuti), poi clicca **Connect** → **Connect your application**.

![](images/nightscoutazureatlas/image_017.png)

![](images/nightscoutazureatlas/image_018.png)

![](images/nightscoutazureatlas/image_019.png)

12. Clicca **Copy** per copiare la stringa di collegamento e incollala in un editor di testo (Blocco Note).

![](images/nightscoutazureatlas/image_020.png)

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

1. Vai su `https://azure.microsoft.com/it-it/free/search/` e clicca **Inizia gratuitamente**.

![](images/nightscoutazureatlas/image_022.png)

2. Accedi con un account Microsoft (se non ne hai uno, creane uno). Verifica il numero di telefono via SMS.

![](images/nightscoutazureatlas/image_023.png)

![](images/nightscoutazureatlas/image_024.png)

![](images/nightscoutazureatlas/image_025.png)

3. Inserisci una carta di credito per la verifica dell'identità (non comporta addebiti senza il tuo consenso).

![](images/nightscoutazureatlas/image_026.png)

![](images/nightscoutazureatlas/image_027.png)

![](images/nightscoutazureatlas/image_028.png)

> ℹ️ Se hai già un account gratuito Azure e non puoi crearne un secondo, puoi iscriverti a un piano **a consumo** (pay-as-you-go) — Nightscout usa solo risorse gratuite, quindi il costo è zero.

![](images/nightscoutazureatlas/image_029.png)

![](images/nightscoutazureatlas/image_030.png)

![](images/nightscoutazureatlas/image_031.png)

4. Clicca sul menu Azure → **Crea una risorsa** → **Crea App Web**.

![](images/nightscoutazureatlas/image_032.png)

![](images/nightscoutazureatlas/image_033.png)

5. Compila le informazioni:
   - **Sottoscrizione**: seleziona il tuo account gratuito (o di base).
   - **Gruppo di risorse**: clicca **Crea Nuovo**, chiamalo `Nightscout`, clicca **OK**.

![](images/nightscoutazureatlas/image_034.png)

   - **Nome**: il nome del tuo sito Nightscout (solo lettere minuscole, numeri e `-`). Verifica che la spunta verde appaia a destra.

![](images/nightscoutazureatlas/image_035.png)

   - **Pubblica**: seleziona **Contenitore Docker** con **Linux**.
   - **Area geografica**: scegli una area vicina a dove abiti.

![](images/nightscoutazureatlas/image_036.png)

6. **IMPORTANTE — Seleziona il piano gratuito:**
   Clicca **Modifica dimensioni** → **Sviluppo/test** → **F1: gratuito** → **Applica**.

![](images/nightscoutazureatlas/image_037.png)

![](images/nightscoutazureatlas/image_038.png)

![](images/nightscoutazureatlas/image_039.png)

7. Clicca **Avanti: Docker >**.
8. In **Origine immagine**, seleziona **Docker Hub**. In **Immagine e tag** scrivi:
   ```
   nightscout/cgm-remote-monitor:latest
   ```

![](images/nightscoutazureatlas/image_040.png)

9. Clicca **Rivedi e crea** → verifica le informazioni → **Crea**.

![](images/nightscoutazureatlas/image_041.png)

10. Aspetta il completamento e clicca **Vai alla risorsa**.

![](images/nightscoutazureatlas/image_042.png)

![](images/nightscoutazureatlas/image_043.png)

### Aggiungi le variabili di configurazione

1. Nel menu di sinistra, clicca **Configurazione** → **Nuova Impostazione Applicazione**.

![](images/nightscoutazureatlas/image_044.png)

![](images/nightscoutazureatlas/image_045.png)

Aggiungi le seguenti variabili una alla volta (nome + valore → **OK**):

| Nome | Valore |
|---|---|
| `API_SECRET` | La tua password Nightscout (minimo 12 caratteri, no spazi, no `@`, no `!`) |
| `DISPLAY_UNIT` | `mg/dl` |
| `MONGODB_URI` | La stringa generata al passo 1 |
| `ENABLE` | `dbsize pump iob cob basal careportal sage cage bage` |

![](images/nightscoutazureatlas/image_046.png)

Se usi **Dexcom Share** come sorgente, aggiungi anche:

| Nome | Valore |
|---|---|
| `BRIDGE_USER_NAME` | Il tuo utente Dexcom |
| `BRIDGE_PASSWORD` | La tua password Dexcom |
| `BRIDGE_SERVER` | `EU` |

![](images/nightscoutazureatlas/image_047.png)

E aggiungi `bridge` alla variabile `ENABLE`:
```
dbsize pump iob cob basal careportal sage cage bage bridge
```

![](images/nightscoutazureatlas/image_048.png)

![](images/nightscoutazureatlas/image_049.png)

> ℹ️ Se stai migrando da Heroku, copia tutte le variabili dal tuo sito Heroku (vedi Appendice A) e incollale qui.

![](images/nightscoutazureatlas/image_050.png)

2. Una volta aggiunte tutte le variabili, clicca **Salva** → **Continua**. L'app web si riavvierà.

![](images/nightscoutazureatlas/image_051.png)

---

## 3. Configura il sito Nightscout

1. Dal menu della tua app Azure, vai in **Panoramica** → copia l'indirizzo del sito (es. `https://nomedeltuosito.azurewebsites.net`).

![](images/nightscoutazureatlas/image_052.png)

2. Aprilo nel browser. Se compare un errore "Timeout", aspetta 5 minuti e riprova.
3. Clicca sul menu → **Profile Editor**.

![](images/nightscoutazureatlas/image_053.png)

4. Imposta il fuso orario: **Europe/Rome**.

![](images/nightscoutazureatlas/image_054.png)

5. Scorri in fondo, clicca **Authenticate**, inserisci l'API secret, poi **Update** e **Save**.

![](images/nightscoutazureatlas/image_055.png)

![](images/nightscoutazureatlas/image_056.png)

![](images/nightscoutazureatlas/image_057.png)

![](images/nightscoutazureatlas/image_058.png)

Se usi Dexcom Share, i dati appariranno entro qualche minuto. Per xDrip+, Spike, xDrip4iOS ecc.: inserisci l'indirizzo del sito e l'API secret nell'app.

![](images/nightscoutazureatlas/image_059.png)

---

## 4. Aggiorna i dispositivi (solo migrazione da Heroku)

Devi aggiornare l'indirizzo Nightscout su tutti i tuoi dispositivi:
- **Prima (Heroku):** `https://nomedeltuosito.heroku.com`
- **Ora (Azure):** `https://nomedeltuosito.azurewebsites.net`

Per **xDrip+ master** (Cloud Upload), l'URL diventa:
```
https://nomedeltuosito.azurewebsites.net/api/v1
```

> ℹ️ Il sito Azure mostrerà i dati anche con il vecchio indirizzo Heroku (il database è condiviso), ma il sito Heroku si è fermato: devi aggiornare tutti i dispositivi per continuare a ricevere dati.

![](images/nightscoutazureatlas/image_060.png)

---

## Appendice A — Database Atlas esistente (migrazione da Heroku)

**Se hai ancora accesso a Heroku:**
1. Vai su `https://id.heroku.com/login` e apri la tua app.

![](images/nightscoutazureatlas/image_061.png)

![](images/nightscoutazureatlas/image_062.png)

2. Vai in **Settings** → **Reveal Config Vars**.

![](images/nightscoutazureatlas/image_063.png)

3. Copia il valore di `MONGODB_URI` (o `MONGO_CONNECTION` se la prima non c'è — **non** `MONGODB_COLLECTION`).

![](images/nightscoutazureatlas/image_064.png)

![](images/nightscoutazureatlas/image_065.png)

4. Usa questa stringa come `MONGODB_URI` nel passo 2 di Azure.

**Se non hai più accesso a Heroku:**
1. Vai su `https://account.mongodb.com/account/login`.

![](images/nightscoutazureatlas/image_066.png)

2. Se ricordi la password del tuo utente database, segui il passaggio **Connect** nella tua homepage Atlas.
3. Se non ricordi la password:
   - Vai in **Database Access** → **EDIT** sull'utente esistente → cambia il ruolo in **Only read any database** → **Update User** (questo disabilita temporaneamente il vecchio accesso).

![](images/nightscoutazureatlas/image_067.png)

![](images/nightscoutazureatlas/image_068.png)

   - Clicca **ADD NEW DATABASE USER**: scegli un nome, genera una password con **Autogenerate Secure Password** → **Show** per visualizzarla e copiala → **Add Built in role: Atlas Admin** → **Add User**.

![](images/nightscoutazureatlas/image_069.png)

![](images/nightscoutazureatlas/image_070.png)

![](images/nightscoutazureatlas/image_071.png)

![](images/nightscoutazureatlas/image_072.png)

![](images/nightscoutazureatlas/image_073.png)

![](images/nightscoutazureatlas/image_074.png)

   - Torna in **Database** → **Connect** → **Connect your application** → copia la stringa e sostituisci `<username>` e `<password>` con i nuovi valori.

![](images/nightscoutazureatlas/image_075.png)

![](images/nightscoutazureatlas/image_076.png)

![](images/nightscoutazureatlas/image_077.png)

4. Usa questa stringa come `MONGODB_URI` nel passo 2 di Azure.
