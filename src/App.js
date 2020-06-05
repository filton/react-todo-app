import React, { useState } from "react";
import uniqueString from "unique-string";
import "./styles.css";
import { TaskForm } from "./components/TaskForm";
import { FilterForm } from "./components/FilterForm";
import { TaskList } from "./components/TaskList";
import Button from "react-bootstrap/Button";
import { VISIBILITY_TYPES } from "./constants";
import { Redirect } from "react-router";

const DEFAULT_FILTER_VALUE = VISIBILITY_TYPES.ALL;

export default function App(props) {
  const [taskList, setTaskList] = useState([]);
  const filter = props.match.params.filter;

  if (!Object.values(VISIBILITY_TYPES).includes(filter)) {
    return <Redirect to={`/${DEFAULT_FILTER_VALUE}`} />;
  }

  const handleSubmit = (text) => {
    const task = {
      id: uniqueString(),
      text,
      isDone: false,
    };

    setTaskList([...taskList, task]);
  };

  const handleTaskDelete = (id) => {
    const index = taskList.findIndex((task) => task.id === id);

    if (index < 0) return;

    setTaskList([...taskList.slice(0, index), ...taskList.slice(index + 1)]);
  };

  const handleTaskStatus = (id) => {
    const index = taskList.findIndex((task) => task.id === id);

    if (index < 0) return;

    const task = taskList[index];

    setTaskList([
      ...taskList.slice(0, index),
      { ...task, isDone: !task.isDone },
      ...taskList.slice(index + 1),
    ]);
  };

  const handleClearTask = (event) => {
    setTaskList([...taskList.filter((task) => !task.isDone)]);
  };

  const filteredTaskList = taskList.filter((task) => {
    switch (filter) {
      case "active":
        return !task.isDone;
      case "done":
        return task.isDone;
      default:
        return task;
    }
  });

  return (
    <div className="container my-4 text-center">
      <FilterForm defaultFilterValue={DEFAULT_FILTER_VALUE} />

      <TaskForm handleSubmit={handleSubmit} />

      <Button
        onClick={handleClearTask}
        disabled={!taskList.filter((task) => task.isDone).length}
      >
        Clear all completed tasks
      </Button>

      <TaskList
        taskList={filteredTaskList}
        handleDelete={handleTaskDelete}
        handleStatusChange={handleTaskStatus}
      />
    </div>
  );
}
