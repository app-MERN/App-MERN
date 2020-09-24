import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyectoz } = proyectosContext

  if (!proyectoz) return null

  const [proyectoActual] = proyectoz

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='formulario'>
      <form
        onSubmit={handleSubmit}
      >
        <div
          className='contenedor-input'
        >
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Tarea...'
            name='nombre'
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primario btn-submit btn-block'
            value='Agregar Tarea'
          />
        </div>
      </form>
    </div>
  )
}

export default FormTarea
