
import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
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
    padding: "10px",
    
  },
  
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
    width: "100%",
    justifyContent: 'space-between',
  },
  input: {
    width: "100%", // Asegura que los inputs ocupen el ancho completo del contenedor
    padding: "8px", // Ajusta el padding para dar espacio entre los inputs y el borde del contenedor
    borderRadius: "4px", // Agrega un borde redondeado a los inputs
    border: "2px solid #ccc", // Añade un borde alrededor de los inputs
    margin: "4px 0",
  },
  
}));

export default useStyles;
