const levels = [
    [
        {
            question: "¿Quién construyó el arca?",
            options: ["Noé", "Moisés", "David", "Salomón"],
            answer: "Noé"
        },
        {
            question: "¿Cuál era el nombre del hijo de Abraham que fue sacrificado en el monte Moriah?",
            options: ["Isaacs", "Jacob", "Esaú", "Ninguno"],
            answer: "Ninguno"
        },
        {
            question: "¿Cuántos días duró el diluvio según la historia del arca de Noé?",
            options: ["40 días y 40 noches", "7 días", "120 días", "365 días"],
            answer: "40 días y 40 noches"
        },
        {
            question: "¿Cuál es el primer libro de la Biblia?",
            options: ["Génesis", "Éxodo", "Levítico", "Números"],
            answer: "Génesis"
        },
        {
            question: "¿Cuál de los siguientes no era uno de los hijos de Jacob (Israel)?",
            options: ["José", "Judá", "Moisés", "Rubén"],
            answer: "Moisés"
        }
    ],
    [
        {
            question: "¿Cuál es el monte donde Moisés recibió los Diez Mandamientos?",
            options: ["Monte Horeb", "Monte Sinaí", "Monte Moriah", "Monte Carmelo"],
            answer: "Monte Sinaí"
        },
        {
            question: "¿Quién fue el profeta que desafió a los profetas de Baal en el monte Carmelo?",
            options: ["Isaías", "Elías", "Eliseo", "Jeremías"],
            answer: "Elías"
        },
        {
            question: "¿Cuál era el nombre de la esposa de Job?",
            options: ["María", "Ruth", "Sara", "No se menciona su nombre en la Biblia"],
            answer: "No se menciona su nombre en la Biblia"
        },
        {
            question: "¿Cuántos libros tiene el Nuevo Testamento?",
            options: ["27", "39", "66", "12"],
            answer: "27"
        },
        {
            question: "¿Cuál fue el último de los diez mandamientos dados a Moisés?",
            options: ["No matarás", "No robarás", "No codiciarás", "Honrarás a tu padre y a tu madre"],
            answer: "No codiciarás"
        },
        {
            question: "¿Quién fue el discípulo que negó a Jesús tres veces antes de que el gallo cantara?",
            options: ["Juan", "Pedro", "Santiago", "Andrés"],
            answer: "Pedro"
        },
        {
            question: "¿Quién fue el primer rey de Israel?",
            options: ["Saúl", "David", "Salomón", "Saúl"],
            answer: "Saúl"
        }
    ],
    [ 
        {
            question: "¿Cuántos años estuvo Moisés en el desierto antes de ver la zarza ardiente?",
            options: ["20 años", "30 años", "40 años", "50 años"],
            answer: "40 años"
        },
        {
            question: "¿Cuál de los siguientes no fue uno de los jueces de Israel?",
            options: ["Samuel", "Sansón", "Jonás", "Débora"],
            answer: "Jonás"
        },
        {
            question: "¿Quién fue el profeta que escribió el libro de Apocalipsis?",
            options: ["Isaías", "Jeremías", "Daniel", "Juan"],
            answer: "Juan"
        },
        {
            question: "¿Quién fue el rey que construyó el primer templo en Jerusalén?",
            options: ["David", "Salomón", "Josías", "Ezequías"],
            answer: "Salomón"
        },
        {
            question: "¿Cuántos hijos tuvo Jacob (Israel) en total?",
            options: ["10", "12", "14", "20"],
            answer: "12"
        }
    ],
    [
        {
            question: "¿Cuántos años estuvo Moisés en el desierto antes de ver la zarza ardiente?",
            options: ["20 años", "30 años", "40 años", "50 años"],
            answer: "40 años"
        },
        {
            question: "¿Cuál de los siguientes no fue uno de los jueces de Israel?",
            options: ["Samuel", "Sansón", "Jonás", "Débora"],
            answer: "Jonás"
        },
        {
            question: "¿Quién fue el profeta que escribió el libro de Apocalipsis?",
            options: ["Isaías", "Jeremías", "Daniel", "Juan"],
            answer: "Juan"
        },
        {
            question: "¿Quién fue el rey que construyó el primer templo en Jerusalén?",
            options: ["David", "Salomón", "Josías", "Ezequías"],
            answer: "Salomón"
        },
        {
            question: "¿Cuántos hijos tuvo Jacob (Israel) en total?",
            options: ["10", "12", "14", "20"],
            answer: "12"
        }
    ],
    [
        {
            question: "¿Cuál fue el nombre del profeta que predicó en el valle de los huesos secos?",
            options: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
            answer: "Ezequiel"
        },
        {
            question: "¿Quién fue el profeta que oró y Dios hizo que el sol retrocediera en el cielo?",
            options: ["Isaías", "Jeremías", "Elías", "Daniel"],
            answer: "Elías"
        },
        {
            question: "¿Cuál de las siguientes ciudades no fue destruida junto con Sodoma y Gomorra?",
            options: ["Adma", "Zoar", "Zeboim", "Belén"],
            answer: "Belén"
        },
        {
            question: "¿Cuántos libros componen el Pentateuco?",
            options: ["4", "5", "6", "7"],
            answer: "5"
        },
        {
            question: "¿Quién fue el profeta que caminó desnudo y descalzo por tres años como señal?",
            options: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
            answer: "Isaías"
        }
    ],
    [
        {
            question: "¿Cuántos años duró el reinado del rey David en Jerusalén?",
            options: ["30 años", "33 años", "40 años", "43 años"],
            answer: "40 años"
        },
        {
            question: "¿Cuántos libros conforman la sección de los Profetas Mayores en el Antiguo Testamento?",
            options: ["4", "5", "6", "7"],
            answer: "5"
        },
        {
            question: "¿Cuál de los siguientes libros no es considerado parte de la Ley en el Antiguo Testamento?",
            options: ["Éxodo", "Levítico", "Jueces", "Deuteronomio"],
            answer: "Jueces"
        },
        {
            question: "¿Quién fue el profeta que recibió un mensaje de parte de Dios a través de una mano escribiendo en una pared?",
            options: ["Isaías", "Jeremías", "Daniel", "Ezequiel"],
            answer: "Daniel"
        },
        {
            question: "¿Cuál fue el nombre del rey que escribió muchas de las poesías y canciones en el libro de Salmos?",
            options: ["David", "Salomón", "Asa", "Ezequías"],
            answer: "David"
        }
    ],
    [
        {
            question: "¿Cuál fue el nombre del rey que construyó el segundo templo en Jerusalén?",
            options: ["David", "Salomón", "Josías", "Herodes"],
            answer: "Herodes"
        },
        {
            question: "¿Quién fue el profeta que fue llevado al cielo en un carro de fuego?",
            options: ["Isaías", "Jeremías", "Elías", "Daniel"],
            answer: "Elías"
        },
        {
            question: "¿Cuál fue el nombre del primer sumo sacerdote del pueblo de Israel?",
            options: ["Aarón", "Moisés", "Josué", "Elí"],
            answer: "Aarón"
        },
        {
            question: "¿Cuántos años pasó el profeta Jonás en el vientre del gran pez?",
            options: ["1 día", "3 días", "7 días", "40 días"],
            answer: "3 días"
        },
        {
            question: "¿Quién fue el rey que escribió el libro de Eclesiastés?",
            options: ["David", "Salomón", "Josías", "Ezequías"],
            answer: "Salomón"
        }
    ],
    [
        {
            question: "¿Cuántas plagas envió Dios sobre Egipto antes de que Faraón dejara salir a los israelitas?",
            options: ["5", "7", "9", "10"],
            answer: "10"
        },
        {
            question: "¿Cuántos días pasó Jesús en el desierto siendo tentado por Satanás?",
            options: ["30 días", "33 días", "40 días", "50 días"],
            answer: "40 días"
        },
        {
            question: "¿Cuál de los siguientes no era uno de los discípulos originales de Jesús?",
            options: ["Juan", "Andrés", "Pablo", "Mateo"],
            answer: "Pablo"
        },
        {
            question: "¿Quién fue el profeta que profetizó la destrucción de Nínive?",
            options: ["Isaías", "Jeremías", "Jonás", "Ezequiel"],
            answer: "Jonás"
        },
        {
            question: "¿Cuál fue el nombre del rey que rechazó el consejo de los ancianos y siguió el consejo de los jóvenes?",
            options: ["Roboam", "Asa", "Josafat", "Amón"],
            answer: "Roboam"
        }
    ],
    [
        {
            question: "¿Cuál es el nombre del río donde Jesús fue bautizado por Juan el Bautista?",
            options: ["Nilo", "Tigris", "Eufrates", "Jordán"],
            answer: "Jordán"
        },
        {
            question: "¿Qué animal habló con Balaam en el Antiguo Testamento?",
            options: ["Un león", "Una serpiente", "Un burro", "Un búfalo"],
            answer: "Un burro"
        },
        {
            question: "¿Quién fue el primer sumo sacerdote del pueblo de Israel?",
            options: ["Moisés", "Aarón", "Josué", "Elí"],
            answer: "Aarón"
        },
        {
            question: "¿Cuál fue la señal que Dios le dio a Noé de que nunca volvería a inundar la tierra?",
            options: ["Un arco iris", "Una estrella brillante", "Una tormenta de arena", "Un terremoto"],
            answer: "Un arco iris"
        }
    ],
    [
        {
            question: "¿Quién escribió el libro de Hebreos en el Nuevo Testamento?",
            options: ["Pablo", "Pedro", "Juan", "Santiago"],
            answer: "Desconocido (No se menciona al autor)"
        },
        {
            question: "¿Cuál es la parábola más larga registrada en los Evangelios?",
            options: ["La parábola del hijo pródigo", "La parábola del sembrador", "La parábola del buen samaritano", "La parábola de los obreros de la viña"],
            answer: "La parábola del hijo pródigo"
        },
        {
            question: "¿Cuál era la profesión de Lucas, autor del Evangelio de Lucas y de los Hechos de los Apóstoles?",
            options: ["Pescador", "Carpintero", "Médico", "Agricultor"],
            answer: "Médico"
        },
        {
            question: "¿En qué ciudad estaba la iglesia a la que fue dirigida la carta a los Romanos?",
            options: ["Jerusalén", "Atenas", "Roma", "Corinto"],
            answer: "Roma"
        }
    ],
    [
        {
            question: "¿Cuántas epístolas escribió el apóstol Pablo en el Nuevo Testamento?",
            options: ["12", "13", "14", "15"],
            answer: "13"
        },
        {
            question: "¿Cuál de las siguientes no es una de las epístolas pastorales?",
            options: ["1 Timoteo", "2 Timoteo", "Tito", "Hebreos"],
            answer: "Hebreos"
        },
        {
            question: "¿Cuántos días estuvo Pablo ciego después de su encuentro con Jesús en el camino a Damasco?",
            options: ["1 día", "3 días", "7 días", "40 días"],
            answer: "3 días"
        },
        {
            question: "¿Cuál fue el último libro del Nuevo Testamento en ser escrito?",
            options: ["Apocalipsis", "Hechos de los Apóstoles", "2 Pedro", "2 Juan"],
            answer: "Apocalipsis"
        }
    ],
    [
        {
            question: "¿Quién era el recaudador de impuestos que Jesús llamó para ser su discípulo?",
            options: ["Mateo", "Simón Pedro", "Juan", "Andrés"],
            answer: "Mateo"
        },
        {
            question: "¿Cuántos años estuvo Pablo en Arabia después de su conversión antes de comenzar su ministerio público?",
            options: ["3 años", "5 años", "7 años", "10 años"],
            answer: "3 años"
        },
        {
            question: "¿Quién era el profeta mayor que estaba encarcelado en el pozo de lodo?",
            options: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
            answer: "Jeremías"
        },
        {
            question: "¿Cuál era el nombre del esposo de María Magdalena?",
            options: ["Juan", "Mateo", "Pedro", "José"],
            answer: "Desconocido (No se menciona en la Biblia)"
        }
    ],
    [
        {
            question: "¿Cuál era el nombre del hijo de Abraham que fue sacrificado en el monte Moriah?",
            options: ["Isaac", "Ismael", "Jacob", "Esaú"],
            answer: "Isaac"
        },
        {
            question: "¿Cuál de los siguientes libros no es considerado parte de la literatura sapiencial en el Antiguo Testamento?",
            options: ["Proverbios", "Eclesiastés", "Salmos", "Cantares"],
            answer: "Salmos"
        },
        {
            question: "¿Cuál fue el primer milagro registrado en el Evangelio de Juan?",
            options: ["La multiplicación de los panes y los peces", "La transformación del agua en vino", "La curación del ciego de nacimiento", "La resurrección de Lázaro"],
            answer: "La transformación del agua en vino"
        },
        {
            question: "¿Cuál de los discípulos de Jesús fue apodado 'El gemelo'?",
            options: ["Pedro", "Juan", "Santiago", "Tomás"],
            answer: "Tomás"
        }
    ]
    // Puedes agregar más niveles aquí
];

