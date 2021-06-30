import React from 'react';
import styled from 'styled-components';

const InputSearchBar = ({ state, setState }) => {
  const onChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Buscar"
        value={state}
        onChange={onChange}
      />
      <ul></ul>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 1% 0;
  padding-left: 1.5rem;
  border: 1px solid #c5c5c5cc;
  border-radius: 25px;
  outline: none;
`;

export default InputSearchBar;
