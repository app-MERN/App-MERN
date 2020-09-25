import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext)
  const { proyectoz } = proyectosContext

  const tareasContext = useContext(TareaContext)
  const {
    errortarea,
    tareaseleccionada,
    validarTarea,
    addTarea,
    getTareas,
    actualizartarea,
  } = tareasContext

  useEffect(() => {
    if (tareaseleccionada !== null) {
      setTarea(tareaseleccionada)
    } else {
      setTarea({ nombre: '' })
    }
  }, [tareaseleccionada])

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

    if (nombre.trim() === '') {
      validarTarea()
      return
    }

    if (tareaseleccionada === null) {
      tarea.proyectoId = proyectoActual.id
      tarea.estado = false
      addTarea(tarea)
    } else {
      actualizartarea(tarea)
    }

    getTareas(proyectoActual.id)

    setTarea({ nombre: '' })
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
            value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>

      { errortarea
        ? <p className='mensaje error'>El nombre de la Tarea es Obligatorio</p>
        : null}

    </div>
  )
}

export default FormTarea
