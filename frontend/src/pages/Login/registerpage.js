import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function RegisterPage({ handleTabChange }) {
  const [passwordMatch, setPasswordMatch] = useState(true);


// ... (your existing imports and code)

const handleRegisterSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  // Check if passwords match on the client side
  if (password !== confirmPassword) {
    setPasswordMatch(false);
    return;
  }

  const userData = {
    name,
    email,
    password,
  };

  try {
    // Make the API request
    const response = await axios.post("http://localhost:3001/reader/signup", userData);

    // Check the response status or data for success
    if (response.status === 201) {
      // Assuming 201 Created is the appropriate status for successful registration
      // Registration successful
      setPasswordMatch(true);
      // Navigate to login page after successful registration
      handleTabChange("login");
    }
  } catch (error) {
    // Handle error (e.g., display an error message)
    console.error("Registration failed:", error.response.data);
  }
};

// ... (rest of your component code)

  // const handleRegisterSubmit = (event) => {
  //   event.preventDefault();
  //   // Your registration logic here
  //   // Check if passwords match
  //   const password = event.target.elements.password.value;
  //   const confirmPassword = event.target.elements.confirmPassword.value;
  //   if (password !== confirmPassword) {
  //     setPasswordMatch(false);
  //     return;
  //   }

  //   // Passwords match, proceed with registration
  //   setPasswordMatch(true);
  //   // Navigate to login page after successful registration
  //   handleTabChange("login");
  // };

  return (
    <>
    <div className="d-flex align-items-center justify-content-center">
        <h1 style={{ fontSize: "2em", color: "#032B91" }}>Đăng ký</h1>
    </div>
    <Form onSubmit={handleRegisterSubmit}>
      <Form.Group className="mb-2">
        <Form.Label style={{fontFamily: 'Work Sans'}}>Họ và tên</Form.Label>
        <Form.Control type="text" placeholder="Nhập họ và tên" name="name" style={{fontFamily: 'Work Sans'}} required />
        </Form.Group>

        <Form.Group className="mb-2">
        <Form.Label style={{fontFamily: 'Work Sans'}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Nhập email" name="email" style={{fontFamily: 'Work Sans'}} required />
        </Form.Group>

        <Form.Group className="mb-2">
        <Form.Label style={{fontFamily: 'Work Sans'}}>Mật khẩu</Form.Label>
        <Form.Control type="password" placeholder="Nhập mật khẩu..." name="password" style={{fontFamily: 'Work Sans'}} required />
        </Form.Group>

        <Form.Group className="mb-4">
        <Form.Label style={{fontFamily: 'Work Sans'}}>Xác nhận mật khẩu</Form.Label>
        <Form.Control type="password" placeholder="Xác nhận mật khẩu..." name="confirmPassword" style={{fontFamily: 'Work Sans'}} required />
        </Form.Group>

        {!passwordMatch && (
        <div className="text-danger mb-2" style={{fontFamily: 'Work Sans'}}>
            Mật khẩu và xác nhận mật khẩu không khớp.
        </div>
        )}

        {/* Sign up button */}
        <Button type="submit" variant="primary" className="mb-2 w-100" style={{ backgroundColor: '#31AAB7', color: '#FFFFFF', fontFamily: 'Work Sans'}}>
        Đăng ký
        </Button>
        
        <div className="f-flex justify-content-center position-relative">
        <hr/>
        <div className="text-dark position-absolute ps-2 pe-2" style={{top: '42%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#eaeff2',  fontFamily: 'Work Sans'}}>Hoặc</div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3">
                <span style={{ opacity: '0.5' }}>Bạn đã có tài khoản?</span> &nbsp;
                <Link to='/user/login'>
                  <span onClick={() => handleTabChange("login")} style={{ color: '#31AAB7', textDecoration: 'underline', cursor: 'pointer' }}> Đăng nhập</span>
                </Link>
            </div>
    </Form>
    </>
  );
}

export default RegisterPage;