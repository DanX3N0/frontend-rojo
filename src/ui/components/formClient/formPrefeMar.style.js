import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    fontFamily: "Inter-Regular",
    [mq("xxs")]: {
      width: "50%",
      height: "100%",
    },
    [mq("md")]: {
      width: "50%",
      height: "100%",
    },
    border: `1px solid ${theme.palette.borderColor.border}`,
    borderRadius: "5px",
    padding: "22px",    
  },
  

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  saveButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    margin: "10px"
    
  },
  cancelButton: {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.white,
    margin: "10px"
  },
  containerSelc: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "10px",
    gridColumnGap: "60px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center"
  },
}));

export default useStyles;
