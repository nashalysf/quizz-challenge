//all elements
const startBtn = document.getElementById('start-btn')
const highScoreList = document.getElementById("hs-btn")
const questionElement = document.getElementById('questions')
const answers = document.getElementById('answers')

let shuffledQuestions, currentQuestion

startBtn.addEventListener("click", startQuiz)
highScoreList.addEventListener("click", showHighScores)

function startQuiz() {
    console.log('started');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    part2.classList.remove('hide');
    NextQuestion();
}
function showHighScores(){
    console.log(part4);
}
function nextQuestion() { 
showQuestion(shuffledQuestions[currentQuestion])
}
function showQuestion(question){
    questionElement.innerText = question.quiestion
}

function userAnswer() { 

}


const questions = [
    {
        question: "1. Commonly used data types DO NOT include:",
        answers: [
            {text: 'Alerts', correct: true},
            {text: 'Booleans', correct: false},
            {text: 'Strings', correct: false},
            {text: 'Numbers', correct: false},
        ]
    }

]