import React from 'react';
import PropTypes from 'prop-types';

const Card = ({firstName, lastName, number,emailAdress , createObj, handlerChange}) => {
  return (
    <div className="cards">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{number}</p>
      <p>{emailAdress}</p>
    </div>
  );
};

Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  emailAdress: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;