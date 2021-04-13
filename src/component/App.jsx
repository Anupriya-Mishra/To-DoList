import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import ToDo from "./ToDo";
import { useState } from "react";
function App()
{
  
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setfilteredTodos]=useState([]);
  
  useEffect(()=> {
    filterHandler();
  },[todos,status]);
  const filterHandler=() =>{
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  return <div>
  <Header/>
  <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} status={status} setStatus={setStatus} />
  <Footer />
  <ToDo filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}  />
  </div>
}

export default App;
