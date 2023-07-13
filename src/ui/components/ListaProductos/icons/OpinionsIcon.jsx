import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as OpinionsSvg } from '../../../../assets/images/opinions.svg';

const OpinionsIcon = () => {
  return (
    <SvgIcon component={OpinionsSvg} viewBox="0 0 20 20" fontSize='small'/>
  );
};
export default OpinionsIcon;

