import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Form from "./components/Form";
import axios from "axios";

const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  //Get todos List from LocalStorage
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos'))

    if (getTodos) {
      setTodos(getTodos);
    }
  }, [])

  // Fetch todos from the API
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Saving the tasks
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  // Toggling the "done" status of a todo item
  const doneHandler = (todoId) => {
    const index = todos.findIndex(todo => todo.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(duplicateTodos);
    console.log(todos)
  }


  const delHandler = (todoId) => {
    if (window.confirm("Êtes-vous sûr ?")) {
      // Send the DELETE request to the API
      axios
        .delete(`http://localhost:3000/todos/${todoId}`)
        .then((response) => {
          if (response.status === 200) {
            setTodos((prevTodos) => {
              // Update the todos state by removing the corresponding todo.
              const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
              console.log("Delete");
              return updatedTodos;
            });
          } else {
            console.error("La requête de suppression a échoué :", response);
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de la tâche :", error);
        });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.length < 5) {
      setError("Une tâche doit contenir au minimum 5 caractères !");
      return false;
    }
    // Using Axios to make a POST request to the fictional API
    axios
      .post("http://localhost:3000/todos", { title: todo })
      .then((response) => {
        setTodo("");
        console.log(response.data);
        // Call fetchTodos to refresh the list after successful addition
        fetchTodos();
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  return (
    <Layout>
      <Header />
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