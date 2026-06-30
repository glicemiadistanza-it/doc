# Alexa e Nightscout in italiano

Questa guida spiega come far leggere ad **Alexa** (lo speaker Amazon) le glicemie di Nightscout in italiano.

Basata sulla documentazione ufficiale: `https://github.com/nightscout/cgm-remote-monitor/blob/master/lib/plugins/alexa-plugin.md`

**Requisiti:**
- Account Amazon
- Dispositivo Alexa registrato sull'account
- Sito Nightscout aggiornato alla versione 0.10.3 o superiore (verifica aprendo il sito → menu in alto a destra → scorri in basso)

![](images/alexa-e-nightscout-in-italiano/image_001.png)

---

## 1. Abilita il plugin Alexa su Nightscout

Accedi a Heroku, clicca sul nome della tua app, vai in **Settings → Reveal Config Vars** e aggiungi `alexa` alla variabile **ENABLE**. Salva.

![](images/alexa-e-nightscout-in-italiano/image_002.png)

![](images/alexa-e-nightscout-in-italiano/image_003.png)

---

## 2. Crea un account sviluppatore Amazon

Vai su `https://developer.amazon.com/it/` e registrati con i dati del tuo account Amazon. Accetta le condizioni di utilizzo.

![](images/alexa-e-nightscout-in-italiano/image_004.png)

---

## 3. Registra il tuo Alexa sull'account sviluppatore

Accedi ad Alexa con lo stesso account sviluppatore su `https://alexa.amazon.it`.

![](images/alexa-e-nightscout-in-italiano/image_005.png)

---

## 4. Crea una nuova Alexa Skill

1. Vai al portale sviluppatori Alexa: `https://developer.amazon.com/it/alexa`
2. Seleziona **Alexa Skills Kit**.
3. Clicca **Crea una Skill** in fondo alla pagina, poi **Crea un'abilità** nella console.
4. Assegna il nome **Nightscout** e imposta la lingua su italiano. Clicca **Crea abilità**.

![](images/alexa-e-nightscout-in-italiano/image_006.png)

![](images/alexa-e-nightscout-in-italiano/image_007.png)

![](images/alexa-e-nightscout-in-italiano/image_008.png)

![](images/alexa-e-nightscout-in-italiano/image_009.png)

---

## 5. Configura il modello di interazione

Nella nuova skill, clicca **Editor JSON**, cancella il contenuto esistente e incolla il seguente JSON:

![](images/alexa-e-nightscout-in-italiano/image_010.png)

```json
{
  "interactionModel": {
    "languageModel": {
      "invocationName": "nightscout",
      "intents": [
        {"name": "NSStatus", "slots": [], "samples": ["Come sta andando"]},
        {"name": "UploaderBattery", "slots": [], "samples": ["Quanta batteria ha ancora il mio dispositivo"]},
        {"name": "PumpBattery", "slots": [], "samples": ["Quanta batteria ha ancora il mio microinfusore"]},
        {"name": "LastLoop", "slots": [], "samples": ["Quando è stato ultimo loop"]},
        {"name": "MetricNow", "slots": [{"name": "metric", "type": "LIST_OF_METRICS"}], "samples": ["Quanto ha {metric}", "Quanto è {metric}", "Come è {metric}", "Quanto ha di {metric}"]},
        {"name": "InsulinRemaining", "slots": [{"name": "pwd", "type": "AMAZON.FirstName"}], "samples": ["Quanta insulina rimasta", "Quanta insulina ancora", "Quanta insulina {pwd} ha ancora"]}
      ],
      "types": [
        {"name": "LIST_OF_METRICS", "values": [
          {"name": {"value": "blood glucose", "synonyms": ["Valore", "Glicemia"]}},
          {"name": {"value": "bg", "synonyms": ["Glicemia"]}},
          {"name": {"value": "number", "synonyms": ["Numeri"]}},
          {"name": {"value": "iob"}},
          {"name": {"value": "insulin on board", "synonyms": ["Insulina attiva"]}},
          {"name": {"value": "current Basal", "synonyms": ["Basale attuale"]}},
          {"name": {"value": "basal", "synonyms": ["Basale"]}},
          {"name": {"value": "cob", "synonyms": ["Carboidrati"]}},
          {"name": {"value": "carbs on board", "synonyms": ["Carboidrati attivi"]}},
          {"name": {"value": "carbhoydrates on board", "synonyms": ["Cob"]}},
          {"name": {"value": "ar2 forecast", "synonyms": ["previsione ar2"]}},
          {"name": {"value": "forecast", "synonyms": ["Previsione", "Predizione", "Predizione loop"]}},
          {"name": {"value": "raw bg", "synonyms": ["dato grezzo"]}}
        ]}
      ]
    }
  }
}
```

Clicca **Salva modello**, poi **Costruisci modello** e attendi il completamento.

---

## 6. Collega la skill al tuo Nightscout

1. Nel menu a sinistra, clicca **Endpoint**.
2. Seleziona **HTTPS** e inserisci l'URL del tuo Nightscout in questo formato:
   `https://nomesito.herokuapp.com/api/v1/alexa`
3. Seleziona la seconda opzione nel menu a discesa sotto l'URL.
4. Clicca **Salva**.

![](images/alexa-e-nightscout-in-italiano/image_011.png)

![](images/alexa-e-nightscout-in-italiano/image_012.png)

---

## 7. Testa la skill

Vai alla pagina **Test** e abilita la skill. Ora puoi chiedere ad Alexa:

*"Alexa, chiedi a Nightscout come sta andando"*

![](images/alexa-e-nightscout-in-italiano/image_013.png)

![](images/alexa-e-nightscout-in-italiano/image_014.png)

---

*Ringraziamento ad Alessandro Rapellino per la traduzione e l'integrazione in italiano.*
