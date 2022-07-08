//all elements
const startBtn = document.getElementById('start-btn');
const highScoreList = document.getElementById("hs-btn");
const quitBtn = document.getElementById("quit");
const restartBtn = document.getElementById("restart");
const part1 = document.getElementById("part1").style.display="block";
const part2 = document.getElementById("part2").style.display="none";
const part3 = document.getElementById("part3").style.display="none";
const part4 = document.getElementById("part4").style.display="none";

startBtn.addEventListener("click", startQuiz)
highScoreList.addEventListener("click", showHighScores)
restartBtn.addEventListener('click', restartQuiz)


function startQuiz() {
    console.log('started');
    document.getElementById("part1").style.display="none";
    document.getElementById("part2").style.display="block";
    var nextQuestion = document.getElementsByClassName('questions');
    for (i<0; i < questions.length; i++);
    const answers = document.getElementsByClassName("answers").style.display="none";
    if (answers.addEventListener ("click")){
        nextQuestion
    }
    if (userAnswer === correctAnswer){
        document.getElementById("answer-q1" , "correct").style.backgroundColor="lightgreen";
    }
    /*shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    part2.classList.remove('hide');
    NextQuestion();*/
}
function showHighScores(){
    console.log(part4);
    document.getElementById("part1").style.display="none";
    document.getElementById("part4").style.display="block";
}
function restartQuiz(){
    document.getElementById("part4").style.display="none"
    document.getElementById("part2").style.display="block";
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