import { createTheme } from "@mui/material";
//import "@fontsource/pacifico/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/allerta-stencil/400.css"; // Specify weight
import "@fontsource/quicksand"
import "@fontsource/poppins"; // Defaults to weight 400

const ThemeListP = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
    header:{
      search:'#BFBFBF',
      borderLog:'#E6E6E8'
    },
    table:{
      headBackground:'#F1F0F0',
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
    }
},

typography: {
      logo:{
        position:'absolute',
        top:'11px',
        left:'82.5px',
         width: '123px',
         height: '41px',
         textAlign: 'left',
         lineHeight: '40.5px',
         zIndex: 0,
         fontFamily: 'Allerta Stencil',
         fontSize: '35px',
         fontStretch: 'normal',
         fontStyle: 'normal',
         fontWeight: 400,
         
         '& .capital': {
           color: '#A18A68',
         },
       
         '& .lowercase': {
           color: '#000000',
         },
         h1:undefined,
    },
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
        fontStretch:'normal',
        textDecoration:'none',
      }
    },

  })
export default ThemeListP
  