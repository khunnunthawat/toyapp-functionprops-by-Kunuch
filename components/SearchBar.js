import { useState } from 'react';
import Button from './Button';

const SearchBar = ({ placeholder = '', onSearch = () => {} }) => {
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };
  return (
    <div className='mb-2'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchText}
          placeholder={placeholder}
          className='mr-1 py-1 px-3 border border-gray-300 rounded-md focus:outline-none'
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Button color='primary'>Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
