import { FC, ReactElement } from "react";
import { StyledTopbarWrapper } from "./styles";
import Search from "../search";
import BurgerMenu from "../burger-menu";

const Topbar: FC = (): ReactElement => {
  const onSearch = (value: string): void => {
    console.log("search --> ", value);
  };

  return (
    <StyledTopbarWrapper>
      <Search onSearch={onSearch} />
      <BurgerMenu />
    </StyledTopbarWrapper>
  );
};

export default Topbar;
