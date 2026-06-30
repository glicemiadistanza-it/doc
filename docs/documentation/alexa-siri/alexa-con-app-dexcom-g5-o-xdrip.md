# Glicemia su Alexa con Dexcom G5 o xDrip+

Questa guida spiega come far leggere ad **Alexa** (lo speaker Amazon) il valore di glicemia in tempo reale, partendo dall'app **Dexcom G5 Mobile** o da **xDrip+**.

La comunicazione funziona tramite **Sugarmate**, che riceve i dati da Dexcom Share. Serve quindi un account Dexcom anche se usi xDrip+ con un sensore FSL.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_001.png)

---

## 1. Crea un account Dexcom (solo se non ne hai uno)

Se usi xDrip+ e non hai un account Dexcom, creane uno su `http://www.dexcom.eu/`: seleziona **Italia**, poi **Crea Account**. Inserisci la tua email e segui le istruzioni.

Salva con cura username e password (rispettando maiuscole e caratteri speciali): ti serviranno in seguito.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_002.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_003.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_004.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_005.png)

---

## 2. Abilita la condivisione dati Dexcom

Accedi al tuo account su `https://uam2.dexcom.com/`, clicca **Profile**, scorri fino a **Data Share** e accetta la condivisione.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_006.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_007.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_008.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_009.png)

---

## 3. Configura xDrip+ per inviare a Dexcom Share

Se usi xDrip+, vai in **Impostazioni → Cloud Upload → Upload in Dexcom Share Server** e:
- Abilita la prima opzione (caricamento su Dexcom Share).
- **Disabilita** la seconda opzione.
- Inserisci il tuo **username** e **password** Dexcom.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_010.png)

---

## 4. Crea un account Sugarmate

1. Vai su `https://sugarmate.io/` e clicca **Sign in** in alto a sinistra.
2. Clicca **Iscriviti**, accetta le condizioni e prosegui.
3. Verrà mostrato un indirizzo email generato da Sugarmate: **copialo**, ti servirà nel passo successivo.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_011.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_012.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_013.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_014.png)

---

## 5. Aggiungi Sugarmate come follower Dexcom

**Se usi xDrip+:** vai in **Impostazioni → Cloud Upload → Dexcom Share Server → Gestire Follower**. Clicca **Invite a follower**, inserisci come nome `Sugarmate`, come tuo nome e l'email di Sugarmate copiata prima. Clicca **Send Invite**.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_015.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_016.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_017.png)

**Se usi Dexcom G5 Mobile:** apri l'app, clicca sul triangolo in alto a destra, poi sul pulsante di aggiunta follower. Inserisci l'email di Sugarmate e invia l'invito.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_018.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_019.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_020.png)

---

## 6. Completa la configurazione Sugarmate

Torna su Sugarmate e clicca **Fatto**. Inserisci la tua email e scegli una password per l'account Sugarmate, poi clicca **Avanti**. Dopo qualche minuto inizieranno ad arrivare i dati di glicemia.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_021.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_022.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_023.png)

---

## 7. Attiva la skill Sugarmate su Alexa

Apri l'app **Amazon Alexa**, cerca la skill **Sugarmate**, seleziona **Attiva** e inserisci email e password del tuo account Sugarmate.

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_024.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_025.png)

![](images/alexa-con-app-dexcom-g5-o-xdrip/image_026.png)

---

## Usare Alexa

Puoi chiedere:

- *"Alexa, chiedi a Sugarmate quanto è l'ultimo valore"*
- *"Alexa, chiedi a Sugarmate quanto ho di glicemia"*
