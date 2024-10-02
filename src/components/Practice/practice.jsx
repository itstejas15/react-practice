import React from 'react';
import './practice.css';
import ChildA from './ChildA/childA';

const Practice = () => {
  const xyz = [1, 2, 3, 4, 5, 6];
  return (
    <div className='container'>
      <h1>For Practice</h1>
      <ChildA />

      {xyz.map((ele, index) => (
        <div key={index}>
          {ele}
          {/* [ele] */}
        </div>
      ))}

    </div>
  );
}

export default Practice;