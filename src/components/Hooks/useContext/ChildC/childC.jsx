import React, { useContext } from 'react';
import { data } from '../useContext';

const ChildC = () => {
  const myName = useContext(data)
  return (
    <div>
      <h3>Child C component</h3>
      <p> Below name is fetched using useContext Hook </p>
      <p> My name is {myName}. </p>
    </div>
  );
}

export default ChildC;