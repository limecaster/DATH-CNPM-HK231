import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import login1 from "../../assets/image/login1.png";
import login2 from "../../assets/image/login2.png";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function LoginPage(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    // const name = formData.get("name");
    try {
      let response;
      if (props.title === "user") {
        // Reader login
        response = await fetch("http://localhost:3001/reader/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
      } else if (props.title === "admin") {
        // Manager login
        response = await fetch("http://localhost:3001/manager/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
      }

      if (response.ok) {
        // Assuming the server returns a user object with a token property
        const user = await response.json();
        // console.log(user);
        const token = user.token;

        // Store the token in localStorage or a more secure storage option
        localStorage.setItem("token", token);

        // Store email and password temporarily in localStorage
        if(props.title ==="user") {
          localStorage.setItem("userEmail", email);
        // localStorage.setItem("tempName", name);
        }

        if(props.title ==="admin") {
          localStorage.setItem("adminEmail", email);
        }

        if (props.title === "user") {
          // Fetch manager information using the obtained token
          const userInfoResponse = await fetch(
            "http://localhost:3001/reader/get",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the request header
                "Content-Type": "application/json",
              },
            }
          );

          if (userInfoResponse.ok) {
            const userInfo = await userInfoResponse.json();
            console.log("User Information:", userInfo);
            localStorage.setItem("username", userInfo.name);
            localStorage.setItem("role", userInfo.accountType);
            localStorage.setItem("userID", userInfo.readerId);
            // Additional handling of manager information can be done here
          } else {
            // Handle error in fetching manager information
            console.error("Failed to fetch user information");
          }
        }

        if (props.title === "admin") {
          // Redirect to admin page
          const managerInfoResponse = await fetch(
            "http://localhost:3001/manager/get",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the request header
                "Content-Type": "application/json",
              },
            }
          );

          if (managerInfoResponse.ok) {
            const managerInfo = await managerInfoResponse.json();
            console.log("Manager Information:", managerInfo);
            localStorage.setItem("adminname", managerInfo.name);
            localStorage.setItem("role", managerInfo.accountType);

            // Additional handling of manager information can be done here
          } else {
            // Handle error in fetching manager information
            console.error("Failed to fetch manager information");
          }
          navigate("/admin/books");
        } else {
          // Redirect to homepage
          navigate("/");
        }
      } else {
        // Handle login failure (e.g., display an error message)
        setErrorMessage("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      // Handle error (e.g., display an error message)
      setErrorMessage("An error occurred while logging in. Please try again.");
      console.error("Login failed:", error.message);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h1 style={{ fontSize: "2em", color: "#032B91" }}>Đăng nhập</h1>
      </div>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontFamily: "Work Sans" }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            name="email"
            style={{ fontFamily: "Work Sans" }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="d-flex justify-content-between">
            <span style={{ fontFamily: "Work Sans" }}>Mật khẩu</span>
            <span>
              <a
                href="!#"
                style={{ color: "#7D92A1", fontFamily: "Work Sans" }}
              >
                Quên mật khẩu?
              </a>
            </span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu..."
            name="password"
            style={{ fontFamily: "Work Sans" }}
            required
          />
        </Form.Group>

        {/* Sign in button */}
        <Button
          type="submit"
          variant="primary"
          className="mb-2 w-100"
          style={{
            backgroundColor: "#31AAB7",
            color: "#FFFFFF",
            fontFamily: "Work Sans",
          }}
        >
          Đăng nhập
        </Button>

        {/* Display error message if login fails */}
        {errorMessage && (
          <div className="text-danger mb-2" style={{ fontFamily: "Work Sans" }}>
            {errorMessage}
          </div>
        )}

        <div className="f-flex justify-content-center position-relative">
          <hr />
          <div
            className="text-dark position-absolute ps-2 pe-2"
            style={{
              top: "42%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#eaeff2",
              fontFamily: "Work Sans",
            }}
          >
            Hoặc
          </div>
        </div>

        <Button
          variant="primary"
          className="w-100 mb-2"
          style={{ backgroundColor: "#FFFFFF", color: "#324552" }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="img-fluid"
              src={login1}
              alt="img"
              style={{
                float: "left",
                paddingRight: "5px",
                display: "block",
                alignItems: "center",
                fontFamily: "Work Sans",
              }}
            ></img>
            Login with Google
          </div>
        </Button>

        <Button
          variant="primary"
          className="w-100 mb-2"
          style={{ backgroundColor: "#FFFFFF", color: "#324552" }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="img-fluid"
              src={login2}
              alt="img"
              style={{
                float: "left",
                paddingRight: "5px",
                display: "block",
                alignItems: "center",
                fontFamily: "Work Sans",
              }}
            ></img>
            Login with Mobile number
          </div>
        </Button>

        {props.title === "user" && (
          <div className="d-flex align-items-center justify-content-center mt-3">
            <span style={{ opacity: "0.5" }}>Bạn chưa có tài khoản?</span>{" "}
            &nbsp;
            <Link to="/register">
              <span
                onClick={() => props.handleTabChange("login")}
                style={{
                  color: "#31AAB7",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {" "}
                Đăng ký
              </span>
            </Link>
          </div>
        )}
      </Form>
    </>
  );
}

export default LoginPage;

// import React from "react";
// import { Form, Button } from "react-bootstrap";
// import login1 from "../../assets/image/login1.png";
// import login2 from "../../assets/image/login2.png";

// function LoginPage(props) {
//   return (
//     <>
//     <div className="d-flex align-items-center justify-content-center">
//         <h1 style={{ fontSize: "2em", color: "#032B91" }}>Đăng nhập</h1>
//     </div>
//     <Form>
//       <Form.Group className="mb-3">
//             <Form.Label style={{fontFamily: 'Work Sans'}}>Email</Form.Label>
//             <Form.Control type="email" placeholder="Nhập email"  style={{fontFamily: 'Work Sans'}} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//             <Form.Label className="d-flex justify-content-between">
//                 <span style={{fontFamily: 'Work Sans'}}>Mật khẩu</span>
//                 <span>
//                 <a href="!#" style={{ color: '#7D92A1', fontFamily: 'Work Sans'}}>Quên mật khẩu?</a>
//                 </span>
//             </Form.Label>
//             <Form.Control type="password" placeholder="Nhập mật khẩu..."  style={{fontFamily: 'Work Sans'}} required />
//             </Form.Group>

//             {/* Sign in button */}
//             <Button type="submit" variant="primary" className="mb-2 w-100" style={{ backgroundColor: '#31AAB7', color: '#FFFFFF',  fontFamily: 'Work Sans'}}>
//             Đăng nhập
//             </Button>

//             <div className="f-flex justify-content-center position-relative">
//             <hr/>
//             <div className="text-dark position-absolute ps-2 pe-2" style={{top: '42%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#eaeff2',  fontFamily: 'Work Sans'}}>Hoặc</div>
//             </div>

//             <Button variant="primary" className="w-100 mb-2" style={{ backgroundColor: '#FFFFFF', color: '#324552' }}>
//             <div className="d-flex align-items-center justify-content-center">
//                 <img className="img-fluid" src={login1} alt="img" style={{ float: 'left', paddingRight: '5px', display: 'block', alignItems: 'center',  fontFamily: 'Work Sans'}}></img>
//                 Login with Google
//             </div>
//             </Button>

//             <Button variant="primary" className="w-100 mb-2" style={{ backgroundColor: '#FFFFFF', color: '#324552' }}>
//             <div className="d-flex align-items-center justify-content-center">
//                 <img className="img-fluid" src={login2} alt="img" style={{ float: 'left', paddingRight: '5px', display: 'block', alignItems: 'center',  fontFamily: 'Work Sans' }}></img>
//                 Login with Mobile number
//             </div>
//             </Button>

//             {
//                 props.title === 'user' &&
//                 <div className="d-flex align-items-center justify-content-center mt-3">
//                     <span style={{ opacity: '0.5' }}>Bạn chưa có tài khoản?</span> &nbsp;
//                     <span onClick={() => props.handleTabChange("login")} style={{ color: '#31AAB7', textDecoration: 'underline', cursor: 'pointer' }}> Đăng ký</span>
//                 </div>
//             }

//     </Form>
//     </>
//   );
// }

// export default LoginPage;
