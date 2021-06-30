import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 25px;
  min-height: 35px;
  min-width: 90px;
  padding: 1% 2%;
  background: #fefefe;
  border: 1px solid #c5c5c5;
  outline: none;
  color: #2a2b2c;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    background: #2a2b2c;
    color: #fefefe;
  }
`;
