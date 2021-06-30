import React from 'react';
import styled from 'styled-components';

const Inputs = ({ type, name, state, setState, id, defaultChecked, label }) => {
  const onChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  return (
    <InputWrapper>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={state}
        defaultChecked={defaultChecked}
      />
      <Label htmlFor={id}>{label}</Label>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  margin-left: 1rem;
`;

export default Inputs;
