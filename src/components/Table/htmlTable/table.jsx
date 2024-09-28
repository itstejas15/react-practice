import React from 'react';

const Table = () => {
  let dummyData = [
    {
      id: 1,
      name: 'John Smith',
      age: 34,
      gender: 'male'
    },
    {
      id: 2,
      name: 'Carren williams',
      age: 24,
      gender: 'female'
    },
    {
      id: 3,
      name: 'Warren buffet',
      age: 64,
      gender: 'male'
    },
    {
      id: 4,
      name: 'Tejas Patil',
      age: 27,
      gender: 'male'
    },
    {
      id: 5,
      name: 'Julie Parker',
      age: 25,
      gender: 'female'
    },
    {
      id: 6,
      name: 'Ron Smith',
      age: 42,
      gender: 'male'
    }
  ]
  return (
    <div>
      <h3>1. Basic Table</h3>
      <table border={1}>
        <thead>
          <tr>
            <th style={{width: '3rem'}}>ID</th>
            <th style={{width: '14rem'}}>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;