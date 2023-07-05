import React from 'react'
import Header from './header/Header'
import SideNavbar from './sideNavbar/SideNavbar'
import Table from "./table/Table"
import { Container,useTheme} from "@mui/material"
import FilterComponent from "./filter/FilterComponent"

const ListProducts = () => {
  const theme = useTheme();
  return (
      <Container sx={{width:'1440px',height:'1024px',background:theme.palette.body.main}}>
            <Header/>
            <SideNavbar/>
            <FilterComponent/>
            <Table/>
      </Container> 
  );
}

export default ListProducts
