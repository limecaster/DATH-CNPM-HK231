import React from "react";
import ReactSearchBox from "react-search-box";
import { useNavigate } from "react-router-dom";

// const history = useHistory ();

// const handleSearch = (value) => {
//   history.push("/searchpage");
// };

const SearchBox = ({ onSearch }) => (
  <ReactSearchBox
    width="150%"
    placeholder="Search Here..."
    onChange={(value) => onSearch(value)}
  />
);

export default SearchBox;
// const SearchBox = () => {
//     const navigate = useNavigate();
//     const handleSearch = (value) => {
//       navigate.push("/searchpage");
//     };
//     return (
//       <ReactSearchBox
//         width="150%"
//         placeholder="Search Here..."
//         onChange={(value) => handleSearch(value)}
//       />
//     );
// };

// export default SearchBox;
