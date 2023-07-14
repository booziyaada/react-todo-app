import React from "react";
import Todo from "./todo";
import DeleteIcon from "./delete.svg";
import { useSelector } from "react-redux";
import { completedTodosSelector } from "../redux/todoSlice";

const CompletedTodos = () => {
  const completedTodos = useSelector(completedTodosSelector);
  return (
    <div>
      {completedTodos.map((todo, index) => {
        return (
          <Todo
            isComplete
            key={index}
            index={index}
            todo={todo}
            actionIcon={DeleteIcon}
          />
        );
      })}
    </div>
  );
};

export default CompletedTodos;
