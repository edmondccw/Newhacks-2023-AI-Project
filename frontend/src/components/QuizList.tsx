import "../styles/QuizList.css";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  ListGroup,
} from "react-bootstrap";
import * as matcher from "./constants/matcher.js";
import { useState } from "react";

const QuizPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [question_title, setQuestion_title] = useState("");
  const [question_prompt, setQuestion_prompt] = useState("");
  const [question_code, setQuestion_code] = useState("");
  const [answer_code, setAnswer_code] = useState("");
  const [answer_explanation, setAnswer_explanation] = useState("");
  const [user_id, setUser_id] = useState("");

  const handleLanguageSelect = (e) => {
    setSelectedLanguage(e);
    console.log(`Selected language: ${e}`);
    if (selectedTopic === undefined && selectedLanguage === undefined) {
      alert("Please choose topic and language");
    } else {
      try {
        let errorMsg = "";
        return fetch(matcher.GEN_QUESTION, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: selectedLanguage,
            topic: selectedTopic,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              errorMsg = "Network response was not ok";
              alert(errorMsg);
              throw new Error(errorMsg);
            }
            if (
              !response.headers
                .get("content-type")
                ?.includes("application/json")
            ) {
              errorMsg = "Response is not in JSON format";
              alert(errorMsg);
              throw new Error(errorMsg);
            }
            return response.json();
          })
          .then((data) => {
            // Handle the JSON data
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
            // Handle the error appropriately
          });
      } catch (error) {}
    }
  };

  const handleTopicSelect = (e) => {
    setSelectedTopic(e);
    console.log(`Selected topic: ${e}`);
    if (selectedTopic === undefined && selectedLanguage === undefined) {
      alert("Please choose topic and language");
    } else {
      try {
        return fetch(matcher.GEN_QUESTION, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: selectedLanguage,
            topic: selectedTopic,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            if (
              !response.headers
                .get("content-type")
                ?.includes("application/json")
            ) {
              throw new Error("Response is not in JSON format");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setQuestion_title(data["question_title"]);
            setQuestion_prompt(data["question_prompt"]);
            setQuestion_code(data["question_code"]);
            setAnswer_code(data["answer_code"]);
            setAnswer_explanation(data["answer_explanation"]);
            setUser_id(data["user_id"]);
          })
          .catch((error) => {
            console.error("Error:", error);
            // Handle the error appropriately
          });
      } catch (error) {}
    }
  };

  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="border-bottom py-3 mb-4 dashboard-header">
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

      {/* Main Content Area */}
      <Row className="mb-4">
        <Col md={6}>
          {/* Program Language Dropdown */}
          <DropdownButton
            id="dropdown-language-button"
            title="Select Language"
            onSelect={handleLanguageSelect}
          >
            <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
            <Dropdown.Item eventKey="Python">Python</Dropdown.Item>
            <Dropdown.Item eventKey="Java">Java</Dropdown.Item>
            {/* More languages can be added here */}
          </DropdownButton>
        </Col>
        <Col md={6}>
          {/* Topic Dropdown */}
          <DropdownButton
            id="dropdown-topic-button"
            title="Select Topic"
            onSelect={handleTopicSelect}
          >
            <Dropdown.Item eventKey="Variables">Variables</Dropdown.Item>
            <Dropdown.Item eventKey="list">List</Dropdown.Item>
            <Dropdown.Item eventKey="Objects">Objects</Dropdown.Item>
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
            <ListGroup.Item>
              No questions attempted yet. Select a language and topic to start.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
