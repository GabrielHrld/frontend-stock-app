import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

import InputSearchBar from '../components/InputSearchBar';
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const SeachBarContainer = ({ stocks }) => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const printValue = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
    console.log();
  }, []);

  const filteredUsers = stocks.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <BarWrapper>
      <BarTitle>Símbolo</BarTitle>
      <InputSearchBar
        state={search}
        setState={setSearch}
        handleSearch={handleSearch}
        filteredUsers={filteredUsers}
        reference={searchInput}
      />
      {/* <Button onClick={printValue}>Agregar símbolo</Button> */}
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

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
  };
};

export default connect(mapStateToProps, null)(SeachBarContainer);
