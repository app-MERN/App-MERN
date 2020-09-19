import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  });

  const [error, setError] = useState(false);

  const { nombre, email, password, confirmar } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === ''
      || email.trim() === ''
      || password.trim() === ''
      || confirmar.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Crear Cuenta</h1>

        <form
          onSubmit={handleSubmit}
        >

          <div className='campo-form'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              value={nombre}
              placeholder='Tu Nombre'
              onChange={handleChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Tu Email'
              onChange={handleChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='password'>password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Tu Password'
              onChange={handleChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='confirmar'>Confirmar Password</label>
            <input
              type='password'
              id='confirmar'
              name='confirmar'
              value={confirmar}
              placeholder='Repetir Password'
              onChange={handleChange}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Registrar'
            />
          </div>
        </form>
        <Link to='/' className='enlace-cuenta'>
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
