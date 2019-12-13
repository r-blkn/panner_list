const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const listItem = document.createElement('li');

function btnPriorityClicked() {
    listItem.classList.add('red-color-priority');
}

function btnCrossOutClicked() {
    listItem.classList.add('cross-out');
}

function btnDeleteClicked() {
    $('.btn-delete').click(() => $('li').toggle(3000));
}

button.onclick = function () {
    let myPlan = input.value;
    
    if(myPlan === '') {
        alert('Incorrect input, please enter yput plan again');
    }
    input.value = '';

    const listText = document.createElement('span');
    const listCrossOut = document.createElement('button');
    const listPriority = document.createElement('button');
    const listBtnDelete = document.createElement('button');
    

    listItem.appendChild(listText);
    listText.textContent = myPlan;
    listItem.appendChild(listCrossOut);
    listCrossOut.textContent = 'Completed';
    listItem.appendChild(listPriority);
    listPriority.textContent = 'Priority';
    listItem.appendChild(listBtnDelete);
    listBtnDelete.textContent = 'Delete';
    listBtnDelete.classList.add('btn-delete');

    list.appendChild(listItem);


    listCrossOut.addEventListener('click', btnCrossOutClicked);
    listPriority.addEventListener('click', btnPriorityClicked);
    listBtnDelete.addEventListener('click', btnDeleteClicked);
    

    input.focus();
}