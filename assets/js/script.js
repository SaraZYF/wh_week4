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

console.log(Questions[0]);

//complete quiz, hide and show end//

// const quiz = document.querySelector(".quiz");
// const end = document.querySelector(".end");

 
//Set Start
var start =true;

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
    result[0].innerHTML ="Correct";}
    else {
        result[0].innerHTML ="Wrong";}
})

    //add correct value for option2
    op2.addEventListener ("click", () => {
        seleted = op2.value;
        if (seleted =="true"){
        result[0].innerHTML ="Correct";}
        else {
            result[0].innerHTML ="Wrong";}
    })

    //add correct value for option3
   op3.addEventListener ("click", () => {
    seleted = op3.value;
    if (seleted =="true"){
    result[0].innerHTML ="Correct";}
    else {
        result[0].innerHTML ="Wrong";}
})

   //add correct value for option4
   op4.addEventListener ("click", () => {
    seleted = op4.value;
    if (seleted =="true"){
    result[0].innerHTML ="Correct";}
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

    
}
)


// this still need, as it is complete quiz and show last page
// Questions[2].addEventListener ("click", function () {
//     Questions.style.display ="none";
//     end.style.display="block";
// });

//Quiz Result//


