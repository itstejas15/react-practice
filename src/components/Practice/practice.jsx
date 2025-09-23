import React, { useEffect, useState } from 'react';
import './practice.css';

const Practice = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/users');
      const data2 = await res.json();
      setData(data2);
    }
    fetchData();
  }, [])
  console.log('data', data);

  useEffect(() => {
    console.log('Updated data:', data);
  }, [data]);
  
  return (
    <div>
      <div className='card3'>
        <div className='content3'>
          <input className='input' placeholder='Enter username' />
          <input className='input' placeholder='Enter password' />
          <button className='login-button'>Login</button>
        </div>
      </div>
      {data && data.map((ele) => {
        return <div key={ele.id}>{ele.name}</div>
      })}
    </div>
  );
}

export default Practice;