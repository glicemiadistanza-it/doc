# App Dexcom, Minimed o CamAPS come compagna di xDrip+

Questa guida spiega come usare xDrip+ insieme all'app ufficiale del sensore G6, G7, ONE, Minimed Guardian o CamAPS. xDrip+ riceve la glicemia ascoltando le notifiche dell'app master, **senza interferire con il sensore**.

Questo metodo permette di aggiungere a xDrip+ le funzioni che mancano all'app ufficiale:
- Allarmi personalizzabili per fascia oraria
- Glicemia vocale
- Widget sulla schermata principale e di blocco
- Smartwatch (senza dipendere dai server del fornitore)
- Follower aggiuntivi via xDrip+ Sync, indipendenti dai server Dexcom o CareLink

> ⚠️ Con **Dexcom ONE** funziona soltanto se ricevi le notifiche di glicemia ogni 5 minuti sul telefono.

## 1. Installa xDrip+

Segui la [guida base di installazione](./installare-xdrip-android).

> ⚠️ **Non** provare a collegare xDrip+ direttamente al sensore: come sorgente dati userai l'app ufficiale.

## 2. Configura xDrip+ come compagno

1. Quando compare il menu della sorgente dati, scorri verso il basso e seleziona **Companion App**.
2. In alternativa, vai in **Menu → Impostazioni → Dati hardware di origine** e scegli **Companion App**.
3. Se xDrip+ chiede di inizializzare il sensore, rispondi **NON OGGI**: non è necessario, è solo una schermata formale.

Entro qualche minuto la glicemia comparirà in xDrip+.

## 3. Imposta come master (opzionale ma consigliato)

In xDrip+ vai in **Impostazioni → xDrip+ Sync → Imposta come master**. Così, se i server Dexcom o CareLink hanno problemi, potrai usare un altro telefono o un xDrip+ come follower locale senza dipendere da internet.

## 4. Collega lo smartwatch (opzionale)

- **Xiaomi Mi Band / Amazfit:** vedi la [guida WatchDrip+](./xdrip-e-watchdrip)
- **Android Wear OS:** vedi la [guida per Wear OS](./dexcom-xdrip-glimp-on-wear-watch)
- **Fitbit:** vedi la [guida Fitbit](../fitbit/fitbit-le-glicemie-di-dexcom-spike-xdrip-o-nightscout-su-smartwach-versa-e-ionic)
