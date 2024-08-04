// sfc shortcut to create arrow function
// imr shortcut to import react
import React, { useState } from 'react';

const Redux = () => {
  // usf - shortcut to create useState
  const [state, setState] = useState(0);

  const handleAdd = () => {
    setState(state + 1);
  };

  const handleRemove = () => {
    setState(state - 1);
  };

  return (
    <div style={{ margin: "4rem"}}>
      <h1>Hii Redux</h1> <br />

      <div style={{ display: "flex", gap: "6px"}}>
        <button onClick={handleRemove}> - </button>
        <input value={state} />
        <button onClick={handleAdd}> + </button>
      </div>

    </div>
  );
}

export default Redux;