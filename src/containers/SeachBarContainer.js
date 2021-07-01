import React, { useRef } from 'react';
import styled from 'styled-components';

import InputSearchBar from '../components/InputSearchBar';

const SeachBarContainer = () => {
  const searchInput = useRef(null);

  return (
    <BarWrapper>
      <BarTitle>Símbolo</BarTitle>
      <InputSearchBar reference={searchInput} />
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
