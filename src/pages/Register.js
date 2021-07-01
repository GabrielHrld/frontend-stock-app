import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory, Redirect } from 'react-router-dom';

import { config } from '../utils/config';

import { Button } from '../components/Button';
import InputForm from '../components/InputForm';
import axios from 'axios';

const MYSQL_UNIQUE_ERROR = 'Error: Duplicate entry';

const Register = () => {
  if (localStorage.getItem('user') != null) {
    return <Redirect to="/mis-acciones" />;
  }
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState({ field: '', valid: false });

  const [success, setSuccess] = useState(false);

  const handleModal = () => {
    setSuccess(true);

    setTimeout(() => setSuccess(false), 1000);
  };

  //FUNCIÓN PARA ENVIAR LOS DATOS
  const sendData = async () => {
    if (!username || !name || !lastname) {
      return setError({
        field: 'Complete todos los campos, por favor',
        valid: true,
      });
    }
    if (!password || !password2) {
      return setError({ field: 'Debe elegir una contraseña', valid: true });
    }
    if (password != password2) {
      return setError({
        field: 'Las contraseñas deberían coincidir',
        valid: true,
      });
    }
    try {
      //PETICIÓN AXIOS
      const res = await axios.post(
        `${config.BackendUrl}/api/users`,
        {
          username,
          name,
          lastname,
          password,
        },
        {
          headers: {
            Authorization: 'application/json',
          },
        }
      );
      handleModal();
      setTimeout(() => history.push('/'), 1500);
      // ERRORES
    } catch (error) {
      const { body, status } = error.response.data;
      if (body.includes(MYSQL_UNIQUE_ERROR) && status == 400) {
        setError({
          field: 'El usuario ya existe, por favor, elija otro',
          valid: true,
        });
      }
    }
  };

  return (
    <RegisterWrapper>
      <RegisterContainer>
        <RegisterCard>
          <h2>Registrarse</h2>
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
              label="Nombre"
              type="text"
              placeholder="Nombre"
              state={name}
              setState={setName}
              id="name"
            />

            <InputForm
              label="Apellido"
              type="text"
              placeholder="Apellido"
              state={lastname}
              setState={setLastname}
              id="lastname"
            />
            <InputForm
              label="Contraseña"
              type="password"
              placeholder="********"
              state={password}
              setState={setPassword}
              id="password"
            />
            <InputForm
              label="Confirmar contraseña"
              type="password"
              placeholder="********"
              state={password2}
              setState={setPassword2}
              id="password2"
            />

            {error.valid && <p style={{ color: 'red' }}>{error.field}</p>}
            <Button onClick={sendData}>Registrarse</Button>

            <span style={{ marginTop: '.5rem' }}>
              ¿Ya tenés cuenta?{' '}
              <Link to="/" style={{ color: 'blue' }}>
                Ingresar
              </Link>
            </span>
          </CardItemsContainer>
        </RegisterCard>
      </RegisterContainer>
      <Background />
      {success && (
        <ErrorModel activeModal={success}>
          <span>Usuario creado con éxito </span>
        </ErrorModel>
      )}
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
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

const RegisterContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 calc((100vw - 1400px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterCard = styled.div`
  min-height: 300px;
  min-width: 280px;
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

const ErrorModel = styled.div`
  position: fixed;
  transition: 1s all ease;
  top: ${({ activeModal }) => (activeModal ? '00%' : '-10%')};
  left: 0;
  width: 100vw;
  height: 80px;
  background: ${({ error }) => (error ? 'red' : 'green')};
  & span {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    & span {
      font-size: 6vw;
    }
  }
`;
export default Register;
