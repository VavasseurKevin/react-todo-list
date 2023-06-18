import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";

const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const doneHandler = (todoId) => {
    const index = todos.findIndex(todo => todo.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done:!todos[index].done,
    }

    setTodos(duplicateTodos);
    console.log(todos)
  }

  const delHandler = (todoId) => {
    if(window.confirm("Êtes-vous sûr ?"))
    {
    const updatesTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatesTodos);
    console.log('Delete');
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([{id : Date.now(),title: todo, done:false},...todos]);
    console.log(todos);
  }

  return (
    <Layout>
      <Header/>
      <Form 
        todo={todo} 
        submit={submitHandler} 
        change={(e) => setTodo(e.target.value)}/>
      <Lists 
        done={doneHandler} 
        del={delHandler} 
        todos={todos}
        />
    </Layout>
  
  )
}

export default App