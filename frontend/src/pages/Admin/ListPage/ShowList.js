
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import React, { useState } from "react";
// import ReactSearchBox from "react-search-box";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


const ShowList1 = () => {

//     const [books, setBooks] = useState([
//         { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//         { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//         { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//     ]);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     }

        const columns = [
            {
                title:"IBSN",
                dataIndex: "ibsn",
                align: "center",
                
            }
        ]
//     return (
//         <div>
//             <Row>
//                 <bold style={{ fontSize: "40px", fontWeight: "700" }}>Quản lý danh sách của thư viện</bold>
//             </Row>
//             <Row style={{ width: "100%", marginTop: "15px" }}>
//                 <Col style={{ width: "100%" }}>
//                     <ReactSearchBox
//                         width="150%"
//                         placeholder="Search Here..."
//                     />
//                 </Col>
//                 <Col style={{ display: "flex" }}>
//                     <Button variant="outlined" color="primary" style={{ width: "80px", marginRight: "20px" }}>Search</Button>

//                     <Button variant="outlined" color="secondary" style={{ width: "120px" }}>Thêm sách</Button>
//                 </Col>
//             </Row>
//             <Row style={{ width: "100%", marginTop: "30px" }}>
//                 <TableContainer component={Paper} style={{ border: "3px solid grey" }}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Id</TableCell>
//                                 <TableCell>Tiêu đề</TableCell>
//                                 <TableCell>Tác giả</TableCell>
//                                 <TableCell>Nhà xuất bản</TableCell>
//                                 <TableCell>Ngày thêm sách</TableCell>
//                                 <TableCell>Action</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {books.map((book) => (
//                                 <TableRow key={book.id}>
//                                     <TableCell>{book.id}</TableCell>
//                                     <TableCell>{book.title}</TableCell>
//                                     <TableCell>{book.author}</TableCell>
//                                     <TableCell>{book.publisher}</TableCell>
//                                     <TableCell>{book.addedDate}</TableCell>
//                                     <TableCell>
//                                         <Button variant="outlined" color="primary" style={{ marginRight: "15px" }} onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                         <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Row>
//         </div>
//     )
}

export default ShowList1

// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import React, { useState } from "react";
// import ReactSearchBox from "react-search-box";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([
//         { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//         { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//         { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//     ]);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     }

//     return (
//         <div>
//             <Row>
//                 <div className="text-center">
//                     <h2>Quản lý danh sách của thư viện</h2>
//                 </div>
//             </Row>
//             <Row className="mb-3">
//                 <Col sm={12} md={6}>
//                     <ReactSearchBox placeholder="Search Here..." />
//                 </Col>
//                 <Col sm={12} md={6} className="d-flex justify-content-end">
//                     <Button variant="outlined" color="primary" className="me-2">Search</Button>
//                     <Button variant="outlined" color="secondary">Thêm sách</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <TableContainer component={Paper} className="border">
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>Id</TableCell>
//                                     <TableCell>Tiêu đề</TableCell>
//                                     <TableCell>Tác giả</TableCell>
//                                     <TableCell>Nhà xuất bản</TableCell>
//                                     <TableCell>Ngày thêm sách</TableCell>
//                                     <TableCell>Action</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {books.map((book) => (
//                                     <TableRow key={book.id}>
//                                         <TableCell>{book.id}</TableCell>
//                                         <TableCell>{book.title}</TableCell>
//                                         <TableCell>{book.author}</TableCell>
//                                         <TableCell>{book.publisher}</TableCell>
//                                         <TableCell>{book.addedDate}</TableCell>
//                                         <TableCell>
//                                             <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                             <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

// export default ShowList;

// import React, { useState, useEffect } from 'react';
// import ReactSearchBox from 'react-search-box';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [refreshInterval, setRefreshInterval] = useState(null);

//     useEffect(() => {
//         // Function to fetch and update the list of books
//         const fetchBooks = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchBooks();

//         // Set up a refresh interval to continuously update the list (e.g., every 10 seconds)
//         const intervalId = setInterval(fetchBooks, 10000);
//         setRefreshInterval(intervalId);

