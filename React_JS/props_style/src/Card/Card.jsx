import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const Card = ({title, bgt , desc, pdesc, bage, caption, size, color, usd , retail, increment}) => {

  let shoes = [{
    logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
    item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
    title: 'Hartbeespoort',
    desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
    bgt: 'FAS',
    productDesc: 'Hartbee',
    productDescSecond: 'spoort',
    bage: 'New',
    caption: 'Basket Ball Collection',
    sizes: [7,8,9,10,11],
    colors: ['orange', 'green', 'yellow'],
    price: '23.453',
  },
  {
    logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
    item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
    title: 'Nike Air Jordan ',
    desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
    bgt: 'NAJ',
    productDesc: 'Nike',
    productDescSecond: 'Air Jordan',
    bage: 'New',
    caption: "Men's Basketball",
    sizes: [6,7,8,12],
    colors: ['green', 'yellow'],
    price: '88.19',
  },{
    logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
    item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
    title: 'Nike Air Huarache',
    desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
    bgt: 'NAH',
    productDesc: 'Nike',
    productDescSecond: 'Air Huarache',
    bage: 'sale',
    caption: 'Unisex Running',
    sizes: [10,11,12,13],
    colors: ['orange'],
    price: '78.21',
  }]
  // console.log(props);
  
  
  return (
    <div className="container" > 
            <div className="card">
              <div className="card-head">
                <img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" class="card-logo"/>
                <img src="https://s5.postimg.cc/j9r8yf9gn/sws1.png" alt="Shoe" className="product-img"/>
                <div className="product-detail">
                  <h2>{title}</h2>
                </div>
                <span className="back-text">
                        {bgt}
                      </span>
              </div>
              <div className="card-body">
                <div className="product-desc">
                  <span className="product-title">
                         {desc} <b>{pdesc}</b>
                          <span class="badge">
                            {bage}
                          </span>
                  </span>
                  <span className="product-caption">
                         {caption}
                        </span>
                </div>
                <div className="product-properties">
                  <span className="product-size">
                          <h4>Size</h4>
                          <ul className="ul-size">
                          {size}
                          </ul>
                        </span>
                  <span className="product-color">
                          <h4>Colour</h4>
                          <ul className="ul-color">
                          {color}
                  
                          </ul>
                        </span>
                  <span className="product-price">
                          USD<b>{usd}</b>
                        </span>
                </div>
                <button onClick={increment} className="add" data-title={title}>Add to card</button>
              </div>
            </div>
          </div>
  );

};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bgt: PropTypes.string,
  pdesc: PropTypes.string.isRequired,
  bage: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  size: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  usd: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  // retail: PropTypes.shape({
  //   buy: PropTypes.number,
  //   sell: PropTypes.number,
  // }),
 }
 Card.defaultProps = {
  bgt: 'FAS'
 }

export default Card;