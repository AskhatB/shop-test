import styled from "styled-components";

export const StyledBurgerMenuWrapper = styled.div`
  margin-left: 8px;
`;

export const StyledBurgerMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  border-radius: 6px;
`;

export const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 80vw;
  height: 100vh;
  background: ${(props) => props.theme.palette.primary};
  padding: 32px;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.palette.white};
      margin-bottom: 16px;

      span {
        margin-left: 8px;
      }
    }
  }
`;
