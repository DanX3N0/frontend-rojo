import {List,ListItemButton,ListItemText,Typography } from "@mui/material";
import HomeIcon from "../icons/HomeIcon";
import OrdersIcon from "../icons/OrdersIcon";
import ClientsIcon from "../icons/ClientsIcon";
import PromotionsIcon from "../icons/PromotionsIcon";
import OpinionsIcon from "../icons/OpinionsIcon";
import SettingIcon from "../icons/SettingIcon";
import {StyledDrawerContainer,StyledListItemContainer,StyledListItemButton,StyledIconBox} from "./styles"

const navLinks=[
    {
        title:"Inicio",
        path:"#",
        icon:<HomeIcon/>
    },
    {
        title:"Pedidos",
        path:"#Pedidos",
        icon:<OrdersIcon/>
    },
    {
        title:"Clientes",
        path:"#Clientes",
        icon:<ClientsIcon/>

    },
    {
        title:"Promociones",
        path:"#Promocion",
        icon:<PromotionsIcon/>

    },
    {
        title:"Opiniones",
        path:"#Opinion",
        icon:<OpinionsIcon/>

    },
    {
        title:"Configuracion",
        path:"#config",
        icon:<SettingIcon />
    }
]

export default function NavListDrawer() {
  return (
    <StyledDrawerContainer>
      <nav>
        <List>
          {navLinks.map((item) => (
            <StyledListItemContainer  disableGutters key={item.title} >
              <ListItemButton component="a" disableGutters href={item.path} sx={StyledListItemButton}>
                <StyledIconBox>{item.icon}</StyledIconBox>
                <ListItemText>
                  <Typography variant="button">
                  {item.title}
                  </Typography>
                  </ListItemText>
              </ListItemButton>
            </StyledListItemContainer>
          ))}
        </List>
      </nav>
    </StyledDrawerContainer>
  );
}
