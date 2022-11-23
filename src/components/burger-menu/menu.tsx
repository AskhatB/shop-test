import { FC, ReactElement } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Portal from "../portal";
import { StyledMenu } from "./styles";

type MenuProps = {
  isOpen: boolean;
};

const Menu: FC<MenuProps> = ({ isOpen }): ReactElement | null => {
  if (!isOpen) return null;

  return (
    <Portal wrapperId="burger-menu">
      <StyledMenu>
        <ul>
          <li>
            <FaUserAlt />
            <span>Профиль</span>
          </li>
          <li>
            <MdFavorite />
            <span>Избранное</span>
          </li>
          <li>
            <FaShoppingCart />
            <span>Корзина</span>
          </li>
        </ul>
      </StyledMenu>
    </Portal>
  );
};

export default Menu;
