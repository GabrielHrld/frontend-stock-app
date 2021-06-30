import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const path = useLocation().pathname;
  const [stock, setStock] = useState({});
  const [hasStock, setHasStock] = useState(false);

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
            if (res.data.data == false) {
              setHasStock(false);
            } else {
              setHasStock(true);
              setStock(res.data.data[0]);
            }
          })
          .catch((error) => {
            setHasStock(false);
          });
      };
      fetchData();
    }
  }, [path, hasStock]);

  return (
    <NavWrapper>
      <NavContainer>
        {path.includes('/details/') ? (
          !hasStock ? (
            <Title to="/mis-acciones">Mis acciones</Title>
          ) : (
            <Title to="/mis-acciones">{`${stock.symbol} - ${stock.name} - ${stock.currency}`}</Title>
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
  background: #fefefe;
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
  font-size: 6vw;
  padding-left: 1rem;
  text-decoration: none;
  color: #2a2b2c;
  @media screen and (min-width: 768px) {
    font-size: 3vw;
  }
`;

const UserContainer = styled.div`
  display: flex;
  padding-right: 1rem;

  & span:nth-child(1) {
    padding-right: 0.5rem;
  }
`;

export default Header;
