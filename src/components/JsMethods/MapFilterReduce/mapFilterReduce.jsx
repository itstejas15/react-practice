import React from 'react';

const MapFilterReduce = () => {
  let xyz = [1, 2, 3, 4, 5, 6]
  let newArr = xyz.filter((ele) => {
    return ele % 2 === 0;
  })

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        Array mapped in div element =
        {xyz.map((ele, index) => {
          return <div key={index}>{ele}</div>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        Filtered Array =
        {newArr.map((ele, index) => {
          return <div key={index}>{ele}</div>
        })}
      </div>
      <div>
        Reduced aray = &nbsp;
        {xyz.reduce((prev, curr) => {
          return prev + curr;
        })}
      </div>
    </div>
  );
}

export default MapFilterReduce;