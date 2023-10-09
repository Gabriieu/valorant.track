import { styled } from "styled-components";

export const CardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  background-color: var(--red-2);
  border-radius: 32px;
  margin: 1.2rem;
  position: relative;
  padding: 2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);

    .agent {
      transform: scale(1.4);
    }
  }

  @media (min-width: 1024px) {
    width: 22vw;
  }
`;

export const CardStyleTop = styled.div`
  .agent {
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .agent-background {
    width: 100%;
    height: 100%;
    padding: 0 32px 32px 32px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 0;
  }
`;

export const CardStyleBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 1;
  background-color: var(--red-2);
  color: white;
  padding: 8px;

  img {
    width: 48px;
    height: 48px;
  }
`;
