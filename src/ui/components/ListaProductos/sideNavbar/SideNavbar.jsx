import NavListDrawer from "./NavListDrawer";
import {StyledPaper,StyledContainerLogo} from "./styles"

export default function SideNavbar() {
  return (
    <StyledPaper square>
      <StyledContainerLogo>
        logo
      </StyledContainerLogo>
      <NavListDrawer />
    </StyledPaper>
  );
}

