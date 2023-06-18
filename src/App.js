import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";

const App = () => {

  const [todo, setTodo] = useState('')

  const doneHandler = () => {
    console.log('Done')
  }

  const delHandler = () => {
    console.log('Delete')
  }

  return (
    <Layout>
      <Header/>
      <Form todo={todo}/>
      <Lists 
        done={doneHandler} 
        del={delHandler} 
        change={(e) => setTodo(e.target.value)}
        />
    </Layout>
  
  )
}

export default App