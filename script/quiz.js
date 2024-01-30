// let newDiv = document.createElement("div");
// let newH = document.createElement("h1");
// let ul = document.createElement("ul");
// let questionDiv = document.querySelector(".questionDiv");
// let answerDiv = document.querySelector(".answerDiv")



// let questNum = 0;

// const question = [
//     {
//         quest:"what is the capital of france?",
//         choices: [
//             {
//                 answer:"berlin",
//                 isTrue: false
//             },
//             {
//                 answer:"paris",
//                 isTrue: true
//             },
//             {
//                 answer:"madrid",
//                 isTrue: false
//             },
//             {
//                 answer:"rome",
//                 isTrue: false
//             }
//         ]
//     },
//     {
//         quest:"which year did the club arsenal play unbeating through out the season?",
//         choices: [
//             {
//                 answer:"2003/04",
//                 isTrue: true
//             },
//             {
//                 answer:"2002/04",
//                 isTrue: false
//             },
//             {
//                 answer:"2003/07",
//                 isTrue: false
//             },
//             {
//                 answer:"2003",
//                 isTrue: false
//             }
//         ]
//     },
//     {
//         quest:"which planet is known as the red planet?",
//         choices: [
//             {
//                 answer:"mars",
//                 isTrue: false
//             },
//             {
//                 answer:"jupiter",
//                 isTrue: false
//             },
//             {
//                 answer:"saturn",
//                 isTrue: false
//             },
//             {
//                 answer:"venus",
//                 isTrue: true
//             }
//         ]
//     },
//     {
//         quest:"which is the largest mammal?",
//         choices: [
//             {
//                 answer:"elephant",
//                 isTrue: true
//             },
//             {
//                 answer:"blue whale",
//                 isTrue: false
//             },
//             {
//                 answer:"hippopotamus",
//                 isTrue: false
//             },
//             {
//                 answer:"shark",
//                 isTrue: false
//             }
//         ]
//     }
// ]

// newH.textContent = `${question[questNum].quest}`;
// questionDiv.appendChild(newH)


// question[questNum].choices.forEach( (eachAnswer) => {
//     const {isTrue,answer} = eachAnswer;
//     let li = document.createElement("li");
//     li.textContent = `${answer}`;
//     ul.appendChild(li);
//     answerDiv.appendChild(ul);
//     li.onclick = () => {
//         if (isTrue === true) {
//            alert("correct")
//             questNum++;

//             if (question.length > 0 ) {
//                 newH.textContent = `${question[questNum].quest}`;

//                 // update options 

//                 ul.innerHTML = "";
//                 question[questNum].choices.forEach( (eachAnswer) => {
//                     const {isTrue,answer} = eachAnswer;
//                     let li = document.createElement("li");
//                     li.textContent = `${answer}`;
//                     ul.appendChild(li);
//                     answerDiv.appendChild
//                 })
//             }      
       
//         } else {
//             alert("wrong")
//         }

     
//     }
// })

// global scope
// let x = 1;


// const perentfolder = () => {
//     // local scope
//     let myValue = 2;
//     console.log(x)
//     console.log(myValue);

//     const childFunction = () => {
//       console.log(x += 5);
//       console.log(myValue += 1);
//     }
//     return childFunction;
    
// }

// const result = perentfolder()
// console.log(result);
// result()
// result()