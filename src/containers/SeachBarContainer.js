import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import InputSearchBar from '../components/InputSearchBar';
import { Button } from '../components/Button';

const SeachBarContainer = () => {
  return (
    <BarWrapper>
      <BarTitle>Símbolo</BarTitle>
      <InputSearchBar />
      <Button>Agregar símbolo</Button>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #c5c5c5;
`;

const BarTitle = styled.p`
  padding: 0.5rem;
`;

export default SeachBarContainer;
