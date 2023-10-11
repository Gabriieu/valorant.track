import { iSkin } from "../../provider/types/@weapon-types";
import { WeaponSkinCardStyle } from "./style";
import imageNotAvailable from "../../assets/Image_not_available.png";
import { useEffect, useState } from "react";

interface iWeaponSkinCardProp {
  skin: iSkin;
}

export const WeaponSkinCard = ({ skin }: iWeaponSkinCardProp) => {
  const [cancel, setCancel] = useState<boolean>(false);

  useEffect(() => {
    /* skin.chromas.forEach((skinVariation: iChroma) => {
      if (
        skinVariation.displayName.includes("Standard") ||
        !skinVariation.displayIcon
      ) {
        setCancel(true);
      }
    }); */
  });

  return (
    !cancel &&
    skin.chromas.map((skinVariation) => (
      <WeaponSkinCardStyle key={skinVariation.uuid}>
        <div className="skin-top">
          {skinVariation.displayIcon ? (
            <img
              src={skinVariation.displayIcon}
              alt={skinVariation.displayName}
            />
          ) : (
            <img src={imageNotAvailable} alt={skinVariation.displayName} />
          )}
        </div>
        <div className="skin-bottom">
          <h1>{skinVariation.displayName}</h1>
        </div>
      </WeaponSkinCardStyle>
    ))
  );
};
