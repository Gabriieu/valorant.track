import { Header } from "../../components/header";
import { WeaponCard } from "../../components/weapon-card/weapon.card";
import { MainContext } from "../../provider/main.provider";
import {
  GoToTopButtonStyle,
  MainStyle,
  SelectStyle,
  TitleStyle,
} from "../agents/style";
import { useContext, useEffect, useState } from "react";
import { UlStyle } from "./weapons.style";
import { Footer } from "../../components/footer/footer.index";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { iWeapon } from "../../provider/types/@weapon-types";

export const WeaponsPage = () => {
  const { weapons, getWeapons } = useContext(MainContext);
  const [filteredWeapons, setFilteredWeapons] = useState<iWeapon[] | []>([]);
  useEffect(() => {
    getWeapons();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, []);

  const filterWeapon = (weaponType: string) => {
    if (weaponType == "") {
      setFilteredWeapons([]);
    } else {
      const removeKnife = weapons.filter((weapon) => weapon.shopData !== null);
      setFilteredWeapons(
        removeKnife.filter(
          (weapon) => weapon.shopData.categoryText === weaponType
        )
      );
    }
  };

  return (
    <>
      <Header />
      <MainStyle>
        <TitleStyle>
          <h3>ARMAS</h3>
          <p>
            Agentes utilizam armamentos para infligir danos e neutralizar
            agentes inimigos e suas utilidades.
          </p>
        </TitleStyle>
        <SelectStyle onChange={(event) => filterWeapon(event.target.value)}>
          <option value="">Todos</option>
          <option value="Armas Pesadas">Armas Pesadas</option>
          <option value="Fuzis de Assalto">Fuzis de Assalto</option>
          <option value="Escopetas">Escopetas</option>
          <option value="Armas Leves">Armas Leves</option>
          <option value="Fuzis de Precisão">Fuzis de Precisão</option>
          <option value="Submetralhadoras">Submetralhadoras</option>
        </SelectStyle>
        <UlStyle>
          {filteredWeapons.length > 0
            ? filteredWeapons.map((weapon) => (
                <WeaponCard weapon={weapon} key={weapon.uuid} />
              ))
            : weapons.map((weapon) => (
                <WeaponCard weapon={weapon} key={weapon.uuid} />
              ))}
          {/* {weapons.map((weapon) => {
            return <WeaponCard weapon={weapon} key={weapon.uuid} />;
          })} */}
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
