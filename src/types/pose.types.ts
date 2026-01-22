export interface PoseLandmark {
  x: number;
  y: number;
  z?: number;
  confidence: number;
}

export interface Pose {
  landmarks: PoseLandmark[];
  timestamp: number;
}

export interface ShoulderLandmarks {
  shoulder: PoseLandmark;
  elbow: PoseLandmark;
  wrist: PoseLandmark;
  hip: PoseLandmark;
}
