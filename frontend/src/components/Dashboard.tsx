import { Container, Row, Col, Card, Button, ProgressBar, ListGroup, Badge, Modal, Form } from 'react-bootstrap';


const Dashboard = () => {
    
  return (
    <Container fluid>
      {/* Dashboard Header */}
      <Row className="border-bottom py-3 mb-4">
        <Col md={6}>
          <h2>Student Dashboard</h2>
        </Col>
        <Col md={6} className="text-md-end">
          <Button variant="primary" href='/QuizList'>Start Quiz!</Button>
        </Col>
        {/* <Col md={6} className="text-md-end">
          <Button variant="primary" href='/logout'>Log Out</Button>
        </Col> */}
      </Row>

      {/* Dashboard Widgets */}
      <Row className="g-3">
        {/* Progress Tracker Widget */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Progress Tracker</Card.Title>
              <Card.Text>
                Keep track of your tasks and manage your time effectively.
              </Card.Text>
              <ProgressBar now={75} label={`${75}%`} />
              <Button variant="outline-secondary" size="sm" className="mt-3">View Details</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Activity Widget */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Activity</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>C1: Completed Module 1</ListGroup.Item>
                <ListGroup.Item>C2: Attempted Quiz 2</ListGroup.Item>
                <ListGroup.Item>C3: Started Module 3</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Messages Widget */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Messages</Card.Title>
              <ListGroup>
                <ListGroup.Item action>New message from Mentor</ListGroup.Item>
                <ListGroup.Item action>Reminder: Weekly Check-in</ListGroup.Item>
                <ListGroup.Item action>Community Event Invite</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="mt-4">
        <Col md={8}>
          {/* Learning Progress Chart */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Learning Progress</Card.Title>
              {/* Placeholder for Chart */}
              <div id="chart" style={{ height: '300px' }}>
                {/* Chart component goes here */}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          {/* Notifications Panel */}
          <Card className="mb-4">
            <Card.Header>Notifications</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>System Update Available</ListGroup.Item>
              <ListGroup.Item>New Course Material Released</ListGroup.Item>
              <ListGroup.Item>Maintenance Scheduled</ListGroup.Item>
            </ListGroup>
          </Card>

          {/* Team Communication Panel */}
          <Card className="mb-4">
            <Card.Header>Team Communication</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Next Meeting: Monday 9 AM</ListGroup.Item>
              <ListGroup.Item>Location: Virtual Zoom Room</ListGroup.Item>
              <ListGroup.Item>Edmond C shared a new resource</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
