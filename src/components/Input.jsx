import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  }

  function handleClick() {
    props.onAdd(inputText);
    setInputText("");
  }

  return (
    <form className="form">
      <div className="circle-div">
        <span onClick={handleClick} className="circle"></span>
      </div>
      <input
        onChange={handleChange}
        placeholder="Create a new todo..."
        value={inputText}
        autoFocus
      />
    </form>
  );
}

export default Input;
