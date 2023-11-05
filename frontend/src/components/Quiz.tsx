import '../styles/Quiz.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const QuizQuestionPage = () => {
  // State and functions can be added as needed

  return (
    <Container fluid className="quiz-question-page">
      {/* Header Section */}
      <Row className="dashboard-header">
        <Col md={6}>
          <h2>AI Mentor</h2>
        </Col>
        <Col md={6} className="text-md-end d-flex justify-content-end">
          <Button variant="primary" href='/dashboard' className="me-2">Dashboard</Button>
          <Button variant="primary" href='/'>Log Out</Button>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row className="g-3 main-content">
        <Col md={8}>
          {/* Left Column: Question Prompt */}
          <Card className="left"> {/* Changed the class to lowercase */}
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
          <Card className="right">
            <Card.Body>
              <Card.Title>Code Editor</Card.Title>
              <textarea className="code-editor" defaultValue="Type your code here..."></textarea>
              {/* Moved the submit button here for better workflow */}
              <Button variant="primary" type="submit" href='/answer' className="mt-3">Submit</Button> {/* Added mt-3 for spacing */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Removed the old Submit Section, now integrated with the Code Editor */}
    </Container>
  );
};

export default QuizQuestionPage;