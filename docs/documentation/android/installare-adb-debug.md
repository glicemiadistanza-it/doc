# Installare ADB Debug

ADB (Android Debug Bridge, strumento che permette di comunicare con un dispositivo Android dal computer) è necessario per alcune configurazioni avanzate.

## 1. Installare i driver universali

1. Scarica il pacchetto di driver per Windows da `https://adb.clockworkmod.com/`
2. Nella cartella Download, fai clic con il tasto destro su `UniversalAdbDriverSetup.msi` e seleziona **Esegui come amministratore**. Conferma.
3. Clicca **Next** più volte senza modificare i valori predefiniti, fino al completamento.

## 2. Abilitare il Debug ADB sul dispositivo Android

1. Vai in **Impostazioni → Sistema → Informazioni → Numero build**.
2. Tocca ripetutamente il numero build finché non appare il messaggio **"Ora sei uno sviluppatore"**.
3. Torna in **Impostazioni**: è ora visibile la voce **Opzioni sviluppatore**. Aprila e abilita **Debug ADB**.

## 3. Collegare il dispositivo al computer

1. Collega il dispositivo tramite cavo USB al computer.
2. Aspetta che il driver si installi.
3. Se il dispositivo chiede l'autorizzazione, tocca **Consenti debug** e seleziona **Autorizza sempre questo computer**.
4. Se il dispositivo non viene rilevato automaticamente, apri **Gestione periferiche** e seleziona **ADB Device** manualmente, oppure installa il driver specifico del tuo dispositivo.

## 4. Installare ADB

1. Scarica ADB da `https://developer.android.com/studio/releases/platform-tools#download`
2. Crea una cartella nella radice del disco C: e chiamala `ADB`, ovvero `C:\ADB`.
3. Copia il contenuto della cartella `platform-tools` del file scaricato in `C:\ADB`.

## 5. Verificare l'installazione

1. Nella barra di ricerca di Windows, scrivi `cmd`.
2. Fai clic con il tasto destro su **Prompt dei comandi** e seleziona **Esegui come amministratore**.
3. Al prompt, scrivi `cd \adb` e premi **Invio** (attenzione allo spazio tra `cd` e `adb`).
4. Al prompt `C:\adb>`, scrivi `adb` e premi **Invio**.
   - Se compare un lungo elenco di comandi, ADB è installato correttamente.
5. Scrivi `adb devices` e premi **Invio**.
   - Se compare un dispositivo nell'elenco (anche con un nome diverso), il driver USB è installato correttamente.

Sei pronto per eseguire il debug su Android!
