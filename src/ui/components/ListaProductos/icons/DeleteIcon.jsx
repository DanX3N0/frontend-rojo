import { SvgIcon } from '@mui/material';
import { ReactComponent as DeleteSvg } from '../../../../assets/images/delete.svg';
const DeleteIcon = () => {
  return (
    <SvgIcon component={DeleteSvg} viewBox="0 0 24 24"/>
  );
};
export default DeleteIcon;