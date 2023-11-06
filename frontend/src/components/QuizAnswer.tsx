import React, { useState } from 'react';
import '../styles/Quiz.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import * as matcher from "./matcher.js";

const QuizPage = () => {
  const [submitted, setSubmitted] = useState(true); // Changed to false to start without submission
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //
  const handleRegister = //async (event: any) 
  () => {
    // event.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      return fetch(matcher.GEN_QUESTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: "python",
          topic: "loop"
        }),
      })
      .then((response) => response.json());
    } catch (error) {
      // Handle error - show message to the user
    }
  };

  return (
    <Container fluid className="quiz-page">
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4 dashboard-header">
        <Col md={6}>
          <h2>CodeGenius</h2>
        </Col>
        <Col md={6} className="text-md-end d-flex justify-content-end">
          <Button variant="primary" href='/dashboard' className="me-2 dashboard-btn">Dashboard</Button>
          <Button variant="primary" href='/' className="logout-btn">Log Out</Button>
        </Col>
      </Row>

      {/* Main Content Area */}
      <Row className="g-3">
        <Col md={8}>
          {/* Left Column: Question Prompt */}
          <Card className="left">
            <Card.Body>
              <Card.Title>Q1 Python Array</Card.Title>
              <Card.Text>
                {/* The actual question prompt goes here */}
                Write a Python program to create an array of 5 integers and display the array items. Access individual elements through indexes.
                Sample Output:
                1
                3
                5
                7
                9
                Access first three items individually
                1
                3
                5
              </Card.Text>
              {submitted && (
                <div>
                  {showAnswer ? (
                    <Card.Text>
                      {/* The actual answer goes here */}
                    Sample Solution:

                    from array import *
                    array_num = array('i', [1,3,5,7,9])
                    for i in array_num:
                    print(i)
                    print("Access first three items individually")
                    print(array_num[0])
                    print(array_num[1])
                    print(array_num[2])
                    </Card.Text>
                  ) : (
                    <Button onClick={handleShowAnswer}>Display Answer</Button>
                  )}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          {/* Right Column: Code Editor */}
          <Card className="right">
            <Card.Body>
              <Card.Title>Code Editor</Card.Title>
              <textarea className="code-editor" defaultValue="Type your code here..."></textarea>
              <Button  onClick={()=>handleRegister()} variant="primary" className="mt-3">Submit</Button> {/* Changed href to onClick */}
              <Card.Title className="wrongMsg">Incorrect Answer!</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
