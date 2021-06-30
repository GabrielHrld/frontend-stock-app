import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBarContainer from './SeachBarContainer';
import Table from './Table';

const SearchBox = ({ stocks }) => {
  console.log(stocks);

  return (
    <SearchBoxWrapper>
      <SearchBarContainer />
      <Table />
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  padding: 1rem 0;
  min-width: 300px;
  width: 50%;
  margin: 0 auto;
  background: #fefefe;
  border-radius: 10px;
  margin: 2rem auto;
`;

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
  };
};

export default connect(mapStateToProps, null)(SearchBox);
