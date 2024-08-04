import React from 'react';
import { Link } from 'react-router-dom';
import './demopage.css';
const DemoPage = () => {
  return (
    <div className='child'>
      <h1>Hii DemoPage</h1>
      <Link to={'/footer'}>Footer</Link>
    </div>
  );
}

export default DemoPage;