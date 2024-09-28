import React, { useCallback, useState } from 'react';
import ChildA from './ChildA/childA';
import { Link } from 'react-router-dom';

const UseCallbackDemo = () => {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(0)

  const multiplication = useCallback(() => {
    console.log('multiplication function')
    return add * 10
  }, [add])

  return (
    <div style={{ margin: '2rem' }}>
      <h1>useCallback</h1>
      <p><Link to={'https://www.youtube.com/watch?v=5zempLONkxM'}>Reference</Link></p>
      <div>
        <button onClick={() => setAdd(add + 1)}>Add</button> {add},
        <button onClick={() => setMinus(minus - 1)}>Substract</button> {minus},
        {/* {multiplication()} */}
        <ChildA multiply={multiplication} />
      </div>
    </div>
  );
}

export default UseCallbackDemo;