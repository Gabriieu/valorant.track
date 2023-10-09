import { iWeapon } from "../../provider/types/@weapon-types";
import {
  CurrencyStyle,
  WeaponCardStyle,
  WeaponStatsStyle,
} from "./weapon.style";
import currencyIcon from "../../assets/currency-icon.webp";
import { useNavigate, useParams } from "react-router-dom";

interface iWeaponProp {
  weapon: iWeapon;
}

export const WeaponCard = ({ weapon }: iWeaponProp) => {
  const navigate = useNavigate();
  const { weaponId } = useParams();

  const goToWeaponPage = () => {
    if (!weaponId) {
      navigate(`/weapons/${weapon.uuid}`);
    }
  };

  return (
    <WeaponCardStyle onClick={() => goToWeaponPage()}>
      <div>
        <img
          className="weapon-img"
          src={weapon.displayIcon}
          alt={weapon.displayName}
        />
      </div>
      <WeaponStatsStyle>
        <h2>{weapon.displayName}</h2>
        {weapon.shopData ? (
          <>
            <h4>{weapon.shopData.categoryText}</h4>
            <h4>
              <CurrencyStyle src={currencyIcon} alt="" /> {weapon.shopData.cost}
            </h4>
          </>
        ) : null}
      </WeaponStatsStyle>
    </WeaponCardStyle>
  );
};
