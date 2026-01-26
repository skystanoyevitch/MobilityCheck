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
      <View style={styles.cameraOverlay} onTouchEnd={handleTap}>
        {points.map((point, index) => (
          <View
            key={index}
            style={[styles.circle, { left: point.x - 10, top: point.y - 10 }]}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cameraOverlay: StyleSheet.absoluteFillObject,
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
  },
});
