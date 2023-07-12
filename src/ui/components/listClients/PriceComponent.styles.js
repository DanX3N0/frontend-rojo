import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

const useStyles = makeStyles((theme) => ({
   wrapper: {
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      backgroundColor: theme.palette.primary.main,
      fontFamily: "Inter-Regular",
      [mq("xxs")]: {
         width: "100%",
      },
      [mq("md")]: {
         width: "100%",
      },
   },
   tittle: {
      fontSize: "16px",
      fontWeight: "600",
   },
   pricesContainer: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: "15px",
      paddingRight: "15px",
   },
   priceLeft: {
      alignItems: "left",
   },
   priceRight: {
      marginLeft: "auto",
   },
}));

export default useStyles;