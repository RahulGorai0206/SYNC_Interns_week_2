const startBtn=document.querySelector('.quiz-btn');
const popup=document.querySelector('.popup');
const exitBtn=document.querySelector('.exit');
const main=document.querySelector('.main');
const continueBtn=document.querySelector('.continue')
const quizSection=document.querySelector('.quiz-sec');
const home = document.querySelector('.home')
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
    popup.classList.remove('active');
    main.classList.remove('active');
}