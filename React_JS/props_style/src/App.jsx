import React, { Component } from 'react';
import Card from './Card/Card';
import ('./App.css')
class App extends Component {

  // constructor(){ // ES6 , пишеться через конструктор і потім Babel переводе в ES5
  //   super(); // Для того щоб запрацював коструктор
  //   this.state = {
  //     shoes: [{
  //       logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //       item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //       title: 'Hartbeespoort',
  //       desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
  //       bgt: 'FAS',
  //       productDesc: 'Hartbee',
  //       productDescSecond: 'spoort',
  //       bage: 'New',
  //       caption: 'Basket Ball Collection',
  //       sizes: [7,8,9,10,11],
  //       colors: ['orange', 'green', 'yellow'],
  //       price: '23.453',
  //     },
  //     {
  //       logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //       item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //       title: 'Nike Air Jordan ',
  //       desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
  //       bgt: 'NAJ',
  //       productDesc: 'Nike',
  //       productDescSecond: 'Air Jordan',
  //       bage: 'New',
  //       caption: "Men's Basketball",
  //       sizes: [6,7,8,12],
  //       colors: ['green', 'yellow'],
  //       price: '88.19',
  //     },{
  //       logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //       item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //       title: 'Nike Air Huarache',
  //       desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
  //       bgt: 'NAH',
  //       productDesc: 'Nike',
  //       productDescSecond: 'Air Huarache',
  //       bage: 'sale',
  //       caption: 'Unisex Running',
  //       sizes: [10,11,12,13],
  //       colors: ['orange'],
  //       price: '78.21',
  //     }]
  //   }
  // }
  
  state = { // ES7 , пишеться через state (легший конструктора) і потім Babel переводе в ES5
    shoes: [{
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
    }],
    cardCounter: 0,
    totalPrice: 0,
    cart: [],
  }

  // increment(){
  //   this.state.cardCounter +=1; // Це класно, заробило би в Java script, тут нічого не буде
  // }
   
  increment = (evt) => {
    let title = evt.target.dataset.title;
    let result = this.state.shoes.find(el => el.title === title); // Якщо елемент поля title співпадає з елементом title виведи на екрна
    this.setState(prew => ({
      cardCounter: prew.cardCounter + 1, // Для того щоб сюди попала попередня копія стейта і добавило в до нашого Cart counter 1
      // totalPrice: prew.totalPrice + price,
      cart: [...prew.cart, result]
    }))
  }

  // <button onClick={this.increment}>plus</button> // НАвішувати кнопку в React

  render() {
    const {shoes, cardCounter, totalPrice, cart} = this.state;
    const sum = cart.reduce((acc, el) => acc + Number(el.price),0).toFixed(2);
    return (
      <div className='box'>
      <div className="info">
      <div className="cart">
      {cart.map(el => <p key={el.title}>Name: {el.title} || Price: {el.price}</p>)}
      <p className="counter total">Total price: {sum}</p>
      </div>
      {/* <p className="counter">Amount: {cardCounter}</p>
      <p className="counter total">Total price: {totalPrice.toFixed(2)}</p> */}
      </div>
        {shoes.map(el => <Card key={el.title} title={el.title} bgt={el.bgt} bage={el.bage} caption={el.caption} size={el.sizes.map(size => <li key={el.title+size}><a href="#">{size}</a></li>)} color={el.colors.map(color => <li key={el.title+color}><a href="#" className={color}></a></li>)} usd={el.price} desc={el.productDesc} pdesc={el.productDescSecond} increment={this.increment}/>)} 
      </div>
    );
  }
}

export default App;