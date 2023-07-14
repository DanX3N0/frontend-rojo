
import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useForm = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    fontFamily: "Inter-Regular",
    [mq("xxs")]: {
      width: "%",
      height: "%",
    },
    [mq("md")]: {
      width: "%",
      height: "%",
    },
    border: `1px solid ${theme.palette.borderColor.border}`,
    borderRadius: "5px",
  },
  
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    [mq("sm")]: {
      flexDirection: "column",
    },
  },
  row: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
    square: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "5px",    
    margin: "5px", 
    
  },
}));

export default useForm;
