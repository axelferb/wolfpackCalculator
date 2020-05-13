import React from 'react'
import './AngleCalculator.css';

export default function AngleCalculator(props) {
  const { bowAngleCalculations, setBowAngleCalculations, calculatedAngle } = props;
  const getAndSetAngleCalculation = (evt) => {
    setBowAngleCalculations({
      ...bowAngleCalculations,
      [evt.target.name]: parseFloat(evt.target.value)
    });
    // Use default unless told otherwise.
    return !bowAngleCalculations.zoom ? setBowAngleCalculations({...bowAngleCalculations, 'zoom': 4}) : null;
  }
  return (
    <div className='speedCalculatorContainer'>
      <h2>Calculate angle of target</h2>
      <label>targetLength</label>
      <input onChange={(evt) => getAndSetAngleCalculation(evt)} name='targetLength' type='number'></input>
      <label>targetMastHeight</label>
      <input onChange={(evt) => getAndSetAngleCalculation(evt)} name='targetMastHeight' type='number'></input>
      <label>angularMast</label>
      <input onChange={(evt) => getAndSetAngleCalculation(evt)} name='angularMast' type='number'></input>
      <label>angularLength</label>
      <input onChange={(evt) => getAndSetAngleCalculation(evt)} name='angularLength' type='number'></input>
      <label>zoom</label>
      <input onChange={(evt) => getAndSetAngleCalculation(evt)} name='zoom' type='number' defaultValue='4'></input>
      <span className='resultNumber'>{calculatedAngle.distance.toFixed(0)}m</span>
      <span className='resultNumber'>{calculatedAngle.bowAngle.toFixed(3)}°</span>
    </div>
  )
}
