import React from "react";

function TodoItem(props) {
  function handleClick() {
    props.onCompleted(props.id);
  }

  return (
    <div className={`todo-item ${props.todoState ? "completed" : ""}`}>
      <div className="circle-div">
        <span onClick={handleClick} className="circle">
          {props.todoState && <img src={"/images/icon-check.svg"} />}
        </span>
      </div>
      <li>{props.todoText}</li>
      <img
        onClick={() => {
          props.onChecked(props.id);
        }}
        src={"/images/icon-cross.svg"}
      />
    </div>
  );
}

export default TodoItem;
