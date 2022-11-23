import styled from "styled-components";

export const StyledTopbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  padding: 8px;
  box-shadow: 0 24px 48px -12px rgba(16, 24, 40, 0.18);
  background: ${(props) => props.theme.palette.white};
`;
