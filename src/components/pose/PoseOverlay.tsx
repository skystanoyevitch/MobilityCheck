import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { calculateAngle } from "@/utils/angleCalculations";
import { useState } from "react";

type Point = { x: number; y: number };
type CapturedPhoto = string | null;

interface PoseOverlayProps {
  onTakePhoto: () => Promise<string | null>;
}

export default function PoseOverlay({ onTakePhoto }: PoseOverlayProps) {
  const [points, setPoints] = useState<Point[]>([]);
  const [capturedPhoto, setCapturedPhoto] = useState<CapturedPhoto>(null);

  function handleTap(event: any) {
    const { locationX, locationY } = event.nativeEvent;

    if (points.length < 3) {
      const newPoint: Point = { x: locationX, y: locationY };
      setPoints([...points, newPoint]);
    }
  }
  async function handleCapture(event: any) {
    const photoPath = await onTakePhoto();
    if (photoPath) {
      setCapturedPhoto(photoPath);
    }
  }

  const angle =
    points.length === 3
      ? calculateAngle(points[0], points[1], points[2])
      : null;

  return (
    <>
      {capturedPhoto && (
        <Image
          source={{ uri: `file://${capturedPhoto}` }}
          style={styles.capturedPhoto}
          resizeMode="contain"
        />
      )}
      <View style={styles.cameraOverlay} onTouchEnd={handleTap}>
        {points.map((point, index) => (
          <View
            key={index}
            style={[styles.circle, { left: point.x - 10, top: point.y - 10 }]}
          />
        ))}
        {angle && <Text style={styles.angleText}>Angle: {angle}°</Text>}
        {!capturedPhoto && (
          <TouchableOpacity
            style={styles.captureButton}
            onPress={handleCapture}
          >
            <Text style={styles.captureButtonText}>Capture Photo</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cameraOverlay: StyleSheet.absoluteFillObject,
  capturedPhoto: StyleSheet.absoluteFillObject,
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
  },
  angleText: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 8,
  },
  captureButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 15,
    borderRadius: 10,
  },
  captureButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
