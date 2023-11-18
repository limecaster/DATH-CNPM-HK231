
import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ShowList from './ShowList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";


// import Forms from '../../../components/AddBooks/Addbooks';

const ListPage = () => {
    return (
        <Row>
            <Col xs={2} sm={1}>
                <Sidebar />
            </Col>
            <Container>
                <Row>
                    <Col xs={1} sm={1}></Col>
                    <Col xs={10} sm={10}>
                        <ShowList />
                    </Col>
                    <Col xs={1} sm={1}></Col>
                </Row>
            </Container>
        </Row>
    )
}

export default ListPage;
