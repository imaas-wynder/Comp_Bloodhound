import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createSearch from '@wasp/actions/createSearch';

export function HomePage() {
  const createSearchFn = useAction(createSearch);
  const [companyName, setCompanyName] = useState('');

  const handleSearch = () => {
    createSearchFn({ companyName });
    setCompanyName('');
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Company Name'
        className='px-1 py-2 border rounded text-lg'
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded mt-2'
      >
        Search
      </button>
      <Link to='/dashboard' className='text-blue-500 hover:underline'>Go to Dashboard</Link>
    </div>
  );
}