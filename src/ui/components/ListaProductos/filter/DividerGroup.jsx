import React from 'react'
import { Divider } from '@mui/material'
import styled from '@emotion/styled';

const StyledDivider = styled(Divider)(({ theme }) => ({
    width:'194px',
    height:'1px',
    zIndex:1,
    position:'absolute',
    left:'19px',
    backgroundColor:theme.palette.filter.divider,
    
  }));

function DividerGroup(props) {
    return <StyledDivider {...props} />;
  }
  
  export default DividerGroup;