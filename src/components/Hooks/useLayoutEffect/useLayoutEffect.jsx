import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UseLayoutEffectDemo = () => {
  const [value, setValue] = useState(1)
  const [value2, setValue2] = useState(1)

  useEffect(() => {
    console.log('usEffect with empty dependency array')
    //this renders only on initial load/ while component mounting phase
    //Equivalent to componentDidMount() lifecycle method
  }, [])

  useEffect(() => {
    console.log('usEffect with no dependency array')
    //this useEffect renders whenever any state gets change 

    //if we use return in useEffect then it will call while componentWillUnount() phase
    return () => console.log("unmounting");
  })

  useEffect(() => {
    console.log('usEffect with some (Add) dependencies ', value)
    //Equivalent to componentDidUpdate() lifecycle method
  }, [value])

  return (
    <div style={{ margin: '4rem' }}>
      <h1>UseEffect</h1><p>Add useEffect notes here</p>
      <p><Link to={'https://www.youtube.com/watch?v=tGXbiU2jcs4'}> Reference</Link></p>
      <div>{value},{value2}</div>
      <button onClick={() => { setValue(value + 1) }}>Add</button>
      <button onClick={() => { setValue2(value2 - 1) }}>Remove</button>
    </div>
  );
}

export default UseLayoutEffectDemo;