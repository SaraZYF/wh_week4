//select option and return//
const ul_1=document.querySelector(".option1");
const ul_2=document.querySelector(".option2");

//hide the first quiz and show next one//

const q1=document.querySelector(".q1");
const q2=document.querySelector(".q2");

//complete quiz, hide and show end//

const quiz = document.querySelector(".quiz");
const end = document.querySelector(".end");

//select result for each quiz//
const results=document.querySelector('.results');
const select =document.querySelector('#a1');

 
// Quiz click change//
//click correct result, shows result, click the wrong result shows "wrong"//
//when result=correct, click again, jump to next question//
//count, right result, when right result >1, move to next quiz//
ul_1.addEventListener ("click", function () {
const choice = select.value;
console.count(choice);


// if (choice === '3. quotes'){
// //     //right answer select
//     results.textContent='Correct!';
// //    //count the time of right selected time >0
         //need to consider event bubble here
// //    //display message
    // q1.style.display ="none";
    // q2.style.display="block";}

// else {
//     results.textContent='Wrong!';
//     //wrong answer select
//     //display message, loop 
// }

});

ul_2.addEventListener ("click", function () {
    q2.style.display ="none";
    end.style.display="block";
});

//Quiz Result//


