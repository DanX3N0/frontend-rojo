import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBodyContent } from './TableBodyContent';
import { Typography } from '@mui/material';

import{StyledTableContainer,StylesTable,StyledTableCellHead} from "./stylesTable" 

export const TableData= () => {
    return (
      <StyledTableContainer component={Paper}>
        <Table sx={StylesTable}>
          <TableHead>
            <TableRow>
              <StyledTableCellHead><Typography variant="h3">ID</Typography></StyledTableCellHead>
              <StyledTableCellHead><Typography variant='h3'>PRODUCTOS</Typography></StyledTableCellHead>
              <StyledTableCellHead><Typography variant='h3'>STOCK</Typography></StyledTableCellHead>
              <StyledTableCellHead><Typography variant='h3'>PRECIO</Typography></StyledTableCellHead>
              <StyledTableCellHead align='center'><Typography variant='h3'>ACCION</Typography></StyledTableCellHead>
            </TableRow>
          </TableHead>
          <TableBodyContent/>
        </Table>
      </StyledTableContainer>
    );
  };
  
  export default TableData;
   
  
