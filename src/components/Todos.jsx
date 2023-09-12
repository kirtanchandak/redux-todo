import React from "react";
import { useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <div>
          <h4>{todo.title}</h4>
        </div>
      ))}
    </>
  );
}

export default Todos;
