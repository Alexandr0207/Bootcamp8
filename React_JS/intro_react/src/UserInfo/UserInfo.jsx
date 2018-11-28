import React from 'react';
import './UserInfo.css'
import Gallery from '../Gallery/Gallery'
const UserInfo = () => {
  return (
    <div className="info">
      <img className="userphoto" src="https://girlmed.ru/wp-content/uploads/2018/07/poscreenra.jpg" alt="us_photo"/>
      <h2 className="name">Tyler mcGignis</h2>
      <h3 className="nickname">@Tulermikan34</h3>
      <Gallery/>
    </div>
  );
};

export default UserInfo;