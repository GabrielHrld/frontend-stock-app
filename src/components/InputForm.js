import React from 'react';
import styled from 'styled-components';

const InputForm = ({ state, setState, label, id, placeholder, type }) => {
  const onChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={state}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  outline: none;
`;

const Input = styled.input`
  border-radius: 25px;
  border: 1px solid #c5c5c5cc;
  outline: none;
  height: 35px;
  padding-left: 15px;
`;

export default InputForm;
