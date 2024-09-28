import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from './useCounter';

const CustomHookDemo = () => {
  const [count, Increment, Decrement] = useCounter()
  return (
    <div style={{ margin: '2rem' }}>
      <h1>Custom Hook</h1>
      <p><Link to={'https://www.youtube.com/watch?v=Vs43P8zcRr4'}> Reference</Link></p>
      <div>
        <button onClick={Decrement}>-</button>
        <input value={count} />
        <button onClick={Increment}>+</button>
      </div>
    </div>
  );
}

export default CustomHookDemo;