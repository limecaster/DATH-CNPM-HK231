
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import React, { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from "axios";
import Form from '../../../components/AddBooks/Addbooks'
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
                <bold style={{ fontSize: "55px", fontWeight: "700" }}>Quản lý danh sách của thư viện</bold>
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
                                <TableRow key={book.id}>
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
                <Modal.Header style={{ flexDirection: "column" }} closeButton>
                    <Modal.Title >Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}


export default ShowList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
// import { isEmpty } from "lodash";
// import { SearchOutlined } from "@ant-design/icons";
// import Highlighter from "react-highlight-words";

// const ShowList = () => {
//     const [gridData, setGridData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [editingKey, setEditingKey] = useState("");
//     const [sortedInfo, setSortedInfo] = useState({});
//     const [form] = Form.useForm();
//     const [searchText, setSearchText] = useState("");
//     const [searchColText, setSearchColText] = useState("");
//     const [searchedCol, setSearchedCol] = useState("");
//     let [filteredInfo, setFilteredInfo] = useState({});
//     let [filteredData] = useState();

//     useEffect(() => {
//         loadData();
//     }, []);

//     const loadData = async () => {
//         setLoading(true);
//         const response = await axios.get(
//             "http://localhost:3000/books"
//         );
//         setGridData(response.data);
//         setLoading(false);
//     };

//     const handleDelete = (value) => {
//         const dataSource = [...modifiedData];
//         const filteredData = dataSource.filter((item) => item.id !== value.id);
//         setGridData(filteredData);
//     };

//     const modifiedData = gridData.map(({ body, ...item }) => ({
//         ...item,
//         key: item.id,
//         info: `My name is ${item.email.split("@")[0]} and i am ${Math.floor(Math.random() * 6) + 20
//             } year old`,
//         age: Math.floor(Math.random() * 6) + 20,
//         comment: isEmpty(body) ? item.comment : body,
//     }));

//     console.log("modifiedData", modifiedData);

//     const getColumnSearchProps = (dataIndex) => ({
//         filterDropdown: ({
//             setSelectedKeys,
//             selectedKeys,
//             confirm,
//             clearFilters,
//         }) => (
//             <div style={{ padding: 8 }}>
//                 <Input
//                     placeholder={`Search ${dataIndex}`}
//                     value={selectedKeys[0]}
//                     onChange={(e) =>
//                         setSelectedKeys(e.target.value ? [e.target.value] : [])
//                     }
//                     onPressEnter={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
//                     style={{ width: 188, marginBottom: 0, display: "block" }}
//                 />
//                 <Space>
//                     <Button
//                         type="primary"
//                         onClick={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
//                         icon={<SearchOutlined />}
//                         size="small"
//                         style={{ width: 90 }}
//                     >
//                         Search
//                     </Button>
//                     <Button
//                         onClick={() => handleResetCol(clearFilters)}
//                         size="small"
//                         style={{ width: 90 }}
//                     >
//                         Reset
//                     </Button>
//                 </Space>
//             </div>
//         ),
//         filterIcon: (filtered) => (
//             <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
//         ),
//         onFilter: (value, record) =>
//             record[dataIndex]
//                 ? record[dataIndex]
//                     .toString()
//                     .toLowerCase()
//                     .includes(value.toLowerCase())
//                 : "",
//         render: (text) =>
//             searchedCol === dataIndex ? (
//                 <Highlighter
//                     highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
//                     searchWords={[searchColText]}
//                     autoEscape
//                     textToHighlight={text ? text.toString() : ""}
//                 />
//             ) : (
//                 text
//             ),
//     });

//     const handleSearchCol = (selectedKeys, confirm, dataIndex) => {
//         confirm();
//         setSearchColText(selectedKeys[0]);
//         setSearchedCol(dataIndex);
//     };

//     const handleResetCol = (clearFilters) => {
//         clearFilters();
//         setSearchColText("");
//     };

//     const edit = (record) => {
//         form.setFieldsValue({
//             name: "",
//             email: "",
//             comment: "",
//             ...record,
//         });
//         setEditingKey(record.key);
//     };

//     const cancel = () => {
//         setEditingKey("");
//     };

//     const handleChange = (_, filters, sorter) => {
//         console.log("sorter", sorter);
//         console.log("filters", filters);
//         const { order, field } = sorter;
//         setFilteredInfo(filters);
//         setSortedInfo({ columnKey: field, order });
//     };

//     console.log("filteredInfo", filteredInfo);

//     const save = async (key) => {
//         try {
//             const row = await form.validateFields();
//             const newData = [...modifiedData];
//             const index = newData.findIndex((item) => key === item.key);
//             if (index > -1) {
//                 const item = newData[index];
//                 newData.splice(index, 1, { ...item, ...row });
//                 setGridData(newData);
//                 setEditingKey("");
//             }
//         } catch (error) {
//             console.log("Error", error);
//         }
//     };

