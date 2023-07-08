import { makeStyles } from '@material-ui/core';
import mq from '../src/config/mq';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      backgroundColor: theme.palette.primary.main,
      fontFamily: 'Inter-Regular',
      [mq('xxs')]: {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
      },
      [mq('md')]: {
         width: '100%',
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         paddingLeft: '10px',
      },
   },
}));
export default useStyles;