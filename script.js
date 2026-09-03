const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_research: "Research",
    nav_skills: "Skills",
    nav_contact: "Contact",
    kicker: "Functional Safety · ISO 26262 · ADAS & System Safety",
    hero_text: "M.Sc. candidate in Functional Safety Engineering with experience in applied research, automotive safety, HARA, safety requirements, Functional Safety Assessment, and structured safety-data tooling.",
    view_experience: "View experience",
    download_cv: "Download CV",
    about_title: "About",
    about_text: "I am pursuing an M.Sc. in Functional Safety Engineering at the University of Kassel. My main interests are functional safety, system safety, ADAS safety, HARA, safety requirements, and safety analysis for automated driving systems.",
    experience_title: "Professional Experience",
    fraunhofer_desc: "Structured HARA-related hazardous events into YAML models, linked them with ODD parameters and operating conditions, and developed Python tooling for safety-data processing.",
    mingabyte_desc: "Worked on automated-driving safety material, vehicle-level safety requirements and safety concepts, and contributed as a co-assessor to a Functional Safety Assessment of a hydrogen fuel-cell system.",
    dekra_desc: "Tested an internal Functional Safety Assessment tool against ISO 26262 and IEC 61508 and developed standards-based checklists and review workflows.",
    herkules_desc: "Developed and tested ROS- and Python-based modules for perception and planning and supported sensor integration and safety-related troubleshooting.",
    research_title: "Research & Academic Work",
    masters_label: "Master's Thesis · In preparation",
    masters_title: "Developing a Criticality Taxonomy for Situation Analysis in Safety Engineering",
    masters_desc: "Literature-based identification and structuring of criticality factors for driving situations, with planned application in SentryCraft for systematic scenario analysis.",
    bachelors_label: "Bachelor's Thesis · Published",
    bachelors_desc: "Modelled, developed, and validated a semi-electronic braking system on the Smart Trike hybrid vehicle.",
    skills_title: "Skills",
    methods_title: "Safety Methods",
    standards_title: "Standards",
    tools_title: "Tools",
    languages_title: "Languages",
    education_title: "Education",
    msc_focus: "Automotive Functional Safety · System Safety · system-level safety concepts",
    beng_title: "Bachelor of Engineering – Mechatronics",
    beng_focus: "MEMS · power electronics · control systems · robotics",
    contact_title: "Contact",
    contact_text: "I am currently seeking full-time opportunities in Functional Safety, System Safety, or ADAS Safety."
  },
  de: {
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_research: "Forschung",
    nav_skills: "Kenntnisse",
    nav_contact: "Kontakt",
    kicker: "Funktionale Sicherheit · ISO 26262 · ADAS & Systemsicherheit",
    hero_text: "M.Sc.-Studentin im Bereich Functional Safety Engineering mit Erfahrung in angewandter Forschung, Automotive Safety, HARA, Sicherheitsanforderungen, Functional Safety Assessments und strukturierter Verarbeitung von Safety-Daten.",
    view_experience: "Erfahrung ansehen",
    download_cv: "Lebenslauf herunterladen",
    about_title: "Über mich",
    about_text: "Ich studiere Functional Safety Engineering im Master an der Universität Kassel. Meine Schwerpunkte liegen auf Funktionaler Sicherheit, Systemsicherheit, ADAS-Sicherheit, HARA, Sicherheitsanforderungen und der Sicherheitsanalyse automatisierter Fahrsysteme.",
    experience_title: "Berufserfahrung",
    fraunhofer_desc: "Strukturierung HARA-bezogener Hazardous Events in YAML-Modellen, Verknüpfung mit ODD-Parametern und Betriebsbedingungen sowie Entwicklung von Python-Tooling für die Verarbeitung von Safety-Daten.",
    mingabyte_desc: "Arbeit an technischen Inhalten zur Sicherheit automatisierter Fahrfunktionen, an fahrzeugbezogenen Sicherheitsanforderungen und Sicherheitskonzepten sowie Mitwirkung als Co-Assessor bei einem Functional Safety Assessment eines Wasserstoff-Brennstoffzellensystems.",
    dekra_desc: "Prüfung eines internen Functional-Safety-Assessment-Tools anhand von ISO 26262 und IEC 61508 sowie Entwicklung normenbasierter Checklisten und Review-Workflows.",
    herkules_desc: "Entwicklung und Test von ROS- und Python-basierten Modulen für Wahrnehmung und Planung sowie Unterstützung bei Sensorintegration und sicherheitsbezogener Fehlersuche.",
    research_title: "Forschung & akademische Arbeiten",
    masters_label: "Masterarbeit · In Vorbereitung",
    masters_title: "Entwicklung einer Kritikalitätstaxonomie für die Situationsanalyse in der Sicherheitstechnik",
    masters_desc: "Literaturbasierte Identifikation und Strukturierung von Kritikalitätsfaktoren für Fahrsituationen mit geplanter Anwendung in SentryCraft zur systematischen Szenarioanalyse.",
    bachelors_label: "Bachelorarbeit · Veröffentlicht",
    bachelors_desc: "Modellierung, Entwicklung und Validierung eines semi-elektronischen Bremssystems für das Smart-Trike-Hybridfahrzeug.",
    skills_title: "Kenntnisse",
    methods_title: "Safety-Methoden",
    standards_title: "Normen",
    tools_title: "Tools",
    languages_title: "Sprachen",
    education_title: "Ausbildung",
    msc_focus: "Automotive Functional Safety · Systemsicherheit · systembezogene Sicherheitskonzepte",
    beng_title: "Bachelor of Engineering – Mechatronik",
    beng_focus: "MEMS · Leistungselektronik · Regelungstechnik · Robotik",
    contact_title: "Kontakt",
    contact_text: "Ich suche derzeit eine Vollzeitposition im Bereich Funktionale Sicherheit, Systemsicherheit oder ADAS-Sicherheit."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  localStorage.setItem("portfolioLang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const cvLink = document.querySelector('a[data-i18n="download_cv"]');
  if (cvLink) {
    cvLink.href = lang === "de"
      ? "Aparna_Dharmalingam_Lebenslauf_Deutsch.pdf"
      : "Aparna_Dharmalingam_CV_English.pdf";
  }

  document.title = lang === "de"
    ? "Aparna Dharmalingam | Funktionale Sicherheit"
    : "Aparna Dharmalingam | Functional Safety Engineer";
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("portfolioLang") || "en");
