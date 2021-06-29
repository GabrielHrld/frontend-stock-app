import React from 'react';
import styled from 'styled-components';

const InputSearchBar = () => {
  return (
    <InputWrapper>
      <Input type="text" />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
`;

export default InputSearchBar;
