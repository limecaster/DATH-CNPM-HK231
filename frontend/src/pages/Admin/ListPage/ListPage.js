
import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ShowList from './ShowList';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListPage = () => {
    return (
        <div>
            <Row>
                <Col xs={2} sm={2}>
                    <Sidebar />
                </Col>
                <Col xs={10} sm={9}>
                    <ShowList />
                </Col>
            </Row>
        </div>
    )
}

export default ListPage;
