# Glicemia su Alexa con Dexcom o xDrip

Questa guida spiega come far leggere ad **Alexa** (lo speaker Amazon) il valore di glicemia in tempo reale, partendo dall'app **Dexcom** o da **xDrip**.

La comunicazione funziona tramite **Sugarmate**, che riceve i dati da Dexcom Share. Serve quindi un account Dexcom, anche se usi xDrip con un sensore FSL.

> ⚠️ **Attenzione**: Dexcom Share funziona solo con un account che sia già stato usato con un vero trasmettitore/sensore Dexcom. Se non hai già un account Dexcom funzionante in questo senso, **non creartene uno apposta**: non funzionerà. Questa guida non fa al caso tuo se non hai mai usato un sensore Dexcom.

Il risultato finale: Alexa che legge la glicemia sia da Dexcom sia da xDrip, mostrata a confronto sui rispettivi telefoni:

![](images/alexa-con-app-dexcom-o-xdrip/image_001.png)

---

## 1. Abilita la condivisione dati Dexcom

Accedi al tuo account su [`https://uam2.dexcom.com/`](https://uam2.dexcom.com/):

![](images/alexa-con-app-dexcom-o-xdrip/image_002.png)

Clicca **Profile** nel menu in alto:

![](images/alexa-con-app-dexcom-o-xdrip/image_003.png)

Nella sezione **Data Share**, clicca **view details**:

![](images/alexa-con-app-dexcom-o-xdrip/image_004.png)

Seleziona **Accept to Share Data with Dexcom** e clicca **Confirm**:

![](images/alexa-con-app-dexcom-o-xdrip/image_005.png)

---

## 2. Configura xDrip per inviare a Dexcom Share

Se usi xDrip, vai in **Impostazioni → Cloud Upload → Upload in Dexcom Share Server** e:
- Abilita la prima opzione (caricamento su Dexcom Share).
- **Disabilita** la seconda opzione.
- Inserisci il tuo **username** e **password** Dexcom.

![](images/alexa-con-app-dexcom-o-xdrip/image_006.png)

---

## 3. Crea un account Sugarmate

1. Vai su [`https://sugarmate.io/`](https://sugarmate.io/) e clicca **Sign in** in alto a sinistra.
2. Clicca **Iscriviti**, accetta le condizioni e prosegui.
3. Verrà mostrato un indirizzo email generato da Sugarmate: **copialo**, ti servirà nel passo successivo.

Clicca **sign in** in alto a sinistra della pagina:

![](images/alexa-con-app-dexcom-o-xdrip/image_007.png)

Nel modulo **Accedi**, clicca **Iscriviti** per creare un nuovo account:

![](images/alexa-con-app-dexcom-o-xdrip/image_008.png)

Spunta la conferma di aver letto i **Termini e Condizioni** e clicca **Avanti**:

![](images/alexa-con-app-dexcom-o-xdrip/image_009.png)

Sugarmate genera un indirizzo email da usare come follower: copialo e clicca **Fatto!**:

![](images/alexa-con-app-dexcom-o-xdrip/image_010.png)

---

## 4. Aggiungi Sugarmate come follower Dexcom

**Se usi xDrip:** vai in **Impostazioni → Cloud Upload → Dexcom Share Server → Gestire Follower**. Clicca **Invite a follower**, inserisci come nome `Sugarmate`, come tuo nome e l'email di Sugarmate copiata prima. Clicca **Send Invite**.

Nelle impostazioni di **Upload in Dexcom Share Server**, tocca **Gestire Follower**:

![](images/alexa-con-app-dexcom-o-xdrip/image_013.png)

Tocca **INVITE A FOLLOWER**:

![](images/alexa-con-app-dexcom-o-xdrip/image_012.png)

Compila **Followers Name** (`Sugarmate`), **Your display name** e **Followers Email** (l'indirizzo copiato da Sugarmate), poi tocca **SEND INVITE**:

![](images/alexa-con-app-dexcom-o-xdrip/image_011.png)

**Se usi l'app Dexcom ufficiale (G6, G7):** apri l'app, clicca sull'icona in alto a destra, poi sul pulsante di aggiunta follower. Inserisci l'email di Sugarmate e invia l'invito.

Nella schermata principale dell'app Dexcom, tocca l'icona in alto a destra:

![](images/alexa-con-app-dexcom-o-xdrip/image_015.png)

Nella schermata **Dexcom Share**, tocca l'icona **+ Follower**:

![](images/alexa-con-app-dexcom-o-xdrip/image_016.png)

Inserisci l'indirizzo email di Sugarmate nel modulo **Aggiungere un follower** e tocca **AVANTI**:

![](images/alexa-con-app-dexcom-o-xdrip/image_014.png)

---

## 5. Completa la configurazione Sugarmate

Torna su Sugarmate e clicca **Fatto**. Inserisci la tua email e scegli una password per l'account Sugarmate, poi clicca **Avanti**. Dopo qualche minuto inizieranno ad arrivare i dati di glicemia.

Torna sulla pagina di Sugarmate con l'indirizzo email generato e clicca di nuovo **Fatto!**:

![](images/alexa-con-app-dexcom-o-xdrip/image_017.png)

Nella schermata **Crea una password**, inserisci la tua email e una password per l'account Sugarmate, poi clicca **Avanti**:

![](images/alexa-con-app-dexcom-o-xdrip/image_018.png)

Dopo qualche minuto, il grafico di Sugarmate inizia a mostrare i valori di glicemia ricevuti da Dexcom Share:

![](images/alexa-con-app-dexcom-o-xdrip/image_019.png)

---

## 6. Attiva la skill Sugarmate su Alexa

Apri l'app **Amazon Alexa**, cerca la skill **Sugarmate**, seleziona **Attiva** e inserisci email e password del tuo account Sugarmate.

Nella scheda della skill, tocca **ABILITA ALL'USO**:

![](images/alexa-con-app-dexcom-o-xdrip/image_020.png)

Inserisci l'email e la password del tuo account Sugarmate e tocca **Avanti**:

![](images/alexa-con-app-dexcom-o-xdrip/image_021.png)

Compare la conferma che la skill è stata collegata con successo:

![](images/alexa-con-app-dexcom-o-xdrip/image_022.png)

---

## Usare Alexa

Puoi chiedere:

- *"Alexa, chiedi a Sugarmate quanto è l'ultimo valore"*
- *"Alexa, chiedi a Sugarmate quanto ho di glicemia"*
