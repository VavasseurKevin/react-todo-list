import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";

const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

   //Get todos List from LocalStorage
   useEffect(()=>{
    const getTodos = JSON.parse(localStorage.getItem('todos'))

    if(getTodos) {
      setTodos(getTodos);
    }
  }, [])

  // Saving the tasks
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

    if (todo.length < 5)
    {
      setError("Une tâche doit contenir au minimum 5 caractères !");
      return false;
    }
    setTodos([{id : Date.now(),title: todo, done:false},...todos]);

    setError(null);

    setTodo(" ");

    console.log(todos);
  }

  return (
    <Layout>
      <Header/>
      <Form 
        todo={todo} 
        submit={submitHandler} 
        change={(e) => setTodo(e.target.value)}
        error={error}
        />
      <Lists 
        done={doneHandler} 
        del={delHandler} 
        todos={todos}
        />
    </Layout>
  
  )
}

export default App