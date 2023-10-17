let inputElement = document.querySelector('.js_input');
let buttonElementAdd = document.querySelector('.js_button_add');
let inputElement_date = document.querySelector('.js_date_input');
let Todo_Tasks;
let date;

let arrayTodo = JSON.parse(localStorage.getItem('arrayTodo')) || [{
    name: inputElement.value,
    dueDate: inputElement_date.value
}];

buttonElementAdd.addEventListener
('click', () => {
    getToDo();
    Print_tasks();
})

Print_tasks();

// FUNCTION AREA

function getToDo() {
    Todo_Tasks = inputElement.value;
    date = inputElement_date.value;

    if (Todo_Tasks != '' && date != '') {
        arrayTodo.push({
            name: Todo_Tasks,
            dueDate: inputElement_date.value
        });
    }
    
    inputElement.value = '';
    inputElement_date.value = '';
}

function HandleKeyDown(event) {
    if (event.key === 'Enter') {
        getToDo();
        Print_tasks();

        for (let i = 0; i < arrayTodo.length; i++) {
            const nan = arrayTodo[i];
            console,log(`name: ${arrayTodo[i].name}; dueDate: ${arrayTodo[i].dueDate}`);
        }
    }
}

function Print_tasks() {
    let Display_ToDo = '';

    
    for (let i = 0; i < arrayTodo.length; i++) {
        console.log(arrayTodo[i]);
        const tasksObject = arrayTodo[i];
        const name = tasksObject.name;
        const dueDate = tasksObject.dueDate;

        if (name != '' && dueDate != '') {
            const tasks_P =
            `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="button_delete" onclick="
                arrayTodo.splice(${i}, 1);
                localStorage.removeItem('arrayTodo[${i}]');
                Print_tasks();
            ">Delete</button>
            `;
            Display_ToDo += tasks_P;
        }
    }
    
    document.querySelector('.js_Tasks')
        .innerHTML = Display_ToDo;
    
    localStorage.setItem('arrayTodo', JSON.stringify(arrayTodo));
}
