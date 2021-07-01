import React from 'react';
import styled from 'styled-components';

const DateTimeContainer = ({ id, label, type, setState, state }) => {
  const handleDate = (e) => {
    const date = e.target.value.slice(0, 10);
    const time = e.target.value.slice(11, 16);

    setState({ ...state, [e.target.id]: `${date}%20${time}` });
  };

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input type={type} onChange={handleDate} id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  margin-top: 0.6rem;
`;

export default DateTimeContainer;
