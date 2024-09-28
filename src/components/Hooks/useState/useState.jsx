import React, { useState } from 'react';

const UseStateDemo = () => {
  const [value, setValue] = useState(1);
  const [string, setString] = useState('abc');
  const [array, setArray] = useState(['xyz', 'pqr']);
  // const [obj, setObj] = useState({});

  const handleClick = () => {
    setValue(value + 1)
    setString(string + value)
    setArray('1')
    // setObj({'abc': 1})
    console.log(value, string, array)
  }

  return (
    <div>
      <h1>useState:</h1><p>Add useState notes here</p>
      <button onClick={handleClick}>Change States</button>
      {value}, {string},{array}
    </div>
  );
}

export default UseStateDemo;