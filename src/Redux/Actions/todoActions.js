import { ADD, CHECK } from "../Constants/todoConstants";

export const addTodo = (todo) => {
  return {
    type: ADD,
    payload: todo,
  };
};

export const checkTodo = (id) => {
  return {
    type: CHECK,
    payload: id,
  };
};
