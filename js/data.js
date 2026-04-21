// ╔═══════════════════════════════════════════════════════════════════╗
// ║  DATA.JS — SOURCE UNIQUE DE TOUTES LES DONNÉES DU PORTFOLIO      ║
// ║  ✏️  Modifiez uniquement ce fichier — tout le site se met à jour  ║
// ╚═══════════════════════════════════════════════════════════════════╝

const PROFIL = {
  prenom:     'Antoine',
  nom:        'Dedieu',
  titre:      'PhD Candidate · AI, Data Science and Data engineering',
  institution:'University of West London - Université de Paris (ex Paris Descartes)',

  bio_courte: 'PhD Candidate, Data Scientist and ML engineer passionate about building AI systems that are not only theoretically but practically impactful. My work sits at the intersection of machine learning research, data engineering/science, and real-world deployment.',


  

  bio_longue: `PhD candidate in Computer Science with a Master's in Health Data Science, specialising in end-to-
end ML systems and applied AI. 

I translate complex problems into scalable, deployable solutions, bridging the gap between research and production. Experienced across machine learning, deep learning and data engineering, with a background spanning healthcare and computational domains.

A collaborative communicator who combines analytical rigour with a practical, delivery-focused
mindset. Based in London, open to relocation.`,
  contact: {
    email:    'antoine.dedieu@outlook.fr',
    linkedin: 'https://www.linkedin.com/in/antoine-dedieu-09aa39198/',
    github:   '',
    twitter:  '',
    scholar:  '',
    cv:       'DEDIEU_ANTOINE_CV.pdf',
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
    id:'f1', emoji:'🎓', roman:'I', name:'PhD · Computer Science / AI',
    type:'Arcana of Education', subtitle:'University of West London · 2023 – Present',
    gradient:'linear-gradient(160deg,#1a0a2e,#450af5)',
    rune:'ᚠ', runeName:'Fehu', runeKeyword:'Supreme Knowledge',
    prophecy:'Exploring the intersection of neuroscience and artificial intelligence, developing advanced Spiking Neural Networks informed by cognitive functions emerging from the nervous system.',
    details:{ Institution:'University of West London', Period:'Sept 2023 – Present', Status:'In progress', Field:'Artifical Intelligence', Supervisor:'Prof. Konstantin Nikolic' },
    tags:['NeuroAI','Spiking Neural Networks','Computational Neuroscience','Deep Learning','Research','Python','Brian2']
  },
  {
    id:'f2', emoji:'🧬', roman:'II', name:'Master · Public Health: Massive Data for Health Science',
    type:'Arcana of Education', subtitle:'Université Paris Cité · 2021 – 2023',
    gradient:'linear-gradient(160deg,#0d0d1a,#1e3264)',
    rune:'ᚢ', runeName:'Uruz', runeKeyword:'Strength & Rigour',
    prophecy:'A two-year program training health data scientists. M1 covers epidemiology, AI in health sciences, and environmental risk assessment. M2 builds on these foundations with advanced methods: machine learning, deep learning, transformers, survival analysis, and spatial analysis.',
    details:{ Institution:'Université Paris Cité', Period:'Sept 2021 – Jul 2023',  Field:'Health Data Science / Public Health / Computer Science', Internship:'HEGP Data Warehouse (Dr Bastien Rance)' },
    tags:['Machine Learning','Deep Learning','NLP','Survival Analysis','Biostatistics','Epidemiology','AI in Health','GIS','Pharmaco-epidemiology','Data Warehouse','R','Environmental Risk']
  },
  {
    id:'f3', emoji:'🦠', roman:'III', name:'Bachelor · Bioinformatics',
    type:'Arcana of Education', subtitle:'Université Paris Cité · 2020 – 2021',
    gradient:'linear-gradient(160deg,#0a1a0e,#16a34a)',
    rune:'ᚨ', runeName:'Ansuz', runeKeyword:'Discovery & Life',
    prophecy:'Where code met biology: agent-based modelling of HIV epidemic dynamics, computational neuroscience with NEURON and MatLab, and molecular graphics with PyMol.',
    details:{ Institution:'Université Paris Cité', Period:'2020 – 2021', Project:'HIV epidemic dynamics (agent-based modelling)', Field:'Computational Biology / Bioinformatics' },
    tags:['Bioinformatics','Computational Biology','Agent-Based Modelling','Python','Computational Neuroscience','OMICS']
  },
  {
    id:'f4', emoji:'💻', roman:'IV', name:'DUT · Computer Science',
    type:'Arcana of Education', subtitle:'IUT de Paris Descartes · 2018 – 2020',
    gradient:'linear-gradient(160deg,#1a0f00,#b45309)',
    rune:'ᚱ', runeName:'Raidho', runeKeyword:'Journey & Structure',
    prophecy:'The technical bedrock: databases, algorithms, systems programming. The infrastructure upon which all future knowledge would be built.',
    details:{ Institution:'IUT de Paris Descartes', Period:'2018 – 2020', Field:'Computer Science', Degree:'DUT Informatique' },
    tags:['Algorithms','Databases','SQL','Java','Python','C','C++','Systems']
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
    tags:['Supervised Learning','Unsupervised Learning','Scikit-learn','Model Evaluation','Cross-validation','Random Forest','Anomaly Detection','Feature Engineering']
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
    tags:['Fine-tuning','DistilBERT','SegFormer','HuggingFace','Pre-trained Models','Adapters']
  },

  // ── SPECIALIZED AI ───────────────────────────────
  {
    id:'c6', emoji:'💬',
    roman:'VI', name:'Natural Language Processing',
    type:'Arcana of Skill', subtitle:'From tokens to meaning',
    gradient:'linear-gradient(160deg,#0a0a1a,#4f46e5)',
    constellation:'specialized_ai',
    tags:['BERT','DistilBERT','GPT','spaCy','Medical NLP','Entity Recognition','HuggingFace','Text Classification']
  },
  {
    id:'c7', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    roman:'VII', name:'Computer Vision',
    type:'Arcana of Skill', subtitle:'Seeing & understanding images',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    constellation:'specialized_ai',
    tags:['Classification','Detection','Segmentation','SegFormer','OpenCV','Colour Extraction','Fashion AI']
  },
  {
    id:'c8', emoji:'📈',
    roman:'VIII', name:'Time Series',
    type:'Arcana of Skill', subtitle:'Temporal forecasting & sequential models',
    gradient:'linear-gradient(160deg,#1a0a1a,#b02897)',
    constellation:'specialized_ai',
    tags:['Forecasting','ARIMA','SARIMA','Anomaly Detection','Isolation Forest','Stationarity Testing','Temporal Data']
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
    tags:['Hypothesis Testing','GLM','Bayesian Statistics','Biostatistics','A/B Testing','Causal Inference','KS Test']
  },

  // ── PROGRAMMING ──────────────────────────────────
  {
    id:'c11', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    roman:'XII', name:'Python',
    type:'Arcana of Skill', subtitle:'Primary AI & data language',
    gradient:'linear-gradient(160deg,#1a0e0a,#c0392b)',
    constellation:'programming',
    tags:['NumPy','Pandas','SciPy','Scikit-learn','Jupyter','FastAPI','Docker']
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
    roman:'XIV', name:'C / C++',
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
    tags:['PyTorch','PyTorch Geometric','Apple MPS','ONNX','Custom Layers','Autograd']
  },
  {
    id:'c16', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    roman:'XVII', name:'Scikit-learn & ML Tooling',
    type:'Arcana of Skill', subtitle:'Classical ML & model pipeline tooling',
    gradient:'linear-gradient(160deg,#0a0a1a,#0369a1)',
    constellation:'frameworks',
    tags:['Scikit-learn','XGBoost','SHAP','Optuna','Pipelines','Feature Engineering','Drift Detection']
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
    tags:['MLflow','Experiment Tracking','Model Registry','Reproducibility','Hyperparameter Tuning','Feature Versioning']
  },

  // ── DATA ENGINEERING ─────────────────────────────
  {
    id:'c17', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    roman:'XX', name:'Data Engineering',
    type:'Arcana of Skill', subtitle:'Pipelines from raw data to insight',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    constellation:'data_eng',
    tags:['SQL','ETL/ELT','Data Pipelines','Docker','CI/CD','pytest','Model Serving']
  },
  {
    id:'c18', emoji:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    roman:'XXI', name:'Data Science & Analytics',
    type:'Arcana of Skill', subtitle:'Exploration, analysis & storytelling',
    gradient:'linear-gradient(160deg,#0a0a1a,#6d28d9)',
    constellation:'data_eng',
    tags:['EDA','Data Storytelling','Matplotlib','Seaborn','Plotly','Shiny','Experiment Design','MNAR']
  },
  {
    id:'c19', emoji:'https://cdn.simpleicons.org/qgis',
    roman:'XXII', name:'Spatial Analysis & GIS',
    type:'Arcana of Skill', subtitle:'Maps, patterns & spatial models',
    gradient:'linear-gradient(160deg,#0a1a0e,#16a34a)',
    constellation:'data_eng',
    tags:['GIS','Cartography','geopandas','contextily','Spatial Stats','Bayesian Spatial']
  },
  {
    id:'c14', emoji:'https://seaborn.pydata.org/_static/logo-mark-lightbg.svg',
    roman:'XXIII', name:'Data Visualisation',
    type:'Arcana of Skill', subtitle:'Turning data into insight & story',
    gradient:'linear-gradient(160deg,#0a1a0a,#0369a1)',
    constellation:'data_eng',
    tags:['Seaborn','Matplotlib','Plotly','ggplot2','geopandas','contextily','Interactive Dashboards']
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
    id:'e1', emoji:'🔬', roman:'XIV', name:'PhD Researcher',
    type:'Arcana of Experience', subtitle:'University of West London · Oct 2023 – Present',
    gradient:'linear-gradient(160deg,#1a0a2e,#450af5)',
    prophecy:'Researching NeuroAI and developing advanced Spiking Neural Networks using insights into cognitive functions emerging from the nervous system. Under the supervision of Professor Konstantin Nikolic.',
    details:{ Organisation:'University of West London', Period:'Oct 2023 – Present', Field:'NeuroAI / Spiking Neural Networks', Supervisor:'Prof. Konstantin Nikolic' },
    tags:['NeuroAI','Spiking Neural Networks','Research','Python','Deep Learning','Computational Neuroscience','AI Architecture']
  },
  {
    id:'e1b', emoji:'🎓', roman:'XV', name:'Graduate Teaching Assistant',
    type:'Arcana of Experience', subtitle:'University of West London · Oct 2023 – Present',
    gradient:'linear-gradient(160deg,#0a1a0f,#216a4c)',
    prophecy:'Teaching across multiple Computer Science modules as part of the PhD programme, bridging theory and practice for undergraduate students across 9 modules including Computer Architecture, Algorithms and Databases, Programmation Java and Python.',
    details:{ Organisation:'University of West London', Period:'Oct 2023 – Present', Type:'Teaching' },
    tags:['Teaching','Computer Architecture','Algorithms','Databases','Java','Python']
  },
  {
    id:'e3', emoji:'🧬', roman:'XVI', name:'Data Scientist · Computational Biologist',
    type:'Arcana of Experience', subtitle:'ADLIN Science · Feb–Jul 2023',
    gradient:'linear-gradient(160deg,#1a1a0a,#856a00)',
    prophecy:'Building internal R and Python packages for multi-source data management, a Shiny data cleaning application, and comprehensive tutorials for R6 object-oriented programming.',
    details:{ Organisation:'ADLIN Science', Period:'Feb – Jul 2023', Duration:'6 months', Location:'Paris, France' },
    tags:['R','Python','Package Development','Shiny','Data Cleaning','OOP','Clinical Data','Data Analysis', 'Data Engineering']
  },
  {
    id:'e2', emoji:'🏥', roman:'XVII', name:'Health Data Scientist',
    type:'Arcana of Experience', subtitle:'Inserm · HEGP-APHP · CARPEM · Mar–Jul 2022',
    gradient:'linear-gradient(160deg,#0a0a1a,#450af5)',
    prophecy:'Data quality analysis of the HEGP clinical data warehouse (I2B2 format): questionnaire normalisation, biological data profiling, patient profiling, R package development, and NLP GPU performance benchmarking.',
    details:{ Organisation:'Inserm / HEGP-APHP / Institut CARPEM', Period:'Mar – Jul 2022', Duration:'5 months', Supervisor:'Dr Bastien Rance' },
    tags:['R Package','Data Quality','NLP','GPU Optimisation','Data Warehouse','Health Data','Patient Profiling']
  },
  {
    id:'e4', emoji:'🌐', roman:'XVIII', name:'Software Developper',
    type:'Arcana of Experience', subtitle:'Green Village · Apr–Jun 2020',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    prophecy:'Software developper and data engineering task: database architecture/creating, web scraping, Python analytics, interactive maps, server creation and automated cron tasks.',
    details:{ Organisation:'Green Village', Period:'Apr – Jun 2020', Duration:'3 months', URL:'greenvillage.io' },
    tags:['Database Architecture','Web Scraping','Database creation','Python','Dashboard','Interactive Map','Server']
  },
];

