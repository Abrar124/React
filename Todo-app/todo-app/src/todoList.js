import React from "react";
import "./App.css";


const TodoLists = (props) => {
  
  return (
    <div className="todo_style">
      <i className="del_button" aria-hidden="true" onClick={()=>{
          props.onSelect(props.id);
      }} />
      <li> {props.text}</li>
    </div>
  );
};
export default TodoLists;
