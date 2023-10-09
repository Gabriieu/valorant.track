import { iMap } from "../../provider/types/@maps-types";
import { MapCardBottomStyle, MapCardStyle, MapCardTopStyle } from "./map.style";
import { useState } from "react";

interface iMapProp {
  map: iMap;
}
export const MapCard = ({ map }: iMapProp) => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <MapCardStyle onClick={() => setDisplay(!display)}>
        <MapCardTopStyle>
          <img className="map-img" src={map.splash} alt={map.displayName} />
          {map.narrativeDescription ? (
            <p className="map-plan">{map.narrativeDescription}</p>
          ) : (
            <p className="map-plan">
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
