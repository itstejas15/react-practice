import React from 'react';
import { Link } from 'react-router-dom';
import './demopage.css';
// import { useSelector } from 'react-redux';

const DemoPage = () => {
  // const state = useSelector((state) => state.redux.value);
  // <div className='child'>
  //   <h1>Hii DemoPage</h1>
  //   <Link to={'/footer'}>Footer</Link>
  //   {/* <input value={state}/> */}
  //   {/* <div className='parent'>
  //     <div className='cjild'></div>
  //   </div> */}
  // </div>
  return (
    <div className='child'>
      <h1>Hii DemoPage</h1>
      <Link to={'/footer'}>Footer</Link>
    </div>
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    //   <div style={{ background: 'red' }}>Child</div>
    // </div>
    // <div style={{ position: 'fixed', top: '50%', right: '50%' }}>
    //   <div style={{ background: 'red' }}>Child</div>
    // </div>
    // <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
    //   <div style={{ background: 'red' }}>Child</div>
    // </div>
  );
}

export default DemoPage;