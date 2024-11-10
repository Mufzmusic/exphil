let selectedQuestions = [];
let lastSelectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let previousScores = [];
let questionCount = 40; // Default to 40 questions
let myChart;

// Get elements for DOM manipulation
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const questionCounterElement = document.getElementById("question-counter");
const chartContainer = document.getElementById("chart-container");
const progressBar = document.getElementById("progress-bar");

// Get elements for start screen and question container
const startScreen = document.getElementById("start-screen");
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-button");

// Enable start button by default
startButton.disabled = false;

let snowAmount = 50; // Startverdi for antall snøfnugg
const snowSlider = document.getElementById('snowSlider');
const snowContainer = document.getElementById('snowContainer');

// Oppdater snømengde og hastighet basert på sliderens verdi
snowSlider.addEventListener('input', (e) => {
    snowAmount = parseInt(e.target.value);
    updateSnowflakeSpeed();
});

// Funksjon for å oppdatere hastigheten til alle eksisterende snøfnugg
function updateSnowflakeSpeed() {
    const snowflakes = document.querySelectorAll('.snowflake');
    
    // Beregn hastighet basert på slideren - sakte på lavt nivå, raskt på høyt nivå
    const duration = snowAmount === 1 ? '100s' : (100 / snowAmount) + 's'; // Nesten stillestående ved lav verdi

    snowflakes.forEach((snowflake) => {
        snowflake.style.animationDuration = duration;
    });
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // Sett en tilfeldig størrelse og posisjon
    const size = Math.random() * 1.5 + 0.5 + 'em';
    snowflake.style.fontSize = size;
    snowflake.style.left = Math.random() * 100 + 'vw';

    // Gi hvert snøfnugg en tilfeldig startposisjon langs y-aksen
    snowflake.style.top = Math.random() * 100 + 'vh';

    // Sett startfart for snøfnuggene
    const duration = snowAmount === 1 ? '100s' : (100 / snowAmount) + 's'; // Raskere når snowAmount er høy
    snowflake.style.animationDuration = duration;

    // Fjern eller minimer forsinkelsen så snøfnuggene starter umiddelbart
    const delay = Math.random() * 0.1 + 's'; // Kort forsinkelse, maks 0.5 sekunder
    snowflake.style.animationDelay = delay;

    // Legg til snøfnugget i containeren
    snowContainer.appendChild(snowflake);

    // Fjern snøfnugget når animasjonen er ferdig
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}



// Kontinuerlig snøfall, med justeringer basert på snowAmount
function snowFallLoop() {
    const currentFlakes = document.querySelectorAll('.snowflake').length;
    if (currentFlakes < snowAmount * 5) { // Øk antall snøfnugg ved høye verdier
        createSnowflake();
    }

    // Be om ny animasjonsramme
    requestAnimationFrame(snowFallLoop);
}

// Start snøfall
snowFallLoop();






// Handle selection of question count on the start screen without resetting selected categories
function setQuestionCount(count, button) {
    questionCount = count;
    const countButtons = document.querySelectorAll(".ti button");
    countButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    // Enable start button if at least one chapter is selected
    if (getSelectedChapters().length > 0) {
        startButton.disabled = false;
    }
}

