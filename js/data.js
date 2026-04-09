// ╔═══════════════════════════════════════════════════════════════════╗
// ║  DATA.JS — SOURCE UNIQUE DE TOUTES LES DONNÉES DU PORTFOLIO      ║
// ║  ✏️  Modifiez uniquement ce fichier — tout le site se met à jour  ║
// ╚═══════════════════════════════════════════════════════════════════╝

const PROFIL = {
  prenom:     'Antoine',
  nom:        'Dedieu',
  titre:      'PhD Candidate · AI, Data Science and Data engineering',
  institution:'Univeristy of West London - Université de Paris (ex Paris Descartes)',
  bio_courte: 'Health Data Scientist passionate about bioinformatics, AI and data science. Interdisciplinary background bridging computational biology, machine learning and health sciences.',
  bio_longue: `PhD candidate in Health Data Science at Université Paris Cité, working at the intersection of artificial intelligence, bioinformatics and public health.

My interdisciplinary background spans computational biology, machine learning, NLP and biostatistics — giving me a distinct perspective on complex health data problems.

Graduate Teaching Assistant across 9 modules including Computer Architecture, Algorithms, Databases and Cyber Threat Analysis. Committed team player with strong communication and synthesis abilities.`,
  contact: {
    email:    'dedieu.anto@gmail.com',
    linkedin: 'https://www.linkedin.com/in/antoine-dedieu-09aa39198/',
    github:   '',
    twitter:  '',
    scholar:  '',
    cv:       '',
  },
  infos: [
    { label: '📍 Location',   value: 'London — open to relocate' },
    { label: '🌐 Languages',  value: '🇬🇧 English · 🇫🇷 French' },
    { label: '💼 Open to',    value: 'Full-time · Part-time' },
    { label: '🎯 Hobbies',    value: 'Artistic Gymnastics · Handball · Tennis · Music' },
  ],
  avatar_emoji: '🧬',
  avatar_photo: 'https://media.licdn.com/dms/image/v2/D4E03AQGVV2bM5pEcTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688463637238?e=1777507200&v=beta&t=dtPVzg1rcIqMZt61CgCWsukAE5NlENFzS4-VxRF16Rs',
};

const FORMATIONS = [
  {
    id:'f1', emoji:'🎓', roman:'I', name:'PhD · Computer Science - Neuroscience & AI',
    type:'Arcana of Education', subtitle:'University of West London · 2023 – Present',
    gradient:'linear-gradient(160deg,#1a0a2e,#450af5)',
    rune:'ᚠ', runeName:'Fehu', runeKeyword:'Supreme Knowledge',
    prophecy:'At the frontier of artificial intelligence and health sciences, weaving together machine learning, bioinformatics and clinical data to illuminate what was once invisible.',
    details:{ Institution:'University of West London', Period:'2023 – Present', Status:'In progress', Field:'Computational Neuroscience & AI' },
    tags:['AI','Computational neuroscience','Data Analysis','Machine Learning','Research','Python','Deep learning','Data Visualisation']
  },
  {
    id:'f2', emoji:'🧬', roman:'II', name:'Master 2 · Massive Data for Health Science',
    type:'Arcana of Education', subtitle:'Université Paris Cité · 2022 – 2023',
    gradient:'linear-gradient(160deg,#0d0d1a,#1e3264)',
    rune:'ᚢ', runeName:'Uruz', runeKeyword:'Strength & Rigour',
    prophecy:'Advanced techniques for analysing structured and textual health data — machine learning, deep learning, transformers, survival analysis and spatial methods converging into a singular mastery.',
    details:{ Institution:'Université Paris Cité', Period:'2022 – 2023', Grade:'Completed', Field:'Health Data Science' },
    tags:['Machine Learning','Deep Learning','NLP','Survival Analysis','Biostatistics','GIS']
  },
  {
    id:'f3', emoji:'🏥', roman:'III', name:'Master 1 · Public Health — Massive Data',
    type:'Arcana of Education', subtitle:'Université Paris Cité · 2021 – 2022',
    gradient:'linear-gradient(160deg,#0a1a0a,#216a4c)',
    rune:'ᚦ', runeName:'Thurisaz', runeKeyword:'Awakening & Foundations',
    prophecy:'The crossroads of epidemiology, AI in health science and environmental risk assessment — where the foundations of a health data scientist were laid stone by stone.',
    details:{ Institution:'Université Paris Cité', Period:'2021 – 2022', Field:'Public Health / Massive Data', Internship:'HEGP Data Warehouse (Dr Rance Bastien)' },
    tags:['Epidemiology','AI in Health','Biostatistics','Data Warehouse','R']
  },
  {
    id:'f4', emoji:'🦠', roman:'IV', name:'Bachelor · Bioinformatics',
    type:'Arcana of Education', subtitle:'Université Paris Cité · 2020 – 2021',
    gradient:'linear-gradient(160deg,#0a1a0e,#16a34a)',
    rune:'ᚨ', runeName:'Ansuz', runeKeyword:'Discovery & Life',
    prophecy:'Where code met biology — agent-based modelling of HIV epidemic dynamics, the first glimpse of a world where algorithms illuminate life itself.',
    details:{ Institution:'Université Paris Cité', Period:'2020 – 2021', Project:'HIV epidemic dynamics (agent-based modelling)', Field:'Computational Biology' },
    tags:['Bioinformatics','Computational Biology','Agent-Based Modelling','Python','HIV Research']
  },
  {
    id:'f5', emoji:'💻', roman:'V', name:'University Degree · Computer Science (IUT)',
    type:'Arcana of Education', subtitle:'Université Paris Cité · 2018 – 2020',
    gradient:'linear-gradient(160deg,#1a0f00,#b45309)',
    rune:'ᚱ', runeName:'Raidho', runeKeyword:'Journey & Structure',
    prophecy:'The technical bedrock — databases, algorithms, systems programming — the infrastructure upon which all future knowledge would be built.',
    details:{ Institution:'Université Paris Cité', Period:'2018 – 2020', Field:'Computer Science', Degree:'DUT Informatique' },
    tags:['Algorithms','Databases','SQL','Java','C++','Systems']
  },
];


