import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { config } from '../utils/config';

const InputSearchBar = ({
  state,
  handleSearch,
  filteredUsers,
  reference,
  fetching,
}) => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log(fetching);

  const handleModal = (setState) => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 1500);
    setTimeout(() => history.go(0), 1800);
  };

  const postStock = async (e, name, symbol, currency) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${config.BackendUrl}/api/users/stocks`,
        { name, symbol, currency },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikw2MXRTV0NrZ29WN2hqUDR5WE1UOU9ma18iLCJ1c2VybmFtZSI6InBydWViYSIsImlhdCI6MTYyNTA3MzQ0MX0.z2-oWqOTqgk7Z8CjDoMJ8XICTzEEQA4zHI_sTM-M4G0`,
          },
        }
      );

      console.log(res);
      await handleModal(setSuccess);
    } catch (err) {
      console.log({ err });
      const { status, body } = err.response.data;
      if (status == 400 && body == 'La acción ya se encuentra añadida') {
        handleModal(setError);
        console.log('Ya la tenemos ');
      }
    }
    // return console.log({ name, symbol, currency });
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Buscar"
        value={state}
        onChange={handleSearch}
        ref={reference}
      />
      {/* render de la lista de búsqueda */}
      <Ul active={state == '' ? false : true}>
        {state == '' ? null : fetching ? (
          <h2>cargando...</h2>
        ) : (
          filteredUsers.map((item) => {
            return (
              <li value={item.symbol} key={`${item.name}${Math.random()}`}>
                <P>{item.name}</P>
                <P>{item.symbol}</P>
                <P>{item.currency}</P>
                <Add
                  onClick={(e) =>
                    postStock(e, item.name, item.symbol, item.currency)
                  }
                >
                  Añadir
                </Add>
              </li>
            );
          })
        )}
      </Ul>

      {/* Modales de error y success */}
      {error && (
        <ErrorModel activeModal={error} error="true">
          <span>La acción se encuentra añadida</span>
        </ErrorModel>
      )}
      {success && (
        <ErrorModel activeModal={success}>
          <span>Acción añadida con éxito </span>
        </ErrorModel>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1% 0;
  padding-left: 1.5rem;
  border: 1px solid #c5c5c5cc;
  border-radius: 25px;
  outline: none;
`;

const Ul = styled.ul`
  position: absolute;
  top: 105%;
  width: 100%;
  min-width: 260px;
  max-height: 300px;
  overflow: scroll;
  background: #fefefe;
  display: ${({ active }) => (active ? 'initial' : 'none')};
  border: 1px solid #c5c5c5;
  border-radius: 15px;
  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    padding: 0.4rem 0.6rem;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    /* justify-content: space-between; */
    width: 100%;
    border-bottom: 1px solid #c5c5c5;
  }

  @media screen and (max-width: 708px) {
    left: -25%;
  }
  @media screen and (max-width: 600px) {
    left: -39%;
  }
`;

const Add = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const P = styled.p``;

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

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
  };
};

export default connect(mapStateToProps, null)(InputSearchBar);
