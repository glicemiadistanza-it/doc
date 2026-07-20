# Xiaomi MiBand 2, 3 e 4 con xDrip

Questa guida spiega come visualizzare la glicemia di xDrip su una smartband **Xiaomi MiBand 2, 3 o 4**.

Progetto originale di Artem (GitHub: @bigdigital).

**Requisiti:** telefono Android 5 o superiore con Bluetooth 4.2 (BLE). Carica completamente la smartband prima di iniziare.

---

## 1. Installa xDrip

Segui la [guida base di installazione](../xdrip/installare-xdrip-android). **Non proseguire fino a quando non vedi la glicemia in xDrip.**

---

## 2. Rimuovi l'app Mi Fit (se installata)

1. Nell'app Mi Fit, **disaccoppia** la smartband.
2. Vai in **Impostazioni Android → App → Mi Fit** e disinstalla completamente (non basta rimuovere l'icona dalla schermata principale).

Nella scheda **Stato** di Mi Fit vedi il riepilogo del dispositivo abbinato:

![](images/mi-band234-con-xdrip/image_001.png)

Nella scheda **Profilo**, apri le impostazioni della Mi Smart Band 4:

![](images/mi-band234-con-xdrip/image_002.png)

Scorri fino in fondo alla pagina del dispositivo, dove trovi la voce **Dissocia**:

![](images/mi-band234-con-xdrip/image_003.png)

Conferma la disassociazione:

![](images/mi-band234-con-xdrip/image_004.png)

Da questo momento la smartband risulta libera e pronta per essere abbinata di nuovo:

![](images/mi-band234-con-xdrip/image_005.png)

---

## 3. Installa l'app Mi Fit modificata

1. Vai su [`https://www.freemyband.com/2019/08/mi-band-4-auth-key.html`](https://www.freemyband.com/2019/08/mi-band-4-auth-key.html)

La pagina propone il download della versione modificata di Mi Fit:

![](images/mi-band234-con-xdrip/image_006.png)

2. Scarica la versione **5.3.1** (quella testata con questa guida; puoi provare versioni più recenti a tuo rischio).
3. Se il download non parte automaticamente, tocca **Scarica**. Se non funziona, usa un'altra app come APK Installer.

Il browser mostra l'anteprima del file `.apk` da scaricare:

![](images/mi-band234-con-xdrip/image_007.png)

Le icone delle app disponibili per aprire il link (browser, Drive, ecc.):

![](images/mi-band234-con-xdrip/image_008.png)

4. Installa il file `.apk` autorizzando l'installazione da sorgente sconosciuta.

Conferma l'installazione di Mi Fit quando richiesto:

![](images/mi-band234-con-xdrip/image_009.png)

Al termine, l'app risulta installata:

![](images/mi-band234-con-xdrip/image_010.png)

---

## 4. Ottieni la chiave di autenticazione

1. Apri l'app e crea un account con **email e password** (non usare Google).
2. Abbina la smartband e abilita **Visibilità** (modalità rilevabile) se disponibile. Se non trovi l'opzione, prosegui comunque.

All'avvio ti viene chiesto di accedere o registrarti:

![](images/mi-band234-con-xdrip/image_011.png)

Nella schermata **Stato**, tocca per associare un nuovo dispositivo:

![](images/mi-band234-con-xdrip/image_012.png)

Scegli il tipo di dispositivo da associare, **Bracciale**:

![](images/mi-band234-con-xdrip/image_014.png)

Se il sistema chiede l'autorizzazione per procedere con l'associazione, concedila:

![](images/mi-band234-con-xdrip/image_013.png)

Se la smartband era già stata associata in precedenza, l'app propone di ripristinarne le impostazioni:

![](images/mi-band234-con-xdrip/image_020.png)

Tieni la smartband vicino al telefono mentre l'app la cerca:

![](images/mi-band234-con-xdrip/image_015.png)

Sul display della smartband conferma l'abbinamento:

![](images/mi-band234-con-xdrip/image_019.png)

Torna nell'app e scorri le impostazioni del dispositivo appena associato:

![](images/mi-band234-con-xdrip/image_016.png)

Se richiesto, concedi l'autorizzazione per la modalità **Visibile**:

![](images/mi-band234-con-xdrip/image_017.png)

Attiva l'opzione **Visibile**:

![](images/mi-band234-con-xdrip/image_018.png)

L'app modificata crea automaticamente un file di testo con le credenziali. Trovalo nella **memoria interna** o sulla **scheda SD**, nella cartella `freemyband`.

Apri il gestore file e vai nella sezione **Archivio**:

![](images/mi-band234-con-xdrip/image_021.png)

Entra nella **memoria interna**, dove trovi la cartella `freemyband`:

![](images/mi-band234-con-xdrip/image_022.png)

Dentro la cartella trovi il file di testo con MAC e chiave di autenticazione (es. `mibandFFBBCC9CDE00.txt`):

![](images/mi-band234-con-xdrip/image_023.png)

> ⚠️ **Attenzione**: Se il file non esiste, xDrip non riuscirà a comunicare con la smartband. Se disaccoppi o reimposti la smartband, cancella il vecchio file e rigenera le credenziali con l'app modificata.

---

## 5. Configura xDrip per MiBand

1. Vai in **Menu → Caratteristiche → Smartwatch → MiBand**.

Apri il menu principale di xDrip e scorri fino a **Caratteristiche**:

![](images/mi-band234-con-xdrip/image_024.png)

Tra i dispositivi collegabili trovi la voce **MiBand**:

![](images/mi-band234-con-xdrip/image_025.png)

2. Autorizza l'accesso a file, geolocalizzazione e posizione.

All'apertura, xDrip chiede l'autorizzazione per accedere ai file:

![](images/mi-band234-con-xdrip/image_026.png)

Concedi anche l'autorizzazione per la posizione, necessaria per il Bluetooth:

![](images/mi-band234-con-xdrip/image_028.png)

Se un'autorizzazione viene negata, comparirà un avviso e xDrip non troverà la MiBand:

![](images/mi-band234-con-xdrip/image_027.png)

3. **Nell'ordine**, disabilita: ❶ **Letture glicemie** → ❷ **Invia letture** → ❸ **Usa MiBand**.
4. Abilita solo **Usa MiBand**.

Disattiva temporaneamente tutte le opzioni, compresa **Usa MiBand**:

![](images/mi-band234-con-xdrip/image_030.png)

Poi riattiva solo **Usa MiBand**, lasciando le altre opzioni spente:

![](images/mi-band234-con-xdrip/image_029.png)

**Se l'indirizzo MAC non compare automaticamente:**
1. Apri il file nella cartella `freemyband` (si apre anche con Chrome).
2. Copia l'**indirizzo MAC** nel campo **Mac Address**.
3. Copia la **chiave di autenticazione** nel campo **Auth Key**.

Il file si apre nel browser mostrando MAC e chiave concatenati:

![](images/mi-band234-con-xdrip/image_031.png)

Incolla i due valori nei campi **Indirizzo MAC** e **Chiave di autenticazione**:

![](images/mi-band234-con-xdrip/image_032.png)

Osserva lo stato in fondo alla schermata: prima comparirà "Smartband rilevata", poi "Smartband autenticata".

xDrip avvisa che sta cercando la smartband nelle vicinanze:

![](images/mi-band234-con-xdrip/image_033.png)

Poco dopo conferma di averla trovata, con il relativo indirizzo MAC:

![](images/mi-band234-con-xdrip/image_034.png)

Infine conferma che l'autenticazione è riuscita:

![](images/mi-band234-con-xdrip/image_035.png)

Se invece la chiave non è corretta, compare un avviso di autenticazione fallita:

![](images/mi-band234-con-xdrip/image_036.png)

**Se compare "Errore di autenticazione":** torna al passo 4 e rigenera la chiave.

Ricontrolla i campi **Indirizzo MAC** e **Chiave di autenticazione** e reinseriscili:

![](images/mi-band234-con-xdrip/image_037.png)

**Se il quadrante non appare (sequenza di ripristino):**

> ℹ️ **Nota**: Le MiBand 4 richiedono che la batteria sia sopra il 10% per mostrare il quadrante personalizzato.

Verifica che la configurazione di MiBand in xDrip corrisponda a questa (Usa MiBand e Invia Letture attivi):

![](images/mi-band234-con-xdrip/image_038.png)

Nelle **Opzioni grafico**, controlla lo stato della casella **Abilita grafico**:

![](images/mi-band234-con-xdrip/image_039.png)

1. Disabilita MiBand in xDrip.

![](images/mi-band234-con-xdrip/image_043.png)

2. Apri Mi Fit e scorri verso il basso per forzare la sincronizzazione.

![](images/mi-band234-con-xdrip/image_044.png)

3. Riabilita MiBand in xDrip.

![](images/mi-band234-con-xdrip/image_045.png)

4. Forza l'invio di una lettura alla smartband dal menù, toccando **Aggiorna la glicemia manualmente**:

![](images/mi-band234-con-xdrip/image_041.png)

Conferma quando richiesto:

![](images/mi-band234-con-xdrip/image_040.png)

Se il quadrante non si aggiorna subito, ripeti il tocco su **Aggiorna la glicemia manualmente**:

![](images/mi-band234-con-xdrip/image_046.png)

Attendi la conferma che la sincronizzazione è andata a buon fine:

![](images/mi-band234-con-xdrip/image_047.png)

A questo punto la glicemia dovrebbe comparire sul quadrante della smartband:

![](images/mi-band234-con-xdrip/image_042.png)

Se ancora non funziona, abilita **Disable high MTU** nelle impostazioni MiBand:

![](images/mi-band234-con-xdrip/image_048.png)

Assicurati anche che **Abilita grafico** risulti spuntata:

![](images/mi-band234-con-xdrip/image_049.png)

Alcuni esempi di quadrante funzionante, con andamento e trend della glicemia:

![](images/mi-band234-con-xdrip/image_050.png)

![](images/mi-band234-con-xdrip/image_051.png)

![](images/mi-band234-con-xdrip/image_052.png)

Con **Invia Allarmi** attivo, quando scatta un allarme xDrip riceverai una "chiamata" sulla smartband: il numero del chiamante corrisponde al valore della glicemia.

![](images/mi-band234-con-xdrip/image_053.png)

> ℹ️ **Nota**: Se hai problemi con le notifiche delle altre app, installa **Notify for Mi Band** dal Play Store e concedi le autorizzazioni richieste.

---

## 6. Reinstalla Mi Fit ufficiale (opzionale)

Installa Mi Fit dal Play Store e accedi con **le stesse credenziali** dell'app modificata. Abbina nuovamente la smartband e abilita la visibilità se disponibile.

Installa **Mi Fit** dal Play Store:

![](images/mi-band234-con-xdrip/image_055.png)

Apri l'app appena installata e accedi con lo stesso account usato in precedenza:

![](images/mi-band234-con-xdrip/image_011.png)

Nella schermata **Stato**, tocca per associare di nuovo la smartband:

![](images/mi-band234-con-xdrip/image_012.png)

Scegli **Bracciale** come tipo di dispositivo:

![](images/mi-band234-con-xdrip/image_054.png)

Se richiesto, concedi l'autorizzazione per procedere:

![](images/mi-band234-con-xdrip/image_013.png)

Essendo la smartband già configurata in precedenza, l'app propone di ripristinarne le impostazioni:

![](images/mi-band234-con-xdrip/image_056.png)

Tieni la smartband vicino al telefono durante la ricerca:

![](images/mi-band234-con-xdrip/image_015.png)

Conferma l'abbinamento sul display della smartband:

![](images/mi-band234-con-xdrip/image_019.png)

Rivedi le impostazioni del dispositivo ora gestito dall'app ufficiale:

![](images/mi-band234-con-xdrip/image_016.png)

Se richiesto, concedi di nuovo l'autorizzazione per la modalità **Visibile**:

![](images/mi-band234-con-xdrip/image_017.png)

E riattivala:

![](images/mi-band234-con-xdrip/image_018.png)

Se l'app ufficiale dà problemi, torna a quella modificata: ha le stesse funzionalità (notifiche SMS, WhatsApp, email, ecc.).