let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;
let countdown;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const scoreContainer = document.getElementById('score-container');
const timerContainer = document.getElementById('timer-container');
const levelMessageContainer = document.getElementById('level-message-container');
const progressBar = document.getElementById('progress-bar');

// Cargar los sonidos
const correctSound = new Audio('sounds/correct.mp3');
const incorrectSound = new Audio('sounds/incorrect.mp3');
const levelUpSound = new Audio('sounds/levelup.mp3');

function playSound(sound) {
    sound.currentTime = 0; // Reiniciar el sonido
    sound.play();
}

function updateProgressBar() {
    const totalQuestions = levels.reduce((total, level) => total + level.length, 0);
    const answeredQuestions = currentLevel * levels[0].length + currentQuestionIndex + 1;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + '%';
}

function displayQuestion() {
    const questionObj = levels[currentLevel][currentQuestionIndex];
    questionContainer.textContent = questionObj.question;

    optionsContainer.innerHTML = '';
    questionObj.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });

    scoreContainer.textContent = 'Puntaje: ' + score;

    if (currentQuestionIndex === 0) {
        levelMessageContainer.textContent = '¡Nivel ' + (currentLevel + 1) + '!';
        levelMessageContainer.classList.add('visible');
        playSound(levelUpSound);
        setTimeout(() => {
            levelMessageContainer.classList.remove('visible');
        }, 2000);
    }

    updateProgressBar();
    startTimer();
}

