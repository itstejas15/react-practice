import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

const UseReducerDemo = () => {
  // const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'Add':
        return state + 1
      case 'Substract':
        return state - 1
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div style={{ margin: '2rem' }}>
      <h1>useReducer</h1> <span>useReducer vs useState</span>
      <p><Link to={'https://www.youtube.com/watch?v=TlSJVL3dvRM'}> Reference</Link></p>
      <div style={{display: 'flex', width: '20vw', justifyContent: 'space-between'}}>
        <button onClick={() => dispatch('Add')}>Add</button>
        {count}
        <button onClick={() => dispatch('Substract')}>Substract</button>
      </div>
    </div>
  );
}

export default UseReducerDemo;