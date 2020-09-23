import React, { useState, useContext } from 'react'

import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext)

  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    addProyecto,
    mostrarError,
  } = proyectosContext

  const [proyecto, setProyecto] = useState({ nombre: '' })

  const { nombre } = proyecto

  const handleChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre.trim() === '') {
      mostrarError()
      return
    }

    addProyecto(proyecto)

    setProyecto({ nombre: '' })
  }

  const handleClick = () => {
    mostrarFormulario()
  }

  return (
    <div>
      <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={handleClick}
      >
        Nuevo Proyecto
      </button>

      {formulario
        ? (
          <form
            onSubmit={handleSubmit}
            className='formulario-nuevo-proyecto'
          >
            <input
              type='text'
              className='input-text'
              name='nombre'
              value={nombre}
              placeholder='Nombre Proyecto'
              onChange={handleChangeProyecto}
            />

            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Agregar Proyecto'
            />
          </form>
        )

        : null}

      {errorformulario

        ? <p className='mensaje error'>El nombre es Obligatorio</p>

        : null}
    </div>
  )
}

export default NuevoProyecto
