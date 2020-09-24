import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyectoz } = proyectosContext

  const tareasContext = useContext(TareaContext)
  const { addTarea } = tareasContext

  const [tarea, setTarea] = useState({ nombre: '' })

  const { nombre } = tarea

  if (!proyectoz) return null

  const [proyectoActual] = proyectoz

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    tarea.proyectoId = proyectoActual.id
    tarea.estado = false
    addTarea(tarea)
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
            value={nombre}
            onChange={handleChange}
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
