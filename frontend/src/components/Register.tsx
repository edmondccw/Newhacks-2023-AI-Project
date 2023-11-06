import '../styles/Login.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  // MDBIcon
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';
import * as matcher from "./matcher.js";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleE = (e) => {
    setEmail(e.target.value);
  };
  const handleU = (e) => {
    setUsername(e.target.value);
  };
  
  const handleP = (e) => {
    setPassword(e.target.value);
  };
  const handleCP = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = //async (event: any) 
  () => {
    // event.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      return fetch(matcher.REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password1: password,
          password2: confirmPassword
        }),
      })
      .then((response) => response.json());
    } catch (error) {
      
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter your details to create an account!</p>
              <MDBInput 
              value={email} onChange={handleE}
              wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlEmail' type='email' size="lg"/>
              <MDBInput 
              value={username} onChange={handleU}
              wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlUsername' type='text' size="lg" minLength="3"/>
              <MDBInput 
              value={password} onChange={handleP}
              wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlPassword1' type='password' size="lg" minLength="6"/>
              <MDBInput 
              value={confirmPassword} onChange={handleCP}
              wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Confirm Password' id='formControlPassword2' type='password' size="lg" minLength="6"/>
              <MDBBtn onClick={()=>handleRegister()}outline className='mx-2 px-5' color='white' size='lg' href='/'>
                Register
              </MDBBtn>
              
              <div>
                <p className="mb-0">Already have an account? <Link to="/" className="text-white-50 fw-bold">Login</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}



export default Register;
