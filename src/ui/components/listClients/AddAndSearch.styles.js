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
   lupa:{
      width: '10%',
   },
   searchForm:{
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'flex',
         marginRight: 'calc(40% - 200px)',
         width: '262px',
      },
      padding: '10px',
      flexDirection: 'row',
      height: ' 45px',
      border: '1px solid #BFBFBF',
      borderRadius: '22px',
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
      '&::placeholder':{
         color: '#BFBFBF',
      },
   },
   addButton:{
      [mq('xxs')]: {
         display: 'none',
      },
      [mq('md')]: {
         display: 'flex',
      },
      color: '#FFFFFF',
      width: '198px',
      height: '46px',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
   },
   imgAdd:{
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
         display: 'block',
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
   lupa2:{
      width: '10%',
   },
   searchForm2:{
      padding: '10px',
      display: 'flex',
      flexDirection: 'row',
      width: 'calc(262 + 80% - 200px)',
      height: ' 45px',
      border: '1px solid #BFBFBF',
      borderRadius: '22px',
      marginLeft: '2%',
      marginRight: '10%',
   },
   textAreaWidth2:{
      width: '70%',
      height: '21px',
   },
   textArea2:{
      border: 'none',
      width:'100%',
      height: '21px',
      outline: 'none',
      resize: 'none',
      '&::placeholder':{
         color: '#BFBFBF',
      },
   },
   addButton2:{
      color: '#FFFFFF',
      width: '100%',
      height: '46px',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
   },
   buttonHidden:{
      marginRight: '5%',
   },
}));
export default useStyles;