import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCamera } from "@/hooks/useCamera";
import { Camera } from "react-native-vision-camera-v3-pose-detection";
import { usePoseDetection } from "@/hooks/usePoseDetection";

const CameraView = () => {
  const { hasPermission, device } = useCamera();
  const { handlePoseDetection } = usePoseDetection();

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

  return (
    <Camera
      device={device}
      isActive={true}
      style={styles.camera}
      callback={handlePoseDetection}
      options={{}}
    />
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
