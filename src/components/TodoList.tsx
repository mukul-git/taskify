import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      <div className="todo_container">
        <div className="todo_active">
          <span className="todo_active__heading">Active Tasks</span>
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
