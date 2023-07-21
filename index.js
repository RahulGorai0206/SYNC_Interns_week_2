const startBtn = document.querySelector('.quiz-btn');
const exitBtn = document.querySelector('.exit');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue')
const nextBtn = document.querySelector('.next-btn');
const tryAgain = document.querySelector('.tryAgain');
const goToHome = document.querySelector('.go-to-home');


const popup = document.querySelector('.popup');
const quizSection = document.querySelector('.quiz-sec');
const home = document.querySelector('.home');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
const headerScore = document.querySelector('.header-score');
const resultBox = document.querySelector('.result-box');
const progressValue = document.querySelector('.progress-value');
const scoreText = document.querySelector('.score-text');
const circularProgress = document.querySelector('.circular-progress');







let count = 0;
let questionCount = 1;
let score = 0;







startBtn.onclick = () => {
    popup.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popup.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    home.classList.add('active');
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    showQuestion(0);
}

nextBtn.onclick = () => {
    if (count < questions.length - 1) {
        count++;
        showQuestion(count);
        questionCounter(count)
    } else {
        console.log("Finished...");
        showResult();
    }
}

tryAgain.onclick = () => {
    resultBox.classList.remove('active');
    quizBox.classList.add('active');
    count = 0;
    questionCount = 1;
    score = 0;
    nextBtn.classList.remove('active');
    showQuestion(count);
    questionCounter(count);
    headerScore.textContent = `Score: ${score} / ${questions.length}`
}

goToHome.onclick = () => {
    home.classList.remove('active');
    quizSection.classList.remove('active');
    quizBox.classList.remove('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    resultBox.classList.remove('active');
    count = 0;
    questionCount = 1;
    score = 0;
    nextBtn.classList.remove('active');
    showQuestion(count);
    questionCounter(count);
    headerScore.textContent = `Score: ${score} / ${questions.length}`
}







function showQuestion(index) {
    const questionText = document.querySelector('.question-txt');
    questionText.textContent = `${questions[index].numb} : ${questions[index].question}`;
    const options = `
            <div class="option">
                <span>${questions[index].options[0]}</span>
            </div>
            <div class="option">
                <span>${questions[index].options[1]}</span>
            </div>
            <div class="option">
                <span>${questions[index].options[2]}</span>
            </div>
            <div class="option">
                <span>${questions[index].options[3]}</span>
            </div>`;
    optionList.innerHTML = options;
    const option = document.querySelectorAll('.option');
    for (let index = 0; index < option.length; index++) {
        option[index].setAttribute('onclick', 'optionSelected(this)')
    }
    nextBtn.classList.remove('active');
}

function questionCounter(index) {
    const totalQuestion = document.querySelector('.total-question');
    totalQuestion.textContent = `${index + 1} of ${questions.length} questions`
}

function optionSelected(answer) {
    let userAnswer = answer.textContent.replace(/\s+/g, " ").trim();
    let correctAnswer = questions[count].ans;
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        headerScore.textContent = `Score: ${++score} / ${questions.length}`
    } else {
        answer.classList.add('incorrect');
        for (let index = 0; index < optionList.children.length; index++) {
            if (optionList.children[index].textContent.replace(/\s+/g, " ").trim() == correctAnswer) {
                optionList.children[index].classList.add('correct');
            }
        }
    }
    for (let index = 0; index < optionList.children.length; index++) {
        optionList.children[index].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function showResult() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    scoreText.textContent = `Your Score is ${score} out of ${questions.length}`;
    let progressStartValue = -1;
    let progressEndValue = score / questions.length * 100;
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        if (score > 0) {
            circularProgress.style.background = `conic-gradient( #c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 4deg)`;
        }
        progressValue.textContent = `${progressStartValue}%`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed)
}