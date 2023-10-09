import styled from "styled-components";

export const MapCardStyle = styled.li`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;


  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);

    .map-name {
      transform: scale(1.15);
      transition: all 0.3s ease-in-out;
      box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
    }
    .map-plan {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    width: 25vw;
    margin: 1.2rem;
  }
`;

export const MapCardTopStyle = styled.div`
  .map-img {
    width: 100%;
  }
  .map-plan {
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    display: none;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.9);
    text-align: justify;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 8px;
    
  }
`;

export const MapCardBottomStyle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: var(--red-1);
  padding: 8px;
  border-radius: 8px;
`;
