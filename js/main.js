// Traducciones
/*
const translations = {
  es: { title: "Bienvenido", description: "Selecciona un idioma", content: "Español" },
  en: { title: "Welcome", description: "This picture was created in 2013, when i was doing my work of grade and there's no exist artificial intelligence, by a classmate Juan Luna, in order to make me a joke.", content: "Electronic engineer with five years of experience in software development, FullSatck web development and SQL database administration; has worked in the design, development and maintenance of electronic systems, oriented to telecommunications, especially the Internet of Things (IOT). Advanced skills in microcontroller programming, integrated circuits and PCB design. Great analytical skills, technical problem solving, teamwork, good personal presentation, advanced English, altruistic, proactive, dynamic, positive." },
  fr: { title: "Bienvenue", description: "Sélectionnez une langue", content: "Français" }
};
*/
const translations = {
  es: {
    title: "Hoja de Vida",
    description: "Esta foto fue creada en 2013, cuando esta realizando mi trabajo de grado y aun no existia la inteligencia artificial, por un compañero, para hacerme una broma.",
    content: "Ingeniero electrónico con cinco años de experiencia en desarrollo de software, desarrollo web FullSatck y administración de bases de datos SQL; ha trabajado en diseño, desarrollo y mantenimiento de sistemas electrónicos, orientados a telecomunicaciones especialmente Internet de las cosas (IOT). Habilidades avanzadas en programación de microcontroladores, circuitos integrados y diseño de (PCB). Gran capacidad de análisis, resolución de problemas técnicos, trabajo en equipo, buena presentación personal, inglés avanzado, altruista, proactivo, dinámico, positivo.",
    end: "Sitio en construccion y mejoras...",
    button: "Divertirse"
  },
  en: {
    title: "Welcome",
    description: "This picture was created in 2013, when i was doing my work of grade and there's no exist artificial intelligence, by a classmate, in order to make me a joke.",
    content: "Electronic engineer with five years of experience in software development, FullSatck web development and SQL database administration; has worked in the design, development and maintenance of electronic systems, oriented to telecommunications, especially the Internet of Things (IOT). Advanced skills in microcontroller programming, integrated circuits and PCB design. Great analytical skills, technical problem solving, teamwork, good personal presentation, advanced English, altruistic, proactive, dynamic, positive.",
    end: "Site under building and improvements...",
    button: "Have Fun"
  }
};
// Funciones para cambiar el idioma

function toSpanish() {
  document.getElementById("title").textContent = translations.es.title;
  document.getElementById("description").textContent = translations.es.description;
  document.getElementById("content").textContent = translations.es.content;
  document.getElementById("buildingMessage").textContent = translations.es.end;
  document.getElementById("haveFun").textContent = translations.es.button;
  document.getElementById("spanishButton").style.display = "none";
  document.getElementById("englishButton").style.display = "inline";
}

function toEnglish() {
  document.getElementById("title").textContent = translations.en.title;
  document.getElementById("description").textContent = translations.en.description;
  document.getElementById("content").textContent = translations.en.content;
  document.getElementById("buildingMessage").textContent = translations.en.end;
  document.getElementById("haveFun").textContent = translations.en.button;
  document.getElementById("englishButton").style.display = "none";
  document.getElementById("spanishButton").style.display = "inline";
}

// Obtener el modal
const modal = document.getElementById("myModal");

// Mostrar el modal
function showModal() {
    modal.style.display = "flex";
}

// Ocultar el modal
function hideModal() {
    modal.style.display = "none";
}
