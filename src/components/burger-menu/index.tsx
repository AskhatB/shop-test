import { FC, ReactElement, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./menu";
import { StyledBurgerMenuWrapper, StyledBurgerMenuButton } from "./styles";

const BurgerMenu: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = (): void => {
    setIsOpen(true);
  };

  return (
    <StyledBurgerMenuWrapper>
      <StyledBurgerMenuButton onClick={openMenu}>
        <GiHamburgerMenu />
      </StyledBurgerMenuButton>
      <Menu isOpen={isOpen} />
    </StyledBurgerMenuWrapper>
  );
};

export default BurgerMenu;
