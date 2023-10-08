export interface iTiers {
    uuid: string
    assetObjectName: string
    tiers: iTier[]
    assetPath: string
  }
  
  export interface iTier {
    tier: number
    tierName: string
    division: string
    divisionName: string
    color: string
    backgroundColor: string
    smallIcon?: string
    largeIcon?: string
    rankTriangleDownIcon?: string
    rankTriangleUpIcon?: string
  }
  