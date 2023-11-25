import React from "react";
import { Form, Button } from "react-bootstrap";
import login1 from "../../assets/image/login1.png";
import login2 from "../../assets/image/login2.png";

function LoginPage(props) {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center">
        <h1 style={{ fontSize: "2em", color: "#032B91" }}>Đăng nhập</h1>
    </div>
    <Form>
      <Form.Group className="mb-3">
            <Form.Label style={{fontFamily: 'Work Sans'}}>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email"  style={{fontFamily: 'Work Sans'}} required />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label className="d-flex justify-content-between">
                <span style={{fontFamily: 'Work Sans'}}>Mật khẩu</span>
                <span>
                <a href="!#" style={{ color: '#7D92A1', fontFamily: 'Work Sans'}}>Quên mật khẩu?</a>
                </span>
            </Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu..."  style={{fontFamily: 'Work Sans'}} required />
            </Form.Group>

            {/* Sign in button */}
            <Button type="submit" variant="primary" className="mb-2 w-100" style={{ backgroundColor: '#31AAB7', color: '#FFFFFF',  fontFamily: 'Work Sans'}}>
            Đăng nhập
            </Button>

            <div className="f-flex justify-content-center position-relative">
            <hr/>
            <div className="text-dark position-absolute ps-2 pe-2" style={{top: '42%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#eaeff2',  fontFamily: 'Work Sans'}}>Hoặc</div>
            </div>
            
            <Button variant="primary" className="w-100 mb-2" style={{ backgroundColor: '#FFFFFF', color: '#324552' }}>
            <div className="d-flex align-items-center justify-content-center">
                <img className="img-fluid" src={login1} alt="img" style={{ float: 'left', paddingRight: '5px', display: 'block', alignItems: 'center',  fontFamily: 'Work Sans'}}></img>
                Login with Google
            </div>
            </Button>

            <Button variant="primary" className="w-100 mb-2" style={{ backgroundColor: '#FFFFFF', color: '#324552' }}>
            <div className="d-flex align-items-center justify-content-center">
                <img className="img-fluid" src={login2} alt="img" style={{ float: 'left', paddingRight: '5px', display: 'block', alignItems: 'center',  fontFamily: 'Work Sans' }}></img>
                Login with Mobile number
            </div>
            </Button>

            
            {
                props.title === 'user' &&
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <span style={{ opacity: '0.5' }}>Bạn chưa có tài khoản?</span> &nbsp;
                    <span onClick={() => props.handleTabChange("login")} style={{ color: '#31AAB7', textDecoration: 'underline', cursor: 'pointer' }}> Đăng ký</span>
                </div>
            }
            
    </Form>
    </>
  );
}

export default LoginPage;