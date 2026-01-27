import { View, Text, StyleSheet } from "react-native";
import { useCamera } from "@/hooks/useCamera";
import { Camera } from "react-native-vision-camera";
import { usePoseDetection } from "@/hooks/usePoseDetection";
import { useRef } from "react";
import PoseOverlay from "../pose/PoseOverlay";

const CameraView = () => {
  const { hasPermission, device } = useCamera();
  const { handlePoseDetection } = usePoseDetection();
  const cameraRef = useRef<Camera>(null);

  if (!device) {
    return (
      <View style={styles.container}>
        <Text>Loading Camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Camera Permission Denied</Text>
      </View>
    );
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          flash: "off",
        });
        return photo.path;
      } catch (error) {
        console.error("Failed to take photo:", error);
        return null;
      }
    }
    return null;
  };

  return (
    <>
      <Camera
        device={device}
        ref={cameraRef}
        isActive={true}
        style={styles.camera}
        photo={true}
      />
      <PoseOverlay onTakePhoto={handleTakePhoto} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: StyleSheet.absoluteFillObject,
});

export default CameraView;
