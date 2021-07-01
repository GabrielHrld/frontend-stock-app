import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { config } from '../utils/config';
import { connect } from 'react-redux';

const StockList = ({ item, setError, setSuccess, user }) => {
  const history = useHistory();
  console.log('stocklist');

  const handleModal = (setState) => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 1500);
  };

  const postStock = async (e, name, symbol, currency) => {
    e.preventDefault();
    console.log(name, symbol, currency);
    try {
      const res = await axios.post(
        `${config.BackendUrl}/api/users/stocks`,
        //datos solicitados por el servidor para crear
        { name, symbol, currency },
        {
          headers: {
            //bearer token
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      await handleModal(setSuccess);
      setTimeout(() => history.go(0), 1800);
    } catch (err) {
      console.log({ err });
      const { status, body } = err.response.data;
      if (status == 400 && body == 'La acción ya se encuentra añadida') {
        handleModal(setError);
        console.log('Ya la tenemos ');
      }
    }
  };

  return (
    <li value={item.symbol} key={`${item.name}${Math.random()}`}>
      <P>{item.name}</P>
      <P>{item.symbol}</P>
      <P>{item.currency}</P>
      <Add onClick={(e) => postStock(e, item.name, item.symbol, item.currency)}>
        Añadir
      </Add>
    </li>
  );
};

const Add = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const P = styled.p``;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(StockList);
