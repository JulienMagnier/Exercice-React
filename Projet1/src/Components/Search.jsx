import { useState } from 'react';
import React from 'react';


const Search = ({photos, setFilteredPhotos}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
            setSearchTerm(event.target.value);
            const filtered = photos.filter(photo => photo.author.toLowerCase().includes(event.target.value.toLowerCase()));
            setFilteredPhotos(filtered);
        
        
    };
  return (
    <div>
        <label htmlFor="search">Search by author : </label>
        <input id="search" type="text" placeholder="Search..." onChange={handleChange} />  

        <p>Searching for : {searchTerm}</p>
    </div>
  );
}

export default Search;