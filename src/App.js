import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";

const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const doneHandler = () => {
    console.log('Done');
  }

  const delHandler = () => {
    console.log('Delete');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([{title: todo},...todos]);
    console.log(todos);
  }

  return (
    <Layout>
      <Header/>
      <Form todo={todo} submit={submitHandler} change={(e) => setTodo(e.target.value)}/>
      <Lists 
        done={doneHandler} 
        del={delHandler} 
        />
    </Layout>
  
  )
}

export default App