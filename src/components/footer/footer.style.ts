import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  gap: 32px;
  background-color: var(--red-1);
  padding: 48px;
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

    div{
        a{
            margin: 0 16px 0 16px;
        }
    }
  #riot-logo {
    height: 150px;
  }

  #linkedin-logo{
    height: 40px;
    width: 40px;
  }

  #git-logo{
    height: 40px;
    width: 40px;
    border-radius: 8px;
  }
`;
