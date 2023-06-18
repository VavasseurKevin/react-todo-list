import React from 'react'

export const Form = () => {
  return (
    <div className='form-group row'>
        <div className='col-8'>
            <input type='text' className='form-control-plaintext'/>
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
