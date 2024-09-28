import React, { createContext } from 'react';
import ChildA from './ChildA/childA';
import { Link } from 'react-router-dom';
export const data = createContext();
const UseContextDemo = () => {
  const name = 'Tejas Patil'
  return (
    <div style={{ margin: '2rem' }}>
      <h1>useContext</h1>
      <p><Link to={'https://www.youtube.com/watch?v=iFssz5lpncw'}>useContext Reference</Link></p>
      <p><Link to={'https://www.youtube.com/watch?v=Qe9uObzq76M'}>Context Api Reference</Link></p>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
}

export default UseContextDemo;