const COMPETENCES = [

  // ── CORE AI / MACHINE LEARNING ──────────────────
  {
    id:'c1', emoji:'🧠',
    roman:'I', name:'Machine Learning',
    type:'Arcana of Skill', subtitle:'Classification · Clustering · Prediction',
    gradient:'linear-gradient(160deg,#1a0a0a,#c0392b)',
    constellation:'core_ai',
    tags:['Supervised Learning','Unsupervised Learning','Scikit-learn','Model Evaluation','Cross-validation']
  },
  {
    id:'c2', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
    roman:'II', name:'Deep Learning',
    type:'Arcana of Skill', subtitle:'Neural architectures & representations',
    gradient:'linear-gradient(160deg,#1a0a0a,#ee4b28)',
    constellation:'core_ai',
    tags:['Neural Networks','CNN','RNN','Transformers','PyTorch','TensorFlow']
  },
  {
    id:'c4', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    roman:'III', name:'Probabilistic Modeling & Bayesian Methods',
    type:'Arcana of Skill', subtitle:'Inference under uncertainty',
    gradient:'linear-gradient(160deg,#0a0a1a,#6d28d9)',
    constellation:'core_ai',
    tags:['Bayesian Inference','Probabilistic Models','MCMC','Uncertainty Quantification']
  },
  {
    id:'c5', emoji:'🕹️',
    roman:'IV', name:'Reinforcement Learning',
    type:'Arcana of Skill', subtitle:'Learning through interaction',
    gradient:'linear-gradient(160deg,#1a0f00,#b45309)',
    constellation:'core_ai',
    tags:['Policy Gradient','Q-Learning','OpenAI Gym','Stable-Baselines3']
  },

  // c3 moved back to core_ai (tail of kite)
  {
    id:'c3', emoji:'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    roman:'V', name:'Transfer Learning & Fine-tuning',
    type:'Arcana of Skill', subtitle:'Adapting pre-trained models',
    gradient:'linear-gradient(160deg,#0a0a1a,#5851db)',
    constellation:'core_ai',
    tags:['Fine-tuning','PEFT','LoRA','HuggingFace','Pre-trained Models','Adapters']
  },

  // ── SPECIALIZED AI ───────────────────────────────
  {
    id:'c6', emoji:'💬',
    roman:'VI', name:'Natural Language Processing',
    type:'Arcana of Skill', subtitle:'From tokens to meaning',
    gradient:'linear-gradient(160deg,#0a0a1a,#4f46e5)',
    constellation:'specialized_ai',
    tags:['BERT','GPT','spaCy','Medical NLP','Entity Recognition','HuggingFace']
  },
  {
    id:'c7', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    roman:'VII', name:'Computer Vision',
    type:'Arcana of Skill', subtitle:'Seeing & understanding images',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    constellation:'specialized_ai',
    tags:['Classification','Detection','Segmentation','OpenCV','YOLO']
  },
  {
    id:'c8', emoji:'📈',
    roman:'VIII', name:'Time Series',
    type:'Arcana of Skill', subtitle:'Temporal forecasting & sequential models',
    gradient:'linear-gradient(160deg,#1a0a1a,#b02897)',
    constellation:'specialized_ai',
    tags:['Forecasting','ARIMA','LSTM Time Series','Sequential Models','Temporal Data']
  },
  {
    id:'c27', emoji:'⏱️',
    roman:'IX', name:'Survival Analysis',
    type:'Arcana of Skill', subtitle:'Event-time modelling & censored data',
    gradient:'linear-gradient(160deg,#1a0a1a,#9d174d)',
    constellation:'specialized_ai',
    tags:['Cox Model','Kaplan-Meier','Censored Data','Time-to-Event','lifelines']
  },
  {
    id:'c24', emoji:'⚡',
    roman:'IX', name:'Spiking Neural Networks',
    type:'Arcana of Skill', subtitle:'Brian2 · Neural dynamics simulation',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    constellation:'specialized_ai',
    tags:['Brian2','Computational Neuroscience','Neural Dynamics','Biologically Plausible AI']
  },

  // ── MATHEMATICS & THEORY ─────────────────────────
  {
    id:'c9', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    roman:'X', name:'Mathematics for AI',
    type:'Arcana of Skill', subtitle:'The language of intelligence',
    gradient:'linear-gradient(160deg,#0a0a1a,#1e3a8a)',
    constellation:'maths',
    tags:['Linear Algebra','Probability Theory','Statistics','Information Theory','Numerical Methods']
  },
  {
    id:'c10', emoji:'📊',
    roman:'XI', name:'Statistics & Statistical Inference',
    type:'Arcana of Skill', subtitle:'Estimation, testing & inference',
    gradient:'linear-gradient(160deg,#0a1218,#155e75)',
    constellation:'maths',
    tags:['Hypothesis Testing','GLM','Bayesian Statistics','Biostatistics','Epidemiology']
  },

  // ── PROGRAMMING ──────────────────────────────────
  {
    id:'c11', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    roman:'XII', name:'Python',
    type:'Arcana of Skill', subtitle:'Primary AI & data language',
    gradient:'linear-gradient(160deg,#1a0e0a,#c0392b)',
    constellation:'programming',
    tags:['NumPy','Pandas','SciPy','Scikit-learn','Jupyter','FastAPI']
  },
  {
    id:'c12', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    roman:'XIII', name:'R',
    type:'Arcana of Skill', subtitle:'Statistical computing & visualisation',
    gradient:'linear-gradient(160deg,#0a0a1a,#2779bd)',
    constellation:'programming',
    tags:['Shiny','ggplot2','tidyverse','Survival','Biostatistics','R Package Dev']
  },
  {
    id:'c13', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    roman:'XIV', name:'C++',
    type:'Arcana of Skill', subtitle:'Systems programming & performance computing',
    gradient:'linear-gradient(160deg,#1a0f00,#92400e)',
    constellation:'programming',
    tags:['C++','STL','OOP','Memory Management','Performance','Systems Programming']
  },
  {
    id:'c28', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    roman:'XV', name:'Java',
    type:'Arcana of Skill', subtitle:'Object-oriented application development',
    gradient:'linear-gradient(160deg,#1a0a00,#b45309)',
    constellation:'programming',
    tags:['Java','OOP','Spring','Design Patterns','JVM','Software Architecture']
  },
  // ── ML FRAMEWORKS & TOOLS ────────────────────────
  {
    id:'c15', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    roman:'XVI', name:'PyTorch',
    type:'Arcana of Skill', subtitle:'Dynamic computation graphs & research',
    gradient:'linear-gradient(160deg,#1a0a0a,#ee4b28)',
    constellation:'frameworks',
    tags:['PyTorch','Lightning','TorchScript','ONNX','Custom Layers','Autograd']
  },
  {
    id:'c16', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    roman:'XVII', name:'Scikit-learn & ML Tooling',
    type:'Arcana of Skill', subtitle:'Classical ML & model pipeline tooling',
    gradient:'linear-gradient(160deg,#0a0a1a,#0369a1)',
    constellation:'frameworks',
    tags:['Scikit-learn','XGBoost','LightGBM','Optuna','Pipelines','Feature Engineering']
  },
  {
    id:'c25', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    roman:'XVIII', name:'TensorFlow / Keras',
    type:'Arcana of Skill', subtitle:'Production-grade deep learning',
    gradient:'linear-gradient(160deg,#1a0808,#ff6d00)',
    constellation:'frameworks',
    tags:['TensorFlow','Keras','TFLite','TF Serving','SavedModel','tf.data']
  },
  {
    id:'c26', emoji:'📊',
    roman:'XIX', name:'MLflow & Experiment Tracking',
    type:'Arcana of Skill', subtitle:'Reproducible ML · lifecycle management',
    gradient:'linear-gradient(160deg,#0a0e1a,#0284c7)',
    constellation:'frameworks',
    tags:['MLflow','Weights & Biases','Optuna','Experiment Tracking','Model Registry','Reproducibility']
  },

  // ── DATA ENGINEERING ─────────────────────────────
  {
    id:'c17', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    roman:'XX', name:'Data Engineering',
    type:'Arcana of Skill', subtitle:'Pipelines from raw data to insight',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    constellation:'data_eng',
    tags:['SQL','ETL/ELT','Data Pipelines','Data Warehousing','Spark','Feature Engineering']
  },
  {
    id:'c18', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    roman:'XXI', name:'Data Science & Analytics',
    type:'Arcana of Skill', subtitle:'Exploration, analysis & storytelling',
    gradient:'linear-gradient(160deg,#0a0a1a,#6d28d9)',
    constellation:'data_eng',
    tags:['EDA','Data Visualisation','Matplotlib','Seaborn','Plotly','Shiny','Experiment Design']
  },
  {
    id:'c19', emoji:'https://cdn.simpleicons.org/qgis',
    roman:'XXII', name:'Spatial Analysis & GIS',
    type:'Arcana of Skill', subtitle:'Maps, patterns & spatial models',
    gradient:'linear-gradient(160deg,#0a1a0e,#16a34a)',
    constellation:'data_eng',
    tags:['GIS','Cartography','Spatial Stats','Bayesian Spatial','R Spatial']
  },
  {
    id:'c14', emoji:'https://seaborn.pydata.org/_static/logo-mark-lightbg.svg',
    roman:'XXIII', name:'Data Visualisation',
    type:'Arcana of Skill', subtitle:'Turning data into insight & story',
    gradient:'linear-gradient(160deg,#0a1a0a,#0369a1)',
    constellation:'data_eng',
    tags:['Seaborn','Matplotlib','Plotly','ggplot2','Tableau','Interactive Dashboards']
  },

  // ── BIOINFORMATICS ───────────────────────────────
  {
    id:'c20', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg',
    roman:'XXIII', name:'Bioinformatics',
    type:'Arcana of Skill', subtitle:'OMICS · sequencing · analysis pipelines',
    gradient:'linear-gradient(160deg,#0a1a10,#15803d)',
    constellation:'bio',
    tags:['OMICS','Biopython','Sequence Analysis','Genomics','Genetics','NGS']
  },
  {
    id:'c29', emoji:'🧬',
    roman:'XXIV', name:'Computational Biology',
    type:'Arcana of Skill', subtitle:'Molecular simulation & structural analysis',
    gradient:'linear-gradient(160deg,#0a1a10,#16a34a)',
    constellation:'bio',
    tags:['PyMol','Agent-Based Modelling','Molecular Biology','Structural Biology','Computational Neuroscience']
  },
  {
    id:'c21', emoji:'🏥',
    roman:'XXV', name:'Epidemiology',
    type:'Arcana of Skill', subtitle:'Disease dynamics & population risk',
    gradient:'linear-gradient(160deg,#0a1808,#166534)',
    constellation:'bio',
    tags:['Epidemiology','Public Health','Environmental Risk','Disease Modelling','Agent-Based Modelling']
  },
  {
    id:'c30', emoji:'⚕️',
    roman:'XXVI', name:'Biostatistics',
    type:'Arcana of Skill', subtitle:'Clinical data · statistical inference',
    gradient:'linear-gradient(160deg,#0a1808,#14532d)',
    constellation:'bio',
    tags:['Biostatistics','GLM','Mixed Models','Clinical Trials','Health Data','Survival Models']
  },

  // ── RESEARCH & SOFT SKILLS ───────────────────────
  {
    id:'c22', emoji:'https://cdn.simpleicons.org/overleaf',
    roman:'XXV', name:'Research Skills',
    type:'Arcana of Skill', subtitle:'Rigorous inquiry & scientific writing',
    gradient:'linear-gradient(160deg,#1a1a0a,#856a00)',
    constellation:'research',
    tags:['Literature Review','Reproducible Research','Academic Writing','Experimental Design']
  },
  {
    id:'c23', emoji:'📚',
    roman:'XXVI', name:'Teaching & Communication',
    type:'Arcana of Skill', subtitle:'From lecture halls to research',
    gradient:'linear-gradient(160deg,#0a1a0f,#216a4c)',
    constellation:'research',
    tags:['Teaching','Lecturing','Technical Communication','Leadership','Mentoring','Domain: Health']
  },
];

