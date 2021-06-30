import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import InputSearchBar from '../components/InputSearchBar';
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SeachBarContainer = ({ stocks }) => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');

  // const stock = useSelector((state) => state.stocks);
  const printValue = (e) => {
    console.log(inputValue);
    e.preventDefault();
    axios
      .get(
        `https://api.twelvedata.com/stocks?source=docs&symbol=${inputValue}&country=united%20states`
      )
      .then((res) => {
        console.log(res.data.data);
      });

    // history.push('/mis-acciones');
    // console.log(inputValue);
  };

  useEffect(() => {}, []);

  return (
    <BarWrapper>
      <BarTitle>Símbolo</BarTitle>
      <InputSearchBar state={inputValue} setState={setInputValue} />
      <Button onClick={printValue}>Agregar símbolo</Button>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid #c5c5c5;
`;

const BarTitle = styled.p`
  padding: 0.5rem;
`;

export default SeachBarContainer;
