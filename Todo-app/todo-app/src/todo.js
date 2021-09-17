import "./App.css";
import React, { useState } from "react";
import TodoLists from "./todoList";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  const [inputList, SetInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    SetInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    SetInputList("");
  };

  const deleteItems = (id) => {
    console.log("item is deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div container">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          type="text"
          placeholder="Your text here"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map((itemVal, index) => {
            return (
              <TodoLists
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
