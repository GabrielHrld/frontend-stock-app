import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SearchBox from '../containers/SearchBox';

const MyStocksPage = () => {
  return (
    <StocksWrapper>
      <SearchBox />
    </StocksWrapper>
  );
};

const StocksWrapper = styled.section`
  width: 100%;
  padding: 0rem calc((100vw - 1400px) / 2);
`;

export default MyStocksPage;
