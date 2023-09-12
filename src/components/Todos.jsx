import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletetodo } from "../store/features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);

  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ display: "flex", gap: "25px", marginTop: "30px" }}
        >
          <h4>{todo.title}</h4>
          <button
            style={{ marginTop: "0px" }}
            onClick={() => dispatch(deletetodo(todo.id))}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
