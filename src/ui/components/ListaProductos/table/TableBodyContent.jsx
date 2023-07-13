import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';
import FileCopyIcon from '../icons/FileCopyIcon';
import { Typography,Box,Stack} from '@mui/material';
import {StyledTableCellBody,StyledTableRow,StyledProductImage,StyledProductItem,StackDataProd} from "./stylesTable"
import { rows } from './data';
export const TableBodyContent = () => {
    return (
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCellBody>{row.id}</StyledTableCellBody>
              <StyledTableCellBody>
                <Box sx={StyledProductItem}>
                  <StyledProductImage src={row.product.image} alt={row.product.description} />
                  <StackDataProd>
                    <Typography variant='tabDataTitle' color='table.dataTitle'>
                      {row.product.description.title}
                    </Typography>
                    <Typography  noWrap variant='tabDataSubtitle' color='table.dataSubTitle'>
                      {row.product.description.detail}
                    </Typography>
                  </StackDataProd>
                </Box>
              </StyledTableCellBody>
              <StyledTableCellBody>{row.stock}</StyledTableCellBody>
              <StyledTableCellBody>{row.price}</StyledTableCellBody>
              <StyledTableCellBody align='center'>
                <Stack direction="row"  alignItems="center" justifyContent="center">
                  <Button startIcon={<FileCopyIcon />} />
                  <Button startIcon={<EditIcon />} />
                  <Button startIcon={<DeleteIcon />} />
                  </Stack>
              </StyledTableCellBody>
            </StyledTableRow>
          ))}
        </TableBody>
      );
}
