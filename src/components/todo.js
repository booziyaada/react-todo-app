import React from "react";
import TodosStyles from "./todos.module.css";

const { todoWrapper, todoLabel, tickIcon } = TodosStyles;

const Todo = ({ todo, handleAction, index, actionIcon, isComplete }) => {
  return (
    <div className={`${todoWrapper}`}>
      <span
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
        className={todoLabel}
      >
        {todo}
      </span>
      <img
        alt="todo-action"
        onClick={() => handleAction(index)}
        className={tickIcon}
        height={15}
        src={actionIcon}
      />
    </div>
  );
};

export default Todo;
