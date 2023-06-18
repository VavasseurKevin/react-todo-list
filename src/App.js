import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";

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
      <Lists done={doneHandler} del={delHandler}/>
    </Layout>
  
  )
}

export default App