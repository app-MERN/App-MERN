import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const { email, password } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError(true);
      return;
    }
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={handleSubmit}
        >
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
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesión'
            />
          </div>
        </form>
        <Link to='/nueva-cuenta' className='enlace-cuenta'>
          Nueva Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
