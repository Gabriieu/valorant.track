import styled from "styled-components";
import gif from "../../assets/gif.gif";
import gif2 from "../../assets/gif2.gif"

export const ContainerTop = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${gif2});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

export const ContainerBottom = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  color: black;
  padding: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  background-image: url(${gif});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  color: white;

  div {
    margin: 3rem 0 0 0;
    width: 100%;
  }
  .container-div {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    border-radius: 8px;
  }
  .title {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: var(--red-1);
  }

  .description {
    text-align: justify;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 20px;
  }

  #kayo-icon {
    display: none;
  }

  @media (min-width: 1024px) {
    #kayo-icon {
      display: block;
      img {
        max-width: 90%;
      }
    }
  }
`;
export const WelcomeComponentStyle = styled.div`
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 16px;
  border-radius: 8px;
  max-width: 700px;

  img {
    width: 80%;
    margin: 0;
  }

  h4,
  h5,
  p {
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 20px;
  }

  h3 {
    margin: 2rem;
    font-size: 64px;
  }
  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 24px;
  }

  #div {
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroLogoStyle = styled.div`
  img {
    display: none;
  }

  @media (min-width: 1024px) {
    img {
      display: block;
      max-width: 90%;
    }
  }
`;
