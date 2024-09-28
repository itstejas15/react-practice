import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const UseRefDemo = () => {
  const [name, setName] = useState('Tejas')
  const refElement = useRef()

  const handleReset = () => {
    setName('Tejas')
    refElement.current.focus()
    // console.log(refElement)
    // refElement.current.style.color='blue'
  }
  return (
    <div style={{ margin: '2rem' }}>
      <h1>useRef</h1>
      <p><Link to={'https://www.youtube.com/watch?v=nX9ShZo0COc'}> Reference</Link></p>
      <input ref={refElement} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UseRefDemo;