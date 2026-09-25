const translations = {
  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_contact: "Contact",
    availability: "Disponible pour un stage PFE — Février 2027",
    hero_hello: "Bonjour, je suis",
    hero_role: "AI & Data Engineer",
    hero_desc: "Je conçois des systèmes intelligents, des pipelines de données scalables et des applications IA orientées métier — du traitement Big Data au déploiement.",
    see_projects: "Voir mes projets",
    download_cv: "Télécharger CV",
    about_label: "À PROPOS",
    about_title: "Ingénierie IA & Data, du prototype à la production.",
    about_text: "Étudiant ingénieur en dernière année en Intelligence Artificielle et Sciences des Données. Je développe des solutions qui combinent Machine Learning, Data Engineering, Big Data, APIs et architectures modernes afin de transformer les données en décisions utiles.",
    focus_title: "Mon focus actuel",
    focus_text: "Construire des systèmes AI/Data robustes : ingestion, stockage, traitement distribué, modèles ML/Deep Learning, recherche sémantique, RAG et déploiement via API.",
    stat_internships: "stages PFA",
    stat_ai_projects: "projets AI/Data majeurs",
    stat_years: "années après bac",
    stat_pfe: "PFE recherché",
    skills_label: "TECH STACK",
    skills_title: "Compétences orientées AI & Data Engineering",
    exp_label: "EXPÉRIENCE",
    exp_title: "Expériences professionnelles",
    avantex_desc: "Développement de PayWise, une plateforme intelligente de gestion et d’analyse de la paie, avec architecture Data & IA, détection d’anomalies et tableaux de bord décisionnels.",
    kostal_desc: "Observation des processus industriels et conception d’une plateforme interactive pour digitaliser la formation opérateurs et les documents de poste de travail.",
    projects_label: "PROJETS SÉLECTIONNÉS",
    projects_title: "Des projets qui relient Data, IA et produit.",
    filter_all: "Tous",
    filter_ai_data: "IA & Data",
    filter_dev: "Développement",
    filter_programming: "Programmation",
    filter_robotics: "Robotique",
    talentflow_desc: "Plateforme intelligente de Talent Intelligence : analyse de CV, extraction de compétences, matching candidat/poste, recherche sémantique et assistance aux recruteurs.",
    ecommerce_title: "E-commerce Intelligent",
    ecommerce_desc: "Pipeline Big Data complet avec Data Lake, Data Warehouse, BI et système multi-agents. Recommandation, recherche NLP, fraude, churn et génération d’indicateurs métier.",
    paywise_desc: "Plateforme de gestion et d’analyse de la paie combinant pipeline Data, stockage objet, API métier et détection intelligente d’anomalies.",
    health_title: "Plateforme Santé IA",
    health_desc: "Application médicale avec détection cutanée par CNN, chatbot médical, prise de rendez-vous et espaces sécurisés patient, médecin et administration.",
    education_label: "FORMATION",
    education_title: "Parcours académique",
    prep_title: "Années préparatoires",
    cert_label: "CERTIFICATIONS",
    cert_title: "Validation continue des compétences",
    contact_label: "CONTACT",
    contact_title: "Construisons quelque chose d'intelligent.",
    contact_text: "Je recherche un stage PFE à partir de février 2027 en AI Engineering, Data Engineering, Machine Learning ou Generative AI.",
    footer_text: "AI & Data Engineer • Tanger, Morocco"
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    availability: "Open to a Final-Year Internship — February 2027",
    hero_hello: "Hi, I'm",
    hero_role: "AI & Data Engineer",
    hero_desc: "I build intelligent systems, scalable data pipelines and business-oriented AI applications — from Big Data processing to deployment.",
    see_projects: "View projects",
    download_cv: "Download CV",
    about_label: "ABOUT",
    about_title: "AI & Data Engineering, from prototype to production.",
    about_text: "Final-year engineering student in Artificial Intelligence and Data Science. I build solutions combining Machine Learning, Data Engineering, Big Data, APIs and modern architectures to turn data into useful decisions.",
    focus_title: "Current focus",
    focus_text: "Building robust AI/Data systems: ingestion, storage, distributed processing, ML/Deep Learning models, semantic search, RAG and API-based deployment.",
    stat_internships: "PFA internships",
    stat_ai_projects: "major AI/Data projects",
    stat_years: "years after high school",
    stat_pfe: "PFE target",
    skills_label: "TECH STACK",
    skills_title: "Skills focused on AI & Data Engineering",
    exp_label: "EXPERIENCE",
    exp_title: "Professional experience",
    avantex_desc: "Development of PayWise, an intelligent payroll management and analytics platform with a Data & AI architecture, anomaly detection and decision dashboards.",
    kostal_desc: "Observation of industrial processes and design of an interactive platform to digitize operator training and workstation documentation.",
    projects_label: "SELECTED PROJECTS",
    projects_title: "Projects connecting Data, AI and product.",
    filter_all: "All",
    filter_ai_data: "AI & Data",
    filter_dev: "Development",
    filter_programming: "Programming",
    filter_robotics: "Robotics",
    talentflow_desc: "Talent Intelligence platform for CV analysis, skill extraction, candidate-job matching, semantic search and recruiter assistance.",
    ecommerce_title: "Intelligent E-commerce",
    ecommerce_desc: "End-to-end Big Data pipeline with Data Lake, Data Warehouse, BI and a multi-agent system. Recommendations, NLP search, fraud, churn and business KPI generation.",
    paywise_desc: "Payroll management and analytics platform combining a Data pipeline, object storage, business APIs and intelligent anomaly detection.",
    health_title: "AI Health Platform",
    health_desc: "Medical application with CNN-based skin detection, medical chatbot, appointment booking and secure patient, doctor and admin spaces.",
    education_label: "EDUCATION",
    education_title: "Academic background",
    prep_title: "Preparatory years",
    cert_label: "CERTIFICATIONS",
    cert_title: "Continuous skills validation",
    contact_label: "CONTACT",
    contact_title: "Let's build something intelligent.",
    contact_text: "I am looking for a final-year internship starting February 2027 in AI Engineering, Data Engineering, Machine Learning or Generative AI.",
    footer_text: "AI & Data Engineer • Tangier, Morocco"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langToggle");
  let lang = localStorage.getItem("saad-lang") || "fr";

  const applyLang = (nextLang) => {
    lang = nextLang;
    document.documentElement.lang = lang;
    btn.textContent = lang.toUpperCase();
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("saad-lang", lang);
  };

  btn.addEventListener("click", () => applyLang(lang === "fr" ? "en" : "fr"));
  applyLang(lang);
});