const EXPERIENCES = [
  {
    id:'e1', emoji:'🎓', roman:'XIV', name:'Graduate Teaching Assistant',
    type:'Arcana of Experience', subtitle:'Université Paris Cité · 2023 – Present',
    gradient:'linear-gradient(160deg,#0a1a0f,#216a4c)',
    prophecy:'Transmitting knowledge across nine modules — from the foundations of computer architecture to the frontiers of cyber security and mobile development. Each student enlightened is a victory for science.',
    details:{ Organisation:'Université Paris Cité', Period:'2023 – Present', Type:'Teaching', Modules:'Computer Architecture, Programming (Java/Python), Algorithms, Databases, Cyber Threat Analysis, Mobile Dev, Functional Programming, CS Systems, PL Paradigms' },
    tags:['Teaching','Computer Architecture','Algorithms','Databases','Java','Python','Cyber Security','Mobile Dev']
  },
  {
    id:'e2', emoji:'🏥', roman:'XV', name:'Health Data Scientist Intern — HEGP',
    type:'Arcana of Experience', subtitle:'Hôpital Européen Georges Pompidou · Mar–Jul 2022',
    gradient:'linear-gradient(160deg,#0a0a1a,#450af5)',
    prophecy:'Inside one of Paris\'s great hospitals — building an R package for data quality analysis, studying biological data warehouses, and optimising NLP programs from CPU to GPU.',
    details:{ Organisation:'HEGP / HeKa Team / CARPEM', Period:'Mar – Jul 2022', Duration:'5 months', Supervisor:'Dr Bastien Rance' },
    tags:['R Package','Data Quality','NLP','GPU Optimisation','Data Warehouse','Health Data']
  },
  {
    id:'e3', emoji:'🔬', roman:'XVI', name:'Data Scientist Intern — ADLin Sciences',
    type:'Arcana of Experience', subtitle:'ADLin Sciences · Feb–Jul 2023',
    gradient:'linear-gradient(160deg,#1a1a0a,#856a00)',
    prophecy:'Building data management packages in R and Python — the craft of making clinical data usable, reliable and reproducible inside a scientific application.',
    details:{ Organisation:'ADLin Sciences', Period:'Feb – Jul 2023', Duration:'6 months', Type:'Data Science Internship' },
    tags:['R','Python','Package Development','Data Management','Clinical Data']
  },
  {
    id:'e4', emoji:'🌐', roman:'XVII', name:'IT Developer Intern — GeoRetailer',
    type:'Arcana of Experience', subtitle:'Green Village · Apr–Jun 2020',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    prophecy:'Full-stack data engineering — database architecture, web scraping, R and Python analytics, interactive maps, server creation and automated cron tasks.',
    details:{ Organisation:'Green Village', Period:'Apr – Jun 2020', Duration:'3 months', URL:'greenvillage.io' },
    tags:['Database Architecture','Web Scraping','R','Python','Dashboard','Interactive Map','Server']
  },
];

