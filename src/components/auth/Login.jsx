import React from 'react';

const Login = () => {
  const handleChange = (e) => {

  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>

        <form>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
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

      </div>
    </div>
  );
};

export default Login;