//         // Clean up the interval when the component unmounts
//         return () => {
//             if (refreshInterval) {
//                 clearInterval(refreshInterval);
//             }
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {books.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default ShowList;


// import React, { useState, useEffect } from 'react';
// import ReactSearchBox from 'react-search-box';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(8);

//     useEffect(() => {
//         // Function to fetch and update the list of books
//         const fetchBooks = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchBooks();

//         // Set up a refresh interval to continuously update the list (e.g., every 10 seconds)
//         const intervalId = setInterval(fetchBooks, 10000);

//         // Clean up the interval when the component unmounts
//         return () => {
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const pageNumbers = Math.ceil(books.length / itemsPerPage);

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentItems.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div>
//                 <ul className="pagination text-xl-center" >
//                     {Array.from({ length: pageNumbers }, (_, i) => (
//                         <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
//                             <button onClick={() => paginate(i + 1)} className="page-link">
//                                 {i + 1}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default ShowList;

// import React, { useState, useEffect } from 'react';
// import ReactSearchBox from 'react-search-box';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8;

//     useEffect(() => {
//         // Function to fetch and update the list of books
//         const fetchBooks = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 // Add your list of books here
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },

//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchBooks();

//         // Set up a refresh interval to continuously update the list (e.g., every 10 seconds)
//         const intervalId = setInterval(fetchBooks, 10000);

//         // Clean up the interval when the component unmounts
//         return () => {
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const pageNumbers = Math.ceil(books.length / itemsPerPage);

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentItems.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div className="pagination">
//                 <Button variant="outlined" color="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//                     Previous
//                 </Button>
//                 <Button variant="outlined" color="primary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers}>
//                     Next
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default ShowList;


// import React, { useState, useEffect } from 'react';
// import ReactSearchBox from 'react-search-box';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8;

//     useEffect(() => {
//         // Function to fetch and update the list of books
//         const fetchBooks = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 // Add your list of books here
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },

//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchBooks();

//         // Set up a refresh interval to continuously update the list (e.g., every 10 seconds)
//         const intervalId = setInterval(fetchBooks, 10000);

//         // Clean up the interval when the component unmounts
//         return () => {
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const pageNumbers = Math.ceil(books.length / itemsPerPage);

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentItems.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div className="pagination" style={{ display: 'flex', justifyContent: 'center' }}>
//                 <Button variant="outlined" color="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//                     Previous
//                 </Button>
//                 {Array.from({ length: pageNumbers }, (_, i) => (
//                     <Button
//                         key={i}
//                         variant="outlined"
//                         color="primary"
//                         onClick={() => paginate(i + 1)}
//                         disabled={currentPage === i + 1}
//                     >
//                         {i + 1}
//                     </Button>
//                 ))}
//                 <Button variant="outlined" color="primary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers}>
//                     Next
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default ShowList;

// import React, { useState, useEffect } from 'react';
// import ReactSearchBox from 'react-search-box';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8;

//     useEffect(() => {
//         // Function to fetch and update the list of books
//         const fetchBooks = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 // Add your list of books here
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },


//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },


//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchBooks();

//         // Set up a refresh interval to continuously update the list (e.g., every 10 seconds)
//         const intervalId = setInterval(fetchBooks, 10000);

//         // Clean up the interval when the component unmounts
//         return () => {
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const pageNumbers = Math.ceil(books.length / itemsPerPage);

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentItems.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div className="pagination">
//                 <Button variant="outlined" color="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//                     Previous
//                 </Button>
//                 {Array.from({ length: pageNumbers }, (_, i) => (
//                     <Button
//                         key={i}
//                         variant="outlined"
//                         color="primary"
//                         onClick={() => paginate(i + 1)}
//                         disabled={currentPage === i + 1}
//                     >
//                         {i + 1}
//                     </Button>
//                 ))}
//                 <Button variant="outlined" color="primary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers}>
//                     Next
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default ShowList;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8;

//     useEffect(() => {
//         // Simulated data fetching logic
//         const fetchData = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 // Your sample data here
//                 //                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },


//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },


//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchData();

