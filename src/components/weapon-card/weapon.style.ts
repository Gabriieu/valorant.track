import styled from "styled-components";

export const WeaponCardStyle = styled.li`
  background-color: white;
  color: black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  margin: 32px 12px 32px 12px;
  padding: 16px;

  img {
    max-width: 100%;
    max-height: 150px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 15px rgba(253, 69, 86, 1);
    .weapon-img {
      transform: scale(0.7) rotate(10deg);
    }
  }
  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

export const WeaponStatsStyle = styled.div`
  align-self: flex-start;
  justify-self: flex-end;
  gap: 800px;

  h2 {
    color: var(--red-1);
  }
`;

export const CurrencyStyle = styled.img`
  width: 16px;
  height: 16px;
`;
