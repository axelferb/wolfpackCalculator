import React from 'react';
import './App.css';
import AngleCalculator from './Components/AngleCalculator/AngleCalculator';
import SpeedCalculator from './Components/SpeedCalculator/SpeedCalculator';
import { calculateAngle, calculateSpeed } from './Math/Math';

export default function App() {
  const [bowAngleCalculations, setBowAngleCalculations] = React.useState({});
  let { targetMastHeight, targetLength, angularMast, angularLength, zoom } = bowAngleCalculations;
  
  // Hardcoded 4.
  let calculatedAngle = calculateAngle(targetMastHeight, targetLength, angularMast, angularLength, zoom);


  const [speedCalculations, setSpeedCalculations] = React.useState({});
  let { lineOfSightAngle, subSpeed, timeToCross } = speedCalculations;
  let calculatedSpeed = calculateSpeed(lineOfSightAngle, calculatedAngle.bowAngle, subSpeed, timeToCross, targetLength);

  return (
    <div className="App">
      <AngleCalculator setBowAngleCalculations={setBowAngleCalculations} bowAngleCalculations={bowAngleCalculations} calculatedAngle={calculatedAngle} />
      <SpeedCalculator setSpeedCalculations={setSpeedCalculations} speedCalculations={speedCalculations} calculatedSpeed={calculatedSpeed} targetLength={targetLength} calculatedAngle={calculatedAngle} />
    </div>
  );
}
