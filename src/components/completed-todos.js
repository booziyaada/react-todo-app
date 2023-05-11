import React from "react";
import Todo from "./todo";
import DeleteIcon from "./delete.svg";

const CompletedTodos = ({ removeTodo, completedTodos }) => {
  return (
    <div>
      {completedTodos.map((todo, index) => {
        return (
          <Todo
            isComplete
            key={index}
            index={index}
            todo={todo}
            handleAction={removeTodo}
            actionIcon={DeleteIcon}
          />
        );
      })}
    </div>
  );
};

export default CompletedTodos;
