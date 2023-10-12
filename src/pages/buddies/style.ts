import styled from "styled-components";

export const LoadMoreStyle = styled.div`
  background-color: var(--grey--scale--grey-1);
  padding: 8px;
  border-radius: 8px;
  margin: 3rem;
  border: 1px solid var(--red-2);

  button {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: var(--red-1);
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const SearchBarStyle = styled.div`
  align-self: center;

  input {
    padding: 8px;
    border-radius: 8px;
  }
`;
