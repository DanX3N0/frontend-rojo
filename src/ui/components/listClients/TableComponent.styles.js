import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      backgroundColor: theme.palette.secondary.light,
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
   filter: {
      [mq('xxs')]: {
         width: '100%',
         display: 'block',
      },
      [mq('md')]: {
         display: 'none',
      },
   },
   secondFilter: {
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'block',
      },
   },
}));
export default useStyles;