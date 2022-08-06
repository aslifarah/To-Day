let todoItems = [];


function submitJSForm()
  {

  const form = document.querySelector('.js-form');



  
  const inputs = document.querySelector('.js-todo-input');
   
  const text = inputs.value.trim();
  if (text !== '') {
	  
    addTodo(text);
    input.value = '';
    input.focus();
  }

}
function renderTodo(todo) {
	
  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  const list = document.querySelector('.js-todo-list');
  
   
   const item = document.querySelector(`[data-key='${todo.id}']`);

  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) list.innerHTML = '';
    return
  }

  const isChecked = todo.checked ? 'done' : '';
  const node = document.createElement("li");
  node.setAttribute('class', 'todo-item ${isChecked}');
  node.setAttribute('data-key', todo.id);
  node.innerHTML =  node.innerHTML =  `<pre><center><span style="float:center;align:left"><input id="${todo.id}" type="checkbox"/>&nbsp &nbsp &nbsp<label for="${todo.id}" class="tick js-tick"></label>&nbsp &nbsp &nbsp<span>${todo.text}</span>&nbsp &nbsp &nbsp<span>${todo.id}</span>&nbsp &nbsp<span>${todo.time}</center></pre>
  `;
  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text) {
	var val_d = document.getElementsByClassName("js-todo-input2")[0].value;
	var val_t = document.getElementsByClassName("js-todo-input3")[0].value;
	
  const todo = {
    text,
    checked: false,
    id: val_d,
	time:val_t,
  };

  todoItems.push(todo);
  renderTodo(todo);
}






document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItems');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});
function empty()
{

	
	 //const ref = localStorage.getItem('todoItems');
 localStorage.removeItem('todoItems');
 location.reload();
	
}
function show_event()
{
	
	 //const ref = localStorage.getItem('todoItems');
 var val_d = document.getElementsByClassName("empty-state")[0].style.display = "block";
	
}