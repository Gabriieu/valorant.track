import { iSkin } from "../../provider/types/@weapon-types";
import { WeaponSkinCardStyle } from "./style";
import imageNotAvailable from "../../assets/Image_not_available.png";

interface iWeaponSkinCardProp {
  skin: iSkin;
}

export const WeaponSkinCard = ({ skin }: iWeaponSkinCardProp) => {
  return skin.chromas.map((skinVariation) => (
    <WeaponSkinCardStyle key={skinVariation.uuid}>
      <div className="skin-top">
        {skinVariation.displayIcon ? (
          <img src={skinVariation.displayIcon} alt={skinVariation.displayName} />
        ) : (
          //<h1>Imagem não disponível</h1>
          <img src={imageNotAvailable} alt={skinVariation.displayName} />
        )}
      </div>
      <div className="skin-bottom">
        <h1>{skinVariation.displayName}</h1>
      </div>
    </WeaponSkinCardStyle>
  ));
};
