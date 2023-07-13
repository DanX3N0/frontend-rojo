import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as PromotionsSvg } from '../../../../assets/images/promotions.svg';

const PromotionsIcon = () => {
  return (
    <SvgIcon component={PromotionsSvg} viewBox="0 0 20 20" fontSize='small'/>
  );
};
export default PromotionsIcon;
