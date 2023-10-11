export interface iBuddie {
    uuid: string
    displayName: string
    isHiddenIfNotOwned: boolean
    themeUuid: any
    displayIcon: string
    assetPath: string
    levels: iLevel[]
  }
  
  export interface iLevel {
    uuid: string
    charmLevel: number
    hideIfNotOwned: boolean
    displayName: string
    displayIcon: string
    assetPath: string
  }