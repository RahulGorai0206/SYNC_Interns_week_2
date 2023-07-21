const startBtn=document.querySelector('.quiz-btn');
const popup=document.querySelector('.popup');
const exitBtn=document.querySelector('.exit');
const main=document.querySelector('.main');
const continueBtn=document.querySelector('.continue')
const quizSection=document.querySelector('.quiz-sec');
const home = document.querySelector('.home');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
const headerScore = document.querySelector('.header-score');
let count=0;
let questionCount=1;
let score=0;
startBtn.onclick = () =>{
    popup.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick=()=>{
    popup.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick=()=>{
    home.classList.add('active');
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    showQuestion(0);
}
const nextBtn=document.querySelector('.next-btn')
nextBtn.onclick=()=>{
    if(count<questions.length-1){
        count++;
        showQuestion(count);
        questionCounter(count)
    }else{
        console.log("Finished...")
    }
}
function showQuestion(index){
    const questionText=document.querySelector('.question-txt');
    questionText.textContent=`${questions[index].numb} : ${questions[index].question}`;
    const options=`
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
    optionList.innerHTML=options;
    const option=document.querySelectorAll('.option');
    for (let index = 0; index < option.length; index++) {
        option[index].setAttribute('onclick','optionSelected(this)')
    }
}
function questionCounter(index){
    const totalQuestion=document.querySelector('.total-question');
    totalQuestion.textContent=`${index+1} of ${questions.length} questions`
}
function optionSelected(answer){
    let userAnswer=answer.textContent.replace(/\s+/g, " ").trim();
    let correctAnswer=questions[count].ans;
    if(userAnswer==correctAnswer){
        answer.classList.add('correct');
        headerScore.textContent=`Score: ${++score} / ${questions.length}`
    }else{
        answer.classList.add('incorrect');
        for (let index = 0; index < optionList.children.length; index++) {
            if(optionList.children[index].textContent.replace(/\s+/g, " ").trim()==correctAnswer){
                optionList.children[index].classList.add('correct');
            }
        }
    }
    for (let index = 0; index < optionList.children.length; index++) {
        optionList.children[index].classList.add('disabled');
        
    }
}