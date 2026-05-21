export type EventType =
  | 'Convegno Nazionale'
  | 'Convegno Internazionale'
  | 'Workshop'
  | 'Fiera'

export type EngineeringEvent = {
  id: string
  title: string
  type: EventType
  location: string
  country?: string
  date: string
  year: number
  role: string
  cover: string
  gallery: string[]
  description: string[]
}

export const EVENTS: EngineeringEvent[] = [
  {
    id: 'anidis-pisa-2024',
    title: "ANIDIS 2024 — Congresso Nazionale Ingegneria Sismica",
    type: 'Convegno Nazionale',
    location: 'Pisa',
    country: 'Italia',
    date: 'Settembre 2024',
    year: 2024,
    role: 'Relatori',
    cover: 'https://loremflickr.com/1600/1000/conference,speaker?lock=101',
    gallery: [
      'https://loremflickr.com/1600/1000/conference,speaker?lock=102',
      'https://loremflickr.com/1600/1000/conference,audience?lock=103',
      'https://loremflickr.com/1600/1000/conference,auditorium?lock=104',
      'https://loremflickr.com/1600/1000/conference,presentation?lock=105',
      'https://loremflickr.com/1600/1000/conference,panel?lock=106',
    ],
    description: [
      "Abbiamo partecipato al 20° Congresso Nazionale ANIDIS presso l'Università di Pisa, presentando due memorie sui retrofit sismici di viadotti esistenti con isolatori HDRB.",
      "Il convegno ha riunito oltre 600 ingegneri strutturali italiani: tre giorni di sessioni tecniche, tavole rotonde e poster su sicurezza sismica e adeguamento del patrimonio infrastrutturale.",
    ],
  },
  {
    id: 'iabse-vienna-2024',
    title: "IABSE Symposium 2024 — Bridges and Structures",
    type: 'Convegno Internazionale',
    location: 'Vienna',
    country: 'Austria',
    date: 'Giugno 2024',
    year: 2024,
    role: 'Relatori',
    cover: 'https://loremflickr.com/1600/1000/conference,auditorium?lock=201',
    gallery: [
      'https://loremflickr.com/1600/1000/conference,auditorium?lock=202',
      'https://loremflickr.com/1600/1000/conference,speaker?lock=203',
      'https://loremflickr.com/1600/1000/conference,international?lock=204',
      'https://loremflickr.com/1600/1000/conference,networking?lock=205',
    ],
    description: [
      "Il simposio internazionale IABSE di Vienna ha riunito i principali ingegneri di ponti del mondo. Abbiamo presentato il caso studio del ponte ad arco sul Fiume Sele nella sessione plenaria dedicata alle opere di grande luce.",
      "Confronto diretto con team di progettazione di Norvegia, Giappone e Stati Uniti su metodologie di analisi aerodinamica e durabilità delle strutture metalliche.",
    ],
  },
  {
    id: 'workshop-polimi-2024',
    title: "Workshop Ponti del Futuro — Politecnico di Milano",
    type: 'Workshop',
    location: 'Milano',
    country: 'Italia',
    date: 'Aprile 2024',
    year: 2024,
    role: 'Co-organizzatori',
    cover: 'https://loremflickr.com/1600/1000/workshop,seminar?lock=301',
    gallery: [
      'https://loremflickr.com/1600/1000/workshop,seminar?lock=302',
      'https://loremflickr.com/1600/1000/workshop,training?lock=303',
      'https://loremflickr.com/1600/1000/seminar,classroom?lock=304',
      'https://loremflickr.com/1600/1000/seminar,presentation?lock=305',
    ],
    description: [
      "Workshop tecnico di due giornate co-organizzato con il Dipartimento di Ingegneria Civile del Politecnico di Milano. Focus su monitoraggio strutturale con fibre ottiche e gemelli digitali.",
      "Il prof. Lo Giudice ha tenuto la lezione magistrale di apertura sul tema della manutenzione predittiva applicata ai viadotti autostradali italiani.",
    ],
  },
  {
    id: 'shmii-tokyo-2023',
    title: "SHMII-11 — Structural Health Monitoring of Intelligent Infrastructure",
    type: 'Convegno Internazionale',
    location: 'Tokyo',
    country: 'Giappone',
    date: 'Ottobre 2023',
    year: 2023,
    role: 'Relatori',
    cover: 'https://loremflickr.com/1600/1000/conference,auditorium?lock=401',
    gallery: [
      'https://loremflickr.com/1600/1000/conference,auditorium?lock=402',
      'https://loremflickr.com/1600/1000/conference,speaker?lock=403',
      'https://loremflickr.com/1600/1000/conference,audience?lock=404',
      'https://loremflickr.com/1600/1000/conference,panel?lock=405',
      'https://loremflickr.com/1600/1000/conference,presentation?lock=406',
    ],
    description: [
      "Conferenza biennale internazionale sul monitoraggio strutturale ospitata all'Università di Tokyo. Abbiamo presentato il sistema di monitoraggio IoT installato sulla diga in Trentino.",
      "Visita tecnica al Tokyo Skytree e al laboratorio di prove dinamiche dell'E-Defense, la più grande shaking table al mondo a Miki City.",
    ],
  },
  {
    id: 'saie-bari-2023',
    title: "SAIE Bari — Fiera dell'Edilizia e dell'Ingegneria",
    type: 'Fiera',
    location: 'Bari',
    country: 'Italia',
    date: 'Ottobre 2023',
    year: 2023,
    role: 'Espositori',
    cover: 'https://loremflickr.com/1600/1000/tradeshow,exhibition?lock=501',
    gallery: [
      'https://loremflickr.com/1600/1000/tradeshow,exhibition?lock=502',
      'https://loremflickr.com/1600/1000/tradeshow,booth?lock=503',
      'https://loremflickr.com/1600/1000/exhibition,expo?lock=504',
      'https://loremflickr.com/1600/1000/expo,booth?lock=505',
    ],
    description: [
      "Tre giorni di presenza al SAIE di Bari con stand espositivo dedicato alle soluzioni di adeguamento sismico per infrastrutture strategiche.",
      "Incontri B2B con stazioni appaltanti del Sud Italia e demo dei software di analisi non-lineare sviluppati internamente.",
    ],
  },
  {
    id: 'wcsi-berlino-2023',
    title: "WCSI 2023 — World Conference on Structural Integrity",
    type: 'Convegno Internazionale',
    location: 'Berlino',
    country: 'Germania',
    date: 'Maggio 2023',
    year: 2023,
    role: 'Relatori',
    cover: 'https://loremflickr.com/1600/1000/conference,speaker?lock=601',
    gallery: [
      'https://loremflickr.com/1600/1000/conference,speaker?lock=602',
      'https://loremflickr.com/1600/1000/conference,auditorium?lock=603',
      'https://loremflickr.com/1600/1000/conference,panel?lock=604',
      'https://loremflickr.com/1600/1000/conference,audience?lock=605',
    ],
    description: [
      "Conferenza mondiale sull'integrità strutturale ospitata dalla TU Berlin. Abbiamo presentato due paper sulla valutazione della durabilità del calcestruzzo armato in ambiente marino.",
      "Sessione speciale dedicata al collasso del Ponte Morandi e alle implicazioni progettuali per le opere viarie esistenti in Europa.",
    ],
  },
  {
    id: 'fib-lisbona-2022',
    title: "fib Symposium 2022 — Concrete Innovation for Sustainability",
    type: 'Convegno Internazionale',
    location: 'Lisbona',
    country: 'Portogallo',
    date: 'Giugno 2022',
    year: 2022,
    role: 'Relatori',
    cover: 'https://loremflickr.com/1600/1000/conference,auditorium?lock=701',
    gallery: [
      'https://loremflickr.com/1600/1000/conference,auditorium?lock=702',
      'https://loremflickr.com/1600/1000/conference,speaker?lock=703',
      'https://loremflickr.com/1600/1000/conference,presentation?lock=704',
      'https://loremflickr.com/1600/1000/conference,networking?lock=705',
    ],
    description: [
      "Simposio internazionale della fédération internationale du béton sull'innovazione sostenibile del calcestruzzo. Abbiamo presentato i risultati dell'uso di CFRP nei restauri monumentali.",
      "Partecipazione al panel su economia circolare nel settore delle costruzioni e riuso del calcestruzzo demolito.",
    ],
  },
  {
    id: 'cte-bologna-2022',
    title: "CTE Conference 2022 — Collegio dei Tecnici della Edilizia",
    type: 'Convegno Nazionale',
    location: 'Bologna',
    country: 'Italia',
    date: 'Novembre 2022',
    year: 2022,
    role: 'Relatori',
    cover: 'https://loremflickr.com/1600/1000/conference,speaker?lock=801',
    gallery: [
      'https://loremflickr.com/1600/1000/conference,speaker?lock=802',
      'https://loremflickr.com/1600/1000/conference,auditorium?lock=803',
      'https://loremflickr.com/1600/1000/conference,audience?lock=804',
      'https://loremflickr.com/1600/1000/conference,panel?lock=805',
    ],
    description: [
      "Convegno nazionale CTE dedicato alla precompressione e ai materiali compositi. Il prof. Mugnos ha tenuto la relazione invitata sulle nuove generazioni di isolatori sismici.",
      "Premiazione del nostro progetto del viadotto Cannavino come miglior intervento di adeguamento sismico dell'anno.",
    ],
  },
]

export function findEvent(id: string | undefined): EngineeringEvent | undefined {
  if (!id) return undefined
  return EVENTS.find((e) => e.id === id)
}
