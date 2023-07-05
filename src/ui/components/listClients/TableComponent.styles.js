import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      backgroundColor: '#F1F0F0',
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
   hiden: {
      [mq('xxs')]: {
         width: '100%',
         display: 'block',
      },
      [mq('md')]: {
         display: 'none',
      },
   },
   hiden2: {
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'block',
      },
   },
}));
export default useStyles;