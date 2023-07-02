import NavListDrawer from "./NavListDrawer";
import Logo from "../logo/Logo"
import {StyledPaper,StyledContainerLogo} from "./styles"

export default function SideNavbar() {
  return (
    <StyledPaper square>
      <StyledContainerLogo>
        <Logo/>
      </StyledContainerLogo>
      <NavListDrawer />
    </StyledPaper>
  );
}

