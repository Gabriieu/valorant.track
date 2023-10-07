export interface iAgent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: any;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: iRole;
  recruitmentData: any;
  abilities: iAbility[];
  voiceLine: any;
}

export interface iRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface iAbility {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}
