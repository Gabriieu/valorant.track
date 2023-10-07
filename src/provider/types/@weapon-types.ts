export interface iWeapon {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    killStreamIcon: string
    assetPath: string
    weaponStats: iWeaponStats
    shopData: iShopData
    skins: iSkin[]
  }
  
  export interface iWeaponStats {
    fireRate: number
    magazineSize: number
    runSpeedMultiplier: number
    equipTimeSeconds: number
    reloadTimeSeconds: number
    firstBulletAccuracy: number
    shotgunPelletCount: number
    wallPenetration: string
    feature: string
    fireMode: any
    altFireType: string
    adsStats: iAdsStats
    altShotgunStats: any
    airBurstStats: any
    damageRanges: iDamageRange[]
  }
  
  export interface iAdsStats {
    zoomMultiplier: number
    fireRate: number
    runSpeedMultiplier: number
    burstCount: number
    firstBulletAccuracy: number
  }
  
  export interface iDamageRange {
    rangeStartMeters: number
    rangeEndMeters: number
    headDamage: number
    bodyDamage: number
    legDamage: number
  }
  
  export interface iShopData {
    cost: number
    category: string
    categoryText: string
    gridPosition: iGridPosition
    canBeTrashed: boolean
    image: any
    newImage: string
    newImage2: any
    assetPath: string
  }
  
  export interface iGridPosition {
    row: number
    column: number
  }
  
  export interface iSkin {
    uuid: string
    displayName: string
    themeUuid: string
    contentTierUuid?: string
    displayIcon?: string
    wallpaper: any
    assetPath: string
    chromas: iChroma[]
    levels: iLevel[]
  }
  
  export interface iChroma {
    uuid: string
    displayName: string
    displayIcon?: string
    fullRender: string
    swatch?: string
    streamedVideo?: string
    assetPath: string
  }
  
  export interface iLevel {
    uuid: string
    displayName: string
    levelItem?: string
    displayIcon?: string
    streamedVideo?: string
    assetPath: string
  }
  