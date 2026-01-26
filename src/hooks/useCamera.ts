import { useState, useEffect } from "react";
import { Camera, CameraDevice } from "react-native-vision-camera";

export function useCamera() {
  const [hasPermission, setHasPermission] = useState(false);
  const [device, setDevice] = useState<CameraDevice | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "granted");
    };

    requestPermission();
  }, []);

  useEffect(() => {
    const getCameraDevice = async () => {
      const devices = await Camera.getAvailableCameraDevices();
      const frontCamera = devices.find((d) => d.position === "front");
      setDevice(frontCamera ?? null);
    };
    getCameraDevice();
  }, [hasPermission]);

  return { hasPermission, device };
}
