import styled from "styled-components";

export const GoToTopButtonStyle = styled.button`
  position: fixed;
  bottom: 10px;
  right: 24px;
  z-index: 3;

  &:hover{
    cursor: pointer;
    transform: scale(1.3)
  }
`;