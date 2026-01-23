/**
 * ML Kit Pose Detection landmark indices
 * https://developers.google.com/ml-kit/vision/pose-detection
 *
 * ML Kit detects 33 landmarks on the body.
 * Each landmark has an index (0-32).
 * These constants make our code more readable.
 */

// Instead of writing: landmarks[11]
// We can write: landmarks[POSE_LANDMARKS.LEFT_SHOULDER]
// Much clearer!

export const POSE_LANDMARKS = {
  // Head
  NOSE: 0,
  LEFT_EYE_INNER: 1,
  LEFT_EYE: 2,
  LEFT_EYE_OUTER: 3,
  RIGHT_EYE_INNER: 4,
  RIGHT_EYE: 5,
  RIGHT_EYE_OUTER: 6,
  LEFT_EAR: 7,
  RIGHT_EAR: 8,
  MOUTH_LEFT: 9,
  MOUTH_RIGHT: 10,

  // Upper body - LEFT side
  LEFT_SHOULDER: 11,
  LEFT_ELBOW: 13,
  LEFT_WRIST: 15,
  LEFT_PINKY: 17,
  LEFT_INDEX: 19,
  LEFT_THUMB: 21,

  // Upper body - RIGHT side
  RIGHT_SHOULDER: 12,
  RIGHT_ELBOW: 14,
  RIGHT_WRIST: 16,
  RIGHT_PINKY: 18,
  RIGHT_INDEX: 20,
  RIGHT_THUMB: 22,

  // Lower body - LEFT side
  LEFT_HIP: 23,
  LEFT_KNEE: 25,
  LEFT_ANKLE: 27,
  LEFT_HEEL: 29,
  LEFT_FOOT_INDEX: 31,

  // Lower body - RIGHT side
  RIGHT_HIP: 24,
  RIGHT_KNEE: 26,
  RIGHT_ANKLE: 28,
  RIGHT_HEEL: 30,
  RIGHT_FOOT_INDEX: 32,
} as const;

// This creates a type from the values
// So TypeScript knows these are the only valid landmark indices
export type PoseLandmarkIndex =
  (typeof POSE_LANDMARKS)[keyof typeof POSE_LANDMARKS];
