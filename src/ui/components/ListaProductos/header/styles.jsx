import { styled } from '@mui/system';
import {Button,InputBase,AppBar} from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 198,
  height: 49,
  gap: 10,
  position: 'absolute',
  left: 705,
  top: 4.5,
  padding: 15,
  backgroundColor: theme.palette.common.black,
}));

export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '15px 154px 15px 15px',
  width:'261.95px',
  height: '45px',
  position:'absolute',
  left:'0px',
  top:'6.5px',
  borderRadius: '22px',
  border: `1px solid ${theme.palette.header.search}`,
  boxSizing:'border-box',
  background:theme.palette.common.white
}));

export const SearchIconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  position:'absolute',
  top:'13px',
  left:'15px',
  padding:0
  
});

export const StyledInputBaseSearch = styled(InputBase)(({ theme }) => ({ 
  width: '51.36px',
  height: '12.11px',
  position:'absolute',
  top:'15px',
  left:'33px',
  color:theme.palette.header.search,
}));

export const StyledBarHeader = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '13.5px 30px',
  gap: '10px',
  width: '1216px',
  height: '85px',
  flexShrink:0,
  position: 'absolute',
  left: '224px',
  top: '0px',
  background:theme.palette.primary.main,
  boxShadow:'none'
}));
export const StylesToolbar={
  display:'flex',
  width:'1165px',
  height:'58px',
  position:"relative",
  alignItems:'center',
  flexShrink:0
}