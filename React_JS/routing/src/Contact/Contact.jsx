import React from 'react';
import {NavLink} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom'
import Phone from '../Phone/Phone'
import Email from '../Email/Email'
import Adress from '../Adress/Adress';




const Contact = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Model X</h2>
      <p>{props.contactext}</p>
      <img src="https://www.tesla.com/sites/default/files/images/software_update.jpg" width="1280" height="1000" alt="tessla"/>
      <ul className="list">
        <li>
          <NavLink to={`${props.match.path}/adress`}>Adress</NavLink>
        </li>
        <li>
          <NavLink to={`${props.match.path}/phone`}>Phone number</NavLink>
        </li>
        <li>
          <NavLink to={`${props.match.path}/email`}>Email</NavLink>
        </li>
      </ul>
      <Switch>
      <Route path={`${props.match.path}/adress`} component={Adress}/>
      <Route path={`${props.match.path}/phone`} component={Phone}/>
      <Route path={`${props.match.path}/email`} component={Email}/>
      </Switch>
    </div>
  );
};

export default Contact;