import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      backgroundColor: theme.palette.primary.main,
      fontFamily: 'Inter-Regular',
      [mq('xxs')]: {
         width: '100%',
      },
      [mq('md')]: {
         width: '100%',
      },
      paddingLeft: '5px',
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
   },
   tittle: {
      fontSize: '16px',
      fontWeight: '600',
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingTop: '5px',
   },
   material: {
      [mq('xxs')]: {
         width: '100%',
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         gridGap: '10px',
      },
      [mq('md')]: {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
      },
   },
}));

export default useStyles;