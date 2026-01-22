export interface Assessment {
  id: number;
  timestamp: Date;
  angleData: { baseline: number; maxROM: number };
  shoulderLeft: string;
  shoulderRight: string;
  flexion: number;
  imageQualityScore: number;
}
