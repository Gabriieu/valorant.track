import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header";
import { iSkin, iWeapon } from "../../provider/types/@weapon-types";
import { MainStyle } from "../agents/style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api/api";
import { toast } from "react-toastify";
import { WeaponCard } from "../../components/weapon-card/weapon.card";
import { WeaponSkinCard } from "../../components/weapon-skin-card/weapon-skin.card";
import { UlWeaponSkinCardStyle } from "../../components/weapon-skin-card/style";
import { GoToTop } from "../../components/go-to-top/go-to-top.index";

export const WeaponInfoPage = () => {
  const [weaponInfo, setWeaponInfo] = useState<iWeapon | null>(null);
  const { weaponId } = useParams();

  const getWeaponInfo = async (uuid: string) => {
    try {
      let response = await api.get(`/weapons/${uuid}?language=pt-BR`);
      setWeaponInfo(response.data.data);
    } catch (error) {
      toast.error("Arma não encontrada");
    }
  };

  useEffect(() => {
    getWeaponInfo(weaponId!);
    ///window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        {weaponInfo && <WeaponCard weapon={weaponInfo} key={weaponId} />}
        <h1>SKINS</h1>
        <UlWeaponSkinCardStyle>
          {weaponInfo?.skins.map((skin) => (
            <WeaponSkinCard skin={skin} key={skin.uuid} />
          ))}
        </UlWeaponSkinCardStyle>
      </MainStyle>
      <GoToTop />
      <Footer />
    </>
  );
};
