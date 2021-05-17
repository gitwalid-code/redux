import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Actions/todoActions";
const Todos = (props) => {
  const [input, setInput] = useState("Title...");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const addTodos = () => {
    if (input && input !== "Title...") {
      dispatch(
        addTodo({
          id: uuidv4(),
          task: input,
          checked: false,
        })
      );
    }
  };
  return (
    <div>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="myInput"
          placeholder={input}
        />
        <span onClick={() => addTodos()} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        {todos.map((elem) => {
          return <Todo key={elem.id} todo={elem} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;

// state = {
//   todo : {
//     todos : []
//   },
//   user : {
//     users : []
//   }
// }
