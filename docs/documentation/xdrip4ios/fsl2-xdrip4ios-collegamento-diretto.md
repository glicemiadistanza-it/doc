# Ricevere le letture da FSL2 con xDrip4iOS

> ℹ️ **Nota**: L'app aggiornata del fornitore permette la lettura in continuo senza scansionare: usare xDrip4iOS solo per questo scopo non è più obbligatorio. xDrip4iOS non manda dati ai server del fornitore.

Questa guida passo passo spiega come installare l'app xDrip4iOS per leggere i dati in continuo da FSL2 (sensore glicemico) tramite iPhone.

È necessario un iPhone compatibile con l'app del fornitore (minimo iPhone 7, iOS 13.2).

> ⚠️ **Attenzione**: L'uso di questa guida potrebbe disabilitare allarmi e letture in continuo del lettore o dell'app del fornitore, forse senza possibilità di ripristinarli. Questa modalità di utilizzo del sensore non è consentita dal produttore. Potrai comunque usare l'app del fornitore o il lettore per leggere il sensore manualmente. È consigliato fare le prove con un sensore vicino alla scadenza. L'utilizzo è soggetto all'assunzione di esclusiva responsabilità personale.

## 1. Installare xDrip4iOS

Segui la [guida xDrip4iOS](./installare-xdrip4ios).

## 2. Disabilitare il Bluetooth per l'app del fornitore

Il sensore deve essere stato avviato (dal lettore o dall'app del fornitore) da più di un'ora. Assicurati che funzioni correttamente prima di procedere.

Nelle impostazioni di iOS, scorri fino all'app del fornitore e disabilita il **Bluetooth**. Una volta fatto, l'app del fornitore o il lettore potrebbero non essere più in grado di ricevere il segnale Bluetooth, né gli allarmi.

Nelle **Impostazioni** di iOS, scorri l'elenco delle app fino a trovare quella del fornitore:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_002.png)

Nella pagina dell'app, disattiva l'interruttore **Bluetooth**:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_001.png)

## 3. Abbinare il sensore a xDrip4iOS

1. In xDrip4iOS, apri la scheda **Bluetooth** (icona in basso al centro).
2. Tocca **+** (in alto a destra) e seleziona **CGM** → **OK**.
3. Scegli **Libre 2** → **OK**.

La schermata principale di xDrip4iOS, ancora senza dati: la scheda **Bluetooth** è in basso al centro:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_003.png)

La scheda **Bluetooth** è vuota: tocca **+** in alto a destra:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_004.png)

In **Select Device Type**, seleziona **CGM** e tocca **OK**:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_005.png)

In **Select Transmitter Type**, scorri fino a **Libre 2** e tocca **OK**:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_006.png)

4. Tocca **Scan** (in alto a sinistra) e autorizza xDrip4iOS a usare il Bluetooth.

Nella scheda del dispositivo appena creato, con stato **Ready to Scan**, tocca **Scan**:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_007.png)

Alla richiesta di utilizzo del Bluetooth, tocca **OK**:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_008.png)

5. Scansiona il sensore con il telefono come con l'app del fornitore (avvicina la parte superiore del telefono al sensore).

Compare l'invito **Pronto per la scansione**: avvicina la parte superiore del telefono al sensore:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_009.png)

6. Lascia lo schermo aperto finché non compare il messaggio **"Warning! Connected to L\*\*\*\* 2"**. Il sensore è collegato.

Dopo la scansione, un avviso ricorda di tenere xDrip4iOS aperto in primo piano finché la connessione non è stabilita:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_010.png)

Quando compare l'avviso **Warning! Connected...**, il sensore è collegato: tocca **OK**:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_011.png)

Una volta collegato, il sensore compare nella lista dei dispositivi Bluetooth. Per usare l'algoritmo nativo, abilita **Algorithm** (se presente: nelle versioni più recenti potrebbe non esserci più). Se disabilitato, dovrai calibrare. Entro pochi minuti la glicemia dovrebbe essere visibile.

Il sensore risulta **Connected** nella lista Bluetooth; nella sua scheda trovi l'opzione per l'algoritmo nativo, il numero di serie e la data di avvio:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_012.png)

Entro pochi minuti la glicemia compare nella schermata principale:

![](images/fsl2-xdrip4ios-collegamento-diretto/image_013.png)

---

Se necessario, per ripristinare l'app del fornitore, elimina il FSL2 da xDrip4iOS e riabilita il Bluetooth.

Se il telefono è troppo lontano dal sensore ci saranno letture mancanti. Non possono essere recuperate con xDrip4iOS, ma sono disponibili fino a 8 ore dopo con l'app originale.

Per condividere la glicemia e usare smartwatch diversi da Apple Watch (Fitbit, Garmin, Samsung Gear), è necessario [Nightscout](../../articles/nightscout) o [Gluroo](../gluroo/gluroo).
