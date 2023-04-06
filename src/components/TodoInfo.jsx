import React from "react";

function TodoInfo(props) {
  return (
    <div className="todo-info">
      <p>{props.itemsLeft} items left</p>
      <p onClick={props.onDelete} className="clear-btn">
        Clear Completed
      </p>
    </div>
  );
}

export default TodoInfo;
