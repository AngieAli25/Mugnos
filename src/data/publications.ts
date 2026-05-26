export type Publication = {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  abstract: string
  tags: string[]
  pdfUrl: string
  doi?: string
  link?: string
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'analisi-sismica-viadotti-2024',
    title:
      'Analisi sismica non-lineare di viadotti autostradali esistenti: metodologia integrata FEM-sperimentale',
    authors: ['E. Lo Giudice', 'G. Mugnos', 'A. Ferrari'],
    venue: 'Journal of Structural Engineering, ASCE',
    year: 2024,
    abstract:
      "Lo studio presenta una metodologia integrata per la valutazione della vulnerabilità sismica di viadotti autostradali costruiti negli anni '60-'70. L'approccio combina analisi numeriche non-lineari con identificazione dinamica sperimentale, validata su un caso studio reale in zona sismica 1.",
    tags: ['Ingegneria Strutturale', 'Sismica', 'FEM'],
    pdfUrl: '/publications/analisi-sismica-viadotti-2024.pdf',
    doi: '10.1061/(ASCE)ST.1943-541X.0003521',
  },
  {
    id: 'monitoraggio-fibre-ottiche-2024',
    title:
      'Monitoraggio strutturale di dighe con fibre ottiche distribuite: applicazioni e prospettive',
    authors: ['G. Mugnos', 'R. Conti'],
    venue: 'Engineering Structures, Elsevier',
    year: 2024,
    abstract:
      'Le fibre ottiche distribuite (DAS/DTS) rappresentano una rivoluzione nel monitoraggio strutturale di grandi opere idrauliche. Il paper analizza tre casi applicativi su dighe italiane, dimostrando incrementi del 60% nella precisione di rilevazione precoce delle anomalie.',
    tags: ['Monitoraggio', 'Ingegneria Strutturale', 'IoT'],
    pdfUrl: '/publications/monitoraggio-fibre-ottiche-2024.pdf',
    doi: '10.1016/j.engstruct.2024.117284',
    link: 'https://doi.org/10.1016/j.engstruct.2024.117284',
  },
  {
    id: 'galleria-natm-evolutivo-2023',
    title:
      "Il metodo NATM evolutivo: applicazione a gallerie in formazioni geologiche eterogenee",
    authors: ['E. Lo Giudice', 'M. Bianchi', 'F. Russo'],
    venue: 'Tunnelling and Underground Space Technology',
    year: 2023,
    abstract:
      "L'applicazione adattiva del New Austrian Tunneling Method consente di gestire scavi profondi in contesti geologici imprevedibili. Vengono presentati i risultati di un tracciato di 27 km in Liguria, con analisi delle classi di scavo dinamicamente assegnate.",
    tags: ['Ingegneria Infrastrutturale', 'Gallerie', 'Geotecnica'],
    pdfUrl: '/publications/galleria-natm-evolutivo-2023.pdf',
    doi: '10.1016/j.tust.2023.105421',
  },
  {
    id: 'cfrp-restauro-strutturale-2023',
    title:
      'Materiali compositi CFRP nel restauro strutturale di edifici monumentali: compatibilità e reversibilità',
    authors: ['G. Mugnos', 'L. De Santis'],
    venue: 'Construction and Building Materials',
    year: 2023,
    abstract:
      "L'uso di fibre di carbonio nel consolidamento di murature storiche richiede una valutazione attenta dei principi di restauro. Il lavoro propone un framework per la selezione di tessuti compositi compatibili con i requisiti di reversibilità e distinguibilità imposti dal MIBAC.",
    tags: ['Ingegneria Strutturale', 'Restauro', 'Materiali'],
    pdfUrl: '/publications/cfrp-restauro-strutturale-2023.pdf',
    doi: '10.1016/j.conbuildmat.2023.131854',
    link: 'https://doi.org/10.1016/j.conbuildmat.2023.131854',
  },
  {
    id: 'consolidamento-versanti-2022',
    title:
      'Consolidamento geotecnico di versanti instabili in aree paesaggistiche vincolate',
    authors: ['E. Lo Giudice', 'C. Marini'],
    venue: 'Landslides, Springer',
    year: 2022,
    abstract:
      "Il consolidamento di versanti in aree UNESCO impone vincoli severi sull'invasività degli interventi. Il paper presenta un caso studio sulle Cinque Terre, con micropali iniettati, tiranti attivi e drenaggi sub-orizzontali integrati nel paesaggio.",
    tags: ['Ingegneria Geotecnica', 'Frane', 'Patrimonio'],
    pdfUrl: '/publications/consolidamento-versanti-2022.pdf',
    doi: '10.1007/s10346-022-01928-w',
  },
  {
    id: 'fondazioni-profonde-milano-2022',
    title:
      'Comportamento di fondazioni profonde in argille sovraconsolidate: analisi e monitoraggio',
    authors: ['G. Mugnos', 'P. Vitale', 'A. Ferrari'],
    venue: 'Géotechnique, ICE',
    year: 2022,
    abstract:
      "Lo studio analizza il comportamento di pali trivellati di grande diametro spinti in formazioni argillose sovraconsolidate del Villafranchiano milanese. I cedimenti misurati sono risultati del 18% inferiori a quelli previsti dai modelli teorici.",
    tags: ['Ingegneria Geotecnica', 'Fondazioni', 'Monitoraggio'],
    pdfUrl: '/publications/fondazioni-profonde-milano-2022.pdf',
    doi: '10.1680/jgeot.21.00318',
    link: 'https://doi.org/10.1680/jgeot.21.00318',
  },
  {
    id: 'isolatori-sismici-retrofit-2021',
    title:
      'Retrofit sismico di viadotti esistenti con isolatori elastomerici ad alto smorzamento',
    authors: ['E. Lo Giudice', 'G. Mugnos'],
    venue: 'Earthquake Engineering & Structural Dynamics',
    year: 2021,
    abstract:
      "L'inserimento di isolatori sismici HDRB su viadotti autostradali consente di disaccoppiare l'impalcato dalle pile in caso di evento sismico. Il paper descrive il design, l'installazione e il collaudo dinamico su un'opera strategica calabrese.",
    tags: ['Ingegneria Strutturale', 'Sismica', 'Retrofit'],
    pdfUrl: '/publications/isolatori-sismici-retrofit-2021.pdf',
    doi: '10.1002/eqe.3478',
  },
  {
    id: 'aerodinamica-ponti-2021',
    title:
      'Stabilità aerodinamica di ponti ad arco a via inferiore: analisi CFD e prove in galleria del vento',
    authors: ['G. Mugnos', 'S. Romano'],
    venue: 'Journal of Wind Engineering and Industrial Aerodynamics',
    year: 2021,
    abstract:
      "L'analisi della stabilità aerodinamica di ponti di grande luce richiede un approccio integrato tra simulazione numerica e validazione sperimentale. Il paper presenta i risultati per un ponte ad arco di 280 m di luce libera sul Fiume Sele.",
    tags: ['Ingegneria Infrastrutturale', 'Ponti', 'Aerodinamica'],
    pdfUrl: '/publications/aerodinamica-ponti-2021.pdf',
    doi: '10.1016/j.jweia.2021.104612',
    link: 'https://doi.org/10.1016/j.jweia.2021.104612',
  },
  {
    id: 'diagnostica-murature-storiche-2020',
    title:
      'Diagnostica non-invasiva di murature storiche: termografia, georadar e prove soniche integrate',
    authors: ['E. Lo Giudice', 'M. Bianchi'],
    venue: 'Journal of Cultural Heritage, Elsevier',
    year: 2020,
    abstract:
      "Il paper propone un protocollo diagnostico integrato per murature storiche basato su tecniche non-distruttive. La metodologia è stata validata su un palazzo monumentale fiorentino del XV secolo sotto vincolo della Soprintendenza.",
    tags: ['Restauro', 'Diagnostica', 'Patrimonio'],
    pdfUrl: '/publications/diagnostica-murature-storiche-2020.pdf',
    doi: '10.1016/j.culher.2020.06.014',
  },
]
