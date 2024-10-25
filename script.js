let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let previousScores = []; // Array to store previous scores
let myChart; // Variable to hold the Chart.js instance

// DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const questionCounterElement = document.getElementById("question-counter"); // Get the counter element
const chartContainer = document.getElementById("chart-container"); // Get the chart container

async function startQuiz() {
    selectedQuestions = getRandomQuestions(allQuestions, 10); // Select random questions
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Neste"; // Reset button text
    feedbackElement.textContent = ""; // Clear feedback
    chartContainer.style.display = "none"; // Hide chart before starting a new quiz

    // Clear previous chart instance if it exists
    if (myChart) {
        myChart.destroy(); // Destroy the old chart
    }

    showQuestion();
}

function getRandomQuestions(questions, number) {
    const shuffled = questions.sort(() => 0.5 - Math.random()); // Shuffle questions
    return shuffled.slice(0, Math.min(number, shuffled.length)); // Select the top 'number' of questions
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResults();
        return;
    }
    
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none"; // Hide the next button initially

    // Update the question counter
    questionCounterElement.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${selectedQuestions.length}`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index, button);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex, button) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const allButtons = optionsElement.querySelectorAll("button");
    
    // Highlight selected button
    button.classList.add("highlight");

    // Check if the answer is correct
    if (selectedIndex === currentQuestion.answer) {
        feedbackElement.textContent = "Riktig! " + currentQuestion.feedback;
        button.classList.add("correct"); // Make the selected button green
        score++;
    } else {
        feedbackElement.textContent = "Feil. " + currentQuestion.feedback;
        button.classList.add("incorrect");
        
        // Highlight the correct answer
        allButtons[currentQuestion.answer].classList.add("correct"); // Highlight the correct button in green
    }

    // Disable all buttons after answering
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('no-hover'); // Add class to disable hover effect
    });

    nextButton.style.display = "block"; // Show the next button
}

nextButton.onclick = () => {
    if (nextButton.textContent === "Ny Prøve") {
        startQuiz(); // Start a new quiz
    } else {
        currentQuestionIndex++;
        feedbackElement.textContent = ""; // Clear feedback
        resetButtons();
        showQuestion();
    }
};

function resetButtons() {
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove("correct", "incorrect", "highlight");
        button.disabled = false; // Enable buttons for the next question
        button.classList.remove('no-hover'); // Remove class to re-enable hover
    });
}

function showResults() {
    previousScores.push(score); // Store the score
    const grade = getGrade(score, selectedQuestions.length); // Calculate the grade
    questionElement.textContent = `Eksamen fullført! \n Du fikk ${score} av ${selectedQuestions.length} riktige. ${grade}`; // Display score and grade
    optionsElement.innerHTML = "";
    feedbackElement.textContent = ""; // Clear feedback for results display
    nextButton.style.display = "block"; // Show the next button
    nextButton.textContent = "Ny Prøve"; // Change button text to "Ny Prøve"

    // Show the chart container and draw the chart
    chartContainer.style.display = 'block'; // Show the chart
    drawChart(); // Draw the progress chart
}

function getGrade(score, total) {
    const percentage = (score / total) * 100;
    let grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else if (percentage >= 50) {
        grade = "E";
    } else {
        grade = "F";
    }
    return `Karakter: ${grade}`;
}

// Chart.js setup
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

    const totalQuestions = 40; // Adjust to the total number of questions you have

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                min: 0, // Start from 0
                max: totalQuestions, // Set the maximum to the total number of questions
                ticks: {
                    stepSize: 1, // Set tick intervals to whole numbers
                    callback: function(value) {
                        return Number.isInteger(value) ? value : ''; // Show only whole numbers
                    }
                },
                title: {
                    display: true,
                    text: 'Riktige svar'
                }
            }
        }
    };

    // If chart instance exists, destroy it before creating a new one
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}

// Start the quiz on page load
startQuiz();
