import { iWeapon } from "../../provider/types/@weapon-types";
import {
  CurrencyStyle,
  WeaponCardStyle,
  WeaponDamageStyle,
  WeaponStatsStyle,
} from "./weapon.style";
import currencyIcon from "../../assets/currency-icon.webp";
import { useNavigate, useParams } from "react-router-dom";
import { UlStyle } from "../../pages/weapons/weapons.style";

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
    <UlStyle>
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
                <CurrencyStyle src={currencyIcon} alt="" />{" "}
                {weapon.shopData.cost}
              </h4>
            </>
          ) : null}
        </WeaponStatsStyle>
      </WeaponCardStyle>
      {weaponId && (
        <WeaponDamageStyle>
          <h1>DANO</h1>
          <div>
            {weapon.weaponStats.damageRanges[0] && (
              <div>
                <h1>
                  Até {weapon.weaponStats.damageRanges[0].rangeEndMeters} m
                </h1>
                <h2>Cabeça: {weapon.weaponStats.damageRanges[0].headDamage}</h2>
                <h2>Corpo: {weapon.weaponStats.damageRanges[0].bodyDamage}</h2>
                <h2>Pernas: {weapon.weaponStats.damageRanges[0].legDamage}</h2>
              </div>
            )}
            {weapon.weaponStats.damageRanges[1] && (
              <div>
                <h1>
                  Até {weapon.weaponStats.damageRanges[1].rangeEndMeters} m
                </h1>
                <h2>
                  Cabeça:{" "}
                  {weapon.weaponStats.damageRanges[1].headDamage || null}
                </h2>
                <h2>Corpo: {weapon.weaponStats.damageRanges[1].bodyDamage}</h2>
                <h2>Pernas: {weapon.weaponStats.damageRanges[1].legDamage}</h2>
              </div>
            )}
          </div>
        </WeaponDamageStyle>
      )}
    </UlStyle>
  );
};
