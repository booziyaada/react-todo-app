import React from "react";
import Todo from "./todo";
import TickIcon from "./tick.svg";

const TodosList = ({ markTodoAsDone, todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo
            isComplete={false}
            key={index}
            index={index}
            todo={todo}
            actionIcon={TickIcon}
            handleAction={markTodoAsDone}
          />
        );
      })}
    </div>
  );
};

export default TodosList;
