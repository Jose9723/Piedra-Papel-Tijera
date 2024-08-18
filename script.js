let userScore = 0;

// Cargar los sonidos
const clickSound = new Audio('click.mp3');
const victorySound = new Audio('victoria.mp3');
const defeatSound = new Audio('perdiste.mp3');
const drawSound = new Audio('empate.mp3');

function play(userChoice) {
    // Reproducir el sonido de clic en el botón
    clickSound.play();

    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultMessage = '';

    // Ocultar la fase de selección y mostrar la fase de resultado
    document.querySelector('.choices').classList.add('hidden');
    document.querySelector('#choicesDisplay').classList.remove('hidden');

    // Limpiar clases previas
    document.getElementById('userChoice').className = 'choice';
    document.getElementById('computerChoice').className = 'choice';

    // Agregar la clase correspondiente para el color de fondo
    document.getElementById('userChoice').classList.add(userChoice);
    document.getElementById('computerChoice').classList.add(computerChoice);

    // Mostrar las elecciones del usuario y de la máquina
    document.getElementById('userChoice').innerHTML = `<img src="${userChoice}.png" alt="${userChoice}">`;
    document.getElementById('computerChoice').innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}">`;

    if (userChoice === computerChoice) {
        resultMessage = `Empate! Ambos eligieron ${userChoice}.`;
        drawSound.play(); // Reproducir sonido de empate
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        resultMessage = `¡Ganaste!.`;
        userScore++;
        victorySound.play(); // Reproducir sonido de victoria
    } else {
        resultMessage = `Perdiste.`;
        defeatSound.play(); // Reproducir sonido de derrota
    }

    document.getElementById('resultMessage').textContent = resultMessage;
    document.getElementById('scoreValue').textContent = userScore;
}

// Reiniciar el juego
function restartGame() {
    // Mostrar la fase de selección y ocultar la fase de resultado
    document.querySelector('.choices').classList.remove('hidden');
    document.querySelector('#choicesDisplay').classList.add('hidden');

    // Limpiar las elecciones y el mensaje
    document.getElementById('userChoice').innerHTML = '';
    document.getElementById('computerChoice').innerHTML = '';
    document.getElementById('resultMessage').textContent = '';
}