//         // Clean up any resources when the component unmounts
//         return () => {
//             // Clear any intervals or resources as needed
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const pageNumbers = Math.ceil(books.length / itemsPerPage);

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentItems.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div>
//                 <ul className="pagination text-xl-center">
//                     <li
//                         className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
//                     >
//                         <button
//                             className="page-link"
//                             onClick={() => paginate(currentPage - 1)}
//                         >
//                             Trang trước
//                         </button>
//                     </li>
//                     {Array.from({ length: pageNumbers }, (_, i) => (
//                         <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
//                             <button onClick={() => paginate(i + 1)} className="page-link">
//                                 {i + 1}
//                             </button>
//                         </li>
//                     ))}
//                     <li
//                         className={`page-item ${currentPage === pageNumbers ? 'disabled' : ''}`}
//                     >
//                         <button
//                             className="page-link"
//                             onClick={() => paginate(currentPage + 1)}
//                         >
//                             Trang sau
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default ShowList;


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const ShowList = () => {
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8;

//     useEffect(() => {
//         // Simulated data fetching logic
//         const fetchData = () => {
//             // Replace this with your data fetching logic (e.g., fetching data from an API)
//             const data = [
//                 // Your sample data here
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },


//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', addedDate: '2023-11-08' },
//                 { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', addedDate: '2023-11-09' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 4, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },
//                 { id: 545010225, title: 'Giao trinh gia tich 2 ', author: 'Nguyen Dinh Huy', publisher: 'Publisher 3', addedDate: '2023-11-10' },

//             ];

//             setBooks(data);
//         };

//         // Initially fetch the list of books
//         fetchData();

//         // Clean up any resources when the component unmounts
//         return () => {
//             // Clear any intervals or resources as needed
//         };
//     }, []);

//     const handleEdit = (bookId) => {
//         console.log(`Edit book with ID ${bookId}`);
//     };

//     const handleDelete = (bookId) => {
//         console.log(`Delete book with ID ${bookId}`);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const pageNumbers = Math.ceil(books.length / itemsPerPage);

