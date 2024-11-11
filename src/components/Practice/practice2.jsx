import React, { useState } from 'react';
import './practice.css';
import ChildA from './ChildA/childA';

const Practice = () => {
  // const xyz = [1, 2, 3, 4, 5, 6];
  const [password, setPassword] = useState(true)
  const handleOnClick = () => {
    setPassword(!password)
  }

  const [name, setName] = useState('')

  const handlePrompt = () => {
    setName(prompt('what is yor name?'));
  }
  return (
    <div className='practice-container'>
      <h1>For Practice</h1>
      <ChildA />

      {/* {xyz.map((ele, index) => (
        <div key={index}>
          {ele}
        </div>
      ))} */}

      <input type={password ? 'password' : 'text'} />
      <button
        onClick={handleOnClick}
        style={{
          position: 'relative',
          right: 30,
          background: 'transparent',
          cursor: 'pointer',
          border: 'none'
        }}>
        &lt;&gt;
      </button>
      <button onClick={handlePrompt}> Prompt input</button>
      &nbsp;{name}
    </div>
  );
}

export default Practice;