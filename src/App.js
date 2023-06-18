import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";

const App = () => {

  const doneHandler = () => {
    console.log('Done')
  }

  const delHandler = () => {
    console.log('Delete')
  }

  return (
    <Layout>
      <Header/>
      <Form/>
      <Lists done={doneHandler} del={delHandler}/>
    </Layout>
  
  )
}

export default App