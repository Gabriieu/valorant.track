import riotLogo from "../../assets/LOL_CMS_317_Tile_01-Feature_H50-V50-min_bz7waxz83vsjvua6mn4h.png";
import linkedInLogo from "../../assets/logotipo-quadrado-do-linkedin-isolado-no-fundo-branco_469489-892.png";
import gitHubLogo from "../../assets/github-logo-2E3852456C-seeklogo.com.png";
import { FooterBottomDiv, FooterStyle, FooterTopDiv } from "./footer.style";
import {ImHeart} from "react-icons/im"

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterTopDiv>
        <p>
          Atenção: Esta página foi criada apenas como um projeto pessoal, não
          possuo qualquer vínculo com a Riot Games.
        </p>
        <p>
          Para obtenção dos dados foi utilizada a API pública da Riot Games, que
          pode ser acessada{" "}
          <a href="https://dash.valorant-api.com/" target="_blank">
            neste link.
          </a>
        </p>
      </FooterTopDiv>
      <FooterBottomDiv>
        <a href="https://www.riotgames.com/pt-br" target="_blank">
          <img id="riot-logo" src={riotLogo} alt="RIOT GAMES" />
        </a>
        <div>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9gabrielsouza/"
            target="_blank"
          >
            <img id="linkedin-logo" src={linkedInLogo} alt="Meu LinkedIn" />
          </a>
          <a href="https://github.com/Gabriieu" target="_blank">
            <img id="git-logo" src={gitHubLogo} alt="Meu GitHub" />
          </a>
          <h6>Made with <ImHeart/> by José Gabriel</h6>
        </div>
      </FooterBottomDiv>
    </FooterStyle>
  );
};
