import React from 'react';
import ChildB from '../ChildB/childB';

const ChildA = () => {
  return (
    <div>
      <h3>Child A component</h3>
      <ChildB />
    </div>
  );
}

export default ChildA;