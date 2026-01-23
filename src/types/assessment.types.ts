export interface Assessment {
  id: string;
  timestamp: string;
  angleData: { baseline: number; maxROM: number };
  side: "left" | "right";
  movementType: "flexion";
  imageQualityScore: number;
}
