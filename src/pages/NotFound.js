import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <ItemsContainer>
          <h2>404 </h2>
          <h3>Not Found</h3>
          <p>La página que buscaba no se encuentra{' :('}</p>
        </ItemsContainer>
      </NotFoundContainer>{' '}
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
`;

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0rem calc((100vw - 1400px) / 2);
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-size: 6vw;
  }
  & h3 {
    font-size: 5vw;
  }
  & p {
    font-size: 2vw;
  }

  @media screen and (max-width: 678px) {
    & h2 {
      font-size: 9vw;
    }
    & h3 {
      font-size: 8vw;
    }
    & p {
      font-size: 5vw;
    }
  }
`;

export default NotFound;
