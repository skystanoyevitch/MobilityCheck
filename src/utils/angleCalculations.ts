/**
 * Calculate the angle between three points
 * @param point1 - First point (e.g., shoulder)
 * @param point2 - Vertex point (e.g., elbow) - this is where the angle is measured
 * @param point3 - Third point (e.g., wrist)
 * @returns Angle in degrees (0-180)
 */
export function calculateAngle(
  point1: { x: number; y: number },
  point2: { x: number; y: number },
  point3: { x: number; y: number },
): number {
  // Create vectors from vertex (point2) to the other points
  const vector1 = {
    x: point1.x - point2.x,
    y: point1.y - point2.y,
  };

  const vector2 = {
    x: point3.x - point2.x,
    y: point3.y - point2.y,
  };

  // Calculate angles of each vector
  const angle1 = Math.atan2(vector1.y, vector1.x);
  const angle2 = Math.atan2(vector2.y, vector2.x);

  // Find difference between angles
  let angle = angle2 - angle1;

  // Convert from radians to degrees
  angle = angle * (180 / Math.PI);

  // Normalize to 0-180 range
  angle = Math.abs(angle);
  if (angle > 180) {
    angle = 360 - angle;
  }

  return Math.round(angle); // Round to nearest degree
}
