const btn =  document.querySelector("#btn");
const div = document.querySelector(".outPut-section div");
const popUp = document.querySelector(".popUp-text");
const editModal = document.querySelector(".modal");
const editBtn = document.querySelector(".editBtn");
const cancleBtn = document.querySelector(".cancleBtn");



const TaskList = () => {
    let title = document.getElementById("title");
    let task = document.getElementById("task");
    let titles = title.value.trim()
    let tasks = task.value.trim()
    let date = Date.now();

    if (titles === "" || tasks === "") {
        popUp.textContent = "input feild empty!!";
        popUp.style.color = "red";
        popUp.style.backgroundColor = "#fe8b8b"
        popUp.style.marginLeft = "0%"
        setTimeout(() => {
            popUp.style.marginLeft = "100%"
        }, 1500);
    } else {

        // const newTask = Object.create({});
        // newTask.id = date;
        // newTask.newTitle = titles;
        // newTask.newTasks = tasks

        // localStorage.setItem("myLocalStore",JSON.stringify(newTask));
        // const mylocalData = JSON.parse(localStorage.getItem("myLocalStore"));
        // console.log(mylocalData);

        // normal task function
        // // tag creation
        const article = document.createElement("article");
        const h2 = document.createElement("h2"); 
        const blockquote = document.createElement("blockquote");
        const span = document.createElement("span");
        const p = document.createElement("p");
        const iFirst = document.createElement("i");
        const iSecond = document.createElement("i");
        const iThird = document.createElement("i");
        // adding classs names
        iFirst.className = "fas fa-check-double";
        iSecond.className = "fas fa-edit";
        iThird.className = "fas fa-trash-alt";
        span.className = "task-header";
        p.className = "icon";
        // pop up 
        popUp.textContent = "task added successfully";
        popUp.style.color = "green";
        popUp.style.backgroundColor = "#8bfecc"
        popUp.style.marginLeft = "0%"
        setTimeout(() => {
            popUp.style.marginLeft = "100%"
        }, 1500);

        // added the textContext
        h2.textContent = `${titles}`; 
        blockquote.textContent = `${tasks}`;
        // appended the tag to the html tag
        p.appendChild(iFirst);
        p.appendChild(iSecond);
        p.appendChild(iThird);

        span.appendChild(h2);
        span.appendChild(p);
        
        article.appendChild(span);
        article.appendChild(blockquote);
        div.appendChild(article);

        // localStorage.setItem("myLocalStore",JSON.stringify(article));
        // const mylocalData = JSON.parse(localStorage.getItem("myLocalStore"));
        // console.log(mylocalData);

    // clearing the input
       title.value = "";
       task.value = "";
    //    icon functions
       const taskComplete = () => {
            article.style.backgroundColor = "green";
            setTimeout(() => {
                article.style.backgroundColor = "#fff";
                iFirst.style.color = "green"
            }, 1500);
            popUp.textContent = "task completed successfully";
            popUp.style.color = "green";
            popUp.style.backgroundColor = "#8bfecc"
            popUp.style.marginLeft = "0%"
            setTimeout(() => {
                popUp.style.marginLeft = "100%"
            }, 1500);
       };

       const taskEdit = () => {
        const editTitle = document.getElementById("editTitle")
        const editTask = document.getElementById("editTask")
        let editTitles = editTitle.value.trim()
        let editTasks = editTask.value.trim()

         editTitles = titles;
         editTasks = tasks;

        editModal.style.display = "block"

        function editButton () {
            // if (editTitle !== null || editTask !== null) {
            //     titles.textContent = editTitle;
            //     tasks.textContent = editTask;
            // }

            // console.log(editTitle)
            // console.log(editTask)
            
            // h2.textContent = `${editTitles}`;
            // blockquote.textContent = `${editTasks}`;

            editModal.style.display = "none"
            // let newText = prompt("Edit Task",titles);
            // if (newText !== null) {
            //     this.textContent = newText;
            // }
        }
        editBtn.addEventListener("click",editButton)
       }

      


       

       const taskDelete = () => {
            article.remove()
            popUp.textContent = "task delete a is success";
            popUp.style.color = "red";
            popUp.style.backgroundColor = "#fe8b8b"
            popUp.style.marginLeft = "0%"
            setTimeout(() => {
                popUp.style.marginLeft = "100%"
            }, 1500);
       };
      // addind eventlistener to icons
      iFirst.addEventListener("click",taskComplete);
      iSecond.addEventListener("click",taskEdit);
      iThird.addEventListener("click",taskDelete);
    }
}

btn.addEventListener("click",TaskList)