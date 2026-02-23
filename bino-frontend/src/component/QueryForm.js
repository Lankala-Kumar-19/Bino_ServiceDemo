import React, { useState } from 'react';
import axios from 'axios';

const QueryForm = () => {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post('https://bino-servicedemo.onrender.com/api/generateLink', {
      category, query, location
    });
    window.open(res.data, '_blank');
  } catch (err) {
    console.error(err);
    alert('Error generating WhatsApp link');
  }
  setLoading(false);
};

  return (
    <form onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Plumber">Plumber</option>
        <option value="Electrician">Electrician</option>
        <option value="Carpenter">Carpenter</option>
      </select>
      <input type="text" placeholder="Enter your query" value={query} onChange={(e) => setQuery(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit" disabled={loading}>
  {loading ? 'Generating...' : 'Search on Bino'}
</button>
    </form>
  );
};

export default QueryForm;