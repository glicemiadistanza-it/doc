# Amazfit Bip / Bip Lite con xDrip+ (metodo legacy)

> ⚠️ **Questa guida è obsoleta per versioni di xDrip+ successive all'11 luglio 2022.** Se hai una versione recente di xDrip+, segui invece la [guida WatchDrip+](../xdrip/xdrip-e-watchdrip).

Questa guida spiega come visualizzare la glicemia di xDrip+ su un **Amazfit Bip Lite** (dovrebbe funzionare anche con Amazfit Bip S) usando una versione modificata di xDrip+ (v0.4.1.2).

Progetto originale di Artem (GitHub: @bigdigital). Documentazione: `https://bigdigital.home.blog/2021/03/21/amazfit-bip-bip-lite-and-amazfit-gtr-integration/`

**Requisiti:** telefono Android 5 o superiore con Bluetooth 4.2 (BLE). Carica completamente il dispositivo prima di iniziare.

> ⚠️ Se usi xDrip+ collegato direttamente al sensore, questa versione modificata potrebbe non essere compatibile con future versioni di Android. Prima di procedere, **esporta il database e salva le impostazioni** di xDrip+ (menù → Importa/Esporta → Esporta database, e copia il codice QR delle impostazioni).

---

## 1. Rimuovi la versione ufficiale di xDrip+ (se installata)

Se hai già xDrip+ in versione ufficiale (non quella modificata di Artem), devi disinstallarlo — ma prima salva i dati:

1. Dal menù di xDrip+, vai in **Importa/Esporta → Esporta database**. Autorizza l'accesso alla memoria. Verifica che il file sia stato salvato con data e ora correnti.
2. Salva le impostazioni con **Condividi impostazioni → Codice QR**: fai uno screenshot del QR e mandatelo su un altro dispositivo.
3. Disinstalla xDrip+.

---

## 2. Rimuovi l'app Zepp (se installata)

1. Nell'app Zepp (già Amazfit), **disaccoppia** il Bip Lite prima di tutto.
2. Vai in **Impostazioni Android → App → Zepp** e disinstalla completamente.

---

## 3. Ottieni la chiave di autenticazione

1. Vai su `https://www.freemyband.com/` e scarica l'app **Zepp modificata** (usa Chrome o cambia browser se non funziona).
2. Installa l'app autorizzando l'installazione da sorgente sconosciuta.
3. Crea un account con **email e password** (non usare Google). Dichiara almeno 18 anni.
4. Abbina il Bip Lite e abilita **Visibilità** (modalità rilevabile) se disponibile. Se non trovi l'opzione, prosegui comunque (inserirai i dati manualmente dopo).

L'app modificata genera automaticamente un file di testo con le credenziali di autenticazione. Trovalo nella **memoria interna** o sulla **scheda SD**, nella cartella `freemyband`.

> ⚠️ Se il file non esiste, WatchDrip+/xDrip+ non funzionerà. Se resetti il Bip Lite, cancella il vecchio file e rigenera le credenziali con l'app modificata.

---

## 4. Installa la versione modificata di xDrip+

Scarica la versione modificata da: `https://www.dropbox.com/s/623ipo9wcsaeupo/xdrip_miband_0.4.1.2.apk?dl=0`

Installa il file `.apk` autorizzando l'installazione da sorgente sconosciuta e concedi tutti i permessi richiesti.

**Ripristina i dati (solo se avevi xDrip+ prima):**
1. Dal menù → **Importa/Esporta → Importa database**: seleziona il file esportato al passo 1.
2. Ripristina le impostazioni usando il codice QR salvato.
3. Verifica gli allarmi e riabbina sensore/trasmettitore se necessario.

**Configura la sorgente dati (per follower):**
- **Follower xDrip+ Sync:** in **Dati hardware di origine**, scegli **xDrip+ Sync Follower**.
- **Follower Dexcom Share:** scegli **Dex Share Follower** (mai "Dexcom G5/G6" che collegherebbe al sensore).
- **Follower Nightscout:** in **Impostazioni**, inserisci l'URL del tuo sito in **Nightscout Follow URL** (es. `https://miosito.azurewebsites.net`).

---

## 5. Configura xDrip+ per il Bip Lite

1. Vai in **Menu → Caratteristiche → Smartwatch → MiBand**.
2. Autorizza l'accesso a file, geolocalizzazione e posizione.
3. **Nell'ordine**, disabilita: ❶ **Letture glicemie** → ❷ **Invia letture** → ❸ **Usa MiBand**.
4. Abilita solo **Usa MiBand**.

**Se l'indirizzo MAC non compare automaticamente:**
1. Apri il file nella cartella `freemyband` (si apre anche con Chrome).
2. Copia l'**indirizzo MAC** in **Mac Address**.
3. Copia la **chiave di autenticazione** in **Auth Key**.

Osserva lo stato in fondo alla schermata: prima comparirà "Smartband rilevata", poi "Smartband autenticata" (per il Bip Lite l'autenticazione è automatica).

**Se compare "Errore di autenticazione":** torna al passo 3 e rigenera la chiave.

**Se il quadrante non appare (sequenza di ripristino):**
1. Disabilita MiBand in xDrip+.
2. Apri Zepp e scorri verso il basso per forzare la sincronizzazione.
3. Riabilita MiBand in xDrip+.
4. Forza l'invio di una lettura allo smartwatch dal menù.

Se ancora non funziona, abilita **Disable high MTU** nelle impostazioni MiBand.

Con **Invia Allarmi** attivo, quando scatta un allarme xDrip+ riceverai una "chiamata" sul Bip Lite: il numero del chiamante corrisponde al valore della glicemia.

---

## 6. Reinstalla l'app Zepp ufficiale (opzionale)

Puoi reinstallare Zepp dal Play Store e accedere con **le stesse credenziali** dell'app modificata. Abbina nuovamente il Bip Lite e abilita la visibilità se disponibile.

Se l'app ufficiale dà problemi, torna alla versione modificata: ha le stesse funzionalità (notifiche SMS, WhatsApp, email, ecc.).
