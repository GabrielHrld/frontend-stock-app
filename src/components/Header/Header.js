import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const path = useLocation().pathname;

  useEffect(() => {}, [path]);

  return (
    <NavWrapper>
      <NavContainer>
        <Title>Mis acciones</Title>
        <UserContainer>
          <span>Usuario:</span>
          <span>Juan</span>
        </UserContainer>
      </NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid grey;
`;

const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0rem calc((100vw - 1400px) / 2);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  padding-left: 1rem;
`;

const UserContainer = styled.div`
  display: flex;
  padding-right: 1rem;

  & span:nth-child(1) {
    padding-right: 0.5rem;
  }
`;

export default Header;
