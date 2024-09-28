import React from 'react';
import { Link } from 'react-router-dom';
import './demopage.css';
// import { useSelector } from 'react-redux';

const DemoPage = () => {
  // const state = useSelector((state) => state.redux.value);

  return (
    <div className='child'>
      <h1>Hii DemoPage</h1>
      <Link to={'/footer'}>Footer</Link>
      {/* <input value={state}/> */}
    </div>
  );
}

export default DemoPage;