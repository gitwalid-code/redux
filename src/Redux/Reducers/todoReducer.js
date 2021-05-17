import { ADD, CHECK } from "../Constants/todoConstants";

const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return { todos: [...state.todos, action.payload] };
    }
    case CHECK: {
      const index = state.todos.findIndex((elem) => elem.id === action.payload);
      const newState = [...state.todos];
      newState[index].checked = !newState[index].checked;
      return { todos: newState };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
