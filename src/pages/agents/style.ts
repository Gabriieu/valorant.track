import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";

export const MainStyle = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const SelectStyle = styled.select`
  background-color: white;
  width: max-content;
  height: 2rem;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 24px;

  p {
    text-align: center;
    color: var(--grey--scale--grey-5);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;


