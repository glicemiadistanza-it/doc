# Glicemia su smartwatch Garmin tramite Nightscout

Questa guida spiega come visualizzare i valori di glicemia trasmessi da Nightscout sui modelli Garmin compatibili, tramite le app disponibili su **Connect IQ** (lo store ufficiale di Garmin).

Traduzione e integrazione della guida originale di Paweł Babańczyk: `http://nightscout.pl/smartwatch/garmin/`

Autore: Gianluca Curci.

Dispositivi confermati dalla comunità:
- Vivoactive HR
- Garmin Fenix 3, Fenix 5
- Forerunner 630, 735XT, 750

Le istruzioni seguenti si basano sul modello **Forerunner 735XT** su Android. Su iPhone il procedimento è analogo tramite l'app Garmin Connect da App Store.

---

## 1. Installa Garmin Connect

Installa l'app **Garmin Connect** dal Google Play Store (o App Store su iPhone).

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_001.png)

---

## 2. Crea un account e abbina il dispositivo

Apri l'app, crea un account Garmin o accedi se ne hai già uno. Questo account registrerà le sessioni sportive e i dati del dispositivo, ma non i valori di glicemia.

Abbina il tuo Garmin: vai in **Gestione dispositivi → Aggiungi dispositivo**, seleziona il tuo modello dalla lista (o usa **Cerca tutti i dispositivi compatibili**) e segui le istruzioni a schermo.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_002.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_003.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_004.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_005.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_006.png)

---

## 3. Attiva la modalità di associazione sul Garmin

Vai nelle impostazioni Bluetooth del dispositivo Garmin (consulta il manuale del tuo modello) e abilita la modalità di associazione. L'app avvierà la prima sincronizzazione in automatico.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_007.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_008.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_009.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_010.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_011.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_012.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_013.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_014.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_015.png)

---

## 4. Apri Connect IQ Store

Nell'app Garmin Connect, apri il menu in alto a sinistra (tre linee) e seleziona **Store Connect IQ**.

> ℹ️ **Nota**: In Connect IQ puoi trovare sia **widget** sia **applicazioni**:
> - I **widget** sono disponibili nel menu rapido dell'orologio e si chiudono automaticamente dopo qualche secondo.
> - Le **applicazioni** rimangono attive sullo schermo più a lungo.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_016.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_017.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_018.png)

---

## 5. Cerca e scarica l'app o il widget Nightscout

Cerca nel Connect IQ Store le app o i widget compatibili con Nightscout. Le due più diffuse sono:

### Widget e app di Phimpy
Cerca "Nightscout" o "Phimpy" nel Connect IQ Store.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_038.png)

### CGM Widget di Andreas-May
Cerca "CGM Widget" o "Andreas-May" nel Connect IQ Store.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_039.png)

Seleziona quello che preferisci, clicca **Scarica** e accetta i termini e le autorizzazioni.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_019.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_020.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_021.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_022.png)

---

## 6. Sincronizza il dispositivo

Torna alla schermata principale di Garmin Connect e clicca il tasto **Sincronizza** in alto a destra. Attendi il completamento.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_023.png)

---

## 7. Configura il widget o l'app

Clicca sull'icona del tuo dispositivo nella schermata principale dell'app, poi vai in **Activities & App Management**. Cerca il widget o l'app appena installata e clicca su **Impostazioni**.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_024.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_025.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_026.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_027.png)

### Configurazione widget Nightscout (di Phimpy)

Inserisci i seguenti parametri:

- **Site Name** — solo il nome del sito, senza l'estensione Azure o Heroku (es. `birillo`)
- **Host** — seleziona `azure` o `heroku` in base al tuo Nightscout
- **Units** — l'unità di misura preferita (`mg/dL` o `mmol/L`)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_028.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_029.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_030.png)

### Configurazione CGM Widget (di Andreas-May)

Inserisci la stringa completa comprensiva di dominio (es. `https://birillo.herokuapp.com`). Puoi anche configurare l'unità di misura e i limiti del range target.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_033.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_034.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_035.png)

---

## 8. Sincronizza di nuovo e verifica

Torna alla schermata principale di Garmin Connect e sincronizza nuovamente il dispositivo. Trova il widget sul tuo Garmin: dopo qualche minuto dovrebbe apparire il valore di glicemia corrente.

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_031.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_032.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_036.png)

![](images/come-leggere-la-glicemia-con-i-dispositivi-garmin-1/image_037.png)
