import styled from "styled-components";

export const SkillCardStyle = styled.li`
  list-style: none;
  background-color: var(--grey--scale--grey-1);
  border-radius: 8px;
  padding: 8px;
  width: 70%;
  margin-top: 3rem;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .skill-title {
  }

  .skill-logo {
    width: 50px;
    height: 50px;
  }

  .skill {
    margin-top: 1.5rem;
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    p {
      text-align: justify;
    }
  }

  &&:hover {
    cursor: pointer;
  }

  @media(min-width: 1024px){
    width: 50%;
  }
`;
