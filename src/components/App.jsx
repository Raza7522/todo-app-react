import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Input from "./Input";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import Footer from "./Footer";
import TodoFilter from "./TodoFilter";
import {v4} from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [isDark, setIsDark] = useState(true);
  const [status, setStatus] = useState("All");
  const [filteredTodo, setFilteredTodo] = useState([]);

  const itemsLeft = todos.length;


  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      setIsDark(false);
    } else {
      setTheme("dark");
      setIsDark(true);
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  useEffect(() => {
    changeStatus(status);
    console.log(filteredTodo)
  }, [todos, status]);


  function changeStatus(filterValue){
    setStatus(filterValue);
    switch(status){
      case "Completed" :
        setFilteredTodo(todos.filter(item=> item.completed === true));
        break;
      case "Active" :
        setFilteredTodo(todos.filter(item=> item.completed === false));
        break;
      case "All" :
        setFilteredTodo(todos);
    }
  }


  function addTodos(inputText){
    setTodos(prevItems => {
      return [
        ...prevItems,
        {text: inputText, completed: false, id: v4()}
      ];
    });
  }


  function deleteTodo(id) {
    setTodos((prevItems) => {
      return prevItems.filter(item => {
        return item.id !== id;
      });
    });
  }


  function changeCompleted(id){
    setTodos(prevTodos => {
      return prevTodos.map(item => {
        if(item.id === id){
          return {
            ...item,
            completed : !(item.completed)
          }
        }
        return item;
      })
    })
  }


  function deleteCompleted(){
    setTodos(prevItems => {
      return prevItems.filter(item => {
        return item.completed === false;
      })
    });
  }


  return (
    <div>
      <Banner isDark={isDark} />

      <div className="container">

        <Header theme={theme} isDark={isDark} toggleTheme={toggleTheme} />

        <Input onAdd={addTodos} />

        <div className="todo-list">

          <ul>
            {filteredTodo.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                todoText={todo.text}
                todoState={todo.completed}
                onChecked={deleteTodo}
                onCompleted={changeCompleted}
              />
            ))}
          </ul>

          <TodoInfo itemsLeft={itemsLeft} onDelete={deleteCompleted} />
        </div>

        <TodoFilter status={status} onFilter={changeStatus} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
