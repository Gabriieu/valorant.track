import valorantLogo from "../../assets/valorant-logo-freelogovectors.net_.webp";
import {
  ContainerBottom,
  ContainerTop,
  HeroLogoStyle,
  WelcomeComponentStyle,
} from "./welcome.style";
import astra from "../../assets/Astra_Artwork_Full.webp";
import fenix from "../../assets/V_AGENTS_587x900_Phx.png"

export const WelcomeComponent = () => {
  return (
    <>
      <ContainerTop>
        <WelcomeComponentStyle>
          <div>
            <h4>Olá, Jogador</h4>
            <h5>Bem vindo ao </h5>
            <div id="div">
              <img src={valorantLogo} alt="" />
              <h3>ARENA</h3>
            </div>
          </div>
          <div>
            <p>
              Aqui você pode consultar os itens do Valorant, incluindo detalhes
              sobre os agentes, armas, mapas, skins, e muito mais. Explore todas
              as informações que você precisa para se tornar um jogador de
              Valorant ainda mais experiente e bem informado.
            </p>
          </div>
        </WelcomeComponentStyle>
        <HeroLogoStyle>
          <img src={astra} alt="Viper" />
        </HeroLogoStyle>
      </ContainerTop>
      <ContainerBottom>
        <div>
          <div className="container-div">
            <h4 className="title">SOBRE ESTE PROJETO</h4>
            <p className="description">
              Projeto desenvolvido com React, TypeScript e Styled-Components,
              utilizando como fonte dos dados a API pública da Riot Games. Este
              projeto foi criado apenas para propósitos acadêmicos, deixo
              explícito que não possuo qualquer vínculo com a Riot Games, todos
              os direitos autorais pertencem exclusivamente à Riot Games.
            </p>
          </div>
          <div className="container-div">
            <h4 className="title">SOBRE O AUTOR</h4>
            <p className="description">
              Me chamo José Gabriel, tenho 25 anos, sou formado em
              Desenvolvimento Web Full Stack na Kenzie Academy Brasil e
              atualmente sou estudante de Engenharia de Computação. No meu tempo
              livre costumo estudar novas tecnologias e pôr em práticas alguns
              projetos que me permitem aplicar o conhecimento adquirido.
            </p>
          </div>
          <div className="container-div">
            <h4 className="title">SOBRE O JOGO</h4>
            <p className="description">
              Valorant é um eletrizante jogo de tiro tático em primeira pessoa
              (FPS) desenvolvido pela Riot Games, conhecido por sua habilidade
              única em fundir elementos de estratégia tática e tiroteios de alta
              precisão. Lançado em 2020, o jogo rapidamente conquistou um lugar
              de destaque no mundo dos esports e ganhou uma base de fãs
              apaixonada. Em Valorant, os jogadores entram em partidas 5v5,
              divididos em dois times: atacantes e defensores. O objetivo varia
              de acordo com o modo de jogo, mas geralmente envolve plantar ou
              desarmar um dispositivo chamado Spike. O jogo oferece uma seleção
              diversificada de agentes, cada um com habilidades únicas que podem
              ser usadas para ganhar vantagem tática. Isso adiciona uma camada
              estratégica fascinante, onde o trabalho em equipe e a coordenação
              são cruciais. Valorant também é conhecido por seu constante
              suporte e atualizações pela Riot Games, incluindo novos agentes,
              mapas e correções de balanceamento. Além disso, o jogo tem uma
              cena competitiva robusta, com torneios de alto nível e uma base de
              jogadores dedicada que se esforça para se destacar nas
              classificatórias e eventos profissionais.
            </p>
          </div>
        </div>
        <div id="kayo-icon">
          <img src={fenix} alt="kayo" />
        </div>
      </ContainerBottom>
    </>
  );
};
