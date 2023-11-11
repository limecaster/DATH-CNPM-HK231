// import React from 'react';
// import Sidebar from '../../../components/Sidebar/Sidebar';
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import ShowList from './ShowList';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ListPage = () => {
//     return (
//         <div>
//             <Sidebar />
//             <Container>
//                 <Row>
//                     <Col xs={1}>
//                     </Col>
//                     <Col xs={11}>
//                         <ShowList />
//                     </Col>
//                 </Row>

//             </Container>

//         </div>





//     )
// }

// export default ListPage;

import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ShowList from './ShowList';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListPage = () => {
    return (
        <div>

            <Sidebar />
            <Container>
                <Row>
                    <Col xs={12} sm={1}>
                        {/* On small screens, the sidebar will take up the entire width */}
                    </Col>
                    <Col xs={12} sm={11}>
                        <ShowList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ListPage;
