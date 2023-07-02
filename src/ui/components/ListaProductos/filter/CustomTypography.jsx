import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles"


const StyledTypographySub = styled(Typography)(({ theme }) => ({
  fontFamily:'Inter',
  fontStyle:'normal',
  fontSize:'16px',
  fontWeight:600,
  lineHeight:'19px',
  position:'relative',
  left:'0%',
  gap:'16px',
  height:'19px',
  color:theme.palette.filter.subtitle
}));

function CustomTypographySub({ subtitle, ...props }) {
    return (
      
      <StyledTypographySub variant="subtitle1" {...props}>
        {subtitle}
      </StyledTypographySub>
      
    );
  }
export default CustomTypographySub;