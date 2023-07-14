import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    fontFamily: "Inter-Regular",
    [mq("xxs")]: {
      width: "100%",
      height: "100%",
    },
    [mq("md")]: {
      width: "100%",
      height: "100%",
    },
    border: `1px solid ${theme.palette.borderColor.border}`,
    borderRadius: "5px",
    padding: "10px",
  },
  
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    width: "100%", 
    padding: "10px",
    borderRadius: "4px", 
    border: `2px solid ${theme.palette.borderColor.green}`,
    margin: "4px 0",
  },
  fila: {
    display: 'flex',
  },
}));

export default useStyles;
