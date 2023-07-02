import {styled} from "@mui/system"
import { TableContainer,TableCell,TableRow,Stack} from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    display: 'flex',
    width: '912px',
    height: '682px',
    position: 'absolute',
    left: '244px',
    top: '103px',
    background: theme.palette.primary.main,
    boxShadow:`0px 0px 30px ${theme.palette.shadow.table}`,
    borderRadius: '10px',
    overflow: 'hidden',
    alignItems: 'flex-start',
    flexShrink: 0,
  }));
  
export const StylesTable={
    marginTop:'26px',
    width:'858px',
    marginLeft:'27px',
    marginRight:'27px',
  }
  
export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor:theme.palette.table.headBackground,
      height:'43px',
      paddingLeft:0,
      color:theme.palette.secondary.main,
      
    },
    '&:first-of-type': {
      borderTopLeftRadius: '6px',
    },
    '&:last-child': {
      borderTopRightRadius: '6px',
    },
  }));

export const StyledTableCellBody= styled(TableCell)({
    [`&.${tableCellClasses.body}`]:{
      fontSize:14, 
      padding:'14px 0px 14px 0px',
    },
  });

export const StyledTableRow = styled(TableRow)({
    backgroundColor: '#FFFFFF',
    
});

export const StyledProductImage = styled('img')({
width: 50,
height: 50,
padding:0

});
export const StyledProductItem={
  display:'flex',
  gap:'12px',
  alignItems:'flex-start',
  width: '341px',
  height: '50px',
};
export const StackDataProd=styled(Stack)({
  display:'flex',
  width:'279px',
  height:'50px',
  padding:'5px 8px',
  flexDirection:'column',
  alignItems:'flex-start',
  gap:'1px'
})