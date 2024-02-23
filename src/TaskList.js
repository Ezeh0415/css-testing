import {initializeApp} from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore
} from 'firebase/firestore'
const btn =  document.querySelector("#btn");
const div = document.querySelector(".outPut-section div");
const popUp = document.querySelector(".popUp-text");
const editModal = document.querySelector(".modal");
const editBtn = document.querySelector(".editBtn");
const cancleBtn = document.querySelector(".cancleBtn");
let arrayTask = [];



const firebaseConfig = {
    apiKey: "AIzaSyDJvn_GqogsJU3XE1SXlBgFVbi4bEPUd0w",
    authDomain: "fir-9-dojo-4da5d.firebaseapp.com",
    projectId: "fir-9-dojo-4da5d",
    storageBucket: "fir-9-dojo-4da5d.appspot.com",
    messagingSenderId: "250392842527",
    appId: "1:250392842527:web:ac688b160693fce282e02a"
  };
//   init firebase app
  initializeApp(firebaseConfig)

//   init service
const db = getFirestore()

// collection ref
const colRef = collection(db, "books")

// get collection data
getDocs(colRef)
.then((snapshot) => {
    console.log(snapshot.doc);
})

// const TaskList = () => {
//     let title = document.getElementById("title");
//     let task = document.getElementById("task");
//     let titles = title.value.trim()
//     let tasks = task.value.trim()
//     let date = Date.now();


//     if (titles === "" || tasks === "") {
//         popUp.textContent = "input feild empty!!";
//         popUp.style.color = "red";
//         popUp.style.backgroundColor = "#fe8b8b"
//         popUp.style.marginLeft = "0%"
//         setTimeout(() => {
//             popUp.style.marginLeft = "100%"
//         }, 1500);
       
//     } else {
            
//             // const arrayTask = [];
//             const taskObj = Object.create({});
//             taskObj.id = date;
//             taskObj.taskTitle = titles;
//             taskObj.taskTask = tasks;

//              arrayTask.push(taskObj)

//         // tag creation
//     //                 const article = document.createElement("article");
//     //                 const h2 = document.createElement("h2"); 
//     //                 const blockquote = document.createElement("blockquote");
//     //                 const span = document.createElement("span");
//     //                 const p = document.createElement("p");
//     //                 const iFirst = document.createElement("i");
//     //                 const iSecond = document.createElement("i");
//     //                 const iThird = document.createElement("i");
//     //         // adding classs names
//     //             iFirst.className = "fas fa-check-double";
//     //             iSecond.className = "fas fa-edit";
//     //             iThird.className = "fas fa-trash-alt";
//     //             span.className = "task-header";
//     //             p.className = "icon";


//     //     const newTask = Object.create({});
//     //     newTask.id = date;
//     //     newTask.newTitle = titles;
//     //     newTask.newTasks = tasks

//     //    arrayTask.push(newTask);

//     //    popUp.textContent = "task added successfully";
//     //        popUp.style.color = "green";
//     //        popUp.style.backgroundColor = "#8bfecc"
//     //        popUp.style.marginLeft = "0%"
//     //        setTimeout(() => {
//     //            popUp.style.marginLeft = "100%"
//     //        }, 1500);

//     //     localStorage.setItem("myLocalStore",JSON.stringify(arrayTask));
//     //     const mylocalData = JSON.parse(localStorage.getItem("myLocalStore"));
//     //        console.log(mylocalData);
//     //     mylocalData.forEach(eachTask => {
//     //         const {id,newTitle,newTask} = eachTask;

//     //         // added the textContext
//     //             h2.textContent = `${newTitle}`; 
//     //             blockquote.textContent = `${newTask}`;
                
//     //             const taskComplete = () => {
//     //                     const taskId = mylocalData.find( (eachTasks) => eachTasks.id === eachTasks.id)
//     //                      console.log(taskId)

//     //                     // article.style.backgroundColor = "green";
//     //                     // setTimeout(() => {
//     //                     //     article.style.backgroundColor = "#fff";
//     //                     //     iFirst.style.color = "green"
//     //                     // }, 1500);
//     //                     // popUp.textContent = "task completed successfully";
//     //                     // popUp.style.color = "green";
//     //                     // popUp.style.backgroundColor = "#8bfecc"
//     //                     // popUp.style.marginLeft = "0%"
//     //                     // setTimeout(() => {
//     //                     //     popUp.style.marginLeft = "100%"
//     //                     // }, 1500);
//     //             };
//     //             iFirst.addEventListener("click",taskComplete);
//     //     });

//     //     // mylocalData.map((eachTask) => {

//     //     //           // added the textContext
//     //     //             h2.textContent = `${eachTask.newTitle}`; 
//     //     //             blockquote.textContent = `${eachTask.newTask}`;
//     //     //             const taskComplete = () => {
//     //     //                 const taskId = mylocalData.find( (eachTasks) => eachTasks.id === eachTasks.id)
//     //     //                  console.log(taskId)
            
