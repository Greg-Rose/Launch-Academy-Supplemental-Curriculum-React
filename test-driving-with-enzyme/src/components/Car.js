import React from 'react';

const Car = (props) => {
  return (
    <div>
      <h1>{props.model}</h1>
      <img src={props.image} width='450' height='300' />
      <h2>Manufacturer: {props.manufacturer}</h2>
      <h2>Year: {props.year}</h2>
      <h2>Distance Traveled: {props.distanceTraveled} meters</h2>
    </div>
  )
};
export default Car;
