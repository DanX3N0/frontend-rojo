import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as SearchSvg } from '../../../../assets/images/search.svg';
const SearchIcon = () => {
  return (
    <SvgIcon component={SearchSvg} viewBox="0 0 15 15" fontSize='15px'/>
  );
};
export default SearchIcon;