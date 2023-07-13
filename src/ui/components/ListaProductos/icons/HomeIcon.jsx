import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as HomeSvg } from '../../../../assets/images/home.svg';

const HomeIcon = () => {
  return (
    <SvgIcon component={HomeSvg} viewBox="0 0 20 20" fontSize='small'/>
  );
};

export default HomeIcon;

