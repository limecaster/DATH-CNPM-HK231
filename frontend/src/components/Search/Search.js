// import React from 'react';
// import ReactSearchBox from 'react-search-box';

// const SearchBox = ({ onSearch }) => (
//     <ReactSearchBox
//         width="150%"
//         placeholder="Search Here..."
//         onChange={(value) => onSearch(value)}
//     />
// );

// export default SearchBox;


import React from 'react';

const SearchBox = ({ onSearch }) => (
    <input
        type="text"
        placeholder="Search Here..."
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: "100%", padding: "5px", borderRadius: '5px' }}
    />
);

export default SearchBox;