//     const EditableCell = ({
//         editing,
//         dataIndex,
//         title,
//         record,
//         children,
//         ...restProps
//     }) => {
//         const input = <Input />;
//         return (
//             <td {...restProps}>
//                 {editing ? (
//                     <Form.Item
//                         name={dataIndex}
//                         style={{
//                             margin: 0,
//                         }}
//                         rules={[
//                             {
//                                 required: true,
//                                 message: `Please input ${title}`,
//                             },
//                         ]}
//                     >
//                         {input}
//                     </Form.Item>
//                 ) : (
//                     children
//                 )}
//             </td>
//         );
//     };

//     const columns = [
//         {
//             title: "ID",
//             dataIndex: "id",
//         },
//         {
//             title: "Name",
//             dataIndex: "name",
//             align: "center",
//             editable: true,
//             sorter: (a, b) => a.name.length - b.name.length,
//             sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
//             ...getColumnSearchProps("name"),
//         },
//         {
//             title: "Email",
//             dataIndex: "email",
//             align: "center",
//             editable: true,
//             sorter: (a, b) => a.email.length - b.email.length,
//             sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order,
//             ...getColumnSearchProps("email"),
//         },
//         {
//             title: "Age",
//             dataIndex: "age",
//             align: "center",
//             editable: false,
//             filters: [
//                 { text: "20", value: "20" },
//                 { text: "21", value: "21" },
//                 { text: "22", value: "22" },
//                 { text: "23", value: "23" },
//                 { text: "24", value: "24" },
//                 { text: "25", value: "25" },
//             ],
//             filteredValue: filteredInfo.age || null,
//             onFilter: (value, record) => String(record.age).includes(value),
//         },
//         {
//             title: "Comment",
//             dataIndex: "comment",
//             align: "center",
//             editable: true,
//             sorter: (a, b) => a.comment.length - b.comment.length,
//             sortOrder: sortedInfo.columnKey === "comment" && sortedInfo.order,
//             ...getColumnSearchProps("comment"),
//         },
//         {
//             title: "Actions",
//             dataIndex: "actions",
//             align: "center",
//             render: (_, record) => {
//                 const editable = isEditing(record);
//                 return modifiedData.length >= 1 ? (
//                     <Space>
//                         <Popconfirm
//                             title="Sure to delete?"
//                             onConfirm={() => handleDelete(record)}
//                         >
//                             <Button type="primary" disabled={editable} danger>
//                                 Delete
//                             </Button>
//                         </Popconfirm>
//                         {editable ? (
//                             <span>
//                                 <Space size="middle">
//                                     <Button
//                                         onClick={(e) => save(record.key)}
//                                         type="primary"
//                                         style={{ marginRight: 8 }}
//                                     >
//                                         Save
//                                     </Button>
//                                     <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//                                         <Button>Cancel</Button>
//                                     </Popconfirm>
//                                 </Space>
//                             </span>
//                         ) : (
//                             <Button onClick={() => edit(record)} type="primary">
//                                 Edit
//                             </Button>
//                         )}
//                     </Space>
//                 ) : null;
//             },
//         },
//     ];

//     const isEditing = (record) => {
//         return record.key === editingKey;
//     };

//     const clearAll = () => {
//         setSortedInfo({});
//         setFilteredInfo({});
//         setSearchText("");
//         loadData();
//     };

//     const mergedColumns = columns.map((col) => {
//         if (!col.editable) {
//             return col;
//         }
//         return {
//             ...col,
//             onCell: (record) => ({
//                 record,
//                 dataIndex: col.dataIndex,
//                 title: col.title,
//                 editing: isEditing(record),
//             }),
//         };
//     });

//     const handleSearch = (e) => {
//         setSearchText(e.target.value);
//         if (e.target.value === "") {
//             loadData();
//         }
//     };
//     const globalSearch = () => {
//         filteredData = modifiedData.filter((value) => {
//             return (
//                 value.name.toLowerCase().includes(searchText.toLowerCase()) ||
//                 value.email.toLowerCase().includes(searchText.toLowerCase()) ||
//                 value.comment.toLowerCase().includes(searchText.toLowerCase())
//             );
//         });
//         setGridData(filteredData);
//     };

//     return (
//         <div>
//             <Space style={{ marginBottom: 16 }}>
//                 <Input
//                     placeholder="Enter Search Text"
//                     onChange={handleSearch}
//                     type="text"
//                     allowClear
//                     value={searchText}
//                 />
//                 <Button type="primary" onClick={globalSearch}>
//                     Search
//                 </Button>
//                 <Button onClick={clearAll}>Clear All</Button>
//             </Space>
//             <Form form={form} component={false}>
//                 <Table
//                     components={{
//                         body: {
//                             cell: EditableCell,
//                         },
//                     }}
//                     columns={mergedColumns}
//                     expandable={{
//                         expandedRowRender: (record) => (
//                             <p style={{ margin: 0 }}>{record.info}</p>
//                         ),
//                         rowExpandable: (record) => record.info !== "Not Expandable",
//                     }}
//                     dataSource={
//                         filteredData && filteredData.length ? filteredData : modifiedData
//                     }
//                     bordered
//                     loading={loading}
//                     onChange={handleChange}
//                 />
//             </Form>
//         </div>
//     );
// };

