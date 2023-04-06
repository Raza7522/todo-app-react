import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1>Todo</h1>
      <img
        className="toggle-icon"
        onClick={props.toggleTheme}
        src={props.isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
      />
    </header>
  );
}

export default Header;
