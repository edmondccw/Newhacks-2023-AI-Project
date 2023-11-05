import React, { useState } from 'react';
import '../styles/Quiz.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const QuizPage = () => {
  const [submitted, setSubmitted] = useState(true); // Changed to false to start without submission
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <Container fluid className="quiz-page">
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4 dashboard-header">
        <Col md={6}>
          <h2>AI Mentor</h2>
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
              <Card.Title>Question Code + Question Title</Card.Title>
              <Card.Text>
                {/* The actual question prompt goes here */}
                Question Prompt...
              </Card.Text>
              {submitted && (
                <div>
                  {showAnswer ? (
                    <Card.Text>
                      {/* The actual answer goes here */}
                      Answer to the question...
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
              <Button variant="primary" className="mt-3">Submit</Button> {/* Changed href to onClick */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
