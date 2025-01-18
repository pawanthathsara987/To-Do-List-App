const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(){
    if (taskInput.value === ''){
        alert('Please enter a task');
    }else{
        let li = document.createElement('li');
        li.innerText = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);

    }
    taskInput.value = '';
    saveData();
}

taskList.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}
showTask();