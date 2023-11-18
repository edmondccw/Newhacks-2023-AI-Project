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
import * as matcher from "./constants/matcher.ts";
import { useState } from "react";
import { PerformQuiz } from "./Quiz"; // Import the function

const QuizPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [testList, setTestList] = useState([]);

  const handleLanguageSelect = async (e) => {
    // e.preventDefault();
    setSelectedLanguage(e);
    console.log(`Selected language: ${e}`);
    if (selectedTopic === undefined && selectedLanguage === undefined) {
      alert("Please choose topic and language");
    } else {
      try {
        // TODO: POST TO GET QUIZLET by matcher.GEN_QUESTION
        testQuizList();
      } catch (error) {}
    }
  };

  const handleTopicSelect = async (e) => {
    // e.preventDefault();
    setSelectedTopic(e);
    console.log(`Selected topic: ${e}`);
    if (selectedTopic === undefined && selectedLanguage === undefined) {
      alert("Please choose topic and language");
    } else {
      try {
        // TODO: POST TO GET QUIZLET by matcher.GEN_QUESTION
        testQuizList();
      } catch (error) {}
    }
  };

  const handleQuiz = (id: string) => {
    console.log(id);
    PerformQuiz(id);
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
            {/* TODO: click to QUIZ */}
            {testList.map((t) => (
              <ListGroup.Item key={t.id} onClick={() => handleQuiz(t.id)}>
                {t.question_title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );

  function testQuizList() {
    const resDataList = [
      {
        answer_code:
          '# input string\n    s = input("Enter a string: ")\n\n    # initialize a variable to store the vowel count\n    vowel_count = 0\n\n    # write a for loop to iterate over the characters of s\n    for c in s:\n\n        # write a condition to check if the character is a vowel\n        if c in "aeiou":\n\n            # increment the vowel count by 1\n            vowel_count += 1\n\n    # print the vowel count\n    print("The number of vowels in", s, "is", vowel_count)',
        answer_explanation:
          'The answer code works as follows:\n\n- The first line asks the user to enter a string and assigns it to the variable `s`.\n- The second line initializes a variable `vowel_count` to store the number of vowels in the string. It is initially set to 0.\n- The third line starts a for loop that iterates over each character `c` in the string `s`.\n- The fourth line checks if the character `c` is a vowel by using the `in` operator. The string `"aeiou"` contains all the vowels in lowercase, so if `c` is one of them, the condition is true.\n- The fifth line increments the `vowel_count` by 1 if the condition is true. This can be done by using the `+=` operator, which is equivalent to `vowel_count = vowel_count + 1`.\n- The sixth line ends the for loop after all the characters in `s` are processed.\n- The seventh line prints the final value of `vowel_count` along with the input string `s`.',
        id: 1,
        question_code:
          '# input string\n    s = input("Enter a string: ")\n\n    # initialize a variable to store the vowel count\n    vowel_count = 0\n\n    # write a for loop to iterate over the characters of s\n\n        # write a condition to check if the character is a vowel\n\n            # increment the vowel count by 1\n\n    # print the vowel count\n    print("The number of vowels in", s, "is", vowel_count)',
        question_prompt:
          "Write a python program that takes a string as input and counts the number of vowels (a, e, i, o, u) in it. Use a for loop to iterate over the characters of the string. You can assume that the input string is in lowercase.",
        question_title: "Counting the number of vowels in a string_1",
      },
      {
        answer_code:
          'def count_vowels(s):\n        # initialize a variable to store the vowel count\n        vowel_count = 0\n        \n        # write a for loop to iterate over the characters in s\n        for char in s:\n            # check if the character is a vowel\n            if char in "aeiou":\n                # increment the vowel count by 1\n                vowel_count += 1\n        \n        # return the vowel count\n        return vowel_count',
        answer_explanation:
          '- The function count_vowels takes a string s as an input and returns the number of vowels in that string.\n- The variable vowel_count is initialized to 0 and will store the final vowel count.\n- The for loop iterates over each character in the string s using the syntax `for char in s:`.\n- Inside the loop, the if statement checks if the current character is a vowel by using the membership operator `in` and the string "aeiou" which contains all the vowels.\n- If the character is a vowel, the vowel count is incremented by 1 using the assignment operator `+=`.\n- After the loop ends, the vowel count is returned using the return statement.',
        id: 2,
        question_code:
          "def count_vowels(s):\n        # initialize a variable to store the vowel count\n        vowel_count = 0\n        \n        # write a for loop to iterate over the characters in s\n        # TODO: complete the for loop\n        \n        # return the vowel count\n        return vowel_count",
        question_prompt:
          "Write a function that takes a string as an input and returns the number of vowels (a, e, i, o, u) in that string. You can assume that the input string is lowercase and does not contain any punctuation marks. Use a for loop to iterate over the characters in the string.\nquestion_code:\n\nPossible",
        question_title: "LeetCode_Classic interview",
      },
    ];
    setTestList(resDataList);
    return testList;
  }
};

export default QuizPage;
