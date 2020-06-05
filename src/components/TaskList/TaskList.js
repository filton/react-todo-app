import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class TaskList extends React.Component {
  render() {
    const { taskList, handleStatusChange, handleDelete } = this.props;

    if (taskList.length === 0) {
      return <div className="my-4 text-center">Task list is empty</div>;
    }

    return (
      <ListGroup className="my-4">
        {taskList.map((task) => (
          <ListGroup.Item
            key={task.id}
            className={task.isDone ? "todo-item done" : "todo-item"}
          >
            <span className="todo-item__text">
              <Form.Check
                type="checkbox"
                onChange={() => handleStatusChange(task.id)}
                checked={task.isDone}
                label={task.text}
                id={task.id}
              />
            </span>
            <span className="todo-item__button">
              <Button variant="danger" onClick={() => handleDelete(task.id)}>
                X
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
