import React from 'react'
import './SpeedCalculator.css';

export default function SpeedCalculator(props) {
  let { speedCalculations, setSpeedCalculations, calculatedSpeed, targetLength } = props;
  
  const getAndSetSpeedCalculation = (evt) => {
    setSpeedCalculations({
      ...speedCalculations,
      [evt.target.name]: parseFloat(evt.target.value)
    });
    // Use default unless told otherwise.
    return !targetLength ? targetLength = undefined : targetLength;
  }

  return (
    <div className='speedCalculatorContainer'>
      <h2>Calculate speed of target</h2>
      <label>subSpeed</label>
      <input onChange={(evt) => getAndSetSpeedCalculation(evt)} name='subSpeed' type='number'></input>
      <label>targetLength</label>
      <input onChange={(evt) => getAndSetSpeedCalculation(evt)} value={targetLength || ''} name='targetLength' type='number'></input>
      <label>lineOfSightAngle</label>
      <input onChange={(evt) => getAndSetSpeedCalculation(evt)} name='lineOfSightAngle' type='number'></input>
      <label>angleOnBow</label>
      <input onChange={(evt) => getAndSetSpeedCalculation(evt)} name='angleOnBow' type='number'></input>
      <label>timeToCross</label>
      <input onChange={(evt) => getAndSetSpeedCalculation(evt)} name='timeToCross' type='number'></input>
      <span className='resultNumber'>{calculatedSpeed.toFixed(3)} KNOTS</span>
    </div>
  )
}
