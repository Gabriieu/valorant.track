export interface iMap {
    uuid: string
    displayName: string
    narrativeDescription: string
    tacticalDescription: string
    coordinates: string
    displayIcon: string
    listViewIcon: string
    splash: string
    assetPath: string
    mapUrl: string
    xMultiplier: number
    yMultiplier: number
    xScalarToAdd: number
    yScalarToAdd: number
    callouts: iCallout[]
  }
  
  export interface iCallout {
    regionName: string
    superRegionName: string
    location: iLocation
  }
  
  export interface iLocation {
    x: number
    y: number
  }
  