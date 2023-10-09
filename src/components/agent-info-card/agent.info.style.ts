import styled from "styled-components";
import valorLogo from "../../assets/valor-logo-black.webp";

export const SectionContainer = styled.section`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: max-content;
  background-color: rgba(0, 0, 0, 0.8);

  .agent-description {
    background-color: var(--grey--scale--grey-1);
    margin: 5rem;
    padding: 16px;
    border: 1px solid black;
    border-radius: 8px;
    width: 70vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: justify;
    h1,
    p {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 24px;
    }

    @media (min-width: 1024px) {
      width: 30vw;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SectionContainer2 = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    font-size: 32px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AgentInfoCardStyle = styled.div`
  border-radius: 8px;
  max-width: 70vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .agent-img {
    background-image: url(${valorLogo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: var(--red-1);
    width: 100%;
    height: 100%;
    padding: 8px;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.3);
    }
  }

  .agent-name {
    position: absolute;
    bottom: 0px;
    font-size: 32px;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    color: black;
    text-align: center;
    padding: 8px;

    h1 {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }

  @media (min-width: 1024px) {
    width: 35vw;
    height: auto;
  }
`;
