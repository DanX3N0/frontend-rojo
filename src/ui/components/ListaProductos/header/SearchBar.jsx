
import SearchIcon from "../icons/SearchIcon"
import {Search,SearchIconWrapper,StyledInputBaseSearch} from "./styles"

export default function SearchBar() {
  return (
          <Search>
            <SearchIconWrapper>
              <SearchIcon fontSize="inherit"/>
            </SearchIconWrapper>
            <StyledInputBaseSearch
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  );
}
