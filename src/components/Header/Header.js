import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const path = useLocation().pathname;
  const [stock, setStock] = useState({});

  const pathVerify = path.includes('/details/');

  useEffect(() => {
    //Por algún motivo useParams no funciona y tengo que condicionar
    if (path.includes('/details/')) {
      const param = path.replace('/details/', '');

      const fetchData = () => {
        axios
          .get(
            `https://api.twelvedata.com/stocks?source=docs&symbol=${param}&country=united%20states`
          )
          .then((res) => {
            console.log(res.data.data[0]);
            setStock(res.data.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchData();
    }
  }, [path]);

  return (
    <NavWrapper>
      <NavContainer>
        {path.includes('/details/') ? (
          stock != {} ? (
            <Title>{`${stock.name} - ${stock.symbol} - ${stock.currency}`}</Title>
          ) : (
            <Title to="/mis-acciones"></Title>
          )
        ) : (
          <Title to="/mis-acciones">Mis acciones</Title>
        )}

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

const Title = styled(Link)`
  font-size: 3vw;
  padding-left: 1rem;
  text-decoration: none;
  color: #2a2b2c;
`;

const UserContainer = styled.div`
  display: flex;
  padding-right: 1rem;

  & span:nth-child(1) {
    padding-right: 0.5rem;
  }
`;

export default Header;
