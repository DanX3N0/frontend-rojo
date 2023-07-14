import { ThemeProvider,CssBaseline,createTheme} from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Inter from '../assets/fonts/Inter-Regular.ttf';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';
import AllertaStencil from '../assets/fonts/AllertaStencil-Regular.ttf'
import '@fontsource/inter/400.css';
import '@fontsource/allerta-stencil/400.css';
import '@fontsource/quicksand'
import '@fontsource/poppins';

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
const AllertaStencilRegular = {
  fontFamily: 'AllertaStencil-Regular',
  fontStyle: 'normal',
  fontWeight: 100,
  src: `url(${AllertaStencil})`,
};
const AllertaStencilBold = {
  fontFamily: 'AllertaStencil-Bold',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `url(${AllertaStencil})`,
};
const DMSansRegular ={
  fontFamily: 'DMSans-Regular',
  fontStyle: 'normal',
  fontWeight: 100,
  src: `url(${DMSans})`
};
const DMSansBold ={
  fontFamily: 'DMSans-Bold',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `url(${DMSansM})`
};
const AlatsiRegular = {
  fontFamily: 'Alatsi-Regular',
  fontStyle: 'normal',
  fontWeight: 100,
  src: `url(${Alatsi})`
};
const AlatsiBold = {
  fontFamily: 'Alatsi-Bold',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `url(${Alatsi})`
};

const theme = createTheme({
  typography: {
    fontFamily: [
      InterRegular.fontFamily,
      InterBold.fontFamily,
      PoppinsRegular.fontFamily,
      PoppinsBold.fontFamily,
      AllertaStencilRegular.fontFamily,
      AllertaStencilBold.fontFamily,
      DMSansRegular.fontFamily, 
      DMSansBold.fontFamily, 
      AlatsiRegular.fontFamily, 
      AlatsiBold.fontFamily
    ].join(","),
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
    quaternary:{
      main: "#FFFFFF",
      light: "#F9F8F9",
      dark: "#727272",
      contrastText: "#64D148"
    },
    common: {
      black: "#000",
      white: "#fff",
      red: "red"
    },
    borderColor: {
      border: "#f1e8e8",
      green: "#ccc",
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [PoppinsRegular, PoppinsBold, InterRegular, InterBold, AllertaStencilRegular, AllertaStencilBold, DMSansRegular, DMSansBold, AlatsiRegular,AlatsiBold],
      },
      body: {
        fontFamily: ["PoppinsRegular"],
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
        padding: 0,
      },
    }
}});

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>
        <CssBaseline/> {children} </ThemeProvider>
);
export default Theme;
