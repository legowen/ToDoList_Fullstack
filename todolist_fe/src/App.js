import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";
import api from "./utils/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const getTasks = async () => {
    const response = await api.get('/tasks');
    console.log("rrrr", response);
    setTodoList(response.data.data);
  };

  useEffect( () => {
    getTasks();
  }, []);

  const addTask = async () => {
    try{
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("success")
        setTodoValue("");
           // After add Task, clear the input box
        getTasks();
          // After update Tasks, call "getTask" Function to update List
      } else {
        throw new Error("task can not be added")
      }   // If() {} else {} => Check server status is 200 else show Error msg
    } catch(error) {
      console.log("error", error)
    }
  };
  //add Task Function, send task to backend, database

  const deleteItem = async (id) => {
    try {
      console.log(id);
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
    //Able to Delete Task items

  const toggleComplete = async (id) => {
    try {
      const task = todoList.find((item) => item._id === id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task.isComplete,
      });
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
// Able to change List's status, if task is done, turn to grey 
  
  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="Have a nice day, Okay?"
            className="input-box"
            value = {todoValue}
            onChange = {(event) => setTodoValue(event.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick = {addTask}>
            Add
          </button>
        </Col>
      </Row>

      <TodoBoard 
        todoList = {todoList}
        deleteItem={deleteItem}
        toggleCOmplete= {toggleComplete}
      />
    </Container>
  );
}

export default App;
