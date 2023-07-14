
import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useForm = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    border: "1px solid #000",
    borderRadius: "10px",
  },
  
  container: {
    display: "flex",
    alignItems: "center",
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
    backgroundColor: "#fff",
    borderRadius: "5px",    
    margin: "5px", // Ajusta el espaciado entre los cuadrados
    
  },
}));

export default useForm;
