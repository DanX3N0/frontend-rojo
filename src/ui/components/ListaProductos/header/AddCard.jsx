
import { Typography,Stack} from '@mui/material';
import AddBussinesIcon from '../icons/AddBussinesIcon';
import { StyledButton } from './styles'

export default function AddCard() {
  return (
   
      <StyledButton variant="contained" disableElevation>  
          <Stack direction="row" spacing={'10px'} alignItems="center" >
            <AddBussinesIcon color="primary" fontSize="small"/>
            <Typography variant='addProduct' color='primary' noWrap>Agregar producto</Typography>
        </Stack>
      </StyledButton>
      
  );
}



