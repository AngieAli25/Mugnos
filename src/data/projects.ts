export type ProjectCategory =
  | 'Ingegneria Strutturale'
  | 'Ingegneria Infrastrutturale'
  | 'Ingegneria Geotecnica'

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'list'; items: string[] }

export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  year: number
  location: string
  cover: string
  gallery: string[]
  client?: string
  scope: string[]
  duration?: string
  readTime: number
  article: ArticleBlock[]
}

export const PROJECTS: Project[] = [
  {
    id: 'viadotto-cannavino',
    title: 'Viadotto Cannavino SS280',
    description:
      'Adeguamento sismico e retrofit strutturale di un viadotto autostradale di 1.2 km in zona ad alto rischio sismico.',
    category: 'Ingegneria Infrastrutturale',
    year: 2022,
    location: 'Calabria',
    client: 'ANAS S.p.A.',
    duration: '28 mesi',
    readTime: 6,
    scope: [
      'Diagnostica strutturale avanzata',
      'Modellazione FEM 3D non-lineare',
      'Retrofit con CFRP e isolatori sismici',
      'Direzione lavori e collaudo dinamico',
    ],
    cover: '/images/viaduct-city.jpg',
    gallery: [
      '/images/viaduct-city.jpg',
      '/images/highway-bridges.jpg',
      '/images/low-angle-greyscale-concrete-bridge-sunlight-daytime.jpg',
      '/images/ponte_bianco-nero.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Il Viadotto Cannavino, inaugurato nel 1972, è un'opera strategica della SS280 che collega Cosenza all'autostrada A2. Lungo 1.250 metri e composto da 23 campate, attraversa una valle tettonicamente attiva in zona sismica 1. Nel 2018 una verifica preliminare ANAS rilevò un degrado strutturale significativo: carbonatazione del calcestruzzo, corrosione delle armature longitudinali, deficit sismico rispetto agli Eurocodici aggiornati.",
      },
      {
        type: 'heading',
        text: 'La sfida ingegneristica',
      },
      {
        type: 'paragraph',
        text:
          "Il nostro mandato è stato di trasformare un'opera obsoleta in una infrastruttura conforme agli standard del 2050, garantendo continuità di esercizio durante i lavori. La complessità non era solo tecnica: significava operare con cantieri sospesi a 60 metri d'altezza, in un'area soggetta a frane stagionali e con traffico autostradale mai interrotto.",
      },
      {
        type: 'paragraph',
        text:
          "Il primo passo è stato una diagnostica integrale dell'opera: 480 carotaggi, 1.200 prove sclerometriche, mappatura termografica, scansione georadar dei tiranti. I dati hanno alimentato un modello FEM tridimensionale ad alta densità, validato attraverso prove dinamiche con vibrodina a massa eccentrica.",
      },
      {
        type: 'quote',
        text:
          "Non si tratta solo di rinforzare strutture: si tratta di estendere la vita utile di opere strategiche per altri cinquant'anni, proteggendole da scenari sismici che nel 1972 non erano nemmeno concepibili.",
        author: 'Prof. Elio Lo Giudice',
      },
      {
        type: 'heading',
        text: 'Le soluzioni adottate',
      },
      {
        type: 'paragraph',
        text:
          "Il progetto di intervento ha previsto tre linee operative integrate: (1) sostituzione dei sistemi di vincolo con isolatori sismici elastomerici ad alto smorzamento, in grado di disaccoppiare l'impalcato dalle pile durante un evento sismico di magnitudo 7.0; (2) rinforzo a flessione e taglio delle pile con fasciature in fibra di carbonio (CFRP) ad alto modulo elastico; (3) ripristino corticale degli elementi degradati con malte tixotropiche fibrorinforzate.",
      },
      {
        type: 'list',
        items: [
          'Installazione di 46 isolatori sismici HDRB',
          'Rinforzo CFRP su 23 pile per oltre 4.200 m² di fasciatura',
          'Ripristino di 18.500 m² di calcestruzzo corticale',
          'Installazione di sistema di monitoraggio continuo con 128 sensori',
        ],
      },
      {
        type: 'heading',
        text: 'Risultati misurabili',
      },
      {
        type: 'paragraph',
        text:
          "Il collaudo dinamico post-intervento ha dimostrato un incremento del 340% della capacità dissipativa e un coefficiente di sicurezza sismico portato da 0.42 a 1.18. Il viadotto è oggi monitorato in continuo da un sistema IoT con fibre ottiche distribuite: ogni vibrazione, deformazione e cedimento viene registrato e processato in tempo reale dal centro di controllo ANAS.",
      },
      {
        type: 'paragraph',
        text:
          "L'intervento è stato completato in 28 mesi senza alcuna interruzione del traffico autostradale, grazie a una pianificazione dei cantieri per fasi notturne e a un sistema di pre-fabbricazione dei rinforzi presso lo stabilimento di Cosenza.",
      },
    ],
  },

  {
    id: 'stadio-olimpico',
    title: 'Verifica Sismica Stadio Olimpico',
    description:
      'Analisi sismica non-lineare e certificazione strutturale di un impianto sportivo di rilievo nazionale.',
    category: 'Ingegneria Strutturale',
    year: 2023,
    location: 'Roma',
    client: 'Sport e Salute S.p.A.',
    duration: '14 mesi',
    readTime: 5,
    scope: [
      'Rilievo geometrico-strutturale completo',
      'Analisi push-over e time-history',
      'Identificazione dinamica sperimentale',
      'Certificazione di sicurezza sismica',
    ],
    cover: '/images/structure-tokyo-tower.jpg',
    gallery: [
      '/images/structure-tokyo-tower.jpg',
      '/images/highway-bridges.jpg',
      '/images/low-angle-greyscale-concrete-bridge-sunlight-daytime.jpg',
      '/images/ponte_bianco-nero.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Lo Stadio Olimpico di Roma, originariamente inaugurato nel 1937 e completamente ristrutturato per Italia '90, è una delle infrastrutture sportive più rappresentative d'Europa. Nel 2022 il committente ha richiesto una verifica sismica integrale ai fini della certificazione di agibilità per eventi internazionali di Categoria A UEFA.",
      },
      {
        type: 'heading',
        text: 'Approccio metodologico',
      },
      {
        type: 'paragraph',
        text:
          "L'opera presenta una complessità tipologica unica: tribune in calcestruzzo armato precompresso, copertura in struttura tensile con anelli di compressione/trazione, fondazioni miste su pali e platee. Abbiamo strutturato la verifica in tre fasi parallele: identificazione dinamica sperimentale, modellazione FEM globale, analisi locali su elementi critici.",
      },
      {
        type: 'quote',
        text:
          "Un impianto sportivo non è solo una costruzione: è un sistema dinamico complesso, dove decine di migliaia di persone interagiscono con la struttura in modo continuo durante gli eventi.",
        author: 'Prof. Giuseppe Mugnos',
      },
      {
        type: 'heading',
        text: 'Identificazione dinamica',
      },
      {
        type: 'paragraph',
        text:
          "La campagna sperimentale ha utilizzato 96 accelerometri sismici a banda larga, distribuiti sull'intera struttura per dieci giorni di acquisizione continua. I dati hanno permesso di identificare i primi 24 modi di vibrare dell'impianto, validare il modello numerico e calibrarne smorzamento e rigidezze.",
      },
      {
        type: 'list',
        items: [
          '96 accelerometri sismici ad alta sensibilità',
          '10 giorni di acquisizione continua, 240h di registrazione',
          '24 modi di vibrare identificati sperimentalmente',
          'Errore di calibrazione modale inferiore al 3%',
        ],
      },
      {
        type: 'paragraph',
        text:
          "L'analisi finale ha confermato la conformità dello stadio agli Eurocodici aggiornati con un margine di sicurezza superiore al 25% rispetto ai requisiti minimi normativi. Sono state inoltre identificate tre aree per interventi migliorativi puntuali, attualmente in corso di progettazione.",
      },
    ],
  },

  {
    id: 'ponte-sele',
    title: 'Ponte sul Fiume Sele',
    description:
      'Progettazione esecutiva e direzione lavori di un ponte ad arco da 280 m di luce libera.',
    category: 'Ingegneria Infrastrutturale',
    year: 2020,
    location: 'Salerno',
    client: 'Provincia di Salerno',
    duration: '36 mesi',
    readTime: 5,
    scope: [
      'Progettazione preliminare, definitiva ed esecutiva',
      'Calcolo strutturale ad arco a via inferiore',
      'Direzione lavori e alta sorveglianza',
      'Collaudo statico e dinamico',
    ],
    cover: '/images/highway-bridges.jpg',
    gallery: [
      '/images/highway-bridges.jpg',
      '/images/green-steel-arch-bridge-forest-covered-fog-gloomy-day.jpg',
      '/images/low-angle-view-old-bridge.jpg',
      '/images/ponte_bianco-nero.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Il nuovo ponte sul Fiume Sele rappresenta la più importante opera infrastrutturale realizzata dalla Provincia di Salerno nell'ultimo decennio. Con una luce libera di 280 metri e un impalcato sospeso a 45 metri sul livello del fiume, sostituisce un attraversamento del 1956 dichiarato non più adeguato ai carichi di traffico contemporaneo.",
      },
      {
        type: 'heading',
        text: 'Una scelta tipologica strategica',
      },
      {
        type: 'paragraph',
        text:
          "La scelta del ponte ad arco a via inferiore (bow-string) è stata dettata da tre vincoli: (1) impossibilità di realizzare pile in alveo per ragioni idrauliche; (2) necessità di mantenere libero il pelo libero anche in caso di piena bicentenaria; (3) esigenza paesaggistica di un'opera con basso impatto visivo dalla valle sottostante.",
      },
      {
        type: 'quote',
        text:
          "Ogni ponte è una negoziazione tra forze: la forza della struttura, la forza dell'acqua, la forza del paesaggio. Vince chi sa ascoltare tutte e tre.",
      },
      {
        type: 'heading',
        text: 'Calcolo e modellazione',
      },
      {
        type: 'paragraph',
        text:
          "Il modello strutturale ha integrato analisi statiche non-lineari, analisi dinamiche modali e analisi di fatica per oltre 2 milioni di cicli di carico previsti. Particolare attenzione è stata dedicata al comportamento aerodinamico: simulazioni CFD e prove in galleria del vento hanno confermato la stabilità dell'impalcato fino a 165 km/h di vento trasversale.",
      },
      {
        type: 'list',
        items: [
          '280 m di luce libera senza pile in alveo',
          '2.400 tonnellate di acciaio strutturale S460',
          '46 pendini in trefoli di acciaio armonico',
          'Vita utile certificata: 100 anni',
        ],
      },
    ],
  },

  {
    id: 'tunnel-genova',
    title: 'Tunnel Alta Velocità',
    description:
      'Analisi geotecnica e progettazione strutturale di una galleria ferroviaria con metodo NATM.',
    category: 'Ingegneria Infrastrutturale',
    year: 2024,
    location: 'Genova',
    client: 'RFI - Rete Ferroviaria Italiana',
    duration: 'In corso',
    readTime: 6,
    scope: [
      'Indagini geognostiche e caratterizzazione ammasso',
      'Progettazione con metodo NATM',
      'Convergenza-confinamento e support design',
      'Monitoraggio durante lo scavo',
    ],
    cover: '/images/galleria.png',
    gallery: [
      '/images/galleria.png',
      '/images/galleria, bianconero.png',
      '/images/highway-bridges.jpg',
      '/images/low-angle-greyscale-concrete-bridge-sunlight-daytime.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "La nuova galleria di valico per l'alta velocità Genova-Milano è una delle opere ferroviarie più complesse mai realizzate in Italia: 27 km di sviluppo, coperture massime di 1.200 metri, attraversamento di formazioni geologiche estremamente eterogenee, dai calcari mesozoici ai flysch terziari.",
      },
      {
        type: 'heading',
        text: 'Caratterizzazione geologica',
      },
      {
        type: 'paragraph',
        text:
          "L'incarico ha richiesto una caratterizzazione geotecnica senza precedenti: 84 sondaggi geognostici profondi fino a 850 metri, 12 pozzi pilota, tomografia sismica a riflessione, monitoraggio in continuo della pressione di falda. I dati hanno alimentato un modello geomeccanico 3D dell'ammasso lungo l'intero tracciato.",
      },
      {
        type: 'heading',
        text: 'Metodo NATM evolutivo',
      },
      {
        type: 'paragraph',
        text:
          "L'applicazione del New Austrian Tunneling Method (NATM) è stata adattata in modo evolutivo: il rivestimento di prima fase è progettato in funzione delle condizioni reali rilevate al fronte di scavo, con classi di scavo che vengono assegnate giornalmente sulla base di rilievi geomeccanici e misure di convergenza.",
      },
      {
        type: 'quote',
        text:
          "Scavare una galleria è come dialogare con la terra: non si può imporre, si deve negoziare. Il NATM evolutivo è la nostra grammatica di questa negoziazione.",
      },
      {
        type: 'list',
        items: [
          '27 km di sviluppo complessivo',
          '1.200 m di copertura massima',
          '6 classi di scavo dinamicamente assegnate',
          'Sistema di monitoraggio con 4.800 punti di misura',
        ],
      },
    ],
  },

  {
    id: 'palazzo-firenze',
    title: 'Ristrutturazione Palazzo Storico',
    description:
      'Consolidamento strutturale e adeguamento sismico di un edificio monumentale del XV secolo.',
    category: 'Ingegneria Strutturale',
    year: 2021,
    location: 'Firenze',
    client: 'Soprintendenza per il Patrimonio Storico-Artistico',
    duration: '22 mesi',
    readTime: 5,
    scope: [
      'Indagine diagnostica non-invasiva',
      'Modellazione strutturale di murature storiche',
      'Consolidamento conservativo',
      'Miglioramento sismico nel rispetto del vincolo',
    ],
    cover: '/images/low-angle-view-old-bridge.jpg',
    gallery: [
      '/images/low-angle-view-old-bridge.jpg',
      '/images/structure-tokyo-tower.jpg',
      '/images/ponte_bianco-nero.jpg',
      '/images/vertical-shot-stone-bridge-field-green-yellow-grass-it.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Il palazzo, costruito tra il 1467 e il 1483, è un raro esempio di architettura civile fiorentina del primo Rinascimento. Sotto vincolo monumentale di prima categoria, presentava lesioni passanti negli archi del cortile centrale e una documentata vulnerabilità sismica.",
      },
      {
        type: 'heading',
        text: 'Diagnosi non invasiva',
      },
      {
        type: 'paragraph',
        text:
          "L'indagine ha utilizzato esclusivamente tecnologie non-distruttive: termografia attiva per la mappatura delle aree di distacco intonaco-muratura, georadar 3D per la stratigrafia interna delle murature, prove soniche per la determinazione della rigidezza dinamica, monitoraggio fessurimetrico con sensori a fibra ottica installati per 12 mesi.",
      },
      {
        type: 'quote',
        text:
          "Operare sul costruito storico è un esercizio di umiltà: ogni intervento deve essere reversibile, compatibile, e soprattutto silenzioso rispetto alla voce dell'opera originale.",
      },
      {
        type: 'heading',
        text: 'Interventi di consolidamento',
      },
      {
        type: 'paragraph',
        text:
          "Il consolidamento ha seguito un principio di gradualità: prima la stabilizzazione delle lesioni con iniezioni di malta idraulica naturale, poi il rinforzo delle volte con tiranti in acciaio inox post-tesi, infine l'installazione di catene metalliche di nuova progettazione all'altezza dei solai per migliorare il comportamento scatolare.",
      },
      {
        type: 'list',
        items: [
          '420 m² di volte consolidate con tiranti post-tesi',
          '14 catene metalliche di nuova introduzione',
          'Sistema di monitoraggio permanente a 32 canali',
          'Intervento certificato dalla Soprintendenza',
        ],
      },
    ],
  },

  {
    id: 'cinque-terre',
    title: 'Consolidamento Versante',
    description:
      'Stabilizzazione geotecnica con micropali e tiranti per la protezione di un borgo costiero patrimonio UNESCO.',
    category: 'Ingegneria Geotecnica',
    year: 2023,
    location: 'Cinque Terre',
    client: 'Parco Nazionale delle Cinque Terre',
    duration: '18 mesi',
    readTime: 5,
    scope: [
      'Caratterizzazione geotecnica del versante',
      'Analisi di stabilità con metodi limite e FEM',
      'Progettazione di opere di sostegno',
      'Recupero dei terrazzamenti agricoli',
    ],
    cover: '/images/green-steel-arch-bridge-forest-covered-fog-gloomy-day.jpg',
    gallery: [
      '/images/green-steel-arch-bridge-forest-covered-fog-gloomy-day.jpg',
      '/images/vertical-shot-stone-bridge-field-green-yellow-grass-it.jpg',
      '/images/highway-bridges.jpg',
      '/images/low-angle-view-old-bridge.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Il versante a monte di uno dei borghi delle Cinque Terre presentava segnali di instabilità progressiva: piccoli crolli stagionali, deformazioni dei muretti a secco, infiltrazioni in galleria ferroviaria. La complessità del sito — patrimonio UNESCO, vincolo paesaggistico, terrazzamenti agricoli centenari — richiedeva un intervento di assoluta delicatezza.",
      },
      {
        type: 'heading',
        text: 'Caratterizzazione del problema',
      },
      {
        type: 'paragraph',
        text:
          "L'indagine geognostica ha rivelato un cinematismo complesso: il versante presentava due superfici di scivolamento sovrapposte, alimentate da una circolazione idrica profonda dipendente dal regime delle precipitazioni. La modellazione numerica con software Plaxis 3D ha permesso di simulare l'evoluzione nei prossimi 50 anni in diversi scenari climatici.",
      },
      {
        type: 'quote',
        text:
          "Stabilizzare un versante non significa fermarlo: significa convincerlo a muoversi più lentamente di quanto possa fare danni.",
      },
      {
        type: 'heading',
        text: 'Soluzioni invisibili',
      },
      {
        type: 'paragraph',
        text:
          "Il progetto ha privilegiato soluzioni invisibili dal punto di vista paesaggistico: 340 micropali iniettati di diametro 250 mm collegati da una soletta di coronamento interrata, 86 tiranti attivi precompressi ancorati nella roccia profonda, una rete di drenaggi sub-orizzontali per abbassare il livello della falda. In superficie, è stato ripristinato il sistema originario di terrazzamenti a secco, mantenendo invariato l'aspetto storico del paesaggio.",
      },
      {
        type: 'list',
        items: [
          '340 micropali con diametro 250 mm',
          '86 tiranti attivi precompressi a 600 kN',
          '1.200 m lineari di drenaggi sub-orizzontali',
          '4.500 m² di terrazzamenti tradizionali restaurati',
        ],
      },
    ],
  },

  {
    id: 'fondazioni-milano',
    title: 'Fondazioni Speciali Grattacielo',
    description:
      'Progettazione di fondazioni profonde su pali trivellati in argille consolidate per torre di 180 m.',
    category: 'Ingegneria Geotecnica',
    year: 2022,
    location: 'Milano',
    client: 'Developer privato',
    duration: '16 mesi',
    readTime: 4,
    scope: [
      'Caratterizzazione geotecnica avanzata',
      'Progettazione fondazioni su pali trivellati',
      'Analisi interazione terreno-struttura',
      'Monitoraggio cedimenti durante la costruzione',
    ],
    cover: '/images/low-angle-greyscale-concrete-bridge-sunlight-daytime.jpg',
    gallery: [
      '/images/low-angle-greyscale-concrete-bridge-sunlight-daytime.jpg',
      '/images/structure-tokyo-tower.jpg',
      '/images/highway-bridges.jpg',
      '/images/viaduct-city.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Per una nuova torre residenziale di 48 piani nel quartiere Porta Nuova di Milano è stata progettata una soluzione fondale ad alta efficienza: un sistema di pali trivellati di grande diametro collegati da una platea di ripartizione, ottimizzato attraverso un'analisi di interazione terreno-struttura non-lineare.",
      },
      {
        type: 'heading',
        text: 'Sottosuolo milanese',
      },
      {
        type: 'paragraph',
        text:
          "Il sottosuolo milanese presenta una stratigrafia complessa: depositi alluvionali grossolani fino a 8 m di profondità, argille limose sovraconsolidate fino a 35 m, e infine le argille del Villafranchiano. La progettazione fondale ha sfruttato l'elevata capacità portante delle argille sovraconsolidate attraverso 64 pali di diametro 1.500 mm spinti fino a 42 metri di profondità.",
      },
      {
        type: 'quote',
        text:
          "Una torre alta 180 metri appoggia non sulle proprie fondazioni, ma sulla conoscenza del terreno che le sostiene. Tutto il resto è ingegneria di superficie.",
      },
      {
        type: 'heading',
        text: 'Monitoraggio in tempo reale',
      },
      {
        type: 'paragraph',
        text:
          "Durante la costruzione, il sistema fondale è stato monitorato con assestimetri profondi, celle di carico sui pali, e topografia di precisione. I cedimenti rilevati a fine costruzione sono risultati inferiori del 18% rispetto a quelli previsti in progetto, confermando la robustezza del modello di calcolo.",
      },
      {
        type: 'list',
        items: [
          '64 pali trivellati di diametro 1.500 mm',
          'Profondità di infissione: 42 metri',
          'Platea di ripartizione di 1.850 m²',
          'Cedimenti misurati: 12 mm (previsti 15 mm)',
        ],
      },
    ],
  },

  {
    id: 'diga-monitoraggio',
    title: 'Monitoraggio Strutturale Diga',
    description:
      'Sistema di monitoraggio IoT con fibre ottiche e sensori MEMS per opera strategica di sbarramento.',
    category: 'Ingegneria Strutturale',
    year: 2021,
    location: 'Trentino',
    client: 'Concessionario idroelettrico',
    duration: '12 mesi',
    readTime: 4,
    scope: [
      'Progettazione sistema di monitoraggio',
      'Installazione sensori e fibre ottiche',
      'Integrazione con piattaforma SCADA',
      'Definizione protocolli di allertamento',
    ],
    cover: '/images/vertical-shot-stone-bridge-field-green-yellow-grass-it.jpg',
    gallery: [
      '/images/vertical-shot-stone-bridge-field-green-yellow-grass-it.jpg',
      '/images/green-steel-arch-bridge-forest-covered-fog-gloomy-day.jpg',
      '/images/structure-tokyo-tower.jpg',
      '/images/highway-bridges.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "Una diga ad arco-gravità di 78 metri di altezza, in esercizio dal 1962, richiedeva l'implementazione di un sistema di monitoraggio strutturale di nuova generazione per la conferma della concessione di esercizio. Il sistema doveva integrarsi con la strumentazione storica esistente senza sostituirla.",
      },
      {
        type: 'heading',
        text: 'Architettura del sistema',
      },
      {
        type: 'paragraph',
        text:
          "L'architettura comprende tre livelli: (1) sensori distribuiti per la misura di deformazioni, temperature, pressioni e accelerazioni; (2) sistema di acquisizione con campionamento differenziato per tipologia di grandezza; (3) piattaforma di elaborazione con algoritmi di anomaly detection basati su intelligenza artificiale.",
      },
      {
        type: 'quote',
        text:
          "Un'opera strategica come una diga non può permettersi di scoprire un problema: deve prevederlo con anni di anticipo.",
      },
      {
        type: 'list',
        items: [
          '2.400 m di fibre ottiche distribuite (DAS/DTS)',
          '48 sensori MEMS triassiali ad alta sensibilità',
          'Campionamento da 100 Hz a 1 mHz per tipologia',
          'Soglie di allertamento dinamiche basate su ML',
        ],
      },
    ],
  },

  {
    id: 'cattedrale',
    title: 'Adeguamento Sismico Cattedrale',
    description:
      'Diagnostica strutturale e intervento di miglioramento sismico con materiali compositi CFRP.',
    category: 'Ingegneria Strutturale',
    year: 2019,
    location: 'Umbria',
    client: 'Diocesi locale - Soprintendenza',
    duration: '20 mesi',
    readTime: 5,
    scope: [
      'Diagnostica strutturale conservativa',
      'Modellazione murature storiche',
      'Rinforzo con CFRP a basso impatto',
      'Cerchiatura di volte e cupole',
    ],
    cover: '/images/ponte_bianco-nero.jpg',
    gallery: [
      '/images/ponte_bianco-nero.jpg',
      '/images/low-angle-view-old-bridge.jpg',
      '/images/structure-tokyo-tower.jpg',
      '/images/vertical-shot-stone-bridge-field-green-yellow-grass-it.jpg',
    ],
    article: [
      {
        type: 'paragraph',
        text:
          "La cattedrale, le cui parti più antiche risalgono al XII secolo, presentava le tipiche vulnerabilità sismiche degli edifici di culto storici: cinematismi di ribaltamento delle facciate, lesioni nelle volte longitudinali, deficit di collegamento tra navate e transetto. Dopo gli eventi sismici del Centro Italia, la Soprintendenza ha richiesto un intervento strutturale prioritario.",
      },
      {
        type: 'heading',
        text: 'Filosofia di intervento',
      },
      {
        type: 'paragraph',
        text:
          "Il progetto ha aderito ai principi del Restauro Strutturale: minimo intervento, massima reversibilità, distinguibilità dell'aggiunto rispetto all'originale, compatibilità chimica e meccanica dei materiali. Tutti gli interventi sono stati progettati per essere rimossi in futuro qualora le tecnologie consentissero soluzioni meno invasive.",
      },
      {
        type: 'quote',
        text:
          "Le cattedrali sono opere collettive del tempo: il nostro compito non è completarle, ma garantire che continuino a invecchiare in pace.",
      },
      {
        type: 'heading',
        text: 'Materiali compositi avanzati',
      },
      {
        type: 'paragraph',
        text:
          "L'uso di tessuti in fibra di carbonio (CFRP) e fibra di basalto (BFRP) ha permesso interventi estremamente leggeri e poco visibili: applicazione di nastri sulle volte all'estradosso, fasciatura nascosta dei pilastri, rinforzo dei timpani con tessuti monodirezionali. L'incremento di massa indotto dall'intervento è stato inferiore allo 0,3% del totale, mantenendo invariate le frequenze proprie della struttura.",
      },
      {
        type: 'list',
        items: [
          '380 m² di tessuti CFRP/BFRP applicati',
          '24 catene di ammorsamento in acciaio inox',
          'Aumento del 60% della capacità sismica',
          'Intervento certificato MIBAC e Diocesi',
        ],
      },
    ],
  },
]

export function findProject(id: string | undefined): Project | undefined {
  if (!id) return undefined
  return PROJECTS.find((p) => p.id === id)
}
