import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const QuizPage = () => {
  const [submitted, setSubmitted] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4">
        <Col>
          <h2>Quiz / Question Code</h2>
        </Col>
        <Col className="text-end">
          <a href="/dashboard">Dashboard</a> | <a href="/logout">Log Out</a>
        </Col>
      </Row>

      {/* Main Content Area */}
      <Row className="g-3">
        <Col md={8}>
          {/* Left Column: Question Prompt */}
          <Card>
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
          <Card>
            <Card.Body>
              <Card.Title>Code Editor</Card.Title>
              <textarea className="code-editor" style={{ width: '100%', height: '250px' }} defaultValue="Type your code here..."></textarea>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer: Submit Button */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary">Submit</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
