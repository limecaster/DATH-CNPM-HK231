import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useState, useRef, useEffect } from 'react';


const Forms = () => {

    const fileInputRef = useRef(null);

    const handleChooseFileClick = () => {
        fileInputRef.current?.click();
    };

    // upload file image

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        // console.log('Selected Image:', file);

        if (file instanceof File) {
            // console.log('File format:', file.type);
            setSelectedImage(file);
            setFieldValue('image', file);
        } else {
            console.error('Invalid file format or no file selected.');
        }
    };

    const schema = yup.object().shape({
        title: yup.string().required('Vui lòng nhập tiêu đề.'),
        name: yup.string().required('Vui lòng nhập tên tác giả.'),
        image: yup
            .mixed()
            .required('Vui lòng chọn một tệp.')
            .test('fileFormat', 'Định dạng tệp không hợp lệ', (value) => {
                if (value) {
                    // console.log("hop le");
                    const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
                    return allowedFormats.includes(value.type);
                }
                return false;
            }),
        publisher: yup.string().required('Vui lòng nhập nhà xuất bản.'),
        publishDate: yup.string().required('Vui lòng nhập năm xuất bản.'),
        ISBN: yup.string().required('Vui lòng nhập ISBN.'),
        desc: yup.string().required('Vui lòng nhập mô tả.')
    });

    useEffect(() => {
        // console.log("File:", selectedImage);
        // Thực hiện các hành động khác sau khi selectedImage thay đổi
    }, [selectedImage]);

    return (
        <Formik
            validationSchema={schema}
            encType="multipart/form-data"
            onSubmit={console.log}

            initialValues={{
                title: '',
                name: '',
                // file: null,
                image: null,
                publisher: '',
                publishDate: '',
                ISBN: '',
                desc: '',
            }}

        >
            {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Tiêu đề</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                placeholder="Nhập tiêu đề..."
                                isInvalid={touched.title && !!errors.title}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.title}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Bìa sách</Form.Label>
                            {/* Hidden file input */}
                            <Form.Control
                                type="file"
                                name="image"
                                required
                                accept="image/*"
                                style={{ display: 'none' }}
                                ref={fileInputRef}

                                onChange={(e) => handleImageChange(e, setFieldValue)}
                                isInvalid={touched.image && !!errors.image}
                            />
                            {/* Simulated button or div */}
                            <div
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    border: '1px solid #ccc',
                                    position: 'relative',
                                    cursor: 'pointer',
                                }}
                                onClick={handleChooseFileClick}
                            >
                                {selectedImage ? (
                                    <Image
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Selected"
                                        style={{ width: '100%', height: '100%' }}
                                        thumbnail
                                    />
                                ) : (
                                    <Button variant="outline-primary" style={{ marginTop: '50px', marginLeft: '10px' }}>
                                        Choose File
                                    </Button>
                                )}
                            </div>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.image}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group
                            controlId="validationFormik102"
                            className="position-relative"
                        >
                            <Form.Label>Tác giả</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                required
                                value={values.name}
                                onChange={handleChange}
                                placeholder="Nhập tên tác giả..."
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Form.Group
                            controlId="validationFormik103"
                            className="position-relative"
                        >
                            <Form.Label>Nhà xuất bản</Form.Label>
                            <Form.Control
                                type="text"
                                name="publisher"
                                required
                                value={values.publisher}
                                onChange={handleChange}
                                placeholder="Nhập nhà xuất bản..."
                                isInvalid={!!errors.publisher}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.publisher}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Form.Group
                            controlId="validationFormik104"
                            className="position-relative"
                        >
                            <Form.Label>Năm xuất bản</Form.Label>
                            <Form.Control
                                type="text"
                                name="publishDate"
                                required
                                value={values.publishDate}
                                onChange={handleChange}
                                placeholder="Nhập năm xuất bản..."
                                isInvalid={!!errors.publishDate}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.publishDate}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Form.Group
                            controlId="validationFormik105"
                            className="position-relative"
                        >
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control
                                type="text"
                                name="ISBN"
                                required
                                value={values.ISBN}
                                onChange={handleChange}
                                placeholder="Nhập ISBN..."
                                isInvalid={!!errors.ISBN}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.ISBN}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row style={{ marginTop: '10px' }}>
                        <Form.Group
                            controlId="validationFormik105"
                            className="position-relative"
                        >
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control
                                type="text"
                                name="desc"
                                required
                                value={values.desc}
                                onChange={handleChange}
                                placeholder="Nhập mô tả..."
                                isInvalid={!!errors.desc}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.desc}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button style={{ marginTop: '10px' }} type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default Forms;

