import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Spinner from '../components/SpinnerLoading';

const Table = () => {
  const [favStocks, setFavStocks] = useState([]);
  const [loading, setLoading] = useState();

  console.log(favStocks);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/users/stocks/L61tSWCkgoV7hjP4yXMT9Ofk_'
        );
        setFavStocks(res.data.body);
        setLoading(false);
      } catch (error) {}
    };

    fetchApi();
  }, []);

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
                <Link to="/details/nflx">Eliminar</Link>
              </td>
            </TableRow>
          );
        })}
      </tbody>
    </TableComponent>
  );
};

const TableComponent = styled.table`
  width: 90%;
  margin: 1rem auto;
  &,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
`;

const TableHeader = styled.thead`
  background: #c5c5c5;
  & th {
    border: 1px solid black;
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
  }
`;

export default Table;