// Toggle chapter selection on start screen
function toggleChapterSelection(button) {
    button.classList.toggle("selected");

    // Enable start button if at least one chapter is selected
    if (getSelectedChapters().length > 0) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

// Get selected chapters
function getSelectedChapters() {
    return Array.from(document.querySelectorAll('#chapter-selection .selected'))
                .map(button => button.getAttribute("data-chapter"));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start quiz based on selected chapters and question count
function startQuiz() {
    const selectedChapters = getSelectedChapters();
    const questionsByChapter = selectedChapters.flatMap(chapter => {
        return (allQuestions[chapter] || []).map(question => ({ ...question, chapter })); // Legg til chapter i hvert spørsmål
    });

    selectedQuestions = getRandomQuestionsByCategory(questionsByChapter, questionCount, selectedChapters);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Neste";
    feedbackElement.textContent = "";
    chartContainer.style.display = "none";
    lastSelectedQuestions = selectedQuestions;

    // Reset progress bar
    resetProgressBar();

    // Hide start screen and show question container
    startScreen.style.display = "none";
    questionContainer.style.display = "block";

    showQuestion();
}

// Reset progress bar
function resetProgressBar() {
    progressBar.innerHTML = '';
    for (let i = 0; i < questionCount; i++) {
        const block = document.createElement("div");
        block.classList.add("question-block");
        progressBar.appendChild(block);
    }
}

// Update the progress bar based on answer correctness
function updateProgressBar(isCorrect) {
    const block = progressBar.children[currentQuestionIndex];
    if (isCorrect) {
        block.classList.add("correct-answer");
    } else {
        block.classList.add("incorrect-answer");
    }
}

// Get a random selection of questions by category to ensure even distribution
function getRandomQuestionsByCategory(questions, number, categories) {
    const questionsPerCategory = Math.floor(number / categories.length);
    const selectedQuestions = [];

    categories.forEach(category => {
        const categoryQuestions = questions.filter(q => q.chapter === category && !lastSelectedQuestions.includes(q));
        const shuffled = categoryQuestions.sort(() => 0.5 - Math.random());
        selectedQuestions.push(...shuffled.slice(0, questionsPerCategory));
    });

    // Add remaining questions randomly to reach the total count
    let remainingCount = number - selectedQuestions.length;
    if (remainingCount > 0) {
        const remainingQuestions = questions.filter(q => !selectedQuestions.includes(q) && categories.includes(q.chapter));
        selectedQuestions.push(...remainingQuestions.sort(() => 0.5 - Math.random()).slice(0, remainingCount));
    }

    // Fill up any additional required questions from all available questions
    remainingCount = number - selectedQuestions.length;
    if (remainingCount > 0) {
        const additionalQuestions = questions.filter(q => !selectedQuestions.includes(q));
        selectedQuestions.push(...additionalQuestions.sort(() => 0.5 - Math.random()).slice(0, remainingCount));
    }

    return selectedQuestions.slice(0, number);
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResults();
        return;
    }
    
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    // Sjekk om currentQuestion har en 'chapter'-egenskap
    if (currentQuestion && currentQuestion.chapter) {
        document.getElementById("current-category").textContent = `Kapittel: ${currentQuestion.chapter}`;
    } else {
        document.getElementById("current-category").textContent = `Kapittel: Ikke spesifisert`;
    }

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    questionCounterElement.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${selectedQuestions.length}`;

    // Kopier alternativene og shuffle dem
    const shuffledOptions = shuffle([...currentQuestion.options]);

    // Finn den riktige svarindeksen etter shuffling
    const correctAnswerIndex = shuffledOptions.indexOf(currentQuestion.options[currentQuestion.answer]);

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index, correctAnswerIndex, button); // Send shufflet indeks og korrekt indeks
        optionsElement.appendChild(button);
    });
}



function selectAnswer(selectedIndex, correctAnswerIndex, button) {
    const allButtons = optionsElement.querySelectorAll("button");
    button.classList.add("highlight");

    if (selectedIndex === correctAnswerIndex) {
        feedbackElement.textContent = "Riktig! " + selectedQuestions[currentQuestionIndex].feedback;
        button.classList.add("correct");
        score++;
        updateProgressBar(true); // Update progress bar as correct
    } else {
        feedbackElement.textContent = "Feil. " + selectedQuestions[currentQuestionIndex].feedback;
        button.classList.add("incorrect");
        allButtons[correctAnswerIndex].classList.add("correct"); // Mark correct answer
        updateProgressBar(false); // Update progress bar as incorrect
    }

    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('no-hover');
    });

    nextButton.style.display = "block";
}


// Handle next question or restart quiz
nextButton.onclick = () => {
    if (nextButton.textContent === "Ny Prøve") {
        resetToStartScreen();
    } else {
        currentQuestionIndex++;
        feedbackElement.textContent = "";
        resetButtons();
        showQuestion();
    }
};

// Reset button styles for the next question
function resetButtons() {
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove("correct", "incorrect", "highlight");
        button.disabled = false;
        button.classList.remove('no-hover');
    });
}

// Show results and grade after the quiz is completed
function showResults() {
    previousScores.push(score);
    const grade = getGrade(score, selectedQuestions.length);
    questionElement.textContent = `Eksamen fullført! \n Du fikk ${score} av ${selectedQuestions.length} riktige. ${grade}`;
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.style.display = "block";
    nextButton.textContent = "Ny Prøve";
    chartContainer.style.display = 'block';
    drawChart();
}

// Return to start screen to set up a new quiz
function resetToStartScreen() {
    questionContainer.style.display = "none";
    startScreen.style.display = "block";
}

// Calculate grade based on score
function getGrade(score, total) {
    const percentage = (score / total) * 100;
    let grade;
    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 70) grade = "C";
    else if (percentage >= 60) grade = "D";
    else if (percentage >= 50) grade = "E";
    else grade = "F";
    return `Karakter: ${grade}`;
}

// Draw a progress chart of scores

function drawChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chartData = {
        labels: previousScores.map((_, index) => `Prøve ${index + 1}`),
        datasets: [{
            label: 'Antall riktige svar',
            data: previousScores,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: questionCount,
                ticks: { stepSize: 1, callback: value => Number.isInteger(value) ? value : '' },
                title: { display: true, text: 'Riktige svar' }
            }
        }
    };

    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, { type: 'line', data: chartData, options: chartOptions });
}
