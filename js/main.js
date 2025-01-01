const translations = {
  en: { title: "Curriculum Vitae", content: "Electronic engineer with five years of experience in software development, FullSatck web development and SQL database administration; has worked in the design, development and maintenance of electronic systems, oriented to telecommunications, especially the Internet of Things (IOT). Advanced skills in microcontroller programming, integrated circuits and PCB design. Great analytical skills, technical problem solving, teamwork, good personal presentation, advanced English, altruistic, proactive, dynamic, positive." },
  es: { title: "Hoja de Vida", content: "Ingeniero electrónico con cinco años de experiencia en desarrollo de software, desarrollo web FullSatck y administración de bases de datos SQL; ha trabajado en diseño, desarrollo y mantenimiento de sistemas electrónicos, orientados a telecomunicaciones especialmente Internet de las cosas (IOT). Habilidades avanzadas en programación de microcontroladores, circuitos integrados y diseño de (PCB). Gran capacidad de análisis, resolución de problemas técnicos, trabajo en equipo, buena presentación personal, inglés avanzado, altruista, proactivo, dinámico, positivo." },
};
document.getElementById('language-selector').addEventListener('change', (e) => {
  const lang = e.target.value;
  document.getElementById('title').innerText = translations[lang].title;
  document.getElementById('content').innerText = translations[lang].content;
});
