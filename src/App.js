import TodosList from "./components/todos-list";
import AddTodo from "./components/add-todo";
import "./App.css";
import CompletedTodos from "./components/completed-todos";
import { useDispatch } from "react-redux";
import { addTodo as addTodoAction } from "./redux/todoSlice";

function App() {
  // the input of useSelector is a selector function.

  const dispatch = useDispatch();
  const addTodo = (newTodo) => {
    dispatch(addTodoAction(newTodo));
  };

  return (
    <div style={{ padding: "30px" }} className="App root">
      <AddTodo addTodo={addTodo} />
      <CompletedTodos />
      <TodosList />
    </div>
  );
}

export default App;
