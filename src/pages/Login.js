import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import InputForm from '../components/InputForm';
import { Button } from '../components/Button';
import { config } from '../utils/config';

const INVALID_DATA = 'Información inválida';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({ field: '', valid: false });

  const sendData = async () => {
    if (!username || !password) {
      return setError({
        field: 'Complete todos los campos, por favor',
        valid: true,
      });
    }
    try {
      const res = await axios.post(
        `${config.BackendUrl}/api/auth/login`,
        {
          username,
          password,
        },
        {
          headers: {
            Authorization: 'application/json',
          },
        }
      );
      console.log(res);
      //ERRORES
    } catch (error) {
      const { body, status } = error.response.data;
      if (body == INVALID_DATA && status == 400) {
        setError({ field: 'Usuario o clave inválida' });
      }
    }
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginCard>
          <h2>Ingresar</h2>

          <CardItemsContainer>
            <InputForm
              label="Usuario"
              type="text"
              placeholder="username"
              state={username}
              setState={setUsername}
              id="username"
            />
            <InputForm
              label="Clave"
              type="password"
              placeholder="********"
              state={password}
              setState={setPassword}
              id="password"
            />

            {error && <p style={{ color: 'red' }}>{error.field}</p>}

            <Button onClick={sendData}>Ingresar</Button>

            <span style={{ marginTop: '.5rem' }}>
              ¿No tenés cuenta?{' '}
              <Link to="/register" style={{ color: 'blue' }}>
                Crear una
              </Link>
            </span>
          </CardItemsContainer>
        </LoginCard>
      </LoginContainer>
      <Background />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: calc(100vh - 80px);
`;

const Background = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: repeat-y center/100%
    url('http://vskills.in/certification/blog/wp-content/uploads/2015/01/why-do-stock-prices-change-frequently.jpg');
  /* background: url('http://vskills.in/certification/blog/wp-content/uploads/2015/01/why-do-stock-prices-change-frequently.jpg');
  background-repeat: no-repeat; */
  filter: blur(3px);
`;

const LoginContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 calc((100vw - 1400px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  min-height: 300px;
  min-width: 280px;
  height: 60%;
  width: 25%;
  background: #fefefe;
  border-radius: 20px;
  box-shadow: 0px 5px 4px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
  & label {
    margin-bottom: 0.5rem;
  }

  & h2 {
    text-align: center;
  }
`;

const CardItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.6rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  outline: none;
`;

const Input = styled.input`
  border-radius: 25px;
  border: 1px solid #c5c5c5cc;
  outline: none;
  height: 35px;
  padding-left: 15px;
`;
export default Login;
