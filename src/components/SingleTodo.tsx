import React, { useState, useRef, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const EditIcon = AiFillEdit as unknown as React.FC;
const DeleteIcon = MdDelete as unknown as React.FC;
const DoneIcon = MdDone as unknown as React.FC;

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const editRef = useRef<HTMLInputElement>(null);



  const handleDelete = (id: string): void => {
    const todoList = todos.filter((todo) => todo.id !== id);
    setTodos(todoList);
  };
  useEffect(() => {
    editRef.current?.focus();
  }, [edit]);
  const handleDone = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleEdit = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ): void => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form
      className="single_todo"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          type="text"
          ref={editRef}
          value={editTodo}
          className="todo_edit_text"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo_text">{todo.todo}</s>
      ) : (
        <span className="todo_text">{todo.todo}</span>
      )}

      <div className="todo_icons">
        <span
          className="icon"
          onClick={() => {
            if (todo && !todo.isDone) {
              setEdit(!edit);
              //   editRef.current.focuse()
            }
          }}
        >
          <EditIcon />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <DoneIcon />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
