import React, { useState } from "react";
import TaskFormComponent from "./TaskForm.component";

export default function TaskForm(props) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof props.handleSubmit === "function") {
      props.handleSubmit(text);
    }

    setText("");
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <TaskFormComponent
      handleSubmit={handleSubmit}
      handleTextChange={handleTextChange}
      text={text}
    />
  );
}
