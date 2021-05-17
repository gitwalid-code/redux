import React from "react";
import { checkTodo } from "../Redux/Actions/todoActions";
import { useDispatch } from "react-redux";
const Todo = (props) => {
  const dispatch = useDispatch();

  return (
    <li
      className={`${props.todo.checked ? "checked" : ""}`}
      onClick={() => dispatch(checkTodo(props.todo.id))}
    >
      {props.todo.task}
    </li>
  );
};

export default Todo;
