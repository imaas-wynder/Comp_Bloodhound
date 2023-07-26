import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getSearch from '@wasp/queries/getSearch';
import addResult from '@wasp/actions/addResult';

export function Search() {
  const { searchId } = useParams();
  const { data: search, isLoading, error } = useQuery(getSearch, { searchId });
  const addResultFn = useAction(addResult);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleAddResult = () => {
    // Implement logic to add result here
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Search Page</h1>
      <h2 className="text-xl font-bold mb-2">Search ID: {search.id}</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Results:</h3>
        {search.results.map((result) => (
          <div key={result.id} className="bg-gray-100 p-4 mb-4 rounded-lg">
            <div>URL: {result.url}</div>
            <div>Type: {result.type}</div>
            <div>Content: {result.content}</div>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddResult}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Result
      </button>
    </div>
  );
}