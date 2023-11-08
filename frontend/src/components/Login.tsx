import "../styles/Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import * as matcher from "./constants/matcher.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigateTo = useNavigate();

  const handleP = (e) => {
    setPassword(e.target.value);
  };

  const handleU = (e) => {
    setUsername(e.target.value);
  };
  const handleLogin = //async (event: any)
    () => {
      // event.preventDefault(); // Prevent default form submission behavior
      try {
        return fetch(matcher.LOGIN_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        })
          .then((response) => response.json())
          .then(function (data) {
            console.log(data["message"]);
            if (data["message"] === "Login successful") {
              navigateTo("/dashboard");
            } else {
              alert(data["error"]);
            }
          });
      } catch (error) {}
    };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <MDBInput
                value={username}
                onChange={handleU}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="username"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                value={password}
                onChange={handleP}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                onClick={() => handleLogin()}
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
              >
                Login
              </MDBBtn>
              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="/register" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
