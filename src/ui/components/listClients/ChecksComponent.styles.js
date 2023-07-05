import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
   wrapper: {
      justifyContent:'center',
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
      borderBottom: '1px solid #BCBCBC',
   },
   tittle:{
      fontSize: '16px',
      fontWeight: '600',
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingTop: '5px',
   },
   checks:{
      paddingVertical: '5px',
      paddingTop: '5px',
      paddingBottom: '5px',
   },
   check:{
      '&:checked': {
         backgroundColor: 'black',
      }
   },
}));

export default useStyles;