import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="mt-4" style={{backgroundColor: '#F8FAFB'}}>
      <Container className='pt-4'>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4" style={{color: '#21717A', fontSize: 27.87, fontFamily: 'Work Sans', fontWeight: '700', wordWrap: 'break-word'}}>Tài khoản của tôi</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Đăng nhập/Đăng ký</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Chi tiết tài khoản</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Lịch sử mượn đọc</div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4" style={{color: '#21717A', fontSize: 27.87, fontFamily: 'Work Sans', fontWeight: '700', wordWrap: 'break-word'}}>Về library</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Giới thiệu về BKLib</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Chính sách bảo mật</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Điều khoản sử dụng</div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4" style={{color: '#21717A', fontSize: 27.87, fontFamily: 'Work Sans', fontWeight: '700', wordWrap: 'break-word'}}>Hỗ trợ</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Các câu hỏi thường gặp</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Liên hệ hỗ trợ</div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4" style={{color: '#21717A', fontSize: 27.87, fontFamily: 'Work Sans', fontWeight: '700', wordWrap: 'break-word'}}>Theo dõi</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Facebook</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Instagram</div>
            <div className="mb-4" style={{color: '#131313', fontSize: 18.58, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word'}}>Youtube</div>
          </Col>
        </Row>
      </Container>
      <footer className="mt-4 d-flex p-5 justify-content-evenly align-items-center position-relative" style={{ backgroundColor: '#324552' }}>

        <div style={{ position: 'absolute', left: '0', top: '85%', transform: 'rotate(-90deg)', transformOrigin: '0 0', color: 'white', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '300', wordWrap: 'break-word' }}>Copyright 2022</div>
        <div className='d-inline-block align-bottom'>
          <span style={{ color: '#032B91', fontSize: '2vw', fontFamily: 'Train One', fontWeight: '400', wordWrap: 'break-word' }}>BK</span>
          <span style={{ color: '#1488DB', fontSize: '2vw', fontFamily: 'Train One', fontWeight: '400', wordWrap: 'break-word' }}>LIB</span>
        </div>
        <div className='d-inline-block align-bottom'>
          <div style={{ width: '100%', height: '100%', color: 'white', fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word', fontSize: '1vw' }}><BsEnvelope /> vu.le132003@hcmut.edu.com</div>
        </div>
        <div className='d-inline-block align-bottom'>
          <div style={{ width: '100%', height: '100%', color: 'white', fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word', fontSize: '1vw' }}><BsTelephone /> 0935-680-614</div>
        </div>
        <div className='d-inline-block align-bottom'>
          <div style={{ width: '100%', height: '100%', color: 'white', fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word', fontSize: '1vw' }}><CiLocationOn /> KTX Khu A - ĐHQG HCM</div>
        </div>

      </footer>

      
    </footer>
  );
};

export default Footer;
