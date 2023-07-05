import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as SettingSvg } from '../../../../assets/images/setting.svg';
const SettingIcon = () => {
  return (
    <SvgIcon component={SettingSvg} viewBox="0 0 20 20" fontSize='small'/>
  );
};
export default SettingIcon;
