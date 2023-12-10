
import React, { useMemo, useState, useEffect, useRef } from 'react';
import {
    MRT_EditActionButtons,
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import './Book.css';
import Container from 'react-bootstrap/Container';
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip,

} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import apiEndpoints from './../../../components/ApiBook/Book'; // Assuming you store your hooks in an 'api.js' file
import { bookCoverType, bookLanguage } from './MakeData';
import Row from 'react-bootstrap/Row';

const Book = () => {
    const [validationErrors, setValidationErrors] = useState({});
    const [books, setBooks] = useState([]);


    const [newCoverLink, setNewCoverLink] = useState('');
    const [chooseImage, setChooseImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showRequiredImage, setShowRequiredImage] = useState(false);

    const fileInputRef = useRef(null);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'ISBN',
                header: 'ISBN',
                muiEditTextFieldProps: {
                    type: 'text',
                    required: true,
                    error: !!validationErrors?.ISBN,
                    helperText: validationErrors?.ISBN,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            ISBN: undefined,
                        }),
                    // readOnly: true,

                },
            },
            {
                accessorKey: 'title',
                header: 'Tiêu đề',
                muiEditTextFieldProps: {
                    type: 'text',
                    required: true,
                    error: !!validationErrors?.title,
                    helperText: validationErrors?.title,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            title: undefined,
                        }),
                },
            },

            {
                accessorKey: 'coverLink',
                header: 'Bìa sách',
                Cell: ({ row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <img
                            alt="coverLink"
                            height={200}
                            width={125}
                            src={row.original.coverLink}
                            loading="lazy"
                            style={{ borderRadius: '5px' }}
                        />

                    </Box>
                ),
            },
            {
                accessorKey: 'authorName',
                header: 'Tên tác giả',
                muiEditTextFieldProps: {
                    type: 'text',
                    required: true,
                    error: !!validationErrors?.authorName,
                    helperText: validationErrors?.authorName,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            authorName: undefined,
                        }),
                },
            },
            {
                accessorKey: 'publisher',
                header: 'Nhà xuất bản',
                muiEditTextFieldProps: {
                    type: 'text',
                    required: true,
                    error: !!validationErrors?.publisher,
                    helperText: validationErrors?.publisher,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            publisher: undefined,
                        }),
                },
            },
            {
                accessorKey: 'publishDate',
                header: 'Năm xuất bản',
                muiEditTextFieldProps: {
                    type: 'number',
                    required: true,
                    error: !!validationErrors?.publishDate,
                    helperText: validationErrors?.publishDate,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            publishDate: undefined,
                        }),
                },
            },
            {
                accessorKey: 'coverType',
                header: 'Loại bìa',
                editVariant: 'select',
                editSelectOptions: bookCoverType,
                muiEditTextFieldProps: {
                    select: true,
                    error: !!validationErrors?.coverType,
                    helperText: validationErrors?.coverType,
                },
            },
            {
                accessorKey: 'language',
                header: 'Ngôn ngữ',
                editVariant: 'select',
                editSelectOptions: bookLanguage,
                muiEditTextFieldProps: {
                    select: true,
                    error: !!validationErrors?.language,
                    helperText: validationErrors?.language,
                },
            },
            {
                accessorKey: 'noPages',
                header: 'Số trang',
                muiEditTextFieldProps: {
                    type: 'number',
                    required: true,
                    error: !!validationErrors?.noPages,
                    helperText: validationErrors?.noPages,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            noPages: undefined,
                        }),
                },
            },
            {
                accessorKey: 'genres',
                header: 'Thể loại sách',
                muiEditTextFieldProps: {
                    type: 'text',
                    required: true,
                    error: !!validationErrors?.genres,
                    helperText: validationErrors?.genres,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            genres: undefined,
                        }),
                },
            },
            {
                accessorKey: 'copyNumber',
                header: 'Số bản sao',
                muiEditTextFieldProps: {
                    type: 'number',
                    required: true,
                    error: !!validationErrors?.copyNumber,
                    helperText: validationErrors?.copyNumber,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            copyNumber: undefined,
                        }),
                },
            },
            {
                accessorKey: 'desc',
                header: 'Mô tả',
                muiEditTextFieldProps: {
                    type: 'text',
                    required: true,

                    error: !!validationErrors?.desc,
                    helperText: validationErrors?.desc,
                    onFocus: () =>
                        setValidationErrors({
                            ...validationErrors,
                            desc: undefined,
                        }),
                },
            },



        ],
        [validationErrors]
    );
    const validateRequired = (value) => {
        return value !== undefined && value !== null && !!value.length;
    };
    const validateBook = (book) => {
        return {
            ISBN: !validateRequired(book.ISBN)
                ? 'Vui lòng nhập ISBN'
                : '',
            title: !validateRequired(book.title) ? 'Vui lòng nhập tiêu đề' : '',
            desc: !validateRequired(book.desc) ? 'Vui lòng nhập mô tả' : '',
            authorName: !validateRequired(book.authorName) ? 'Vui lòng nhập tên tác giả' : '',
            publishDate: !validateRequired(book.publishDate) ? 'Vui lòng nhập năm xuất bản' : '',
            publisher: !validateRequired(book.publisher) ? 'Vui lòng nhập nhà xuất bản' : '',
            coverType: !validateRequired(book.coverType) ? 'Vui lòng chọn loại bìa' : '',
            language: !validateRequired(book.language) ? 'Vui lòng chọn loại ngôn ngữ' : '',
            noPages: !validateRequired(book.noPages) ? 'Vui lòng nhập số trang' : '',
            genres: !validateRequired(book.genres) ? 'Vui lòng nhập thể loại sách' : '',
            copyNumber: !validateRequired(book.copyNumber) ? 'Vui lòng nhập số lượng bản sao' : '',

        };
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiEndpoints.getAllBook();
                // const activeCustomers = data.filter(customer => customer.deleted !== 1);
                // setCustomer(activeCustomers);
                // setCustomer(data)
                const sortedBooks = data.sort((a, b) => {
                    // Sắp xếp theo thời gian thêm mới giảm dần
                    // console.log("Date:", new Date(b.dateAdded) - new Date(a.dateAdded))
                    return new Date(b.dateAdded) - new Date(a.dateAdded);
                });
                setBooks(sortedBooks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreateUser = async ({ values, table }) => {
        const newValidationErrors = validateBook(values);
        if (!selectedImage) {
            setShowRequiredImage(true);
        }
        if (Object.values(newValidationErrors).some((error) => error)) {
            setValidationErrors(newValidationErrors);
            return;
        }

        setValidationErrors({});
        try {
            console.log('values:', values);
            await apiEndpoints.insertBook(values, selectedImage);
            table.setCreatingRow(null);
            setSelectedImage(null);
            const updatedData = await apiEndpoints.getAllBook();

            // const activeCustomers = updatedData.filter(customer => customer.deleted !== 1);
            setBooks(updatedData);
            window.alert('Đăng kí sách mới thành công');
        } catch (error) {
            console.error('Error creating customer:', error);
            if (error.response && error.response.data) {
                setValidationErrors(error.response.data);
            }
        }
    };

    const handleSaveUser = async ({ values, table }) => {




        setValidationErrors({});
        try {
            await apiEndpoints.updateBook(values, selectedImage);
            table.setCreatingRow(null);
            setSelectedImage(null);
            const updatedData = await apiEndpoints.getAllBook();


            // const activeCustomers = updatedData.filter(customer => customer.deleted !== 1);
            setBooks(updatedData);
            window.alert('Cập nhật thông tin sách thành công');
            table.setEditingRow(null);
        } catch (error) {
            console.error('Error creating customer:', error);
            if (error.response && error.response.data) {
                setValidationErrors(error.response.data);
            }
        }
    };

    const openDeleteConfirmModal = async (row) => {
        try {
            if (window.confirm('Bạn có chắc chắn xóa sách này ?')) {
                console.log('row.phone:', row.id);
                await apiEndpoints.deleteBook(row.id);
                const updatedData = await apiEndpoints.getAllBook();
                setBooks(updatedData);
                window.alert('Xóa sách thành công');
            }
        }
        catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log('Selected Image:', file);

        if (file instanceof File) {
            setSelectedImage(file);
            setChooseImage(true);
            setShowRequiredImage(false);
            setNewCoverLink(URL.createObjectURL(file));
        } else {
            console.error('Invalid file format or no file selected.');
        }
    };


    const handleChooseFileClick = () => {
        fileInputRef.current?.click();
    };

    const table = useMaterialReactTable({
        onCreatingRowCancel: () => {
            setValidationErrors({});
            setChooseImage(false);
            setShowRequiredImage(false);
        },
        onCreatingRowSave: handleCreateUser,
        onEditingRowCancel: () => {
            setValidationErrors({});
            setChooseImage(false);
            setShowRequiredImage(false);
        },
        onEditingRowSave: handleSaveUser,
        columns,
        data: books,
        createDisplayMode: 'modal',
        editDisplayMode: 'modal',
        enableEditing: true,
        getRowId: (row) => row.ISBN,
        initialState: { columnVisibility: { publishDate: false, language: false, coverType: false, desc: false, noPages: false } },
        muiTableContainerProps: {
            sx: {
                overflowX: 'auto',
                width: '100%',
            },
        },
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title="Edit">
                    {/* <IconButton > */}
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">

                    <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <Button
                variant="contained"
                onClick={() => {
                    table.setCreatingRow(true);
                }}
                sx={{ marginBottom: '16px' }}
            >
                Thêm sách mới vào thư viện
            </Button>

        ),
        renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h5" style={{ textAlign: 'center' }}>Thêm sách vào thư viện</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {internalEditComponents.slice(0, 2)}
                    <div className={`coverlink ${showRequiredImage ? 'required' : ''}`} >Bìa sách</div>
                    <div
                        style={{
                            width: '150px',
                            height: '200px',
                            border: '1px solid #ccc',
                            position: 'relative',
                            cursor: 'pointer',
                        }}
                        onClick={handleChooseFileClick}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0,
                                cursor: 'pointer',
                            }}

                        />
                        {chooseImage ? (
                            <img
                                src={newCoverLink}
                                alt="coverLink"
                                style={{ width: '100%', height: '100%' }}
                            // thumbnail
                            />
                        ) : (
                            <Button variant="outlined" size="small" style={{ margin: '80px 18px' }}>
                                Choose File
                            </Button>
                        )}

                    </div>
                    {showRequiredImage && <div style={{ color: '#d32f2f' }}> Vui lòng chọn bìa sách </div>}
                    {internalEditComponents.slice(3)}
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row}
                    />
                </DialogActions>
            </>
        ),
        renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h5" style={{ textAlign: 'center' }}>Chỉnh sử thông tin sách</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', marginTop: '10px', gap: '1rem' }}>
                    {internalEditComponents.slice(0, 2)}
                    <div className='coverlink'>Bìa sách</div>
                    <div
                        style={{
                            width: '150px',
                            height: '200px',
                            border: '1px solid #ccc',
                            position: 'relative',
                            cursor: 'pointer',
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0,
                                cursor: 'pointer',
                            }}
                        />

                        {chooseImage ? (
                            <img
                                src={newCoverLink}
                                alt="coverLink"
                                style={{ width: '100%', height: '100%' }}

                            />
                        ) : (
                            <img
                                src={row.original.coverLink}
                                alt="coverLink"
                                style={{ width: '100%', height: '100%' }}
                            // thumbnail
                            />
                        )}

                    </div>
                    {internalEditComponents.slice(3)}
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        ),

    });
    return (
        <Container>
            <Row>
                <h1 style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}>Quản lý sách của thư viện</h1>
            </Row>
            <Row style={{ marginTop: '20px' }}>
                <div style={{
                    overflowX: 'auto',
                    width: '100%',
                    padding: '16px',
                    minWidth: '320px', // Set a minimum width if needed
                }} >
                    <MaterialReactTable style={{ minWidth: '1000px' }} table={table} />
                </div>
            </Row>


        </Container>

    );
};

export default Book;

