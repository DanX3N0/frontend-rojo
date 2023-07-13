import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as OrdersSvg } from '../../../../assets/images/orders.svg';

const OrdersIcon = () => {
  return (
    <SvgIcon component={OrdersSvg} viewBox="0 0 20 20" fontSize='small'/>
  );
};

export default OrdersIcon;