import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = () => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">Coding</div>

          <div>
            <button className="button-delete">Delete</button>
            <button className="button-delete">Done</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;