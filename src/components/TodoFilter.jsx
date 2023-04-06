import React from "react";

function TodoFilter(props) {
  function handleClick(e) {
    const filterValue = e.target.textContent;
    props.onFilter(filterValue);
  }

  return (
    <div className="todo-filter">
      <p
        className={props.status === "All" ? "active" : ""}
        onClick={handleClick}
      >
        All
      </p>
      <p
        className={props.status === "Active" ? "active" : ""}
        onClick={handleClick}
      >
        Active
      </p>
      <p
        className={props.status === "Completed" ? "active" : ""}
        onClick={handleClick}
      >
        Completed
      </p>
    </div>
  );
}

export default TodoFilter;
