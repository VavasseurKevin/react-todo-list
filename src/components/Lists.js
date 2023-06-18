import React from 'react'
import ListItem from './ListItem'

export const Lists = ({done, del, todos}) => {
  
  if(todos.length <=0) {
    return (
      <div className='jumbotron text-center'>
        <h1 className='text-danger'>Tâche non trouvée !</h1>
        <h4>Ajoutez votre tâche !</h4>
      </div>
    )
  }

  return (
    <div className='listWrap'>
        <ul className='list-group'>
          {todos && todos.map((todo) => (
           <ListItem 
              key={todo.id} 
              id={todo.id}
              title={todo.title} 
              delHandler={del} 
              doneHandler={done}
              done={todo.done}  
              />
           ))}
        </ul>
    </div>
  )
}

export default Lists
