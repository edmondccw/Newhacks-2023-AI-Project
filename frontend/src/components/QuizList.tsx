import '../styles/QuizList.css';
import { Container, Row, Col, Button, Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';

import * as matcher from "./matcher.js";
import { useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
// import { useHistory } from 'react-router-dom';

const QuizPage = () => {
//   const history = useHistory();
//   const handleLogout = () => {
//     // Add your logout logic here
//     console.log('Logging out...'); // Placeholder for actual logout logic
//     // Redirect to login page or perform other logout actions
//   };

//   const handleDashboard = () => {
//     history.push('/dashboard'); // Redirect to dashboard
//   };

//   // Placeholder functions for dropdowns
//   const handleLanguageSelect = (eventKey) => {
//     console.log(`Selected programming language: ${eventKey}`);
//     // Logic to update questions based on selected language
//   };

//   const handleTopicSelect = (eventKey) => {
//     console.log(`Selected topic: ${eventKey}`);
//     // Logic to update questions based on selected topic
//   };

 const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //
  const handleRegister = 
  () => {
    // event.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      return fetch(matcher.GEN_QUESTION_LIST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password1: password,
          password2: password,
        }),
      })
      .then((response) => response.json());
    } catch (error) {
      // Handle error - show message to the user
    }
  };

  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4 dashboard-header">
        <Col md={6}>
          <h2>CodeGenius</h2>
        </Col>
        <Col md={6} className="text-md-end d-flex justify-content-end">
          <Button variant="primary" href='/dashboard' className="me-2">Dashboard</Button>
          <Button variant="primary" href='/'>Log Out</Button>
        </Col>
      </Row>

      {/* Main Content Area */}
      <Row className="mb-4">
        <Col md={6}>
          {/* Program Language Dropdown */}
          <DropdownButton id="dropdown-language-button" title="Select Language" >
          {/* onSelect={handleLanguageSelect} */}
            <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
            <Dropdown.Item eventKey="Python">Python</Dropdown.Item>
            <Dropdown.Item eventKey="Java">Java</Dropdown.Item>
            {/* More languages can be added here */}
          </DropdownButton>
        </Col>
        <Col md={6}>
          {/* Topic Dropdown */}
          <DropdownButton id="dropdown-topic-button" title="Select Topic" > 
          {/* onSelect={handleTopicSelect} */}
            <Dropdown.Item eventKey="Variables">Variables</Dropdown.Item>
            <Dropdown.Item eventKey="Functions">Functions</Dropdown.Item>
            <Dropdown.Item eventKey="Objects">Objects</Dropdown.Item>
            {/* More topics can be added here */}
          </DropdownButton>
        </Col>
      </Row>

      {/* Question List Section */}
      <Row>
        <Col>
          <h4 className="subtit">Questions</h4>
          <ListGroup>
            {/* Questions will be dynamically inserted here based on the selections above */}
            {/* This is a placeholder for empty state */}
            <ListGroup.Item>No questions attempted yet. Select a language and topic to start.</ListGroup.Item>
            <MDBBtn href="/quiz">New Question</MDBBtn>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