const PROJETS = [
  {
    id:'p1', emoji:'🦠', roman:'XVIII', name:'HIV Epidemic Modelling',
    type:'Arcana of Project', subtitle:'Agent-based simulation · Computational Biology',
    gradient:'linear-gradient(160deg,#0a1a10,#15803d)',
    potionColor:'#15803d',
    ingredients2:['c1','c12'], ingredients3:['c1','c12','c8'],
    prophecy:'A computational model tracking the competitive dynamics of distinct HIV viral strains across sexually transmitted epidemics — where biology meets algorithm.',
    details:{ Type:'Academic project', Stack:'Python / Agent-based modelling', Field:'Computational Biology', Period:'2020 – 2021' },
    tags:['Python','Agent-Based','HIV','Epidemiology','Computational Biology']
  },
  {
    id:'p2', emoji:'🏥', roman:'XIX', name:'Medical Entity Recognition',
    type:'Arcana of Project', subtitle:'Clinical NLP · HuggingFace',
    gradient:'linear-gradient(160deg,#0a0a1a,#5851db)',
    potionColor:'#a855f7',
    ingredients2:['c1','c9'], ingredients3:['c1','c9','c8'],
    prophecy:'Teaching machines to read medical language — extraction and identification of specific medical terms and concepts from clinical texts.',
    details:{ Type:'Academic project', Stack:'Python / HuggingFace / spaCy', Field:'Clinical NLP', Period:'2022 – 2023' },
    tags:['NLP','HuggingFace','BERT','Medical','Entity Recognition','Python']
  },
  {
    id:'p3', emoji:'🎵', roman:'XX', name:'Spotify Music Analysis — R Shiny',
    type:'Arcana of Project', subtitle:'Data visualisation · Shiny App',
    gradient:'linear-gradient(160deg,#0a1a0e,#1db954)',
    potionColor:'#1db954',
    ingredients2:['c2','c6'], ingredients3:['c2','c6','c5'],
    prophecy:'An R Shiny application dissecting the anatomy of music through the Spotify API — data analysis, visualisation and interactive exploration of audio features.',
    details:{ Type:'Academic project', Stack:'R / Shiny / Spotify API', Field:'Data Visualisation', GitHub:'Available on GitHub' },
    tags:['R','Shiny','Spotify API','Data Visualisation','Dashboard']
  },
  {
    id:'p4', emoji:'🧪', roman:'XXI', name:'Melanoma Survival Analysis',
    type:'Arcana of Project', subtitle:'Advanced survival methods · Clinical Research',
    gradient:'linear-gradient(160deg,#1a0a1a,#b02897)',
    potionColor:'#b02897',
    ingredients2:['c2','c10'], ingredients3:['c2','c10','c8'],
    prophecy:'Recurrent events, competitive risks, causal inference in survival — advanced statistical methods applied to melanoma clinical data.',
    details:{ Type:'Academic project', Stack:'R / Survival packages', Field:'Biostatistics / Oncology', GitHub:'Available on GitHub' },
    tags:['R','Survival Analysis','Melanoma','Causal Inference','Biostatistics']
  },
  {
    id:'p5', emoji:'🩺', roman:'XXII', name:'Breast Tumour Biopsy Analysis',
    type:'Arcana of Project', subtitle:'Clustering & classification · Oncology',
    gradient:'linear-gradient(160deg,#0a1a0e,#16a34a)',
    potionColor:'#16a34a',
    ingredients2:['c2','c8'], ingredients3:['c2','c8','c1'],
    prophecy:'Fine needle biopsies of breast tumours — descriptive analysis, unsupervised clustering and supervised classification to distinguish malignant from benign cases.',
    details:{ Type:'Academic project', Stack:'R / Python / Scikit-learn', Field:'Oncology / ML', Period:'2021 – 2022' },
    tags:['R','Python','Clustering','Classification','Oncology','Biostatistics']
  },
  {
    id:'p6', emoji:'🗄️', roman:'XXIII', name:'HEGP Data Warehouse R Package',
    type:'Arcana of Project', subtitle:'R package · Data quality · CARPEM',
    gradient:'linear-gradient(160deg,#0a0f1a,#0070f3)',
    potionColor:'#0070f3',
    ingredients2:['c2','c6'], ingredients3:['c2','c6','c5'],
    prophecy:'An R package built inside one of Europe\'s leading hospital research teams — automating data quality analysis of medical questionnaires and biological data.',
    details:{ Type:'Professional internship', Stack:'R / Data Warehouse / NLP / GPU', Organisation:'HEGP / HeKa / CARPEM', Supervisor:'Dr Bastien Rance' },
    tags:['R','Package Development','Data Quality','Health Data','NLP','GPU']
  },
];

const ALL_ARCANES = [...EXPERIENCES, ...FORMATIONS, ...COMPETENCES, ...PROJETS];
const ALL_CARDS   = ALL_ARCANES;

