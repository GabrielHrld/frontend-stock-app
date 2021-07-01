import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';

import StockList from './StockList';

const InputSearchBar = ({ reference }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.twelvedata.com/stocks?symbol=${query}&country=united%20states&source=docs`
        );
        console.log(res.data.data);
        setResult(res.data.data);
        setLoading(false);
        // setStocks(res.data.data);
        // handleFetching();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleChange}
        ref={reference}
      />
      {/* render de la lista de búsqueda */}
      <Ul active={query == '' ? false : true}>
        {loading ? (
          <h2>cargando...</h2>
        ) : result.length == 0 ? (
          <h2>El símbolo no coincide con ninguna acción</h2>
        ) : (
          result.map((item) => {
            return (
              <StockList
                item={item}
                setError={setError}
                setSuccess={setSuccess}
              />
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
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(React.memo(InputSearchBar));
