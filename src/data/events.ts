export type EventType =
  | 'Congresso Nazionale'
  | 'Convegno Nazionale'
  | 'Seminario Nazionale'
  | 'Workshop Nazionale'
  | 'Workshop Internazionale'
  | 'Conferenza Internazionale'
  | 'Conferenza Europea'
  | 'Forum Internazionale'
  | 'Fiera Internazionale'

export type EngineeringEvent = {
  id: string
  title: string
  type: EventType
  location: string
  country?: string
  date: string
  year: number
  role: string
  /** Locandina dell'evento: immagine con testo, va mostrata intera e non ritagliata. */
  cover: string
  /** Foto dell'evento oltre alla locandina; oggi vuota per tutti, la sezione galleria resta nascosta. */
  gallery: string[]
  description: string[]
  /** Sito ufficiale dell'evento, quando indicato nel materiale dello Studio. */
  link?: string
}

// Generato dalla cartella Drive "EVENTI": una cartella per evento, con locandina e scheda .docx.
// Titoli, tipologia, data, luogo, ruolo e descrizioni sono presi dalle schede, non ricostruiti.

export const EVENTS: EngineeringEvent[] = [
  {
    id: 'workshop-dismat-canicatti-2026',
    title: '5° Workshop Ingegneria Strutturale',
    type: 'Workshop Nazionale',
    location: 'Canicattì',
    country: 'Italia',
    date: 'Giugno 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/workshop-dismat-canicatti-2026/cover.jpg',
    gallery: [],
    description: [
      'Il Workshop DISMAT è un forum tecnico di alto livello che riunisce esperti, università e aziende per discutere monitoraggio strutturale, diagnostica e interventi sul costruito esistente. L’incontro si articola in tre aree tematiche dedicate al ciclo di vita delle opere: Infrastrutture e rischio, Diagnostica e restauro, Tecnologie avanzate.',
      'La quinta edizione, dedicata al “Patrimonio Edilizio Infrastrutturale e ambientale”, ha approfondito in modo esteso i ponti metallici, i sistemi IoT applicati e i nuovi materiali per il contrasto al deterioramento ambientale.',
    ],
  },
  {
    id: 'ecndt-verona-2026',
    title: 'ECNDT 2026 - 14° Conferenza Europea sui Controlli Non Distruttivi',
    type: 'Conferenza Europea',
    location: 'Verona',
    country: 'Italia',
    date: 'Giugno 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/ecndt-verona-2026/cover.jpg',
    gallery: [],
    description: [
      'ECNDT 2026 è la principale conferenza europea sulle Prove Non Distruttive, organizzata dall’EFNDT. Riunisce esperti, ricercatori e professionisti per condividere innovazione, tecnologie e applicazioni avanzate nel campo delle ispezioni e del controllo qualità. Il programma comprende memorie tecniche e un’area espositiva che collega ricerca e soluzioni industriali, favorendo networking e scambio di competenze.',
    ],
    link: 'https://www.ecndt2026.org/it/home-page/',
  },
  {
    id: 'emi-napoli-2026',
    title: 'EMI 2026-IC – Engineering Mechanics Institute 2026 – International Conference',
    type: 'Conferenza Internazionale',
    location: 'Napoli',
    country: 'Italia',
    date: 'Settembre 2026',
    year: 2026,
    role: 'Partecipanti',
    cover: '/images/eventi/emi-napoli-2026/cover.jpg',
    gallery: [],
    description: [
      'L’Engineering Mechanics Institute 2026 – International Conference (EMI 2026IC) è la conferenza internazionale di riferimento dell’ASCE dedicata alla meccanica applicata all’ingegneria. Riunisce ricercatori da tutto il mondo per condividere gli sviluppi più recenti nei metodi probabilistici e nelle applicazioni della meccanica in ambito civile e industriale. Tra i temi trattati figurano meccanica probabilistica, datadriven methods, monitoraggio strutturale, meccanica computazionale, multiscala e multifisica, geomeccanica, biomeccanica, fluidodinamica, meccanica del danno e dei materiali.',
    ],
  },
  {
    id: 'fing-genova-2026',
    title: 'FING 2026 – 5° Edizione Forum Ingegneria 4.0',
    type: 'Congresso Nazionale',
    location: 'Genova',
    country: 'Italia',
    date: 'Marzo 2026',
    year: 2026,
    role: 'Partecipanti',
    cover: '/images/eventi/fing-genova-2026/cover.jpg',
    gallery: [],
    description: [
      'Il Forum Ingegneria 4.0, giunto alla sua quinta edizione con il tema “Esplorare il Futuro e Connettere le Dimensioni – Mare Terra Spazio: Tecnologia e Innovazione per un nuovo futuro condiviso”, è un appuntamento nazionale dedicato a tecnologia e innovazione digitale. L’evento ha coinvolto figure di rilievo del mondo industriale, scientifico e tecnologico, con un focus sull’interconnessione e sullo sviluppo integrato delle tecnologie applicate a Mare, Terra e Spazio.',
    ],
    link: 'https://www.forumingegneria.it/',
  },
  {
    id: 'icc-bergamo-2026',
    title: 'ICC 2026 – 6th Edition Italian Concrete Conference',
    type: 'Conferenza Internazionale',
    location: 'Bergamo',
    country: 'Italia',
    date: 'Giugno 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/icc-bergamo-2026/cover.jpg',
    gallery: [],
    description: [
      'L’Italian Concrete Conference, organizzata da AICAP e CTE, è uno dei principali appuntamenti dedicati al calcestruzzo e alle strutture in cemento armato. Il tema guida della sesta edizione, svoltasi a Bergamo, è stato “Concrete Structures: Opportunities and New Challenges” – costruzioni in calcestruzzo: opportunità e nuove sfide – sviluppato attraverso sei filoni principali: materiali innovativi e sostenibilità, digitalizzazione, infrastrutture, norme ed Eurocodici, nuove applicazioni e recupero dell’esistente, tecnologia e ricerca.',
    ],
  },
  {
    id: 'idea-termoli-2026',
    title: 'IDEA 2026 – Second Workshop on Experimental and Innovative Dynamics',
    type: 'Workshop Nazionale',
    location: 'Termoli',
    country: 'Italia',
    date: 'Aprile 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/idea-termoli-2026/cover.jpg',
    gallery: [],
    description: [
      'La seconda edizione del workshop nazionale IDEA (Innovative Dynamics Experiments Association), ospitata dall’Università del Molise nell’aprile 2026, ha riunito la comunità scientifica attiva nella dinamica sperimentale. Il confronto ha riguardato i fronti di ricerca più avanzati in ingegneria civile, meccanica e biomedica, con contributi dedicati all’identificazione dinamica, al comportamento delle strutture in muratura, al monitoraggio basato sulle vibrazioni e alle tecniche di isolamento sismico, temi centrali per l’evoluzione della disciplina.',
    ],
  },
  {
    id: 'terre-sicane-menfi-2026',
    title: 'Seminario Associazione Ingegneri delle Terre Sicane',
    type: 'Seminario Nazionale',
    location: 'Menfi',
    country: 'Italia',
    date: 'Maggio 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/terre-sicane-menfi-2026/cover.jpg',
    gallery: [],
    description: [
      'Il seminario, dal titolo “La salvaguardia del patrimonio edilizio esistente attraverso interventi strutturali: riparazione, miglioramento e adeguamento sismico” e promosso insieme al Collegio dei Geometri e Geometri Laureati della Provincia di Agrigento, è stato un appuntamento territoriale e nazionale dedicato all’aggiornamento dei professionisti sulle tecniche costruttive e antisismiche. L’incontro ha approfondito tecniche e materiali avanzati per la diagnosi, la riparazione e l’adeguamento sismico degli edifici, con focus su tre aree chiave: diagnosi strutturale, interventi di miglioramento e adeguamento antisismico, aggiornamento sulle nuove tecnologie costruttive.',
    ],
  },
  {
    id: 'ordine-ingegneri-caltanissetta-2026',
    title: 'Seminario Ordine degli Ingegneri della Provincia di Caltanissetta',
    type: 'Seminario Nazionale',
    location: 'Caltanissetta',
    country: 'Italia',
    date: 'Giugno 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/ordine-ingegneri-caltanissetta-2026/cover.jpg',
    gallery: [],
    description: [
      'Il seminario, dal titolo “Riqualificazione sismica ed energetica degli edifici esistenti – Soluzioni tecniche e quadro normativo” e organizzato da ECOSISM e CSPFea con gli Ordini degli Ingegneri di Caltanissetta ed Enna, ha offerto un aggiornamento tecnico sulla riqualificazione degli edifici esistenti, con focus su sicurezza sismica ed efficienza energetica. Sono state presentate strategie integrate, soluzioni tecnologiche e strumenti avanzati di modellazione, promuovendo una cultura progettuale orientata a resilienza, sostenibilità e innovazione.',
    ],
    link: 'https://www.ingegneriasismicaitaliana.com/eventi/10-giugno-2026-caltanisettaseminario-riqualificazione-sismica-ed-energetica-degli-edifici-esistenti-soluzioni-tecniche-e-quadro-normativo',
  },
  {
    id: 'ordine-ingegneri-palermo-2026',
    title: 'Seminario Ordine degli Ingegneri della Provincia di Palermo',
    type: 'Seminario Nazionale',
    location: 'Palermo',
    country: 'Italia',
    date: 'Giugno 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/ordine-ingegneri-palermo-2026/cover.jpg',
    gallery: [],
    description: [
      'Il seminario, dal titolo “Interventi Integrati di Riqualificazione Sismica ed Energetica: Soluzioni off-site, strumenti di calcolo sismico e opportunità del Conto Termico 3.0”, ha affrontato il tema della riqualificazione integrata sismica ed energetica degli edifici esistenti, mettendo in relazione soluzioni costruttive innovative, sistemi prefabbricati offsite e strumenti avanzati di modellazione e calcolo. Sono state illustrate le principali strategie di retrofitting, le tecnologie per migliorare sicurezza sismica ed efficienza energetica e le metodologie digitali a supporto della progettazione in zona sismica. È stato inoltre richiamato il ruolo del Conto Termico 3.0 come opportunità per gli interventi di efficientamento del patrimonio edilizio.',
    ],
    link: 'https://palermo.ordingegneri.it/eventi/seminario-interventi-integrati-di-riqualificazione-sismica-ed-energetica-soluzioni-off-site-strumenti-di-calcolo-sismico-e-opportunita-del-conto-termico-3-0/',
  },
  {
    id: 'cta-roma-2026',
    title: 'XXX Congresso CTA 2026',
    type: 'Congresso Nazionale',
    location: 'Roma',
    country: 'Italia',
    date: 'Settembre-Ottobre 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/cta-roma-2026/cover.jpg',
    gallery: [],
    description: [
      'Il XXX Congresso CTA 2026, dal titolo “Innovazione, Sicurezza, Futuro Sostenibile: tutte le strade portano all’acciaio”, riunisce professionisti, ricercatori e industria per confrontarsi sui temi chiave delle costruzioni in acciaio e alluminio: ricerca teorica e sperimentale, sistemi di dissipazione e progettazione antisismica, normative e codici di calcolo, con particolare attenzione alla sostenibilità delle infrastrutture future.',
    ],
    link: 'https://www.collegiotecniciacciaio.it/congressi/presentazione/',
  },
  {
    id: 'aimeta-brescia-2026',
    title: 'XXVII Congresso Nazionale AIMETA – Associazione Italiana di Meccanica Teorica e Applicata',
    type: 'Congresso Nazionale',
    location: 'Brescia',
    country: 'Italia',
    date: 'Settembre 2026',
    year: 2026,
    role: 'Relatori',
    cover: '/images/eventi/aimeta-brescia-2026/cover.jpg',
    gallery: [],
    description: [
      'Il XXVII Congresso AIMETA ha riunito oltre 300 esperti per discutere le più recenti innovazioni nel campo della meccanica. Il programma si è sviluppato attraverso Sessioni Tematiche dedicate ai solidi e alle strutture, alla fluidodinamica, alla meccanica generale e alle macchine, insieme a MiniSimposi specialistici su metodi computazionali avanzati, dinamica e monitoraggio strutturale, tribologia, biomeccanica e materiali innovativi. La giornata inaugurale ha posto l’accento sul rapporto tra ricerca e industria, con un focus sull’eccellenza meccanica bresciana, la transizione ecologica dell’automotive e le prospettive della filiera ingegneristica lombarda.',
    ],
    link: 'https://brescia2026.aimeta.it/',
  },
  {
    id: 'workshop-dismat-canicatti-2025',
    title: '4° Workshop Ingegneria Strutturale',
    type: 'Workshop Nazionale',
    location: 'Canicattì',
    country: 'Italia',
    date: 'Giugno 2025',
    year: 2025,
    role: 'Relatori',
    cover: '/images/eventi/workshop-dismat-canicatti-2025/cover.jpg',
    gallery: [],
    description: [
      'Il Workshop DISMAT è un forum tecnico di alto livello che riunisce esperti, università e aziende per discutere monitoraggio strutturale, diagnostica e interventi sul costruito esistente. L’incontro si articola in tre aree tematiche dedicate al ciclo di vita delle opere: Infrastrutture e rischio, Diagnostica e restauro, Tecnologie avanzate.',
      'La quarta edizione, dedicata a “Progettazione e Monitoraggio di Infrastrutture”, ha posto particolare attenzione alla progettazione e al monitoraggio delle infrastrutture critiche.',
    ],
  },
  {
    id: 'gades-enna-2025',
    title: 'GADeS 2025 - Convegno del Gruppo AIMETA “Dinamica e Stabilità”',
    type: 'Convegno Nazionale',
    location: 'Enna',
    country: 'Italia',
    date: 'Settembre 2025',
    year: 2025,
    role: 'Relatori',
    cover: '/images/eventi/gades-enna-2025/cover.jpg',
    gallery: [],
    description: [
      'Il GADeS promuove la collaborazione scientifica tra ricercatori attivi nella dinamica dei solidi e delle strutture, nella dinamica delle macchine e dei sistemi dinamici, favorendo al tempo stesso il dialogo con studiosi che si occupano di identificazione e controllo. In linea con lo spirito AIMETA, il gruppo punta a integrare competenze complementari per ampliare il proprio campo di interesse. Le attività comprendono workshop, minisymposi, sessioni speciali nelle conferenze AIMETA e la partecipazione coordinata a progetti di ricerca nazionali ed europei.',
    ],
  },
  {
    id: 'ieee-metrosustainability-benevento-2025',
    title: 'IEEE 2025 – 1st International Workshop on Metrology for Sustainability',
    type: 'Workshop Internazionale',
    location: 'Benevento',
    country: 'Italia',
    date: 'Dicembre 2025',
    year: 2025,
    role: 'Relatori',
    cover: '/images/eventi/ieee-metrosustainability-benevento-2025/cover.jpg',
    gallery: [],
    description: [
      'La prima edizione dell’IEEE International Workshop on Metrology for Sustainability ha riunito la comunità internazionale impegnata nella ricerca sulla metrologia applicata alla sostenibilità. L’incontro ha offerto un confronto multidisciplinare su temi che richiedono la collaborazione tra esperti, ricercatori e decisori, presentando soluzioni scientifiche e tecnologiche innovative. Pur con un focus sulle applicazioni biomediche e sui sistemi di monitoraggio, il Workshop ha affrontato l’intero spettro della misurazione della sostenibilità: energia, cambiamenti climatici, inquinamento, gestione delle risorse, conformità normativa e politiche di attuazione.',
    ],
    link: 'https://metrosustainability.org/metrosustainability2025/',
  },
  {
    id: 'fischer-ief-milano-2025',
    title: 'IEF25 – Fischer International Expert Forum 2025',
    type: 'Forum Internazionale',
    location: 'Milano',
    country: 'Italia',
    date: 'Ottobre 2025',
    year: 2025,
    role: 'Partecipanti',
    cover: '/images/eventi/fischer-ief-milano-2025/cover.jpg',
    gallery: [],
    description: [
      'L’International Expert Forum 2025, dal titolo “Le nuove frontiere del mondo delle Costruzioni”, ha riunito progettisti, imprese ed enti protagonisti della progettazione a livello globale, offrendo un confronto sul presente e sul futuro del settore delle costruzioni. L’evento ha approfondito temi cruciali come sicurezza, sostenibilità, resilienza strutturale e integrazione delle tecnologie digitali nelle grandi infrastrutture, valorizzando esperienze concrete e soluzioni innovative. È emersa con forza la centralità della sostenibilità, intesa come ottimizzazione dei processi, uso di materiali a basso impatto e progettazione di sistemi di fissaggio resilienti.',
    ],
    link: 'https://www.fischer.it/it-it/progettazione/ief-2025',
  },
  {
    id: 'if-crasc-napoli-2025',
    title: 'IF CRASC ’25 – VI Convegno di Ingegneria Forense',
    type: 'Convegno Nazionale',
    location: 'Napoli',
    country: 'Italia',
    date: 'Luglio 2025',
    year: 2025,
    role: 'Relatori',
    cover: '/images/eventi/if-crasc-napoli-2025/cover.jpg',
    gallery: [],
    description: [
      'L’IF CRASC ’25 rappresenta il 6° Convegno di Ingegneria Forense e il 9° appuntamento dedicato a crolli, affidabilità strutturale e consolidamento ed è promosso dall\'Associazione Italiana di Ingegneria Forense (AIF). L’evento ha affrontato in modo integrato i principali temi della disciplina: dagli aspetti giuridici dell’ingegneria alle applicazioni forensi in ambito civile, industriale e informatico, fino alle analisi strutturali, alla valutazione di rischio, robustezza e resilienza, e alle tecniche di consolidamento delle opere.',
    ],
  },
  {
    id: 'workshop-dismat-canicatti-2024',
    title: '3° Workshop Ingegneria Strutturale & Diritto',
    type: 'Workshop Nazionale',
    location: 'Canicattì',
    country: 'Italia',
    date: 'Giugno 2024',
    year: 2024,
    role: 'Relatori',
    cover: '/images/eventi/workshop-dismat-canicatti-2024/cover.jpg',
    gallery: [],
    description: [
      'Il Workshop DISMAT è un forum tecnico di alto livello che riunisce esperti, università e aziende per discutere monitoraggio strutturale, diagnostica e interventi sul costruito esistente. L’incontro si articola in tre aree tematiche dedicate al ciclo di vita delle opere: Infrastrutture e rischio, Diagnostica e restauro, Tecnologie avanzate.',
      'La terza edizione, dedicata agli “Eventi sul Patrimonio Edilizio ed Infrastrutturale esistente”, ha unito la componente tecnica a quella legale, dividendo i lavori in una giornata dedicata alle Infrastrutture e una dedicata agli Edifici.',
    ],
  },
  {
    id: 'saie-bologna-2024',
    title: 'SAIE 2024 – La Fiera delle Costruzioni: progettazione, edilizia, impianti',
    type: 'Fiera Internazionale',
    location: 'Bologna',
    country: 'Italia',
    date: 'Ottobre 2024',
    year: 2024,
    role: 'Relatori',
    cover: '/images/eventi/saie-bologna-2024/cover.jpg',
    gallery: [],
    description: [
      'Il SAIE è la principale fiera italiana dedicata al settore delle costruzioni e anche nel 2024 ha registrato una grande partecipazione di professionisti. L’edizione di Bologna ha ruotato attorno a quattro temi centrali: sostenibilità, con soluzioni per la decarbonizzazione e la riqualificazione energetica; digitalizzazione, grazie alle applicazioni di IA, BIM e software per il cantiere; infrastrutture, con focus su ingegneria sismica e rigenerazione urbana; formazione, con oltre 230 convegni dedicati all’aggiornamento tecnico e alla sicurezza nei cantieri.',
    ],
    link: 'https://www.saiebologna.it/comunicati/successo-saie-2024-fiera-costruzioni/',
  },
  {
    id: 'ordine-ingegneri-agrigento-2024',
    title: 'Seminario Ordine degli Ingegneri della Provincia di Agrigento',
    type: 'Seminario Nazionale',
    location: 'Agrigento',
    country: 'Italia',
    date: 'Maggio 2024',
    year: 2024,
    role: 'Relatori',
    cover: '/images/eventi/ordine-ingegneri-agrigento-2024/cover.jpg',
    gallery: [],
    description: [
      'Il seminario, dal titolo “Il Collaudo Statico negli Interventi di Miglioramento ed Adeguamento Sismico” e organizzato dall’Ordine degli Ingegneri della Provincia di Agrigento, è stato strutturato come un ciclo di incontri dedicati all’aggiornamento tecnico dei professionisti. Il percorso ha approfondito temi di rilievo quali le procedure di collaudo strutturale sugli edifici esistenti e le prove di caratterizzazione dinamica, offrendo un quadro operativo sulle metodologie oggi impiegate nella verifica e nella valutazione delle strutture.',
    ],
  },
  {
    id: 'aimeta-napoli-2024',
    title: 'XXVI Congresso AIMETA 2024',
    type: 'Congresso Nazionale',
    location: 'Napoli',
    country: 'Italia',
    date: 'Settembre 2024',
    year: 2024,
    role: 'Relatori',
    cover: '/images/eventi/aimeta-napoli-2024/cover.jpg',
    gallery: [],
    description: [
      'Il XXVI Congresso AIMETA 2024 – “Meccanica dei solidi, delle strutture, dei fluidi, meccanica generale e dei sistemi meccanici” – ha proposto un ampio programma scientifico articolato in diverse aree della meccanica teorica e applicata: meccanica dei solidi e delle strutture, dinamica, fluidodinamica, meccanica generale e applicata, biomeccanica e meccanobiologia, meccanica dei materiali e dei compositi, metamateriali e meccanica computazionale.',
    ],
    link: 'https://napoli2024.aimeta.it/',
  },
  {
    id: 'emi-palermo-2023',
    title: 'EMI 2023-IC – Engineering Mechanics Institute 2023 – International Conference',
    type: 'Conferenza Internazionale',
    location: 'Palermo',
    country: 'Italia',
    date: 'Agosto 2023',
    year: 2023,
    role: 'Relatori',
    cover: '/images/eventi/emi-palermo-2023/cover.jpg',
    gallery: [],
    description: [
      'L’Engineering Mechanics Institute 2023 – International Conference (EMI 2023-IC) è la conferenza internazionale di riferimento dell’ASCE dedicata alla meccanica applicata all’ingegneria. Riunisce ricercatori da tutto il mondo per condividere gli sviluppi più recenti nei metodi probabilistici e nelle applicazioni della meccanica in ambito civile e industriale. Tra i temi trattati figurano meccanica probabilistica, datadriven methods, monitoraggio strutturale, meccanica computazionale, multiscala e multifisica, geomeccanica, biomeccanica, fluidodinamica, meccanica del danno e dei materiali.',
    ],
  },
  {
    id: 'if-crasc-bologna-2023',
    title: 'IF CRASC ’23 – V Congresso di Ingegneria Forense',
    type: 'Convegno Nazionale',
    location: 'Bologna',
    country: 'Italia',
    date: 'Giugno 2023',
    year: 2023,
    role: 'Partecipanti',
    cover: '/images/eventi/if-crasc-bologna-2023/cover.jpg',
    gallery: [],
    description: [
      'L’IF CRASC ’23, promosso dall’Associazione Italiana di Ingegneria Forense, ha rappresentato il 5° Congresso di Ingegneria Forense e l’8° appuntamento dedicato a crolli, affidabilità strutturale e consolidamento. Il convegno ha esplorato l’ingegneria forense come punto di raccordo tra aspetti tecnici e giuridici, con contributi che hanno spaziato dall’analisi dei crolli alla valutazione dell’affidabilità delle strutture, dalle tecniche di consolidamento alle prove informatiche nei procedimenti giudiziari, fino ai temi della sicurezza sul lavoro.',
    ],
  },
  {
    id: 'aipnd-verona-2022',
    title: 'AIPnD 2022 – 19° Congresso Nazionale sulle Prove non Distruttive',
    type: 'Congresso Nazionale',
    location: 'Verona',
    country: 'Italia',
    date: 'Ottobre 2022',
    year: 2022,
    role: 'Relatori',
    cover: '/images/eventi/aipnd-verona-2022/cover.jpg',
    gallery: [],
    description: [
      'Il 19° Congresso AIPnD ha affrontato il macro-tema delle Prove non Distruttive (PnD), del Monitoraggio e della Diagnostica applicati a molteplici settori industriali e tecnologici.',
    ],
  },
  {
    id: 'workshop-dismat-agrigento-2019',
    title: '2° Workshop Ingegneria Strutturale & Diritto',
    type: 'Workshop Nazionale',
    location: 'Agrigento',
    country: 'Italia',
    date: 'Giugno 2019',
    year: 2019,
    role: 'Relatori',
    cover: '/images/eventi/workshop-dismat-agrigento-2019/cover.jpg',
    gallery: [],
    description: [
      'Il Workshop DISMAT è un forum tecnico di alto livello che riunisce esperti, università e aziende per discutere monitoraggio strutturale, diagnostica e interventi sul costruito esistente. L’incontro si articola in tre aree tematiche dedicate al ciclo di vita delle opere: Infrastrutture e rischio, Diagnostica e restauro, Tecnologie avanzate.',
      'La seconda edizione, dedicata alla “Sicurezza Statica e Vulnerabilità Sismica di Edifici Scolastici, Strategici e di Infrastrutture”, ha integrato aspetti tecnici e giuridici, approfondendo le responsabilità di dirigenti scolastici, RSPP, funzionari tecnici e ispettori di ponti, insieme alle più avanzate tecniche di controllo sperimentale.',
    ],
  },
  {
    id: 'master-parma-2019',
    title: 'Congresso Nazionale Associazione MASTER',
    type: 'Congresso Nazionale',
    location: 'Parma',
    country: 'Italia',
    date: 'Novembre 2019',
    year: 2019,
    role: 'Relatori',
    cover: '/images/eventi/master-parma-2019/cover.jpg',
    gallery: [],
    description: [
      'L’evento ha celebrato il decennale dell’Associazione MASTER – Materials and Structures, Testing and Research – proponendo due giornate dedicate alla presentazione di memorie tecniche e atti congressuali sulla diagnostica strutturale, la manutenzione e la gestione della sicurezza delle opere esistenti, con particolare attenzione a ponti, viadotti ed edifici storici e civili.',
    ],
  },
  {
    id: 'workshop-dismat-agrigento-2018',
    title: '1° Workshop Ingegneria Strutturale & Diritto',
    type: 'Workshop Nazionale',
    location: 'Agrigento',
    country: 'Italia',
    date: 'Giugno 2018',
    year: 2018,
    role: 'Relatori',
    cover: '/images/eventi/workshop-dismat-agrigento-2018/cover.jpg',
    gallery: [],
    description: [
      'Il Workshop DISMAT è un forum tecnico di alto livello che riunisce esperti, università e aziende per discutere monitoraggio strutturale, diagnostica e interventi sul costruito esistente. L’incontro si articola in tre aree tematiche dedicate al ciclo di vita delle opere: Infrastrutture e rischio, Diagnostica e restauro, Tecnologie avanzate.',
      'La prima edizione ha avuto per tema “Profili di Responsabilità Giuridica del Direttore dei Lavori e del Collaudatore Statico di Lavori Inerenti le Nuove Costruzioni e gli Interventi su Edifici Esistenti – La rilevanza delle tecniche nelle fasi di espletamento dell’incarico”, evidenziando il ruolo delle tecniche avanzate di controllo nelle diverse fasi dell’incarico.',
    ],
  },
]

const MESI = [
  'gennaio',
  'febbraio',
  'marzo',
  'aprile',
  'maggio',
  'giugno',
  'luglio',
  'agosto',
  'settembre',
  'ottobre',
  'novembre',
  'dicembre',
]

/**
 * Mese d'inizio ricavato dal campo `date` ("Giugno 2026", "Settembre-Ottobre 2026"):
 * 1–12, oppure 0 se nella stringa non compare un mese riconoscibile.
 */
export function eventMonth(event: EngineeringEvent): number {
  const date = event.date.toLowerCase()
  let month = 0
  let firstIndex = Infinity
  MESI.forEach((nome, i) => {
    const pos = date.indexOf(nome)
    if (pos !== -1 && pos < firstIndex) {
      firstIndex = pos
      month = i + 1
    }
  })
  return month
}

/** Ordine cronologico crescente: prima l'anno, poi il mese. */
export function compareEventsByDate(a: EngineeringEvent, b: EngineeringEvent): number {
  if (a.year !== b.year) return a.year - b.year
  return eventMonth(a) - eventMonth(b)
}

export function findEvent(id?: string): EngineeringEvent | undefined {
  return EVENTS.find((e) => e.id === id)
}
