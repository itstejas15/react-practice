import React, { useState } from 'react';

const Forms = () => {
  // State for controlled form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add further logic like API calls here
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h2>How do you handle forms in React?</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ padding: '0.5rem', width: '50%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ padding: '0.5rem', width: '50%' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
