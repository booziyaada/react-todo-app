import React from "react";
import TodosStyles from "./todos.module.css";
import { removeTodo as removeTodoAction, markAsDone } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const { todoWrapper, todoLabel, tickIcon } = TodosStyles;

const Todo = ({ todo, index, actionIcon, isComplete }) => {
  const dispatch = useDispatch();

  const markTodoAsDone = () => {
    const markAsDoneAction = markAsDone(index);
    dispatch(markAsDoneAction);
  };

  const removeTodo = () => {
    dispatch(removeTodoAction(index));
  };

  const handleAction = () => {
    if (isComplete) removeTodo();
    else markTodoAsDone();
  };

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
