import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "react-native-vision-camera";
import { useCamera } from "@/hooks/useCamera";

const CameraView = () => {
  const { hasPermission, device } = useCamera();

  if (!device) {
    return (
      <View style={styles.container}>
        <Text>Loading Camera...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
