import React, { useState } from 'react';
import Todo from './Todo';

type TodoType = {
  id: number;
  title: string;
  createdAt: Date;
  isDone: boolean;
};

let maxId = 0;
function TodoList() {
  const [title, setTitle] = useState('');
  const [todos, setTodo] = useState<TodoType[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.nativeEvent.isComposing || e.key != 'Enter') return;
    e.preventDefault();
    setTodo((prev) => [
      ...prev,
      {
        id: maxId++,
        title: title,
        createdAt: new Date(),
        isDone: false,
      },
    ]);
    setTitle('');
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(maxId);
    setTodo((prev) => [
      ...prev,
      {
        id: maxId++,
        title: title,
        createdAt: new Date(),
        isDone: false,
      },
    ]);
    setTitle('');
  };

  const handleDone: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id == Number(e.currentTarget.dataset.id)) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTodo(
      todos.filter((todo) => todo.id != Number(e.currentTarget.dataset.id)),
    );
  };

  const [desc, setDesc] = useState(false);
  const handleSort = () => {
    const copy = [...todos];
    setTodo(
      copy.sort((m, n) => {
        if (desc) {
          return n.createdAt.getTime() - m.createdAt.getTime();
        } else {
          return m.createdAt.getTime() - n.createdAt.getTime();
        }
      }),
    );
    setDesc((prev) => !prev);
  };

  return (
    <>
      <h1 className="text-3xl">Todo List</h1>
      <form className="mt-3">
        <label htmlFor="todo">タスクを入力:</label>
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleSubmit}
          value={title}
          className="border border-black p-1"
        />
        <button
          type="button"
          onClick={handleClick}
          className="bg-slate-500 p-2 text-white rounded-md ml-3 "
        >
          追加
        </button>
      </form>
      <p className="m-3">{title}</p>
      <button
        type="button"
        onClick={handleSort}
        className="border border-gray-500 p-2"
      >
        そーと
      </button>
      <div>
        <ul className="space-y-5">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              id={todo.id}
              isDone={todo.isDone}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
