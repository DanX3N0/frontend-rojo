import {styled} from "@mui/system"
import { ListItem,Paper,Box} from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    width: '224px',
    height: '781px',
    flexDirection: 'column',
    overflow:'hidden',
    gap: '16px',
    position: 'absolute',
    alignItems: 'center',
    left:0,
    top:0,
    flexShrink:0,
    backgroundColor: theme.palette.primary.main,
    boxShadow:'none'
    
  }));
  
export const StyledContainerLogo= styled(Box)(({ theme }) => ({
    height:'86px',
    display:'flex',
    alignItems:'flex-start',
    padding:'11px 0px',
    gap:'50px',
    alignSelf:'stretch',
    flexShrink:0,
    borderWidth:'0 0 1px',
    justifyContent:'center',  
    borderBottom:`1px solid ${theme.palette.header.borderLog} `,
    boxShadow:'none'
  }));
  

export const StyledDrawerContainer = styled('div') ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: '16px 12px',
    width: '190px',
    height:'336px',
    position:'absolute',
    flexShrink:0,
    top: '102px',
  });
  
export const StyledListItemContainer = styled(ListItem)({
    width:'166px',height:'44px',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:'6px',
    padding:'12px 16px',
    gap:'12px',
    flexGrow:1,
    alignSelf:'stretch',
    margin:'8px'
  
  });
export const StyledListItemButton={
    display:'flex',
    height:'20px',
    justifyContent:'flex-start'
  }
  
export const StyledIconBox = styled('div')({
    width: '20px',
    height: '20px',
    position:'relative',
    marginRight:7,
    display:'flex',
    alignItems:'flex-end',
    lineHeight:1.3
  });

