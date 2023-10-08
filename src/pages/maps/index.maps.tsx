import { Header } from "../../components/header";
import { useEffect, useContext } from "react";
import { MainContext } from "../../provider/main.provider";
import { MapCard } from "../../components/map-card/map.card";
import { GoToTopButtonStyle, MainStyle, TitleStyle } from "../agents/style";
import { UlStyle } from "../weapons/weapons.style";
import { Footer } from "../../components/footer/footer.index";
import { TfiArrowCircleUp } from "react-icons/tfi";
export const MapsPage = () => {
  const { getMaps, maps } = useContext(MainContext);

  useEffect(() => {
    getMaps();
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <TitleStyle>
          <h3>MAPAS</h3>
          <p>
            Conheça os mapas de Valorant, onde cada um deles é como um palco
            para destacar sua habilidade. Esses mapas foram especialmente
            criados para estratégias de equipe, movimentos espetaculares e
            momentos eletrizantes.
          </p>
        </TitleStyle>
        <UlStyle>
          {maps.map((map) => {
            return <MapCard map={map} key={map.uuid} />;
          })}
        </UlStyle>
      </MainStyle>
      <GoToTopButtonStyle
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <TfiArrowCircleUp color="white" size={48} />
      </GoToTopButtonStyle>
      <Footer />
    </>
  );
};
