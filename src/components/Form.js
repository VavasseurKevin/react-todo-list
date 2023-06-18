import React from 'react'

export const Form = ({todo, change, submit, error}) => {
  return (
    <form onSubmit={submit}>
    <div className='form-group row'>
        <div className='col-8'>
            <input type='text' 
            className='form-control-plaintext' 
            placeholder='Que faire ?'
            value={todo} 
            onChange={change}/>
        </div>
        {error && <small className='form-text text-danger'>{error}</small>}

        <div className='col-4'>
            <button type='submit' className='btn btn-success'>
                Ajouter une tâche
            </button>
        </div>
    </div>
    </form>
  )
}

export default Form
