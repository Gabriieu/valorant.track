import styled from "styled-components";

export const BuddieCardStyle = styled.li`
    margin: 1rem;
    width: 250px;
    height: 250px;
    background-color: white;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .buddie-image{
        max-height: 70%;
        object-fit: fill;
    }

    div{
        background-color: var(--red-1);
        max-width: 100%;
        padding: 8px;
        border-radius: 8px;

        h1{
            text-align: center;
        }
    }
`