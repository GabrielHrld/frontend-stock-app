import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

let title = '';
const Header = ({ user }) => {
  const history = useHistory();
  const path = useLocation().pathname;
  const [stock, setStock] = useState({});
  const [hasStock, setHasStock] = useState(false);

  console.log(user.name);

  if (path != '/') {
    title = 'Mis acciones';
  } else {
    title = 'Mis acciones App';
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    history.push('/');
    setTimeout(() => history.go(0), 5);
  };

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
  }, [path, hasStock, user]);

  return (
    <NavWrapper>
      <NavContainer>
        {path.includes('/details/') ? (
          !hasStock ? (
            <Title to="/mis-acciones">{title}</Title>
          ) : (
            <Title to="/mis-acciones">{`${stock.symbol} - ${stock.name} - ${stock.currency}`}</Title>
          )
        ) : (
          <Title to="/">{title}</Title>
        )}
        {user.name !== undefined ? (
          <UserContainer>
            <span>Usuario:</span>
            <span>{user.name}</span>
            <Logout onClick={handleLogout}>Cerrar sesión</Logout>
          </UserContainer>
        ) : null}
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

const Logout = styled.p`
  color: #2a2b2c;
  text-decoration: none;
  font-weight: bold;
  padding: 0 1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
