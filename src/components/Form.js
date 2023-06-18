import React from 'react'

export const Form = ({todo, change, submit, error}) => {
  return (
    <form onSubmit={submit}>
    <div className='form-group row'>
        <div className='col-9'>
            <input type='text' 
            className='form-control-plaintext' 
            placeholder='Que faire ?'
            value={todo} 
            onChange={change}/>
        </div>
        <div className='col-3'>
            <button type='submit' className='btn btn-success'>
                Ajouter tâche
            </button>
        </div>
        <div>
        {error && <small className='form-text text-danger ml-3'>{error}</small>}
</div>
    </div>
    </form>
  )
}

export default Form