//     return (
//         <div>
//             <h2>Quản lý danh sách của thư viện</h2>
//             <TableContainer component={Paper} className="border mb-3">
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>Tiêu đề</TableCell>
//                             <TableCell>Tác giả</TableCell>
//                             <TableCell>Nhà xuất bản</TableCell>
//                             <TableCell>Ngày thêm sách</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentItems.map((book) => (
//                             <TableRow key={book.id}>
//                                 <TableCell>{book.id}</TableCell>
//                                 <TableCell>{book.title}</TableCell>
//                                 <TableCell>{book.author}</TableCell>
//                                 <TableCell>{book.publisher}</TableCell>
//                                 <TableCell>{book.addedDate}</TableCell>
//                                 <TableCell>
//                                     <Button variant="outlined" color="primary" className="me-2" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
//                                     <Button variant="outlined" color="secondary" onClick={() => handleDelete(book.id)}>Xóa</Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div>
//                 <ul className="pagination text-xl-center">
//                     <li
//                         className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
//                     >
//                         <button
//                             className="page-link"
//                             onClick={() => paginate(currentPage - 1)}
//                         >
//                             Trang trước
//                         </button>
//                     </li>
//                     {Array.from({ length: pageNumbers }, (_, i) => (
//                         <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
//                             <button onClick={() => paginate(i + 1)} className="page-link">
//                                 {i + 1}
//                             </button>
//                         </li>
//                     ))}
//                     <li
//                         className={`page-item ${currentPage === pageNumbers ? 'disabled' : ''}`}
//                     >
//                         <button
//                             className="page-link"
//                             onClick={() => paginate(currentPage + 1)}
//                         >
//                             Trang sau
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default ShowList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { isEmpty } from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const ShowList = () => {
    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingKey, setEditingKey] = useState("");
    const [sortedInfo, setSortedInfo] = useState({});
    const [form] = Form.useForm();
    const [searchText, setSearchText] = useState("");
    const [searchColText, setSearchColText] = useState("");
    const [searchedCol, setSearchedCol] = useState("");
    let [filteredInfo, setFilteredInfo] = useState({});
    let [filteredData] = useState();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        );
        setGridData(response.data);
        setLoading(false);
    };

    const handleDelete = (value) => {
        const dataSource = [...modifiedData];
        const filteredData = dataSource.filter((item) => item.id !== value.id);
        setGridData(filteredData);
    };

    const modifiedData = gridData.map(({ body, ...item }) => ({
        ...item,
        key: item.id,
        info: `My name is ${item.email.split("@")[0]} and i am ${Math.floor(Math.random() * 6) + 20
            } year old`,
        age: Math.floor(Math.random() * 6) + 20,
        comment: isEmpty(body) ? item.comment : body,
    }));

    console.log("modifiedData", modifiedData);

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 0, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => handleResetCol(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase())
                : "",
        render: (text) =>
            searchedCol === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[searchColText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const handleSearchCol = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchColText(selectedKeys[0]);
        setSearchedCol(dataIndex);
    };

    const handleResetCol = (clearFilters) => {
        clearFilters();
        setSearchColText("");
    };

    const edit = (record) => {
        form.setFieldsValue({
            name: "",
            email: "",
            comment: "",
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const handleChange = (_, filters, sorter) => {
        console.log("sorter", sorter);
        console.log("filters", filters);
        const { order, field } = sorter;
        setFilteredInfo(filters);
        setSortedInfo({ columnKey: field, order });
    };

    console.log("filteredInfo", filteredInfo);

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...modifiedData];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setGridData(newData);
                setEditingKey("");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        record,
        children,
        ...restProps
    }) => {
        const input = <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please input ${title}`,
                            },
                        ]}
                    >
                        {input}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            align: "center",
            editable: true,
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
            ...getColumnSearchProps("name"),
        },
        {
            title: "Email",
            dataIndex: "email",
            align: "center",
            editable: true,
            sorter: (a, b) => a.email.length - b.email.length,
            sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order,
            ...getColumnSearchProps("email"),
        },
        {
            title: "Age",
            dataIndex: "age",
            align: "center",
            editable: false,
            filters: [
                { text: "20", value: "20" },
                { text: "21", value: "21" },
                { text: "22", value: "22" },
                { text: "23", value: "23" },
                { text: "24", value: "24" },
                { text: "25", value: "25" },
            ],
            filteredValue: filteredInfo.age || null,
            onFilter: (value, record) => String(record.age).includes(value),
        },
        {
            title: "Comment",
            dataIndex: "comment",
            align: "center",
            editable: true,
            sorter: (a, b) => a.comment.length - b.comment.length,
            sortOrder: sortedInfo.columnKey === "comment" && sortedInfo.order,
            ...getColumnSearchProps("comment"),
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            render: (_, record) => {
                const editable = isEditing(record);
                return modifiedData.length >= 1 ? (
                    <Space>
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record)}
                        >
                            <Button type="primary" disabled={editable} danger>
                                Delete
                            </Button>
                        </Popconfirm>
                        {editable ? (
                            <span>
                                <Space size="middle">
                                    <Button
                                        onClick={(e) => save(record.key)}
                                        type="primary"
                                        style={{ marginRight: 8 }}
                                    >
                                        Save
                                    </Button>
                                    <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                        <Button>Cancel</Button>
                                    </Popconfirm>
                                </Space>
                            </span>
                        ) : (
                            <Button onClick={() => edit(record)} type="primary">
                                Edit
                            </Button>
                        )}
                    </Space>
                ) : null;
            },
        },
    ];

    const isEditing = (record) => {
        return record.key === editingKey;
    };

    const clearAll = () => {
        setSortedInfo({});
        setFilteredInfo({});
        setSearchText("");
        loadData();
    };

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === "") {
            loadData();
        }
    };
    const globalSearch = () => {
        filteredData = modifiedData.filter((value) => {
            return (
                value.name.toLowerCase().includes(searchText.toLowerCase()) ||
                value.email.toLowerCase().includes(searchText.toLowerCase()) ||
                value.comment.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setGridData(filteredData);
    };

    return (
        <div>
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Enter Search Text"
                    onChange={handleSearch}
                    type="text"
                    allowClear
                    value={searchText}
                />
                <Button type="primary" onClick={globalSearch}>
                    Search
                </Button>
                <Button onClick={clearAll}>Clear All</Button>
            </Space>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    columns={mergedColumns}
                    expandable={{
                        expandedRowRender: (record) => (
                            <p style={{ margin: 0 }}>{record.info}</p>
                        ),
                        rowExpandable: (record) => record.info !== "Not Expandable",
                    }}
                    dataSource={
                        filteredData && filteredData.length ? filteredData : modifiedData
                    }
                    bordered
                    loading={loading}
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
};

// export default ShowList;
