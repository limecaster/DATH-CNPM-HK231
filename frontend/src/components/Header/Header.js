import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import hcmut from "../../assets/image/hcmut.png";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    navigate(`/searchpage?query=${searchQuery}`);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Navbar bg="#ffffff" variant="light" expand="lg" className="border-bottom">
      <Navbar.Brand href="#home">
        <div className="d-inline-block ms-4 me-2">
          <img
            alt="img"
            src={hcmut}
            //className="d-inline-block"
          />
        </div>
        <span className="d-inline-block align-bottom">
          <span
            style={{
              color: "#032B91",
              fontSize: 40,
              fontFamily: "Train One",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            BK
          </span>
          <span
            style={{
              color: "#1488DB",
              fontSize: 40,
              fontFamily: "Train One",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            LIB
          </span>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline style={{ width: "65%" }} onSubmit={handleSearch}>
          <Row style={{ width: "100%" }}>
            <Col
              xs="auto"
              style={{
                width: "90%",
                paddingRight: "0",
                color: "#566976",
                fontSize: 16.26,
                fontFamily: "Work Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              <Form.Control
                type="text"
                placeholder="Tìm kiếm"
                className=" mr-sm-2 rounded-0"
                onChange={handleSearchQueryChange}
              />
            </Col>
            <Col xs="auto" style={{ paddingLeft: "0" }}>
              <Button
                type="submit"
                className="rounded-0"
                style={{ backgroundColor: "#31AAB7" }}
              >
                <BsSearch />
              </Button>
            </Col>
          </Row>
        </Form>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#home" className="ms-2 me-2">
              <span
                style={{
                  color: "#324552",
                  fontSize: 16.26,
                  fontFamily: "Work Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                <BsBell />
                Thông báo
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#features" className="ms-2 me-2">
              <span
                style={{
                  color: "#324552",
                  fontSize: 16.26,
                  fontFamily: "Work Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Đề xuất
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="light"
              className="border-success ms-2 me-4"
              style={{ backgroundColor: "white", color: "#21717A" }}
            >
              <Link to="/selectmember">
                <span
                  style={{
                    textAlign: "center",
                    color: "#21717A",
                    fontSize: 16.26,
                    fontFamily: "Work Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Đăng nhập
                </span>
              </Link>
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="light"
              className="border-success ms-2 me-4"
              style={{ backgroundColor: "white", color: "#21717A" }}
            >
              <Link to="/register">
                <span
                  style={{
                    textAlign: "center",
                    color: "#21717A",
                    fontSize: 16.26,
                    fontFamily: "Work Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Đăng kí
                </span>
              </Link>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
