import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CameraView from "@/components/camera/CameraView";

export default function App() {
  const handlePoseDetected = (pose: any) => {
    console.log("Pose detected!", pose?.landmarks?.length);
  };

  return (
    <View style={styles.container}>
      <CameraView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
