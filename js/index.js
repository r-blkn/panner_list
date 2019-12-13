const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
    let myPlan = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listCrossOut = document.createElement('button');
    const listPriorityOne = document.createElement('button');
    const listPrioritySecond = document.createElement('button');
    const listBtnDelete = document.createElement('button');


    listItem.appendChild(listText);
    listText.textContent = myPlan;
    listItem.appendChild(listPriorityOne);
    listPriorityOne.textContent = 'Priority Main';
    listItem.appendChild(listPrioritySecond);
    listPrioritySecond.textContent = 'Priority Second';
    listItem.appendChild(listCrossOut);
    listCrossOut.textContent = 'Completed';
    listItem.appendChild(listBtnDelete);
    listBtnDelete.textContent = 'Delete';
    listBtnDelete.classList.add('btn-delete');

    list.appendChild(listItem);

    function btnPriorityOneClicked() {
        listItem.classList.add('priority-one');
    }

    function btnPrioritySecondClicked() {
        listItem.classList.add('priority-two');
    }

    function btnCrossOutClicked() {
        listItem.classList.add('cross-out');
    }

    function btnDeleteClicked() {
        list.removeChild(listItem);
    }

    listCrossOut.addEventListener('click', btnCrossOutClicked);
    listPriorityOne.addEventListener('click', btnPriorityOneClicked);
    listPrioritySecond.addEventListener('click', btnPrioritySecondClicked);
    listBtnDelete.addEventListener('click', btnDeleteClicked);

    input.focus();
}

const sect = document.querySelector('section');
const clock = document.querySelector('.clock');
const reset = document.querySelector('.reset-all');

function btnShowClock() {
    const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
    setInterval(updateTime, 1000);
    showClock.textContent = "Hide clock";
}

const showClock = document.querySelector('.show-clock');
showClock.addEventListener('click', btnShowClock);

function resetList() {
    $('.reset-all').click(() => $('li').toggle(2000));
}

reset.addEventListener('click', resetList);

