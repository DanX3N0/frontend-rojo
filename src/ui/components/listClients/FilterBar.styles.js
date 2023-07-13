import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      backgroundColor: theme.palette.primary.main,
      fontFamily: 'Inter-Regular',
      [mq('xxs')]: {
         width: '100%',
      },
      [mq('md')]: {
         width: '240px',
         height: '678px',
      },
      padding: '5px',
      borderRadius: '10px',
   },
   tittle:{
      width: '90%',
      height: '31.5px',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '24px',
      fontWeight: '600',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
      margin: '7px',
      padding: '10px',
   },
   filter:{
      width: '21.3px',
      height: '19.3px',
      marginLeft: '5px',
   },
   checks:{
      [mq('xxs')]: {
         width: '100%',
         display: 'flex',
         flexDirection: 'row',
      },
      [mq('md')]: {
         display: 'flex',
         flexDirection: 'column',
      },
      padding: '5px',
   },
}));

export default useStyles;