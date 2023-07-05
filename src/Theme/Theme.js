//import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { ThemeProvider,CssBaseline,createTheme} from "@mui/material";

import Inter from "../assets/fonts/Inter-Regular.ttf";
import Poppins from "../assets/fonts/Poppins-Regular.ttf";
import "@fontsource/inter/400.css";
import "@fontsource/allerta-stencil/400.css";
import "@fontsource/quicksand"
import "@fontsource/poppins";

const InterRegular = {
  fontFamily: "Inter-Regular",
  fontStyle: "normal",
  fontWeight: 100,
  src: `url(${Inter})`,
};
const InterBold = {
  fontFamily: "Inter-Bold",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url(${Inter})`,
};

const PoppinsRegular = {
  fontFamily: "Poppins-Regular",
  fontStyle: "normal",
  fontWeight: 100,
  src: `url(${Poppins})`,
};
const PoppinsBold = {
  fontFamily: "Poppins-Bold",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url(${Poppins})`,
};
const theme = createTheme({
  typography: {
    fontFamily: [
      InterRegular.fontFamily,
      InterBold.fontFamily,
      PoppinsRegular.fontFamily,
      PoppinsBold.fontFamily,
    ].join(","),
    h3:{   
      fontSize:'12px',
      fontFamily:'Poppins',
      fontWeight:600,
      letterSpacing:'0.36px'
    },
    h6:{
      fontSize:'14px',
      width:'75.415px',
      height:'10.36px',
      lineHeight:0.9,
      fontWeight:500
      },
    tabDataTitle:{
      fontSize:'14px',
      fontFamily:'Poppins',
      fontWeight:600
    },
    tabDataSubtitle:{
      fontSize:'13px',
      fontFamily:'Poppins',
      fontWeight:500
    },
    button:{
      height: '20px',
      fontFamily:"Inter",
      fontWeight:400,
      fontSize: '16px',
      lineHeight: '20px',
      display: 'flex',
      alignItems: 'flex-start',
      textTransform:'none',
      color:"#898C81"
    },
    subtitle1: {
      fontSize:'12px',
      lineHeight:0.1
    },
    addProduct: {
      fontFamily:'Inter',
      fontSize:16,
      fontWeight:600,
      textTransform:'none',
      lineHeight:'normal',
    },
    titleFilt:{
      fontFamily:'Quicksand',
      fontSize:'24px',
      fontWeight:600,
      lineHeight:'24px',
      letterSpacing:'0.44px',
      textAlign:'left',
      textDecoration:'none',
    }
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#F1F0F0",
      dark: "#898C81",
      contrastText: "#FD3939",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#F1F0F0",
      dark: "#898C81",
      contrastText: "#64D148",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    header:{
      search:'#BFBFBF',
      borderLog:'#E6E6E8'
    },
    table:{
      dataTitle:'#464E5F',
      dataSubTitle:'#B5B5C3'
    },
    filter:{
      subtitle:'#54595E',
      fLabel:'#6C757D',
      divider:'#BCBCBC'
    },
    shadow:{
      table:'#38476d17',
      filter:'#0823303d'
    },
    body:{
      main:'#E6E6E8'
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [PoppinsRegular, PoppinsBold, InterRegular, InterBold],
      },
      body: {
        fontFamily: ["PoppinsRegular"],
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
        padding: 0,
      },
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
export default Theme;
