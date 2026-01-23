import { useRef, useState } from "react";
import { Frame } from "react-native-vision-camera";
import { useFrameProcessor } from "react-native-vision-camera";
import { Pose } from "@/types/pose.types";

export function usePoseDetection() {
  const [currentPose, setCurrentPose] = useState<Pose | null>(null);
  const frameCount = useRef<number>(0);
}
