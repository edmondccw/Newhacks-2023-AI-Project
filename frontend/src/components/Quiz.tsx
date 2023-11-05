import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const QuizQuestionPage = () => {
  // You can add state and functions to handle form submission, code editing, etc.

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

      {/* Main Content Section */}
      <Row className="g-3">
        <Col md={8}>
          {/* Left Column: Question Prompt */}
          <Card>
            <Card.Body>
              <Card.Title>Question code + Question title</Card.Title>
              <Card.Text>
                Question Prompt...
                {/* The actual question prompt goes here */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          {/* Right Column: Code Editor */}
          <Card>
            <Card.Body>
              <Card.Title>Code Editor</Card.Title>
              <textarea className="code-editor" defaultValue="Type your code here..."></textarea>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Submit Section */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" type="submit" href='/answer'>Submit</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizQuestionPage;
