import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { config } from '../utils/config';

import Spinner from '../components/SpinnerLoading';
import { connect } from 'react-redux';

const Table = ({ user }) => {
  const history = useHistory();
  const [favStocks, setFavStocks] = useState([]);
  const [handleFetch, setHandleFetch] = useState(false);
  const [loading, setLoading] = useState();

  const deleteStock = async (e, symbol, currency) => {
    if (confirm('¿Seguro desea eliminar la acción?')) {
      try {
        const res = await axios.delete(
          `${config.BackendUrl}/api/users/stocks`,
          {
            //bearer token
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
            //datos que pide el servidor para eliminar
            data: {
              symbol,
              currency,
            },
          }
        );

        //Medio segundo después de eliminar, re renderizamos el componente
        setTimeout(() => setHandleFetch(!handleFetch), 500);
      } catch (error) {
        console.log({ error });
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `${config.BackendUrl}/api/users/stocks/${user.id}`
        );
        console.log(res);
        setFavStocks(res.data.body);
        setLoading(false);
      } catch (error) {}
    };

    fetchApi();
  }, [handleFetch]);

  if (loading) return <Spinner />;
  return (
    <TableComponent>
      <TableHeader>
        <tr>
          <th>Símbolo</th>
          <th>Nombre</th>
          <th>Moneda</th>
          <th> </th>
        </tr>
      </TableHeader>
      <tbody>
        {favStocks.map((stock) => {
          return (
            <TableRow key={stock.id}>
              <td>
                <Link to={`/details/${stock.symbol}`}>{stock.symbol}</Link>
              </td>
              <td>{stock.name}</td>
              <td>{stock.currency}</td>
              <td>
                <Delete
                  onClick={(e) => deleteStock(e, stock.symbol, stock.currency)}
                >
                  Eliminar
                </Delete>
              </td>
            </TableRow>
          );
        })}
      </tbody>
    </TableComponent>
  );
};

const TableComponent = styled.table`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 90%;
  margin: 1rem auto;
  &,
  th,
  td {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-collapse: collapse;
  }
`;

const TableHeader = styled.thead`
  background: #c5c5c5;
  & th {
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 1% 0;
  }
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background: rgba(197, 197, 197, 0.5);
  }
  & td {
    padding: 0.8% 0;
    text-align: center;
    a {
      font-weight: bold;
      color: #2e3ddc;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Delete = styled.p`
  font-weight: bold;
  color: red;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Table);
