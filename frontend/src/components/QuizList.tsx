import { Container, Row, Col, Button, Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';
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

  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4 align-items-center">
        <Col md={6}>
          <h2>Quiz Application</h2>
        </Col>
        {/* <Col md={6} className="text-md-end">
          <Button variant="secondary" onClick={handleDashboard} className="me-2">Dashboard</Button>
          <Button variant="secondary" onClick={handleLogout}>Log Out</Button>
        </Col> */}
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
          <h4>Questions</h4>
          <ListGroup>
            {/* Questions will be dynamically inserted here based on the selections above */}
            {/* This is a placeholder for empty state */}
            <ListGroup.Item>No questions attempted yet. Select a language and topic to start.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
