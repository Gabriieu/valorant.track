import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey--scale--grey-1);
  padding: 2rem;
`;

export const FooterTopDiv = styled.div`
  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    text-align: center;
    margin-bottom: 16px;
  }
`;

export const FooterBottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        a{
            margin: 0 16px 0 16px;
        }
    }
  #riot-logo {
    height: 75px;
  }


  #git-logo, #linkedin-logo{
    height: 40px;
    width: 40px;
    border-radius: 5px;
    margin-bottom: 12px;
  }
`;
