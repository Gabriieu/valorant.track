import { iWeapon } from "../../provider/types/@weapon-types";
import { CurrencyStyle, WeaponCardStyle, WeaponStatsStyle } from "./weapon.style";
import currencyIcon from "../../assets/currency-icon.webp"

interface iWeaponProp {
  weapon: iWeapon;
}
export const WeaponCard = ({ weapon }: iWeaponProp) => {
  return (
    <WeaponCardStyle>
      <div>
        <img className="weapon-img" src={weapon.displayIcon} alt={weapon.displayName} />
      </div>
      <WeaponStatsStyle>
        <h2>{weapon.displayName}</h2>
        {weapon.shopData ? (
          <>
            <h4>{weapon.shopData.categoryText}</h4>
            <h4><CurrencyStyle src={currencyIcon} alt="" /> {weapon.shopData.cost}</h4>
          </>
        ) : null}
      </WeaponStatsStyle>
    </WeaponCardStyle>
  );
};