const PROJETS = [
  {
    id:'p12', emoji:'👗', roman:'XVIII', name:'Fashion-in-Data',
    type:'Arcana of Project', category:'Computer Vision', subtitle:'Web scraping · SegFormer segmentation · Colour extraction · Streamlit',
    gradient:'linear-gradient(160deg,#1a0a1a,#e11d48)',
    potionColor:'#e11d48',
    ingredients2:['c7','c3'], ingredients3:['c7','c3','c18'],
    prophecy:'A full CV pipeline that scrapes runway images, segments clothing with SegFormer-B2 (46 classes), extracts colour palettes in CIE Lab space via K-Means, and visualises collections in an interactive Streamlit app.',
    details:{ Type:'Portfolio project', Stack:'Python · HuggingFace · SegFormer · rembg · Selenium · Streamlit · scikit-learn', Field:'Computer Vision / Data Engineering', GitHub:'https://github.com/Antogone/Fashion-in-Data' },
    tags:['Computer Vision','Segmentation','SegFormer','Web Scraping','Streamlit','K-Means','Colour Science','HuggingFace']
  },
  {
    id:'p13', emoji:'📈', roman:'XIX', name:'Time Series Anomaly Dashboard',
    type:'Arcana of Project', category:'Time Series', subtitle:'Z-score · Isolation Forest · SARIMA · Consensus voting',
    gradient:'linear-gradient(160deg,#0a1218,#0e7490)',
    potionColor:'#0e7490',
    ingredients2:['c8','c1'], ingredients3:['c8','c1','c14'],
    prophecy:'Three anomaly detection methods applied to NYC taxi demand data, with consensus voting to reduce false positives. Every detector parameter derived from EDA findings, not trial and error.',
    details:{ Type:'Portfolio project', Stack:'Python · statsmodels · scikit-learn · Streamlit · Plotly', Field:'Time Series / Anomaly Detection', GitHub:'https://github.com/Antogone/Time_series_anomaly' },
    tags:['Time Series','Anomaly Detection','SARIMA','Isolation Forest','Streamlit','Consensus Voting','Z-score']
  },
  {
    id:'p14', emoji:'🚢', roman:'XX', name:'Titanic Survival Analysis',
    type:'Arcana of Project', category:'Data Science', subtitle:'Feature engineering · MLflow · Cross-validation',
    gradient:'linear-gradient(160deg,#0a0f1a,#1e40af)',
    potionColor:'#1e40af',
    ingredients2:['c1','c26'], ingredients3:['c1','c26','c18'],
    prophecy:'End-to-end Data Scientist workflow on the Titanic dataset: thorough EDA motivating every feature decision, title-based age imputation, MNAR cabin encoding, and three models compared via stratified cross-validation. Logistic Regression ties Random Forest, proving feature engineering matters more than model complexity.',
    details:{ Type:'Portfolio project', Stack:'Python · scikit-learn · MLflow · pandas · seaborn', Field:'Data Science / Classification', GitHub:'https://github.com/Antogone/Titanic_Survival_Analysis' },
    tags:['scikit-learn','MLflow','Feature Engineering','EDA','Cross-validation','Classification','MNAR','Python']
  },
  {
    id:'p15', emoji:'🕯️', roman:'XXI', name:'Salem Witch Trials: A Data Story',
    type:'Arcana of Project', category:'Data Storytelling', subtitle:'Historical EDA · Data storytelling · Geographic visualisation',
    gradient:'linear-gradient(160deg,#1a0a0a,#7f1d1d)',
    potionColor:'#991b1b',
    ingredients2:['c14','c18'], ingredients3:['c14','c18','c19'],
    prophecy:'A six-act data narrative exploring the 1692 Salem witch trials through quantitative analysis: timeline, geography, outcomes, social divisions, and wealth. No machine learning, just honest data storytelling with beautiful seaborn visualisations and a geopandas basemap.',
    details:{ Type:'Portfolio project', Stack:'Python · seaborn · matplotlib · geopandas · contextily', Field:'Data Storytelling / EDA', GitHub:'https://github.com/Antogone/Salem' },
    tags:['Data Storytelling','EDA','Seaborn','Geographic Visualisation','geopandas','Historical Data','Data Journalism']
  },
  {
    id:'p16', emoji:'📰', roman:'XXII', name:'NLP Text Classification',
    type:'Arcana of Project', category:'NLP', subtitle:'DistilBERT · AG News · Fine-tuning on Apple MPS',
    gradient:'linear-gradient(160deg,#0a0a1a,#7c3aed)',
    potionColor:'#8b5cf6',
    ingredients2:['c6','c3'], ingredients3:['c6','c3','c15'],
    prophecy:'Fine-tuning DistilBERT on AG News (4-class news classification) with 8,000 training samples, reaching 91% accuracy in 15 minutes on Apple MPS. The Business/Sci/Tech confusion boundary is the interesting finding: contextual models resolve vocabulary ambiguity that bag-of-words cannot.',
    details:{ Type:'Portfolio project', Stack:'Python · HuggingFace Transformers · PyTorch · datasets', Field:'NLP / Text Classification', GitHub:'https://github.com/Antogone/Nlp_Classification' },
    tags:['NLP','DistilBERT','HuggingFace','PyTorch','Fine-tuning','Text Classification','Transformers','Apple MPS']
  },
  {
    id:'p17', emoji:'🐳', roman:'XXIII', name:'MLOps Platform',
    type:'Arcana of Project', category:'ML Engineering', subtitle:'FastAPI · Docker · pytest · GitHub Actions · Drift detection',
    gradient:'linear-gradient(160deg,#0a1218,#155e75)',
    potionColor:'#0891b2',
    ingredients2:['c17','c11'], ingredients3:['c17','c11','c16'],
    prophecy:'A containerised ML serving platform: FastAPI with Pydantic validation, Prometheus metrics, KS-test drift detection, 5 pytest tests, Docker Compose deployment, and GitHub Actions CI. Clone, run docker compose up, and the API is live in two minutes.',
    details:{ Type:'Portfolio project', Stack:'Python · FastAPI · Docker · pytest · scipy · prometheus-client', Field:'ML Engineering / MLOps', GitHub:'https://github.com/Antogone/mlops-health' },
    tags:['Docker','MLOps','pytest','GitHub Actions','Drift Detection','CI/CD','Model Serving']
  },
  {
    id:'p7', emoji:'⚙️', roman:'XXIV', name:'Reproducible ML Pipeline',
    type:'Arcana of Project', category:'ML Engineering', subtitle:'MLOps · Experiment tracking · Feature versioning',
    gradient:'linear-gradient(160deg,#0f0a1a,#7c3aed)',
    potionColor:'#7c3aed',
    ingredients2:['c26','c16'], ingredients3:['c26','c16','c11'],
    prophecy:'A fully reproducible ML pipeline where every experiment is tracked, every feature version is committed, and the entire pipeline runs from a single command — engineering discipline applied to machine learning.',
    details:{ Type:'Portfolio project', Stack:'Python · scikit-learn · MLflow · pandas · joblib', Field:'ML Engineering / MLOps', GitHub:'https://github.com/Antogone/Reproducible_ML_Pipeline_with_Experiment_Tracking' },
    tags:['MLflow','scikit-learn','Python','Feature Engineering','MLOps','Experiment Tracking','Reproducibility','Pipeline']
  },
  {
    id:'p8', emoji:'🔍', roman:'XXV', name:'Interpretable Model Audit',
    type:'Arcana of Project', category:'Responsible AI', subtitle:'SHAP · Fairness · Responsible AI',
    gradient:'linear-gradient(160deg,#0a0f1a,#0d9488)',
    potionColor:'#0d9488',
    ingredients2:['c16','c14'], ingredients3:['c16','c14','c10'],
    prophecy:'A full model audit of an XGBoost credit scoring classifier — interrogating it for fairness, explainability, and deployment readiness. Two critical legal blockers surfaced and a concrete path to remediation defined.',
    details:{ Type:'Portfolio project', Stack:'Python · XGBoost · SHAP · fairlearn', Field:'Responsible AI / Explainability', GitHub:'https://github.com/Antogone/Interpretable_model_audit' },
    tags:['SHAP','XGBoost','fairlearn','Explainability','Responsible AI','Fairness','Model Audit','Python']
  },
  {
    id:'p9', emoji:'🧪', roman:'XXVI', name:'A/B Test Simulation',
    type:'Arcana of Project', category:'Experimentation', subtitle:'Experimental design · Bayesian inference · Sequential testing',
    gradient:'linear-gradient(160deg,#1a0f00,#b45309)',
    potionColor:'#d97706',
    ingredients2:['c10','c4'], ingredients3:['c10','c4','c18'],
    prophecy:'An end-to-end A/B experiment simulation demonstrating what most practitioners get wrong — the peeking problem exposed empirically, sequential testing implemented correctly, and Bayesian posterior analysis confirming a 28% conversion lift with 100% posterior certainty.',
    details:{ Type:'Portfolio project', Stack:'Python · scipy · PyMC · statsmodels · numpy', Field:'Data Science / Experimentation', GitHub:'https://github.com/Antogone/End_to_end_AB_test_simulation' },
    tags:['A/B Testing','Bayesian Inference','PyMC','scipy','Sequential Testing','Experimental Design','Statistics','Python']
  },
  {
    id:'p10', emoji:'🕸️', roman:'XXVII', name:'Graph Neural Network — Citation Data',
    type:'Arcana of Project', category:'AI Research', subtitle:'GCN · GraphSAGE · Message passing from scratch',
    gradient:'linear-gradient(160deg,#0a0a1a,#4f46e5)',
    potionColor:'#6366f1',
    ingredients2:['c2','c15'], ingredients3:['c2','c15','c9'],
    prophecy:'GCN and GraphSAGE implemented and compared on the Cora citation network — a 23 percentage point gap over an MLP baseline proving empirically that citation structure encodes topic information. Message passing derived from first principles and verified manually.',
    details:{ Type:'Portfolio project', Stack:'Python · PyTorch · PyTorch Geometric · UMAP · networkx', Field:'AI Research / Graph ML', GitHub:'https://github.com/Antogone/Graph_Neural_network_on_citation_data' },
    tags:['Graph Neural Networks','GCN','GraphSAGE','PyTorch','PyTorch Geometric','UMAP','Message Passing','Deep Learning']
  },
  {
    id:'p11', emoji:'🔗', roman:'XXVIII', name:'Causal Inference — Job Training',
    type:'Arcana of Project', category:'Causal Inference', subtitle:'PSM · IPW · DiD · Rosenbaum bounds',
    gradient:'linear-gradient(160deg,#1a0a0a,#dc2626)',
    potionColor:'#dc2626',
    ingredients2:['c10','c21'], ingredients3:['c10','c21','c30'],
    prophecy:'Three causal identification strategies applied to observational data with a known ground truth — propensity score matching, inverse probability weighting, and difference-in-differences — each getting closer to the true causal effect, with sensitivity to unmeasured confounding quantified via Rosenbaum bounds.',
    details:{ Type:'Portfolio project', Stack:'Python · scikit-learn · statsmodels · scipy · pandas', Field:'Data Science / Causal Inference', GitHub:'https://github.com/Antogone/Causal_inference_on_Observational_data' },
    tags:['Causal Inference','Propensity Score Matching','IPW','Difference-in-Differences','Rosenbaum Bounds','Observational Studies','Python','Statistics']
  },
  {
    id:'p1', emoji:'🦠', roman:'XXIX', name:'HIV Epidemic Modelling',
    type:'Arcana of Project', category:'Computational Biology', subtitle:'Agent-based simulation · Computational Biology',
    gradient:'linear-gradient(160deg,#0a1a10,#15803d)',
    potionColor:'#15803d',
    ingredients2:['c1','c12'], ingredients3:['c1','c12','c8'],
    prophecy:'A computational model tracking the competitive dynamics of distinct HIV viral strains across sexually transmitted epidemics — where biology meets algorithm.',
    details:{ Type:'Academic project', Stack:'Python / Agent-based modelling', Field:'Computational Biology', Period:'2020 – 2021' },
    tags:['Python','Agent-Based','HIV','Epidemiology','Computational Biology']
  },
  {
    id:'p2', emoji:'🏥', roman:'XXX', name:'Medical Entity Recognition',
    type:'Arcana of Project', category:'Clinical NLP', subtitle:'Clinical NLP · HuggingFace',
    gradient:'linear-gradient(160deg,#0a0a1a,#5851db)',
    potionColor:'#a855f7',
    ingredients2:['c1','c9'], ingredients3:['c1','c9','c8'],
    prophecy:'Teaching machines to read medical language — extraction and identification of specific medical terms and concepts from clinical texts.',
    details:{ Type:'Academic project', Stack:'Python / HuggingFace / spaCy', Field:'Clinical NLP', Period:'2022 – 2023' },
    tags:['NLP','HuggingFace','BERT','Medical','Entity Recognition','Python']
  },
  {
    id:'p3', emoji:'🎵', roman:'XXXI', name:'Spotify Music Analysis — R Shiny',
    type:'Arcana of Project', category:'Data Visualisation', subtitle:'Data visualisation · Shiny App',
    gradient:'linear-gradient(160deg,#0a1a0e,#1db954)',
    potionColor:'#1db954',
    ingredients2:['c2','c6'], ingredients3:['c2','c6','c5'],
    prophecy:'An R Shiny application dissecting the anatomy of music through the Spotify API — data analysis, visualisation and interactive exploration of audio features.',
    details:{ Type:'Academic project', Stack:'R / Shiny / Spotify API', Field:'Data Visualisation', GitHub:'https://github.com/Antogone/SpotiViz' },
    tags:['R','Shiny','Spotify API','Data Visualisation','Dashboard']
  },
  {
    id:'p4', emoji:'🧪', roman:'XXXII', name:'Melanoma Survival Analysis',
    type:'Arcana of Project', category:'Biostatistics', subtitle:'Advanced survival methods · Clinical Research',
    gradient:'linear-gradient(160deg,#1a0a1a,#b02897)',
    potionColor:'#b02897',
    ingredients2:['c2','c10'], ingredients3:['c2','c10','c8'],
    prophecy:'Recurrent events, competitive risks, causal inference in survival — advanced statistical methods applied to melanoma clinical data.',
    details:{ Type:'Academic project', Stack:'R / Survival packages', Field:'Biostatistics / Oncology', GitHub:'https://github.com/Antogone/M2-SURVIVAL-MELANOMA-PROJECT' },
    tags:['R','Survival Analysis','Melanoma','Causal Inference','Biostatistics']
  },
  {
    id:'p5', emoji:'🩺', roman:'XXXIII', name:'Breast Tumour Biopsy Analysis',
    type:'Arcana of Project', category:'Oncology / ML', subtitle:'Clustering & classification · Oncology',
    gradient:'linear-gradient(160deg,#0a1a0e,#16a34a)',
    potionColor:'#16a34a',
    ingredients2:['c2','c8'], ingredients3:['c2','c8','c1'],
    prophecy:'Fine needle biopsies of breast tumours — descriptive analysis, unsupervised clustering and supervised classification to distinguish malignant from benign cases.',
    details:{ Type:'Academic project', Stack:'R / Python / Scikit-learn', Field:'Oncology / ML', Period:'2021 – 2022' },
    tags:['R','Python','Clustering','Classification','Oncology','Biostatistics']
  },
  {
    id:'p6', emoji:'🗄️', roman:'XXXIV', name:'HEGP Data Warehouse R Package',
    type:'Arcana of Project', category:'R Package', subtitle:'R package · Data quality · CARPEM',
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

