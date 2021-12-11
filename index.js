/***
 * 1. Load todos from hardcoded array - done
 * 2. Add new todos - done
 * 3. Remove todos - done
 * 4. Update todos
 */

//Selectors section
const listAnchor = document.querySelector('ul');
const clearAllAnchor = document.getElementById('clearAll');

listAnchor.addEventListener('click', handleClickDeleteOrCheck);
clearAllAnchor.addEventListener('click', handleClearAll);
document.querySelector('form').addEventListener('submit', handleSubmitForm);

///////////
const generateId = () => Math.random().toString().slice(3, 10);

let todos = [
  { id: generateId(), name: 'ABC', isCompleted: false },
  { id: generateId(), name: 'XYZ', isCompleted: true },
  { id: generateId(), name: '123', isCompleted: false },
];

function render(todoItems) {
  listAnchor.innerHTML = '';
  todoItems.forEach(todoItem => {
    addTodo(todoItem);
  });

  if (todoItems.length === 0) {
    clearAllAnchor.style.display = 'none';
  } else {
    clearAllAnchor.style.removeProperty('display');
  }
}

render(todos);

///////////////////

//Event handler function(captures what to add)
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (input.value != '')
    todos.push({ id: generateId(), name: input.value, isCompleted: false });
    render(todos);
  input.value = '';
}

// Event handler for delete and check
function handleClickDeleteOrCheck(e) {
  if (e.target.name == 'checkButton') {
    todos.map(todo => {
      if(e.target.getAttribute('data') === todo.id) {
        todo.isCompleted = todo.isCompleted ? false : true;
      }

      return todo;
    })
  } else if (e.target.name == 'deleteButton') {
    todos = todos.filter(todo => todo.id !== e.target.getAttribute('data'));
  }

  render(todos);
}

function handleClearAll(e) {
  todos.length = 0;
  render(todos);
}
 
//Helper function (Template to receive the input)
function addTodo(todo) {
  let li = document.createElement('li');
  li.innerHTML = `
    <button name="checkButton" data=${todo.id}><i class="${todo.isCompleted ? 'fas fa-check' : 'far fa-square'}"></i></button>
    <span class="todo-items${todo.isCompleted ? ' completed' : ''}">${todo.name}</span>
    <button name="deleteButton" data=${todo.id}><i class="fas fa-ellipsis-v"></i></button>
    `;
  li.classList.add('list-items');
  listAnchor.appendChild(li);
}

clearAll.style.display = addTodo.length === 0 ? "none" : "flex";
