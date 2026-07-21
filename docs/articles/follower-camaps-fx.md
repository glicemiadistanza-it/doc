# CamAPS FX: far ripartire follower e smartwatch

Il sistema per la terapia insulinica **mylife YpsoPump** può essere utilizzato come sistema di erogazione automatica e adattativa dell'insulina (**mylife Loop**) in associazione con l'app **mylife CamAPS FX** e un sensore compatibile (Dexcom G6, Dexcom G7 o FSL3).

Questo articolo offre una soluzione alternativa, **non ufficiale**, per riavere la glicemia sullo smartwatch e la condivisione dei dati a distanza tramite xDrip, Nightscout, M5Stack, Sugarmate e anche il sistema Dexcom Share (quest'ultimo solo se era già abilitato in precedenza).

> ⚠️ **Attenzione**: la procedura descritta funziona **solo con telefoni Android**. L'app CamAPS FX oggi esiste anche per iPhone, ma questa soluzione con xDrip non è applicabile su iOS.

> ℹ️ **Nota**: qui parliamo solo della condivisione dei dati, non delle funzionalità del microinfusore.

## 1. Cosa succede quando attivi CamAPS FX

Con mylife Loop l'app CamAPS FX **sostituisce l'app Dexcom**, che va eliminata: il sensore non può più collegarsi all'app ufficiale. Di conseguenza si interrompe anche il servizio **Dexcom Share** insieme alle app Follow dei follower — e con loro tutto quello che ci sta attorno: Nightscout, xDrip, Sugarmate, M5Stack, quadranti sullo smartwatch, Alexa e così via. Chi già usava queste soluzioni si accorgerà che, almeno per il momento, si è fermato tutto.

Il sistema ha una sua modalità di condivisione integrata, usando la stessa app **CamAPS FX in modalità Companion** su un secondo telefono: per molti è sufficiente, ma ognuno ha le sue esigenze e potrebbe non esserlo.

## 2. Far ripartire tutto con xDrip

Niente paura: in teoria è possibile — ma non scontato — far ripartire tutto con **xDrip impostato come Companion App**.

Installa xDrip **sullo stesso telefono** dove è installata l'app CamAPS FX e segui la guida [xDrip come compagno dell'app MASTER](../documentation/xdrip/xdrip-compagno).

## 3. Rimandare i dati a follower e servizi

Quando xDrip riceve i valori, puoi:

- **rimandarli nel sistema Dexcom Share**, mantenendo funzionante l'app Follow dei follower: vai in **Impostazioni → Cloud Upload → Upload in Dexcom Share Server**, abilita il caricamento e inserisci le credenziali dell'account Dexcom. Il nome utente non può essere un numero di telefono (in quel caso usa un account dipendente con nome utente testuale) e l'opzione **Dexcom USA based account** va attivata solo per gli account USA;
- **inviarli a [Nightscout](./nightscout)** da **Impostazioni → Cloud Upload → API Upload (REST)**, oppure a [Tidepool](../documentation/xdrip/condividere-i-dati-di-xdrip-con-tidepool);
- **creare un altro follower xDrip** sfruttando il sistema di condivisione xDrip Sync: vedi [Master/Follower con xDrip](../documentation/xdrip/masterfollower) (serve xDrip `2024.07.23` o successivo).

Per lo smartwatch, una volta che xDrip riceve i valori, valgono le soluzioni della panoramica [Glicemia al polso: quale smartwatch?](./glicemia-al-polso).

## 4. Con quali sensori funziona?

I test con esito positivo sono stati fatti con il **Dexcom G6**, ma l'app CamAPS FX funziona anche con **FSL3** (e oggi supporta anche il **Dexcom G7**): la procedura con xDrip come Companion App è la stessa.
