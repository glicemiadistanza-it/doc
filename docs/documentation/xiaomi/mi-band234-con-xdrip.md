# Xiaomi MiBand 2, 3 e 4 con xDrip+

Questa guida spiega come visualizzare la glicemia di xDrip+ su una smartband **Xiaomi MiBand 2, 3 o 4**.

Progetto originale di Artem (GitHub: @bigdigital).

**Requisiti:** telefono Android 5 o superiore con Bluetooth 4.2 (BLE). Carica completamente la smartband prima di iniziare.

---

## 1. Installa xDrip+

Segui la [guida base di installazione](../xdrip/installare-xdrip-android). **Non proseguire fino a quando non vedi la glicemia in xDrip+.**

---

## 2. Rimuovi l'app Mi Fit (se installata)

1. Nell'app Mi Fit, **disaccoppia** la smartband.
2. Vai in **Impostazioni Android → App → Mi Fit** e disinstalla completamente (non basta rimuovere l'icona dalla schermata principale).

![](images/mi-band234-con-xdrip/image_001.png)

![](images/mi-band234-con-xdrip/image_002.png)

![](images/mi-band234-con-xdrip/image_003.png)

![](images/mi-band234-con-xdrip/image_004.png)

![](images/mi-band234-con-xdrip/image_005.png)

---

## 3. Installa l'app Mi Fit modificata

1. Vai su `https://www.freemyband.com/2019/08/mi-band-4-auth-key.html`

![](images/mi-band234-con-xdrip/image_006.png)

2. Scarica la versione **5.3.1** (quella testata con questa guida; puoi provare versioni più recenti a tuo rischio).
3. Se il download non parte automaticamente, tocca **Scarica**. Se non funziona, usa un'altra app come APK Installer.

![](images/mi-band234-con-xdrip/image_007.png)

![](images/mi-band234-con-xdrip/image_008.png)

4. Installa il file `.apk` autorizzando l'installazione da sorgente sconosciuta.

![](images/mi-band234-con-xdrip/image_009.png)

![](images/mi-band234-con-xdrip/image_010.png)

---

## 4. Ottieni la chiave di autenticazione

1. Apri l'app e crea un account con **email e password** (non usare Google).
2. Abbina la smartband e abilita **Visibilità** (modalità rilevabile) se disponibile. Se non trovi l'opzione, prosegui comunque.

![](images/mi-band234-con-xdrip/image_011.png)

![](images/mi-band234-con-xdrip/image_012.png)

![](images/mi-band234-con-xdrip/image_013.png)

![](images/mi-band234-con-xdrip/image_014.png)

![](images/mi-band234-con-xdrip/image_015.png)

![](images/mi-band234-con-xdrip/image_016.png)

![](images/mi-band234-con-xdrip/image_017.png)

![](images/mi-band234-con-xdrip/image_018.png)

![](images/mi-band234-con-xdrip/image_019.png)

![](images/mi-band234-con-xdrip/image_020.png)

L'app modificata crea automaticamente un file di testo con le credenziali. Trovalo nella **memoria interna** o sulla **scheda SD**, nella cartella `freemyband`.

![](images/mi-band234-con-xdrip/image_021.png)

![](images/mi-band234-con-xdrip/image_022.png)

![](images/mi-band234-con-xdrip/image_023.png)

> ⚠️ **Attenzione**: Se il file non esiste, xDrip+ non riuscirà a comunicare con la smartband. Se disaccoppi o reimposti la smartband, cancella il vecchio file e rigenera le credenziali con l'app modificata.

---

## 5. Configura xDrip+ per MiBand

1. Vai in **Menu → Caratteristiche → Smartwatch → MiBand**.

![](images/mi-band234-con-xdrip/image_024.png)

![](images/mi-band234-con-xdrip/image_025.png)

2. Autorizza l'accesso a file, geolocalizzazione e posizione.

![](images/mi-band234-con-xdrip/image_026.png)

![](images/mi-band234-con-xdrip/image_027.png)

![](images/mi-band234-con-xdrip/image_028.png)

3. **Nell'ordine**, disabilita: ❶ **Letture glicemie** → ❷ **Invia letture** → ❸ **Usa MiBand**.
4. Abilita solo **Usa MiBand**.

![](images/mi-band234-con-xdrip/image_029.png)

![](images/mi-band234-con-xdrip/image_030.png)

**Se l'indirizzo MAC non compare automaticamente:**
1. Apri il file nella cartella `freemyband` (si apre anche con Chrome).
2. Copia l'**indirizzo MAC** nel campo **Mac Address**.
3. Copia la **chiave di autenticazione** nel campo **Auth Key**.

![](images/mi-band234-con-xdrip/image_031.png)

![](images/mi-band234-con-xdrip/image_032.png)

Osserva lo stato in fondo alla schermata: prima comparirà "Smartband rilevata", poi "Smartband autenticata".

![](images/mi-band234-con-xdrip/image_033.png)

![](images/mi-band234-con-xdrip/image_034.png)

![](images/mi-band234-con-xdrip/image_035.png)

![](images/mi-band234-con-xdrip/image_036.png)

**Se compare "Errore di autenticazione":** torna al passo 3 e rigenera la chiave.

![](images/mi-band234-con-xdrip/image_037.png)

**Se il quadrante non appare (sequenza di ripristino):**

> ℹ️ **Nota**: Le MiBand 4 richiedono che la batteria sia sopra il 10% per mostrare il quadrante personalizzato.

![](images/mi-band234-con-xdrip/image_038.png)

![](images/mi-band234-con-xdrip/image_039.png)

1. Disabilita MiBand in xDrip+.

![](images/mi-band234-con-xdrip/image_043.png)

2. Apri Mi Fit e scorri verso il basso per forzare la sincronizzazione.

![](images/mi-band234-con-xdrip/image_044.png)

3. Riabilita MiBand in xDrip+.

![](images/mi-band234-con-xdrip/image_045.png)

4. Forza l'invio di una lettura alla smartband dal menù.

![](images/mi-band234-con-xdrip/image_040.png)

![](images/mi-band234-con-xdrip/image_041.png)

![](images/mi-band234-con-xdrip/image_042.png)

![](images/mi-band234-con-xdrip/image_046.png)

![](images/mi-band234-con-xdrip/image_047.png)

Se ancora non funziona, abilita **Disable high MTU** nelle impostazioni MiBand.

![](images/mi-band234-con-xdrip/image_048.png)

![](images/mi-band234-con-xdrip/image_049.png)

![](images/mi-band234-con-xdrip/image_050.png)

![](images/mi-band234-con-xdrip/image_051.png)

![](images/mi-band234-con-xdrip/image_052.png)

Con **Invia Allarmi** attivo, quando scatta un allarme xDrip+ riceverai una "chiamata" sulla smartband: il numero del chiamante corrisponde al valore della glicemia.

![](images/mi-band234-con-xdrip/image_053.png)

> ℹ️ **Nota**: Se hai problemi con le notifiche delle altre app, installa **Notify for Mi Band** dal Play Store e concedi le autorizzazioni richieste.

---

## 6. Reinstalla Mi Fit ufficiale (opzionale)

Installa Mi Fit dal Play Store e accedi con **le stesse credenziali** dell'app modificata. Abbina nuovamente la smartband e abilita la visibilità se disponibile.

![](images/mi-band234-con-xdrip/image_011.png)

![](images/mi-band234-con-xdrip/image_012.png)

![](images/mi-band234-con-xdrip/image_013.png)

![](images/mi-band234-con-xdrip/image_054.png)

![](images/mi-band234-con-xdrip/image_055.png)

![](images/mi-band234-con-xdrip/image_015.png)

![](images/mi-band234-con-xdrip/image_016.png)

![](images/mi-band234-con-xdrip/image_017.png)

![](images/mi-band234-con-xdrip/image_018.png)

![](images/mi-band234-con-xdrip/image_019.png)

![](images/mi-band234-con-xdrip/image_056.png)

Se l'app ufficiale dà problemi, torna a quella modificata: ha le stesse funzionalità (notifiche SMS, WhatsApp, email, ecc.).
