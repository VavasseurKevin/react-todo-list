import React from 'react'

export const Form = ({todo, change}) => {
  return (
    <div className='form-group row'>
        <div className='col-8'>
            <input type='text' className='form-control-plaintext' value={todo} onChange={change}/>
        </div>

        <div className='col-4'>
            <button type='submit' className='btn btn-success'>
                Ajouter une tâche
            </button>
        </div>
    </div>
  )
}

export default Form
