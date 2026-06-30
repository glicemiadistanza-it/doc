# Amazfit con xDrip+ (metodo legacy)

> ⚠️ **Questa guida è obsoleta per versioni di xDrip+ successive all'11 luglio 2022.** Se hai una versione recente di xDrip+, segui invece la [guida WatchDrip+](../xdrip/xdrip-e-watchdrip).

Dispositivi compatibili con questo metodo:
- Amazfit Band 5
- Amazfit Bip, Bip Lite, Bip S (**non** Bip S Lite)
- Amazfit GTR, GTR2, GTR2e, GTR 42mm
- Amazfit GTS2, GTS2e, GTS2 mini

Progetto originale di Artem (GitHub: @bigdigital).

**Requisiti:** telefono Android 5 o superiore con Bluetooth 4.2 (BLE). Carica completamente il dispositivo prima di iniziare.

---

## 1. Installa xDrip+

Segui la [guida base di installazione](../xdrip/installare-xdrip-android). **Non proseguire fino a quando non vedi la glicemia in xDrip+.**

---

## 2. Rimuovi l'app Zepp (se installata)

1. Nell'app Zepp, **disaccoppia** lo smartwatch.
2. Vai in **Impostazioni Android → App → Zepp** e disinstalla completamente (non basta rimuovere l'icona dalla schermata principale).

---

## 3. Installa l'app Zepp modificata

1. Vai su `https://www.freemyband.com/2019/08/amazfit-gtr-auth-key.html`.
2. Scarica la versione **5.6.1** (quella testata con questa guida; la 6.4.1 ha dato problemi in alcuni casi).
3. Installa il file `.apk` autorizzando l'installazione da sorgente sconosciuta.

---

## 4. Ottieni la chiave di autenticazione

1. Apri l'app e crea un account con **email e password** (non usare Google). Dichiara almeno 18 anni.
2. Nel profilo, aggiungi il tuo dispositivo: **Orologio** per GTR e GTS, **Bracciale** per Band 5.
3. Abbina lo smartwatch e abilita **Visibilità** (modalità rilevabile) se disponibile. Se non trovi l'opzione, prosegui comunque.

L'app modificata crea automaticamente un file di testo con le credenziali. Trovalo nella **memoria interna** o sulla **scheda SD**, nella cartella `freemyband`.

> ⚠️ Se il file non esiste, xDrip+ non riuscirà a comunicare con lo smartwatch. Se disaccoppi o reimposti il dispositivo, cancella il vecchio file e rigenera le credenziali con l'app modificata.

> ℹ️ **Amazfit GTS2 mini:** per permettere a xDrip+ di installare il suo quadrante, devi cancellare tutti i quadranti personalizzati: **Impostazioni → Quadranti** e rimuovi tutto quello che puoi.

---

## 5. Configura xDrip+ per il dispositivo Amazfit

1. Vai in **Menu → Caratteristiche → Smartwatch → MiBand**.
2. Autorizza l'accesso a file, geolocalizzazione e posizione.
3. **Nell'ordine**, disabilita: ❶ **Letture glicemie** → ❷ **Invia letture** → ❸ **Usa MiBand**.
4. Abilita solo **Usa MiBand**.

**Se l'indirizzo MAC non compare automaticamente:**
1. Apri il file nella cartella `freemyband` (si apre anche con Chrome).
2. Copia l'**indirizzo MAC** in **Mac Address**.
3. Copia la **chiave di autenticazione** in **Auth Key**.

Osserva lo stato in fondo alla schermata: prima comparirà "Smartwatch rilevata", poi "Smartwatch autenticata".

**Se compare "Errore di autenticazione":** torna al passo 3 e rigenera la chiave.

**Se il quadrante non appare (sequenza di ripristino):**
1. Disabilita MiBand in xDrip+.
2. Apri Zepp e scorri verso il basso per forzare la sincronizzazione.
3. Riabilita MiBand in xDrip+.
4. Forza l'invio di una lettura allo smartwatch dal menù.

Se ancora non funziona, abilita **Disable high MTU** nelle impostazioni MiBand.

Con **Invia Allarmi** attivo, quando scatta un allarme xDrip+ riceverai una "chiamata" sullo smartwatch: il numero del chiamante corrisponde al valore della glicemia.

---

## 6. Reinstalla l'app Zepp ufficiale (opzionale)

Puoi reinstallare Zepp dal Play Store e accedere con **le stesse credenziali** dell'app modificata. Abbina nuovamente lo smartwatch e abilita la visibilità se disponibile.

Se l'app ufficiale dà problemi, torna a quella modificata: ha le stesse funzionalità (notifiche SMS, WhatsApp, email, ecc.).
