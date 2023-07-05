import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as ClientsSvg } from '../../../../assets/images/clients.svg';

const ClientsIcon = () => {
  return (
    <SvgIcon component={ClientsSvg} viewBox="0 0 20 20" fontSize='small'/>
  );
};
export default ClientsIcon;
