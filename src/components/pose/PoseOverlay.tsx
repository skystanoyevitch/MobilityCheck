import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { calculateAngle } from "@/utils/angleCalculations";
import { useState } from "react";

type Point = { x: number; y: number };

export default function PoseOverlay() {
  const [points, setPoints] = useState<Point[]>([]);

  function handleTap(event: any) {
    const { locationX, locationY } = event.nativeEvent;

    if (points.length < 3) {
      const newPoint: Point = { x: locationX, y: locationY };
      setPoints([...points, newPoint]);
    }
  }

  return (
    <>
      <View style={styles.cameraOverlay} onTouchEnd={handleTap}></View>
    </>
  );
}

const styles = StyleSheet.create({
  cameraOverlay: StyleSheet.absoluteFillObject,
});
