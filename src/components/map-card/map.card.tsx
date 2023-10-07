import { iMap } from "../../provider/types/@maps-types"
import { MapCardBottomStyle, MapCardStyle, MapCardTopStyle } from "./map.style"

interface iMapProp {
    map: iMap
}
export const MapCard = ({map}: iMapProp) => {
    return (
        <MapCardStyle>
            <MapCardTopStyle>
                <img className="map-img" src={map.splash} alt={map.displayName} />
                <img className="map-plan" src={map.displayIcon} alt={map.displayName} />
            </MapCardTopStyle>
            <MapCardBottomStyle className="map-name">
                <h1>{map.displayName.toUpperCase()}</h1>
            </MapCardBottomStyle>
        </MapCardStyle>
    )
}