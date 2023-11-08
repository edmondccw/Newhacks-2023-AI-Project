import React, { useState } from "react";
import "../styles/Quiz.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import * as matcher from "./constants/matcher.js";
const QuizPage = () => {
  const [submitted, setSubmitted] = useState(true); // Changed to false to start without submission
  const [showAnswer, setShowAnswer] = useState(false);
  const [question, setQuestion] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");
  const [user_answer, setUser_answer] = useState("");

  const handleTextareaChange = (e) => {
    // Update the state with the current textarea value
    setUser_answer(e.target.value);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleSubmit = //async (event: any)
    () => {
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
    <Container fluid className="quiz-page">
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4 dashboard-header">
        <Col md={6}>
          <h2>AI Mentor</h2>
        </Col>
        <Col md={6} className="text-md-end d-flex justify-content-end">
          <Button
            variant="primary"
            href="/dashboard"
            className="me-2 dashboard-btn"
          >
            Dashboard
          </Button>
          <Button variant="primary" href="/" className="logout-btn">
            Log Out
          </Button>
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
              <textarea
                value={user_answer} // Bind the value to the state variable
                onChange={handleTextareaChange} // Call the function on change
                className="code-editor"
                defaultValue="Type your code here..."
              ></textarea>
              <Button
                onClick={() => handleSubmit()}
                variant="primary"
                className="mt-3"
              >
                Submit
              </Button>{" "}
              {/* Changed href to onClick */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