function startTimer() {
    let timeLeft = 30; // Tiempo en segundos
    clearInterval(countdown); // Limpiar cualquier temporizador existente
    updateTimerDisplay(timeLeft); // Actualizar la visualización del temporizador

    countdown = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft === 0) {
            clearInterval(countdown);
            resultContainer.textContent = '¡Tiempo agotado!';
            resultContainer.classList.remove('correct', 'incorrect');
            resultContainer.classList.add('time-out');
            checkAnswer(undefined); // Verificar respuesta cuando se agote el tiempo
        }
    }, 1000); // Actualizar el temporizador cada segundo
}


function updateTimerDisplay(timeLeft) {
    timerContainer.textContent = 'Tiempo restante: ' + timeLeft + 's';
}

function checkAnswer(optionIndex) {
    clearInterval(countdown);
    const selectedOption = optionIndex !== undefined ? levels[currentLevel][currentQuestionIndex].options[optionIndex] : undefined;
    const correctAnswer = levels[currentLevel][currentQuestionIndex].answer;
    const isCorrect = selectedOption === correctAnswer;

    if (optionIndex === undefined) {
        score--;
    } else if (isCorrect) {
        score++;
        resultContainer.textContent = '¡Respuesta correcta!';
        resultContainer.classList.remove('incorrect', 'time-out');
        resultContainer.classList.add('correct');
        playSound(correctSound);
    } else {
        resultContainer.textContent = '¡Respuesta incorrecta!';
        resultContainer.classList.remove('correct', 'time-out');
        resultContainer.classList.add('incorrect');
        playSound(incorrectSound);
    }

    scoreContainer.textContent = 'Puntaje: ' + score;
    resultContainer.classList.add('visible');

    setTimeout(() => {
        resultContainer.classList.remove('visible');
        if (currentQuestionIndex < levels[currentLevel].length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            if (currentLevel < levels.length - 1) {
                currentLevel++;
                currentQuestionIndex = 0;
                displayQuestion();
            } else {
                questionContainer.textContent = '';
                optionsContainer.textContent = '';
                scoreContainer.textContent = 'Puntaje final: ' + score;
                timerContainer.textContent = '';
            }
        }
    }, 2000);
}

displayQuestion();
