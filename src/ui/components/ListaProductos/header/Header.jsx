import AddCard from "./AddCard"
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar"
import AvatarImage from "../../../../assets/images/avatarImage.jpg"
import {Toolbar,Box} from "@mui/material"
import { StyledBarHeader,StylesToolbar} from "./styles"

export default function Header() {
  return (
    <Box sx={{flexGrow:1}}>
    <StyledBarHeader position="static">
        <Toolbar variant='dense' disableGutters sx={StylesToolbar}> 
          
             <SearchBar/>
              <AddCard/> 
              <UserAvatar name="John  Jacob"
                  email="john.jacob@gmail.com" 
                  imageUrl={AvatarImage}/>    
        </Toolbar>
      </StyledBarHeader>
      </Box>
    
      
  );
}
