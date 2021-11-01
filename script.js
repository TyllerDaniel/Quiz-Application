const quizData = [
    {
        question: "Who was the First Predient of Kenya?",
        a: "Daniel Moi",
        b: "Geroge Saitoti",
        c: "Jomo Kenyatta",
        d: "Mwai Kibaki",
        correct: 'c'
    },
    {
        question: 'When did Kenya attain Indpendence?',
        a: '1955',
        b: '1963',
        c: '1964',
        d: '1978',
        correct: 'c'
    },
    {
        question: "In which County is Mt Kenya?",
        a: 'Nyeri County',
        b: 'Nanyuki County',
        c: 'Meru County',
        d: 'Makueni County',
        correct: 'a'
    },
    {
        question: 'where did Mekatilili wa Menza hail from?',
        a: 'Tanzania',
        b: 'Kenya',
        c: 'Zanzibar',
        d: 'Malawi',
        correct: 'b'
    },
    {
        question:'How often do the kenyan Census take place?',
        a: '5 Years',
        b: '10 years',
        c: '4 Years',
        d: '1 Year',
        correct : 'b'
    }
];
let questionEL = document.getElementById('question');
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;
const answerEls = document.querySelectorAll('.answer');
let answer  = undefined;
let quiz = document.getElementById('quiz');

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    let currentQuizData = quizData[currentQuiz];
    questionEL.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected(){
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;

}
function deselectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked =false;
        
    });

}
submitBtn.addEventListener('click',() => {
    const answer = getSelected();

    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score ++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload</button>`;
        }

    }
 
});
