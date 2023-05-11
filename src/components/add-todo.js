import React from "react";
import { useState } from "react";

import AddTodoStyles from "./add-todo.module.css";

// a function should do only one thing.

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => setNewTodo(e.target.value);

  const handleClick = () => {
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  function checkEnter(event) {
    if (event.keyCode === 13 || event.which === 13) handleClick();
  }

  return (
    <>
      <div>
        <input
          value={newTodo}
          className={AddTodoStyles.todoInput}
          onChange={handleChange}
          onKeyDown={checkEnter}
        />
        <button className={AddTodoStyles.addTodoButton} onClick={handleClick}>
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
