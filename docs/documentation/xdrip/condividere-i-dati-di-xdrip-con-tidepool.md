# Condividere i dati di xDrip con Tidepool

Nel gruppo preferiamo Nightscout, ma non tutti i centri diabetologici lo accettano per condividere le statistiche del paziente.

Tidepool è un'organizzazione no profit che offre software open source e servizi gratuiti per la gestione del diabete. Il ramo Tidepool Loop ha ottenuto l'approvazione FDA per il circuito chiuso (sistema ibrido di erogazione automatica dell'insulina) in collaborazione con la comunità open source Loop.

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

Si apre il menu con le voci principali, vai in **Impostazioni**. 

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_013.png)

2. Tocca **Caricamento nel Cloud**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_014.png)

E seleziona **Tidepool**.

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_015.png)

Abilita **Sync to Tidepool**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_016.png)

3. Inserisci la tua email usata per creare l'utenza Tidepool in **Nome Utente**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_017.png)

E la password in **Password**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_018.png)

4. Verifica il funzionamento con **Test di accesso a Tidepool**: vedrai prima il messaggio **Connecting to Tidepool**...

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_019.png)

Dovrai quindi effettuare il login nel server Tidepool per autorizzare xDrip:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_020.png)

⚠️ **Attenzione**: Se inserisci boli e CHO (carboidrati) sia in xDrip sia tramite il microinfusore, il risultato verrà raddoppiato in Tidepool. Con le versioni successive, abilita l'apposita opzione **Non caricare i trattamenti** per non inviare i dati doppi a Tidepool:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_025.png)

## 3. Condividere con il diabetologo

1. Torna in Tidepool dal tuo browser: la scheda **Basics** mostra le statistiche man mano che arrivano dati:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_021.png)

2. Clicca su **Share**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_022.png)

3. Clicca **Invite new member**.
4. Inserisci l'indirizzo email di chi avrà diritto a vedere i dati.
5. Se vuoi anche che possano aggiungere altri dati (durante la visita diabetologica), seleziona anche **Allow uploading**:

![](images/condividere-i-dati-di-xdrip-con-tidepool/image_023.png)


