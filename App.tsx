import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CameraView from "@/components/camera/CameraView";
import PoseOverlay from "@/components/pose/PoseOverlay";

export default function App() {
  const handlePoseDetected = (pose: any) => {
    console.log("Pose detected!", pose?.landmarks?.length);
  };

  return (
    <View style={styles.container}>
      <CameraView />
      <PoseOverlay />
      {/* <Text>Testing..</Text> */}
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
