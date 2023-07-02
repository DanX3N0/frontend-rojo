import React from 'react'
import Header from './header/Header'
import SideNavbar from './sideNavbar/SideNavbar'
import Table from "./table/Table"
import ThemeListP from '../../../Theme/ThemeListP'
import { Container,CssBaseline,ThemeProvider} from "@mui/material"
import FilterComponent from "./filter/FilterComponent"

const ListProducts = () => {
  return (
    <ThemeProvider theme={ThemeListP}>
    <CssBaseline/>
      <Container sx={{width:'1440px',height:'1024px',background:'#E6E6E8'}}>
            <Header/>
            <SideNavbar/>
            <Table/>
            <FilterComponent/>
      </Container>
    </ThemeProvider>  
  );
}

export default ListProducts
