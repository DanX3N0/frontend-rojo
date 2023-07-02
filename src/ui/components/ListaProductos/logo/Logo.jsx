import React from 'react';
import { Typography} from '@mui/material';
import {StyledBoxLogo} from "./styles"

const Logo = () => {
  return (
    
<StyledBoxLogo>
  <Typography variant='logo' component="div">
            <span className="capital">F</span>
            <span className="lowercase">rasier</span>
  </Typography>
</StyledBoxLogo>
   
  );
};

export default Logo;
