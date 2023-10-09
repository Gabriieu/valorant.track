import { iMap } from "../../provider/types/@maps-types";
import { MapCardBottomStyle, MapCardStyle, MapCardTopStyle } from "./map.style";
import { useState } from "react";
import imageNotAvailable from "../../assets/Image_not_available.png"

interface iMapProp {
  map: iMap;
}
export const MapCard = ({ map }: iMapProp) => {
  const [displayPlan, setDisplayPlan] = useState<boolean>(false);

  return displayPlan ? (
    <MapCardStyle  onClick={() => setDisplayPlan(!displayPlan)}>
      <MapCardTopStyle>
        <img className="map-img" src={map.splash} alt={map.displayName} />
        {map.displayIcon ? (
          <img className="map-description" src={map.displayIcon} alt={map.displayName} />
        ) : (
          <img className="map-description" src={imageNotAvailable} alt="Imagem não disponível" />
        )}
      </MapCardTopStyle>
      <MapCardBottomStyle className="map-name">
        <h1>{map.displayName.toUpperCase()}</h1>
      </MapCardBottomStyle>
    </MapCardStyle>
  ) : (
    <MapCardStyle  onClick={() => setDisplayPlan(!displayPlan)}>
      <MapCardTopStyle>
        <img className="map-img" src={map.splash} alt={map.displayName} />
        {map.narrativeDescription ? (
          <p className="map-description">{map.narrativeDescription}</p>
        ) : (
          <p className="map-description">
            Ops... esse mapa ainda não possui descrição 🥺
          </p>
        )}
      </MapCardTopStyle>
      <MapCardBottomStyle className="map-name">
        <h1>{map.displayName.toUpperCase()}</h1>
      </MapCardBottomStyle>
    </MapCardStyle>
  );
};
