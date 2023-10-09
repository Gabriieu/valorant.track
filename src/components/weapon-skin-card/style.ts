import styled from "styled-components";

export const UlWeaponSkinCardStyle = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  overflow: scroll;
  width: 100%;
  padding: 2rem;
  gap: 1rem;

  @media(min-width: 768px){
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const WeaponSkinCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 250px;
  height: 250px;
  background-color: white;
  color: var(--red-1);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  position: relative;

  .skin-top{
    display: flex;
    align-items: center;
    max-height: 80%;
  }
  .skin-bottom{
    width: 90%;
    position: absolute;
    bottom: 0px;
    padding: 0 0 2rem 2rem;
  }

  img {
    max-width: 100%;
    margin-bottom: 1rem;
    max-height: 90%;
    object-fit: cover;
  }


  @media(min-width: 768px){
    min-width: 375px;
    max-width: 375px;
    height: 350px;
  }
`;
