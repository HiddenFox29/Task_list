

let savedList = localStorage.getItem('list');
let listToDo = [];

console.log(listToDo)

if (savedList) {
    // listToDo = savedList
    savedList = JSON.parse(savedList);
    renderList(savedList);
}

let addTask = document.getElementById("addTask");

addTask.onclick = function() {
   let newTask = prompt("добавьте задачу");
   if (newTask) {
        listToDo.push(newTask);
        console.log(listToDo);
   }
   renderList(listToDo);
};

let showList = document.getElementById("showList");

showList.onclick = function() {
    if(listToDo.length > 0){
        alert(listToDo);
    } else {
        alert("Шеф, все пропало!")
    }
};


let changeList = document.getElementById("changeList");

changeList.onclick = function() {
    let taskNumber = Number(prompt('Введите номер задачи которую хотите изменить'));
    if(taskNumber <= listToDo.length && taskNumber > 0) {
        taskNumber = taskNumber - 1;
        let changeTask = prompt("Задача" + taskNumber, listToDo[taskNumber]);
        listToDo[taskNumber] = changeTask;
        renderList(listToDo);
    } else {
        alert("Борода");
    }
};

let removeItemList = document.getElementById("removeItemList");

removeItemList.onclick = function() {
   let removeTask = Number(prompt("Введите номер задачи для удаления"));
   if (removeTask <= listToDo.length && removeTask > 0) {
        removeTask = removeTask -1;
        listToDo.splice(removeTask, 1)
        renderList(listToDo);
   } else {
    alert("Что-то пошло не так!!!")
   }

};

function renderList(list) {
    let todoListContainer = document.getElementById('todo-list');

    todoListContainer.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('todo-list-item');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = (i + 1) + '. ' + list[i];

        card.appendChild(cardBody);
        todoListContainer.appendChild(card);
    }

    localStorage.setItem('list', JSON.stringify(list));
}
