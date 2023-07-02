import { styled } from "@mui/system";
import { Box,Paper} from '@mui/material';


export const StyledContainerFilt= styled(Box)(({ theme }) => ({
    position:'absolute',
    height:'678px',
    width:'240px',
    top:'102px',
    left:'1178px',
    right:'22px',
    flexShrink:0,
    borderRadius:'8px',
    background:theme.palette.primary.main,
    boxShadow:`0px 1px 2px 0px ${theme.palette.shadow.filter}`
  }));
  
export const StylesLayoutTitle={
    display:'flex',
    width:'134px',
    height:'31.5px',
    justifyContent:'flex-start',
    alignItems:'center',
    flexShrink:0,
    flexDirection:'row',
    position:'absolute',
    top:'10px',
  };
export const StyledTitleFilt=styled(Box)(({ theme }) =>({
    width:'194px',
    height:'42px',
    display:'flex',
    position:'absolute',
    top:'7px',
    left:'19px',
    alignItems:'flex-start',
    flexShrink:0,
    borderBottom:`1px solid ${theme.palette.filter.divider}`,
  }));
  
export const StyledGroupFilt = styled(Paper) ({
    display:'inline-flex',
    flexDirection:'column',
    alignItems:'flex-start',
    gap:'32px',
    position:'absolute',
    width:'99px',
    height:'528px',
    left:'32px',
    top:'57px',
  });

export const defaultStyleFormItem = {
    background: 'primary.main',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '18px',
    margin: 0,
    gap: '10px',
  };
  
export const DefaultTypographyItem={
    fontFamily:'Inter',
    fontStyle:'normal',
    fontSize:'14px',
    lineHeight:'17px',
    height:'17px',
    textAlign:'center',
    fontWeight:500,
  };

export const StylesFormGroupCategory={
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    padding:0,
    gap:'16px',
    width:'82px',
    height:'121px',
   
  }
export const StylesFormGroupMatter={
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    padding:0,
    gap:'16px',
    width:'85px',
    height:'189px',  
  }
export const StylesFormGroupStock={
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    padding:0,
    gap:'16px',
    width:'99px',
    
  }