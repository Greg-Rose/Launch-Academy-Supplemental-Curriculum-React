import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {
  let handler = props.handleButtonClick;
  let groceries = props.groceries.map(grocery => {
    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        handler={handler}
      />
    );
  });

  return(
    <div>
      <ul>
        {groceries}
      </ul>
    </div>
  )
};

export default GroceryList;
