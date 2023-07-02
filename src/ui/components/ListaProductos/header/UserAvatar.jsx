
import { Avatar, Typography} from '@mui/material';
import {UserInfoBox,StyledUserData} from "./styles"

export default function UserAvatar({ name, email, imageUrl }) {
  return (
    <UserInfoBox>
      <Avatar alt={name} src={imageUrl} sx={{width:58,height:58}}/>
        <StyledUserData>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography >
          <Typography variant="subtitle1">
            {email}
          </Typography >
          </StyledUserData>
    </UserInfoBox>
  
  );
}
