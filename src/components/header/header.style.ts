import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: var(--red-1);
  padding: 0 24px 0 24px;

  #hamb-menu {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const LogoStyle = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const DropDownMenu = styled.div`
  position: fixed;
  top: 80px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-size: 32px;
      font-weight: 800;
      padding: 0.6rem 0 0.6rem 1rem;
      a {
        color: white;
      }
    }
  }
`;

export const NavigationList = styled.nav`
  display: none;

  li {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 8px;
  }
  @media (min-width: 1024px) {
    display: block;
    ul {
      display: flex;
      flex-direction: row;
      gap: 8px;

      li {
        &:hover {
          cursor: pointer;
          background-color: var(--red-2);
          border-radius: 8px;
          border-bottom: 1px solid white;
        }
      }
    }
  }
`;
