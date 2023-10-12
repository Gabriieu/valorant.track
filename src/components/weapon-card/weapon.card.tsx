import { iWeapon } from "../../provider/types/@weapon-types";
import {
  CurrencyStyle,
  WeaponCardStyle,
  WeaponDamageStyle,
  WeaponStatsStyle,
} from "./weapon.style";
import currencyIcon from "../../assets/currency-icon.webp";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { UlStyle } from "../../pages/weapons/weapons.style";

interface iWeaponProp {
  weapon: iWeapon;
}

export const WeaponCard = ({ weapon }: iWeaponProp) => {
  const navigate = useNavigate();
  const { weaponId } = useParams();
  const [display, setDisplay] = useState<"hide" | "show">("hide");

  const goToWeaponPage = () => {
    if (!weaponId) {
      navigate(`/armas/${weapon.uuid}`);
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
      {weaponId && weapon.weaponStats && (
        <WeaponDamageStyle
          onMouseEnter={() => setDisplay("show")}
          onMouseLeave={() => setDisplay("hide")}
        >
          <h1>DANO</h1>
          <div>
            {weapon.weaponStats.damageRanges[0] && (
              <div>
                <h1>
                  Até {weapon.weaponStats.damageRanges[0].rangeEndMeters} m
                </h1>
                <h2>Cabeça: {weapon.weaponStats.damageRanges[0].headDamage.toFixed(2)}</h2>
                <h2>Corpo: {weapon.weaponStats.damageRanges[0].bodyDamage.toFixed(2)}</h2>
                <h2>Pernas: {weapon.weaponStats.damageRanges[0].legDamage.toFixed(2)}</h2>
              </div>
            )}
            {weapon.weaponStats.damageRanges[1] && (
              <div>
                <h1>
                  Até {weapon.weaponStats.damageRanges[1].rangeEndMeters} m
                </h1>
                <h2>
                  Cabeça:{" "}
                  {weapon.weaponStats.damageRanges[1].headDamage.toFixed(2) || null}
                </h2>
                <h2>Corpo: {weapon.weaponStats.damageRanges[1].bodyDamage.toFixed(2)}</h2>
                <h2>Pernas: {weapon.weaponStats.damageRanges[1].legDamage.toFixed(2)}</h2>
              </div>
            )}
          </div>
          <div className={display}>
            <h1>ESTATÍSTICAS</h1>
            <div>
              {weapon.weaponStats.adsStats ? (
                <>
                  <h2>Zoom: {weapon.weaponStats.adsStats.zoomMultiplier}x</h2>
                  <h2>
                    Taxa de disparo: {weapon.weaponStats.adsStats.fireRate.toFixed(2)}{" "}
                    tiros/segs.
                  </h2>
                  <h2>
                    Multiplicador de corrida:{" "}
                    {weapon.weaponStats.adsStats.runSpeedMultiplier}x
                  </h2>
                </>
              ) : (
                <h2>Não há dados disponíveis para a {weapon.displayName}</h2>
              )}
            </div>
          </div>
        </WeaponDamageStyle>
      )}
    </UlStyle>
  );
};
