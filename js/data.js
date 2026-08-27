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
    office: "Facultatea de Mecanică, Sala D22 / Laborator Modelare Trafic",
    consultations: "Marți: 14:00 - 16:00 | Joi: 12:00 - 14:00 (Sala D22)",
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
      role: "Titular Curs & Aplicații",
      hours: { curs: 2, lab: 2, proiect: 1 },
      description: "Modelarea microscopică, mezoscopică și macroscopică a fluxurilor rutiere. Utilizarea platformelor industriale de simulare Aimsun Next și PTV Vissim, calibrarea parametrilor de comportament prin indicele statistic GEH și optimizarea capacității nodurilor rutiere.",
      software: ["Aimsun Next", "PTV Vissim", "AutoCAD"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID",
      materials: {
        courses: [
          /* { title: "Curs 1: Introducere în teoria fluxurilor de circulație și ecuația fundamentală (q = k · v)", size: "2.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
          { title: "Curs 2: Taxonomia modelării traficului: Scările Macroscopică, Mezoscopică și Microscopică", size: "3.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
          { title: "Curs 3: Modele de urmărire (Car-Following) și ecuația de siguranță Gipps", size: "2.8 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
          { title: "Curs 4: Modele de schimbare a benzii: manevre obligatorii (MLC) și discreționare (DLC)", size: "2.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
          { title: "Curs 5: Matricea Origine-Destinație (O/D) și algoritmi de alocare dinamică pe rute", size: "3.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
          { title: "Curs 6: Calibrarea parametrică și validarea statistică prin indicele GEH", size: "2.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
          { title: "Curs 7: Nivelul de Serviciu (LOS) și mecanismele de propagare a undelor de șoc în rețele", size: "3.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" } */
        ],
        labs: [
          { title: "Îndrumar de Laborator PMFC", size: "14.8 MB", type: "PDF", link: "doc/Laborator - PMFC.pdf" },
        ],
        projects: [
          { title: "Îndrumar de Proiect PMFC", size: "1.5 MB", type: "PDF", link: "doc/Proiect - PMFC.pdf" },
          /*           { title: "Set de date trafic primare (Recensământ volumetric orar)", size: "4.8 MB", type: "ZIP", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" },
                    { title: "Șablon planșe AutoCAD (.dwg) și structură raport tehnic de simulare", size: "8.1 MB", type: "ZIP", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PMFC_ID" } */
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
      title: "Managementul Traficului Rutier și Telematică I",
      level: "licenta",
      degree: "Ingineria Transporturilor și a Traficului (ITT)",
      year: "Anul III, Semestrul I",
      role: "Titular Curs & Laborator",
      hours: { curs: 2, lab: 2, proiect: 0 },
      description: "Algoritmi de dirijare și control al circulației, semaforizare fixă, semi-adaptivă și adaptivă în timp real. Tehnologia buclelor inductive virtuale (SmartLoop), calculul fluxului de saturație, matrice de conflict și optimizarea metodei Webster.",
      software: ["SmartLoop TS", "MATLAB", "Excel Trafic Calc"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID",
      materials: {
        courses: [
          { title: "Curs 1: Paradigme de control în dirijarea semaforică: Timpi ficși vs. Semiadaptiv vs. Adaptiv online", size: "2.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Curs 2: Senzori de trafic: bucle inductive fizice vs. bucle video virtuale (SmartLoop TS)", size: "3.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Curs 3: Fluxul de saturație de bază și coeficienții analitici de corecție geometrică (HCM)", size: "2.9 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Curs 4: Teoria matricelor de conflict și separarea mișcărilor concurente în faze semaforice", size: "2.3 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Curs 5: Metoda analitică Webster pentru optimizarea ciclului semaforic (Co = 1.5L+5 / 1-Y)", size: "3.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Curs 6: Controlul adaptiv la intersecțiile dintre rețele prioritare naționale (DN73) și secundare (DJ792C)", size: "2.6 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" }
        ],
        labs: [
          { title: "Îndrumar Lucrări de Laborator - Managementul Traficului (63 pagini, Craiova)", size: "11.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Laborator 1: Configurarea zonelor de detecție SmartLoop TS pe flux video", size: "2.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Laborator 2: Determinarea analitică a fluxului de saturație pe un grup de benzi", size: "1.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Laborator 3: Construirea matricelor de incompatibilitate booleană (Conflict Matrix)", size: "1.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Laborator 4: Implementarea scriptului MATLAB pentru calculul ciclului optim Webster", size: "2.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" }
        ],
        projects: [
          { title: "Studiu de caz: Proiectarea planului de semaforizare pentru o intersecție în 4 faze", size: "1.9 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" },
          { title: "Fișier de calcul automat timpi de semaforizare (Template Excel)", size: "1.2 MB", type: "XLSX", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" }
        ],
        exam: [
          { title: "Structura evaluării continue și cerințe colocviu laborator", size: "0.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_MTRT1_ID" }
        ]
      }
    },
    {
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
    },
    {
      id: "aeh",
      code: "AR-401",
      title: "Autovehicule Electrice și Hibride",
      level: "licenta",
      degree: "Autovehicule Rutiere (AR) / ITT",
      year: "Anul IV, Semestrul II",
      role: "Co-titular & Laborator",
      hours: { curs: 2, lab: 3, proiect: 0 },
      description: "Arhitecturi de propulsie electrică și hibridă, dimensionarea pachetelor de baterii Li-Ion, sisteme mecatronice de control, frânare regenerativă, bilanț energetic și evaluarea amprentei ecologice urbane.",
      software: ["MATLAB / Simulink", "SolidWorks", "BMS Monitor"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID",
      materials: {
        courses: [
          { title: "Curs 1: Arhitecturi de propulsie: HEV, PHEV, BEV și FCEV", size: "3.3 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Curs 2: Motoare electrice de tracțiune (PMSM, IM) și invertoare de putere", size: "2.9 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Curs 3: Tehnologii de baterii de tracțiune, BMS și management termic", size: "3.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Curs 4: Dinamica vehiculului electric și recuperarea energiei la frânare", size: "2.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Tratat Curs: Autovehicule Electrice și Hibride (Editura Universitaria, 2025, 166 pag.)", size: "18.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" }
        ],
        labs: [
          { title: "Îndrumar de Laborator - Autovehicule Electrice și Hibride (50 pagini, format A5)", size: "8.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Laborator 1: Simularea bilanțului energetic în Simulink pe ciclu urban WLTP", size: "2.6 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Laborator 2: Testarea caracteristicilor de descărcare și încărcare a celulelor Li-Ion", size: "2.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" },
          { title: "Laborator 3: Conversia unui vehicul convențional în vehicul electric (Studiu Oltcit)", size: "3.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" }
        ],
        projects: [
          { title: "Ghid de dimensionare a grupului motopropulsor pentru autobuz electric urban", size: "2.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" }
        ],
        exam: [
          { title: "Întrebări sinteză pentru examenul de diplomă și colocviu", size: "0.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AEH_ID" }
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
      role: "Titular Curs & Aplicații",
      hours: { curs: 4, lab: 1, proiect: 0 },
      description: "Prelucrarea numerică și statistică a seturilor mari de date din transporturi. Automatizarea calculului matricelor de deplasare O/D, scripturi Python și C pentru prelucrarea fluxurilor orare culese din teren.",
      software: ["Python", "C/C++", "MATLAB", "GIS QGIS"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID",
      materials: {
        courses: [
          { title: "Curs 1: Structuri de date și algoritmi aplicați în ingineria transporturilor", size: "2.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" },
          { title: "Curs 2: Prelucrarea fișierelor de recensământ și interpolare numerică", size: "2.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" },
          { title: "Curs 3: Sisteme informatice geografice (GIS) pentru rețele rutiere", size: "3.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" }
        ],
        labs: [
          { title: "Set probleme programare în C & Python pentru date de trafic", size: "1.8 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" },
          { title: "Arhivă scripturi suport și fișiere de test (CSV/JSON)", size: "3.5 MB", type: "ZIP", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" }
        ],
        projects: [
          { title: "Proiect aplicație software pentru calculul automat al nivelului de serviciu", size: "1.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" }
        ],
        exam: [
          { title: "Ghid evaluare proiect informatic și colocviu", size: "0.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_INFOTR_ID" }
        ]
      }
    },
    {
      id: "logurb",
      code: "OSTR-101",
      title: "Logistică Urbană",
      level: "masterat",
      degree: "Optimizarea Sistemelor de Transport Rutier (OSTR)",
      year: "Master Anul I, Semestrul I & II",
      role: "Titular Curs & Aplicații",
      hours: { curs: 2, lab: 1, proiect: 1 },
      description: "Managementul avansat al logisticii mărfurilor în aglomerările urbane: restricții de tonaj pe axele centrale, ferestre orare de aprovizionare nocturnă, optimizarea terminalelor Park & Ride și platforme de credite de mobilitate (MCP).",
      software: ["Aimsun Next", "GIS Logistics Tools"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID",
      materials: {
        courses: [
          { title: "Curs 1: Concepte de City Logistics și sustenabilitatea lanțului de distribuție", size: "2.8 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" },
          { title: "Curs 2: Impactul marilor complexe comerciale asupra rețelei rutiere arteriale", size: "3.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" },
          { title: "Curs 3: Politici de restricționare a traficului greu și variante ocolitoare", size: "2.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" },
          { title: "Curs 4: Arhitectura Platformei de Credite de Mobilitate (MCP / Tradable Mobility Credits)", size: "4.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" },
          { title: "Tratat: Logistică Urbană - Note de curs (Editura Universitaria, 200 pag.)", size: "16.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" }
        ],
        labs: [
          { title: "Îndrumar de Laborator - Logistică Urbană (72 pagini)", size: "9.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" },
          { title: "Aplicație: Evaluarea microscopică a eliminării traficului greu de pe Strada Artileriei (Slatina)", size: "3.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" }
        ],
        projects: [
          { title: "Ghid de disertație: Proiectarea unui micro-hub logistic urban cu distribuție ecologică", size: "1.9 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" }
        ],
        exam: [
          { title: "Structura colocviului și teme de dezbatere științifică", size: "0.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_LOGURB_ID" }
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
      role: "Titular Curs & Aplicații",
      hours: { curs: 2, lab: 1, proiect: 0 },
      description: "Niveluri de autonomie conform standardului SAE (SAE Level 0-5), tehnologii senzoriale integrate (LiDAR, Radar, Camere stereoscopice, Ultrasunete), algoritmi de percepție, planificare a traiectoriei și interacțiunea cu infrastructura inteligentă V2I.",
      software: ["ROS / Python", "MATLAB Automated Driving Toolbox", "SolidWorks"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID",
      materials: {
        courses: [
          { title: "Curs 1: Taxonomia SAE și evoluția sistemelor avansate de asistență (ADAS)", size: "3.8 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" },
          { title: "Curs 2: Fuziunea senzorială: LiDAR, camere, radar milimetric și GNSS/RTK", size: "4.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" },
          { title: "Curs 3: Algoritmi de localizare și mapare simultană (SLAM)", size: "3.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" },
          { title: "Curs 4: Luarea deciziilor în timp real și interacțiunea în noduri urbane complexe", size: "3.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" },
          { title: "Manual Curs: Autonomous Vehicles (150 pagini)", size: "15.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" }
        ],
        labs: [
          { title: "Laborator 1: Simularea detectării pietonilor și a obstacolelor în mediu virtual", size: "2.9 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" },
          { title: "Laborator 2: Algoritmi de urmărire automată a benzii și frânare de urgență (AEB)", size: "3.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" }
        ],
        projects: [
          { title: "Teme de cercetare disertație: Comportamentul vehiculelor autonome în flux mixt de trafic", size: "1.7 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" }
        ],
        exam: [
          { title: "Cerințe colocviu și evaluare referate științifice", size: "0.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_AUTOAV_ID" }
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
      role: "Titular Curs & Aplicații",
      hours: { curs: 1, lab: 2, proiect: 0 },
      description: "Metodologii avansate de fabricație aditivă (FDM, SLA, SLS, Tehnologii Markforged, Formlabs, 3D Systems), scanare 3D industrială, Reverse Engineering, optimizare topologică și proiectare parametrică în SolidWorks CAD/FEA.",
      software: ["SolidWorks CAD/FEA", "Eiger Markforged", "PreForm Formlabs", "3D Sprint"],
      driveFolder: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID",
      materials: {
        courses: [
          { title: "Curs 1: Tehnologii de fabricație aditivă industrială și clasificarea materialelor", size: "4.5 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" },
          { title: "Curs 2: Scanarea 3D și ingineria inversă aplicată pe componente mecanice auto", size: "3.9 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" },
          { title: "Curs 3: Optimizare topologică și analiză structurală FEA pentru piese printate 3D", size: "3.4 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" },
          { title: "Tratat Curs: Design și Optimizare în Prototiparea Rapidă (150 pagini)", size: "17.2 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" }
        ],
        labs: [
          { title: "Ghid practic: De la scanare 3D la printarea piesei din polimeri compoziți", size: "4.0 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" },
          { title: "Aplicație: Reconstrucția 3D și printarea unui braț biomecanic protetic", size: "3.8 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" }
        ],
        projects: [
          { title: "Proiect semestrial: Proiectarea și printarea 3D a unui subansamblu funcțional auto", size: "2.1 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" }
        ],
        exam: [
          { title: "Criterii evaluare prototip fizic și susținere dosar de fabricație", size: "0.6 MB", type: "PDF", link: "https://drive.google.com/drive/folders/DRIVE_FOLDER_PROTOTIP_ID" }
        ]
      }
    }
  ],

  // Carti si tratate publicate
  books: [
    {
      id: "b1",
      title: "Ingineria traficului rutier: evaluarea performanței și organizarea circulației în rețele de intersecții",
      authors: "Lucian Matei, Dumitru Ilie, Laurențiu Racilă",
      year: 2026,
      publisher: "Editura Universitaria",
      pages: 420,
      isbn: "978-606-14-2291-3",
      type: "Tratat / Monografie",
      link: "https://drive.google.com/file/d/DRIVE_BOOK_INGTRAFIC/view"
    },
    {
      id: "b2",
      title: "Achievements and Solutions in Mechanical Engineering III - The 7th International Conference in Mechanical Engineering (ICOME)",
      authors: "Prof. Ilie Dumitru, Prof. Laurenţiu Daniel Racilă, Prof. Lucian Matei (Editors)",
      year: 2026,
      publisher: "Trans Tech Publications Ltd, Switzerland",
      pages: 194,
      doi: "10.4028/v-7NySTl",
      type: "Volum Editor Internațional",
      link: "https://doi.org/10.4028/v-7NySTl"
    },
    {
      id: "b3",
      title: "Autovehicule Electrice și Hibride",
      authors: "Laurențiu Racilă, Ilie Dumitru, Lucian Matei",
      year: 2025,
      publisher: "Editura Universitaria",
      pages: 166,
      isbn: "978-606-14-2238-8",
      type: "Carte de specialitate",
      link: "https://drive.google.com/file/d/DRIVE_BOOK_AEH/view"
    },
    {
      id: "b4",
      title: "Elemente de teoria elasticității: modelare și simulare",
      authors: "Laurențiu Racilă, Ilie Dumitru, Lucian Matei",
      year: 2024,
      publisher: "Editura Universitaria",
      pages: 86,
      isbn: "978-606-14-2034-6",
      type: "Carte de specialitate",
      link: "https://drive.google.com/file/d/DRIVE_BOOK_ELAST/view"
    },
    {
      id: "b5",
      title: "Proceedings of the International Conference on Mechanical Engineering (ICOME 2022)",
      authors: "Ilie Dumitru, Lucian Matei, Laurențiu Daniel Racilă, Adrian Sorin Roșca (Editors)",
      year: 2023,
      publisher: "Atlantis Press",
      pages: 638,
      isbn: "9464631511",
      type: "Volum Editor Internațional",
      link: "https://www.atlantis-press.com"
    },
    {
      id: "b6",
      title: "Proiectarea și Modelarea Fluxurilor de Circulație",
      authors: "Lucian Matei, Laurențiu Racilă",
      year: 2020,
      publisher: "Editura Universitaria",
      pages: 204,
      isbn: "978-606-14-1625-7",
      type: "Manual universitar",
      link: "https://drive.google.com/file/d/DRIVE_BOOK_PMFC/view"
    },
    {
      id: "b7",
      title: "Algoritmi de optimizare a circulației la nivel de intersecții rutiere",
      authors: "Lucian Matei",
      year: 2020,
      publisher: "Editura Universitaria",
      pages: 201,
      isbn: "978-606-14-1590-2",
      type: "Monografie de cercetare",
      link: "https://drive.google.com/file/d/DRIVE_BOOK_ALGORITMI/view"
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
