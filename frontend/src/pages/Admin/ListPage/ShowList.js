
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import React, { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from "axios";
import Forms from '../../../components/AddBooks/Addbooks'
import Modal from 'react-bootstrap/Modal';


const ShowList = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedBooks = books.slice(startIndex, endIndex);


    // # Show Popup 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // ----------------------------------------------------------------
    useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(res => {
                setBooks(res.data)
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const handleEdit = (bookId) => {
        console.log(`Edit book with ID ${bookId}`);
    };

    const handleDelete = (bookId) => {
        console.log(`Delete book with ID ${bookId}`);
    }




    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };


    const totalPages = Math.ceil(books.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }



    return (
        <div>
            <Row>
                <strong style={{ fontSize: "55px", fontWeight: "700" }}>Quản lý danh sách của thư viện</strong>
            </Row>
            <Row style={{ width: "100%", marginTop: "15px" }}>
                <Col xs={6}>
                    <ReactSearchBox
                        width="150%"
                        placeholder="Search Here..."
                    />
                </Col>
                <Col xs={4} style={{ display: "flex" }}>
                    <Button variant="outlined" color="success" style={{ width: "80px", marginRight: "20px" }}>Search</Button>
                </Col>
                <Col xs={2} style={{ display: "flex", textAlign: "right", justifyContent: "right" }} >
                    <Button onClick={handleShow} variant="contained" color="success" style={{ width: "120px" }}>Thêm sách</Button>
                </Col>
            </Row>
            <Row style={{ width: "105%", marginTop: "30px" }}>
                <TableContainer component={Paper} style={{ border: "3px solid grey" }}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#EEEEEE', textAlign: 'center', padding: '5px' }}>
                                <TableCell align="center">ISBN</TableCell>
                                <TableCell align="center">Tiêu đề</TableCell>
                                <TableCell align="center">Tác giả</TableCell>
                                <TableCell align="center">Nhà xuất bản</TableCell>
                                <TableCell align="center">Ngày thêm sách</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayedBooks.map((book) => (
                                <TableRow key={book.ISBN}>
                                    <TableCell style={{ padding: '5px' }} align="center">{book.ISBN}</TableCell>
                                    <TableCell style={{ padding: '5px', width: '230px' }} align="center">{book.title}</TableCell>
                                    <TableCell style={{ padding: '5px' }} align="center">{book.name}</TableCell>
                                    <TableCell style={{ padding: '5px' }} align="center">{book.publisher}</TableCell>
                                    <TableCell style={{ padding: '5px' }} align="center">{book.publishDate}</TableCell>
                                    <TableCell style={{ padding: '5px', width: '230px' }} align="center" >
                                        <Button style={{ padding: '5px', marginRight: '15px' }} variant="outlined" color="success" size="small" onClick={() => handleEdit(book.id)}>Chỉnh sửa</Button>
                                        <Button style={{ padding: '5px' }} variant="outlined" color="error" size="small" onClick={() => handleDelete(book.id)}>Xóa</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Row>
            <Col xs={12} style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                <Button
                    variant="outlined"
                    color="success"
                    style={{ marginRight: "10px" }}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                {pageNumbers.map((number) => (
                    <Button
                        key={number}
                        variant={number === currentPage ? "contained" : "outlined"}
                        color="success"
                        style={{ marginRight: "10px" }}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </Button>
                ))}
                <Button
                    variant="outlined"
                    color="success"
                    onClick={handleNextPage}
                    disabled={endIndex >= books.length}
                >
                    Next
                </Button>
            </Col>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginLeft: '160px' }} >Thêm sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Forms />
                </Modal.Body>
            </Modal>
        </div >
    )
}


export default ShowList;
