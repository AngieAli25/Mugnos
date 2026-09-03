// Generato dai documenti e dalle foto della cartella Drive dei progetti.
// Fonte: ~/Desktop/PROGETTI_DRIVE — un progetto per cartella.

export type ProjectCategory =
  | 'Ingegneria Strutturale'
  | 'Ingegneria Infrastrutturale'
  | 'Ingegneria Geotecnica'
  | 'Ingegneria Forense'
  | 'Monitoraggio Strutturale'

export type ProjectTypology =
  | 'Cavalcavia'
  | 'Diga'
  | 'Edificio industriale'
  | 'Edificio monumentale'
  | 'Edificio pubblico'
  | 'Edificio residenziale'
  | 'Edificio sanitario'
  | 'Edificio scolastico'
  | 'Edificio tecnologico'
  | 'Galleria'
  | 'Opera d\'arte'
  | 'Ponte'
  | 'Spazio urbano'
  | 'Viadotto'

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
  /** Secondo ambito dichiarato nel documento (es. Ingegneria Forense, Rigenerazione Urbana). */
  secondaryCategory?: string
  typology: ProjectTypology
  year: number
  location: string
  cover: string
  gallery: string[]
  client?: string
  scope: string[]
  duration?: string
  /** Tipologia di servizio come da documento di progetto. */
  services?: string
  /** Importo lavori, CUP e CIG: presenti nei dati, non mostrati in pagina. */
  amount?: string
  cup?: string
  cig?: string
  readTime: number
  article: ArticleBlock[]
}

