import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

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
    borderRadius: "10px",
    padding: "5px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 100%",
    margin: '5px',
  },

  input: {
    width: "100%", 
    padding: "8px",
    borderRadius: "4px",
    border: `2px solid ${theme.palette.borderColor.green}`,
    margin: "4px 0",
  },
  row: {
    display: 'flex',
  },
  
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",    
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
}));

export default useStyles;
