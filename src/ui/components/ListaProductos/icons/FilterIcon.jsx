import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as FilterSvg } from '../../../../assets/images/filter.svg';
const FilterIcon = () => {
  return (
    <SvgIcon component={FilterSvg} viewBox="0 0 24 24"/>
  );
};
export default FilterIcon;