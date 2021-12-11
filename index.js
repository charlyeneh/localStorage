//Selectors section
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);


// const clearAll = document.getElementById('clearAll');  
// const addTodo = JSON.parse(localStorage.getItem("addTodo")) || [];

//Event handler function(captures what to add)
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (input.value != '')
    addTodo(input.value);
  input.value = '';
}

// Event handler for delete and check
function handleClickDeleteOrCheck(e) {
  if (e.target.name == 'checkButton')
    checkTodo(e);
  
  if (e.target.name == 'deleteButton')
    deleteTodo(e);
}

function handleClearAll(e) {
  document.querySelector('ul').innerHTML = "";
}
 
//Helper function (Template to receive the input)
function addTodo(todo) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `
    <button name="checkButton"><i class="far fa-square"></i></button>
    <span class="todo-items">${todo}</span>
    <button name="deleteButton"><i class="fas fa-ellipsis-v"></i></button>
    `;
  li.classList.add('list-items');
  ul.appendChild(li);
}

// localStorage.setItem("addTodo", JSON.stringify(todo));

  clearAll.style.display = addTodo.length === 0 ? "none" : "flex";

// Change the icon on click
// function changeIcon() {
//   let li = getElementById('change');
//   li.innerHTML = `
//     <button name="checkButton"><i class="fas fa-check"></i></button>
//     `;
//   li.classList.add('list-items');
//   ul.appendChild(li);
// }

// Execute checkTodo function
function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == 'line-through')
    item.style.textDecoration = 'none';
  else
    item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
}
