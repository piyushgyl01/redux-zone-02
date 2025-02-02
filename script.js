import { createStore, compose } from "https://cdn.skypack.dev/redux";
import todoReducer from "./todosReducer.js";
import { addTodo, removeTodo } from "./actions.js";

// Set up Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoReducer, composeEnhancers());

store.subscribe(() => {
  console.log(store.getState());
  updateTodoList();
});

const todoInput = document.querySelector("#todoInput");
const addTodos = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const addTodoHandler = () => {
  const todoValue = todoInput.value;
  if (todoValue) {
    store.dispatch(addTodo(todoValue));
    todoInput.value = ""; // Clear input after adding
  }
};

window.removeTodoHandler = (index) => {
  store.dispatch(removeTodo(index));
};

addTodos.addEventListener("click", addTodoHandler);

const updateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo}<button onClick="removeTodoHandler(${index})">Remove</button></li>`;
    })
    .join("");
};

updateTodoList();
