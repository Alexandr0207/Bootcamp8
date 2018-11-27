import React from 'react';
import './Main.css';
import Description from '../Description/Description'
import Bacos from '../Bacos/Bacos';
import Timeline from '../Timeline/Timeline';
import Link from '../Link/Link';
const Main = () => {
  return (
    <main id="Main">
      <Description/>
      <Bacos/>
      <Timeline/>
      <Link/>
    </main>
  );
};

export default Main;