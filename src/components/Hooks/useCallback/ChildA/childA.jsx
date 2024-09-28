import React, { memo } from 'react';

const ChildA = ({ multiply }) => {
  console.log('Child A component')
  const data = multiply();
  console.log('data', data)
  return (
    <div>
      <h1>Child A component</h1>{data}
    </div>
  );
}

export default memo(ChildA);