import React from 'react';
import styled from 'styled-components';

const Table = () => {
  return (
    <TableComponent>
      <TableHeader>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th> </th>
      </TableHeader>
      <TableRow>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>Eliminar</td>
      </TableRow>
      <TableRow>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>Eliminar</td>
      </TableRow>
      <TableRow>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>Eliminar</td>
      </TableRow>
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

const TableHeader = styled.tr`
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
