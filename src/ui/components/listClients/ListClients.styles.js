import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    backgroundColor: theme.palette.primary.main,
    fontFamily: 'Inter-Regular',
    overflowY: 'auto',
    [mq('xxs')]: {
      width: '100%',
      overflowX: 'auto',
      marginTop: 'auto',
      paddingTop: '5px',
    },
    [mq('md')]: {
      width: '915px',
      height: '681px',
      borderRadius: '12px',
      margin: '20px',
      marginInline: '40px',
    },
  },
  tittleTable:{
    paddingLeft: '5%',
  },
  table:{
    borderCollapse: 'collapse',
    [mq('xxs')]: {
      width: '100%',
    },
    [mq('md')]: {
      width: '90%',
      height: '681px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  tableHead:{
    height: '43px',
    borderRadius: '6px',
    backgroundColor: '#F3F6F9',
  },
  tableBody:{
    textAlign: 'center',
  },
  bodyRow:{
    borderBottom: '1px solid #CDCDCD',
    padding: '1px',
    height: '57.5px',
  },
  buttons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  history:{
    height: '28px',
    width: '64px',
    fontFamily: 'Poppins-Regular',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    fontSize: '12px',
  },
  editAndDelete:{
    height: '34px',
    width: '53px',
    backgroundColor: theme.palette.primary.main,
    border: 'none',
  },
}));  
export default useStyles;
