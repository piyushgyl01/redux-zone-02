const initialState = { todos: [] };
import { ADD_TODO } from "./actions.js";
import { REMOVE_TODO } from "./actions.js";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((Val, index) => index != action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
