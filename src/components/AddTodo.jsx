import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/features/todo/todoSlice";

function AddTodo() {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault;
    dispatch(
      addTodo({
        title: title,
      })
    );
  };

  return (
    <div>
      <h3>Add todo:</h3>
      <input type="text" value={title} onChange={handleTitleChange} />
      <button type="submit" onClick={handleAddTodo}>
        add todo
      </button>
    </div>
  );
}

export default AddTodo;
