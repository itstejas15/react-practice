import React from 'react';
import { Link } from 'react-router-dom';

const CustomHookDemo = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>Custom Hook</h1>
      <p><Link to={'https://www.youtube.com/watch?v=Vs43P8zcRr4'}> Reference</Link></p>
    </div>
  );
}

export default CustomHookDemo;