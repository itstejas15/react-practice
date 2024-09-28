import React, { useMemo, useState } from 'react';

const UseMemoDemo = () => {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(0)

  const multiplication = useMemo(() => {
    console.log('multiplication functio')
    return add * 10
  }, [add])
  return (
    <div style={{ margin: '2rem' }}>
      <h1>useMemo</h1>
      <div>
        <button onClick={() => setAdd(add + 1)}>Add</button> {add},
        <button onClick={() => setMinus(minus - 1)}>Substract</button> {minus},
        {multiplication}
      </div>
    </div>
  );
}

export default UseMemoDemo;