import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    fontFamily: 'Inter-Regular',
    [mq('xxs')]: {
      display: 'none',
    },
    [mq('md')]: {
      display: 'block',
      width: '230px',
      height: '696px',
      marginLeft: '-10px',
      marginTop: '-20px'
    },
  },
}));
export default useStyles;
