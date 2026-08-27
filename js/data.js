// Baza de date a website-ului academic Conf. Dr. Ing. Lucian MATEI
// Date preluate si structurate conform CV-ului Europass, Anexei Standarde Minimale, Tezei de Abilitare si Statelor de Functiuni

const ACADEMIC_DATA = {
  profile: {
    name: "Conf. Univ. Dr. Ing. Lucian MATEI",
    title: "Conferențiar Universitar Doctor Inginer",
    institution: "Universitatea din Craiova",
    faculty: "Facultatea de Mecanică",
    department: "Departamentul Autovehicule, Transporturi și Inginerie Industrială",
    email: "mateiclucian@gmail.com",
    phone: "(+40) 725 123 920",
    address: "Str. Calea București, Nr. 107, 200512 Craiova, Dolj, România",
    office: "Facultatea de Mecanică-",
    consultations: "Marți: 14:00 - 16:00 | Joi: 12:00 - 14:00 (Sala BL23)",
    thesisTitle: "Cercetări și contribuții privind modelarea microscopică a traficului, dirijarea adaptivă a fluxurilor și optimizarea durabilă a sistemelor de transport rutier (Teză de Abilitare, 2026)",
    bio: "Conferențiar universitar în cadrul Facultății de Mecanică a Universității din Craiova, cu o experiență de peste 15 ani în modelarea microscopică a traficului, sisteme inteligente de transport (ITS), vehicule electrice & hibride, logistica urbană și prototipare rapidă 3D. Titular de curs la programele de Licență (ITT, AR) și Masterat (OSTR, DMA, MSI), director și responsabil de proiecte de cercetare naționale și europene (PCIDIF, CIVITAS MODERN, DEMOCRITOS, FLEAT) cu finanțări cumulate de peste 10 milioane RON.",
    links: {
      webOfScience: "https://www.webofscience.com/wos/author/record/WOS-000751261800001",
      universityProfile: "http://mecanica.ucv.ro/Organizare/Departamente/WebSiteATII/Cadre/Individuale/MateiL.html",
      googleDriveFolder: "https://drive.google.com/drive/folders/YOUR_MAIN_DRIVE_FOLDER_ID"
    },
    stats: {
      publications: "40+",
      isiArticles: "15+",
      projectsCount: "18+",
      totalFunding: "10M+ RON",
      supervisedTheses: "36+",
      citationsCount: "120+"
    }
  },

  // Discipline didactice si materiale pentru descarcare (Google Drive)
  courses: [
    {
      id: "pmfc",
      code: "ITT-301",
      title: "Proiectarea și Modelarea Fluxurilor de Circulație",
      level: "licenta",
      degree: "Ingineria Transporturilor și a Traficului (ITT)",
      year: "Anul III, Semestrul I",
      role: "-",
      hours: { curs: 2, lab: 1, proiect: 2 },
      description: "Modelarea microscopică, mezoscopică și macroscopică a fluxurilor rutiere. Utilizarea platformelor industriale de simulare Aimsun Next și PTV Vissim, calibrarea parametrilor de comportament prin indicele statistic GEH și optimizarea capacității nodurilor rutiere.",
      software: ["Aimsun Next", "PTV Vissim", "AutoCAD"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID",
      materials: {
        courses: [
          { title: "Curs PMFC", size: "1.0 MB", type: "PDF", link: "doc/Carte - PMFC.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator PMFC", size: "14.8 MB", type: "PDF", link: "doc/Laborator - PMFC.pdf" },
        ],
        projects: [
          { title: "Îndrumar de Proiect PMFC", size: "1.5 MB", type: "PDF", link: "doc/Proiect - PMFC.pdf" },
        ],
        exam: [
          /*           { title: "Tematica oficială și structura baremului de evaluare continuă & examen", size: "0.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
                    { title: "Modele de subiecte examen scris și aplicații practice", size: "1.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" } */
        ]
      }
    },
    {
      id: "mtrt1",
      code: "ITT-302",
      title: "Managementul Traficului Rutier și Telematică",
      level: "licenta",
      degree: "Ingineria Transporturilor și a Traficului (ITT)",
      year: "Anul III, Semestrul II, Anul IV, Semestrul I",
      role: "-",
      hours: { curs: 2, lab: 1, proiect: 0 },
      description: "Algoritmi de dirijare și control al circulației, semaforizare fixă, semi-adaptivă și adaptivă în timp real. Tehnologia buclelor inductive virtuale (SmartLoop), calculul fluxului de saturație, matrice de conflict și optimizarea metodei Webster.",
      software: ["SmartLoop TS", "MATLAB", "Excel Trafic Calc"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID",
      materials: {
        courses: [
          { title: "Curs MTRT", size: "2.1 MB", type: "PDF", link: "doc/Curs - MTRT.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator MTRT", size: "13.8 MB", type: "PDF", link: "doc/Laborator - Managementul Traficului.pdf" },
        ],
        projects: [
          { title: "Îndrumar de Proiect MTRT", size: "1.9 MB", type: "PDF", link: "doc/Proiect - MTRT.pdf" },
        ],
        exam: [
          /* { title: "Structura evaluării continue și cerințe colocviu laborator", size: "0.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" } */
        ]
      }
    },
    /*     {
          id: "mtrt2",
          code: "ITT-401",
          title: "Managementul Traficului Rutier și Telematică II",
          level: "licenta",
          degree: "Ingineria Transporturilor și a Traficului (ITT)",
          year: "Anul IV, Semestrul II",
          role: "Titular Curs & Aplicații",
          hours: { curs: 2, lab: 2, proiect: 0 },
          description: "Coordonarea de rețea, crearea undelor verzi bidirecționale pe coridoare urbane aglomerate, prioritizarea transportului public (Transit Signal Priority - TSP), integrarea sistemelor VMS și arhitecturi ITS avansate.",
          software: ["Aimsun Next", "Vissim Visum", "Python / C++"],
          driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID",
          materials: {
            courses: [
              { title: "Curs 1: Coordonarea semaforizărilor pe axe magistrale și conceptul de undă verde", size: "2.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" },
              { title: "Curs 2: Tehnici de prioritizare a transportului public în intersecții (TSP)", size: "3.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" },
              { title: "Curs 3: Calculul orizontului de predicție și al ferestrei de prioritate semaforică", size: "2.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" },
              { title: "Curs 4: Sisteme telematice integrate, arhitecturi C-ITS și senzori radar/V2X", size: "3.6 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" }
            ],
            labs: [
              { title: "Laborator 1: Simularea microscopică a undei verzi pe Bld. Nicolae Titulescu (Slatina)", size: "2.8 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" },
              { title: "Laborator 2: Modelarea ferestrelor de prioritate pentru autobuze și tramvaie", size: "3.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" }
            ],
            projects: [
              { title: "Ghid proiectare coridor inteligent de tranzit cu prioritate TSP", size: "2.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" }
            ],
            exam: [
              { title: "Barem și chestionar de sinteză pentru colocviu", size: "0.6 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT2_ID" }
            ]
          }
        }, */
    {
      id: "aeh",
      code: "AR-401",
      title: "Autovehicule Electrice și Hibride",
      level: "licenta",
      degree: "Autovehicule Rutiere (AR) / ITT",
      year: "Anul IV, Semestrul II",
      role: "-",
      hours: { curs: 2, lab: 1, proiect: 1 },
      description: "Arhitecturi de propulsie electrică și hibridă, dimensionarea pachetelor de baterii Li-Ion, sisteme mecatronice de control, frânare regenerativă, bilanț energetic și evaluarea amprentei ecologice urbane.",
      software: ["MATLAB / Simulink", "SolidWorks", "BMS Monitor"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID",
      materials: {
        courses: [
          { title: "Curs AEH", size: "3.3 MB", type: "PDF", link: "doc/Carte - AEH.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator AEH", size: "8.4 MB", type: "PDF", link: "doc/Laborator - AEH.pdf" },
        ],
        projects: [
          { title: "Îndrumar de Proiect AEH", size: "2.2 MB", type: "PDF", link: "doc/Proiect - AEH.pdf" }
        ],
        exam: [
        ]
      }
    },
    {
      id: "infotr",
      code: "ITT-402",
      title: "Informatica în Transporturi",
      level: "licenta",
      degree: "Ingineria Transporturilor și a Traficului (ITT)",
      year: "Anul IV, Semestrul I",
      role: "-",
      hours: { curs: 4, lab: 1, proiect: 0 },
      description: "Prelucrarea numerică și statistică a seturilor mari de date din transporturi. Automatizarea calculului matricelor de deplasare O/D, scripturi Python și C pentru prelucrarea fluxurilor orare culese din teren.",
      software: ["Python", "C/C++", "MATLAB", "GIS QGIS"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID",
      materials: {
        courses: [
          { title: "Curs Informatica in transporturi.pdf", size: "2.0 MB", type: "PDF", link: "doc/Curs - Informatica in transporturi.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator Informatica in transporturi.pdf", size: "1.8 MB", type: "PDF", link: "doc/Laborator - Informatica in transporturi.pdf" },
        ],
        projects: [
          { title: "Îndrumar de Proiect Informatica in transporturi.pdf", size: "1.4 MB", type: "PDF", link: "doc/Proiect - Informatica in transporturi.pdf" }
        ],
        exam: [
        ]
      }
    },
    {
      id: "logurb",
      code: "OSTR-101",
      title: "Logistică Urbană",
      level: "masterat",
      degree: "Optimizarea Sistemelor de Transport Rutier (OSTR)",
      year: "Master Anul I, Semestrul II",
      role: "-",
      hours: { curs: 2, lab: 1, proiect: 1 },
      description: "Managementul avansat al logisticii mărfurilor în aglomerările urbane: restricții de tonaj pe axele centrale, ferestre orare de aprovizionare nocturnă, optimizarea terminalelor Park & Ride și platforme de credite de mobilitate (MCP).",
      software: ["Aimsun Next", "GIS Logistics Tools"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID",
      materials: {
        courses: [
          { title: "Curs Logistică Urbană.pdf", size: "2.8 MB", type: "PDF", link: "doc/Curs - Logistica Urbana.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator Logistică Urbană.pdf", size: "9.2 MB", type: "PDF", link: "doc/Laborator - Logistica Urbana.pdf" }
        ],
        projects: [
          { title: "Îndrumar de Proiect Logistică Urbană.pdf", size: "1.9 MB", type: "PDF", link: "doc/Proiect - Logistica Urbana.pdf" }
        ],
        exam: [
        ]
      }
    },
    {
      id: "msoc",
      code: "MSOC-201",
      title: "Modelarea, Sistematizarea și Organizarea Circulației",
      level: "masterat",
      degree: "Optimizarea Sistemelor de Transport Rutier (OSTR)",
      year: "Master Anul II, Semestrul I",
      role: "-",
      hours: { curs: 2, lab: 1, proiect: 1 },
      description: "Managementul avansat al logisticii mărfurilor în aglomerările urbane: restricții de tonaj pe axele centrale, ferestre orare de aprovizionare nocturnă, optimizarea terminalelor Park & Ride și platforme de credite de mobilitate (MCP).",
      software: ["Vissum/Vissim", "GIS Logistics Tools"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID",
      materials: {
        courses: [
          { title: "Curs Modelarea, Sistematizarea și Organizarea Circulației.pdf", size: "2.8 MB", type: "PDF", link: "doc/Curs - MSOC.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator Modelarea, Sistematizarea și Organizarea Circulației.pdf", size: "9.2 MB", type: "PDF", link: "doc/Laborator - MSOC.pdf" }
        ],
        projects: [
          { title: "Îndrumar de Proiect Modelarea, Sistematizarea și Organizarea Circulației.pdf", size: "1.9 MB", type: "PDF", link: "doc/Proiect - MSOC.pdf" }
        ],
        exam: [
        ]
      }
    },
    {
      id: "autoav",
      code: "AHEA-201",
      title: "Autovehicule Autonome (Autonomous Vehicles)",
      level: "masterat",
      degree: "Autovehicule Hibride, Electrice și Autonome (AHEA / DMA)",
      year: "Master Anul II, Semestrul I",
      role: "-",
      hours: { curs: 2, lab: 1, proiect: 0 },
      description: "Niveluri de autonomie conform standardului SAE (SAE Level 0-5), tehnologii senzoriale integrate (LiDAR, Radar, Camere stereoscopice, Ultrasunete), algoritmi de percepție, planificare a traiectoriei și interacțiunea cu infrastructura inteligentă V2I.",
      software: ["ROS / Python", "MATLAB Automated Driving Toolbox", "SolidWorks"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID",
      materials: {
        courses: [
          { title: "Curs Autovehicule Autonome (Autonomous Vehicles)", size: "2.8 MB", type: "PDF", link: "doc/Curs - AV.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator Autovehicule Autonome (Autonomous Vehicles)", size: "9.2 MB", type: "PDF", link: "doc/Laborator - AV.pdf " }
        ],
        projects: [
        ],
        exam: [
        ]
      }
    },
    {
      id: "prototip",
      code: "MSI-202",
      title: "Design și Optimizare în Prototiparea Rapidă",
      level: "masterat",
      degree: "Managementul Sistemelor Industriale (MSI) / DMA",
      year: "Master Anul II, Semestrul II",
      role: "-",
      hours: { curs: 1, lab: 2, proiect: 0 },
      description: "Metodologii avansate de fabricație aditivă (FDM, SLA, SLS, Tehnologii Markforged, Formlabs, 3D Systems), scanare 3D industrială, Reverse Engineering, optimizare topologică și proiectare parametrică în SolidWorks CAD/FEA.",
      software: ["SolidWorks CAD/FEA", "Eiger Markforged", "PreForm Formlabs", "3D Sprint"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID",
      materials: {
        courses: [
          { title: "Curs Design și Optimizare în Prototiparea Rapidă", size: "2.8 MB", type: "PDF", link: "doc/Curs - DOPR.pdf" },
        ],
        labs: [
          { title: "Îndrumar de Laborator Design și Optimizare în Prototiparea Rapidă", size: "9.2 MB", type: "PDF", link: "doc/Laborator - DOPR.pdf " }
        ],
        projects: [
        ],
        exam: [
        ]
      }
    }
  ],

  // Carti si tratate publicate
  books: [
    {
      id: "b1",
      title: "Algoritmi de optimizare a circulației la nivel de intersecții rutiere",
      authors: "Lucian Matei",
      year: 2020,
      publisher: "Editura Universitaria",
      pages: 201,
      isbn: "978-606-14-1590-2",
      type: "Monografie de cercetare",
      link: "doc/Carte - Algoritmi.pdf"
    },
    {
      id: "b2",
      title: "Proiectarea și Modelarea Fluxurilor de Circulație",
      authors: "Lucian Matei, Laurențiu Racilă",
      year: 2020,
      publisher: "Editura Universitaria",
      pages: 204,
      isbn: "978-606-14-1625-7",
      type: "Manual universitar",
      link: "doc/Carte - PMFC.pdf"
    },
    {
      id: "b3",
      title: "Ingineria traficului rutier: evaluarea performanței și organizarea circulației în rețele de intersecții",
      authors: "Lucian Matei, Dumitru Ilie, Laurențiu Racilă",
      year: 2026,
      publisher: "Editura Universitaria",
      pages: 420,
      isbn: "978-606-14-2291-3",
      type: "Tratat / Monografie",
      link: "doc/Carte - Ingineria.pdf"
    },
    {
      id: "b4",
      title: "Metode numerice in C pentru ingineri. Agloritmi si programe",
      authors: "Mihaela Racilă, Dumitru Ilie, Lucian Matei",
      year: 2026,
      publisher: "Editura Universitaria",
      pages: 222,
      isbn: "978-606-14-2292-0",
      type: "Tratat / Monografie",
      link: "doc/Carte - Metode.pdf"
    },
    {
      id: "b5",
      title: "Achievements and Solutions in Mechanical Engineering III - The 7th International Conference in Mechanical Engineering (ICOME)",
      authors: "Ilie Dumitru, Laurenţiu Daniel Racilă, Lucian Matei (Editors)",
      year: 2026,
      publisher: "Trans Tech Publications Ltd, Switzerland",
      pages: 194,
      doi: "10.4028/v-7NySTl",
      type: "Volum Editor Internațional",
      link: "doc/Carte - ICOME Achievements.pdf"
    },
    {
      id: "b6",
      title: "Autovehicule Electrice și Hibride",
      authors: "Laurențiu Racilă, Ilie Dumitru, Lucian Matei",
      year: 2025,
      publisher: "Editura Universitaria",
      pages: 166,
      isbn: "978-606-14-2238-8",
      type: "Carte de specialitate",
      link: "doc/Carte - AEH.pdf"
    },
    {
      id: "b7",
      title: "Elemente de teoria elasticității: modelare și simulare",
      authors: "Laurențiu Racilă, Ilie Dumitru, Lucian Matei",
      year: 2024,
      publisher: "Editura Universitaria",
      pages: 86,
      isbn: "978-606-14-2034-6",
      type: "Carte de specialitate",
      link: "doc/Carte - Elemente.pdf"
    },
    {
      id: "b8",
      title: "Proceedings of the International Conference on Mechanical Engineering (ICOME 2022)",
      authors: "Ilie Dumitru, Lucian Matei, Laurențiu Daniel Racilă, Adrian Sorin Roșca (Editors)",
      year: 2023,
      publisher: "Atlantis Press",
      pages: 638,
      isbn: "9464631511",
      type: "Volum Editor Internațional",
      link: "doc/Carte - ICOME Proceedings.pdf"
    },
    {
      id: "b9",
      title: "6th International Conference on Mechanical Engineering I.C.O.M.E 2022: Book of Abstracts",
      authors: "Lucian Matei, Laurențiu Daniel Racilă (Editors)",
      year: 2026,
      publisher: "Editura Universitaria",
      pages: 88,
      isbn: "978-606-14-1841-1",
      type: "Volum Editor Internațional",
      link: "doc/Carte - ICOME Abstract.pdf"
    }
  ],

  // Articole stiintifice reprezentative (ISI & BDI)
  publications: [
    {
      id: "p1",
      title: "Algorithmic Classification of Constrained Extrema in Low-Dimensional Problems with Applications to Transport Location Problems",
      authors: "Racila M., Oprica T., Matei L., Dumitru I., Gencarau N., Racila L.",
      journal: "Vehicles (MDPI)",
      year: 2026,
      volume: "8(6):131",
      impactFactor: 3.1,
      category: "isi",
      hasImpactFactor: true,
      doi: "10.3390/vehicles8060131",
      link: "https://doi.org/10.3390/vehicles8060131"
    },
    {
      id: "p2",
      title: "Study on Blade Geometric Design and Advanced Control for Horizontal Wind Turbine",
      authors: "M. C. Călin, L. Matei, M. Mușat, M. Pandelea, M. Iliescu",
      journal: "Adv. Sci. Technol.",
      year: 2026,
      volume: "vol. 178, pp. 25–33",
      category: "bdi",
      hasImpactFactor: false,
      doi: "10.4028/p-dIpv5c",
      link: "https://doi.org/10.4028/p-dIpv5c"
    },
    {
      id: "p3",
      title: "Enabling Technologies and System Architectures for Autonomous Vehicles",
      authors: "T. G. Oprica, I. Dumitru, D. Burghilă, L. Simniceanu, L. Matei",
      journal: "Adv. Sci. Technol.",
      year: 2026,
      volume: "vol. 178, pp. 105–113",
      category: "bdi",
      hasImpactFactor: false,
      doi: "10.4028/10.4028/p-3uKF7f",
      link: "https://doi.org/10.4028/10.4028/p-3uKF7f"
    },
    {
      id: "p4",
      title: "Application of a synthetic power indicator method to quantify chemical pollution in motor vehicles",
      authors: "Alexandru Constantin Oprica, Nicoleta Gencărău, Lucian Matei, Augustin Constantinescu, Ilie Dumitru",
      journal: "Acta Technica Napocensis Series-Applied Mathematics Mechanics and Engineering",
      year: 2025,
      volume: "Vol. 68, Issue 1-2, pp. 247-254",
      category: "isi",
      hasImpactFactor: false,
      link: "https://www.webofscience.com/wos/woscc/full-record/WOS:001565922600024"
    },
    {
      id: "p5",
      title: "Biomechanical Hand Prosthesis Design",
      authors: "E. F. Lunguţ, L. Matei, M. M. Roşu, M. Iliescu, C. Radu",
      journal: "Machines (MDPI)",
      year: 2023,
      volume: "vol. 11, no. 10, p. 964",
      impactFactor: 2.1,
      category: "isi",
      hasImpactFactor: true,
      doi: "10.3390/machines11100964",
      link: "https://doi.org/10.3390/machines11100964"
    },
    {
      id: "p6",
      title: "Reconfigurable/Foldable Overconstrained Mechanism and Its Application",
      authors: "Lucian Matei, Mihaiela Iliescu, Ilie Dumitru, Mihaela Racila, Glencora-Maria Benec Mincu, Laurentiu Racila",
      journal: "Applied Sciences (MDPI)",
      year: 2022,
      volume: "Vol. 12, Issue 1, 262",
      impactFactor: 2.92,
      category: "isi",
      hasImpactFactor: true,
      doi: "10.3390/app12010262",
      link: "https://doi.org/10.3390/app12010262"
    },
    {
      id: "p7",
      title: "Concept, Design, Initial Tests and Prototype of Customized Upper Limb Prosthesis",
      authors: "Corina Radu (Frent), Maria Magdalena Rosu, Lucian Matei, Liviu Marian Ungureanu, Mihaiela Iliescu",
      journal: "Applied Sciences (MDPI)",
      year: 2021,
      volume: "Vol. 11, Issue 7, 3077",
      impactFactor: 2.92,
      category: "isi",
      hasImpactFactor: true,
      doi: "10.3390/app11073077",
      link: "https://doi.org/10.3390/app11073077"
    },
    {
      id: "p8",
      title: "Chemical pollution evaluation method using the carbon footprint for various road traffic scenarios in Craiova",
      authors: "I. Dumitru, L. Matei, L. Racila, N. Gencărău, A. Oprica",
      journal: "CONAT 2024 International Congress of Automotive and Transport Engineering, Springer",
      year: 2024,
      volume: "pp. 105–111",
      category: "isi",
      hasImpactFactor: false,
      doi: "10.1007/978-3-031-77631-1_8",
      link: "https://doi.org/10.1007/978-3-031-77631-1_8"
    },
    {
      id: "p9",
      title: "Traffic flow investigation of an adaptive signal control system in several junctions",
      authors: "L. Matei, I. Dumitru, L. Racila",
      journal: "CONAT 2024 International Congress of Automotive and Transport Engineering, Springer",
      year: 2024,
      volume: "pp. 38–49",
      category: "isi",
      hasImpactFactor: false,
      doi: "10.1007/978-3-031-77635-9_4",
      link: "https://doi.org/10.1007/978-3-031-77635-9_4"
    },
    {
      id: "p10",
      title: "Evaluation of different types of junction management for a different geometric design",
      authors: "I. Dumitru, L. Matei, L. Racila",
      journal: "CONAT 2024, Proceedings in automotive engineering, Springer",
      year: 2024,
      volume: "pp. 29–37",
      category: "isi",
      hasImpactFactor: false,
      doi: "10.1007/978-3-031-77635-9_3",
      link: "https://doi.org/10.1007/978-3-031-77635-9_3"
    },
    {
      id: "p11",
      title: "Using virtual inductive loops to adapt the signal plans of junctions",
      authors: "L. Matei, I. Dumitru, L. D. Racilă, D. Tutunea, A. C. Oprica",
      journal: "IOP Conference Series: Materials Science and Engineering",
      year: 2019,
      volume: "568(1), 012106",
      category: "bdi",
      hasImpactFactor: false,
      doi: "10.1088/1757-899X/568/1/012106",
      link: "https://doi.org/10.1088/1757-899X/568/1/012106"
    },
    {
      id: "p12",
      title: "Mathematical method for studying passenger flows in Craiova Municipality public transport system",
      authors: "Lucian Matei, Mihaela Racilă, Alexandru Oprica, Dumitru Neagoe, Ilie Dumitru, Laurențiu Racilă",
      journal: "CAR2017 International Congress / Scientific Bulletin",
      year: 2017,
      volume: "CAR 2017_021",
      category: "bdi",
      hasImpactFactor: false,
      doi: "10.26825/bup.ar.2017.001",
      link: "https://doi.org/10.26825/bup.ar.2017.001"
    },
    {
      id: "p13",
      title: "Smart Signalization and Public Transport Priority, a First Step to Smart Mobility in a Smart City",
      authors: "Lucian Matei, Ilie Dumitru, Laurențiu Racilă, Theodor Oprica",
      journal: "ICOME 2017 / Applied Mechanics and Materials",
      year: 2017,
      volume: "Vol. 880, pp. 383-390",
      category: "bdi",
      hasImpactFactor: false,
      doi: "10.4028/www.scientific.net/AMM.880.383",
      link: "https://doi.org/10.4028/www.scientific.net/AMM.880.383"
    },
    {
      id: "p14",
      title: "Adaptive traffic signal control on a national road intersection",
      authors: "Lucian Matei, Ilie Dumitru, Laurențiu Racilă, Matei Vînatoru",
      journal: "SMAT 2014 / Applied Mechanics and Materials",
      year: 2014,
      volume: "Vol. 822, pp. 455-460",
      category: "bdi",
      hasImpactFactor: false,
      doi: "10.4028/www.scientific.net/AMM.822.455",
      link: "https://doi.org/10.4028/www.scientific.net/AMM.822.455"
    }
  ],

  // Proiecte de cercetare & Granturi industriale
  researchProjects: [
    {
      id: "pcidif",
      title: "Casă plutitoare, ecologică, pasivă, inteligentă și independentă energetic",
      code: "PCIDIF/155/PCIDIF_P1/OP1/RSO1.1/PCIDIF_A1 (Cod 333907)",
      role: "Director de Proiect",
      period: "09.2025 – 09.2027 (24 luni)",
      budget: "9.622.329,52 RON",
      partner: "HIGHTECH MARINA S.R.L. & Universitatea din Craiova",
      badge: "Grant Major CDI (9.6M lei)",
      description: "Dezvoltarea unei structuri plutitoare pasive independente energetic, dotată cu sisteme inteligente de monitorizare mecatronică, stocare avansată de energie și propulsie ecologică hibridă."
    },
    {
      id: "modern",
      title: "CIVITAS MODERN – Mobility, Development and Energy use Reduction",
      code: "Grant Agreement nr. 219041 (Comisia Europeană FP7)",
      role: "Manager Tehnic / Responsabil Măsuri",
      period: "5 ani",
      budget: "145.200 € (Măsurile 01.02 & 03.02)",
      partner: "Consorțiu European (Craiova, Brest, Vitoria-Gasteiz, Coimbra)",
      badge: "Proiect European",
      description: "Implementarea și evaluarea politicilor de combustibili alternativi (01.02 'Alternative fuels in Craiova') și a restricțiilor de acces în centrul urban (03.02 'Access restriction policies in Craiova')."
    },
    {
      id: "democritos",
      title: "DEMOCRITOS – Developing Mobility Credits Integrated Platform Enabling Travellers",
      code: "Grant Agreement nr. 233744 (Comisia Europeană)",
      role: "Manager Tehnic",
      period: "3 ani",
      budget: "144.844 €",
      partner: "Parteneriat European CDI",
      badge: "Proiect European",
      description: "Dezvoltarea modelului matematic și a platformei software de credite de mobilitate transferabile (Tradable Mobility Credits) aplicată experimental pentru municipiul Craiova."
    },
    {
      id: "fleat",
      title: "FLEAT – Fleet Environmental Action & Assessment",
      code: "EC Grant Agreement EIE/07/007/SI2.466261",
      role: "Manager Tehnic",
      period: "30 luni",
      budget: "43.076 €",
      partner: "Consorțiu European",
      badge: "Proiect European",
      description: "Elaborarea algoritmilor și pachetului software pentru optimizarea și gestionarea ecologică a parcului auto al operatorilor de transport din municipiu."
    },
    {
      id: "slatina-trafic",
      title: "Elaborare Studiu de Trafic pentru Municipiul Slatina",
      code: "Contract 34/24.06.2019 (INCESA Craiova)",
      role: "Responsabil Tehnic",
      period: "2019",
      budget: "130.000 RON",
      partner: "Direcția Administrarea Străzilor și Iluminatului Public Slatina",
      badge: "Studiu de Trafic Aplicat",
      description: "Modelarea microscopică în Aimsun a coridoarelor Bulevardul Nicolae Titulescu și Strada Artileriei, optimizarea semaforizării semi-adaptive și fundamentarea soluțiilor de deviere a traficului greu."
    },
    {
      id: "craiova-transport",
      title: "Studiul fluxului de călători și delegarea transportului public metropolitan Craiova",
      code: "Contracte I98/2024 & I99/2024",
      role: "Responsabil Tehnic & Membru",
      period: "2024",
      budget: "Contract CDI",
      partner: "Asociația de Dezvoltare Intercomunitară 'Zona Metropolitană Craiova'",
      badge: "Planificare Metropolitană",
      description: "Determinarea cererii orare de deplasare prin modele de regresie polinomială, stabilirea capacităților de transport și optimizarea graficelor pe traseele metropolitane."
    },
    {
      id: "baia-mare",
      title: "Modelare virtuală și simulare trafic intersecții majore Baia Mare",
      code: "Contract 2C/01.03.2023",
      role: "Director de Proiect",
      period: "2023",
      budget: "23.800 RON",
      partner: "S.C. Proiect Construct Regiunea Transilvania S.R.L.",
      badge: "Modelare Microscopică",
      description: "Simularea microscopică și optimizarea capacității nodurilor rutiere de pe Bulevardele Independenței, București, Traian, Republicii și Unirii."
    },
    {
      id: "postdoc",
      title: "Sistem integrat de cuantificare a parametrilor de trafic rutier destinat reducerii congestiilor",
      code: "POCU/380/6/13/123990 (Contract nr. 8/2019)",
      role: "Cercetător Postdoctoral / Titular Grant",
      period: "2019 – 2020",
      budget: "30.600 RON",
      partner: "Universitatea din Craiova",
      badge: "Cercetare Postdoctorală",
      description: "Dezvoltarea metodologiei de măsurare non-intruzivă prin bucle video SmartLoop și evaluarea impactului ecologic al politicilor de sistematizare urbană."
    }
  ],

  // Tematici de Licenta si Disertatie propuse studentilor
  thesisProposals: [
    {
      type: "licenta",
      degree: "Licență - Ingineria Transporturilor și a Traficului (ITT)",
      topics: [
        "Sistematizarea circulației și modelarea microscopică a unei intersecții critice în Aimsun Next / PTV Vissim",
        "Proiectarea și optimizarea planului de semaforizare adaptiv pe un coridor urban aglomerat",
        "Evaluarea capacității și siguranței sensurilor giratorii urbane utilizând teoria acceptării intervalelor libere",
        "Dezvoltarea unei aplicații software în Python / C pentru calculul automat al nivelului de serviciu (LOS)",
        "Studiu privind optimizarea accesibilității și amenajarea nodurilor intermodale de tranzit"
      ]
    },
    {
      type: "licenta",
      degree: "Licență - Autovehicule Rutiere (AR)",
      topics: [
        "Dimensionarea și simularea lanțului cinematic de tracțiune pentru un autoturism electric / hibrid",
        "Proiectarea parametrică și optimizarea structurală (FEA) a unui subansamblu auto în SolidWorks",
        "Reconstrucția 3D prin inginerie inversă și fabricarea aditivă (printare 3D) a componentelor mecanice",
        "Reconstrucția cinematică și dinamică a dinamicii accidentelor rutiere pe baza urmelor de frânare"
      ]
    },
    {
      type: "masterat",
      degree: "Masterat - Optimizarea Sistemelor de Transport Rutier (OSTR)",
      topics: [
        "Evaluarea impactului introducerii benzilor rezervate și prioritizării TSP asupra emisiilor de CO2 și NOx",
        "Modelarea matematică a fluxurilor de călători prin regresie de ordin înalt pentru optimizarea orarelor RAT",
        "Arhitecturi de tip Mobility-as-a-Service (MaaS) și scheme de credite de mobilitate transferabile",
        "Optimizarea logisticii urbane de aprovizionare nocturnă și managementul flotei de distribuție"
      ]
    },
    {
      type: "masterat",
      degree: "Masterat - Autovehicule Hibride, Electrice și Autonome (AHEA / DMA)",
      topics: [
        "Comportamentul vehiculelor autonome în medii urbane cu flux mixt de trafic și intersecții inteligente",
        "Analiza bilanțului energetic și optimizarea autonomiei reale a flotelor de autobuze electrice",
        "Proiectarea și fabricarea aditivă a componentelor biomecanice și protezelor personalizate"
      ]
    }
  ]
};
