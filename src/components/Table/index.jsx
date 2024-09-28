import React from 'react';
import Table from './htmlTable/table';

const Tables = () => {
  return (
    <>
      <h1 style={{margin: '1rem'}}>Tables</h1>
      <div style={{ margin: '2rem', display: 'flex', flexWrap: 'wrap' }}>
        <Table />
        <Table />
      </div>
    </>
  );
}

export default Tables;