export const PROJECTS: Project[] = [
  {
    id: 'cavalcaferrovia-ss-192-km-2-400',
    title: 'Cavalcavia Ferroviario SS 192',
    description: 'L’intervento ha riguardato il progetto esecutivo del nuovo cavalcavia nel territorio comunale di Assoro, in corrispondenza dell’attraversamento della linea ferroviaria Palermo–Catania.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2025,
    location: 'S.P. 7/A “Bivio Pirato – Bivio Mulinello – S.S. 192”, al km 2+400, Assoro (EN)',
    client: 'RTI Steelconcrete Consorzio Stabile / Consorzio Stabile “Costellazione di Venere”',
    services: 'Progetto esecutivo strutturale, modellazione FEM, verifiche SLU/SLE, verifica idraulica del sistema di smaltimento acque.',
    amount: '€ 288 726,01',
    cup: 'G12C23000070001',
    cig: 'BAB9012EB7',
    readTime: 2,
    cover: '/images/progetti/cavalcaferrovia-ss-192-km-2-400/cover.jpg',
    gallery: [
      '/images/progetti/cavalcaferrovia-ss-192-km-2-400/cover.jpg',
      '/images/progetti/cavalcaferrovia-ss-192-km-2-400/01.jpg',
      '/images/progetti/cavalcaferrovia-ss-192-km-2-400/02.jpg',
      '/images/progetti/cavalcaferrovia-ss-192-km-2-400/03.jpg',
    ],
    scope: [
      'Progettazione esecutiva strutturale',
      'Modellazione FEM tridimensionale',
      'Verifiche SLU e SLE',
      'Verifica idraulica del sistema di drenaggio',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il progetto esecutivo del nuovo cavalcavia nel territorio comunale di Assoro, in corrispondenza dell’attraversamento della linea ferroviaria Palermo–Catania.',
      },
      {
        type: 'paragraph',
        text: 'L’opera sostituisce un manufatto esistente in calcestruzzo armato risalente agli anni ’30, superando la precedente configurazione con pile intermedie mediante una soluzione a campata unica, più regolare dal punto di vista strutturale e più funzionale rispetto alle esigenze dell’attraversamento ferroviario.',
      },
      {
        type: 'paragraph',
        text: 'Il nuovo impalcato è realizzato con travi prefabbricate in calcestruzzo armato precompresso e soletta collaborante in c.a., sostenuto da due nuove spalle in cemento armato fondate su pali trivellati. La soluzione progettuale consente di migliorare la sicurezza, la durabilità e la gestione dell’opera in esercizio.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha curato la progettazione esecutiva strutturale, sviluppando la modellazione tridimensionale agli elementi finiti e le verifiche secondo NTC 2018, con riferimento sia alle fasi costruttive sia alla configurazione finale dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'L’attività ha incluso anche la verifica del sistema di raccolta e smaltimento delle acque meteoriche, integrando progettazione strutturale e valutazioni idrauliche a supporto della corretta funzionalità del nuovo cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Progettazione esecutiva strutturale',
          'Modellazione FEM tridimensionale',
          'Verifiche SLU e SLE',
          'Verifica idraulica del sistema di drenaggio',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-312-a14',
    title: 'Cavalcavia n. 312 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 507+040',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-312-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-312-a14/cover.jpg',
      '/images/progetti/cavalcavia-312-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 312 lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni localizzati di degrado su spalle, pile, pulvini, impalcati e sistemi di smaltimento delle acque, con presenza di percolamenti, efflorescenze, lesioni ramificate su calcestruzzo degradato, ossidazione di elementi metallici e criticità in corrispondenza dei giunti.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta agli ammaloramenti localizzati dell’intradosso della campata centrale, agli sbalzi laterali, agli appoggi su pile e alla funzionalità del sistema di raccolta e smaltimento delle acque meteoriche.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavi.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-318-a14',
    title: 'Cavalcavia n. 318 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 518+152',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-318-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-318-a14/cover.jpg',
      '/images/progetti/cavalcavia-318-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 318, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da una travata in semplice appoggio con due sbalzi, con impalcato in calcestruzzo armato precompresso alleggerito e pile in calcestruzzo armato a sezione variabile.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato campate laterali, campata centrale e pile, con particolare attenzione alle sezioni più sollecitate in mezzeria e in corrispondenza degli appoggi.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo dell’opera, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione del cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-323-a14',
    title: 'Cavalcavia n. 323 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 522+633',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-323-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-323-a14/cover.jpg',
      '/images/progetti/cavalcavia-323-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 323, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da tre campate: una campata centrale in calcestruzzo armato precompresso e due campate laterali in calcestruzzo armato ordinario, costituite da solettoni pieni. Le sottostrutture sono formate da pile in calcestruzzo armato a sezione variabile, dotate di pulvino, e spalle in c.a. ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato campata centrale, campate laterali e pile.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-328-a14',
    title: 'Cavalcavia n. 328 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 558+331',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-328-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-328-a14/cover.jpg',
      '/images/progetti/cavalcavia-328-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 328, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da tre campate: una campata centrale in calcestruzzo armato precompresso, realizzata con solettone alleggerito, e due campate laterali in calcestruzzo armato ordinario, costituite da solettoni pieni. Le sottostrutture sono formate da pile in calcestruzzo armato a sezione variabile, dotate di pulvino, e spalle in c.a. ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato campata centrale, campate laterali e pile.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-357-a14',
    title: 'Cavalcavia n. 357 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 566+842',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-357-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-357-a14/cover.jpg',
      '/images/progetti/cavalcavia-357-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 357, lo Studio ha svolto le verifiche preliminari di sicurezza mediante analisi strutturale e modellazione numerica. L’opera è costituita da tre campate, con campata centrale a sezione composta acciaio-calcestruzzo e due campate laterali in calcestruzzo armato ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale disponibile, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle informazioni disponibili. La valutazione è stata sviluppata in forma preliminare, in attesa del completamento del piano di indagini, assumendo un Livello di Conoscenza LC1.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato le campate laterali, la campata centrale, le travi longitudinali e le solette, con analisi nelle condizioni di ponte adeguato e, successivamente, di ponte operativo con orizzonte temporale ridotto.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un primo quadro tecnico del cavalcavia, integrando analisi documentale, rilievi, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-375-a14',
    title: 'Cavalcavia n. 375 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 586+777',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-375-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-375-a14/cover.jpg',
      '/images/progetti/cavalcavia-375-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 375 lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni di degrado localizzati su spalle, pile, pulvini, impalcati, appoggi e giunti, con presenza di percolamenti, efflorescenze, lesioni su ripristini, calcestruzzo ammalorato, armature scoperte e ossidate, oltre a criticità diffuse sugli sbalzi e sui sistemi di continuità e tenuta.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta agli ammaloramenti degli elementi in calcestruzzo armato, allo stato di conservazione delle travi e dei traversi, all’ossidazione degli appoggi su pile e alla presenza di cedimenti della mantellata in corrispondenza delle spalle.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia',
      },
      {
        type: 'paragraph',
        text: '.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-378-a14',
    title: 'Cavalcavia n. 378 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 589+11',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-378-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-378-a14/cover.jpg',
      '/images/progetti/cavalcavia-378-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 378 lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni localizzati di degrado su spalle, pile, pulvini, impalcati, appoggi e sistemi di smaltimento delle acque, con presenza di percolamenti, efflorescenze, calcestruzzo ammalorato, armature scoperte e ossidate, ossidazione degli elementi metallici e criticità puntuali su bullonature e controventature.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alle condizioni delle campate laterali in calcestruzzo armato, della campata centrale con elementi metallici, degli appoggi su pile e alla presenza di svuotamenti sotto le spalle, oltre alla funzionalità del sistema di raccolta delle acque meteoriche.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-381-a14',
    title: 'Cavalcavia n. 381 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 592+279',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-381-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-381-a14/cover.jpg',
      '/images/progetti/cavalcavia-381-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 381 lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni localizzati di degrado su spalle, pile, pulvini, impalcati, appoggi, giunti e sistemi di smaltimento delle acque, con presenza di efflorescenze, percolamenti, calcestruzzo ammalorato, armature scoperte e ossidate, ossidazione degli elementi metallici e lesioni sui ripristini.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta agli ammaloramenti dell’intradosso della campata centrale, agli sbalzi, agli appoggi su pile, alla permeabilità dei giunti e alla presenza di abbassamenti della mantellata in corrispondenza della spalla 2, oltre alla deformazione localizzata della controventatura di montaggio.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia..',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-388-a14',
    title: 'Cavalcavia n. 388 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 599+604',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-388-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-388-a14/cover.jpg',
      '/images/progetti/cavalcavia-388-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 388 lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni localizzati di degrado su pile, pulvini, impalcati, appoggi, giunti e sistemi di smaltimento delle acque, con presenza di percolamenti, efflorescenze, lesioni sui ripristini, calcestruzzo ammalorato, armature scoperte e ossidate, oltre a ossidazione degli elementi metallici della campata centrale.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta agli ammaloramenti dell’intradosso della campata centrale, agli sbalzi delle tre campate, alla permeabilità dei giunti, all’ossidazione degli appoggi e alle criticità dei pluviali, risultati in parte fuori imbocco o danneggiati.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-412-a14',
    title: 'Cavalcavia n. 412 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 635+675',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-412-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-412-a14/cover.jpg',
      '/images/progetti/cavalcavia-412-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 412, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da un impalcato centrale in calcestruzzo armato precompresso, formato da tre travi collegate trasversalmente da traversi e soletta superiore, e da campate laterali realizzate mediante portali in calcestruzzo armato ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato l’impalcato centrale, le campate laterali, i portali, le solette e gli elementi principali in c.a.p.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-417-a14',
    title: 'Cavalcavia n. 417 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 642+146',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-417-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-417-a14/cover.jpg',
      '/images/progetti/cavalcavia-417-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 417, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da un impalcato centrale in calcestruzzo armato precompresso, formato da quattro travi collegate trasversalmente da traversi e soletta superiore, e da campate laterali realizzate mediante portali in calcestruzzo armato ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato le campate laterali, i portali, la campata centrale, le travi in c.a.p. e la soletta.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-425-a14',
    title: 'Cavalcavia n. 425 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 651+671',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-425-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-425-a14/cover.jpg',
      '/images/progetti/cavalcavia-425-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 425, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da un impalcato centrale in calcestruzzo armato precompresso, formato da quattro travi collegate trasversalmente da traversi e soletta superiore, e da campate laterali realizzate mediante portali in calcestruzzo armato ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato le campate laterali, i portali, la campata centrale, le travi in c.a.p. e la soletta.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-449-a14',
    title: 'Cavalcavia n. 449 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 677+517',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-449-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-449-a14/cover.jpg',
      '/images/progetti/cavalcavia-449-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 449, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da tre campate, con campata centrale in calcestruzzo armato precompresso a solettone alleggerito e campate laterali in calcestruzzo armato ordinario, anch’esse realizzate con solettoni alleggeriti. Le sottostrutture sono costituite da pile in calcestruzzo armato a sezione variabile e spalle a mensola in c.a. ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale, il confronto con lo stato di fatto, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato la campata centrale, le campate laterali e le pile.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-451-a14',
    title: 'Cavalcavia n. 451 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 678+765',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-451-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-451-a14/cover.jpg',
      '/images/progetti/cavalcavia-451-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 451 lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni di degrado su spalle, pile, pulvini, impalcati, appoggi e giunti, con presenza di efflorescenze, percolamenti, lesioni sui ripristini, calcestruzzo ammalorato e risonante, spigoli lesionati o distaccati e armature scoperte e ossidate.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alle campate laterali, interessate da ammaloramenti diffusi sulle travi di bordo, agli sbalzi delle tre campate, alle solette in corrispondenza dei giunti su pile, all’ossidazione degli elementi metallici della campata centrale e alle criticità dei giunti, risultati lesionati, distaccati e permeabili.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-480-a14',
    title: 'Cavalcavia n. 480 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, Km 713+212',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-480-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-480-a14/cover.jpg',
      '/images/progetti/cavalcavia-480-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 480, lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da tre campate, con campata centrale a sezione composta acciaio-calcestruzzo, formata da due travi principali metalliche e soletta collaborante in calcestruzzo armato, e due campate laterali in calcestruzzo armato ordinario.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale disponibile, il confronto con lo stato di fatto, il rilievo strutturale degli elementi in c.a. e in carpenteria metallica, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato gli impalcati laterali, la campata centrale, le travi metalliche, le solette, le connessioni, i giunti bullonati, gli elementi secondari e le sottostrutture.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, rilievi, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-483-a14',
    title: 'Cavalcavia n. 483 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 715+139',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-483-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-483-a14/cover.jpg',
      '/images/progetti/cavalcavia-483-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 483, lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni di degrado su spalle, pile, pulvini, impalcati, appoggi e giunti, con presenza di percolamenti, efflorescenze, calcestruzzo ammalorato e lesionato, armature scoperte e ossidate, ossidazione delle travi metalliche e criticità localizzate sugli apparecchi di appoggio.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alla campata centrale, interessata da ossidazione e sfogliamento della vernice delle travi metalliche, alle campate laterali in calcestruzzo armato, agli sbalzi, ai giunti permeabili e agli appoggi su entrambe le pile, dove sono stati segnalati ossidazioni, presenza di detriti e un bullone allentato per dado mancante. Nelle immagini del rapporto è inoltre documentata la presenza di accumuli di materiale in corrispondenza degli appoggi, oltre allo svuotamento sotto la spalla 1.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-492-a14',
    title: 'Cavalcavia n. 492 – A14',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A14, km 726+414',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-492-a14/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-492-a14/cover.jpg',
      '/images/progetti/cavalcavia-492-a14/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A14 Vasto–Foggia, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 492, lo Studio ha analizzato il quadro ispettivo disponibile a supporto della valutazione dello stato di conservazione dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il rapporto ispettivo ha evidenziato fenomeni di degrado su spalle, pile, pulvini, impalcati, appoggi, giunti e sistema di smaltimento delle acque, con presenza di percolamenti, efflorescenze, lesioni sui ripristini, calcestruzzo ammalorato, armature scoperte e ossidate, oltre a ossidazione degli elementi metallici della campata centrale.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alle travi della campata centrale, interessate da ossidazione e sfogliamento della vernice, alle campate laterali in calcestruzzo armato, agli sbalzi, agli appoggi della campata centrale e ai giunti, risultati interessati da distacco dei tamponi e permeabilità. Il rapporto documenta inoltre criticità localizzate sul sistema di smaltimento delle acque, con parte terminale di un pluviale danneggiata.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico sintetico delle principali criticità manutentive dell’opera, utile alla programmazione degli interventi di ripristino e alla gestione della sicurezza del cavalcavia.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'cavalcavia-95-a16',
    title: 'Cavalcavia n. 95 – A16',
    description: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A16, Napoli–Canosa, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Cavalcavia',
    year: 2021,
    location: 'A16, km 157+979',
    client: 'Autostrade per l’Italia – Direzione Tronco VIII',
    duration: '2020 - 2021',
    services: 'Valutazione della sicurezza e analisi dello stato di conservazione. Verifiche statiche e sismiche mediante metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/cavalcavia-95-a16/cover.jpg',
    gallery: [
      '/images/progetti/cavalcavia-95-a16/cover.jpg',
      '/images/progetti/cavalcavia-95-a16/01.jpg',
    ],
    scope: [
      ' Valutazione della sicurezza strutturale',
      ' Verifiche statiche e sismiche',
      ' Modellazione FEM dell’opera',
      ' Analisi del comportamento globale e locale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento rientra nell’attività di valutazione della sicurezza delle opere d’arte presenti lungo il tratto autostradale A16, Napoli–Canosa, affidata da Autostrade per l’Italia e relativa a un insieme di cavalcavia esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Per il Cavalcavia n. 95 lo Studio ha svolto le verifiche di sicurezza mediante analisi strutturale e modellazione FEM. L’opera è costituita da tre campate in struttura mista acciaio-calcestruzzo, con travi principali e longherine in acciaio e soletta collaborante in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha previsto l’analisi della documentazione progettuale disponibile, il confronto con lo stato di fatto, il rilievo strutturale degli elementi in calcestruzzo armato e in carpenteria metallica, l’esame dello stato di conservazione e l’interpretazione delle indagini disponibili, consentendo il raggiungimento del Livello di Conoscenza LC3.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato gli impalcati laterali, la campata centrale, le travi metalliche, le solette, i giunti bullonati, le connessioni e le sottostrutture.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del cavalcavia, integrando indagini, rilievi, modellazione numerica e verifiche normative a supporto della gestione e manutenzione dell’opera',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Valutazione della sicurezza strutturale',
          ' Verifiche statiche e sismiche',
          ' Modellazione FEM dell’opera',
          ' Analisi del comportamento globale e locale',
        ],
      },
    ],
  },
  {
    id: 'condominio-via-gioeni',
    title: 'Edificio Condominiale Via Gioeni 37',
    description: 'L’intervento ha riguardato l’edificio condominiale di Via Gioeni n. 37 ad Agrigento, danneggiato dall’incendio del 6 agosto 2021. Lo Studio è stato incaricato della valutazione tecnica del danno, della progettazione delle opere provvisionali di messa in sicurezza e della successiva progettazione degli interventi di consolidamento strutturale.',
    category: 'Ingegneria Strutturale',
    secondaryCategory: 'Ingegneria Forense',
    typology: 'Edificio residenziale',
    year: 2021,
    location: 'Agrigento',
    client: 'Condominio Via Gioeni 37',
    duration: '2021 (in corso)',
    services: 'Messa in sicurezza, diagnosi strutturale e progettazione esecutiva degli interventi di consolidamento dell’edificio a seguito dell’incendio del 06/08/2021.',
    amount: '€ 471.741,66',
    readTime: 2,
    cover: '/images/progetti/condominio-via-gioeni/cover.jpg',
    gallery: [
      '/images/progetti/condominio-via-gioeni/cover.jpg',
      '/images/progetti/condominio-via-gioeni/01.jpg',
      '/images/progetti/condominio-via-gioeni/02.jpg',
    ],
    scope: [
      'Diagnosi strutturale post-incendio',
      'Progettazione della messa in sicurezza',
      'Sperimentazione e validazione delle soluzioni tecniche',
      'Progettazione degli interventi di consolidamento strutturale',
      'N.B.: I lavori sono in corso e quindi prossimamente vi forniremo le foto',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato l’edificio condominiale di Via Gioeni n. 37 ad Agrigento, danneggiato dall’incendio del 6 agosto 2021. Lo Studio è stato incaricato della valutazione tecnica del danno, della progettazione delle opere provvisionali di messa in sicurezza e della successiva progettazione degli interventi di consolidamento strutturale.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche iniziali hanno evidenziato un quadro di degrado significativo, con solai sfondellati, travetti disgregati e armature compromesse nelle aree maggiormente esposte al fuoco. La condizione degli elementi danneggiati ha richiesto un approccio cautelativo, mirato a prevenire possibili fenomeni di collasso progressivo e a garantire la messa in sicurezza immediata delle porzioni compromesse.',
      },
      {
        type: 'paragraph',
        text: 'Tra gli aspetti più significativi del progetto rientra lo sviluppo di soluzioni tecniche specifiche per le condizioni riscontrate in sito: un sistema di appoggio continuo “soffice” con schiuma poliuretanica, per compensare l’irregolarità dell’intradosso degradato, e una soluzione alternativa per il consolidamento delle macerie mediante malta fluida, da utilizzare come base sicura per i puntelli.',
      },
      {
        type: 'paragraph',
        text: 'La fase di consolidamento ha previsto il ripristino dei travetti con malta tixotropica e armature integrative, l’ancoraggio alle travi di bordo, la ricostruzione di travi con betoncino colabile e connettori, l’inserimento di armature rompitratta, la precompressione esterna dei travetti con cavi post-tesi e il consolidamento dei pilastri mediante scarifica, ripristino e cerchiatura metallica.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’intervento ha integrato diagnosi, opere provvisionali, sperimentazione e progettazione strutturale, con l’obiettivo di garantire la sicurezza dell’edificio e recuperare la capacità resistente degli elementi danneggiati.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Diagnosi strutturale post-incendio',
          'Progettazione della messa in sicurezza',
          'Sperimentazione e validazione delle soluzioni tecniche',
          'Progettazione degli interventi di consolidamento strutturale',
          'N.B.: I lavori sono in corso e quindi prossimamente vi forniremo le foto',
        ],
      },
    ],
  },
  {
    id: 'diga-villarosa',
    title: 'Diga Villarosa',
    description: 'L’intervento riguarda i lavori di riefficientamento di un tratto del Fiume Morello a valle della Diga di Villarosa, finalizzati al miglioramento della funzionalità idraulica del corso d’acqua e alla sistemazione delle sponde.',
    category: 'Ingegneria Strutturale',
    typology: 'Diga',
    year: 2025,
    location: 'Villarosa (EN)',
    client: 'Dipartimento Regionale Tecnico – Dipartimento Regionale dell’Autorità di Bacino del Distretto Idrografico Sicilia',
    services: 'Progettazione esecutiva ed esecuzione indagini geologiche inerente ai lavori di riefficientamento di un tratto del fiume Morello a valle della diga.',
    amount: '€ 1.901.069,29',
    readTime: 2,
    cover: '/images/progetti/diga-villarosa/cover.jpg',
    gallery: [
      '/images/progetti/diga-villarosa/cover.jpg',
      '/images/progetti/diga-villarosa/01.jpg',
      '/images/progetti/diga-villarosa/02.jpg',
    ],
    scope: [
      'Progettazione ed esecuzione indagini geologiche',
      'Progettazione esecutiva strutturale',
      'Caratterizzazione geotecnica e sismica',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento riguarda i lavori di riefficientamento di un tratto del Fiume Morello a valle della Diga di Villarosa, finalizzati al miglioramento della funzionalità idraulica del corso d’acqua e alla sistemazione delle sponde.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio, nell’ambito del gruppo di progettazione, ha svolto attività di progettazione esecutiva, supportata dall’esecuzione e dall’interpretazione delle indagini geologiche, geotecniche e sismiche necessarie alla definizione del modello del terreno e delle condizioni di sicurezza dell’intervento.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto prevede la sistemazione degli argini mediante gabbioni metallici a doppia torsione riempiti con pietrame, con verifiche delle sezioni di riferimento rispetto alle principali condizioni statiche e sismiche. Le analisi hanno riguardato in particolare la stabilità delle opere a gravità, con verifiche a scorrimento, ribaltamento e capacità portante della fondazione.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha permesso di sviluppare un progetto esecutivo orientato al ripristino dell’efficienza idraulica del tratto fluviale, alla protezione delle sponde e alla riduzione delle condizioni di rischio, attraverso soluzioni tecniche coerenti con il contesto geotecnico e ambientale dell’area.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Progettazione ed esecuzione indagini geologiche',
          'Progettazione esecutiva strutturale',
          'Caratterizzazione geotecnica e sismica',
        ],
      },
    ],
  },
  {
    id: 'ex-alloggio-custode-scuola-mazzini-c-bello-di-licata',
    title: 'Ex Alloggio Custode Scuola Media G. Mazzini',
    description: 'L’intervento ha riguardato l’Ex Alloggio Custode della Scuola Media Mazzini di Campobello di Licata, edificio in muratura sito in Via Pirandello, costituito da un’unica unità strutturale sviluppata su un solo livello fuori terra, con copertura a falda inclinata e solai in laterocemento.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/ex-alloggio-custode-scuola-mazzini-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/ex-alloggio-custode-scuola-mazzini-c-bello-di-licata/cover.jpg',
      '/images/progetti/ex-alloggio-custode-scuola-mazzini-c-bello-di-licata/01.jpg',
      '/images/progetti/ex-alloggio-custode-scuola-mazzini-c-bello-di-licata/02.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato l’Ex Alloggio Custode della Scuola Media Mazzini di Campobello di Licata, edificio in muratura sito in Via Pirandello, costituito da un’unica unità strutturale sviluppata su un solo livello fuori terra, con copertura a falda inclinata e solai in laterocemento.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. L’analisi ha riguardato la geometria dell’edificio, la caratterizzazione della muratura portante in conci di tufo, i dettagli costruttivi e le proprietà meccaniche dei materiali.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alla valutazione del comportamento dei setti murari, dei collegamenti tra gli elementi strutturali e dei possibili meccanismi locali, tipici degli edifici esistenti in muratura.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti è stato sviluppato un modello FEM dell’edificio, con verifiche per carichi verticali e azioni sismiche sui maschi murari, sulle fasce di piano e sui principali cinematismi locali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali dell’edificio, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli eventuali interventi di riduzione del rischio e incremento della sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'ex-convento-ex-chiesa-cosenza',
    title: 'Ex Convento ed ex Chiesa Santa Chiara',
    description: 'L’intervento ha riguardato l’aggregato edilizio storico dell’Ex Convento Santa Chiara e dell’Ex Chiesa Santa Chiara di Cosenza, in Piazza XV Marzo, complesso in muratura risalente al XVI secolo e sottoposto a vincolo di tutela.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio monumentale',
    year: 2024,
    location: 'Cosenza',
    client: 'Soprintendenza della Provincia di Cosenza',
    services: 'Verifica di vulnerabilità sismica e progetto di fattibilità tecnica ed economica degli interventi di miglioramento sismico',
    amount: '€ 1.440.577,07',
    readTime: 2,
    cover: '/images/progetti/ex-convento-ex-chiesa-cosenza/cover.jpg',
    gallery: [
      '/images/progetti/ex-convento-ex-chiesa-cosenza/cover.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/01.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/02.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/03.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/04.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/05.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/06.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/07.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/08.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/09.jpg',
      '/images/progetti/ex-convento-ex-chiesa-cosenza/10.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Rilievo Laser Scanner 3D, Modello BIM e indagini LC3',
      'Modellazione FEM e analisi dei meccanismi locali',
      'PFTE degli interventi di miglioramento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato l’aggregato edilizio storico dell’Ex Convento Santa Chiara e dell’Ex Chiesa Santa Chiara di Cosenza, in Piazza XV Marzo, complesso in muratura risalente al XVI secolo e sottoposto a vincolo di tutela.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio è stato incaricato della verifica di vulnerabilità sismica e dello sviluppo del progetto di fattibilità tecnica ed economica degli interventi di miglioramento sismico, con l’obiettivo di incrementare il livello di sicurezza del complesso nel rispetto del valore storico e della configurazione costruttiva originaria.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha integrato rilievo geometrico e materico, indagini in sito, prove sui materiali, rilievo Laser Scanner 3D, restituzione su modello BIM e modellazione strutturale. Il piano di indagini è stato finalizzato al raggiungimento del Livello di Conoscenza LC3, secondo NTC 2018 e Circolare applicativa.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno evidenziato una struttura in muratura portante con paramenti irregolari e carenze negli ammorsamenti, richiedendo verifiche sia sul comportamento globale dell’aggregato sia sui principali meccanismi locali.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto ha previsto interventi mirati e compatibili con il carattere storico del bene: iniezioni di malta, chiodature trasversali, cuciture di cantonali e intersezioni murarie, chiodature di archi e colonne, consolidamento di pareti isolate, tirantini antiespulsivi, funi architettoniche di stabilizzazione e controventi sotto intonaco.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un sistema di interventi calibrato sulle reali condizioni dell’opera, orientato al miglioramento della sicurezza sismica, alla conservazione del patrimonio costruito e alla compatibilità con il valore storico-architettonico del complesso.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Rilievo Laser Scanner 3D, Modello BIM e indagini LC3',
          'Modellazione FEM e analisi dei meccanismi locali',
          'PFTE degli interventi di miglioramento sismico',
        ],
      },
    ],
  },
  {
    id: 'galleria-balzi-rossi',
    title: 'Galleria Balzi Rossi',
    description: 'L’intervento ha riguardato la Galleria Balzi Rossi, infrastruttura stradale lungo la SS 1 DIR “dei Balzi Rossi”, nel tratto di collegamento tra Ventimiglia e il confine con la Francia.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Galleria',
    year: 2026,
    location: 'SS 1 DIR “dei Balzi Rossi”, Ventimiglia (IM)',
    client: 'Anas S.p.A.',
    services: 'Progetto esecutivo degli interventi di ripristino corticale, studio diagnostico del degrado, definizione delle tipologie di intervento, dimensionamento dei connettori, impermeabilizzazione e captazione delle acque di percolazione.',
    readTime: 2,
    cover: '/images/progetti/galleria-balzi-rossi/cover.jpg',
    gallery: [
      '/images/progetti/galleria-balzi-rossi/cover.jpg',
      '/images/progetti/galleria-balzi-rossi/01.jpg',
      '/images/progetti/galleria-balzi-rossi/02.jpg',
      '/images/progetti/galleria-balzi-rossi/03.jpg',
      '/images/progetti/galleria-balzi-rossi/04.jpg',
      '/images/progetti/galleria-balzi-rossi/05.jpg',
    ],
    scope: [
      'Studio diagnostico del degrado',
      'Progetto esecutivo di risanamento',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Galleria Balzi Rossi, infrastruttura stradale lungo la SS 1 DIR “dei Balzi Rossi”, nel tratto di collegamento tra Ventimiglia e il confine con la Francia.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato il progetto esecutivo degli interventi di ripristino corticale del rivestimento in calcestruzzo e delle opere di captazione delle acque di percolazione, a seguito dello studio diagnostico del manufatto e delle indagini eseguite in sito.',
      },
      {
        type: 'paragraph',
        text: 'La galleria, costituita da una singola canna con rivestimento in calcestruzzo, non presentava evidenti segni di dissesto, ma era interessata da fenomeni di degrado corticale, vuoti e distacchi localizzati in calotta, venute d’acqua e stillicidi. Il quadro conoscitivo è stato definito mediante rilievi GPR, carotaggi per la caratterizzazione del calcestruzzo e rilievo laser scanner.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto ha previsto diverse tipologie di intervento, calibrate in funzione dell’entità del degrado e dello spessore da ripristinare, comprendendo fresature superficiali, rasature protettive, ricostruzioni volumetriche con malte tixotropiche fibrorinforzate, reti elettrosaldate e connettori zincati.',
      },
      {
        type: 'paragraph',
        text: 'Sono stati inoltre definiti interventi specifici in corrispondenza dei giunti e dell’estradosso della galleria, con sistemi di ripristino localizzato e iniezioni di resine poliuretaniche per la captazione e il controllo delle acque di percolazione.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un sistema organico di risanamento, integrando diagnosi del degrado, progettazione degli interventi, scelta delle tecnologie esecutive e soluzioni per il controllo delle infiltrazioni, a supporto della durabilità e della funzionalità della galleria.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Studio diagnostico del degrado',
          'Progetto esecutivo di risanamento',
        ],
      },
    ],
  },
  {
    id: 'galleria-chighizzu',
    title: 'Galleria Rete TEN Chighizzu II',
    description: 'L’intervento ha riguardato la Galleria Rete TEN Chighizzu II, lungo la S.S. 131 “di Carlo Felice”, nell’ambito dei lavori di completamento, consolidamento e adeguamento dell’infrastruttura.',
    category: 'Monitoraggio Strutturale',
    typology: 'Galleria',
    year: 2026,
    location: 'S.S. 131 “di Carlo Felice”, Sardegna',
    client: 'Steelconcrete, Vittadello S.p.A.',
    services: 'Progetto del sistema di monitoraggio statico delle fornici, analisi critica del monitoraggio offerto in fase di gara, proposta in variante, definizione della strumentazione, architettura di acquisizione e trasmissione dati.',
    readTime: 2,
    cover: '/images/progetti/galleria-chighizzu/cover.jpg',
    gallery: [
      '/images/progetti/galleria-chighizzu/cover.jpg',
    ],
    scope: [
      'Analisi critica del sistema offerto in gara',
      'Progetto di monitoraggio statico',
      'Architettura di acquisizione e trasmissione dati',
      'Dashboard web e gestione digitale del monitoraggio',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Galleria Rete TEN Chighizzu II, lungo la S.S. 131 “di Carlo Felice”, nell’ambito dei lavori di completamento, consolidamento e adeguamento dell’infrastruttura.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato il progetto del sistema di monitoraggio statico dei due fornici, predisponendo una proposta in variante rispetto alla configurazione prevista in fase di offerta dalle imprese esecutrici.',
      },
      {
        type: 'paragraph',
        text: 'L’opera è costituita da una galleria naturale a doppio fornice, interessata da interventi di ripristino del rivestimento, riempimento dei vuoti a tergo della calotta e impermeabilizzazione dei giunti. La proposta di monitoraggio è stata calibrata sulle effettive condizioni dell’opera e sulla natura degli interventi previsti, evitando sistemi ridondanti e privilegiando un controllo mirato dei principali parametri statici.',
      },
      {
        type: 'paragraph',
        text: 'Il sistema proposto prevede l’impiego di inclinometri, barrette estensimetriche e celle di pressione, integrati in una rete di acquisizione e trasmissione dati da remoto. L’architettura digitale consente la raccolta, l’archiviazione e la consultazione dei dati tramite piattaforma web, garantendo tracciabilità delle misure e controllo dell’evoluzione del comportamento della galleria nel tempo.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire una soluzione di monitoraggio coerente con le reali esigenze dell’infrastruttura, a supporto della sicurezza, della manutenzione e della gestione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Analisi critica del sistema offerto in gara',
          'Progetto di monitoraggio statico',
          'Architettura di acquisizione e trasmissione dati',
          'Dashboard web e gestione digitale del monitoraggio',
        ],
      },
    ],
  },
  {
    id: 'galleria-dogana',
    title: 'Galleria Artificiale Dogana',
    description: 'L’intervento ha riguardato la Galleria Artificiale Dogana, nell’ambito dei lavori di risanamento del manufatto lungo la SS 1 DIR dei Balzi Rossi.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Galleria',
    year: 2026,
    location: 'SS 1 DIR dei Balzi Rossi, Ventimiglia (IM)',
    client: 'C&F Costruzioni S.r.l.',
    services: 'Consulenza tecnica per il risanamento, con valutazione delle tecniche di scarifica, dei materiali di ripristino e proposta di sostituire la rete GFRP.',
    readTime: 2,
    cover: '/images/progetti/galleria-dogana/cover.jpg',
    gallery: [
      '/images/progetti/galleria-dogana/cover.jpg',
      '/images/progetti/galleria-dogana/01.jpg',
      '/images/progetti/galleria-dogana/02.jpg',
      '/images/progetti/galleria-dogana/03.jpg',
    ],
    scope: [
      'Consulenza tecnica per interventi di risanamento',
      'Analisi dello stato di degrado del calcestruzzo',
      'Valutazione delle tecniche di scarifica',
      'Ottimizzazione del ciclo di ripristino corticale',
      'Valutazione dei materiali di ripristino',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Galleria Artificiale Dogana, nell’ambito dei lavori di risanamento del manufatto lungo la SS 1 DIR dei Balzi Rossi.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto una consulenza tecnica specialistica a supporto dell’impresa esecutrice, finalizzata alla valutazione delle soluzioni più idonee per il ripristino corticale del calcestruzzo ammalorato e per l’ottimizzazione delle fasi operative di cantiere.',
      },
      {
        type: 'paragraph',
        text: 'L’attività ha previsto l’analisi delle principali forme di degrado, riconducibili a fenomeni di carbonatazione e aggressione cloridrica, e la valutazione delle tecniche di preparazione del supporto, con particolare attenzione al controllo degli spessori da rimuovere e alla corretta adesione degli strati di ripristino.',
      },
      {
        type: 'paragraph',
        text: 'La consulenza ha inoltre riguardato il confronto tra le soluzioni previste in progetto e possibili alternative esecutive, tra cui l’impiego della fresatura meccanica in luogo dell’idrodemolizione e la sostituzione della rete in GFRP con rete elettrosaldata zincata, in funzione della durabilità dell’intervento e del comportamento della malta tixotropica fibrorinforzata R4.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito un supporto tecnico-operativo alla corretta impostazione del ciclo di risanamento, integrando analisi del degrado, scelta delle tecnologie di intervento e valutazione dei materiali più idonei per il ripristino della galleria.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Consulenza tecnica per interventi di risanamento',
          'Analisi dello stato di degrado del calcestruzzo',
          'Valutazione delle tecniche di scarifica',
          'Ottimizzazione del ciclo di ripristino corticale',
          'Valutazione dei materiali di ripristino',
        ],
      },
    ],
  },
  {
    id: 'galleria-segesta',
    title: 'Galleria Segesta',
    description: 'L’intervento ha riguardato la Galleria Segesta, lungo l’A29 Dir “Alcamo-Trapani”, al km 7+040, carreggiata in direzione Alcamo, nell’ambito dei lavori di adeguamento delle strutture e degli impianti tecnologici.',
    category: 'Ingegneria Infrastrutturale',
    secondaryCategory: 'Monitoraggio Strutturale',
    typology: 'Galleria',
    year: 2023,
    location: 'A29 Direzione “Alcamo-Trapani”',
    client: 'ANAS S.p.A. – Struttura Territoriale Sicilia – Area Gestione Rete Autostrade',
    duration: '2022 - 2023',
    services: 'Studio diagnostico, piano di indagini e monitoraggio, progettazione strutturale in variante degli interventi locali.',
    amount: '€ 15.704.146,84',
    readTime: 2,
    cover: '/images/progetti/galleria-segesta/cover.jpg',
    gallery: [
      '/images/progetti/galleria-segesta/cover.jpg',
      '/images/progetti/galleria-segesta/01.jpg',
      '/images/progetti/galleria-segesta/02.jpg',
      '/images/progetti/galleria-segesta/03.jpg',
      '/images/progetti/galleria-segesta/04.jpg',
      '/images/progetti/galleria-segesta/05.jpg',
    ],
    scope: [
      'Diagnosi strutturale',
      'Piano di indagini',
      'Progettazione in variante degli interventi locali',
      'Monitoraggio strutturale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Galleria Segesta, lungo l’A29 Dir “Alcamo-Trapani”, al km 7+040, carreggiata in direzione Alcamo, nell’ambito dei lavori di adeguamento delle strutture e degli impianti tecnologici.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività specialistica di diagnosi strutturale, pianificazione delle indagini, definizione del monitoraggio e progettazione in variante degli interventi locali. L’analisi si è concentrata sullo stato di degrado del rivestimento, sul quadro fessurativo e sulle criticità presenti in calotta, con particolare attenzione alle lesioni in chiave e alle porzioni interessate da riduzione della sezione resistente.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha integrato analisi documentale, indagini in sito e prove sperimentali, permettendo di ricostruire la geometria dell’opera, le caratteristiche dei materiali e le effettive condizioni di degrado.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base delle indagini svolte sono stati definiti interventi mirati di risanamento della calotta, di cucitura delle lesioni in chiave e di riparazione delle porzioni ammalorate. Le lavorazioni hanno previsto iniezioni di malta da ripristino, ricostruzione degli spessori mancanti e l’impiego di reti e connettori in GFRP, oltre a interventi puntuali su cavità e discontinuità del rivestimento, necessari a ristabilire continuità e durabilità della sezione resistente.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto è stato completato con la definizione di un piano di monitoraggio strutturale, finalizzato al controllo degli effetti delle lavorazioni e alla valutazione della risposta della galleria durante e dopo gli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di trasformare un quadro complesso di degrado, difetti locali e incertezze geometriche in un sistema coordinato di interventi verificati, calibrati sulle reali condizioni dell’opera e orientati al ripristino della sicurezza e della durabilità dell’infrastruttura.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Diagnosi strutturale',
          'Piano di indagini',
          'Progettazione in variante degli interventi locali',
          'Monitoraggio strutturale',
        ],
      },
    ],
  },
  {
    id: 'localita-missa-me',
    title: 'Località Missa',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP7 Km 1+050, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/localita-missa-me/cover.jpg',
    gallery: [
      '/images/progetti/localita-missa-me/cover.jpg',
      '/images/progetti/localita-missa-me/01.jpg',
      '/images/progetti/localita-missa-me/02.jpg',
      '/images/progetti/localita-missa-me/03.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio dell’opera in Località Missa, un piccolo ponte ad arco in muratura con ampliamento in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'L’ispezione ha evidenziato fenomeni di degrado localizzati su murature, solettone ed elementi accessori della carreggiata, con indicazione degli interventi di ripristino e manutenzione necessari.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'opera-1-comune-di-troina',
    title: 'Opera d’arte n. 1 – S.P. 55a',
    description: 'L’intervento riguarda l’opera d’arte n. 1 nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, nel territorio comunale di Troina, interessate dal transito programmato di un carico eccezionale.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Opera d\'arte',
    year: 2025,
    location: 'S.P. 55a, Troina (EN)',
    client: 'Impresa Di Cataldo S.r.l.',
    services: 'Verifica di sicurezza per transito eccezionale, esecuzione e interpretazione di prove di carico, progettazione degli interventi di consolidamento, supporto al transito di carico eccezionale. Verifica di sicurezza per transito eccezionale nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, esecuzione e interpretazione di prove di carico, analisi dello stato di dissesto, progettazione degli interventi di consolidamento dei muri andatori, dimensionamento del sistema di tiranti e carpenterie metalliche, supporto tecnico alla fase esecutiva',
    readTime: 2,
    cover: '/images/progetti/opera-1-comune-di-troina/cover.jpg',
    gallery: [
      '/images/progetti/opera-1-comune-di-troina/cover.jpg',
      '/images/progetti/opera-1-comune-di-troina/01.jpg',
      '/images/progetti/opera-1-comune-di-troina/02.jpg',
      '/images/progetti/opera-1-comune-di-troina/03.jpg',
      '/images/progetti/opera-1-comune-di-troina/04.jpg',
      '/images/progetti/opera-1-comune-di-troina/05.jpg',
      '/images/progetti/opera-1-comune-di-troina/06.jpg',
      '/images/progetti/opera-1-comune-di-troina/07.jpg',
      '/images/progetti/opera-1-comune-di-troina/08.jpg',
      '/images/progetti/opera-1-comune-di-troina/09.jpg',
    ],
    scope: [
      'Verifica di sicurezza',
      'Prove di carico',
      'Modellazione FEM',
      'Progettazione di consolidamento',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento riguarda l’opera d’arte n. 1 nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, nel territorio comunale di Troina, interessate dal transito programmato di un carico eccezionale.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica delle condizioni di sicurezza del manufatto e la successiva progettazione degli interventi di consolidamento dei muri andatori, necessari anche a consentire il passaggio del convoglio speciale in condizioni controllate.',
      },
      {
        type: 'paragraph',
        text: 'Il manufatto è costituito da un piccolo attraversamento con tombino sottostante e muri andatori in muratura a sostegno del rilevato stradale. Le verifiche preliminari e il rilievo dello stato di fatto hanno evidenziato criticità significative sul paramento di valle, interessato da lesioni passanti e da una rotazione rispetto alla configurazione originaria.',
      },
      {
        type: 'paragraph',
        text: 'La soluzione progettuale ha previsto un sistema di stabilizzazione mediante tiranti Dywidag, profili metallici UPN, piastre di contrasto e lamiere di ripartizione, integrato con scavi a sezione obbligata, regolarizzazione delle superfici murarie e successivo riempimento con misto cementato. Le fasi esecutive hanno previsto la rimozione del terreno e predisposizione dei sistemi di contrasto fino alla posa dei tiranti, al contenimento dei paramenti e al ripristino del piano viabile.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire e realizzare un intervento mirato capace di stabilizzare i muri andatori, preservando la configurazione originaria del manufatto e garantendo la sicurezza dell’opera nelle specifiche condizioni di esercizio previste.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di sicurezza',
          'Prove di carico',
          'Modellazione FEM',
          'Progettazione di consolidamento',
        ],
      },
    ],
  },
  {
    id: 'opera-2-comune-di-troina',
    title: 'Opera d’arte n. 2 – S.P. 55a',
    description: 'L’intervento riguarda l’opera d’arte n. 2 nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, nel territorio comunale di Troina, interessate dal transito programmato di un carico eccezionale.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Opera d\'arte',
    year: 2025,
    location: 'S.P. 55a, Troina (EN)',
    client: 'Impresa Di Cataldo S.r.l.',
    services: 'Verifica di sicurezza per transito eccezionale, prove di carico, monitoraggio sperimentale, modellazione FEM, giudizio di transitabilità.',
    readTime: 2,
    cover: '/images/progetti/opera-2-comune-di-troina/cover.jpg',
    gallery: [
      '/images/progetti/opera-2-comune-di-troina/cover.jpg',
    ],
    scope: [
      'Verifica di sicurezza',
      'Prove di carico',
      'Modellazione FEM e confronto numerico-sperimentale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento riguarda l’opera d’arte n. 2 nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, nel territorio comunale di Troina, interessate dal transito programmato di un carico eccezionale.',
      },
      {
        type: 'paragraph',
        text: 'L’opera si presentava in buono stato di conservazione generale e non mostrava evidenti segni di dissesto strutturale. Lo Studio ha quindi predisposto un programma sperimentale basato su prove di carico con mezzi di diversa portata, integrato da indagini sui materiali, rilievi costruttivi e misure estensimetriche sulla struttura dell’arco. Le rilevazioni sperimentali sono state utilizzate per valutare la risposta tensionale del manufatto e per supportare la modellazione numerica mediante metodo FEM.',
      },
      {
        type: 'paragraph',
        text: 'Il confronto tra risultati sperimentali e analisi numeriche ha consentito di formulare un giudizio tecnico sulla transitabilità dell’opera. Le verifiche, condotte con riferimento al comportamento in esercizio, hanno evidenziato valori tensionali compatibili con le caratteristiche del calcestruzzo e lontani da condizioni fessurative o di rottura.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di validare il comportamento statico del ponticello e di confermare l’idoneità del manufatto al transito del convoglio eccezionale in condizioni di sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di sicurezza',
          'Prove di carico',
          'Modellazione FEM e confronto numerico-sperimentale',
        ],
      },
    ],
  },
  {
    id: 'opera-3-comune-di-troina',
    title: 'Opera d’arte n. 3 – S.P. 55a',
    description: 'L’intervento riguarda l’opera d’arte n. 2 nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, nel territorio comunale di Troina, interessate dal transito programmato di un carico eccezionale.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Opera d\'arte',
    year: 2025,
    location: 'S.P. 55a, Troina (EN)',
    client: 'Impresa Di Cataldo S.r.l.',
    services: 'Verifica di sicurezza per transito eccezionale, prove di carico, monitoraggio sperimentale, modellazione FEM, giudizio di transitabilità.',
    readTime: 2,
    cover: '/images/progetti/opera-3-comune-di-troina/cover.jpg',
    gallery: [
      '/images/progetti/opera-3-comune-di-troina/cover.jpg',
      '/images/progetti/opera-3-comune-di-troina/01.jpg',
    ],
    scope: [
      'Verifica di sicurezza',
      'Prove di carico',
      'Modellazione FEM e confronto numerico-sperimentale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento riguarda l’opera d’arte n. 2 nell’ambito dell’analisi di tre manufatti lungo la S.P. 55/a, nel territorio comunale di Troina, interessate dal transito programmato di un carico eccezionale.',
      },
      {
        type: 'paragraph',
        text: 'L’opera si presentava in buono stato di conservazione generale, pur mostrando segni di precedenti interventi manutentivi corticali con distacchi localizzati.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato una procedura integrata di verifica, combinando prove di carico, indagini sui materiali, rilievi geometrici e misure estensimetriche in corrispondenza della chiave e delle reni dell’arco. I dati acquisiti sono stati utilizzati per interpretare la risposta statica del manufatto e per calibrare il confronto con le elaborazioni numeriche FEM.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno permesso di valutare lo stato tensionale indotto dal transito dei mezzi di prova e di confrontarlo con le caratteristiche meccaniche del calcestruzzo rilevate in situ. Anche per questo manufatto, il giudizio conclusivo ha confermato condizioni compatibili con il transito del convoglio eccezionale in sicurezza.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico oggettivo sul comportamento statico dell’opera, integrando sperimentazione in sito, caratterizzazione dei materiali e modellazione numerica a supporto della gestione del transito speciale',
      },
      {
        type: 'paragraph',
        text: '.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di sicurezza',
          'Prove di carico',
          'Modellazione FEM e confronto numerico-sperimentale',
        ],
      },
    ],
  },
  {
    id: 'piazza-dei-cinquecento',
    title: 'Piazza dei Cinquecento',
    description: 'L’intervento ha riguardato la pavimentazione di Piazza dei Cinquecento, nell’ambito dei lavori di riqualificazione urbana dell’area antistante la stazione ferroviaria di Roma Termini.',
    category: 'Ingegneria Strutturale',
    typology: 'Spazio urbano',
    year: 2025,
    location: 'Roma',
    client: 'RTI Consorzio Stabile Costellazione di Venere / Steelconcrete Consorzio Stabile',
    services: 'Consulenza tecnica per la risoluzione delle non conformità della pavimentazione, rilievo dei dissesti, analisi diagnostica, valutazioni numeriche, individuazione delle cause, proposta degli interventi di risanamento, piano di sperimentazione e indicazioni per manutenzione e monitoraggio.',
    readTime: 2,
    cover: '/images/progetti/piazza-dei-cinquecento/cover.jpg',
    gallery: [
      '/images/progetti/piazza-dei-cinquecento/cover.jpg',
      '/images/progetti/piazza-dei-cinquecento/01.jpg',
      '/images/progetti/piazza-dei-cinquecento/02.jpg',
      '/images/progetti/piazza-dei-cinquecento/03.jpg',
      '/images/progetti/piazza-dei-cinquecento/04.jpg',
    ],
    scope: [
      'Consulenza tecnica su non conformità',
      'Rilievo dei dissesti della pavimentazione',
      'Diagnosi delle cause',
      'Valutazioni numeriche e verifiche statiche',
      'Progettazione di interventi di risanamento',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la pavimentazione di Piazza dei Cinquecento, nell’ambito dei lavori di riqualificazione urbana dell’area antistante la stazione ferroviaria di Roma Termini.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto una consulenza tecnica specialistica a supporto dell’impresa, finalizzata all’analisi delle non conformità riscontrate sulla pavimentazione in calcestruzzo architettonico e alla definizione degli interventi di riparazione e consolidamento.',
      },
      {
        type: 'paragraph',
        text: 'L’attività ha previsto l’esame della documentazione tecnica disponibile, il rilievo dei dissesti e l’interpretazione delle principali patologie osservate, tra cui fessurazioni, sbrecciamenti dei bordi delle lastre, apertura dei giunti e criticità localizzate in corrispondenza degli elementi lapidei di delimitazione.',
      },
      {
        type: 'paragraph',
        text: 'La diagnosi ha integrato rilievi in sito, valutazioni numeriche e verifiche statiche, consentendo di ricostruire il comportamento meccanico della pavimentazione e di individuare le cause dei fenomeni deformativi e fessurativi riscontrati.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base del quadro tecnico acquisito, sono state definite soluzioni mirate di risanamento, comprendenti l’intasamento dei vuoti all’interfaccia tra supporto e pavimentazione, il ripristino dei bordi danneggiati, la regolarizzazione dei giunti e la validazione delle tecnologie mediante campo prova.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di fornire alla committenza una strategia operativa per il recupero della pavimentazione, integrando diagnosi, modellazione numerica, scelta dei materiali, sperimentazione e indicazioni per la manutenzione e il monitoraggio dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Consulenza tecnica su non conformità',
          'Rilievo dei dissesti della pavimentazione',
          'Diagnosi delle cause',
          'Valutazioni numeriche e verifiche statiche',
          'Progettazione di interventi di risanamento',
        ],
      },
    ],
  },
  {
    id: 'piazzale-marconi-canicatti',
    title: 'Piazzale Marconi',
    description: 'L’intervento ha riguardato la rigenerazione urbana di Piazzale Marconi, nel centro storico di Canicattì, in un’area caratterizzata da un rilevante valore urbano e architettonico ma interessata da condizioni di degrado e da un utilizzo prevalentemente legato alla sosta veicolare.',
    category: 'Ingegneria Strutturale',
    secondaryCategory: 'Rigenerazione Urbana',
    typology: 'Spazio urbano',
    year: 2025,
    location: 'Canicattì (AG)',
    client: 'Comune di Canicattì',
    duration: '2025 – in corso',
    services: 'PFTE, progettazione esecutiva e coordinamento della sicurezza in fase di progettazione di rigenerazione urbana di Piazzale Marconi per la realizzazione di un’area attrezzata a parcheggio, utilizzabile anche come area di raccolta ai fini di protezione civile.',
    amount: '€ 429.105,23',
    readTime: 2,
    cover: '/images/progetti/piazzale-marconi-canicatti/cover.jpg',
    gallery: [
      '/images/progetti/piazzale-marconi-canicatti/cover.jpg',
      '/images/progetti/piazzale-marconi-canicatti/01.jpg',
      '/images/progetti/piazzale-marconi-canicatti/02.jpg',
      '/images/progetti/piazzale-marconi-canicatti/03.jpg',
      '/images/progetti/piazzale-marconi-canicatti/04.jpg',
      '/images/progetti/piazzale-marconi-canicatti/05.jpg',
      '/images/progetti/piazzale-marconi-canicatti/06.jpg',
      '/images/progetti/piazzale-marconi-canicatti/07.jpg',
      '/images/progetti/piazzale-marconi-canicatti/08.jpg',
      '/images/progetti/piazzale-marconi-canicatti/09.jpg',
      '/images/progetti/piazzale-marconi-canicatti/10.jpg',
      '/images/progetti/piazzale-marconi-canicatti/11.jpg',
      '/images/progetti/piazzale-marconi-canicatti/12.jpg',
    ],
    scope: [
      'Progetto di Fattibilità Tecnica ed Economica',
      'Progettazione esecutiva',
      'Coordinamento della sicurezza in fase di progettazione',
      'Studi specialistici, rilievi, indagini e gestione delle interferenze',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la rigenerazione urbana di Piazzale Marconi, nel centro storico di Canicattì, in un’area caratterizzata da un rilevante valore urbano e architettonico ma interessata da condizioni di degrado e da un utilizzo prevalentemente legato alla sosta veicolare.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha curato il Progetto di Fattibilità Tecnica ed Economica, la progettazione esecutiva e il coordinamento della sicurezza in fase di progettazione, con l’obiettivo di trasformare lo spazio esistente in un’area pubblica ordinata, funzionale e sicura, destinata a parcheggio e utilizzabile anche come area di raccolta per fini di protezione civile.',
      },
      {
        type: 'paragraph',
        text: 'La progettazione ha integrato rilievi plano-altimetrici, indagini sui sottoservizi, approfondimenti geologici e geotecnici, verifiche idrologiche e idrauliche, con particolare attenzione alla definizione delle pendenze, al sistema di smaltimento delle acque meteoriche e alla durabilità delle pavimentazioni.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto esecutivo ha previsto la sistemazione dell’area a parcheggio pubblico, la realizzazione di percorsi pedonali, aree verdi, pavimentazioni carrabili e pedonali in pietra, opere di raccolta delle acque, illuminazione pubblica, scale, ringhiere e finiture. Sono stati inoltre progettati elementi strutturali in calcestruzzo armato, tra cui muretti e opere di sostegno.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’intervento è stato concepito per restituire qualità, sicurezza e fruibilità a uno spazio urbano strategico, coniugando funzionalità infrastrutturale, decoro urbano, gestione delle acque, protezione civile e valorizzazione del centro storico.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Progetto di Fattibilità Tecnica ed Economica',
          'Progettazione esecutiva',
          'Coordinamento della sicurezza in fase di progettazione',
          'Studi specialistici, rilievi, indagini e gestione delle interferenze',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-angelo-parla',
    title: 'Plesso Scolastico Angelo Parla',
    description: 'L’intervento ha riguardato il plesso scolastico Angelo Parla di Licata, edificio pubblico in muratura adibito a scuola elementare, sviluppato su più livelli e caratterizzato da copertura lignea a falde nella porzione principale.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2020,
    location: 'Licata',
    client: 'Comune di Licata',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-angelo-parla/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-angelo-parla/cover.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/01.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/02.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/03.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/04.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/05.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/06.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/07.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/08.jpg',
      '/images/progetti/plesso-scolastico-angelo-parla/09.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Angelo Parla di Licata, edificio pubblico in muratura adibito a scuola elementare, sviluppato su più livelli e caratterizzato da copertura lignea a falde nella porzione principale.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica e la valutazione preliminare degli interventi di adeguamento sismico, nell’ambito delle attività finalizzate alla valutazione del rischio sismico e all’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha integrato rilievi geometrici, ispezioni visive.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti da mediante i risultati della campagna di indagine che ci sono stati forniti è stato sviluppato un modello FEM dell’edificio, con verifiche per carichi verticali e azioni sismiche secondo NTC 2018. Le analisi hanno permesso di individuare le vulnerabilità principali e di definire una strategia preliminare di intervento.',
      },
      {
        type: 'paragraph',
        text: 'Gli interventi proposti hanno riguardato il miglioramento dei collegamenti tra gli elementi murari, l’inserimento di catene al livello del solaio di primo piano, la realizzazione di controventature in testa ai pannelli murari e la previsione di un cordolo sommitale in calcestruzzo armato. Per i solai sono stati inoltre indicati interventi mirati di consolidamento e, nelle porzioni più critiche, sistemi provvisori di puntellamento.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali dell’edificio e una proposta preliminare di interventi orientata all’incremento della sicurezza sismica e alla tutela della funzione scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-angelo-peritore',
    title: 'Plesso Scolastico Angelo Peritore',
    description: 'L’intervento ha riguardato il plesso scolastico Angelo Peritore di Licata, edificio pubblico in calcestruzzo armato destinato a scuola elementare e materna, articolato in sei corpi strutturalmente indipendenti separati da giunti sismici, con copertura piana e palestra annessa.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2020,
    location: 'Licata',
    client: 'Comune di Licata',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-angelo-peritore/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-angelo-peritore/cover.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/01.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/02.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/03.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/04.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/05.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/06.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/07.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/08.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/09.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/10.jpg',
      '/images/progetti/plesso-scolastico-angelo-peritore/11.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Piano di indagini',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Angelo Peritore di Licata, edificio pubblico in calcestruzzo armato destinato a scuola elementare e materna, articolato in sei corpi strutturalmente indipendenti separati da giunti sismici, con copertura piana e palestra annessa.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica e la valutazione preliminare degli interventi di adeguamento sismico, nell’ambito delle attività di valutazione del rischio sismico previste dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha integrato rilievi geometrici, ispezioni visive.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti da mediante i risultati della campagna di indagine che ci sono stati forniti è stato sviluppato un modello FEM dell’edificio, con verifiche per carichi verticali e azioni sismiche secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno evidenziato carenze prestazionali su diversi elementi in c.a. e una capacità sismica non adeguata rispetto alla domanda normativa.',
      },
      {
        type: 'paragraph',
        text: 'La proposta preliminare di intervento ha previsto il rinforzo delle travi mediante tessuti in fibra di carbonio e lamine pultruse, il confinamento delle sezioni in c.a., l’incamiciatura metallica dei pilastri con profili angolari e calastrelli, oltre all’inserimento di controventi metallici con dispositivi dissipativi tipo BRAD per migliorare la risposta sismica globale del complesso.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire una strategia tecnica di adeguamento orientata al consolidamento degli elementi carenti, all’incremento della sicurezza sismica e alla tutela della funzione scolastica dell’edificio.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Piano di indagini',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-anna-frank-ag',
    title: 'Plesso Scolastico Anna Frank',
    description: 'L’intervento ha riguardato il plesso scolastico Anna Frank di Agrigento, sito in Via Matteo Cimarra e composto da tre corpi strutturalmente separati appartenenti allo stesso complesso scolastico.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2023,
    location: 'Agrigento',
    client: 'Comune di Agrigento',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-anna-frank-ag/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-anna-frank-ag/cover.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/01.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/02.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/03.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/04.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/05.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/06.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/07.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/08.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/09.jpg',
      '/images/progetti/plesso-scolastico-anna-frank-ag/10.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Anna Frank di Agrigento, sito in Via Matteo Cimarra e composto da tre corpi strutturalmente separati appartenenti allo stesso complesso scolastico.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica e la valutazione preliminare degli interventi di adeguamento sismico, con l’obiettivo di definire il livello di sicurezza delle strutture e individuare le strategie di intervento più idonee.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. Sulla base dei dati acquisiti sono stati sviluppati modelli FEM distinti per i tre edifici, valutando il comportamento degli elementi in calcestruzzo armato, dei solai in laterocemento, della copertura della palestra con tegoli binervati e delle diverse configurazioni strutturali presenti nel plesso.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno consentito di individuare le principali criticità statiche e sismiche. In particolare, per le condizioni gravitazionali sono state riscontrate carenze localizzate su alcune travi dell’Edificio 2, per le quali sono stati valutati interventi di rinforzo mediante sistemi in fibra di carbonio. Per l’adeguamento sismico è stata invece definita una strategia preliminare di intervento finalizzata al raggiungimento dei livelli di sicurezza richiesti dalla normativa.',
      },
      {
        type: 'paragraph',
        text: 'L’attività è stata completata con la classificazione del rischio sismico secondo il metodo convenzionale, attraverso la valutazione degli indicatori PAM e IS-V, e con la redazione della documentazione tecnica di sintesi a supporto della programmazione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, il lavoro ha permesso di costruire un quadro tecnico organico delle condizioni strutturali del plesso, individuando le vulnerabilità principali e fornendo alla committenza uno strumento operativo per pianificare gli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-carnevale-c-bello-di-licata',
    title: 'Plesso Scolastico Carnevale',
    description: 'L’intervento ha riguardato la Scuola Materna di Via Carnevale di Campobello di Licata, edificio scolastico in calcestruzzo armato realizzato a corpo di fabbrica unico, sviluppato su piano seminterrato e piano terra, con copertura a falde inclinate e solai in laterocemento.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/05.jpg',
      '/images/progetti/plesso-scolastico-carnevale-c-bello-di-licata/06.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Materna di Via Carnevale di Campobello di Licata, edificio scolastico in calcestruzzo armato realizzato a corpo di fabbrica unico, sviluppato su piano seminterrato e piano terra, con copertura a falde inclinate e solai in laterocemento.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. L’analisi ha riguardato la geometria dell’edificio, le caratteristiche meccaniche dei materiali, i dettagli costruttivi e lo stato di conservazione degli elementi in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta al quadro fessurativo riscontrato sulle travi, con lesioni riconducibili a sollecitazioni flessionali e taglianti, oltre alle criticità del piano seminterrato e alla valutazione delle condizioni generali di sicurezza della struttura.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti è stato sviluppato un modello FEM dell’edificio, con verifiche dei carichi verticali e dell’azione sismica su pilastri, travi e setti in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del plesso, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli interventi di messa in sicurezza, riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-di-giovanni-ag',
    title: 'Plesso Scolastico di Giovanni',
    description: 'L’intervento ha riguardato il plesso scolastico Giovanni XXIII – Di Giovanni Scurpiddu di Villaseta, Agrigento, edificio in calcestruzzo armato articolato in cinque corpi strutturalmente indipendenti.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2023,
    location: 'Agrigento',
    client: 'Comune di Agrigento',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-di-giovanni-ag/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-di-giovanni-ag/cover.jpg',
      '/images/progetti/plesso-scolastico-di-giovanni-ag/01.jpg',
      '/images/progetti/plesso-scolastico-di-giovanni-ag/02.jpg',
      '/images/progetti/plesso-scolastico-di-giovanni-ag/03.jpg',
      '/images/progetti/plesso-scolastico-di-giovanni-ag/04.jpg',
      '/images/progetti/plesso-scolastico-di-giovanni-ag/05.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Giovanni XXIII – Di Giovanni Scurpiddu di Villaseta, Agrigento, edificio in calcestruzzo armato articolato in cinque corpi strutturalmente indipendenti.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica delle condizioni statiche e della vulnerabilità sismica, nell’ambito delle attività finalizzate alla valutazione del rischio sismico degli edifici scolastici e all’aggiornamento della relativa mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il Livello di Conoscenza LC2, necessario per la modellazione strutturale e per le verifiche secondo NTC 2018. La scomposizione del complesso in unità strutturali indipendenti ha guidato lo sviluppo di modelli FEM distinti per i diversi corpi di fabbrica.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno riguardato i principali elementi resistenti in calcestruzzo armato, tra cui travi, pilastri, setti, solai e fondazioni, con verifiche sia per carichi verticali sia per azioni sismiche.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta anche alla presenza di controsoffitti non sismici e di elementi secondari potenzialmente rilevanti ai fini della sicurezza degli utenti, da valutare nelle successive fasi progettuali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del plesso, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento operativo per la programmazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-don-bosco-c-bello-di-licata',
    title: 'Plesso Scolastico Don Bosco',
    description: 'L’intervento ha riguardato la Scuola Elementare Don Bosco di Campobello di Licata, edificio scolastico in muratura sviluppato su due livelli, con copertura a doppia falda e solai in laterocemento.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/05.jpg',
      '/images/progetti/plesso-scolastico-don-bosco-c-bello-di-licata/06.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Elementare Don Bosco di Campobello di Licata, edificio scolastico in muratura sviluppato su due livelli, con copertura a doppia falda e solai in laterocemento.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. L’analisi ha riguardato la caratterizzazione della muratura portante, costituita da blocchi lapidei, la definizione delle caratteristiche meccaniche dei materiali e la valutazione dello stato di conservazione dell’edificio.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alle criticità dei solai, interessati da fenomeni diffusi di degrado, distacchi di intonaco e pregresse situazioni di crollo locale, che hanno richiesto una valutazione specifica delle condizioni di sicurezza e della capacità residua degli elementi orizzontali.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti è stato sviluppato un modello FEM dell’edificio, con verifiche dei carichi verticali e dell’azione sismica sui maschi murari, sulle fasce di piano e sui principali cinematismi locali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del plesso, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli interventi di messa in sicurezza, riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-edison-c-bello-di-licata',
    title: 'Plesso Scolastico Edison',
    description: 'L’intervento ha riguardato la Scuola Materna di Via Edison di Campobello di Licata, edificio scolastico con struttura portante a telai in calcestruzzo armato, sviluppato su tre livelli e caratterizzato da solai in laterocemento e coperture prevalentemente piane.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-edison-c-bello-di-licata/05.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Materna di Via Edison di Campobello di Licata, edificio scolastico con struttura portante a telai in calcestruzzo armato, sviluppato su tre livelli e caratterizzato da solai in laterocemento e coperture prevalentemente piane.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alle criticità locali dei solai, interessati da fenomeni di degrado, sfondellamento e tracce di umidità, oltre alla presenza di strutture metalliche di supporto realizzate in alcune porzioni dell’edificio.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti è stato sviluppato un modello FEM dell’edificio, con verifiche dei carichi verticali e dell’azione sismica su pilastri, travi e setti in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del plesso, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-garibaldi-ag',
    title: 'Plesso Scolastico Giuseppe Garibaldi',
    description: 'L’intervento ha riguardato il plesso scolastico Giuseppe Garibaldi di Agrigento, sito in Via Diodoro Siculo.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2023,
    location: 'Agrigento',
    client: 'Comune di Agrigento',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-garibaldi-ag/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-garibaldi-ag/cover.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/01.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/02.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/03.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/04.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/05.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/06.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/07.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/08.jpg',
      '/images/progetti/plesso-scolastico-garibaldi-ag/09.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Giuseppe Garibaldi di Agrigento, sito in Via Diodoro Siculo.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica e la valutazione preliminare degli interventi di adeguamento sismico, con l’obiettivo di definire le condizioni di sicurezza del complesso scolastico e individuare le strategie di intervento più idonee.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini e prove di laboratorio disponibile, sono state acquisite le informazioni necessarie sulla qualità dei materiali, sulla disposizione delle armature negli elementi in calcestruzzo armato, sulla geometria strutturale, sull’orditura dei solai, sui collegamenti in fondazione e sul quadro fessurativo. Tali dati hanno costituito la base conoscitiva per la modellazione strutturale e per le verifiche secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti sono stati sviluppati modelli FEM dei corpi strutturali, con verifiche per soli carichi gravitazionali e per combinazioni sismiche. Le analisi hanno evidenziato carenze prestazionali su elementi in calcestruzzo armato, in particolare su travi e pilastri, richiedendo la valutazione di interventi mirati di rinforzo e consolidamento locale.',
      },
      {
        type: 'paragraph',
        text: 'Per il ripristino delle prestazioni nei confronti dei carichi verticali sono stati valutati interventi di rinforzo delle travi mediante tessuti unidirezionali in fibra di carbonio, lamine pultruse e sistemi di confinamento trasversale, oltre al confinamento dei pilastri mediante incamiciatura con profili angolari e calastrelli metallici.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-hemingway-c-bello-di-licata',
    title: 'Plesso Scolastico Hemingway',
    description: 'L’intervento ha riguardato la Scuola Materna di Via Hemingway di Campobello di Licata, edificio scolastico in calcestruzzo armato sviluppato su due livelli.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-hemingway-c-bello-di-licata/05.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Materna di Via Hemingway di Campobello di Licata, edificio scolastico in calcestruzzo armato sviluppato su due livelli.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. L’analisi ha riguardato la geometria dell’edificio, le caratteristiche meccaniche dei materiali, i dettagli costruttivi e lo stato di conservazione degli elementi strutturali.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alle criticità dei solai, interessati da fenomeni di degrado, infiltrazioni e sfondellamento, oltre ad alcune configurazioni strutturali sensibili, come l’atrio centrale con lucernario e il porticato esterno sorretto da colonne circolari in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti è stato sviluppato un modello FEM dell’edificio, con verifiche dei carichi verticali e dell’azione sismica su pilastri, travi e setti in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del plesso, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-marconi-c-bello-di-licata',
    title: 'Plesso Scolastico Marconi',
    description: 'L’intervento ha riguardato la Scuola Elementare Marconi di Campobello di Licata, edificio scolastico sito in Piazza I Maggio e articolato in due corpi di fabbrica distinti.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/05.jpg',
      '/images/progetti/plesso-scolastico-marconi-c-bello-di-licata/06.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Elementare Marconi di Campobello di Licata, edificio scolastico sito in Piazza I Maggio e articolato in due corpi di fabbrica distinti.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. L’analisi ha riguardato la caratterizzazione della muratura portante, degli elementi in calcestruzzo armato, dei solai, della copertura e dei principali dettagli costruttivi.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alla diversa configurazione dei due corpi strutturali, alla presenza di murature in blocchi lapidei, agli elementi in c.a. della palestra e alle criticità della copertura lignea, interessata da lesioni diffuse e condizioni tali da richiedere una specifica valutazione del comportamento resistente.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti sono stati sviluppati modelli FEM distinti per il Corpo A e per il Corpo B, con verifiche per carich2i verticali e azioni sismiche sugli elementi in muratura, sui telai in calcestruzzo armato e sui principali cinematismi locali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del plesso, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-mazzini-c-bello-di-licata',
    title: 'Plesso Scolastico Mazzini',
    description: 'L’intervento ha riguardato la Scuola Media Mazzini di Campobello di Licata, edificio scolastico con struttura mista in muratura e calcestruzzo armato, sviluppato su tre livelli.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica e progettazione esecutiva strutturale degli interventi di consolidamento.',
    amount: '€ 138.540,06',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-mazzini-c-bello-di-licata/05.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
      'Progetto esecutivo degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Media Mazzini di Campobello di Licata, edificio scolastico con struttura mista in muratura e calcestruzzo armato, sviluppato su tre livelli.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto inizialmente la verifica di vulnerabilità sismica, nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003. A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno evidenziato alcune criticità significative, legate sia al comportamento globale dell’edificio sia alla configurazione locale di specifiche porzioni strutturali. Particolare attenzione è stata posta all’atrio interno, caratterizzato da uno schema resistente misto in cui elementi in calcestruzzo armato interagiscono con pareti in muratura, configurazione non pienamente coerente con i criteri prestazionali richiesti per l’azione sismica.',
      },
      {
        type: 'paragraph',
        text: 'A seguito della verifica, è stato sviluppato il progetto esecutivo strutturale degli interventi di consolidamento degli elementi risultati non verificati per le azioni statiche. La progettazione ha riguardato in particolare il consolidamento delle sottostrutture in muratura mediante intonaco armato con rete in fibra di vetro, opportunamente collegato al supporto tramite connettori in vetroresina, con applicazione su entrambi i paramenti murari.',
      },
      {
        type: 'paragraph',
        text: 'Gli interventi sono stati calibrati sulla base dei coefficienti di sfruttamento emersi dalle verifiche e finalizzati al miglioramento delle prestazioni statiche delle pareti murarie, costituendo al tempo stesso una base tecnica propedeutica a un eventuale successivo intervento di adeguamento sismico più generale.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di passare dalla diagnosi delle vulnerabilità strutturali alla definizione di soluzioni esecutive di consolidamento, fornendo alla committenza un quadro tecnico completo per la messa in sicurezza e il miglioramento delle prestazioni strutturali del plesso scolastico.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
          'Progetto esecutivo degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-pascoli-c-bello-di-licata',
    title: 'Plesso Scolastico Pascoli',
    description: 'L’intervento ha riguardato la Scuola Elementare Pascoli di Campobello di Licata, edificio scolastico con struttura portante prevalentemente in calcestruzzo armato, articolato in tre corpi di fabbrica distinti.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/cover.jpg',
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/01.jpg',
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/02.jpg',
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/03.jpg',
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/04.jpg',
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/05.jpg',
      '/images/progetti/plesso-scolastico-pascoli-c-bello-di-licata/06.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Scuola Elementare Pascoli di Campobello di Licata, edificio scolastico con struttura portante prevalentemente in calcestruzzo armato, articolato in tre corpi di fabbrica distinti.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e del conseguente aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dai risultati della campagna di indagini disponibile, è stato definito il livello di conoscenza necessario per la modellazione e la verifica dell’edificio. Sono stati quindi sviluppati modelli strutturali distinti per i tre corpi di fabbrica, con analisi dei carichi verticali, definizione dell’azione sismica e verifiche secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alla diversa configurazione dei corpi strutturali, al comportamento degli elementi in calcestruzzo armato e alla valutazione della risposta sismica globale e locale del plesso.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali dell’edificio, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli eventuali interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-quasimodo-ag',
    title: 'Plesso Scolastico Quasimodo',
    description: 'L’intervento ha riguardato il plesso scolastico Quasimodo di Agrigento, sito a Villaseta e composto da tre corpi strutturalmente separati appartenenti allo stesso complesso scolastico.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2023,
    location: 'Agrigento',
    client: 'Comune di Agrigento',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-quasimodo-ag/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-quasimodo-ag/cover.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/01.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/02.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/03.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/04.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/05.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/06.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/07.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/08.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/09.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/10.jpg',
      '/images/progetti/plesso-scolastico-quasimodo-ag/11.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Quasimodo di Agrigento, sito a Villaseta e composto da tre corpi strutturalmente separati appartenenti allo stesso complesso scolastico.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica delle condizioni statiche e della vulnerabilità sismica, nell’ambito delle attività di valutazione del rischio sismico degli edifici scolastici e di aggiornamento della relativa mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il Livello di Conoscenza LC2, necessario per la modellazione strutturale e per le verifiche secondo NTC 2018. La presenza di più corpi indipendenti ha guidato lo sviluppo di modelli FEM distinti, con analisi dei carichi verticali e delle azioni sismiche.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche hanno riguardato i principali elementi resistenti in calcestruzzo armato, i solai in laterocemento e la palestra, consentendo di individuare le principali criticità statiche e sismiche del complesso.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta anche alle criticità locali dei solai e degli elementi secondari, rilevanti ai fini della sicurezza degli utenti e della successiva programmazione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico organico delle condizioni strutturali del plesso, utile alla pianificazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-roncalli-p-zza-armerina',
    title: 'Plesso Scolastico Roncalli',
    description: 'L’intervento ha riguardato il plesso scolastico Roncalli di Piazza Armerina, edificio articolato in cinque corpi di fabbrica strutturalmente indipendenti, caratterizzati da differenti configurazioni costruttive e funzionali.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2023,
    location: 'Piazza Armerina',
    client: 'Comune di Piazza Armerina',
    duration: '2022 - 2023',
    services: 'Valutazione della sicurezza, verifica di vulnerabilità sismica, esecuzione e interpretazione di prove dinamiche ed elaborazione con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/cover.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/01.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/02.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/03.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/04.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/05.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/06.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/07.jpg',
      '/images/progetti/plesso-scolastico-roncalli-p-zza-armerina/08.jpg',
    ],
    scope: [
      'Valutazione della sicurezza strutturale',
      'Verifica di vulnerabilità sismica',
      'Esecuzione e interpretazione di prove dinamiche',
      'Modellazione FEM e analisi numerico-sperimentale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Roncalli di Piazza Armerina, edificio articolato in cinque corpi di fabbrica strutturalmente indipendenti, caratterizzati da differenti configurazioni costruttive e funzionali.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la valutazione della sicurezza e le verifiche di vulnerabilità sismica, nell’ambito delle attività finalizzate alla valutazione del rischio sismico e all’aggiornamento della relativa mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso tecnico ha integrato analisi della documentazione disponibile, rilievi geometrici e strutturali, indagini diagnostiche, prove sui materiali, prove dinamiche e modellazione numerica dei diversi corpi di fabbrica.',
      },
      {
        type: 'paragraph',
        text: 'Sono stati sviluppati modelli FEM distinti per i cinque blocchi strutturali, con analisi dei carichi verticali, definizione dell’azione sismica e verifiche secondo NTC 2018. Le prove dinamiche hanno supportato la valutazione del comportamento globale del complesso e la calibrazione delle analisi numeriche.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche hanno consentito di individuare le principali criticità statiche e sismiche e di definire una valutazione preliminare degli interventi, orientata al consolidamento degli elementi carenti, al miglioramento della risposta sismica e alla sicurezza degli elementi strutturali e secondari più vulnerabili.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico organico delle condizioni strutturali del plesso, utile alla programmazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Valutazione della sicurezza strutturale',
          'Verifica di vulnerabilità sismica',
          'Esecuzione e interpretazione di prove dinamiche',
          'Modellazione FEM e analisi numerico-sperimentale',
        ],
      },
    ],
  },
  {
    id: 'plesso-scolastico-tornabene-ag',
    title: 'Plesso Scolastico Tornabene',
    description: 'L’intervento ha riguardato il plesso scolastico Tornabene di Agrigento, edificio in calcestruzzo armato articolato in tre corpi strutturalmente indipendenti, con solai in lastre prefabbricate tipo predalle e fondazioni dirette a travi rovesce.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2023,
    location: 'Agrigento',
    client: 'Comune di Agrigento',
    services: 'Verifica di vulnerabilità sismica e valutazione preliminare degli interventi di adeguamento sismico.',
    readTime: 2,
    cover: '/images/progetti/plesso-scolastico-tornabene-ag/cover.jpg',
    gallery: [
      '/images/progetti/plesso-scolastico-tornabene-ag/cover.jpg',
      '/images/progetti/plesso-scolastico-tornabene-ag/01.jpg',
      '/images/progetti/plesso-scolastico-tornabene-ag/02.jpg',
      '/images/progetti/plesso-scolastico-tornabene-ag/03.jpg',
      '/images/progetti/plesso-scolastico-tornabene-ag/04.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il plesso scolastico Tornabene di Agrigento, edificio in calcestruzzo armato articolato in tre corpi strutturalmente indipendenti, con solai in lastre prefabbricate tipo predalle e fondazioni dirette a travi rovesce.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica delle condizioni statiche e della vulnerabilità sismica, sviluppando un percorso di analisi basato sui risultati della campagna di indagini, sulle prove di caratterizzazione dei materiali e sulla modellazione strutturale secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'A partire dal Livello di Conoscenza LC2, sono stati sviluppati modelli FEM distinti per le diverse unità strutturali, con verifiche per carichi verticali e azioni sismiche su travi, pilastri, solai e sistemi di fondazione.',
      },
      {
        type: 'paragraph',
        text: 'Le analisi hanno consentito di individuare le principali criticità statiche e sismiche del plesso e di definire una valutazione preliminare degli interventi, orientata al consolidamento degli elementi carenti e al miglioramento della risposta sismica globale.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico strutturato delle condizioni dell’edificio, utile alla programmazione degli interventi di riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'ponte-aria-ciappi-me',
    title: 'Ponte Aria Ciappi',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP12 Km 8+550, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-aria-ciappi-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-aria-ciappi-me/cover.jpg',
      '/images/progetti/ponte-aria-ciappi-me/01.jpg',
      '/images/progetti/ponte-aria-ciappi-me/02.jpg',
      '/images/progetti/ponte-aria-ciappi-me/03.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte Aria Ciappi, un ponte ad arco in muratura inserito in un paramento murario.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Le ispezioni hanno interessato lo stato di conservazione dell’opera e delle principali criticità relative alla sovrastruttura stradale, ai parapetti e ai sistemi di smaltimento delle acque.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare l’opera, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-c-da-s-filippo-me',
    title: 'Ponte C.da San Filippo',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP12 Km 0+750, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-c-da-s-filippo-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-c-da-s-filippo-me/cover.jpg',
      '/images/progetti/ponte-c-da-s-filippo-me/01.jpg',
      '/images/progetti/ponte-c-da-s-filippo-me/02.jpg',
      '/images/progetti/ponte-c-da-s-filippo-me/03.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte C.da San Filippo, un ponte a soletta in c.a. appoggiata su spalle in muratura.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'L’ispezione ha evidenziato che il degrado più significativo riguarda l’impalcato e la sovrastruttura stradale, per questo motivo viene proposta la demolizione della soletta esistente e la ricostruzione di un nuovo impalcato sulle spalle esistenti, con nuovi dispositivi di appoggio, rifacimento del piano viario e adeguamento degli elementi di sicurezza della carreggiata.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-caldera',
    title: 'Ponte Calderà',
    description: 'L’intervento ha riguardato il Nuovo Ponte Caldera, opera infrastrutturale realizzata nel territorio di Barcellona Pozzo di Gotto.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2021,
    location: 'Barcellona Pozzo di Gotto, frazione Caldera',
    client: 'Ricciardello Costruzioni S.p.A.',
    services: 'Progetto del protocollo di tesatura, progettazione dell’apparato di tesatura, coordinamento delle fasi di messa in tiro.',
    readTime: 2,
    cover: '/images/progetti/ponte-caldera/cover.jpg',
    gallery: [
      '/images/progetti/ponte-caldera/cover.jpg',
      '/images/progetti/ponte-caldera/01.jpg',
      '/images/progetti/ponte-caldera/02.jpg',
      '/images/progetti/ponte-caldera/03.jpg',
      '/images/progetti/ponte-caldera/04.jpg',
    ],
    scope: [
      ' Protocollo di tesatura pendini',
      ' Progettazione apparato di tesatura',
      ' Coordinamento fasi di messa in tiro',
      ' Supporto tecnico in fase esecutiva',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Nuovo Ponte Caldera, opera infrastrutturale realizzata nel territorio di Barcellona Pozzo di Gotto.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha curato il progetto del protocollo e dell’apparato di tesatura dei pendini, definendo le modalità operative necessarie per la corretta esecuzione delle fasi di messa in tiro.',
      },
      {
        type: 'paragraph',
        text: 'L’attività ha previsto l’organizzazione della sequenza di tesatura, il controllo delle fasi esecutive e il coordinamento tecnico delle operazioni, con l’obiettivo di garantire la corretta distribuzione degli sforzi e la coerenza del comportamento strutturale durante la fase di completamento dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, il servizio ha fornito un supporto specialistico alla fase costruttiva del ponte, assicurando un approccio controllato alla messa in tiro dei pendini e alla gestione delle relative fasi operative.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Protocollo di tesatura pendini',
          ' Progettazione apparato di tesatura',
          ' Coordinamento fasi di messa in tiro',
          ' Supporto tecnico in fase esecutiva',
        ],
      },
    ],
  },
  {
    id: 'ponte-caprinaro-me',
    title: 'Ponte Caprinaro',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP12 Km 12+200, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-caprinaro-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-caprinaro-me/cover.jpg',
      '/images/progetti/ponte-caprinaro-me/01.jpg',
      '/images/progetti/ponte-caprinaro-me/02.jpg',
      '/images/progetti/ponte-caprinaro-me/03.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte Caprinaro, un ponte a tre arcate in calcestruzzo, con timpani e sottostrutture in muratura.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Le indagini hanno evidenziato fenomeni di degrado localizzati su spalle, pile e archi, con presenza di umidità, efflorescenze, dilavamento del calcestruzzo, vespai e distacchi localizzati, oltre a criticità su pavimentazione, cordoli laterali, scarichi e parapetti. Le valutazioni hanno quindi consentito di individuare gli interventi di ripristino necessari per il miglioramento principalmente della sovrastruttura stradale e gli elementi accessori.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare l’opera, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-corleone',
    title: 'Ponte Corleone',
    description: 'L’intervento ha riguardato il Ponte Corleone di Palermo, infrastruttura in calcestruzzo armato costituita da due ponti ad arco a via superiore, indipendenti e affiancati.',
    category: 'Monitoraggio Strutturale',
    typology: 'Ponte',
    year: 2025,
    location: 'Palermo',
    client: 'Anas S.p.A.',
    services: 'Progetto del sistema di monitoraggio, analisi del comportamento dinamico con approccio combinato numerico e sperimentale e taratura del sistema.',
    readTime: 2,
    cover: '/images/progetti/ponte-corleone/cover.jpg',
    gallery: [
      '/images/progetti/ponte-corleone/cover.jpg',
      '/images/progetti/ponte-corleone/01.jpg',
      '/images/progetti/ponte-corleone/02.jpg',
      '/images/progetti/ponte-corleone/03.jpg',
      '/images/progetti/ponte-corleone/04.jpg',
      '/images/progetti/ponte-corleone/05.jpg',
    ],
    scope: [
      'Progetto del sistema di monitoraggio dinamico',
      'Caratterizzazione dinamica sperimentale OMA',
      'Modellazione FEM e validazione numerico-sperimentale',
      'Taratura del sistema di monitoraggio e correzione dei dati',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Ponte Corleone di Palermo, infrastruttura in calcestruzzo armato costituita da due ponti ad arco a via superiore, indipendenti e affiancati.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato il progetto del sistema di monitoraggio dinamico, nell’ambito degli interventi strutturali previsti sugli appoggi e sulle selle Gerber, con l’obiettivo di controllare il comportamento dell’opera durante e dopo le lavorazioni.',
      },
      {
        type: 'paragraph',
        text: 'L’attività ha previsto una caratterizzazione dinamica sperimentale del viadotto mediante tecniche OMA in condizioni ambientali, con acquisizione accelerometrica e successiva identificazione dei principali parametri modali. La prova è stata condotta con 18 accelerometri verticali, frequenza di campionamento pari a 100 Hz e durata di acquisizione di 60 minuti.',
      },
      {
        type: 'paragraph',
        text: 'Parallelamente è stato sviluppato un modello numerico FEM dell’infrastruttura, calibrato e validato sui dati sperimentali raccolti. Il confronto tra forme modali numeriche e sperimentali ha consentito di verificare la coerenza del modello e di definire una base tecnica affidabile per l’interpretazione dei dati di monitoraggio.',
      },
      {
        type: 'paragraph',
        text: 'Una parte specifica dell’attività ha riguardato la taratura del sistema di monitoraggio dinamico, attraverso il confronto tra sensori tradizionali e sensori wireless e lo studio di funzioni di correzione dei risultati. Tale approccio consente di rendere i dati acquisiti dal sistema permanente più affidabili e confrontabili con quelli ottenuti mediante prove dinamiche classiche.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, il lavoro ha consentito di impostare un sistema di monitoraggio evoluto, basato sull’integrazione tra prova sperimentale, modellazione numerica e calibrazione dei dati, fornendo uno strumento operativo per il controllo nel tempo del comportamento dinamico del ponte e per il supporto alle decisioni tecniche durante le fasi di intervento.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Progetto del sistema di monitoraggio dinamico',
          'Caratterizzazione dinamica sperimentale OMA',
          'Modellazione FEM e validazione numerico-sperimentale',
          'Taratura del sistema di monitoraggio e correzione dei dati',
        ],
      },
    ],
  },
  {
    id: 'ponte-di-fisciano',
    title: 'Ponte di Fisciano',
    description: 'L’intervento ha riguardato il progetto esecutivo degli interventi di risanamento del Ponte di Fisciano, nell’ambito dell’Accordo Quadro della Provincia di Salerno per la verifica accurata e il recupero di ponti esistenti.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2023,
    location: 'SR 88A, area Fisciano – Provincia di Salerno',
    client: 'Provincia di Salerno – Settore Viabilità e Trasporti',
    services: 'Progetto Esecutivo degli interventi di risanamento del Ponte. Contratto attuativo n.4',
    amount: '€ 157.026,85',
    cup: 'H42C20000060001',
    cig: '8566318D3B',
    readTime: 2,
    cover: '/images/progetti/ponte-di-fisciano/cover.jpg',
    gallery: [
      '/images/progetti/ponte-di-fisciano/cover.jpg',
      '/images/progetti/ponte-di-fisciano/01.jpg',
      '/images/progetti/ponte-di-fisciano/02.jpg',
      '/images/progetti/ponte-di-fisciano/03.jpg',
    ],
    scope: [
      ' Progetto esecutivo di risanamento',
      ' Verifica di sicurezza di ponte esistente',
      ' Indagini strutturali',
      ' Modellazione FEM',
      ' Interventi locali su fondazioni, spalle e volta',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il progetto esecutivo degli interventi di risanamento del Ponte di Fisciano, nell’ambito dell’Accordo Quadro della Provincia di Salerno per la verifica accurata e il recupero di ponti esistenti.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha consentito il raggiungimento del Livello di Conoscenza LC2.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche di sicurezza sono state condotte secondo NTC 2018, Circolare applicativa, Linee Guida per i ponti esistenti e CNR-DT 213/2015 per i ponti stradali in muratura, riguardando la volta, le spalle, i muri andatori e il paramento murario superiore all’arco. L’esito delle verifiche è risultato favorevole per la condizione di ponte adeguato.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto esecutivo ha quindi riguardato gli interventi locali di risanamento necessari a contrastare le criticità evolutive rilevate, con particolare riferimento all’erosione del piede delle fondazioni, alla sigillatura e cucitura delle lesioni sulle spalle e al ripristino dell’intradosso della volta interessato da distacco del copriferro e ossidazione delle armature. Sono stati inoltre previsti interventi di pulizia delle superfici, rimozione di efflorescenze, macchie di umidità, muschi e vegetazione infestante.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di integrare verifica strutturale, diagnosi dei fenomeni di degrado e progettazione esecutiva degli interventi, fornendo alla committenza un quadro tecnico completo per il risanamento dell’opera e il prolungamento della sua vita utile.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Progetto esecutivo di risanamento',
          ' Verifica di sicurezza di ponte esistente',
          ' Indagini strutturali',
          ' Modellazione FEM',
          ' Interventi locali su fondazioni, spalle e volta',
        ],
      },
    ],
  },
  {
    id: 'ponte-ferroviario-km-134-856-pa-ag',
    title: 'Ponte Ferroviario km 134+856 PA-AG',
    description: 'L’intervento ha riguardato il ponte ferroviario al km 134+856 della linea Palermo–Agrigento, nell’ambito delle verifiche di capacità portante delle opere d’arte ferroviarie.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2026,
    location: 'Linea PA–AG, km 134+856, Agrigento',
    client: 'RFI S.p.A. – Direzione Operativa Infrastrutture Territoriale di Palermo',
    services: 'Rivalutazione strutturale dell’impalcato, modellazione FEM, verifiche di capacità portante per categoria C3, progetto di variante per adeguamento statico, verifiche ante e post-operam.',
    readTime: 2,
    cover: '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/cover.jpg',
    gallery: [
      '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/cover.jpg',
      '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/01.jpg',
      '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/02.jpg',
      '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/03.jpg',
      '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/04.jpg',
      '/images/progetti/ponte-ferroviario-km-134-856-pa-ag/05.jpg',
    ],
    scope: [
      'Rivalutazione strutturale',
      'Verifiche di capacità portante',
      'Modellazione FEM tridimensionale',
      'Analisi ante-operam e post-operam',
      'Progetto di rinforzo a flessione e taglio',
      'Variante progettuale di adeguamento statico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il ponte ferroviario al km 134+856 della linea Palermo–Agrigento, nell’ambito delle verifiche di capacità portante delle opere d’arte ferroviarie.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la rivalutazione strutturale dell’impalcato e la redazione della variante progettuale degli interventi di adeguamento statico, a seguito dell’aggiornamento delle informazioni geometriche e della revisione dello schema resistente dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Il percorso conoscitivo ha consentito il raggiungimento del Livello di Conoscenza LC2. La risposta dell’impalcato è stata valutata mediante modellazione tridimensionale agli elementi finiti, confrontando il comportamento globale dell’opera con quello del solo impalcato.',
      },
      {
        type: 'paragraph',
        text: 'Le verifiche ante-operam hanno evidenziato la necessità di incrementare la capacità resistente delle travi principali e di bordo rispetto alle combinazioni di carico ferroviario previste per la categoria C3.',
      },
      {
        type: 'paragraph',
        text: 'La soluzione progettuale ha previsto interventi mirati di rinforzo a flessione e a taglio, mediante armature integrative, getti di completamento e sistemi in fibra di carbonio FRP. Le verifiche post-operam hanno confermato il soddisfacimento dei requisiti di sicurezza richiesti per la nuova categoria di carico.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire una soluzione di adeguamento dell’impalcato, integrando rilievo, indagini, modellazione numerica e verifiche normative a supporto della riclassificazione e della sicurezza dell’opera ferroviaria',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Rivalutazione strutturale',
          'Verifiche di capacità portante',
          'Modellazione FEM tridimensionale',
          'Analisi ante-operam e post-operam',
          'Progetto di rinforzo a flessione e taglio',
          'Variante progettuale di adeguamento statico',
        ],
      },
    ],
  },
  {
    id: 'ponte-galleria-postoleone-me',
    title: 'Ponte Galleria Postoleone',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP11 Km 4+300, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-galleria-postoleone-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-galleria-postoleone-me/cover.jpg',
      '/images/progetti/ponte-galleria-postoleone-me/01.jpg',
      '/images/progetti/ponte-galleria-postoleone-me/02.jpg',
      '/images/progetti/ponte-galleria-postoleone-me/03.jpg',
      '/images/progetti/ponte-galleria-postoleone-me/04.jpg',
      '/images/progetti/ponte-galleria-postoleone-me/05.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte Galleria Postoleone, un ponte ad arco in muratura che si inserisce in un contesto roccioso, in prossimità di una galleria naturale scavata nella roccia.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'L’ispezione ha evidenziato che il degrado più significativo riguarda la sovrastruttura stradale, con pavimentazione molto ammalorata, avvallamenti e fessurazioni diffuse, in particolare lungo la corsia di valle, per questo motivo viene proposta la rimozione della pavimentazione esistente mediante scarifica e la realizzazione di un nuovo strato di conglomerato bituminoso sull’intera superficie del ponte.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-grande-scifi-me',
    title: 'Ponte Grande Scifi',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP12 Km 15+650, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-grande-scifi-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-grande-scifi-me/cover.jpg',
      '/images/progetti/ponte-grande-scifi-me/01.jpg',
      '/images/progetti/ponte-grande-scifi-me/02.jpg',
      '/images/progetti/ponte-grande-scifi-me/03.jpg',
      '/images/progetti/ponte-grande-scifi-me/04.jpg',
      '/images/progetti/ponte-grande-scifi-me/05.jpg',
      '/images/progetti/ponte-grande-scifi-me/06.jpg',
      '/images/progetti/ponte-grande-scifi-me/07.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte Grande Scifi, cinque arcate in calcestruzzo non armato, con timpani, pile e spalle in muratura.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Le indagini hanno evidenziato un’opera complessivamente in buono stato con fenomeni localizzati di degrado quali umidità, efflorescenze, polverizzazione ed esfoliazione delle murature, calcestruzzo dilavato e ammalorato nelle arcate, scarichi non idonei e fessurazioni della pavimentazione stradale. La proposta di ripristino riguarda principalmente la pavimentazione stradale',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-leto-me',
    title: 'Ponte Leto',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP13 Km 0+750, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-leto-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-leto-me/cover.jpg',
      '/images/progetti/ponte-leto-me/01.jpg',
      '/images/progetti/ponte-leto-me/02.jpg',
      '/images/progetti/ponte-leto-me/03.jpg',
      '/images/progetti/ponte-leto-me/04.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte Leto, un ponte ad arco in muratura con spalle inserite in paramenti murari di sostegno del terrapieno.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Sono stati rilevati fenomeni di degrado diffusi: dilavamento delle murature, umidità, patina biologica, efflorescenze, porzioni di muratura mancanti, dilavamento al piede della spalla sinistra, cedimento del paramento di valle, cordoli laterali degradati e fessurazioni della pavimentazione. Gli interventi proposti prevedono il ripristino delle murature degradate, con ristilatura dei giunti e ricostruzione locale della spalla sinistra, la protezione del piede mediante gabbioni, il rifacimento della pavimentazione stradale e l’adeguamento degli elementi laterali di sicurezza, mediante nuovi cordoli e barriere stradali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-postoleone-me',
    title: 'Ponte Postoleone',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP11 Km 8+200, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/ponte-postoleone-me/cover.jpg',
    gallery: [
      '/images/progetti/ponte-postoleone-me/cover.jpg',
      '/images/progetti/ponte-postoleone-me/01.jpg',
      '/images/progetti/ponte-postoleone-me/02.jpg',
      '/images/progetti/ponte-postoleone-me/03.jpg',
      '/images/progetti/ponte-postoleone-me/04.jpg',
      '/images/progetti/ponte-postoleone-me/05.jpg',
      '/images/progetti/ponte-postoleone-me/06.jpg',
      '/images/progetti/ponte-postoleone-me/07.jpg',
      '/images/progetti/ponte-postoleone-me/08.jpg',
      '/images/progetti/ponte-postoleone-me/09.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Ponte Postoleone, ponte ad arco in c.a. tipo bow-string, a campata unica, con impalcato sospeso mediante pendini e spalle in muratura.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Le indagini hanno evidenziato un degrado diffuso su calcestruzzo, pendini, appoggi metallici e pavimentazione, con fenomeni di ossidazione, fessurazioni e ammaloramenti corticali. La proposta di ripristino riguarda il risanamento corticale, rifacimento della pavimentazione, protezione degli appoggi, interventi di post-tensione sui pendini e sistemazione di finiture, parapetti e smaltimento acque.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ponte-san-marzano',
    title: 'Ponte San Marzano',
    description: 'L’intervento ha riguardato la verifica accurata del Ponte San Marzano sul Sarno, opera appartenente alla S.P. 5 e ricadente nel territorio comunale di San Marzano sul Sarno, nell’ambito dell’Accordo Quadro della Provincia di Salerno per la verifica accurata di ponti esistenti. Lo Studio ha svolto attività di coordinamento delle indagini strutturali, esecuzione ed elaborazione delle prove dinamiche, modellazione numerica con metodo FEM, validazione del modello ed esecuzione delle verifiche di sicurezza. Il percorso conoscitivo ha integrato rilievo laser scanner, verifiche dimensionali dirette, indagini pacometriche, prove GPR, prelievi di calcestruzzo, prove di compressione, prove di trazione sulle barre d’armatura e prove di microdurezza, consentendo il raggiungimento del Livello di Conoscenza LC2. Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato gli archi, le travi reggispinta, i traversi superiori e inferiori, i pendini e la soletta, considerando i diversi livelli di sicurezza previsti dalle Linee Guida: ponte adeguato, ponte operativo e ponte transitabile.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2021,
    location: 'Barcellona Pozzo di Gotto, frazione Caldera',
    client: 'Ricciardello Costruzioni S.p.A.',
    services: 'Progettazione del protocollo di tesatura e dell’apparato di tesatura, coordinamento delle fasi di messa in tiro.',
    readTime: 2,
    cover: '/images/progetti/ponte-san-marzano/cover.jpg',
    gallery: [
      '/images/progetti/ponte-san-marzano/cover.jpg',
      '/images/progetti/ponte-san-marzano/01.jpg',
      '/images/progetti/ponte-san-marzano/02.jpg',
      '/images/progetti/ponte-san-marzano/03.jpg',
      '/images/progetti/ponte-san-marzano/04.jpg',
      '/images/progetti/ponte-san-marzano/05.jpg',
    ],
    scope: [
      ' Progettazione protocollo di tesatura',
      ' Progettazione apparato di tesatura',
      ' Coordinamento fasi di messa in tiro',
      ' Verifiche di sicurezza secondo NTC 2018',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la verifica accurata del Ponte San Marzano sul Sarno, opera appartenente alla S.P. 5 e ricadente nel territorio comunale di San Marzano sul Sarno, nell’ambito dell’Accordo Quadro della Provincia di Salerno per la verifica accurata di ponti esistenti. Lo Studio ha svolto attività di coordinamento delle indagini strutturali, esecuzione ed elaborazione delle prove dinamiche, modellazione numerica con metodo FEM, validazione del modello ed esecuzione delle verifiche di sicurezza. Il percorso conoscitivo ha integrato rilievo laser scanner, verifiche dimensionali dirette, indagini pacometriche, prove GPR, prelievi di calcestruzzo, prove di compressione, prove di trazione sulle barre d’armatura e prove di microdurezza, consentendo il raggiungimento del Livello di Conoscenza LC2. Le verifiche, condotte secondo NTC 2018, Circolare applicativa e Linee Guida per i ponti esistenti, hanno riguardato gli archi, le travi reggispinta, i traversi superiori e inferiori, i pendini e la soletta, considerando i diversi livelli di sicurezza previsti dalle Linee Guida: ponte adeguato, ponte operativo e ponte transitabile.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico completo del comportamento strutturale del ponte, integrando indagini sperimentali, prove dinamiche, modellazione FEM e verifiche normative a supporto della valutazione della sicurezza e della gestione dell’opera.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          ' Progettazione protocollo di tesatura',
          ' Progettazione apparato di tesatura',
          ' Coordinamento fasi di messa in tiro',
          ' Verifiche di sicurezza secondo NTC 2018',
        ],
      },
    ],
  },
  {
    id: 'ponte-santa-margherita',
    title: 'Ponte Santa Margherita',
    description: 'L’intervento ha riguardato il Ponte Santa Margherita sul fiume Velino, lungo la S.S. 4 “Salaria”, nell’ambito della realizzazione del nuovo impalcato metallico al di sopra del ponte storico esistente a tre arcate.',
    category: 'Ingegneria Infrastrutturale',
    secondaryCategory: 'Ingegneria Forense',
    typology: 'Ponte',
    year: 2026,
    location: 'S.S. 4 “Salaria” - km 94+470',
    client: 'Anas S.p.A. – Beico s.r.l.',
    duration: '2026 (in corso)',
    services: 'Progetto esecutivo di riassetto strutturale e geometrico dell’impalcato del Ponte Santa Margherita sul fiume Velino. CIG: A009D7A4FC -',
    amount: '€ 2.782.324,50',
    cup: 'F47H19002300001',
    cig: 'A009D7A4FC',
    readTime: 2,
    cover: '/images/progetti/ponte-santa-margherita/cover.jpg',
    gallery: [
      '/images/progetti/ponte-santa-margherita/cover.jpg',
      '/images/progetti/ponte-santa-margherita/01.jpg',
    ],
    scope: [
      'Diagnosi strutturale e rilievo delle criticità costruttive',
      'Progettazione esecutiva di riassetto geometrico dell’impalcato',
      'Progettazione esecutiva di riassetto statico dell’impalcato',
      'Monitoraggio statico in opera dell’impalcato',
      'N.B.: I lavori sono in corso e quindi prossimamente vi forniremo le foto',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Ponte Santa Margherita sul fiume Velino, lungo la S.S. 4 “Salaria”, nell’ambito della realizzazione del nuovo impalcato metallico al di sopra del ponte storico esistente a tre arcate.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio è stato incaricato del progetto esecutivo di riassetto strutturale e geometrico dell’impalcato, reso necessario da criticità emerse durante il montaggio della carpenteria metallica: deformazioni significative, svergolamenti delle travi, disallineamenti dei giunti flangiati, difficoltà di accoppiamento tra gli elementi e mancata coincidenza di alcuni fori di bullonatura.',
      },
      {
        type: 'paragraph',
        text: 'La strategia progettuale ha previsto un intervento coordinato di riassetto statico e geometrico della struttura. Dopo il sollevamento controllato dell’impalcato, raggiunta la configurazione corretta, sono stati progettati talloni in acciaio saldati sui giunti delle travi, piastre laterali sui traversi e lamiere superiori di solidarizzazione, con l’obiettivo di migliorare la continuità del grigliato metallico e il trasferimento degli sforzi.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto ha inoltre previsto la riduzione della soletta collaborante in c.a. da 25 cm a 18 cm, per contenere i carichi permanenti e la massa sismica, e l’introduzione di un sistema di post-compressione esterna, concepito come nuovo sistema resistente dell’impalcato, costituito da testate di ancoraggio, selle di rinvio e cavi da 15 trefoli.',
      },
      {
        type: 'paragraph',
        text: 'Le fasi di tesatura sono state accompagnate da un protocollo di monitoraggio strumentale, mediante estensimetri, inclinometri biassiali e trasduttori di spostamento, finalizzato al controllo di deformazioni, rotazioni e spostamenti dell’impalcato.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Diagnosi strutturale e rilievo delle criticità costruttive',
          'Progettazione esecutiva di riassetto geometrico dell’impalcato',
          'Progettazione esecutiva di riassetto statico dell’impalcato',
          'Monitoraggio statico in opera dell’impalcato',
          'N.B.: I lavori sono in corso e quindi prossimamente vi forniremo le foto',
        ],
      },
    ],
  },
  {
    id: 'presidio-sanitario-di-salaparuta',
    title: 'Presidio Sanitario di Salaparuta',
    description: 'L’intervento ha riguardato il Presidio Sanitario di Salaparuta, edificio in calcestruzzo armato oggetto dei lavori di demolizione e ricostruzione, per il quale lo Studio è stato incaricato dello sviluppo del progetto esecutivo degli interventi di adeguamento sismico ai sensi delle NTC 2018.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio sanitario',
    year: 2025,
    location: 'Salaparuta, Trapani',
    client: 'Azienda Sanitaria Provinciale Trapani – Settore Gestione Tecnica',
    duration: '2020 – 2021 (P.E.) - 2025 (assistenza D.L.)',
    services: 'Progetto esecutivo degli interventi di adeguamento sismico ai sensi del D.M. 17/01/2018 e assistenza alla direzione lavori di adeguamento sismico.',
    amount: '€ 178.084,17',
    readTime: 2,
    cover: '/images/progetti/presidio-sanitario-di-salaparuta/cover.jpg',
    gallery: [
      '/images/progetti/presidio-sanitario-di-salaparuta/cover.jpg',
      '/images/progetti/presidio-sanitario-di-salaparuta/01.jpg',
      '/images/progetti/presidio-sanitario-di-salaparuta/02.jpg',
      '/images/progetti/presidio-sanitario-di-salaparuta/03.jpg',
      '/images/progetti/presidio-sanitario-di-salaparuta/04.jpg',
      '/images/progetti/presidio-sanitario-di-salaparuta/05.jpg',
      '/images/progetti/presidio-sanitario-di-salaparuta/06.jpg',
    ],
    scope: [
      'Verifica strutturale e vulnerabilità sismica',
      'Modellazione FEM e prove dinamiche',
      'Progettazione esecutiva degli interventi di adeguamento sismico',
      'Assistenza alla direzione lavori di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Presidio Sanitario di Salaparuta, edificio in calcestruzzo armato oggetto dei lavori di demolizione e ricostruzione, per il quale lo Studio è stato incaricato dello sviluppo del progetto esecutivo degli interventi di adeguamento sismico ai sensi delle NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Le indagini, le prove sui materiali e le verifiche strutturali hanno evidenziato carenze prestazionali nei confronti delle azioni orizzontali, rendendo necessario un intervento di consolidamento e protezione sismica. La struttura è stata analizzata mediante modellazione FEM, calibrata anche attraverso prove dinamiche sperimentali.',
      },
      {
        type: 'paragraph',
        text: 'La soluzione progettuale ha previsto l’inserimento di un sistema dissipativo composto da controventi metallici e dissipatori isteretici assiali ad instabilità impedita tipo BRAD, con l’obiettivo di incrementare la capacità sismica dell’edificio e migliorare il comportamento globale della struttura.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto ha definito i particolari esecutivi dei campi di telaio interessati, le connessioni tra sistema dissipativo e struttura esistente, le piastre di collegamento, gli ancoraggi chimici, i profili metallici e gli elementi di spessoramento. Sono stati inoltre previsti interventi locali di consolidamento su travi e pilastri, inclusi rinforzi con materiali fibrorinforzati.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di sviluppare una soluzione di adeguamento sismico mirata, fondata sull’integrazione tra modellazione numerica, indagini sperimentali e dispositivi di protezione sismica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica strutturale e vulnerabilità sismica',
          'Modellazione FEM e prove dinamiche',
          'Progettazione esecutiva degli interventi di adeguamento sismico',
          'Assistenza alla direzione lavori di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'rai-way-monte-pellegrino-pa',
    title: 'Edge Data Center RAI WAY',
    description: 'L’intervento ha riguardato il progetto esecutivo strutturale di adeguamento sismico di un edificio esistente all’interno del centro di trasmissione Rai Way di Monte Pellegrino, a Palermo, destinato alla realizzazione di un Edge Data Center.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio tecnologico',
    year: 2023,
    location: 'Monte Pellegrino, Palermo',
    client: 'Rai Way S.p.A.',
    duration: '2022 - 2023',
    services: 'Progetto esecutivo strutturale di adeguamento sismico',
    amount: '€ 3.637.684,76',
    readTime: 2,
    cover: '/images/progetti/rai-way-monte-pellegrino-pa/cover.jpg',
    gallery: [
      '/images/progetti/rai-way-monte-pellegrino-pa/cover.jpg',
      '/images/progetti/rai-way-monte-pellegrino-pa/01.jpg',
      '/images/progetti/rai-way-monte-pellegrino-pa/02.jpg',
    ],
    scope: [
      'Rilievo strutturale',
      'Piano di indagini',
      'Verifica di vulnerabilità sismica',
      'Progettazione esecutiva di adeguamento sismico',
      'Piano di manutenzione delle opere strutturali',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il progetto esecutivo strutturale di adeguamento sismico di un edificio esistente all’interno del centro di trasmissione Rai Way di Monte Pellegrino, a Palermo, destinato alla realizzazione di un Edge Data Center.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato la verifica di vulnerabilità sismica e la progettazione degli interventi di adeguamento, a partire da rilievi, indagini in sito, prove sui materiali e modellazione strutturale. L’analisi ha evidenziato la necessità di intervenire sia sul comportamento globale dell’edificio sia su specifici elementi resistenti, con l’obiettivo di incrementare rigidezza, resistenza e regolarità della risposta sismica.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto ha previsto l’inserimento di controventi metallici a croce di Sant’Andrea, la realizzazione di setti in c.a., il nuovo vano ascensore in c.a. e il rinforzo locale dei pilastri mediante profili angolari e calastrelli. Sono stati inoltre progettati interventi specifici su elementi maggiormente sollecitati, tra cui l’aumento di sezione di un pilastro centrale e il rinforzo delle travi mediante profili metallici accostati e interconnessi.',
      },
      {
        type: 'paragraph',
        text: 'A completamento degli interventi sono stati previsti il rinforzo dei solai, il consolidamento delle fondazioni, l’ampliamento dei plinti interessati dai controventi e la realizzazione di travi di collegamento fondale. Il progetto ha incluso anche le verifiche di nodi, giunti, tasselli di ancoraggio, connessioni tra elementi esistenti e nuove strutture ed elementi secondari.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’intervento ha consentito di adeguare un fabbricato esistente alle esigenze di una funzione tecnologica avanzata, attraverso un sistema integrato di rinforzi locali, nuovi elementi resistenti e modellazione numerica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Rilievo strutturale',
          'Piano di indagini',
          'Verifica di vulnerabilità sismica',
          'Progettazione esecutiva di adeguamento sismico',
          'Piano di manutenzione delle opere strutturali',
        ],
      },
    ],
  },
  {
    id: 'refattorio-plesso-don-bosco-c-bello-di-licata',
    title: 'Refettorio Plesso Don Bosco',
    description: 'L’intervento ha riguardato il Refettorio della Scuola Elementare Don Bosco di Campobello di Licata, edificio scolastico sito in Via Generale Cascino e caratterizzato da una configurazione strutturale mista, con porzioni in muratura portante e porzioni intelaiate in calcestruzzo armato.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio scolastico',
    year: 2024,
    location: 'Campobello di Licata',
    client: 'Comune di Campobello di Licata',
    services: 'Verifica di vulnerabilità sismica, valutazione preliminare degli interventi di adeguamento sismico e aggiornamento della mappatura del rischio sismico ai sensi dell’OPCM n. 3274/2003.',
    readTime: 2,
    cover: '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/cover.jpg',
    gallery: [
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/cover.jpg',
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/01.jpg',
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/02.jpg',
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/03.jpg',
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/04.jpg',
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/05.jpg',
      '/images/progetti/refattorio-plesso-don-bosco-c-bello-di-licata/06.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Modellazione FEM e verifiche',
      'Valutazione preliminare degli interventi di adeguamento sismico',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Refettorio della Scuola Elementare Don Bosco di Campobello di Licata, edificio scolastico sito in Via Generale Cascino e caratterizzato da una configurazione strutturale mista, con porzioni in muratura portante e porzioni intelaiate in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica nell’ambito del programma di valutazione del rischio sismico degli edifici scolastici comunali e dell’aggiornamento della mappatura prevista dall’OPCM n. 3274/2003.',
      },
      {
        type: 'paragraph',
        text: 'A partire dalla campagna di indagini disponibile è stato definito il livello di conoscenza necessario alla modellazione strutturale e alle verifiche secondo NTC 2018. L’analisi ha riguardato la caratterizzazione dei materiali, la geometria dell’edificio, lo schema resistente e il comportamento delle diverse componenti strutturali.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata posta alla configurazione dei telai in calcestruzzo armato, caratterizzati da elementi non sempre efficacemente collegati trasversalmente, alla presenza di travi di notevole luce, alle criticità delle armature e allo stato di conservazione di alcuni elementi metallici e in c.a., interessati da fenomeni di corrosione e degrado.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base dei dati acquisiti è stato sviluppato un modello FEM dell’edificio, con verifiche per carichi verticali e azioni sismiche sia sugli elementi in calcestruzzo armato sia sulle porzioni in muratura, includendo la valutazione dei principali meccanismi locali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un quadro tecnico chiaro delle condizioni strutturali del refettorio, individuando le principali criticità statiche e sismiche e fornendo alla committenza uno strumento utile per la programmazione degli interventi di messa in sicurezza, riduzione del rischio e incremento della sicurezza scolastica.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Modellazione FEM e verifiche',
          'Valutazione preliminare degli interventi di adeguamento sismico',
        ],
      },
    ],
  },
  {
    id: 'torrente-fortino-me',
    title: 'Torrente Fortino',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'SP2 Km 0+600, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/torrente-fortino-me/cover.jpg',
    gallery: [
      '/images/progetti/torrente-fortino-me/cover.jpg',
      '/images/progetti/torrente-fortino-me/01.jpg',
      '/images/progetti/torrente-fortino-me/02.jpg',
      '/images/progetti/torrente-fortino-me/03.jpg',
      '/images/progetti/torrente-fortino-me/04.jpg',
      '/images/progetti/torrente-fortino-me/05.jpg',
      '/images/progetti/torrente-fortino-me/06.jpg',
      '/images/progetti/torrente-fortino-me/07.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Torrente Fortino, ponte a quattro piccole campate, con solettoni in c.a. su pile e spalle miste in muratura, calcestruzzo e c.a..',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Le indagini hanno evidenziato un degrado diffuso su solettoni, pile e spalle, con armature scoperte e ossidate, calcestruzzo ammalorato, umidità, fessurazioni e pavimentazione deteriorata. La proposta di ripristino riguarda demolizione del manufatto esistente e sostituzione con nuovo ponte ad arco a via inferiore tipo bow-string, per migliorare sicurezza strutturale e deflusso idraulico.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'torrente-licopeti-me',
    title: 'Torrente Licopeti (P.lla Losi)',
    description: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Ponte',
    year: 2020,
    location: 'S.A. Km 1+500, Messina',
    client: 'Città Metropolitana di Messina – Genio Civile',
    services: 'Servizio di censimento ed ispezione e valutazione degli interventi di recupero ed elaborazione numerica con metodo FEM.',
    readTime: 2,
    cover: '/images/progetti/torrente-licopeti-me/cover.jpg',
    gallery: [
      '/images/progetti/torrente-licopeti-me/cover.jpg',
      '/images/progetti/torrente-licopeti-me/01.jpg',
      '/images/progetti/torrente-licopeti-me/02.jpg',
      '/images/progetti/torrente-licopeti-me/03.jpg',
      '/images/progetti/torrente-licopeti-me/04.jpg',
      '/images/progetti/torrente-licopeti-me/05.jpg',
      '/images/progetti/torrente-licopeti-me/06.jpg',
      '/images/progetti/torrente-licopeti-me/07.jpg',
      '/images/progetti/torrente-licopeti-me/08.jpg',
    ],
    scope: [
      'Censimento ed ispezione',
      'Valutazione dello stato difettologico',
      'Valutazione degli interventi di recupero',
      'Elaborazione numerica con metodo FEM',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il servizio di censimento, ispezione e valutazione dello stato di conservazione di ponti e viadotti ricadenti nel territorio della provincia di Messina, nell’ambito del servizio di monitoraggio denominato ME-01.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto attività di rilievo geometrico, ispezione visiva diretta, analisi difettologica e valutazione preliminare degli interventi di recupero, secondo un approccio coerente con le Linee Guida per la classificazione e gestione del rischio, la valutazione della sicurezza e il monitoraggio del Torrente Licopeti, ponte a due campate con impalcato in c.a. su pila e spalle in muratura.',
      },
      {
        type: 'paragraph',
        text: 'Le attività hanno previsto la compilazione delle schede di censimento, il rilievo fotografico dei difetti, l’individuazione delle principali criticità strutturali e manutentive e la restituzione tecnica dello stato di conservazione delle opere. Per alcune strutture è stata inoltre sviluppata un’elaborazione con metodo FEM, a supporto della valutazione del comportamento strutturale e della definizione degli interventi.',
      },
      {
        type: 'paragraph',
        text: 'Le indagini hanno evidenziato un grave degrado di travi, traversi e soletta, con armature esposte e ossidate, dissesti localizzati delle murature e criticità su pavimentazione e sicurvia. È stato proposto un risanamento corticale degli elementi in c.a., cuciture locali della pila, ripristino della sovrastruttura stradale e valutazione di interventi più avanzati di rinforzo dell’impalcato.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico operativo per la gestione del patrimonio infrastrutturale, consentendo di classificare le opere, individuare le priorità manutentive e programmare gli interventi di recupero e messa in sicurezza.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Censimento ed ispezione',
          'Valutazione dello stato difettologico',
          'Valutazione degli interventi di recupero',
          'Elaborazione numerica con metodo FEM',
        ],
      },
    ],
  },
  {
    id: 'ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto',
    title: 'Ufficio Circondariale Marittimo di Licata – Capitaneria di Porto',
    description: 'L’intervento ha riguardato l’Ufficio Circondariale Marittimo di Licata, sede della Guardia Costiera – Comando Circomare Licata. Lo Studio è stato incaricato in un primo momento della verifica di vulnerabilità sismica dell’edificio e, successivamente, della progettazione esecutiva strutturale e della direzione lavori degli interventi di consolidamento della copertura lignea a falde inclinate.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio pubblico',
    year: 2025,
    location: 'Licata (AG), Via Libotti n.9',
    client: 'Capitaneria di porto – Guardia Costiera',
    duration: '2024-2025',
    services: 'Verifica di vulnerabilità sismica, Progettazione esecutiva di consolidamento delle strutture lignee della copertura a falde inclinate e Direzione Lavori.',
    amount: '€ 139.370,04',
    readTime: 2,
    cover: '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/cover.jpg',
    gallery: [
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/cover.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/01.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/02.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/03.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/04.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/05.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/06.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/07.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/08.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/09.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/10.jpg',
      '/images/progetti/ufficio-circondariale-marittimo-di-licata-capitaneria-di-porto/11.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Rilievo e diagnosi delle strutture lignee',
      'Progettazione esecutiva degli interventi di consolidamento',
      'Monitoraggio statico in opera',
      'Direzione lavori strutturale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato l’Ufficio Circondariale Marittimo di Licata, sede della Guardia Costiera – Comando Circomare Licata. Lo Studio è stato incaricato in un primo momento della verifica di vulnerabilità sismica dell’edificio e, successivamente, della progettazione esecutiva strutturale e della direzione lavori degli interventi di consolidamento della copertura lignea a falde inclinate.',
      },
      {
        type: 'paragraph',
        text: 'La fase conoscitiva ha evidenziato criticità diffuse negli elementi lignei, con fenditure estese sulle cinque capriate principali, sulle travi di falda e nei nodi più sensibili. La documentazione fotografica, il rilievo geometrico e la classificazione delle lesioni hanno consentito di definire una mirata strategia di intervento.',
      },
      {
        type: 'paragraph',
        text: 'In attesa dell’esecuzione dei lavori è stato predisposto un sistema di monitoraggio mirato al controllo dell’evoluzione deformativa della copertura. Il progetto di consolidamento ha previsto la sigillatura delle fenditure, l’applicazione di fasciature metalliche, per limitare l’evoluzione delle lesioni, e di piastre di confinamento sugli elementi lignei, oltre al rinforzo dei collegamenti degli elementi lignei.',
      },
      {
        type: 'paragraph',
        text: 'Particolare attenzione è stata dedicata ai giunti delle catene, per i quali è stato progettato un sistema di pretensionamento con piastre e barre dywidag passanti, finalizzato a migliorare la continuità resistente degli elementi e contrastare possibili cedimenti. Al termine dell’intervento è stato previsto un collegamento di piano della copertura, con l’obiettivo di solidarizzare il sistema strutturale e migliorarne il comportamento globale.',
      },
      {
        type: 'paragraph',
        text: 'L’intervento è stato concepito per arrestare l’evoluzione delle lesioni, incrementare la capacità resistente e migliorare la risposta complessiva della copertura, preservando per quanto possibile la configurazione originaria delle strutture lignee.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Rilievo e diagnosi delle strutture lignee',
          'Progettazione esecutiva degli interventi di consolidamento',
          'Monitoraggio statico in opera',
          'Direzione lavori strutturale',
        ],
      },
    ],
  },
  {
    id: 'ultragas-spa-capannone',
    title: 'Capannone Imbottigliamento Ultragas',
    description: 'L’intervento ha riguardato il Capannone di Imbottigliamento dello stabilimento Ultragas di Catania, struttura industriale in calcestruzzo armato con copertura in travi prefabbricate in c.a.p., destinata alle attività di riempimento e movimentazione di bombole GPL.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio industriale',
    year: 2021,
    location: 'Zona Industriale, Catania',
    client: 'Ultragas S.p.A.',
    services: 'Progetto esecutivo degli interventi di adeguamento sismico del Capannone Imbottigliamento dello Stabilimento Ultragas S.p.A. – Zona Industriale di Catania.',
    amount: '€ 190.285,95',
    readTime: 2,
    cover: '/images/progetti/ultragas-spa-capannone/cover.jpg',
    gallery: [
      '/images/progetti/ultragas-spa-capannone/cover.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Progetto esecutivo di adeguamento sismico',
      'Modellazione FEM e verifiche secondo NTC 2018',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Capannone di Imbottigliamento dello stabilimento Ultragas di Catania, struttura industriale in calcestruzzo armato con copertura in travi prefabbricate in c.a.p., destinata alle attività di riempimento e movimentazione di bombole GPL.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica e il successivo progetto esecutivo degli interventi di adeguamento sismico, secondo NTC 2018, nell’ambito della valutazione della sicurezza di uno stabilimento industriale classificato in classe d’uso IV.',
      },
      {
        type: 'paragraph',
        text: 'L’analisi dello stato di fatto, basata sul quadro conoscitivo disponibile, sulle indagini pregresse e sulla modellazione FEM, ha evidenziato la necessità di intervenire sul comportamento sismico globale del capannone.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto ha previsto l’inserimento di controventi metallici a croce di Sant’Andrea, dissipatori isteretici assiali tipo BRAD, shock transmitter per il collegamento dei corpi strutturali e delle travi prefabbricate, oltre a interventi locali di integrazione delle armature, trattamento passivante e ripristino corticale degli elementi in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'La progettazione ha incluso anche le opere edili funzionali all’ammodernamento della linea di imbottigliamento GPL, con adeguamento di basamenti, rialzi, riempimenti, scavi localizzati e finiture del piano di lavoro.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di trasformare la verifica di vulnerabilità in un progetto esecutivo integrato, capace di coniugare adeguamento sismico, risanamento strutturale e continuità operativa dello stabilimento industriale.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Progetto esecutivo di adeguamento sismico',
          'Modellazione FEM e verifiche secondo NTC 2018',
        ],
      },
    ],
  },
  {
    id: 'ultragas-spa-magazzini',
    title: 'Capannoni Stabilimento Ultragas',
    description: 'L’intervento riguarda lo stabilimento Ultragas di Catania, con riferimento ai sei magazzini interni destinati alla manutenzione e al muro di cinta adiacente, inseriti all’interno di un impianto industriale classificato in classe d’uso IV.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio industriale',
    year: 2024,
    location: 'Zona Industriale, Catania',
    client: 'Ultragas S.p.A.',
    services: 'Progetto esecutivo degli interventi di demolizione e ricostruzione di sei capannoni interni allo Stabilimento Ultragas S.p.A. – Zona Industriale di Catania.',
    duration: '2024 – in corso',
    amount: '€ 663.677,07',
    readTime: 2,
    cover: '/images/progetti/ultragas-spa-magazzini/cover.jpg',
    gallery: [
      '/images/progetti/ultragas-spa-magazzini/cover.jpg',
      '/images/progetti/ultragas-spa-magazzini/01.jpg',
      '/images/progetti/ultragas-spa-magazzini/02.jpg',
      '/images/progetti/ultragas-spa-magazzini/03.jpg',
      '/images/progetti/ultragas-spa-magazzini/04.jpg',
      '/images/progetti/ultragas-spa-magazzini/05.jpg',
      '/images/progetti/ultragas-spa-magazzini/06.jpg',
      '/images/progetti/ultragas-spa-magazzini/07.jpg',
    ],
    scope: [
      'Progetto esecutivo strutturale',
      'Demolizione e ricostruzione secondo NTC 2018',
      'Riqualificazione strutture industriali',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento riguarda lo stabilimento Ultragas di Catania, con riferimento ai sei magazzini interni destinati alla manutenzione e al muro di cinta adiacente, inseriti all’interno di un impianto industriale classificato in classe d’uso IV.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato il progetto esecutivo strutturale degli interventi di demolizione e ricostruzione, secondo NTC 2018, con l’obiettivo di adeguare le strutture alle prestazioni richieste dalla normativa vigente, mantenendo inalterate le geometrie e i volumi rispetto allo stato di fatto.',
      },
      {
        type: 'paragraph',
        text: 'Il progetto prevede la demolizione dei magazzini esistenti, caratterizzati da strutture portanti in carpenteria metallica, copertura a doppia falda e lastre ondulate in amianto, con successiva ricostruzione mediante nuove strutture in acciaio. I nuovi capannoni sono stati progettati con colonne in profili HEA, capriate reticolari, travi di bordo, controventi e nuove fondazioni in calcestruzzo armato.',
      },
      {
        type: 'paragraph',
        text: 'L’intervento comprende anche la ricostruzione del muro di cinta, previsto con telaio in calcestruzzo armato e tamponamento in muratura. Per le porzioni ordinarie sono state adottate fondazioni dirette, mentre per il tratto più critico, interessato da fenomeni erosivi al piede dovuti alla presenza di un corso d’acqua adiacente, è stata prevista una fondazione profonda su pali.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un progetto esecutivo integrato, capace di coniugare sicurezza strutturale, adeguamento normativo, funzionalità industriale e gestione delle criticità locali del sito, nell’ambito della riqualificazione dello stabilimento Ultragas di Catania.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Progetto esecutivo strutturale',
          'Demolizione e ricostruzione secondo NTC 2018',
          'Riqualificazione strutture industriali',
        ],
      },
    ],
  },
  {
    id: 'ultragas-spa-palazzina',
    title: 'Palazzina Uffici Ultragas',
    description: 'L’intervento ha riguardato la Palazzina Uffici dello stabilimento Ultragas di Catania, edificio strategico interno a un impianto industriale classificato in classe d’uso IV.',
    category: 'Ingegneria Strutturale',
    typology: 'Edificio industriale',
    year: 2025,
    location: 'Zona Industriale, Catania',
    client: 'Ultragas S.p.A.',
    services: 'Verifica di vulnerabilità sismica e Progetto esecutivo degli interventi di adeguamento sismico della palazzina uffici all’interno dello Stabilimento Ultragas S.p.A. – Zona Industriale di Catania.',
    duration: '2024 - 2025',
    amount: '€ 412.846,04',
    readTime: 2,
    cover: '/images/progetti/ultragas-spa-palazzina/cover.jpg',
    gallery: [
      '/images/progetti/ultragas-spa-palazzina/cover.jpg',
      '/images/progetti/ultragas-spa-palazzina/01.jpg',
      '/images/progetti/ultragas-spa-palazzina/02.jpg',
      '/images/progetti/ultragas-spa-palazzina/03.jpg',
      '/images/progetti/ultragas-spa-palazzina/04.jpg',
      '/images/progetti/ultragas-spa-palazzina/05.jpg',
      '/images/progetti/ultragas-spa-palazzina/06.jpg',
      '/images/progetti/ultragas-spa-palazzina/07.jpg',
      '/images/progetti/ultragas-spa-palazzina/08.jpg',
      '/images/progetti/ultragas-spa-palazzina/09.jpg',
    ],
    scope: [
      'Verifica di vulnerabilità sismica',
      'Progetto esecutivo di adeguamento sismico',
      'Modellazione FEM e verifiche secondo NTC 2018',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato la Palazzina Uffici dello stabilimento Ultragas di Catania, edificio strategico interno a un impianto industriale classificato in classe d’uso IV.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la verifica di vulnerabilità sismica e il successivo progetto esecutivo degli interventi di adeguamento sismico, secondo NTC 2018.',
      },
      {
        type: 'paragraph',
        text: 'Le scelte progettuali sono state orientate alla necessità di migliorare la risposta sismica dell’edificio limitando l’interferenza con le attività operative interne. Per questo motivo è stata adottata una soluzione prevalentemente esterna, basata sull’affiancamento alla struttura esistente di torri in carpenteria metallica ad elevata rigidezza e capacità dissipativa, fondate su micropali.',
      },
      {
        type: 'paragraph',
        text: 'Il sistema di adeguamento prevede il trasferimento delle azioni sismiche dalla muratura alle nuove strutture metalliche mediante collegamenti dedicati, pendoli in carpenteria, piastre di contatto e tasselli chimici. La disposizione delle pareti controventate è stata studiata per intercettare i principali punti di intersezione tra le murature e migliorare il comportamento globale dell’organismo strutturale.',
      },
      {
        type: 'paragraph',
        text: 'In corrispondenza dei lati non direttamente utilizzabili per vincoli geometrici e funzionali, il progetto ha previsto anche un sistema di rinvio delle azioni mediante cavi di precompressione, con fondazioni profonde dimensionate per resistere sia ad azioni di compressione sia ad azioni di trazione.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di trasformare la valutazione di vulnerabilità in un progetto esecutivo di adeguamento sismico integrato, capace di incrementare la sicurezza della palazzina uffici e di garantire la compatibilità degli interventi con le esigenze operative di uno stabilimento industriale in esercizio.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Verifica di vulnerabilità sismica',
          'Progetto esecutivo di adeguamento sismico',
          'Modellazione FEM e verifiche secondo NTC 2018',
        ],
      },
    ],
  },
  {
    id: 'viadotto-contessa',
    title: 'Viadotto Contessa',
    description: 'L’intervento ha riguardato lo studio del comportamento dinamico del Viadotto Contessa nell’ambito dei lavori di ripristino strutturale e miglioramento sismico dell’opera.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Viadotto',
    year: 2025,
    location: 'S.S. 452 “della Contessa”, Gubbio (PG)',
    client: 'Beico S.r.l., consorziata Steelconcrete',
    services: 'Progetto del sistema di monitoraggio, analisi del comportamento dinamico con approccio combinato numerico e sperimentale e taratura del sistema.',
    readTime: 2,
    cover: '/images/progetti/viadotto-contessa/cover.jpg',
    gallery: [
      '/images/progetti/viadotto-contessa/cover.jpg',
      '/images/progetti/viadotto-contessa/01.jpg',
      '/images/progetti/viadotto-contessa/02.jpg',
      '/images/progetti/viadotto-contessa/03.jpg',
      '/images/progetti/viadotto-contessa/04.jpg',
    ],
    scope: [
      'Progetto del sistema di monitoraggio strutturale',
      'Identificazione dinamica sperimentale OMA',
      'Modellazione FEM del viadotto',
      'Validazione numerico-sperimentale',
      'Taratura della configurazione strumentale',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato lo studio del comportamento dinamico del Viadotto Contessa nell’ambito dei lavori di ripristino strutturale e miglioramento sismico dell’opera.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha sviluppato un approccio integrato numerico-sperimentale, finalizzato alla definizione e alla taratura del sistema di monitoraggio dinamico del viadotto. L’attività ha previsto l’esecuzione di prove di caratterizzazione dinamica in condizioni ambientali mediante tecnica OMA, l’identificazione delle frequenze proprie, degli smorzamenti e delle forme modali, e la successiva elaborazione dei dati nel dominio delle frequenze.',
      },
      {
        type: 'paragraph',
        text: 'Parallelamente è stato predisposto un modello numerico agli elementi finiti, calibrato e validato sulla base delle risultanze sperimentali, con l’obiettivo di rappresentare in modo coerente il comportamento dinamico reale dell’infrastruttura e supportare la scelta della configurazione strumentale più efficace.',
      },
      {
        type: 'paragraph',
        text: 'Il nuovo impalcato del viadotto, ricostruito nell’ambito dei lavori, è costituito da una travata continua su sei campate con struttura mista acciaio-calcestruzzo, composta da tre travi principali in acciaio, traversi trasversali, controventi di torsione e soletta collaborante in calcestruzzo.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha consentito di definire un sistema di monitoraggio ottimizzato, fondato sul confronto tra risposta sperimentale e modello FEM, utile al controllo nel tempo del comportamento dinamico dell’opera e all’individuazione di eventuali variazioni significative rispetto allo stato iniziale di riferimento.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Progetto del sistema di monitoraggio strutturale',
          'Identificazione dinamica sperimentale OMA',
          'Modellazione FEM del viadotto',
          'Validazione numerico-sperimentale',
          'Taratura della configurazione strumentale',
        ],
      },
    ],
  },
  {
    id: 'viadotto-fiumara-di-catona',
    title: 'Viadotto sulla Fiumara di Catona',
    description: 'L’intervento ha riguardato il Viadotto sulla Fiumara di Catona, opera d’arte dell’Autostrada del Mediterraneo A2, nel tratto Villa San Giovanni – Reggio Calabria, nell’ambito dei lavori di manutenzione straordinaria tra lo svincolo di Campo Calabro e lo svincolo di Santa Caterina.',
    category: 'Ingegneria Infrastrutturale',
    typology: 'Viadotto',
    year: 2021,
    location: 'A2 Autostrada del Mediterraneo (tratto Villa San Giovanni – Reggio Calabria dal km 433+765 al km 442+077).',
    client: 'Anas S.p.A.',
    duration: '2020 - 2021',
    services: 'Valutazione delle condizioni di esercizio, diagnosi strutturale, analisi storico-critica, piano di indagine, analisi numeriche locali e supporto alla definizione degli interventi.',
    amount: '€ 5.581.234,49',
    readTime: 2,
    cover: '/images/progetti/viadotto-fiumara-di-catona/cover.jpg',
    gallery: [
      '/images/progetti/viadotto-fiumara-di-catona/cover.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/01.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/02.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/03.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/04.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/05.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/06.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/07.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/08.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/09.jpg',
      '/images/progetti/viadotto-fiumara-di-catona/10.jpg',
    ],
    scope: [
      'Valutazione delle condizioni di esercizio',
      'Diagnosi strutturale',
      'Supporto alla manutenzione straordinaria',
    ],
    article: [
      {
        type: 'paragraph',
        text: 'L’intervento ha riguardato il Viadotto sulla Fiumara di Catona, opera d’arte dell’Autostrada del Mediterraneo A2, nel tratto Villa San Giovanni – Reggio Calabria, nell’ambito dei lavori di manutenzione straordinaria tra lo svincolo di Campo Calabro e lo svincolo di Santa Caterina.',
      },
      {
        type: 'paragraph',
        text: 'Lo Studio ha svolto la valutazione delle condizioni di esercizio del viadotto, attraverso un percorso integrato di analisi storico-critica, sopralluoghi, esame visivo, pianificazione delle indagini, interpretazione dei risultati sperimentali e verifiche numeriche locali.',
      },
      {
        type: 'paragraph',
        text: 'L’attività ha riguardato in particolare le zone maggiormente sensibili al degrado, tra cui selle Gerber, cantilever, travi tampone, pile in calcestruzzo armato e apparecchi di appoggio. Le indagini hanno consentito di valutare fenomeni di carbonatazione, corrosione delle armature, espulsione del copriferro, infiltrazioni e criticità localizzate nelle aree di giunto.',
      },
      {
        type: 'paragraph',
        text: 'Sulla base del quadro conoscitivo acquisito sono state individuate le principali priorità di intervento, con indicazioni relative al risanamento corticale, al consolidamento delle selle Gerber, all’integrazione delle armature, alla realizzazione di controssolette estradossali sui cantilever e alla sostituzione degli apparecchi di appoggio.',
      },
      {
        type: 'paragraph',
        text: 'Nel complesso, l’attività ha fornito alla committenza un quadro tecnico organico delle condizioni del viadotto, utile alla programmazione degli interventi di manutenzione straordinaria, al miglioramento della durabilità dell’opera e al mantenimento di adeguati livelli di servizio.',
      },
      {
        type: 'heading',
        text: 'Servizi erogati',
      },
      {
        type: 'list',
        items: [
          'Valutazione delle condizioni di esercizio',
          'Diagnosi strutturale',
          'Supporto alla manutenzione straordinaria',
        ],
      },
    ],
  },
]

export function findProject(id: string | undefined): Project | undefined {
  if (!id) return undefined
  return PROJECTS.find((p) => p.id === id)
}
