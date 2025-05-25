import { useState } from "react";
import "./App.css";
import { Todo } from "./model";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now().toString(), todo, isDone: false }]);
    }
  };

  return (
    <div className="App">
      <div className="heading">taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
