import AddCard from './AddCard'
import SearchBar from './SearchBar';
import {Toolbar} from '@mui/material'
import { StyledBarHeader,StylesToolbar} from './styles'

export default function Header() {
  return (
    <StyledBarHeader position='static'>
        <Toolbar variant='dense' disableGutters sx={StylesToolbar}> 
            <SearchBar/>
            <AddCard/>  
        </Toolbar>
    </StyledBarHeader>
      
    
      
  );
}
