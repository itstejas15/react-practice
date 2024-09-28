import React from 'react';
import ChildC from '../ChildC/childC';
import { data } from '../useContext';

const ChildB = () => {
  return (
    <div>
      <h3>Child B component</h3>
      <data.Consumer>
        {(name) => (
          <div>
            <p> Below name is fetched using Context API </p>
            <p> My name is {name}. </p>
          </div>
        )}
      </data.Consumer>
      <ChildC />
    </div>
  );
}

export default ChildB;