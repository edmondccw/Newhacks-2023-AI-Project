import React, { useState, useEffect, ReactNode } from "react";
import "../styles/Quiz.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import * as matcher from "./constants/matcher.js";
export interface Props {
  id: string; // quizId
}

export async function PerformQuiz(id: string) {
  try {
    // TODO: GET ID FROM QUIZ.tsx
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    throw error; // Propagate the error
  }
}

const QuizPage = () => {
  const [submitted, setSubmitted] = useState(true); // Changed to false to start without submission
  const [showAnswer, setShowAnswer] = useState(false);
  const [question, setQuestion] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");
  const [user_answer, setUser_answer] = useState("");

  const [question_title, setQuestion_title] = useState("");
  const [question_prompt, setQuestion_prompt] = useState("");
  const [question_code, setQuestion_code] = useState("");
  const [answer_code, setAnswer_code] = useState("");
  const [answer_explanation, setAnswer_explanation] = useState("");

  useEffect(() => {
    // TODO retrieve the quizid from quizlist
    PerformQuiz("your-quiz-id")
      .then((data) => {
        const resData = {
          answer_code:
            'def count_vowels(s):\n        # initialize a variable to store the vowel count\n        vowel_count = 0\n        \n        # write a for loop to iterate over the characters in s\n        for char in s:\n            # check if the character is a vowel\n            if char in "aeiou":\n                # increment the vowel count by 1\n                vowel_count += 1\n        \n        # return the vowel count\n        return vowel_count',
          answer_explanation:
            '- The function count_vowels takes a string s as an input and returns the number of vowels in that string.\n- The variable vowel_count is initialized to 0 and will store the final vowel count.\n- The for loop iterates over each character in the string s using the syntax `for char in s:`.\n- Inside the loop, the if statement checks if the current character is a vowel by using the membership operator `in` and the string "aeiou" which contains all the vowels.\n- If the character is a vowel, the vowel count is incremented by 1 using the assignment operator `+=`.\n- After the loop ends, the vowel count is returned using the return statement.',
          question_code:
            "def count_vowels(s):\n        # initialize a variable to store the vowel count\n        vowel_count = 0\n        \n        # write a for loop to iterate over the characters in s\n        # TODO: complete the for loop\n        \n        # return the vowel count\n        return vowel_count",
          question_prompt:
            "Write a function that takes a string as an input and returns the number of vowels (a, e, i, o, u) in that string. You can assume that the input string is lowercase and does not contain any punctuation marks. Use a for loop to iterate over the characters in the string.\nquestion_code:\n\nPossible",
          question_title: "Counting the number of vowels in a string",
        };
        setQuestion_title(resData["question_title"]); //
        setQuestion_prompt(resData["question_prompt"]); //
        setQuestion_code(resData["question_code"]); //
        setAnswer_code(resData["answer_code"]); //
        setAnswer_explanation(resData["answer_explanation"]); //
      })
      .catch((error) => {
        // Handle errors from fetching data
        console.error("Error fetching quiz data:", error);
      });
  }, []); // Add dependencies if needed

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
        // TODO: POST TO matcher.EVALUATE_ANSWER
        setQuestion(question_code);
        setCorrect_answer(answer_code);
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
              <Card.Title>
                {/* Question Code */}
                Title: {question_title}
              </Card.Title>
              Description:
              <Card.Text>{question_prompt}</Card.Text>
              {submitted && (
                <div>
                  {showAnswer ? (
                    <Card.Text>
                      <h1>Answer</h1>
                      {answer_code}
                      <h1>Explain</h1>
                      {answer_explanation}
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
              <br></br>
              <Button
                onClick={() => handleSubmit()}
                variant="primary"
                className="mt-3"
              >
                Submit
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
