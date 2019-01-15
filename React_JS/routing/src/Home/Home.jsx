import React from 'react';

const Home = ({hometext}) => {
  return (
    <div>
      <h2>Model S</h2>
      <p>{hometext}</p>
      <img src="https://equity.today/wp-content/uploads/2016/05/akcii-tesla.jpg" width="1280" height="1000" alt="ews"/>
    </div>
  );
};

export default Home;