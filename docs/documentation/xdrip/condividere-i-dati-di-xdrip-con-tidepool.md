# Condividere i dati di xDrip con Tidepool

Nel gruppo preferiamo Nightscout, ma non tutti i centri diabetologici lo accettano per condividere le statistiche del paziente.

Tidepool è un'organizzazione no profit che offre software open source e servizi gratuiti per la gestione del diabete. Il ramo Tidepool Loop è attivamente coinvolto nell'ottenere l'approvazione FDA per il circuito chiuso (sistema ibrido di erogazione automatica dell'insulina) in collaborazione con la comunità open source Loop.

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_001.png)

## 1. Creare un'utenza Tidepool

1. Vai su [`https://www.tidepool.org/`](https://www.tidepool.org/) e clicca **Sign Up**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_002.png)

2. Seleziona un'utenza privata (**Personal Account**) e clicca **Continue**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_003.png)

3. Compila il nome completo, l'email e la password (annotala: servirà dopo per xDrip).
4. Clicca **Create Personal Account** per proseguire:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_004.png)

Tidepool invierà una mail di verifica. Se non arriva, controlla la cartella Spam:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_005.png)

5. Nella mail, clicca **Verify Your Account**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_006.png)

Si aprirà il browser alla finestra di login. Inserisci email e password per accedere:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_007.png)

6. Nella schermata successiva, rispondi che sei maggiorenne e accetta i termini:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_008.png)

Ora crea una base dati per il paziente: rispondi **Yes, let's set it up**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_009.png)

- **Per me:** sono diabetico
- **Per una persona diabetica assistita da me:** inserisci un identificativo (il diabetologo deve sapere di chi si tratta), data di nascita, tipo di diabete, data di diagnosi.
- (Opzionale) Puoi scegliere di donare i dati in modo anonimo al progetto Big Data di Tidepool.

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_010.png)

## 2. Configurare xDrip

Per inviare glicemia e trattamenti a Tidepool, abilita l'integrazione in xDrip. Puoi farlo dal master o da un xDrip Sync Follower, ma conviene abilitarlo su un solo dispositivo.

1. Apri il menu principale di xDrip toccando l'icona ☰ in alto a sinistra:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_012.png)

Si apre il menu con le voci principali, tra cui **Impostazioni**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_013.png)

2. Vai in **Impostazioni**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_014.png)

Tocca **Cloud Upload**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_015.png)

E seleziona **Tidepool**. Abilita **Sync to Tidepool**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_016.png)

3. Inserisci la tua email usata per creare l'utenza Tidepool in **Login User Name**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_017.png)

E la password in **Login Password**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_018.png)

4. Verifica il funzionamento con **Test Tidepool Login**: vedrai prima il messaggio **Connecting...**...

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_019.png)

...e poi **Creating new data set**, a conferma che il collegamento funziona:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_020.png)

Se preferisci caricare i dati da computer invece che da xDrip, puoi anche usare il **Tidepool Uploader**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_011.png)

## 3. Condividere con il diabetologo

1. Torna in Tidepool dal tuo browser: la scheda **Basics** mostra le statistiche man mano che arrivano dati:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_021.png)

2. Clicca su **Share**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_022.png)

3. Clicca **Invite new member**.
4. Inserisci l'indirizzo email di chi avrà diritto a vedere i dati.
5. Se vuoi anche che possano aggiungere altri dati (durante la visita diabetologica), seleziona anche **Allow uploading**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_023.png)

## 4. Caricare altri dati in Tidepool

Tidepool si interfaccia con moltissimi microinfusori e sensori. Puoi aggiungere dati dal tuo computer usando il **Tidepool Uploader**. Se il tuo diabetologo conosce Tidepool, lo farà probabilmente durante la visita diabetologica. Ecco l'elenco dei dispositivi supportati al momento:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_024.png)

> ⚠️ **Attenzione**: Con versioni di xDrip precedenti al 7 febbraio 2020: se inserisci boli e CHO (carboidrati) sia in xDrip sia tramite il microinfusore, il risultato verrà raddoppiato in Tidepool. Con le versioni successive, abilita l'apposita opzione **Don't upload treatments** per non inviare i dati doppi a Tidepool:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_025.png)

## Contatti

Patrick Sonnerat — glicemiadistanza@gmail.com
