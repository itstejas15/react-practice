import React, { createContext } from 'react';
import ChildA from './ChildA/childA';
export const data = createContext();
const UseContextDemo = () => {
  const name = 'Tejas Patil'
  return (
    <div style={{ margin: '2rem' }}>
      <h1>useContext</h1>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
}

export default UseContextDemo;