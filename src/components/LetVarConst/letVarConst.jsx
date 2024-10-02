import React from 'react';
import { Link } from 'react-router-dom';

const LetVarConst = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>LetVarConst</h1>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link to={'https://www.youtube.com/watch?v=NNjQFqgF3sk'}>Referense</Link>
        <Link to={'https://www.youtube.com/watch?v=EbsJHZ1C9C0'}>Referense</Link>
      </div>
    </div>
  );
}

export default LetVarConst;