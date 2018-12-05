import React from 'react';
import stylesprice from './Price.css'
const Price = ({price}) => {
  return (
    <div>
      <p className={stylesprice.text}>{price}</p>
    </div>
  );
};

export default Price;