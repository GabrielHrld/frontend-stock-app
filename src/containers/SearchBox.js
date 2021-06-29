import React from 'react';
import styled from 'styled-components';

import SearchBarContainer from './SeachBarContainer';
import Table from './Table';

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <SearchBarContainer />
      <Table />
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  min-width: 300px;
  width: 50%;
  margin: 0 auto;
  height: 400px;
  border: 1px solid red;
  border-radius: 10px;
`;

export default SearchBox;
