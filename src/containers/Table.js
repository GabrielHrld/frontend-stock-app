import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Table = () => {
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
        <TableRow>
          <td>
            <Link to="/details/nflx">NFLX</Link>
          </td>
          <td>Netflix Inc</td>
          <td>USD</td>
          <td>
            <Link to="/details/nflx">Eliminar</Link>
          </td>
        </TableRow>
        <TableRow>
          <td>
            <Link to="/details/nflx">Eliminar</Link>
          </td>
          <td>Netflix Inc</td>
          <td>USD</td>
          <td>
            <Link to="/details/nflx">Eliminar</Link>
          </td>
        </TableRow>
        <TableRow>
          <td>
            <Link to="/details/nflx">Eliminar</Link>
          </td>
          <td>Tesla Motors</td>
          <td>USD</td>
          <td>
            <Link to="/details/nflx">Eliminar</Link>
          </td>
        </TableRow>
      </tbody>
    </TableComponent>
  );
};

const TableComponent = styled.table`
  width: 100%;
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
