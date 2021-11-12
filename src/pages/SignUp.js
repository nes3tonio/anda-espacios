import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      navigate('/new-user');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor='password'>
          Password:
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='password2'>
          Repite la password:
          <input
            type='password'
            id='password2'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>

        <button>Registrar usuario</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </>
  );
}

export default SignUp;
