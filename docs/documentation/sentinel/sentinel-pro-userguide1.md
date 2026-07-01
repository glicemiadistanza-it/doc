# Sentinel Pro — Guida utenti

**Versione:** 0.1.2  
**Traduzione e adattamento:** glicemiadistanza.it (by Ryan Chen)

![](images/sentinel-pro-userguide1/image_001.png)

## 1. Caratteristiche

**Sorgenti dati supportate:** Nightscout, Dexcom Share, xDrip+, Diabox

**Orologi supportati:** Versa, Versa 2, Versa Lite, Ionic

![](images/sentinel-pro-userguide1/image_002.png)

![](images/sentinel-pro-userguide1/image_003.png)

**Funzionalità principali:**
- Monitoraggio da 1 a 3 persone
- Integrazione con Nightscout Careportal
- Visualizzazione di: CHO attivi, ultimo bolo, insulina attiva (IOB), ultimo controllo capillare
- Grafico della glicemia: 30 min, 1h, 2h
- Contapassi giornalieri e battito cardiaco

**Allarmi:**
- Allarme glucosio alto
- Allarme glucosio basso
- Allarme Delta crescente (soglia definita dall'utente)
- Allarme Delta calante (soglia definita dall'utente)
- Allarme freccia in su (tendenza)
- Allarme freccia in giù (tendenza)
- Allarme dati vecchi (soglia definita dall'utente)
- Allarme Ninja (nuovo): nessun messaggio pop-up né tasto di conferma

![](images/sentinel-pro-userguide1/image_004.png)

![](images/sentinel-pro-userguide1/image_005.png)

## 2. Visualizzazione del quadrante

Gli elementi principali del quadrante sono:

- **Glicemia da sensore** — visualizzabile in mg/dL o mmol/L
- **Carboidrati attivi (COB)** — dati provenienti da Nightscout
- **Delta glicemico** — differenza tra 2 valori glicemici consecutivi
- **Insulina attiva (IOB)** — dati provenienti da Nightscout
- **Tempo dall'ultima lettura** — *[testo non recuperabile dalla conversione PDF — consultare la documentazione originale di Sentinel]*
- **Freccia di tendenza** — direzione e velocità di variazione della glicemia

![](images/sentinel-pro-userguide1/image_006.png)

- **Contapassi (STEPS)** — passi giornalieri
- **Grafico** — visualizzabile a 30 min, 1h o 2h
- **Battito cardiaco**
- **Data**
- **Batteria orologio**
- **Indicatore di connessione** — mostra la richiesta e ricezione dati tra orologio e telefono

![](images/sentinel-pro-userguide1/image_007.png)

- **Ora** — formato 12HR o 24HR

![](images/sentinel-pro-userguide1/image_008.png)

![](images/sentinel-pro-userguide1/image_009.png)

- **Trattamenti Nightscout** — invio trattamenti tramite Careportal

![](images/sentinel-pro-userguide1/image_010.png)

![](images/sentinel-pro-userguide1/image_011.png)

## 3. Funzioni principali

![](images/sentinel-pro-userguide1/image_012.png)

![](images/sentinel-pro-userguide1/image_013.png)

![](images/sentinel-pro-userguide1/image_014.png)

- **Tasto Account**: accesso allo storico (history) e a Nightscout Careportal per l'inserimento dei trattamenti.

![](images/sentinel-pro-userguide1/image_015.png)

- **Tasto Grafico**: cambia il grafico tra 30 min, 1h e 2h.

![](images/sentinel-pro-userguide1/image_016.png)

![](images/sentinel-pro-userguide1/image_017.png)

![](images/sentinel-pro-userguide1/image_018.png)

![](images/sentinel-pro-userguide1/image_019.png)

- **Allarme Ninja**: annulla tutti gli altri allarmi. Si imposta nelle impostazioni dell'app del telefono. Durante un allarme attivo, tieni premuto il pulsante per attivare la funzione Ninja. Il quadrato verde sul quadrante indica che l'allarme Ninja è attivo.

![](images/sentinel-pro-userguide1/image_020.png)

![](images/sentinel-pro-userguide1/image_021.png)

![](images/sentinel-pro-userguide1/image_022.png)

![](images/sentinel-pro-userguide1/image_023.png)

## 4. Indicatori — Connessione e comunicazione

![](images/sentinel-pro-userguide1/image_024.png)

![](images/sentinel-pro-userguide1/image_025.png)

### Stato Peersocket (canale di comunicazione orologio ↔ telefono)

| Stato Peersocket | Modalità | Operazione |
|---|---|---|
| APERTO | Usa messaggi | Richiesta dati / Ricezione dati |
| CHIUSO | Trasferimento file | Richiesta dati / Prova trasferimento files |
| ERRORE | — | Fallimento richiesta |
| NESSUN STATO | — | Standby |

![](images/sentinel-pro-userguide1/image_026.png)

### Uso con Nightscout protetto da token

1. Vai alla tua pagina Nightscout e clicca su **NS-DatiMongo**. Copia il token generato.

![](images/sentinel-pro-userguide1/image_027.png)

![](images/sentinel-pro-userguide1/image_028.png)

2. Incolla il token nelle impostazioni del quadrante del telefono, nel campo **NS Careportal Token**, e salva.

![](images/sentinel-pro-userguide1/image_029.png)

![](images/sentinel-pro-userguide1/image_030.png)

![](images/sentinel-pro-userguide1/image_031.png)

3. Premi **Aggiungi nuovo soggetto**, scrivi il nome e nel campo **ruoli** scrivi `admin`.

![](images/sentinel-pro-userguide1/image_032.png)

![](images/sentinel-pro-userguide1/image_033.png)

4. Copia il codice sotto **Gettone d'accesso**.

![](images/sentinel-pro-userguide1/image_034.png)

![](images/sentinel-pro-userguide1/image_035.png)

![](images/sentinel-pro-userguide1/image_036.png)

## 5. Careportal

- Prima imposta tutto, poi abilita **Activate**.

![](images/sentinel-pro-userguide1/image_037.png)

- Si possono usare contemporaneamente sia Dexcom Share che Nightscout: in questo modo avrai le glicemie da Dexcom e i trattamenti da Nightscout tramite NS Careportal.

![](images/sentinel-pro-userguide1/image_038.png)

![](images/sentinel-pro-userguide1/image_039.png)

![](images/sentinel-pro-userguide1/image_040.png)

- È presente un allarme automatico se Dexcom Share non è disponibile.

![](images/sentinel-pro-userguide1/image_041.png)

![](images/sentinel-pro-userguide1/image_042.png)

- Nell'URL di Nightscout, non inserire `/` alla fine: usa solo `.com`.

![](images/sentinel-pro-userguide1/image_043.png)

![](images/sentinel-pro-userguide1/image_044.png)

- Ogni account ha le proprie soglie di allarme.

![](images/sentinel-pro-userguide1/image_045.png)

![](images/sentinel-pro-userguide1/image_046.png)

![](images/sentinel-pro-userguide1/image_047.png)

![](images/sentinel-pro-userguide1/image_048.png)

![](images/sentinel-pro-userguide1/image_049.png)

- Se usi Dexcom Share come sorgente dati, devi attivare la condivisione (Share) dall'app Dexcom.

![](images/sentinel-pro-userguide1/image_050.png)

![](images/sentinel-pro-userguide1/image_051.png)

- Dal telefono master, assicurati di avere almeno un telefono follower attivo.

![](images/sentinel-pro-userguide1/image_052.png)

![](images/sentinel-pro-userguide1/image_053.png)

![](images/sentinel-pro-userguide1/image_054.png)

![](images/sentinel-pro-userguide1/image_055.png)

![](images/sentinel-pro-userguide1/image_056.png)

> ⚠️ Prima di usare il quadrante, prenditi il tempo di inserire tutti i dati nelle impostazioni.

## Informazioni e supporto

![](images/sentinel-pro-userguide1/image_057.png)

![](images/sentinel-pro-userguide1/image_058.png)

Il quadrante Sentinel per il Fitbit è stato creato da Ryan Chen, papà di due bambini con diabete di tipo 1 (Ethan e Owen). Il progetto è ancora in sviluppo. Per domande o commenti, pubblica nella pagina Facebook del gruppo Sentinel:

`https://www.facebook.com/groups/3185325128159614/`

> ⚠️ *Questo quadrante è solo per supporto e non deve essere usato per prendere decisioni mediche.*

Preparati a eventuali errori di connessione che si verificheranno di tanto in tanto. Per risolvere i problemi più comuni:
1. Cambia quadrante e poi torna al quadrante Sentinel.
2. Se il problema persiste, riavvia l'app del telefono o il telefono stesso.

**Versioni disponibili:** Sentinel Pro, Sentinel Classic, Sentinel One, Sentinel Basic

![](images/sentinel-pro-userguide1/image_059.png)

![](images/sentinel-pro-userguide1/image_060.png)

Sentinel è gratuito per tutti. Per supportare il progetto: `https://paypal.me/ryanwchen`
