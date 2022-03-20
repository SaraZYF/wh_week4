//list questions below

const Questions = [{
    id: 0,
    q: "What is 10+5?",
    a: [{text: "5", isCorrect: false},
        {text: "15", isCorrect: true},
        {text: "3", isCorrect: false},
        {text: "25", isCorrect: false}
]},

    {id: 1,
    q: "What is 10*5?",
    a: [{text: "5", isCorrect: false},
        {text: "15", isCorrect: false},
        {text: "3", isCorrect: false},
        {text: "50", isCorrect: true}
        ]},

    {id: 2,
    q: "What is 10-5?",
    a: [{text: "5", isCorrect: true},
        {text: "15", isCorrect: false},
        {text: "3", isCorrect: false},
        {text: "50", isCorrect: false}
        ]
    
    }
]

// console.log(Questions[0]);

//complete quiz, hide and show end//

// const quiz = document.querySelector(".quiz");
// const end = document.querySelector(".end");

 
//Set Start
var start =true;

//Set Score
var count=0;

//question and results
function iterate(id) {
    
    //show result
    var result =document.getElementsByClassName ("result");
    result[0].innerText="";

    //define question
    const question = document.getElementById("quiz");

    //show question text from array
    question.innerText=Questions[id].q;

    //define options
    const op1 = document.getElementById ('op1');
    const op2 = document.getElementById ('op2');
    const op3 = document.getElementById ('op3');
    const op4 = document.getElementById ('op4');

    //show options text
     op1.innerText = Questions[id].a[0].text;
     op2.innerText = Questions[id].a[1].text;
     op3.innerText = Questions[id].a[2].text;
     op4.innerText = Questions[id].a[3].text;


    //show true or false value for options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

var seleted="";

   //add correct value for option1
   op1.addEventListener ("click", () => {
    seleted = op1.value;
    if (seleted =="true"){
    result[0].innerHTML ="Correct";
    count ++;}
    else {
        result[0].innerHTML ="Wrong";}
})

    //add correct value for option2
    op2.addEventListener ("click", () => {
        seleted = op2.value;
        if (seleted =="true"){
        result[0].innerHTML ="Correct";
        count ++;}
        else {
            result[0].innerHTML ="Wrong";}
    })

    //add correct value for option3
   op3.addEventListener ("click", () => {
    seleted = op3.value;
    if (seleted =="true"){
    result[0].innerHTML ="Correct";
    count ++;}
    else {
        result[0].innerHTML ="Wrong";}
})

   //add correct value for option4
   op4.addEventListener ("click", () => {
    seleted = op4.value;
    if (seleted =="true"){
    result[0].innerHTML ="Correct";
    count ++;}
    else {
        result[0].innerHTML ="Wrong";}
})

}

    if (start) {
        iterate("0");
    }

  //jump to next questions   
const next = document.getElementsByClassName('next')[0];
var id=0;

next.addEventListener ("click", () => {
    start=false;
    if (id <3) {
        id++;
        iterate(id);}
     
    else {
        document.querySelector('section').style.display ="none";
        document.getElementById('end').style.display="block";
        }

});



//Result Page submit initial//

//define submit
const savedName=document.getElementById("ini");
const submitButton=document.getElementById("submit");
const scoreini=document.getElementById("scoreini");
//WIP,define sum count score
const sum=document.getElementById("sum");

//submit function, put value as localstorage

function saveini () {

    const submit= {
        initial: savedName.value
    };

 localStorage.setItem ("submit",JSON.stringify(submit));
}


function renderscoreini() {
    const submitName=JSON.parse(localStorage.getItem("submit"));
    if (submit !==null) {
//WIP
   document.getElementById('end').style.display ="none";
   document.getElementById('score').style.display="block";
//WIP
    document.getElementById("scoreini").innerHTML=submitName.initial;}
    else {
        return;
    }
}

submitButton.addEventListener ("click", function(event) {
   event.preventDefault();
   saveini();
   renderscoreini();
   
});

//init () function fires when the page is loaded
function init() {
    renderscoreini();
}

init();

//WIP, sum the score
// function sumcount () {
//     sum.textContent=count.value;
// }

// sumcount();

//timer, countdown
timeLeft=60;

function countdown() {

timeLeft--;
document.getElementById("timer").innerHTML= String(timeLeft);

if (timeLeft >0) {
    setTimeout(countdown,1000);
}
};

setTimeout(countdown,1000);