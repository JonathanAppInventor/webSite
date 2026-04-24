const meanings = {
    1: { title: "El Líder", desc: "Vibración de independencia, originalidad y fuerza de voluntad." },
    2: { title: "El Mediador", desc: "Representa la dualidad, la diplomacia y la sensibilidad emocional." },
    3: { title: "El Comunicador", desc: "Energía de expresión creativa, optimismo y vida social activa." },
    4: { title: "El Constructor", desc: "Simboliza el orden, la lealtad, el trabajo duro y la estabilidad." },
    5: { title: "El Aventurero", desc: "Vibración de libertad, cambio, curiosidad y adaptabilidad." },
    6: { title: "El Protector", desc: "Enfocado en el hogar, la responsabilidad, el amor y la armonía." },
    7: { title: "El Buscador", desc: "Representa el análisis, la espiritualidad y el conocimiento profundo." },
    8: { title: "El Ejecutor", desc: "Energía de poder material, éxito económico y justicia." },
    9: { title: "El Humanitario", desc: "Vibración de compasión, idealismo y cierre de ciclos espirituales." },
    11: { title: "Maestro Iluminado", desc: "Intuición superior y una misión espiritual trascendental." },
    22: { title: "Maestro Constructor", desc: "Capacidad de materializar grandes sueños para el bien común." }
};

function calculateKabala() {
    const dateInput = document.getElementById('birthdate').value;
    if (!dateInput) return alert("Por favor, selecciona una fecha");

    // Extraer números y sumar
    const numbers = dateInput.replace(/-/g, '');
    let sum = [...numbers].reduce((a, b) => parseInt(a) + parseInt(b), 0);

    // Reducción Teosófica
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = [...sum.toString()].reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    displayResult(sum);
}

function displayResult(number) {
    const container = document.getElementById('result-container');
    const numDisplay = document.getElementById('kabala-number');
    const titleDisplay = document.getElementById('kabala-title');
    const descDisplay = document.getElementById('kabala-desc');

    container.classList.remove('hidden');
    setTimeout(() => container.classList.add('opacity-100'), 10);

    numDisplay.innerText = number;
    titleDisplay.innerText = meanings[number].title;
    descDisplay.innerText = meanings[number].desc;
}