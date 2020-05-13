const calculateAngle = (targetMastHeight, targetLength1, angularMast, angularLength, zoom) => {
  let distance = 100 * ((targetMastHeight / angularMast) * zoom);
  let bowAngle = Math.asin(distance * (Math.tan(angularLength / (100 * zoom)) / targetLength1)) * (180 / Math.PI);

  return {distance, bowAngle};
}

const calculateSpeed = (lineOfSightAngle, angleOnBow, subSpeed, timeToCross, targetLength2) => {
  let vMesure = (targetLength2 / timeToCross);
  let speedInKnots = vMesure * 1.94384;
  
  let targetVelocity = (subSpeed * Math.cos((180 - (angleOnBow + lineOfSightAngle)) * (Math.PI / 180))) + speedInKnots;

  // (180 / Math.PI)

  return targetVelocity;
}

export {
  calculateAngle,
  calculateSpeed
}