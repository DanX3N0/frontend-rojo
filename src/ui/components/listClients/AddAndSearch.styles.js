import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';
const useStyles = makeStyles((theme) => ({
   wrapper: {
      justifyContent:'left',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      fontFamily: 'Inter-Regular',
      [mq('md')]: {
         width: '1480px',
      },
      [mq('xxs')]: {
         width: '100%',
      },
   },
   logo: {
      [mq('xxs')]: {
         fontSize:'25px',
         marginRight: 'auto'
      },
      [mq('md')]: {
         fontSize:'35px',
      },
      fontFamily: 'AllertaStencil-Regular',
      paddingLeft: '5%',
      paddingRight:'7%',
   },
   magnifier:{
      width: '10%',
   },
   searchForm:{
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'flex',
         marginRight: 'calc(50% - 262px)',
         width: '262px',
      },
      padding: '10px',
      flexDirection: 'row',
      height: ' 45px',
      border: '1px solid',
      borderRadius: '22px',
      opacity: '50%',
   },
   textAreaWidth:{
      width: '70%',
      height: '21px',
   },
   textArea:{
      border: 'none',
      width:'100%',
      height: '21px',
      outline: 'none',
      resize: 'none',
   },
   addButton:{
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'flex',
      },
      color: theme.palette.primary.main,
      width: '198px',
      height: '46px',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: theme.palette.common.black,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
   },
   imageAdd:{
      paddingRight: '3%',
   },
   user:{
      display: 'flex', 
      flexDirection: 'row',
      height: '58px',
      alignItems: 'center',
      paddingLeft: '2%',
      paddingRight: '0px',
   },
   avatar:{
      padding: '5px',
   },
   userText:{
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'flex',
      },
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '58px',
      alignItems: 'center',
      justifyContent: 'center'
   },
   userName:{
      height: '35px',
      fontSize: '12px',
      paddingLeft: '1%',
   },
   hidden: {
      [mq('xxs')]: {
         display: 'flex',
         flexDirection: 'row',
         paddingBottom: '30px',
         justifyContent: 'center',
      },
      [mq('md')]: {
         display: 'none',
      },
      backgroundColor: theme.palette.primary.main,
   },
   secondMagnifier:{
      width: '10%',
   },
   secondSearchForm:{
      padding: '10px',
      display: 'flex',
      flexDirection: 'row',
      width: 'calc(262 + 80% - 200px)',
      height: ' 45px',
      border: '1px solid',
      borderRadius: '22px',
      marginLeft: '2%',
      marginRight: '10%',
      opacity : '60%',
   },
   secondTextArea:{
      border: 'none',
      width:'100%',
      height: '21px',
      outline: 'none',
      resize: 'none',
      
   },
   secondAddButton:{
      color: theme.palette.primary.main,
      width: '100%',
      height: '46px',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: theme.palette.common.black,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
   },
   secondButton:{
      marginRight: '5%',
   },
}));
export default useStyles;