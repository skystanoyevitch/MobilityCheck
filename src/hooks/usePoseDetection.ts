import { useState } from "react";

export function usePoseDetection() {
  const [currentPose, setCurrentPose] = useState<any>(null);

  const handlePoseDetection = (poseData: any) => {
    setCurrentPose(poseData);
  };

  return {
    currentPose,
    handlePoseDetection,
  };
}
