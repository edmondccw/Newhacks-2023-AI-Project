import "../styles/Quiz.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import * as matcher from "./constants/matcher.js";
import { useState } from "react";

const QuizQuestionPage = () => {
  // State and functions can be added as needed

  const [submitted, setSubmitted] = useState(true); // Changed to false to start without submission
  const [question, setQuestion] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");
  const [user_answer, setUser_answer] = useState("");

  const handleTextareaChange = (e) => {
    // Update the state with the current textarea value
    setUser_answer(e.target.value);
  };

  const handleSubmit = () => {
    // Prevent default form submission behavior
    // e.preventDefault();
    if (user_answer === "") {
      alert("Please write your answer");
      return;
    }

    try {
      console.log("user_answer=" + user_answer);
      return fetch(matcher.EVALUATE_ANSWER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
          correct_answer: correct_answer,
          user_answer: user_answer,
        }),
      }).then((response) => response.json());
    } catch (error) {
      // Handle error - show message to the user
    }
  };

  return (
    <Container fluid className="quiz-question-page">
      {/* Header Section */}
      <Row className="dashboard-header">
        <Col md={6}>
          <h2>AI Mentor</h2>
        </Col>
        <Col md={6} className="text-md-end d-flex justify-content-end">
          <Button variant="primary" href="/dashboard" className="me-2">
            Dashboard
          </Button>
          <Button variant="primary" href="/">
            Log Out
          </Button>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row className="g-3 main-content">
        <Col md={8}>
          {/* Left Column: Question Prompt */}
          <Card className="left">
            {" "}
            {/* Changed the class to lowercase */}
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
              <textarea
                value={user_answer} // Bind the value to the state variable
                onChange={handleTextareaChange} // Call the function on change
                className="code-editor"
                defaultValue="Type your code here..."
              ></textarea>
              {/* Moved the submit button here for better workflow */}
              <Button
                onClick={() => handleSubmit()}
                variant="primary"
                type="submit"
                href="/answer"
                className="mt-3"
              >
                Submit
              </Button>{" "}
              {/* Added mt-3 for spacing */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Removed the old Submit Section, now integrated with the Code Editor */}
    </Container>
  );
};

export default QuizQuestionPage;
