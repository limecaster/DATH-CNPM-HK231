// import React, { useEffect, useState } from "react";
// import Accordion from "react-bootstrap/Accordion";
// import axios from "axios";
// import "./SearchPage.css";
// import Form from "react-bootstrap/Form";
// import { Col, Row } from "react-bootstrap";
// import BookCard from "./BookCard";

// function SearchPage({ searchResults }) {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedPublisher, setSelectedPublisher] = useState("");
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const filterBooksByCategory = (category) => {
//     if (category === selectedCategory) {
//       setSelectedCategory("");
//       setFilteredBooks([]);
//     } else {
//       setSelectedCategory(category);
//       const filtered = searchResults.filter((book) =>
//         book.genres.includes(category)
//       );
//       setFilteredBooks(filtered);
//     }
//   };

//   const categories = [
//     "adventure",
//     "Historical Fiction",
//     "Mythology",
//     "Romance",
//     "horror",
//     "mystery",
//   ];
//   const publishers = [
//     "Harper Perennial",
//     "Ecco",
//     "William Morrow",
//     "Penguin Classics",
//     "Dutton",
//     "Ballantine Books",
//     "Canary Street Press",
//     "Scribner",
//     "Atria Books",
//     "Graydon House",
//     "Independently published",
//   ];

//   const handleCheckboxClick2 = (publisher) => {
//     if (publisher === selectedPublisher) {
//       setSelectedPublisher("");
//     } else {
//       setSelectedPublisher(publisher);
//     }
//   };
//   return (
//     <div className="custom-accordion">
//       <Accordion className="accordion">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header
//             style={{
//               fontFamily: "Work Sans, sans-serif",
//               color: "rgba(0, 0, 0, 0.8)",
//             }}
//           >
//             Filter by
//           </Accordion.Header>

//           <Accordion.Body>
//             <hr />
//             <div
//               style={{
//                 fontFamily: "Work Sans, sans-serif",
//                 color: "rgba(0, 0, 0, 0.8)",
//               }}
//             >
//               Categories
//             </div>
//             {categories.map((category) => (
//               <Form.Check
//                 label={category}
//                 checked={category === selectedCategory}
//                 onClick={() => filterBooksByCategory(category)}
//                 style={{
//                   fontFamily: "Work Sans, sans-serif",
//                   color: "#808080",
//                 }}
//               />
//             ))}
//             <hr />
//             <div style={{ fontFamily: "Work Sans, sans-serif" }}>
//               Nhà xuất bản
//             </div>
//             {publishers.map((publisher) => (
//               <Form.Check
//                 label={publisher}
//                 checked={publisher === selectedPublisher}
//                 onClick={() => handleCheckboxClick2(publisher)}
//                 style={{
//                   fontFamily: "Work Sans, sans-serif",
//                   color: "#808080",
//                 }}
//               />
//             ))}
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//       <div className="display">
//         <div
//           style={{
//             fontFamily: "Work Sans, sans-serif",
//             color: "#21717A",
//             fontSize: 27.87,
//             fontWeight: "500",
//           }}
//         >
//           {selectedCategory && (
//             <div key={selectedCategory}>{selectedCategory}</div>
//           )}
//         </div>
//         <div style={{ fontFamily: "Work Sans, sans-serif" }}>
//           Hiển thị 1 của 53 sản phẩm
//         </div>
//         <br />
//         <Row>
//           {selectedCategory
//             ? filteredBooks.map((book) => (
//                 <Col xs={6} sm={6} md={4} lg={3}>
//                   <BookCard
//                     ISBN={book.ISBN}
//                     title={book.title}
//                     authorName={book.authorName}
//                     coverLink={book.coverLink}
//                   />
//                 </Col>
//               ))
//             : searchResults.map((book) => (
//                 <Col xs={6} sm={6} md={4} lg={3}>
//                   <BookCard
//                     ISBN={book.ISBN}
//                     title={book.title}
//                     authorName={book.authorName}
//                     coverLink={book.coverLink}
//                   />
//                 </Col>
//               ))}
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default SearchPage;

import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import "./SearchPage.css";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";

function SearchPage({ searchResults }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const categories = [
    "adventure",
    "Historical Fiction",
    "Mythology",
    "Romance",
    "horror",
    "mystery",
  ];
  const publishers = [
    "Harper Perennial",
    "Ecco",
    "William Morrow",
    "Penguin Classics",
    "Dutton",
    "Ballantine Books",
    "Canary Street Press",
    "Scribner",
    "Atria Books",
    "Graydon House",
    "Independently published",
  ];

  const handleCheckboxClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };
  const handleCheckboxClick2 = (publisher) => {
    if (publisher === selectedPublisher) {
      setSelectedPublisher("");
    } else {
      setSelectedPublisher(publisher);
    }
  };
  return (
    <div className="custom-accordion">
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header
            style={{
              fontFamily: "Work Sans, sans-serif",
              color: "rgba(0, 0, 0, 0.8)",
            }}
          >
            Filter by
          </Accordion.Header>

          <Accordion.Body>
            <hr />
            <div
              style={{
                fontFamily: "Work Sans, sans-serif",
                color: "rgba(0, 0, 0, 0.8)",
              }}
            >
              Categories
            </div>
            {categories.map((category) => (
              <Form.Check
                label={category}
                checked={category === selectedCategory}
                onClick={() => handleCheckboxClick(category)}
                style={{
                  fontFamily: "Work Sans, sans-serif",
                  color: "#808080",
                }}
              />
            ))}
            <hr />
            <div style={{ fontFamily: "Work Sans, sans-serif" }}>
              Nhà xuất bản
            </div>
            {publishers.map((publisher) => (
              <Form.Check
                label={publisher}
                checked={publisher === selectedPublisher}
                onClick={() => handleCheckboxClick2(publisher)}
                style={{
                  fontFamily: "Work Sans, sans-serif",
                  color: "#808080",
                }}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="display">
        <div
          style={{
            fontFamily: "Work Sans, sans-serif",
            color: "#21717A",
            fontSize: 27.87,
            fontWeight: "500",
          }}
        >
          {selectedCategory && (
            <div key={selectedCategory}>{selectedCategory}</div>
          )}
        </div>
        <div style={{ fontFamily: "Work Sans, sans-serif" }}>
          Hiển thị 1 của 53 sản phẩm
        </div>
        <br />
        <Row>
          {searchResults
            .filter(
              (book) =>
                selectedCategory === "" ||
                book.genres.includes(selectedCategory)
            )
            .filter(
              (book) =>
                selectedPublisher === "" || book.publisher === selectedPublisher
            )
            .map((book) => (
              <Col xs={6} sm={6} md={4} lg={3}>
                <BookCard
                  ISBN={book.ISBN}
                  title={book.title}
                  authorName={book.authorName}
                  coverLink={book.coverLink}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default SearchPage;
