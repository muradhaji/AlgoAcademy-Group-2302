function generateTodoHTML() {
  let x = '';

  let todos = getTodos();

  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="todo">
      <span class="status" onclick="toggleTodo(${todos[i].id})">${
      todos[i].completed ? '✅' : '❌'
    }</span>
      <span class="content">${todos[i].content}</span>
      <div class="buttons">
        <div class="edit">Edit</div>
        <div class="delete" onclick="deleteTodo(${todos[i].id})">Delete</div>
      </div>
    </div>
    `;
  }

  document.getElementById('todoContainer').innerHTML = x;
}

function toggleTodo(toggleId) {
  let oldTodos = getTodos();
  let newTodos = [];

  for (let i = 0; i < oldTodos.length; i++) {
    if (oldTodos[i].id == toggleId) {
      // newTodos.push({
      //   id: oldTodos[i].id,
      //   content: oldTodos[i].content,
      //   completed: !oldTodos[i].completed,
      // });
      newTodos.push({
        ...oldTodos[i],
        completed: !oldTodos[i].completed,
      });
    } else {
      newTodos.push(oldTodos[i]);
    }
  }

  setTodos(newTodos);
  generateTodoHTML();
}

function deleteTodo(deleteId) {
  let oldTodos = getTodos();
  let newTodos = [];
  for (let i = 0; i < oldTodos.length; i++) {
    if (oldTodos[i].id != deleteId) {
      newTodos.push(oldTodos[i]);
    }
  }

  setTodos(newTodos);
  generateTodoHTML();
}

function createTodo() {
  let input = document.getElementById('todoContent');

  let biggestTodoId = 0;
  let todos = getTodos();
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > biggestTodoId) {
      biggestTodoId = todos[i].id;
    }
  }

  let newTodo = {
    id: biggestTodoId + 1,
    content: input.value,
    completed: false,
  };

  todos.push(newTodo);
  setTodos(todos);
  generateTodoHTML();
  input.value = '';
}

function setTodos(arr) {
  localStorage.setItem('todolist', JSON.stringify(arr));
}
function getTodos() {
  return JSON.parse(localStorage.getItem('todolist') || '[]');
}

generateTodoHTML();

/*
{
  name: "string",
  quantity: number,
  price: number,
}
*/