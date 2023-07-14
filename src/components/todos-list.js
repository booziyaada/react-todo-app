import React from "react";
import Todo from "./todo";
import TickIcon from "./tick.svg";
import { todosSelector } from "../redux/todoSlice";
import { useSelector } from "react-redux";

const TodosList = () => {
  const todos = useSelector(todosSelector);

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
          />
        );
      })}
    </div>
  );
};

export default TodosList;
