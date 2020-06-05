import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function TaskForm(props) {
  return (
    <Form className="my-4" onSubmit={props.handleSubmit}>
      <Form.Row>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Add task"
            value={props.text}
            onChange={props.handleTextChange}
          />
          <InputGroup.Append>
            <Button type="submit" disabled={!props.text}>
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Row>
    </Form>
  );
}
