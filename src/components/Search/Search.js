// GyanMatrix question
import React, { useMemo, useState } from 'react';

const Search = () => {
  const data = [
    { id: 1, name: 'Alex Johnson', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Sam Williams', role: 'Designer', status: 'Inactive' },
    { id: 3, name: 'Taylor Brown', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Jordan Smith', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Casey Davis', role: 'Designer', status: 'Inactive' },
    { id: 6, name: 'Alex Johnson2', role: 'Developer', status: 'Active' },
    { id: 7, name: 'Sam Williams2', role: 'Designer', status: 'Inactive' },
    { id: 8, name: 'Taylor Brown2', role: 'Manager', status: 'Active' },
    { id: 9, name: 'Jordan Smith2', role: 'Developer', status: 'Active' },
    { id: 10, name: 'Casey Davis2', role: 'Designer', status: 'Inactive' },
    { id: 11, name: 'Alex Johnson3', role: 'Developer', status: 'Active' },
    { id: 12, name: 'Sam Williams3', role: 'Designer', status: 'Inactive' },
    { id: 13, name: 'Taylor Brown3', role: 'Manager', status: 'Active' },
    { id: 14, name: 'Jordan Smith3', role: 'Developer', status: 'Active' },
    { id: 15, name: 'Casey Davis3', role: 'Designer', status: 'Inactive' },
  ];
  const [users, setUsers] = useState(data);
  const [sortOrder, setSortOrder] = useState(null); // null → Initial state
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleInput = (e) => {
    if (e.target.value.length > 3) {
      const filteredArr = data.filter((ele) => {
        return ele.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setUsers(filteredArr);
    } else if (!e.target.value) setUsers(data);
  };

  const handleSelect = (e) => {
    const filteredArr = data.filter((ele) => {
      return ele.status.toLowerCase() === e.target.value.toLowerCase();
    });
    setUsers(e.target.value === 'All Status' ? data : filteredArr);
  };

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // const handleSort = () => {
  //   if (sort === 'asc') {
  //     const sortedArr = users.sort('ASC');
  //     setUsers(sortedArr);
  //   } else {
  //     const sortedArr = users.sort('DESC');
  //     setUsers(sortedArr);
  //   }
  // };

  // Correct sorting function
  // const handleSort = () => {
  //   const sortedArr = [...users].sort((a, b) => {
  //     return sort === 'asc'
  //       ? a.name.localeCompare(b.name) // Ascending order
  //       : b.name.localeCompare(a.name); // Descending order
  //   });

  //   setUsers(sortedArr);
  //   setSort(sort === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
  // };

  // Sorting function with reset on third click
  // const handleSort = () => {
  //   if (sortOrder === null) {
  //     // First Click: Ascending order
  //     const sortedAsc = [...currentRecords].sort((a, b) => a.name.localeCompare(b.name));
  //     setUsers(sortedAsc);
  //     setSortOrder('asc');
  //   } else if (sortOrder === 'asc') {
  //     // Second Click: Descending order
  //     const sortedDesc = [...currentRecords].sort((a, b) => b.name.localeCompare(a.name));
  //     setUsers(sortedDesc);
  //     setSortOrder('desc');
  //   } else {
  //     // Third Click: Reset to original order
  //     setUsers(data);
  //     setSortOrder(null);
  //   }
  // };

  // Sort only the records on the current page
  const sortedRecords = useMemo(() => {
    if (sortOrder === 'asc') {
      return [...currentRecords].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      return [...currentRecords].sort((a, b) => b.name.localeCompare(a.name));
    }
    return currentRecords; // Default unsorted
  }, [currentRecords, sortOrder]);

  const handleSort = () => {
    setSortOrder(sortOrder === null ? 'asc' : sortOrder === 'asc' ? 'desc' : null);
  };

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `New User ${users.length + 1}`,
      role: "New Role",
      status: "Active",
    };
    setUsers([...users, newUser]);
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h3>GyanMatrix Assignment</h3>
      <h1> Search Feature </h1>
      <input type="text" onChange={(e) => handleInput(e)} />

      <table border={1} style={{ margin: '2rem' }}>
        <thead>
          <tr>
            <th onClick={handleSort} style={{ width: '10rem' }}>Name {sortOrder === 'asc' ? '🔼' : sortOrder === 'desc' ? '🔽' : '↔'} </th>
            <th style={{ width: '8rem' }}> Role</th>
            <th style={{ width: '8rem' }}> Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecords.map((ele) => {
            return (
              <tr key={ele.id}>
                <td> {ele.name}</td>
                <td> {ele.role}</td>
                <td> {ele.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>

      <h1> Filter Feature </h1>
      <select onChange={(e) => handleSelect(e)}>
        <option>All Status </option>
        <option>Active </option>
        <option>Inactive </option>
      </select>
      <h1> Sort Feature </h1>
      <p> To test this feature click on column name </p>
      <h1> Pagination Feature </h1>
      <h1> Add new entry to the table </h1>
      <button onClick={handleAddUser}>Add</button>

    </div>
  );
};

export default Search;
