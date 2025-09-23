import React, { useEffect, useState } from 'react';
import './practice.css';

const Practice = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const handleInput = (value) => {
    setInput(value)
    const filteredUsers = users.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredData(filteredUsers)
  }

  // console.log('users=', users);
  // console.log('input=', input);
  // console.log('filteredData=', filteredData);

  return (
    <div className='practice-container'>
      <h1>For Practice</h1>
      <ol>
        {/* {filteredData ?
          (<div>
            {
              filteredData.map((item) => {
                return (<li key={item.id}> {item.name}</li>)
              })
            }
          </div>
          ) : (
            <div>
              {
                users.map((item) => {
                  return (<li key={item.id}>{item.name}</li>)
                })
              }
            </div>
          )} */}

        {/* //Optimised code */}
        {(filteredData ? filteredData : users).map((item) => {
          return (<li key={item.id}>{item.name}</li>)
        })}
      </ol>

      <input value={input} onChange={(e) => handleInput(e.target.value)} placeholder='Search...' />
      {/* <button onClick={handleSearch}> Search </button> */}
    </div>
  );
}

export default Practice;