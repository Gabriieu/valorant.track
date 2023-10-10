import styled from "styled-components";
import gif from "../../assets/404.gif";

export const NotFoundStyle = styled.section`
  background-image: url(${gif});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  #not-found {
    color: red;
    position: absolute;
    right: 10vw;
    top: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1,
    p {
      font-size: 3rem;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      text-align: center;
    }
  }
`;
