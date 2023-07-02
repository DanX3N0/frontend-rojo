import { Icon } from '@mui/material';

function FileCopyIcon(props) {
  return (
    <Icon {...props}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22C4.45 22 3.979 21.804 3.587 21.412C3.195 21.02 2.99934 20.5493 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.979 17.804 7.587 17.412C7.195 17.02 6.99934 16.5493 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.98 2.195 8.45067 1.99934 9 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V16C20 16.55 19.804 17.021 19.412 17.413C19.02 17.805 18.5493 18.0007 18 18H9ZM9 16H18V4H9V16Z" fill="#949494"/>
        </svg>

    </Icon>
  );
}

export default FileCopyIcon;