//     //     //                      // article.style.backgroundColor = "green";
//     //     //                      // setTimeout(() => {
//     //     //                      //     article.style.backgroundColor = "#fff";
//     //     //                      //     iFirst.style.color = "green"
//     //     //                      // }, 1500);
//     //     //                      // popUp.textContent = "task completed successfully";
//     //     //                      // popUp.style.color = "green";
//     //     //                      // popUp.style.backgroundColor = "#8bfecc"
//     //     //                      // popUp.style.marginLeft = "0%"
//     //     //                      // setTimeout(() => {
//     //     //                      //     popUp.style.marginLeft = "100%"
//     //     //                      // }, 1500);
//     //     //              };
//     //     //              iFirst.addEventListener("click",taskComplete);
//     //     // })
//     //        // appended the tag to the html tag
//     //             p.appendChild(iFirst);
//     //             p.appendChild(iSecond);
//     //             p.appendChild(iThird);

//     //             span.appendChild(h2);
//     //             span.appendChild(p);
                
//     //             article.appendChild(span);
//     //             article.appendChild(blockquote);
//     //             div.appendChild(article);

//     //     title.value = ""
//     //     task.value = ""

//     //      // icon functions
//     //     //  const taskComplete = () => {
//     //     //     // const taskId = mylocalData.find( (eachTasks) => eachTasks.id === id)
//     //     //     //  console.log(taskId)

//     //     //          // article.style.backgroundColor = "green";
//     //     //          // setTimeout(() => {
//     //     //          //     article.style.backgroundColor = "#fff";
//     //     //          //     iFirst.style.color = "green"
//     //     //          // }, 1500);
//     //     //          // popUp.textContent = "task completed successfully";
//     //     //          // popUp.style.color = "green";
//     //     //          // popUp.style.backgroundColor = "#8bfecc"
//     //     //          // popUp.style.marginLeft = "0%"
//     //     //          // setTimeout(() => {
//     //     //          //     popUp.style.marginLeft = "100%"
//     //     //          // }, 1500);
//     //     //  };
//     //     //  iFirst.addEventListener("click",taskComplete);
     

            

//         // normal task function
//         // // tag creation
//         const article = document.createElement("article");
//         const h2 = document.createElement("h2"); 
//         const blockquote = document.createElement("blockquote");
//         const span = document.createElement("span");
//         const p = document.createElement("p");
//         const iFirst = document.createElement("i");
//         const iSecond = document.createElement("i");
//         const iThird = document.createElement("i");
//         // adding classs names
//         iFirst.className = "fas fa-check-double";
//         iSecond.className = "fas fa-edit";
//         iThird.className = "fas fa-trash-alt";
//         span.className = "task-header";
//         p.className = "icon";

      

//     arrayTask.forEach((singleTask) => {
//         // added the textContext;
//           article.key = `${singleTask.id}`
//           h2.textContent = `${singleTask.taskTitle}`; 
//           blockquote.textContent = `${singleTask.taskTask}`;
//            // pop up 
//             popUp.textContent = "task added successfully";
//             popUp.style.color = "green";
//             popUp.style.backgroundColor = "#8bfecc"
//             popUp.style.marginLeft = "0%"
//             setTimeout(() => {
//                 popUp.style.marginLeft = "100%"
//             }, 1500);
//             // appended the tag to the html tag
//             p.appendChild(iFirst);
//             p.appendChild(iSecond);
//             p.appendChild(iThird);

//             span.appendChild(h2);
//             span.appendChild(p);
            
//             article.appendChild(span);
//             article.appendChild(blockquote);
//             div.appendChild(article);

//             // clearing the input
//             title.value = "";
//             task.value = "";
                   
//     })

  

//     const taskComplete = () => {

//         // const completed = arrayTask.find(tasks => "id" in tasks)
//         // console.log(completed.taskTitle);
        
//            article.style.backgroundColor = "green";
//            setTimeout(() => {
//                article.style.backgroundColor = "#fff";
//                iFirst.style.color = "green"
//            }, 1500);
//            popUp.textContent = "task completed successfully";
//            popUp.style.color = "green";
//            popUp.style.backgroundColor = "#8bfecc"
//            popUp.style.marginLeft = "0%"
//            setTimeout(() => {
//                popUp.style.marginLeft = "100%"
//            }, 1500);
//       };

//     // localStorage.setItem("myLocalStore",JSON.stringify(arrayTask));
//     // const mylocalData = JSON.parse(localStorage.getItem("myLocalStore"));
//     // console.log(mylocalData);


//        const taskEdit = () => {
//          title.value = titles;
//          task.value = tasks;

//          btn.style.display = "none";
//          editBtn.style.display = "block";
//        }

       
//        const editTask = () => {
//         if (titles !== null || tasks !== null) {
//             let  newTitles = title.value.trim()
//             let  newTasks = task.value.trim()
           
//             h2.innerHTML = `${newTitles}`; 
//             blockquote.innerHTML = `${newTasks}`;

//             title.value = ""
//             task.value = ""

//              btn.style.display = "block";
//              editBtn.style.display = "none";
//         }
//     }



//        const taskDelete = () => {
//             article.remove()
//             popUp.textContent = "task delete a is success";
//             popUp.style.color = "red";
//             popUp.style.backgroundColor = "#fe8b8b"
//             popUp.style.marginLeft = "0%"
//             setTimeout(() => {
//                 popUp.style.marginLeft = "100%"
//             }, 1500);
//        };
//       // addind eventlistener to icons
//       iFirst.addEventListener("click",taskComplete);
//       iSecond.addEventListener("click",taskEdit);
//       iThird.addEventListener("click",taskDelete);
//       editBtn.addEventListener("click",editTask);
      
//     }
// }

// btn.addEventListener("click",TaskList)