

let savedList = localStorage.getItem('list');

if (savedList) {
    savedList = JSON.parse(savedList);
    renderList(savedList);
}

function renderList(list) {
    let todoListContainer = document.getElementById('todo-list');

    todoListContainer.innerHTML = '';

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
